"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protocol = exports.Transport = exports.Socket = exports.uServer = exports.parser = exports.transports = exports.Server = void 0;
exports.listen = listen;
exports.attach = attach;
const http_1 = require("http");
const server_1 = require("./server");
Object.defineProperty(exports, "Server", { enumerable: true, get: function () { return server_1.Server; } });
const index_1 = require("./transports/index");
exports.transports = index_1.default;
const parser = require("engine.io-parser");
exports.parser = parser;
var userver_1 = require("./userver");
Object.defineProperty(exports, "uServer", { enumerable: true, get: function () { return userver_1.uServer; } });
var socket_1 = require("./socket");
Object.defineProperty(exports, "Socket", { enumerable: true, get: function () { return socket_1.Socket; } });
var transport_1 = require("./transport");
Object.defineProperty(exports, "Transport", { enumerable: true, get: function () { return transport_1.Transport; } });
exports.protocol = parser.protocol;
/**
 * Creates an http.Server exclusively used for WS upgrades, and starts listening.
 *
 * @param port
 * @param options
 * @param listenCallback - callback for http.Server.listen()
 * @return engine.io server
 */
function listen(port, options, listenCallback) {
    if ("function" === typeof options) {
        listenCallback = options;
        options = {};
    }
    const server = (0, http_1.createServer)(function (req, res) {
        res.writeHead(501);
        res.end("Not Implemented");
    });
    // create engine server
    const engine = attach(server, options);
    engine.httpServer = server;
    server.listen(port, listenCallback);
    return engine;
}
/**
 * Captures upgrade requests for a http.Server.
 *
 * @param server
 * @param options
 * @return engine.io server
 */
function attach(server, options) {
    const engine = new server_1.Server(options);
    engine.attach(server, options);
    return engine;
}
