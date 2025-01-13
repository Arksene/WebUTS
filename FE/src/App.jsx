import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListNilai from "./components/listNilai";
import AddData from "./components/addData";
import UpdateData from "./components/editData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListNilai />} />
        <Route path="tambahData" element={<AddData />} />
        <Route path="nilai/:id" element={<UpdateData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
