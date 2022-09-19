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
    <div>
      {countriesToVisit.map((countryCode) => {
        const country = data.countries.find(
          (country: any) => country.code === countryCode
        );
        return (
          <div key={country.code} className="avatar">
            <div className=" text-5xl text-center justify-center p-2 ">
              {country.emoji}
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default VisitedCounties;
