import express from "express";
import {
  getnilaiMhs,
  createDataMhs,
  updatenilaiMhs,
  deletenilaiMhs,
  cekNPM,
  getnilaiMhsById,
} from "../controllers/nilaiMhs.js";

const router = express.Router();

router.get("/nilai", getnilaiMhs);
router.get("/nilai/cek-npm/:NPM", cekNPM);
router.post("/nilai", createDataMhs);
router.patch("/nilai/:id", updatenilaiMhs);
router.get("/nilai/:id", getnilaiMhsById);
router.delete("/nilai/:id", deletenilaiMhs);

export default router;
