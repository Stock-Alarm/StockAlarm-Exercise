import { useObjectVal } from "react-firebase-hooks/database";
import "./App.css";
import { Company } from "./Company";
import { CompanyItem } from "./components/CompanyItem";
import { database } from "./firebase";

function App() {
  const [companiesObj, isLoading] = useObjectVal(database.ref("/company"));

  console.log(companiesObj);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const companies = Object.values(
    (companiesObj as any as Record<string, Company>) || {}
  );

  return (
    <div className="app">
      {companies.map((company) => (
        <CompanyItem company={company} key={company.ticker} />
      ))}
    </div>
  );
}

export default App;
