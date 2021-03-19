const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3030;
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/public'));
app.set("views", path.join(__dirname, "views"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");
app.use("/", routes);

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`)
});
