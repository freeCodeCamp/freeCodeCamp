# socket.io
[![Run on Repl.it](https://repl.it/badge/github/socketio/socket.io)](https://replit.com/@socketio/socketio-minimal-example)
[![Backers on Open Collective](https://opencollective.com/socketio/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/socketio/sponsors/badge.svg)](#sponsors)
[![Build Status](https://github.com/socketio/socket.io/workflows/CI/badge.svg)](https://github.com/socketio/socket.io/actions)
[![NPM version](https://badge.fury.io/js/socket.io.svg)](https://www.npmjs.com/package/socket.io)
![Downloads](https://img.shields.io/npm/dm/socket.io.svg?style=flat)
[![](https://slackin-socketio.now.sh/badge.svg)](https://slackin-socketio.now.sh)

## Features

Socket.IO enables real-time bidirectional event-based communication. It consists of:

- a Node.js server (this repository)
- a [Javascript client library](https://github.com/socketio/socket.io-client) for the browser (or a Node.js client)

Some implementations in other languages are also available:

- [Java](https://github.com/socketio/socket.io-client-java)
- [C++](https://github.com/socketio/socket.io-client-cpp)
- [Swift](https://github.com/socketio/socket.io-client-swift)
- [Dart](https://github.com/rikulo/socket.io-client-dart)
- [Python](https://github.com/miguelgrinberg/python-socketio)
- [.NET](https://github.com/doghappy/socket.io-client-csharp)
- [Rust](https://github.com/1c3t3a/rust-socketio)
- [PHP](https://github.com/ElephantIO/elephant.io)

Its main features are:

#### Reliability

Connections are established even in the presence of:
  - proxies and load balancers.
  - personal firewall and antivirus software.

For this purpose, it relies on [Engine.IO](https://github.com/socketio/engine.io), which first establishes a long-polling connection, then tries to upgrade to better transports that are "tested" on the side, like WebSocket. Please see the [Goals](https://github.com/socketio/engine.io#goals) section for more information.

#### Auto-reconnection support

Unless instructed otherwise a disconnected client will try to reconnect forever, until the server is available again. Please see the available reconnection options [here](https://socket.io/docs/v3/client-api/#new-Manager-url-options).

#### Disconnection detection

A heartbeat mechanism is implemented at the Engine.IO level, allowing both the server and the client to know when the other one is not responding anymore.

That functionality is achieved with timers set on both the server and the client, with timeout values (the `pingInterval` and `pingTimeout` parameters) shared during the connection handshake. Those timers require any subsequent client calls to be directed to the same server, hence the `sticky-session` requirement when using multiples nodes.

#### Binary support

Any serializable data structures can be emitted, including:

- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) and [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) in the browser
- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) and [Buffer](https://nodejs.org/api/buffer.html) in Node.js

#### Simple and convenient API

Sample code:

```js
io.on('connection', socket => {
  socket.emit('request', /* … */); // emit an event to the socket
  io.emit('broadcast', /* … */); // emit an event to all connected sockets
  socket.on('reply', () => { /* … */ }); // listen to the event
});
```

#### Cross-browser

Browser support is tested in Sauce Labs:

[![Sauce Test Status](https://saucelabs.com/browser-matrix/socket.svg)](https://saucelabs.com/u/socket)

#### Multiplexing support

In order to create separation of concerns within your application (for example per module, or based on permissions), Socket.IO allows you to create several `Namespaces`, which will act as separate communication channels but will share the same underlying connection.

#### Room support

Within each `Namespace`, you can define arbitrary channels, called `Rooms`, that sockets can join and leave. You can then broadcast to any given room, reaching every socket that has joined it.

This is a useful feature to send notifications to a group of users, or to a given user connected on several devices for example.


**Note:** Socket.IO is not a WebSocket implementation. Although Socket.IO indeed uses WebSocket as a transport when possible, it adds some metadata to each packet: the packet type, the namespace and the ack id when a message acknowledgement is needed. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a WebSocket server (like `ws://echo.websocket.org`) either. Please see the protocol specification [here](https://github.com/socketio/socket.io-protocol).

## Installation

```bash
// with npm
npm install socket.io

// with yarn
yarn add socket.io
```

## How to use

The following example attaches socket.io to a plain Node.JS
HTTP server listening on port `3000`.

```js
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);
```

### Standalone

```js
const io = require('socket.io')();
io.on('connection', client => { ... });
io.listen(3000);
```

### Module syntax 

```js
import { Server } from "socket.io";
const io = new Server(server);
io.listen(3000);
```

### In conjunction with Express

Starting with **3.0**, express applications have become request handler
functions that you pass to `http` or `http` `Server` instances. You need
to pass the `Server` to `socket.io`, not the express application
function. Also make sure to call `.listen` on the `server`, not the `app`.

```js
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);
```

### In conjunction with Koa

Like Express.JS, Koa works by exposing an application as a request
handler function, but only by calling the `callback` method.

```js
const app = require('koa')();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);
```

### In conjunction with Fastify

To integrate Socket.io in your Fastify application you just need to
register `fastify-socket.io` plugin. It will create a `decorator`
called `io`.

```js
const app = require('fastify')();
app.register(require('fastify-socket.io'));
app.ready().then(() => {
    app.io.on('connection', () => { /* … */ });
})
app.listen(3000);
```

## Documentation

Please see the documentation [here](https://socket.io/docs/).

The source code of the website can be found [here](https://github.com/socketio/socket.io-website). Contributions are welcome!

## Debug / logging

Socket.IO is powered by [debug](https://github.com/visionmedia/debug).
In order to see all the debug output, run your app with the environment variable
`DEBUG` including the desired scope.

To see the output from all of Socket.IO's debugging scopes you can use:

```
DEBUG=socket.io* node myapp
```

## Testing

```
npm test
```
This runs the `gulp` task `test`. By default the test will be run with the source code in `lib` directory.

Set the environmental variable `TEST_VERSION` to `compat` to test the transpiled es5-compat version of the code.

The `gulp` task `test` will always transpile the source code into es5 and export to `dist` first before running the test.


## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/socketio#backer)]

<a href="https://opencollective.com/socketio/backer/0/website" target="_blank"><img src="https://opencollective.com/socketio/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/1/website" target="_blank"><img src="https://opencollective.com/socketio/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/2/website" target="_blank"><img src="https://opencollective.com/socketio/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/3/website" target="_blank"><img src="https://opencollective.com/socketio/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/4/website" target="_blank"><img src="https://opencollective.com/socketio/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/5/website" target="_blank"><img src="https://opencollective.com/socketio/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/6/website" target="_blank"><img src="https://opencollective.com/socketio/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/7/website" target="_blank"><img src="https://opencollective.com/socketio/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/8/website" target="_blank"><img src="https://opencollective.com/socketio/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/9/website" target="_blank"><img src="https://opencollective.com/socketio/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/10/website" target="_blank"><img src="https://opencollective.com/socketio/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/11/website" target="_blank"><img src="https://opencollective.com/socketio/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/12/website" target="_blank"><img src="https://opencollective.com/socketio/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/13/website" target="_blank"><img src="https://opencollective.com/socketio/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/14/website" target="_blank"><img src="https://opencollective.com/socketio/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/15/website" target="_blank"><img src="https://opencollective.com/socketio/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/16/website" target="_blank"><img src="https://opencollective.com/socketio/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/17/website" target="_blank"><img src="https://opencollective.com/socketio/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/18/website" target="_blank"><img src="https://opencollective.com/socketio/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/19/website" target="_blank"><img src="https://opencollective.com/socketio/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/20/website" target="_blank"><img src="https://opencollective.com/socketio/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/21/website" target="_blank"><img src="https://opencollective.com/socketio/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/22/website" target="_blank"><img src="https://opencollective.com/socketio/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/23/website" target="_blank"><img src="https://opencollective.com/socketio/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/24/website" target="_blank"><img src="https://opencollective.com/socketio/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/25/website" target="_blank"><img src="https://opencollective.com/socketio/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/26/website" target="_blank"><img src="https://opencollective.com/socketio/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/27/website" target="_blank"><img src="https://opencollective.com/socketio/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/28/website" target="_blank"><img src="https://opencollective.com/socketio/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/29/website" target="_blank"><img src="https://opencollective.com/socketio/backer/29/avatar.svg"></a>


## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/socketio#sponsor)]

<a href="https://opencollective.com/socketio/sponsor/0/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/1/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/2/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/3/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/4/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/5/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/6/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/7/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/8/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/9/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/10/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/11/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/12/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/13/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/14/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/15/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/16/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/17/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/18/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/19/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/20/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/21/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/22/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/23/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/24/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/25/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/26/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/27/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/28/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/29/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/29/avatar.svg"></a>


## License

[MIT](LICENSE)
