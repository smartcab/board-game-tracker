const Router = require('express').Router
module.exports = Router({mergeParams: true})
.post('/v1/library/:libraryId/games', async (req, res, next) => {
    try {
        const game = new req.db.Game({
            title: req.body.title,
            minPlayTime: req.body.minPlayTime,
            maxPlayTime: req.body.maxPlayTime,
            minNumPlayers: req.body.minNumPlayers,
            maxNumPlayers: req.body.maxNumPlayers
        })
        await game.save(function(err, game){
            if (err) throw err;
            req.db.Library.findOne({_id:req.params.libraryId}).exec(function(err, library){
                if (err) throw err;
                library.games.push(game.id);
                library.save(function(err, result) {
                    if (err) throw err;
                    res.setHeader('Location', `${req.base}${req.originalUrl}/${game.id}`);
                    res.status(201).send(game);
                })

            })
        })
    } catch (error) {
        next(error);
    }
})