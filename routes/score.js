const express = require("express");
const { scoreRegister } = require("../helpers/score.helper");

const score = express.Router();

score.use(function timeLog(req, res, next) {
  next();
});

score.post("/score", async (req, res) => {
  const rta = await scoreRegister(req.body);
  res.json(rta);
});

module.exports = {
  score,
};
