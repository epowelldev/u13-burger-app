const connection = require("./connection");

//make a function to slim down orm code
exectueQuery = function(query, callback) {
  connection.query(query, function(err, res) {
    if(err) throw err;
    callback(res)
  });
}

module.exports = {
  selectAll: function(tableInput, callback) {
    exectueQuery(`SELECT * FROM ${tableInput}`, callback)
  },

  insertOne: function(tableInput, condition, callback) {
    exectueQuery(`INSERT INTO ${tableInput} (burger_name) VALUE ("${condition}")`, callback);
  },

  updateOne: function(tableInput, condition, callback) {
    exectueQuery(`UPDATE ${tableInput} SET devoured=true WHERE id=${condition}`, callback);
  }
}
