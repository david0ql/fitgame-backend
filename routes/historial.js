const express = require("express");
const { historialReflejos, historialMemoria } = require("../helpers/historial.helper");

const historiales = express.Router();

historiales.use(function timeLog(req, res, next) {
    next();
});

historiales.get('/reflejos', async (req, res) => {
    const rta = await historialReflejos(req.query);
    res.json(rta);
});

historiales.get('/memoria', async (req, res) => {
    const rta = await historialMemoria(req.query);
    res.json(rta);
});

module.exports = {
    historiales,
};
