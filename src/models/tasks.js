const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  title: { type: String },
  ts: { type: String },
});

module.exports = mongoose.model("Task", Task);
