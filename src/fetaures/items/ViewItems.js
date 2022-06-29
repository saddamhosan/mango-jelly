import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { deleteMobiles } from "./ItemsSlice";

const ViewItems = () => {
  const [searchMobile, setSearchMobile] = useState([]);
  const mobiles = useSelector((state) => state.mobileReducer.mobiles);
  useEffect(() => {
    setSearchMobile(mobiles);
  }, [mobiles]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const searchMobile = mobiles.filter((mobile) =>
      mobile.brandName.includes(name)
    );
    setSearchMobile(searchMobile);
  };

  const handleDelete = (id) => {
    dispatch(deleteMobiles(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="text"
          name="name"
          placeholder="Search Your phone with brand name"
          className="border-2 rounded-md p-2 m-2 w-1/3"
        />
        <input
          type="submit"
          value="Search"
          className="border-2 rounded-md py-2 m-2 px-3 bg-slate-700 text-white font-bold"
        />
      </form>

      <div class="overflow-x-auto">
        <table class="table w-full text-center">
          <thead>
            <tr>
              <th>NO</th>
              <th>Brand Name</th>
              <th>RAM</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {mobiles &&
              searchMobile.map((mobile, index) => {
                const {
                  id,
                  brandName,
                  RAM,
                  description,
                  internalStorage,
                  screenSize,
                } = mobile;
                return (
                  <tr key={id}>
                    <th>{index + 1}</th>
                    <td>{brandName}</td>
                    <td>{RAM}</td>
                    <td>
                      <Link
                        to="/itemDetail"
                        state={{
                          id,
                          brandName,
                          RAM,
                          description,
                          internalStorage,
                          screenSize,
                        }}
                      >
                        <button className="btn btn-xs mx-2">Details</button>
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="/editItems"
                        state={{
                          id,
                          brandName,
                          RAM,
                          description,
                          internalStorage,
                          screenSize,
                        }}
                      >
                        <button className="text-2xl text-blue-500">
                          <AiFillEdit />
                        </button>
                      </Link>
                    </td>

                    <td>
                      <button
                        onClick={() => {
                          handleDelete(id);
                        }}
                        className="text-2xl text-red-600"
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewItems;
