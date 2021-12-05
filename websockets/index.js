const http = require('http');
const WebSocketServer = require('websocket').server ;
let connection = null

const httpserver = http.createServer((req, res) => {
    console.log('we have recieved a request');
})

const websocket = new WebSocketServer({
    "httpServer" : httpserver}
)

websocket.on('request', request => {

    connection = request.accept(null, request.origin)
    connection.on("onopen", e=> console.log("opened!!"))
    connection.on("onclose", e=> console.log("closed!!"))
    connection.on("onmessage", message => {
        console.log(`received message ${message}`)
    })

})

httpserver.listen(8080, ()=> console.log('my server is listening on port 8080'));