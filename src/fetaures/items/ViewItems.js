import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { Link, useNavigate } from "react-router-dom";
import { deleteMobiles } from "./ItemsSlice";

const ViewItems = () => {
    const navigate=useNavigate()
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
              <th>Action</th>
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
                        <button className="btn btn-xs mx-2">Edit</button>
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(id);
                        }}
                        className="btn btn-xs mx-2"
                      >
                        Delete
                      </button>
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
