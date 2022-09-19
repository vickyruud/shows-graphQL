import React from "react";
import { visitCountriesVar } from "../client/client";

const CountryItem = ({ country }: { country: any }) => {
  const handleOnClick = () => {
    console.log(country.visit);
    const visitCountries: any = visitCountriesVar();
    visitCountriesVar(
      country.visit
        ? visitCountries.filter(
            (countryCode: any) => countryCode !== country.code
          )
        : [...visitCountries, country.code]
    );
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <div className="text-5xl pl-2"> {country.emoji} </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country.name}</h2>
        <p> {country.capital ? `Capital: ${country.capital}` : null}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleOnClick}
            className="btn bg-teal-600 px-2 text-center"
          >
            {country.visit ? "Remove From " : "Add To "}
            itinerary
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
