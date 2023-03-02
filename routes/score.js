const express = require("express");
const { scoreRegister, scoreRegister2 } = require("../helpers/score.helper");

const score = express.Router();

score.use(function timeLog(req, res, next) {
  next();
});

score.post("/score", async (req, res) => {
  const rta = await scoreRegister(req.body);
  res.json(rta);
});

score.post("/score2", async (req, res) => {
  const rta = await scoreRegister2(req.body);
  console.log(rta)
  res.json(rta);
});

module.exports = {
  score,
};
