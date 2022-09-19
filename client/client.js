import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const cache = new InMemoryCache({
  //   typePolicies: {
  //     Character: {
  //       fields: {
  //         isSpaceshipPassenger: {
  //           read(_, { readField }) {
  //             const characterId = readField("id");
  //             const spaceshipPassengers = spaceshipPassengersVar();
  //             return spaceshipPassengers.includes(characterId);
  //           },
  //         },
  //       },
  //     },
  //   },
});

export const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache,
});
