const Router = require('express').Router
module.exports = Router({mergeParams: true})
   .get('/v1/games/:id', async (req, res, next) => {
    try {
        const games = await req.db.Game.findOne({_id:req.params.id})
        res.send(games)
    } catch (error) {
        next(error)
    }
})