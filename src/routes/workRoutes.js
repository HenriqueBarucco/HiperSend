import express from "express";
import WorkController from "../controllers/workController.js";

const router = express.Router();

router
    .get("/work", WorkController.listarTrabalho)
    .put("/work", WorkController.atualizarTrabalho)

export default router;