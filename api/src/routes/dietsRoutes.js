const { Router } = require('express');
const dietsRoutes = Router();

const getDietHandler = (req, res) => {
    res.status(200).send("NIY: ESTA RUTA TRAE LA INFO DE TODAS LAS DIETAS");
}

const createDietHandler = (req, res) => {
    res.status(200).send("NIY: ESTA RUTA CREA UNA NUEVA DIETA");
}

dietsRoutes.get("/", getDietHandler);

dietsRoutes.post("/", createDietHandler);

module.exports = dietsRoutes;