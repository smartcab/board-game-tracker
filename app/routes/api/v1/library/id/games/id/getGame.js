const Router = require('express').Router
module.exports = Router({mergeParams: true})
   .get('/v1/library/:libraryId/games/:gameId', async (req, res, next) => {
    try {
        const games = await req.db.Library.findOne({_id:req.params.libraryId})
            .then(library => library.games.id(req.params.gameId))
        res.send(games)
    } catch (error) {
        next(error)
    }
})