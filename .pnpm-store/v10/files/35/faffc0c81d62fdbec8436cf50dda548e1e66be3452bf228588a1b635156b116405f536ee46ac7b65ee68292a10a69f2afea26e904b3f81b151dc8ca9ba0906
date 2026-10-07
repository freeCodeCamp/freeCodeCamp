"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace = exports.Socket = exports.Server = void 0;
const http_1 = __importDefault(require("http"));
const fs_1 = require("fs");
const zlib_1 = require("zlib");
const accepts = require("accepts");
const stream_1 = require("stream");
const path = require("path");
const engine_io_1 = require("engine.io");
const client_1 = require("./client");
const events_1 = require("events");
const namespace_1 = require("./namespace");
Object.defineProperty(exports, "Namespace", { enumerable: true, get: function () { return namespace_1.Namespace; } });
const parent_namespace_1 = require("./parent-namespace");
const socket_io_adapter_1 = require("socket.io-adapter");
const parser = __importStar(require("socket.io-parser"));
const debug_1 = __importDefault(require("debug"));
const socket_1 = require("./socket");
Object.defineProperty(exports, "Socket", { enumerable: true, get: function () { return socket_1.Socket; } });
const typed_events_1 = require("./typed-events");
const uws_1 = require("./uws");
const cors_1 = __importDefault(require("cors"));
const debug = (0, debug_1.default)("socket.io:server");
const clientVersion = require("../package.json").version;
const dotMapRegex = /\.map/;
/**
 * Represents a Socket.IO server.
 *
 * @example
 * import { Server } from "socket.io";
 *
 * const io = new Server();
 *
 * io.on("connection", (socket) => {
 *   console.log(`socket ${socket.id} connected`);
 *
 *   // send an event to the client
 *   socket.emit("foo", "bar");
 *
 *   socket.on("foobar", () => {
 *     // an event was received from the client
 *   });
 *
 *   // upon disconnection
 *   socket.on("disconnect", (reason) => {
 *     console.log(`socket ${socket.id} disconnected due to ${reason}`);
 *   });
 * });
 *
 * io.listen(3000);
 */
