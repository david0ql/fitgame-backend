const express = require("express");
const { historialReflejos, historialMemoria } = require("../helpers/historial.helper");

const historiales = express.Router();

historiales.use(function timeLog(req, res, next) {
    next();
});

historiales.get('/reflejos', async (req, res) => {

});

historiales.get('/memoria', async (req, res) => {

});

module.exports = {
    historiales,
};
