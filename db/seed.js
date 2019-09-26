const ToDo = require("../models/todo");
const seeds = require("./seeds.json");

ToDo.deleteMany({})
  .then(() => {
    return ToDo.insertMany(seeds);
  })
  .then(() => {
    console.log("WE GOT DATA");
    process.exit();
  });
