const Router = require('express').Router
module.exports = Router({mergeParams: true})
.post('/v1/library/', async (req, res, next) => {
    try {
        const library = new req.db.Library({
            name: req.body.name
        })
        await library.save(); 
        const location = `${req.base}${req.originalUrl}/library/${library.id}`
        res.setHeader('Location', location)
        res.status(201).send(library)
    } catch(error) {
        next(error)
    }
})