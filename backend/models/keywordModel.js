const mongoose = require("mongoose");

const keywordSchema = mongoose.Schema({
  value: String
});

const Keyword = mongoose.model('Keyword', keywordSchema);

module.exports = Keyword;