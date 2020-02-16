const mongoose = require('mongoose')
const gameSchema = require('./Game')
const librarySchema = mongoose.Schema({
    name: String,
    games: [gameSchema]
})

module.exports = librarySchema