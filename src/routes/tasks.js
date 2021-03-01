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

router.post("/", function (req, res) {
  task.create(req, res);
});

router.put("/:id", function (req, res) {
  task.update(req, res);
});

router.get("/", function (req, res) {
  task.list(req, res);
});

router.delete("/:id", (req, res) => {
  task.delete(req, res);
});

router.get('/:id', (req,res)=>{
  task.getOne(req,res);
})
module.exports = router;
