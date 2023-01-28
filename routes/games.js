const express = require("express");
const {
  insertReflejos,
  insertMemoria,
  obtenerJuegoMemoria,
  obtenerJuegoReflejos
} = require("../helpers/insertar_juego");

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.get('/', (req, res) => {
console.log("connected");

});
// obtener todos los juegos
router.get("/juegoReflejos", async function (req, res) {
console.log(req.body);
  const rta = await obtenerJuegoReflejos();
  res.json(rta);
});

router.get("/juegoMemoria", async function (req, res) {
  const rta = await obtenerJuegoMemoria();
  res.json(rta);
});

// insertar los reflejos
router.post("/reflejos", async function (req, res) {
  const rta = await insertReflejos(req.body);
  res.json(rta);
});

//insertar la memoria
router.post("/memoria", async function (req, res) {
  const rta = await insertMemoria(req.body);
  res.json(rta);
});

module.exports = {
  router,
};
