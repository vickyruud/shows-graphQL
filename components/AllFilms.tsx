import { gql, useQuery } from "@apollo/client";

import { All_FILMS } from '../graphql/getall'

export const AllFilms = () => {


  
  const { data, loading, error } = useQuery(All_FILMS);

  console.log({ data })
  if (error) console.log(error)

  if(loading) console.log(loading)
  
  return (
    <div>
      <span><p>Hello</p></span>
    </div>
  );
}