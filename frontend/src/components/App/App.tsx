import { useObjectVal } from "react-firebase-hooks/database";
import "./App.css";
import { Company } from "../../Company";
import { CompanyItem } from "../CompanyItem/CompanyItem";
import { database } from "../../firebase";

function App() {
    const [companiesObj, isLoading] = useObjectVal(database.ref("/company"));

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const companies = Object.values(
        (companiesObj as any as Record<string, Company>) || {}
    );

    return (
        <div className="app">
            <div className="container">
                <p className="container__header">Welcome to StockAlarm</p>
                {companies.map((company) => (
                    <CompanyItem company={company} key={company.ticker} />
                ))}
            </div>
        </div>
    );
}

export default App;
