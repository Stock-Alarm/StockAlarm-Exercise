import { checkAlarms } from "./checkAlarms";
import { Company } from "./Company";
import { database } from "./firebaseApp";

const priceDevelopmentInterval = 5;

const alterAllPrices = async () => {
  const companiesRef = database.ref("company");
  const companiesSnapshot = await companiesRef.once("value");
  const companies: Record<string, Company> = companiesSnapshot.val();

  await Promise.all(
    Object.values(companies).map(async (company) => {
      const percentChange = (10 - Math.random() * 20) / 100; // Between -0.1 and 0.1
      await database
        .ref(`company/${company.ticker}/stockPrice`)
        .set(company.stockPrice * (1 + percentChange));
    })
  );

  await checkAlarms();
};

setInterval(alterAllPrices, priceDevelopmentInterval * 1000);
