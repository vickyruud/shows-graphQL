import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const visitCountriesVar = makeVar([]);

const cache = new InMemoryCache({
  typePolicies: {
    Country: {
      fields: {
        visit: {
          read(_, { readField }) {
            const countryCode = readField("code");
            const visitCountries = visitCountriesVar();
            return visitCountries.includes(countryCode);
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache,
});
