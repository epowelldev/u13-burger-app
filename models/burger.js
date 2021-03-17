const orm = require("../config/orm");

const burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(response) {
      callback(response);
    });
  },

  insertOne: function(columns, values, callback) {
    orm.insertOne("burgers", columns, values, function(response) {
      callback(response);
    });
  },

  updateOne: function(objectColumnsValues, condition, callback) {
    orm.updateOne("burgers", objectColumnsValues, condition, function(response) {
      callback(response);
    });
  }
}

module.exports = burger;
