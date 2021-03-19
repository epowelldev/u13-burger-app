const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.listBurgers(function(burger_data) {
    res.render("index", {burger_data});
  });
});

router.post("/orderBurger", function(req, res) {
  console.log(req.body);
  burger.orderBurger(req.body.burger_name, function(result) {
      res.json(result);
  });
});

router.put("/consumeBurger/:id", function(req, res) {
  burger.consumeBurger(req.params.id, function(result) {
    res.json(result)
  });
});

module.exports = router;
