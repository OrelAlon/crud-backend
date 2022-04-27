const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://orel:orel2310@express-orel.m9n1s.mongodb.net/backend?retryWrites=true&w=majority";

const connectDB = (url) => {};

mongoose.connect(connectionString);

module.exports = connectDB;
