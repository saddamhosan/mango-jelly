
import { useLocation } from 'react-router-dom';

const ItemDetails = () => {
    const location = useLocation();
    const{id, brandName, description, RAM, internalStorage, screenSize}=location.state
   
    return (
      <div className=" text-xl">
        <h1 className="text-center text-3xl font-bold mb-2">Mobile Details</h1>
        <table className='w-2/3 mx-auto text-left'>
          
          <tbody>
            <tr>
              <th>Id</th>
              <td>: {id}</td>
            </tr>
            <tr>
              <th>Brand Name</th>
              <td>: {brandName}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>: {description}</td>
            </tr>
            <tr>
              <th>RAM</th>
              <td>: {RAM}</td>
            </tr>
            <tr>
              <th>Internal Storage</th>
              <td>: {internalStorage}</td>
            </tr>
            <tr>
              <th>Screen Size</th>
              <td>: {screenSize}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default ItemDetails;