const Router = require('express').Router
module.exports = Router({mergeParams: true})
.get('/v1/helloWorld', async (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
})