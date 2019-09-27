const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "hbs");
app.use('/assets', express.static('assets'));

app.use(parser.urlencoded({
  extended: true
}));
app.use(methodOverride("_method"));

const todosController = require("./controllers/todos");
app.use("/", todosController);

app.listen(3000, () => {
  console.log("running on port 3000!");
});

//test
