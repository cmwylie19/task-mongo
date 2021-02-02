const path = require("path");
const Task = require("../models/tasks");

exports.create = function (req, res) {
  var newTask = new Task(req.body);
  console.log(req.body);
  newTask.save(function (err) {
    if (err) {
      res.status(400).send("Unable to save task to database");
    } else {
      // res.redirect("/tasks/gettask");
      res.send(`added task`);
    }
  });
};

exports.list = function (req, res) {
  Task.find({}).exec(function (err, tasks) {
    if (err) {
      return res.send(500, err);
    }
    res.send({
      tasks: tasks,
    });
  });
};