const express = require("express");
const { loginUser } = require("../helpers/login.helper");

const login = express.Router();

login.use(function timeLog(req, res, next) {
    next();
});

login.post('/', async (req, res) => {
    const rta = await loginUser(req.body);
    res.json(rta);
});

module.exports = {
    login,
};
