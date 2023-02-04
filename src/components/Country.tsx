import React from "react";
import { CountryType } from "../types";
interface ICountry {
  country: CountryType;
}

const Country = (props: ICountry) => {
  return (
    <div>
      {props.country.name} /<span>{props.country.capital}</span> /
      <span>{props.country.languages[0].name}</span>
    </div>
  );
};

export default Country;
