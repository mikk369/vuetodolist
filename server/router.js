const express = require("express");
const router = express.Router();
const exampleTodos = [
  {
    title: "Vii prügi välja",
    status: "ACTIVE",
  },
  {
    title: "Tee midagi",
    status: "ACTIVE",
  },
  {
    title: "Käi poes",
    status: "COMPLETE",
  },
];

router.get("/calc", function (req, res) {
  const a = 4;
  const b = 4;
  const result = a + b;
  res.send({ result });
});

// request === req ja response === res
router.get("/get-todos", function (request, response) {
  response.send(exampleTodos);
});

router.post("/add-todo", function (request, response) {
  console.log(request.body);
  exampleTodos.push(request.body);
  response.send("done");
});

module.exports = router;
