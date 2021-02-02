const express = require("express");
const router = express.Router();
const task = require("../controllers/tasks");

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});


router.get("/", function (req, res) {
  res.send("Hello")
});

router.post("/addtask", function (req, res) {
  // res.send(req.body)
  task.create(req, res);
});

router.get("/gettask", function (req, res) {
  task.list(req, res);
});

module.exports = router;
