const { connection } = require("../conexion/conexion");

const loginUser = (params) => {
    return new Promise((resolve, reject) => {
        const { usuario, clave } =
            params;
        connection.query(
            "SELECT * FROM login WHERE usuario = ? AND clave = ?",
            [usuario, clave],
            function (error, results, fields) {
                resolve(results);
                reject(error);
            }
        );
    });
};


module.exports = {
    loginUser
};
