import express from "express";
import WorkController from "../controllers/workController.js";

const router = express.Router();

router.use(express.json());

router
  .get("/api/work", WorkController.listarTrabalho)
  .put("/api/work/:day", WorkController.atualizarTrabalho);

export default router;
