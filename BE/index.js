import express from "express";
import cors from "cors";
import nilaiMhsRoutes from "./routes/nilaiMhsRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(nilaiMhsRoutes);
app.listen(5000, () => console.log("Server Runing...."));
