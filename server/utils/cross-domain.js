module.exports = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD')
  res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Content-Type, Authorization, Content-Length, X-Requested-With')
  if ('OPTIONS' === req.method) {
    res.sendStatus(200) //respond with 200
  }
  else {
    next() //move on
  }
}
