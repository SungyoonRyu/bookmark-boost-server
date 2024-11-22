const mongoose = require('mongoose')

const bookmarkSchema = new mongoose.Schema({
    url: String,
    name: String
}, {
    versionKey: false
})

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark