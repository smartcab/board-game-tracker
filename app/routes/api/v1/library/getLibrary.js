const Router = require('express').Router
module.exports = Router({mergeParams: true})
.get('/v1/library/:libraryId', async (req, res, next) => {
    try{
        await req.db.Library.findOne({_id:req.params.libraryId})
        .exec(function(err, result){
            if (err) { throw err;}
            res.send(result);
    });
    } catch(error){
        next(error);
    }
    
})