const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  value: { type: String, required: true },
  books: Array
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;