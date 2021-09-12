import { useObjectVal } from "react-firebase-hooks/database";
import "./App.css";
import { Company } from "../../Company";
import { CompanyItem } from "../CompanyItem/CompanyItem";
import { CompanyPage } from "../CompanyPage/CompanyPage";
import { database } from "../../firebase";
import { Switch, Route, Redirect } from 'react-router-dom';


function App() {
    const [companiesObj, isLoading] = useObjectVal(database.ref("/company"));

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const companies = Object.values(
        (companiesObj as any as Record<string, Company>) || {}
    );

    return (
        <Switch>
            <Route path="/company/:ticker" render={(props) => {
                const ticker = props.match.params.ticker;
                const data = companies.find(item => item.ticker === ticker);
                if (data) {
                    return <CompanyPage {...data} />
                }
                return <Redirect to="/" />
            }}  />
            <div className="app">
                <div className="container">
                    <p className="container__header">Welcome to StockAlarm</p>
                    {companies.map((company) => (
                        <CompanyItem company={company} key={company.ticker} />
                    ))}
                </div>
            </div>
        </Switch>
    );
}

export default App;
