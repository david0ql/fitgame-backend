const { connection } = require("../conexion/conexion");

const registerUser = (params) => {
  return new Promise((resolve, reject) => {
    const { correo, clave, usuario } =
      params;
    connection.query(
      "INSERT INTO login (usuario, clave, correo) VALUES (?, ?, ?)",
      [usuario, clave, correo],
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};


module.exports = {
  registerUser,
};
