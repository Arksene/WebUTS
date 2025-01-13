import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddData = () => {
  const [NPM, setNPM] = useState("");
  const [Nama, setNama] = useState("");
  const [IPK, setIPK] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const checkIfNpmExists = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/nilai/cek/${NPM}`
      );
      if (response.data) {
        setErrorMessage("NPM sudah terdaftar!");
        return true;
      }
      setErrorMessage("");
      return false;
    } catch (error) {
      setErrorMessage("Terjadi kesalahan saat mengecek NPM.");
      return false;
    }
  };

  const SaveData = async (e) => {
    e.preventDefault();
    if (!NPM || !Nama || !IPK) {
      setErrorMessage("Semua field harus diisi!");
      return; // Jika ada field yang kosong, hentikan proses
    }

    const npmExists = await checkIfNpmExists();
    if (npmExists) return;

    try {
      await axios.post("http://localhost:5000/nilai", {
        NPM,
        Nama,
        IPK,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage("NPM UDH TERDAFTAR!!!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 shadow-lg w-50 bg-dark text-light border-color-danger border border-info">
        <h2 className="text-center mb-4">Tambah Data Mahasiswa</h2>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form onSubmit={SaveData} className="form-floating">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={NPM}
              style={{
                backgroundColor: "transparent",
                color: "white",
              }}
              onChange={(e) => setNPM(e.target.value)}
            />
            <label>NPM</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={Nama}
              style={{
                backgroundColor: "transparent",
                color: "white",
              }}
              onChange={(e) => setNama(e.target.value)}
            />
            <label className="form-label fw-bold">Nama</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan IPK"
              value={IPK}
              style={{
                backgroundColor: "transparent",
                color: "white",
              }}
              onChange={(e) => setIPK(e.target.value)}
            />
            <label className="form-label fw-bold">IPK</label>
          </div>
          <div className="d-flex mb-3 justify-content-end">
            <button type="submit" className="btn btn-outline-success ps-4 pe-4">
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddData;
