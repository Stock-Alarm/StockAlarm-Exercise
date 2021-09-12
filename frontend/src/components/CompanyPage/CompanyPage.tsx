import "./CompanyPage.css";
import { Company } from "../../Company";
import { useEffect } from "react";

export const CompanyPage = (company: Company) => {
    return (
        <div className="company-page">
            <div className="company-page__container">
                <div className="row" style={{ marginBottom: '8px' }}>
                    <p className="company-page__name">{company.name} <span className="company-page__ticker">({company.ticker})</span></p>
                </div>
                <div className="row" style={{ marginBottom: '40px' }}>
                    <p className="company-page__stock-price">€{company.stockPrice}</p>
                </div>
                <div className="row" style={{ marginBottom: '16px' }}><p className="company-page__alarm-text">Alarms</p></div>
                <div className="row"></div>
                <div className="row justify-center"><button className="company-page__alarm-button">+ Add alarm</button></div>
            </div>
        </div>
    );
}