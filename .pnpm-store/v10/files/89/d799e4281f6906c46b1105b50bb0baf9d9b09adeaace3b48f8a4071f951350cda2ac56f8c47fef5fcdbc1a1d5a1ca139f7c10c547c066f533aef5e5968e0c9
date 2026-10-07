'use strict';

const createWebSocketStream = require('./lib/stream');
const extension = require('./lib/extension');
const PerMessageDeflate = require('./lib/permessage-deflate');
const Receiver = require('./lib/receiver');
const Sender = require('./lib/sender');
const subprotocol = require('./lib/subprotocol');
const WebSocket = require('./lib/websocket');
const WebSocketServer = require('./lib/websocket-server');

WebSocket.createWebSocketStream = createWebSocketStream;
WebSocket.extension = extension;
WebSocket.PerMessageDeflate = PerMessageDeflate;
WebSocket.Receiver = Receiver;
WebSocket.Sender = Sender;
WebSocket.Server = WebSocketServer;
WebSocket.subprotocol = subprotocol;
WebSocket.WebSocket = WebSocket;
WebSocket.WebSocketServer = WebSocketServer;

module.exports = WebSocket;
