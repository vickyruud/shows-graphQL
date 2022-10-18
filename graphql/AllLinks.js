import { gql } from "@apollo/client";

export const ALL_LINKS = gql`
query AllLinks  {
  feed{
    id
    url
    description
  }
}
`;