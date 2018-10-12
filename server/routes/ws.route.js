const express = require('express')
const router = express.Router()
const expressWs = require('express-ws')

const Events = {
    PLAY_KEY: 'key:play'
}

const extendWs = require('../prototypes/ws.prototype')

const wsErrorHandler = (err) => {
    if (err) console.error("ws-error", err)
}

const errorThrow = (err, ws) => {
    console.error(err)
    if (ws) {
        if (ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify({
                error: err
            }), wsErrorHandler)
        }
    }
}

const sockets = []

module.exports = (app) => {
    expressWs(app)

    app.ws('/', (ws, req) => {
        extendWs(ws)

        try {
          if (sockets.indexOf(ws) < 0) sockets.push(ws)

          ws.on('message', (message = '') => {
            sockets.forEach(socket => {
              if (socket != ws) {
                socket.send(message)
              }
            })
          })

          ws.on('close', () => {
            sockets.splice(sockets.findIndex(ws), 1)
          })
        }
        catch (ex) {
            console.error(ex)
        }
    })
}
