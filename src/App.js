import { Route, Routes } from "react-router-dom";
import AddItems from "./component/AddItems";
import Home from "./component/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addItems" element={<AddItems/>}/>
      </Routes>
    </div>
  );
}

export default App;
