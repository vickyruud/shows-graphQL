import { v4 as uuidv4 } from 'uuid';
import { OneLink } from './OneLink';


export const ArrayOfLinks = ({ links, setSelectedUrl, handleEdit }: { links: any,handleEdit: any, setSelectedUrl: any }) => {
  
const arrayOfLinks = links.map((link: any, i: any) => {
    return (
    <OneLink key={(i)} link={link} handleClick={handleEdit} />
    )
  })

  return (
    <div>
      {arrayOfLinks}
    </div>
  );
}