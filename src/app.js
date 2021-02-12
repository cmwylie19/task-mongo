const express = require("express");
const app = express();
const router = express.Router();
const db = require("./db");
const tasks = require("./routes/tasks");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8081;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.get('/new-feature', (req,res)=>{
  res.send("This is a new feature!\nX-forwarded-for: "+ req.headers["x-forwarded-for"]+"\nRemote Address: "+req.connection.remoteAddress)
})
app.use("/tasks", tasks);
app.get("/callback", (req, res) => {
  res.send(JSON.stringify(req.headers, undefined, 2));
});
app.listen(port, () => {
  console.log(`App listening on ${port}!`);
});
