const { connection } = require("../conexion/conexion");

const recordReflejos = () => {
    return new Promise((resolve, reject) => {
        connection.query(
            "select * from reflejos WHERE correo != '' ORDER BY puntaje DESC",
            [],
            function (error, results, fields) {
                resolve(results);
                reject(error);
            }
        );
    });
};

const recordMemoria = () => {
    return new Promise((resolve, reject) => {
        connection.query(
            "select * from memoria WHERE correo != '' ORDER BY puntaje DESC",
            [],
            function (error, results, fields) {
                resolve(results);
                reject(error);
            }
        );
    });
};


module.exports = {
    recordReflejos,
    recordMemoria
};
