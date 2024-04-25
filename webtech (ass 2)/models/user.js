const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  Comment: String
});


module.exports = mongoose.model('User', userSchema);
