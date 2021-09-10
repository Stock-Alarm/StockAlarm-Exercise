import React from "react";
import { Company } from "../Company";

interface IProps {
  company: Company;
}

export const CompanyItem = ({ company }: IProps) => {
  return (
    <div>
      <p>{company.name}</p>
      <p>{company.ticker}</p>
      <p>€{company.stockPrice}</p>
    </div>
  );
};
