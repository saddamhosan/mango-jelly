import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import { addMobiles } from "./ItemsSlice";

const AddItems = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ram, setRam] = useState("");
  const [internalStorage, setInternalStorage] = useState("");
  const [screenSize, setScreenSize] = useState("");

  const dispatch = useDispatch();
  const navigate= useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const mobile = {
      id: uuidv4(),
      brandName: name,
      description,
      RAM: ram,
      internalStorage,
      screenSize,
    };
    console.log(mobile);
    dispatch(addMobiles(mobile));
    navigate('/')
  };
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Add Items</h1>
      <form onSubmit={handleSubmit} className="w-1/3 mx-auto">
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            className="border-2 rounded-xl w-full p-2 mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={ram}
            onChange={(e) => setRam(e.target.value)}
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
        <input type="submit" value="Add Item" className="btn btn-md my-2 font-bold" />
      </form>
    </div>
  );
};

export default AddItems;
