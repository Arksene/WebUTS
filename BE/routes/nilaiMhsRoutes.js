import express from "express";
import {
  getnilaiMhs,
  createDataMhs,
  updatenilaiMhs,
  deletenilaiMhs,
} from "../controllers/nilaiMhs.js";

const router = express.Router();

router.get("/", getnilaiMhs);
router.post("/", createDataMhs);
router.patch("/:NPM", updatenilaiMhs);
router.delete("/:NPM", deletenilaiMhs);

export default router;
