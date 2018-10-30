'use strict';

const WebSocket = require('./lib/websocket');

WebSocket.Server = require('./lib/websocket-server');
WebSocket.Receiver = require('./lib/receiver');
WebSocket.Sender = require('./lib/sender');

module.exports = WebSocket;
