const path = require("path");
const Task = require("../models/tasks");

// Add Friend

// delete friend

// add active

// delete active
exports.delete = (req, res) => {
  Task.deleteOne({ _id: req.body._id }).exec((err, result) => {
    if (err) {
      res.send(400, err);
    }
    res.send(result);
  });
};

exports.create = function (req, res) {
  var newTask = new Task(req.body);
  console.log(req.body);
  newTask.save(function (err) {
    if (err) {
      res.status(400).send(err + " Unable to save task to database");
    } else {
      // res.redirect("/tasks/gettask");
      res.send(`added task`);
    }
  });
};

exports.update = (req, res) => {
  Task.updateOne(
    { _id: req.body._id },
    { $set: { ts: Date.now().toString(), title: req.body.title } },
    { runValidators: true }
  ).exec((err, result) => {
    if (err) {
      res.send(400, err);
    }
    res.send(result);
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
