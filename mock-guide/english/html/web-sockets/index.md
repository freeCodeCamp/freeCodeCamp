---
title: WebSockets
---

## WebSockets

*Web Sockets* is a technology that allows you to create an interactive connection between a client and a server for exchanging data in real time. WebSockets allow you to work in two streams, which distinguishes this technology from HTTP.

## How do WebSockets work?

WebSockets do not need repeated calls to respond. It is enough to make one request and wait for a response. You can listen to the server, which will send the answer on readiness.

## When can I use WebSockets?

* Real-Time Applications
* Chat application
* IoT applications
* Multiplayer games


## When not to use WebSockets?

WebSockets are already supported in 95% of browsers, but sometimes this technology is not required. For example, if you are creating a simple CMS where real-time functionality is not required.

## WebSocket Example
> Frontend (No need for an import, WebSockets are supported by [every major browser])
```javascript
const ws = new WebSocket('ws://localhost:3000');

ws.onmessage = function(e){
    console.log('Message received from WebSocket');
    const parsedData = JSON.parse(e.data);
    handleData(parsedData);
};

ws.onopen = function(){
    console.log('Websocket open');
}
```

> Backend (uses [ws](https://github.com/websockets/ws) and [express](https://expressjs.com/), the most common WebSocket client web framework for NodeJS)
```javascript
const SocketServer = require('ws').Server;
const router = require('express').Router();

const server = express()
    .use('/', router)
    .listen(3000, () => console.log('Listening on 3000'));

const wss = new SocketServer({ server });
```

## Learn more
[Official Mozilla API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
