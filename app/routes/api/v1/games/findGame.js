const Router = require('express').Router
module.exports = Router({mergeParams: true})
.post('/v1/games/find', async (req, res, next) => {
    try {
        const games = await req.db.Game.find()
        .then(games => games.filter(game => {
            let numPlayers = req.body.numPlayers;
            let minutes = req.body.minutes;
            let canPlay = true;
            if (numPlayers) {
                canPlay &= game.canPlayWithNumberOfPlayers(numPlayers);
            }
            if (minutes) {
                canPlay &= game.canPlayIn(minutes);
            }
            return canPlay;
        }));
        res.send(games)
    } catch (error) {
        next(error)
    }
})