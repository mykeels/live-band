const express = require('express')
const bodyParser = require('body-parser')
const socketRoute = require('./routes/ws.route')

app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./utils/cross-domain'))

app.get('/', (req, res) => res.send('Live-Band-Relay-Server'))

socketRoute(app)

app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.send(err.toString())
})

if (require.main === module) {
    var listener = app.listen(process.env.PORT || 8081, function(){
        console.log('Listening on port ' + listener.address().port)
    })
}

module.exports = app
