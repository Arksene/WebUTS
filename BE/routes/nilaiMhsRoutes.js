import express from "express";
import {
  getnilaiMhs,
  createDataMhs,
  updatenilaiMhs,
  deletenilaiMhs,
} from "../controllers/nilaiMhs.js";

const router = express.Router();

router.get("/nilai", getnilaiMhs);
router.post("/nilai", createDataMhs);
router.patch("/nilai/:NPM", updatenilaiMhs);
router.delete("/nilai/:NPM", deletenilaiMhs);

export default router;
