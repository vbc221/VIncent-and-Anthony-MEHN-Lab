const mongoose = require("mongoose");
//we forgot to sya what ou rlocal host is lol i looked up the default and put this. with this we can check to see if the database will come up. when we start our server it should create one.
mongoose.connect("mongodb://localhost/27017/todo", {
  useNewUrlParser: true
}, () => {
  console.log("We connected!!!");
});

mongoose.Promise = Promise;
module.exports = mongoose;
