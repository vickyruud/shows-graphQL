import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { visitCountriesVar } from "../client/client";

export const GET_ITENARARY = gql`
  query {
    countries {
      name
      emoji
      capital
      languages {
        name
      }
      visit @client
      code
    }
  }
`;

const VisitedCounties = () => {
  const countriesToVisit = useReactiveVar(visitCountriesVar);

  const { data, loading, error } = useQuery(GET_ITENARARY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="grid grid-cols-10">
      {countriesToVisit.map((countryCode) => {
        const country = data.countries.find(
          (country: any) => country.code === countryCode
        );
        return (
          <div key={country.code}>
            <div className=" text-5xl  p-2 ">{country.emoji}</div>
            <h2>{country.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default VisitedCounties;
