const express = require("express");
const router = express.Router();
const task = require("../controllers/tasks");

router.use(function (req, res, next) {
  console.log("/" + req.method);
  console.log('x-forwarded-for: ',req.headers['x-forwarded-for'])
  console.log("Remote address: ", req.connection.remoteAddress)
  next();
});


router.get("/", function (req, res) {
  res.send("Hello")
});

router.post("/addtask", function (req, res) {
  // res.send(req.body)
  task.create(req, res);
});

router.put("/updatetask", function (req, res) {
  task.update(req, res);
});


router.get("/gettask", function (req, res) {
  task.list(req, res);
});

module.exports = router;
