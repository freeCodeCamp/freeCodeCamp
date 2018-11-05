---
title: WebSocket
---


# WebSocket
[WebSocket](https://www.websocket.org) is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The 
WebSocket protocol enables interaction between a web client (such as a browser) and a web server with lower overheads, 
facilitating real-time data transfer from and to the server. This is made possible by providing a standardized way for the 
server to send content to the client without being first requested by the client, and allowing messages to be passed back and 
forth while keeping the connection open. In this way, a two-way ongoing conversation can take place between the client and the 
server.

In [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), server can only respond to a request of client, it cannot send a response without client request. Although, WebSocket 
and HTTP are different but WebSocket has been designed such that they both are compatible.<sup>1</sup>


## WS
We will be using the [`ws`](https://www.npmjs.com/package/ws) module to implement webSocket in node.js.

### Installing
`npm install ws -g`

### Usage
#### Server
Lets create a server that sends a message to client when a connection is established, and logs message sent by the client.
```javascript
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('Message received: %s', message);
    });
    ws.send('Hello from server');
});
```
`new WebSocketServer({port: 8080})` starts a server on port no. 8080. Then the lines following are the callback functions. 
`function(ws)` is called once a connection is established with a client. `function(message)` is called when a client sends a 
message to the server.
Save the code in a file named `ws_server.js`.

#### Client
Use the code below to connect to the server
```javascript
var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8080/websockets/');

ws.on('open', function() {
    ws.send('Msg from client');
});
ws.on('message', function(data, flags) {
    console.log('Msg received in client: %s ', data);
});
```
`new WebSocket('ws://localhost:8080/websockets/')` establishes a connection with the server on port 8080, that we have created 
above. `ws.on('open', function() ` sends message to server when connection is established. The other function logs the message 
sent by the server.
Save the code in a file as `ws_client.js`.

Now lets run our code. Go to the directory in which you saved your file and run the following commands

**Server:**
`$ node ws_server.js`

**Client:**
`$ node ws_client.js`

From the output you can see that the server starts and is ready to accept connection. When the client starts it first establishes a connection with the server, then sends a message and listens for an incoming message from server. Once the connection is established between server and client, `ws.send()` is fired and messages are exchanged between both of them, and due to the asynchronous nature of `node.js`, both of them at the same time, are listening also.
 
 ## Reference
 - [Wiki page](https://en.wikipedia.org/wiki/WebSocket)
 - [Linode guide](https://www.linode.com/docs/development/introduction-to-websockets/)
