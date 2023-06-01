const mongoose = require("mongoose");

const keywordSchema = mongoose.Schema({
  value: { type: String, required: true },
  books: Array
});

const Keyword = mongoose.model('Keyword', keywordSchema);

module.exports = Keyword;