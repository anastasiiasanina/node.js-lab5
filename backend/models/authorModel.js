const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  value: String
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;