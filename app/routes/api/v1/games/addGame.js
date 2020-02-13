const Router = require('express').Router
module.exports = Router({mergeParams: true})
.post('/v1/games', async (req, res, next) => {
    try {
        const game = new req.db.Game({
            title: req.body.title,
            minPlayTime: req.body.minPlayTime,
            maxPlayTime: req.body.maxPlayTime,
            minNumPlayers: req.body.minNumPlayers,
            maxNumPlayers: req.body.maxNumPlayers
        })
        await game.save();
        const location = `${req.base}${req.originalUrl}/${game.id}`
        res.setHeader('Location', location)
        res.status(201).send(game)
    } catch(error) {
        next(error)
    }
})