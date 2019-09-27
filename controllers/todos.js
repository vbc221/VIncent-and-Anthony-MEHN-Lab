const express = require("express");
const router = express.Router();

const ToDo = require("../models/todo");

router.delete("/:id", (req, res) => {
  ToDo.findOneAndDelete({
    _id: req.params.id
  }).then(() => {
    res.redirect("/");
  });
});

router.post("/", (req, res) => {
  ToDo.create(req.body).then(todo => {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  ToDo.findOneAndUpdate({
    _id: req.params.id
  }, req.body).then(todo => {
    res.redirect("/");
  });
});

router.get("/", (req, res) => {
  ToDo.find({})
    .then(todos => {
      console.log("work?")
      res.render("index", {
        todos
      });
    })
    .catch(err => console.error(err));
});

router.get("/edit/:id", (req, res) => {
  ToDo.findOne({
    _id: req.params.id
  }).then(todo => {
    res.render("edit", todo);
  });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/:id", (req, res) => {
  ToDo.findOne({
      _id: req.params.id
    })
    .then(todo => {
      res.render("show", todo);
    })
    .catch(err => console.error(err));
});

module.exports = router;
