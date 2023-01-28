const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Jgomez21!',
  database : 'fitgame'
});
 
connection.connect();

module.exports = {
    connection
}
