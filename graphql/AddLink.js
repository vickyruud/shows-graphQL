import { gql } from "@apollo/client";

export const ADD_LINK = gql`
mutation ($url: String! , $description: String! ) {
  post(url: $url, description: $description) {
    id    
  }
}
`;