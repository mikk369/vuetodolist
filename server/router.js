const express = require("express");
const router = express.Router();

router.get("/calc", function (req, res) {
  const a = 4;
  const b = 4;
  const result = a + b;
  res.send({ result });
});

// request === req ja response === res
router.get("/get-todos", function (request, response) {
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

  response.send(exampleTodos);
});

module.exports = router;