class Server extends typed_events_1.StrictEventEmitter {
    constructor(srv, opts = {}) {
        super();
        /**
         * @private
         */
        this._nsps = new Map();
        this.parentNsps = new Map();
        /**
         * A subset of the {@link parentNsps} map, only containing {@link ParentNamespace} which are based on a regular
         * expression.
         *
         * @private
         */
        this.parentNamespacesFromRegExp = new Map();
        if ("object" === typeof srv &&
            srv instanceof Object &&
            !srv.listen) {
            opts = srv;
            srv = undefined;
        }
        this.path(opts.path || "/socket.io");
        this.connectTimeout(opts.connectTimeout || 45000);
        this.serveClient(false !== opts.serveClient);
        this._parser = opts.parser || parser;
        this.encoder = new this._parser.Encoder();
        this.opts = opts;
        if (opts.connectionStateRecovery) {
            opts.connectionStateRecovery = Object.assign({
                maxDisconnectionDuration: 2 * 60 * 1000,
                skipMiddlewares: true,
            }, opts.connectionStateRecovery);
            this.adapter(opts.adapter || socket_io_adapter_1.SessionAwareAdapter);
        }
        else {
            this.adapter(opts.adapter || socket_io_adapter_1.Adapter);
        }
        opts.cleanupEmptyChildNamespaces = !!opts.cleanupEmptyChildNamespaces;
        this.sockets = this.of("/");
        if (srv || typeof srv == "number")
            this.attach(srv);
        if (this.opts.cors) {
            this._corsMiddleware = (0, cors_1.default)(this.opts.cors);
        }
    }
    get _opts() {
        return this.opts;
    }
    serveClient(v) {
        if (!arguments.length)
            return this._serveClient;
        this._serveClient = v;
        return this;
    }
    /**
     * Executes the middleware for an incoming namespace not already created on the server.
     *
     * @param name - name of incoming namespace
     * @param auth - the auth parameters
     * @param fn - callback
     *
     * @private
     */
    _checkNamespace(name, auth, fn) {
        if (this.parentNsps.size === 0)
            return fn(false);
        const keysIterator = this.parentNsps.keys();
        const run = () => {
            const nextFn = keysIterator.next();
            if (nextFn.done) {
                return fn(false);
            }
            nextFn.value(name, auth, (err, allow) => {
                if (err || !allow) {
                    return run();
                }
                if (this._nsps.has(name)) {
                    // the namespace was created in the meantime
                    debug("dynamic namespace %s already exists", name);
                    return fn(this._nsps.get(name));
                }
                const namespace = this.parentNsps.get(nextFn.value).createChild(name);
                debug("dynamic namespace %s was created", name);
                fn(namespace);
            });
        };
        run();
    }
    path(v) {
        if (!arguments.length)
            return this._path;
        this._path = v.replace(/\/$/, "");
        const escapedPath = this._path.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        this.clientPathRegex = new RegExp("^" +
            escapedPath +
            "/socket\\.io(\\.msgpack|\\.esm)?(\\.min)?\\.js(\\.map)?(?:\\?|$)");
        return this;
    }
    connectTimeout(v) {
        if (v === undefined)
            return this._connectTimeout;
        this._connectTimeout = v;
        return this;
    }
    adapter(v) {
        if (!arguments.length)
            return this._adapter;
        this._adapter = v;
        for (const nsp of this._nsps.values()) {
            nsp._initAdapter();
        }
        return this;
    }
    /**
     * Attaches socket.io to a server or port.
     *
     * @param srv - server or port
     * @param opts - options passed to engine.io
     * @return self
     */
    listen(srv, opts = {}) {
        return this.attach(srv, opts);
    }
    /**
     * Attaches socket.io to a server or port.
     *
     * @param srv - server or port
     * @param opts - options passed to engine.io
     * @return self
     */
    attach(srv, opts = {}) {
        if ("function" == typeof srv) {
            const msg = "You are trying to attach socket.io to an express " +
                "request handler function. Please pass a http.Server instance.";
            throw new Error(msg);
        }
        // handle a port as a string
        if (Number(srv) == srv) {
            srv = Number(srv);
        }
        if ("number" == typeof srv) {
            debug("creating http server and binding to %d", srv);
            const port = srv;
            srv = http_1.default.createServer((req, res) => {
                res.writeHead(404);
                res.end();
            });
            srv.listen(port);
        }
        // merge the options passed to the Socket.IO server
        Object.assign(opts, this.opts);
        // set engine.io path to `/socket.io`
        opts.path = opts.path || this._path;
        this.initEngine(srv, opts);
        return this;
    }
    /**
     * Attaches socket.io to a uWebSockets.js app.
     * @param app
     * @param opts
     */
    attachApp(app /*: TemplatedApp */, opts = {}) {
        // merge the options passed to the Socket.IO server
        Object.assign(opts, this.opts);
        // set engine.io path to `/socket.io`
        opts.path = opts.path || this._path;
        // initialize engine
        debug("creating uWebSockets.js-based engine with opts %j", opts);
        const engine = new engine_io_1.uServer(opts);
        engine.attach(app, opts);
        // bind to engine events
        this.bind(engine);
        if (this._serveClient) {
            // attach static file serving
            app.get(`${this._path}/*`, (res, req) => {
                if (!this.clientPathRegex.test(req.getUrl())) {
                    req.setYield(true);
                    return;
                }
                const filename = req
                    .getUrl()
                    .replace(this._path, "")
                    .replace(/\?.*$/, "")
                    .replace(/^\//, "");
                const isMap = dotMapRegex.test(filename);
                const type = isMap ? "map" : "source";
                // Per the standard, ETags must be quoted:
                // https://tools.ietf.org/html/rfc7232#section-2.3
                const expectedEtag = '"' + clientVersion + '"';
                const weakEtag = "W/" + expectedEtag;
                const etag = req.getHeader("if-none-match");
                if (etag) {
                    if (expectedEtag === etag || weakEtag === etag) {
                        debug("serve client %s 304", type);
                        res.writeStatus("304 Not Modified");
                        res.end();
                        return;
                    }
                }
                debug("serve client %s", type);
                res.writeHeader("cache-control", "public, max-age=0");
                res.writeHeader("content-type", "application/" + (isMap ? "json" : "javascript") + "; charset=utf-8");
                res.writeHeader("etag", expectedEtag);
                const filepath = path.join(__dirname, "../client-dist/", filename);
                (0, uws_1.serveFile)(res, filepath);
            });
        }
        (0, uws_1.patchAdapter)(app);
    }
    /**
     * Initialize engine
     *
     * @param srv - the server to attach to
     * @param opts - options passed to engine.io
     * @private
     */
    initEngine(srv, opts) {
        // initialize engine
        debug("creating engine.io instance with opts %j", opts);
        this.eio = (0, engine_io_1.attach)(srv, opts);
        // attach static file serving
        if (this._serveClient)
            this.attachServe(srv);
        // Export http server
        this.httpServer = srv;
        // bind to engine events
        this.bind(this.eio);
    }
    /**
     * Attaches the static file serving.
     *
     * @param srv http server
     * @private
     */
    attachServe(srv) {
        debug("attaching client serving req handler");
        const evs = srv.listeners("request").slice(0);
        srv.removeAllListeners("request");
        srv.on("request", (req, res) => {
            if (this.clientPathRegex.test(req.url)) {
                if (this._corsMiddleware) {
                    this._corsMiddleware(req, res, () => {
                        this.serve(req, res);
                    });
                }
                else {
                    this.serve(req, res);
                }
            }
            else {
                for (let i = 0; i < evs.length; i++) {
                    evs[i].call(srv, req, res);
                }
            }
        });
    }
    /**
     * Handles a request serving of client source and map
     *
     * @param req
     * @param res
     * @private
     */
    serve(req, res) {
        const filename = req.url.replace(this._path, "").replace(/\?.*$/, "");
        const isMap = dotMapRegex.test(filename);
        const type = isMap ? "map" : "source";
        // Per the standard, ETags must be quoted:
        // https://tools.ietf.org/html/rfc7232#section-2.3
        const expectedEtag = '"' + clientVersion + '"';
        const weakEtag = "W/" + expectedEtag;
        const etag = req.headers["if-none-match"];
        if (etag) {
            if (expectedEtag === etag || weakEtag === etag) {
                debug("serve client %s 304", type);
                res.writeHead(304);
                res.end();
                return;
            }
        }
        debug("serve client %s", type);
        res.setHeader("Cache-Control", "public, max-age=0");
        res.setHeader("Content-Type", "application/" + (isMap ? "json" : "javascript") + "; charset=utf-8");
        res.setHeader("ETag", expectedEtag);
        Server.sendFile(filename, req, res);
    }
    /**
     * @param filename
     * @param req
     * @param res
     * @private
     */
    static sendFile(filename, req, res) {
        const readStream = (0, fs_1.createReadStream)(path.join(__dirname, "../client-dist/", filename));
        const encoding = accepts(req).encodings(["br", "gzip", "deflate"]);
        const onError = (err) => {
            if (err) {
                res.end();
            }
        };
        switch (encoding) {
            case "br":
                res.writeHead(200, { "content-encoding": "br" });
                (0, stream_1.pipeline)(readStream, (0, zlib_1.createBrotliCompress)(), res, onError);
                break;
            case "gzip":
                res.writeHead(200, { "content-encoding": "gzip" });
                (0, stream_1.pipeline)(readStream, (0, zlib_1.createGzip)(), res, onError);
                break;
            case "deflate":
                res.writeHead(200, { "content-encoding": "deflate" });
                (0, stream_1.pipeline)(readStream, (0, zlib_1.createDeflate)(), res, onError);
                break;
            default:
                res.writeHead(200);
                (0, stream_1.pipeline)(readStream, res, onError);
        }
    }
    /**
     * Binds socket.io to an engine.io instance.
     *
     * @param engine engine.io (or compatible) server
     * @return self
     */
    bind(engine) {
        // TODO apply strict types to the engine: "connection" event, `close()` and a method to serve static content
        //  this would allow to provide any custom engine, like one based on Deno or Bun built-in HTTP server
        this.engine = engine;
        this.engine.on("connection", this.onconnection.bind(this));
        return this;
    }
    /**
     * Called with each incoming transport connection.
     *
     * @param {engine.Socket} conn
     * @return self
     * @private
     */
    onconnection(conn) {
        // @ts-expect-error use of private
        debug("incoming connection with id %s", conn.id);
        const client = new client_1.Client(this, conn);
        if (conn.protocol === 3) {
            // @ts-expect-error use of private
            client.connect("/");
        }
        return this;
    }
    /**
     * Looks up a namespace.
     *
     * @example
     * // with a simple string
     * const myNamespace = io.of("/my-namespace");
     *
     * // with a regex
     * const dynamicNsp = io.of(/^\/dynamic-\d+$/).on("connection", (socket) => {
     *   const namespace = socket.nsp; // newNamespace.name === "/dynamic-101"
     *
     *   // broadcast to all clients in the given sub-namespace
     *   namespace.emit("hello");
     * });
     *
     * @param name - nsp name
     * @param fn optional, nsp `connection` ev handler
     */
    of(name, fn) {
        if (typeof name === "function" || name instanceof RegExp) {
            const parentNsp = new parent_namespace_1.ParentNamespace(this);
            debug("initializing parent namespace %s", parentNsp.name);
            if (typeof name === "function") {
                this.parentNsps.set(name, parentNsp);
            }
            else {
                this.parentNsps.set((nsp, conn, next) => next(null, name.test(nsp)), parentNsp);
                this.parentNamespacesFromRegExp.set(name, parentNsp);
            }
            if (fn) {
                // @ts-ignore
                parentNsp.on("connect", fn);
            }
            return parentNsp;
        }
        if (String(name)[0] !== "/")
            name = "/" + name;
        let nsp = this._nsps.get(name);
        if (!nsp) {
            for (const [regex, parentNamespace] of this.parentNamespacesFromRegExp) {
                if (regex.test(name)) {
                    debug("attaching namespace %s to parent namespace %s", name, regex);
                    return parentNamespace.createChild(name);
                }
            }
            debug("initializing namespace %s", name);
            nsp = new namespace_1.Namespace(this, name);
            this._nsps.set(name, nsp);
            if (name !== "/") {
                // @ts-ignore
                this.sockets.emitReserved("new_namespace", nsp);
            }
        }
        if (fn)
            nsp.on("connect", fn);
        return nsp;
    }
    /**
     * Closes server connection
     *
     * @param [fn] optional, called as `fn([err])` on error OR all conns closed
     */
    async close(fn) {
        await Promise.allSettled([...this._nsps.values()].map(async (nsp) => {
            nsp.sockets.forEach((socket) => {
                socket._onclose("server shutting down");
            });
            await nsp.adapter.close();
        }));
        this.engine.close();
        // restore the Adapter prototype, when the Socket.IO server was attached to a uWebSockets.js server
        (0, uws_1.restoreAdapter)();
        if (this.httpServer) {
            return new Promise((resolve) => {
                this.httpServer.close((err) => {
                    fn && fn(err);
                    if (err) {
                        debug("server was not running");
                    }
                    resolve();
                });
            });
        }
        else {
            fn && fn();
        }
    }
    /**
     * Registers a middleware, which is a function that gets executed for every incoming {@link Socket}.
     *
     * @example
     * io.use((socket, next) => {
     *   // ...
     *   next();
     * });
     *
     * @param fn - the middleware function
     */
    use(fn) {
        this.sockets.use(fn);
        return this;
    }
    /**
     * Targets a room when emitting.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an array of rooms (a client will be notified at most once)
     * io.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.to("room-101").to("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room) {
        return this.sockets.to(room);
    }
    /**
     * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * // disconnect all clients in the "room-101" room
     * io.in("room-101").disconnectSockets();
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room) {
        return this.sockets.in(room);
    }
    /**
     * Excludes a room when emitting.
     *
     * @example
     * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     * io.except("room-101").emit("foo", "bar");
     *
     * // with an array of rooms
     * io.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.except("room-101").except("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room) {
        return this.sockets.except(room);
    }
    /**
     * Sends a `message` event to all clients.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * io.send("hello");
     *
     * // this is equivalent to
     * io.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        // This type-cast is needed because EmitEvents likely doesn't have `message` as a key.
        // if you specify the EmitEvents, the type of args will be never.
        this.sockets.emit("message", ...args);
        return this;
    }
    /**
     * Sends a `message` event to all clients. Alias of {@link send}.
     *
     * @return self
     */
    write(...args) {
        // This type-cast is needed because EmitEvents likely doesn't have `message` as a key.
        // if you specify the EmitEvents, the type of args will be never.
        this.sockets.emit("message", ...args);
        return this;
    }
    /**
     * Sends a message to the other Socket.IO servers of the cluster.
     *
     * @example
     * io.serverSideEmit("hello", "world");
     *
     * io.on("hello", (arg1) => {
     *   console.log(arg1); // prints "world"
     * });
     *
     * // acknowledgements (without binary content) are supported too:
     * io.serverSideEmit("ping", (err, responses) => {
     *  if (err) {
     *     // some servers did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per server (except the current one)
     *   }
     * });
     *
     * io.on("ping", (cb) => {
     *   cb("pong");
     * });
     *
     * @param ev - the event name
     * @param args - an array of arguments, which may include an acknowledgement callback at the end
     */
    serverSideEmit(ev, ...args) {
        return this.sockets.serverSideEmit(ev, ...args);
    }
    /**
     * Sends a message and expect an acknowledgement from the other Socket.IO servers of the cluster.
     *
     * @example
     * try {
     *   const responses = await io.serverSideEmitWithAck("ping");
     *   console.log(responses); // one response per server (except the current one)
     * } catch (e) {
     *   // some servers did not acknowledge the event in the given delay
     * }
     *
     * @param ev - the event name
     * @param args - an array of arguments
     *
     * @return a Promise that will be fulfilled when all servers have acknowledged the event
     */
    serverSideEmitWithAck(ev, ...args) {
        return this.sockets.serverSideEmitWithAck(ev, ...args);
    }
    /**
     * Gets a list of socket ids.
     *
     * @deprecated this method will be removed in the next major release, please use {@link Server#serverSideEmit} or
     * {@link Server#fetchSockets} instead.
     */
    allSockets() {
        return this.sockets.allSockets();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * io.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    compress(compress) {
        return this.sockets.compress(compress);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.volatile.emit("hello"); // the clients may or may not receive it
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get volatile() {
        return this.sockets.volatile;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients on this node
     * io.local.emit("foo", "bar");
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local() {
        return this.sockets.local;
    }
    /**
     * Adds a timeout in milliseconds for the next operation.
     *
     * @example
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @param timeout
     */
    timeout(timeout) {
        return this.sockets.timeout(timeout);
    }
    /**
     * Returns the matching socket instances.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // return all Socket instances
     * const sockets = await io.fetchSockets();
     *
     * // return all Socket instances in the "room1" room
     * const sockets = await io.in("room1").fetchSockets();
     *
     * for (const socket of sockets) {
     *   console.log(socket.id);
     *   console.log(socket.handshake);
     *   console.log(socket.rooms);
     *   console.log(socket.data);
     *
     *   socket.emit("hello");
     *   socket.join("room1");
     *   socket.leave("room2");
     *   socket.disconnect();
     * }
     */
    fetchSockets() {
        return this.sockets.fetchSockets();
    }
    /**
     * Makes the matching socket instances join the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     *
     * // make all socket instances join the "room1" room
     * io.socketsJoin("room1");
     *
     * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
     * io.in("room1").socketsJoin(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsJoin(room) {
        return this.sockets.socketsJoin(room);
    }
    /**
     * Makes the matching socket instances leave the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances leave the "room1" room
     * io.socketsLeave("room1");
     *
     * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
     * io.in("room1").socketsLeave(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsLeave(room) {
        return this.sockets.socketsLeave(room);
    }
    /**
     * Makes the matching socket instances disconnect.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
     * io.disconnectSockets();
     *
     * // make all socket instances in the "room1" room disconnect and close the underlying connections
     * io.in("room1").disconnectSockets(true);
     *
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(close = false) {
        return this.sockets.disconnectSockets(close);
    }
}
exports.Server = Server;
/**
 * Expose main namespace (/).
 */
const emitterMethods = Object.keys(events_1.EventEmitter.prototype).filter(function (key) {
    return typeof events_1.EventEmitter.prototype[key] === "function";
});
emitterMethods.forEach(function (fn) {
    Server.prototype[fn] = function () {
        return this.sockets[fn].apply(this.sockets, arguments);
    };
});
module.exports = (srv, opts) => new Server(srv, opts);
module.exports.Server = Server;
module.exports.Namespace = namespace_1.Namespace;
module.exports.Socket = socket_1.Socket;
