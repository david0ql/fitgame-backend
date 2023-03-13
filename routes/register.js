const express = require("express");
const { registerUser } = require("../helpers/register.helper");

const register = express.Router();

register.use(function timeLog(req, res, next) {
    next();
});

register.post('/register', async (req, res) => {
    const rta = await registerUser(req.body);
    res.json(rta);
});

module.exports = {
    register,
};
