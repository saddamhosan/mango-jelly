import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ItemDetails from "./component/ItemDetails";
import Menu from "./component/Menu";
import AddItems from "./fetaures/items/AddItems";
import EditItems from './fetaures/items/EditItems';


function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addItems" element={<AddItems/>}/>
        <Route path="/editItems" element={<EditItems/>}/>
        <Route path="/itemDetail" element={<ItemDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
