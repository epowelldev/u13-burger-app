const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "burgers_db"
});

connection.connect((error) => {
  if(error) throw error;
  console.log("Connected as ID " + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;
