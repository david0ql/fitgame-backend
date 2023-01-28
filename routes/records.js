const express = require("express");
const { recordMemoria, recordReflejos } = require("../helpers/record.helper");

const records = express.Router();

records.use(function timeLog(req, res, next) {
    next();
});

records.get('/memoria', async (req, res) => {
    const rta = await recordMemoria()
    res.json(rta);
});

records.get('/reflejos', async (req, res) => {
    const rta = await recordReflejos()
    res.json(rta);
});
module.exports = {
    records,
};
