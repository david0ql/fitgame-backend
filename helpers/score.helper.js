const { connection } = require("../conexion/conexion");

const scoreRegister = (params) => {
  const { correo, id_reflejo } = params;
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE reflejos set correo = ? where id_reflejo = ?",
      [correo, id_reflejo],
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};

module.exports = {
  scoreRegister,
};
