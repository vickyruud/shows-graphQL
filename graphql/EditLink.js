import { gql } from "@apollo/client";

export const EDIT_LINK = gql`
mutation ($id:String!, $url: String! , $description: String! ) {
  updateLink(id:$id, url:$url, description:$description ) {
    id
    url
    description
  }
}
`;