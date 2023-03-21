import express from "express";
import work from "./workRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "HiperSend ;)" });
    });

    app.use(express.json(), work);
};

export default routes;