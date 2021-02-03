const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  title: { type: String, required: true },
  ts: { type: String, required: true },
});

module.exports = mongoose.model("Task", Task);
