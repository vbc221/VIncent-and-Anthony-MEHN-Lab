const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo", {
  useNewUrlParser: true
}, () => {
  console.log("We connected!!!");
});

mongoose.Promise = Promise;
module.exports = mongoose;
