const express = require("express"); // Web App Framework / http wrapper
const app = express(); // express
app.use(express.json());
// const server = require("http").createServer(app); // Http Library, Http Server Instance 생성
const port = process.env.PORT || 5000; // server port

const router = express.Router();
router.get(/^\/(node)\/.?/, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.originalUrl, "requested", new Date());
  next();
});
app.use("/", router);

app.get("/", (req, res) => {
  res.send("testing...");
});

let list = [{ index: 0, dpt: "node", name: "노드", pwd: "hello js" }];
app.get("/node", (req, res) => {
  res.send("some data is here");
});
app.get("/node/get", (req, res) => {
  res.send(list);
});
app.get("/node/reset", (req, res) => {
  list = [];
  res.send(list);
});
app.post("/node/add", (req, res) => {
  const data = req.body;
  console.log(data);
  list.push(data);
  res.send(list);
});
app.get("/node/del/:index", (req, res) => {
  const index = req.params.index;
  list = list.filter(e => e.index !== parseInt(index));
  res.send(list);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
// server.listen(port, () => console.log(`Listening on port ${port}`));
