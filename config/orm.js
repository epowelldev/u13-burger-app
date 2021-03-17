const connection = require("./connection");

module.exports = {
  selectAll(tableInput, callback) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      callback(res)
    });
  },

  insertOne(table, columns, values, callback) {
    const queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (${values.length})`;
    console.log(queryString);
    connection.query(queryString, value, (err, res) => {
      if(err) throw err;
      callback(res);
    });
  },

  updateOne(table, objectColumnsValues, condition, callback) {
    const queryString = `UPDATE ${table} SET ${objToSql(objectColumnsValues)} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if(err) throw err;
      callback(res);
    });
  }
}
