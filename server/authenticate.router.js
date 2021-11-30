const express = require("express");
const router = express.Router();
const { Users } = require("./dbConnection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = require("./config");

router.post("/register", async function (request, response) {
  try {
    if (request.body.password) {
      request.body.password = bcrypt.hashSync(request.body.password, 10);
    }
    await Users.create(request.body);
    response.send({ status: "All Good" });
  } catch (error) {
    console.error("register endpoint failed");
    response.status(500).send({ status: "Not good" });
  }
});

router.post("/login", async function (request, response) {
  try {
    const user = await Users.findOne({ email: request.body.email });
    if (user.password) {
      const isPasswordValid = bcrypt.compareSync(
        request.body.password,
        user.password
      );
      if (isPasswordValid) {
        const token = jwt.sign({ email: user.email }, SECRET, {
          expiresIn: "1h",
        });
        response.send({ token: "Bearer " + token });
      } else {
        throw "Not valid";
      }
    } else {
      throw "User does not exist";
    }
  } catch (error) {
    response.status(401).send({ status: "Not good" });
  }
});

module.exports = router;
