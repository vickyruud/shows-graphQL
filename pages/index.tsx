import type { NextPage } from "next";
import {useState, useEffect} from 'react'
import { ALL_LINKS } from "../graphql/AllLinks"
import { ADD_LINK } from "../graphql/AddLink"
import { EDIT_LINK } from '../graphql/EditLink'
import {useQuery, useMutation} from '@apollo/client'
import { ArrayOfLinks } from "../components/ArrayOfLinks";

const Home: NextPage = () => {

  const [allLinks, setAllLinks] = useState<any[]>([]);
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  
  const [editUrl, setEditUrl] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editID, setEditId] = useState('')

  const [selectedUrl, setSelectedUrl] = useState<any[]>({})
  const [edit, setEdit] = useState(false);




  const { data, error, loading } = useQuery(ALL_LINKS)

  const [addMutation, { data: mutatedData, error: mutationError }] = useMutation(ADD_LINK)

  const [editMutation, { data: editData, error: editError }] = useMutation(EDIT_LINK)



  

  const handleSubmit = (e: any) => {
    e.preventDefault();    
    addMutation({
      refetchQueries: ["AllLinks"],
      variables: {
        url: url,
        description: description
      }
    });
    setUrl('');
    setDescription('')
  }
  
  useEffect(() => {
    if (data) {
      setAllLinks(data.feed)      
    }
  }, [data])

  useEffect(() => {
    if (selectedUrl) {
      setEditId(selectedUrl.id)
      setEditUrl(selectedUrl.url)
      setEditDescription(selectedUrl.description)

    }
      

  }, [selectedUrl])

  const handleEdit = (link: any) => {
    console.log('here')
    setEdit(true);
    setSelectedUrl(link);
  }

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    editMutation({
      variables: {
        id: editID,
        url: editUrl,
        description: editDescription
      }
    })
    setEdit(false);
     setSelectedUrl({});
    setEditId('')
     setEditUrl('')
    setEditDescription('')


  }

  const cancelEdit = () => {
    setEdit(false);
    setSelectedUrl({});
    setEditId('')
     setEditUrl('')
    setEditDescription('')
    
  }


  

  if (mutationError) console.log(mutationError);

  return (
    <div>
      <div className="border-[#92c5dd]-700 border-4 rounded-[16px] mb-[16px] py-[24px] px-6 mx-5">
        <h1 className="text-2xl font-semibold ">Practice GQL</h1>      
      </div>     
      <ArrayOfLinks links={allLinks} setSelectedUrl={setSelectedUrl} handleEdit={handleEdit} />
      <form onSubmit={handleSubmit}className="flex gap-6 m-5">
        <label>Url</label>
        <input onChange={(e) => setUrl(e.target.value)}  value={url} type="text" name="link" className="border-4" />
        <label>Description</label>
        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="description" className="border-4" />
        <button type="submit">Submit</button>        
      </form>
      {edit && (  <form onSubmit={handleEditSubmit}className="flex gap-6 m-5">
        <label>Url</label>
        <input onChange={(e) => setEditUrl(e.target.value)}  value={editUrl} type="text" name="link" className="border-4" />
        <label>Description</label>
        <input onChange={(e) => setEditDescription(e.target.value)} value={editDescription} type="text" name="description" className="border-4" />
        <button type="submit">Update Link</button>
        <button type="button" onClick={() => setEdit(false)}>Cancel</button>        
        
      </form>)}
    </div>
  );
};

export default Home;
