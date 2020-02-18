const mongoose = require('mongoose')
const librarySchema = mongoose.Schema({
    name: String,
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }]
})

module.exports = librarySchema