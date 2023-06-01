const mongoose = require("mongoose");

const bookNameSchema = mongoose.Schema({
  value: { type: String, required: true },
  keywords: Array
});

const BookName = mongoose.model('BookName', bookNameSchema);

module.exports = BookName;