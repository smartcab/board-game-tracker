const Router = require('express').Router
module.exports = Router({mergeParams: true})
.get('/v1/library/:libraryId', async (req, res, next) => {
    try {
        const library = await req.db.Library.findOne({_id:req.params.libraryId});
        res.send(library)
    } catch (error) {
        next(error)
    }
})