const mongoose = require('mongoose')
const gameSchema = mongoose.Schema({
    title: String,
    minPlayTime: Number,
    maxPlayTime: Number,
    minNumPlayers: Number,
    maxNumPlayers: Number
})

gameSchema.methods.canPlayWithNumberOfPlayers = function (numberOfPlayers) {
    return this.minNumPlayers <= numberOfPlayers && this.maxNumPlayers >= numberOfPlayers;
};

gameSchema.methods.canPlayIn = function (minutes) {
    return this.minPlayTime <= minutes;
};

module.exports = gameSchema