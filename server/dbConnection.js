const mongoose = require("mongoose");
const { Todos } = require("./models/TodoSchema");
const { Users } = require("./models/UsersSchema");

// Connecting to database
mongoose.connect(
  "mongoDB URl",
  { useNewUrlParser: true }
);

module.exports = {
  Todos,
  Users,
};
