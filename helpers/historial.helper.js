const { connection } = require("../conexion/conexion");

const historialReflejos = (params) => {
    const {correo} = params;
    return new Promise((resolve, reject) => {
        connection.query(
            "select * from reflejos WHERE correo = ? ORDER BY puntaje DESC",
            [correo],
            function (error, results, fields) {
                resolve(results);
                reject(error);
            }
        );
    });
};

const historialMemoria = (params) => {
    const {correo} = params;
    return new Promise((resolve, reject) => {
        connection.query(
            "select * from memoria WHERE correo = ? ORDER BY puntaje DESC",
            [correo],
            function (error, results, fields) {
                resolve(results);
                reject(error);
            }
        );
    });
};


module.exports = {
    historialReflejos,
    historialMemoria
};
