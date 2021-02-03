const express = require("express");
const app = express();
const router = express.Router();
const db = require("./db");
const tasks = require("./routes/tasks");
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080;

app.use(bodyParser({ type: 'application/*+json' }))
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", tasks);
app.get("/application/healthz", (req,res)=>{res.send(JSON.stringify(req.headers,undefined,2))})
app.listen(port, function () {
  console.log(`App listening on ${port}!`);
});
