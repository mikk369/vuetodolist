const mongoose = require("mongoose");
const { Todos } = require("./models/TodoSchema");
const { Users } = require("./models/UsersSchema");

// Connecting to database
mongoose.connect(
  "mongodb+srv://test:test@cluster0.rogo5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

module.exports = {
  Todos,
  Users,
};
