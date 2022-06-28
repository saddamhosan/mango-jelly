
import { useLocation } from 'react-router-dom';

const ItemDetails = () => {
    const location = useLocation();
    const{id, brandName, description, RAM, internalStorage, screenSize}=location.state
   
    return (
      <div className="text-center text-xl">
        <h1 className='text-3xl font-bold mb-2'>Mobile Details</h1>
        <p>
          <span className="font-bold">Id:</span> {id}
        </p>
        <p className="text-2xl font-bold">Brand Name:{brandName}</p>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
        <p><span className="font-bold">RAM:</span> {RAM}</p>
        <p><span className="font-bold">Internal Storage:</span> {internalStorage}</p>
        <p><span className="font-bold">Screen Size:</span> {screenSize}</p>
      </div>
    );
};

export default ItemDetails;