const mongoose = require('mongoose')
const gameSchema = mongoose.Schema({
    title: String,
    minPlayTime: Number,
    maxPlayTime: Number,
    minNumPlayers: Number,
    maxNumPlayers: Number
})
module.exports = gameSchema