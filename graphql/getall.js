import { gql } from "@apollo/client";

export const All_FILMS = gql`
   query Query {
    allFilms{

      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;