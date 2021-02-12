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
  newTask.save(function (err,data) {
    if (err) {
      res.status(400).send(err + " Unable to save task to database");
    } else {
      // res.redirect("/tasks/gettask");
      res.send(data);
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

exports.listOne = function (req, res) {
  Task.find({_id:req.params.id}).exec(function (err, tasks) {
    if (err) {
      return res.send(500, err);
    }
    res.send({
      tasks: tasks,
    });
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
