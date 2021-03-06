const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const userSchema = new Schema(
  {
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,

}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;