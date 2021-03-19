const orm = require("../config/orm");

module.exports = {
  listBurgers: (callback) => {
    orm.selectAll("burgers", callback);
  },

  orderBurger: (name, callback) => {
    orm.insertOne("burgers", name, callback);
  },

  consumeBurger: (id, callback) => {
    orm.updateOne("burgers", id, callback);
  }
}
