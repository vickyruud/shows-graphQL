import React from "react";
import { gql, useQuery } from "@apollo/client";
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
    }
  }
`;

const Countries = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="grid grid-cols-fill-auto gap-[20px]">
      {data.countries.map((country: any, i: any) => (
        <CountryItem key={i} country={country} />
      ))}
    </div>
  );
};

export default Countries;
