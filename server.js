const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// const routes = require("./controllers/burgers_controller");
// app.use("/", routes);

app.get("/", function(req, res){
  res.render("home");
})

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`)
});
