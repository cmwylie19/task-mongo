const express = require("express");
const router = express.Router();
const task = require("../controllers/tasks");

router.use(function (req, res, next) {
  console.log("/" + req.method);
  console.log("x-forwarded-for: ", req.headers["x-forwarded-for"]);
  console.log("Remote address: ", req.connection.remoteAddress);
  console.log("Request Path: ", req.path);
  next();
});

const express = require("express");
const router = express.Router();
const task = require("../controllers/tasks");

router.use(function (req, res, next) {
  console.log("/" + req.method);
  console.log("x-forwarded-for: ", req.headers["x-forwarded-for"]);
  console.log("Remote address: ", req.connection.remoteAddress);
  console.log("Request Path: ", req.path);
  next();
});

router.get("/", function (req, res) {
  res.send("Hello");
});

router.post("/", function (req, res) {
  task.create(req, res);
});

router.put("/", function (req, res) {
  task.update(req, res);
});

router.get("/gettask", function (req, res) {
  task.list(req, res);
});

router.delete("/deletetask", (req, res) => {
  task.delete(req, res);
});
router.get("/:id", function (req, res) {
  task.listOne(req, res);
});
module.exports = router;


