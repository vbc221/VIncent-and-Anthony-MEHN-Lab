const mongoose = require("../db/connection");

const ToDoSchema = new mongoose.Schema({
  title: String,
  complete: Boolean
});

const ToDo = mongoose.model("Todo", ToDoSchema);

module.exports = ToDo;
