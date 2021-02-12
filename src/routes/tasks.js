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

<<<<<<< HEAD
router.get("/", function (req, res) {
  res.send("Hello");
});

=======
>>>>>>> 06d1f4c68b1a53cb974a685b5e4583a037d72be4
router.post("/", function (req, res) {
  task.create(req, res);
});

router.put("/", function (req, res) {
  task.update(req, res);
});

router.get("/", function (req, res) {
  task.list(req, res);
});

router.get("/:id", function (req, res) {
  task.listOne(req, res);
});

router.delete("/", (req, res) => {
  task.delete(req, res);
});
module.exports = router;
