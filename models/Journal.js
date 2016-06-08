const mongoose = require('mongoose');

var journalSchema = new mongoose.Schema({
    name: String,
    sub_name: String,
    blurb: String,
    uri: String
});

var Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;