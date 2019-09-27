const mongoose = require("../db/connection");

const ToDoSchema = new mongoose.Schema({
  title:String,
  name:String,
  description: String,
  instructions:String,
  ingredients:String
});

const ToDo = mongoose.model("Todo", ToDoSchema);

module.exports = ToDo;
