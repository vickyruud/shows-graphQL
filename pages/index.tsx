import type { NextPage } from "next";
import { v4 as uuidv4 } from 'uuid';
import {useState, useEffect} from 'react'
import { ALL_LINKS } from "../graphql/AllLinks"
import {UPDATE_LINK} from "../graphql/UpdateLink"
import {useQuery, useMutation} from '@apollo/client'

const Home: NextPage = () => {

  const [url, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [allLinks, setAllLinks] = useState<any[]>([]);

  const { data, error, loading } = useQuery(ALL_LINKS)

  const [updateMutation, { data: mutatedData, error: mutationError }] = useMutation(UPDATE_LINK)
  

  const handleSubmit = (e: any) => {
    e.preventDefault();    
    updateMutation({
      refetchQueries: ["AllLinks"],
      variables: {
        url: url,
        description: description
      }
    });
    setLink('');
    setDescription('')
  }
  
  useEffect(() => {
    if (data) {
      setAllLinks(data.feed)      
    }
  }, [data])


  const arrayOfLinks = allLinks.map((link, i) => {
    return (
      <div key={uuidv4()} className="border-4 mb-5 p-2">
        <div > URL: {link.url}</div>
        <div>Description: {link.description}</div>        
      </div>
    )
  })

  if (mutationError) console.log(mutationError);

  return (
    <div>
      <div className="border-[#92c5dd]-700 border-4 rounded-[16px] mb-[16px] py-[24px] px-6 mx-5">
        <h1 className="text-2xl font-semibold ">Practice GQL</h1>      
      </div>     
      {arrayOfLinks}
      <form onSubmit={handleSubmit}className="flex gap-6">
        <label>Url</label>
        <input onChange={(e) => setLink(e.target.value)}  value={url} type="text" name="link" className="border-4" />
        <label>Description</label>
        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="description" className="border-4" />
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
};

export default Home;
