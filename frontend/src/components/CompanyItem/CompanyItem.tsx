import React from "react";
import { Company } from "../../Company";
import "./CompanyItem.css";

interface IProps {
    company: Company;
}

export const CompanyItem = ({ company }: IProps) => {
    return (
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
    );
};
