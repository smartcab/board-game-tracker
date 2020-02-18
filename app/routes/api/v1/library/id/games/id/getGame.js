const Router = require('express').Router
module.exports = Router({mergeParams: true})
   .get('/v1/library/:libraryId/games/:gameId', async (req, res, next) => {
    try {
        await req.db.Library.findOne({_id:req.params.libraryId})
            .populate({
                path: 'games',
                match: { _id: req.params.gameId }
            }).exec(function(err, library){
                if (err) { throw err; }
                if (library && library.games && library.games.length > 0) {
                    res.send(library.games[0])
                } else {
                    res.status(404).send("Not Found")
                }
            });
    } catch (error) {
        next(error)
    }
})