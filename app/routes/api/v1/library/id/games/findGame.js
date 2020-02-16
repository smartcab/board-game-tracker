const Router = require('express').Router
const paramParser = require('../../../../../../../util/paramParser')
module.exports = Router({mergeParams: true})
.post('/v1/library/:libraryId/games/find', async (req, res, next) => {
    try {
        const games = await req.db.Library.findOne({_id:req.params.libraryId})
        .then(library => library.games.filter(game => {
            let numPlayers = paramParser.parseNumber("numPlayers", req.body.numPlayers);
            let minutes = paramParser.parseNumber("minutes", req.body.minutes);
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