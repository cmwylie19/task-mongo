const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const tasks = require('./routes/tasks');

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/tasks', tasks);
// app.get("/", (req,res)=>{res.send(req.headers)})
app.listen(port, function () {
  console.log(`App listening on ${port}!`)
})

