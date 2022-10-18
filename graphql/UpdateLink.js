import { gql } from "@apollo/client";

export const UPDATE_LINK = gql`
mutation ($url: String! , $description: String! ) {
  post(url: $url, description: $description) {
    id    
  }
}
`;