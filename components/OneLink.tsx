export const OneLink = ({link, handleClick}: { link: any, handleClick: any}) => {
  return (<>
    <div  className="border-4 m-5 p-2 flex flex-row gap-6"> 
        <div > ID: {link.id}</div>
        <div > URL: {link.url}</div>
        <div>Description: {link.description}</div>      
        <button onClick={() => handleClick(link)} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold p-2 rounded">Edit</button>
    </div>
        </> );
}