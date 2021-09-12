import { Company } from "../../Company";
import "./CompanyItem.css";
import { Link } from 'react-router-dom';

interface IProps {
    company: Company;
}

export const CompanyItem = ({ company }: IProps) => {

    return (
        <Link to={{ pathname: `/company/${company.ticker}` }} style={{ textDecoration: 'none' }}>
            <div className="row justify-center">
                <div className="company-item d-flex">
                    <div className="col-6">
                        <p className="company-item__name text-white p-5">{company.name}</p>
                        <p className="company-item__ticker text-grey p-5">{company.ticker}</p>
                    </div>
                    <div className="col-6 d-flex justify-end">
                        <p className="company-item__stock-price text-white align-self-center">€{company.stockPrice}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};