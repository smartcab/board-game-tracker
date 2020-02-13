const Router = require('express').Router
module.exports = Router({mergeParams: true})
.get('/v1/games', async (req, res, next) => {
    try {
        const games = await req.db.Game.find()
        res.send(games)
    } catch (error) {
        next(error)
    }
})