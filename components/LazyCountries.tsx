import React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import CountryItem from "./CountryItem";

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      emoji
      capital
      languages {
        name
      }
      code
      visit @client
    }
  }
`;

const LazyCountries = () => {
  const [getCountries, { loading, data, error }] = useLazyQuery(GET_COUNTRIES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return !data ? (
    <button className="btn bg-sky-500 mx-5" onClick={() => getCountries()}>
      Click to Load Countries
    </button>
  ) : (
    <div className="grid grid-cols-5 gap-4 px-5">
      {data.countries.map((country: any, i: any) => (
        <CountryItem key={i} country={country} />
      ))}
    </div>
  );
};

export default LazyCountries;
