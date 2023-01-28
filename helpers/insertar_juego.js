const { connection } = require("../conexion/conexion");

const insertReflejos = (params) => {
  return new Promise((resolve, reject) => {
    const { tiempo_segundos, calorias, puntaje, correo, numero_pulsaciones, numero_aciertos } =
      params;
    connection.query(
      "INSERT INTO reflejos (tiempo_segundos, calorias, puntaje, correo, numero_pulsaciones, numero_aciertos ) VALUES (?, ?, ?, ?, ?, ?) ",
      [tiempo_segundos, calorias, puntaje, correo, numero_pulsaciones, numero_aciertos],
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};

const insertMemoria = (params) => {
  return new Promise((resolve, reject) => {
    const { tiempo_segundos, calorias, puntaje, correo, numero_repeticiones} = params;
    connection.query(
        "INSERT INTO memoria (tiempo_segundos, calorias, puntaje, correo, numero_repeticiones ) VALUES (?, ?, ?, ?, ?) ",
        [tiempo_segundos, calorias, puntaje, correo, numero_repeticiones],
        function (error, results, fields) {
          resolve(results);
          reject(error);
        }
      );
  });
};

const obtenerJuegoReflejos = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM reflejos",
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};

const obtenerJuegoMemoria = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM memoria",
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};

module.exports = {
  insertReflejos,
  insertMemoria,
  obtenerJuegoMemoria,
  obtenerJuegoReflejos,
};
