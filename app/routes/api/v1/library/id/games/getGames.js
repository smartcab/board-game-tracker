const Router = require('express').Router
module.exports = Router({mergeParams: true})
.get('/v1/library/:libraryId/games', async (req, res, next) => {
    try {
        const library = await req.db.Library.findOne({_id:req.params.libraryId}).populate('games');
        res.send(library.games)
    } catch (error) {
        next(error)
    }
})