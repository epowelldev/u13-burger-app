const express = require("express");
const router = express.Router();
const burgers = require("../models/burger");

router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
});

// router.post();

// router.put();

module.exports = router;
