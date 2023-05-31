const mongoose = require("mongoose");

const bookNameSchema = mongoose.Schema({
  value: String
});

const BookName = mongoose.model('BookName', bookNameSchema);

module.exports = BookName;