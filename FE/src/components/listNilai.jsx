import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListNilai = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataMhs();
  }, []);
  const getDataMhs = async () => {
    const response = await axios.get("http://localhost:5000/nilai");
    setData(response.data);
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/nilai/${id}`);
      getDataMhs();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex justify-content-center vh-100 bg-dark ">
      <div className="w-50 bg-dark m-5 pt-3 rounded-4 shadow border border-info">
        <Link to={`tambahData`} className="btn btn-outline-info ms-3">
          Add Data
        </Link>
        <table className="table table-striped table-hover table-dark text-center pd-2">
          <thead className="table-dark bg-secondary-subtle text-center">
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">NPM</th>
              <th className="text-center">Nama</th>
              <th className="text-center">IPK</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody
            className="table-group-divider"
            style={{ borderTop: "3px solid white" }}
          >
            {data.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.NPM}</td>
                <td>{data.Nama}</td>
                <td>{data.IPK}</td>
                <td>
                  <Link
                    to={`nilai/${data.id}`}
                    className="btn btn-outline-warning me-2"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => deleteData(data.id)}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListNilai;
