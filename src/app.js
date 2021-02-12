const express = require("express");
const app = express();
const router = express.Router();
const db = require("./db");
const tasks = require("./routes/tasks");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.use("/tasks", tasks);
app.get("/callback", (req, res) => {
  res.send(JSON.stringify(req.headers, undefined, 2));
});
app.listen(port, () => {
  console.log(`App listening on ${port}!`);
});
