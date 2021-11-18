const express = require("express");
const app = express();
const port = 4111;
const routes = require("./router");
const bodyParser = require("body-parser");
const db = require("./dbConnection");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
