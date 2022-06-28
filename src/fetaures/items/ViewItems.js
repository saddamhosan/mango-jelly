import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { deleteMobiles } from "./ItemsSlice";

const ViewItems = () => {
  const mobiles = useSelector((state) => state.mobileReducer.mobiles);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteMobiles(id));
  };
  return (
    <div>
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
              mobiles.map((mobile, index) => {
                const {
                  id,
                  brandName,
                  RAM,
                  description,
                  internalStorage,
                  screenSize,
                } = mobile;
                return (
                  <tr>
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
