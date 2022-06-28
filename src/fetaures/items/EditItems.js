import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation, useNavigate } from "react-router-dom";
import { updateMobiles } from "./ItemsSlice";
const EditItems = () => {
    const location=useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [id,setId]=useState(location.state.id)
    const [brandName, setBrandName] = useState(location.state.brandName);
    const [description, setDescription] = useState(location.state.description);
    const [RAM, setRAM] = useState(location.state.RAM);
    const [internalStorage, setInternalStorage] = useState(
      location.state.internalStorage);
    const [screenSize, setScreenSize] = useState(location.state.screenSize);
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(
          updateMobiles({
            id,
            brandName,
            description,
            RAM,
            internalStorage,
            screenSize,
          })
        );
        navigate('/')
    }
    return (
      <div>
        <h1 className="text-3xl text-center font-bold">Edit Items</h1>
        <form onSubmit={handleSubmit} className="w-1/3 mx-auto">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              className="border-2 rounded-xl w-full p-2 mb-2"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <br />
            <input
              type="text"
              name="description"
              className="border-2 rounded-xl w-full p-2 mb-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="ram">RAM</label>
            <br />
            <input
              type="text"
              name="ram"
              className="border-2 rounded-xl w-full p-2 mb-2"
              value={RAM}
              onChange={(e) => setRAM(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="internalStorage">Internal Storage</label>
            <br />
            <input
              type="text"
              name="internalStorage"
              className="border-2 rounded-xl w-full p-2 mb-2"
              value={internalStorage}
              onChange={(e) => setInternalStorage(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="screenSize">Screen Size</label>
            <br />
            <input
              type="text"
              name="screenSize"
              className="border-2 rounded-xl w-full p-2 mb-2"
              value={screenSize}
              onChange={(e) => setScreenSize(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            value="Update Item"
            className="btn btn-md my-2 font-bold"
          />
        </form>
      </div>
    );
};

export default EditItems;