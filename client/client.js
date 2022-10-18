import { ApolloClient, InMemoryCache, makeVar, HttpLink } from "@apollo/client";

export const visitCountriesVar = makeVar([]);

const cache = new InMemoryCache({});

export const client = new ApolloClient({
  // uri: "https://countries.trevorblades.com/",
  // uri:"https://swapi-graphql.netlify.app/.netlify/functions/index",
  uri: 'http://localhost:5000/',
  fetchOptions: {
    mode: 'no-cors'
  }, 
  cache,
});

