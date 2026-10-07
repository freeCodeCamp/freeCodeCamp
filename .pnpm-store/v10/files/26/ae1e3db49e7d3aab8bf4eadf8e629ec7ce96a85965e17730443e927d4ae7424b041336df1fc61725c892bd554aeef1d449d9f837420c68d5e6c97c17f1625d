import { transports as DEFAULT_TRANSPORTS } from "./transports/index.js";
import { installTimerFunctions, byteLength } from "./util.js";
import { decode } from "./contrib/parseqs.js";
import { parse } from "./contrib/parseuri.js";
import { Emitter } from "@socket.io/component-emitter";
import { protocol } from "engine.io-parser";
import { createCookieJar, defaultBinaryType, nextTick, } from "./globals.node.js";
const withEventListeners = typeof addEventListener === "function" &&
    typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", () => {
        OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
    }, false);
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
 * successfully establishes the connection.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithoutUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithUpgrade
 * @see Socket
 */
export class SocketWithoutUpgrade extends Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts) {
        super();
        this.binaryType = defaultBinaryType;
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        /**
         * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
         * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
         */
        this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            const parsedUri = parse(uri);
            opts.hostname = parsedUri.host;
            opts.secure =
                parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query)
                opts.query = parsedUri.query;
        }
        else if (opts.host) {
            opts.hostname = parse(opts.host).host;
        }
        installTimerFunctions(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t) => {
            const transportName = t.prototype.name;
            this.transports.push(transportName);
            this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024,
            },
            transportOptions: {},
            closeOnBeforeunload: false,
        }, opts);
        this.opts.path =
            this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = decode(this.opts.query);
        }
        if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this._offlineEventListener = () => {
                    this._onClose("transport close", {
                        description: "network connection lost",
                    });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
        }
        if (this.opts.withCredentials) {
            this._cookieJar = createCookieJar();
        }
        this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    _open() {
        if (this.transports.length === 0) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const transportName = this.opts.rememberUpgrade &&
            SocketWithoutUpgrade.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
            ? "websocket"
            : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this._onDrain.bind(this))
            .on("packet", this._onPacket.bind(this))
            .on("error", this._onError.bind(this))
            .on("close", (reason) => this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess =
            "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    _onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this._onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
        else {
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += byteLength(data);
            }
            if (i > 0 && payloadSize > this._maxPayload) {
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */ _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
            this._pingTimeoutTime = 0;
            nextTick(() => {
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options,
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
        const close = () => {
            this._onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports &&
            this.transports.length > 1 &&
            this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    _onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this._pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (withEventListeners) {
                if (this._beforeunloadEventListener) {
                    removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                }
                if (this._offlineEventListener) {
                    const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                    if (i !== -1) {
                        OFFLINE_EVENT_LISTENERS.splice(i, 1);
                    }
                }
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
}
SocketWithoutUpgrade.protocol = protocol;
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see Socket
 */
export class SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor() {
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) {
            for (let i = 0; i < this._upgrades.length; i++) {
                this._probe(this._upgrades[i]);
            }
        }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", (msg) => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    SocketWithoutUpgrade.priorWebsocketSuccess =
                        "websocket" === transport.name;
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err) => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 &&
            name !== "webtransport") {
            // favor WebTransport
            this.setTimeoutFn(() => {
                if (!failed) {
                    transport.open();
                }
            }, 200);
        }
        else {
            transport.open();
        }
    }
    onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for (let i = 0; i < upgrades.length; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * @example
 * import { Socket } from "engine.io-client";
 *
 * const socket = new Socket();
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see SocketWithUpgrade
 */
export class Socket extends SocketWithUpgrade {
    constructor(uri, opts = {}) {
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports ||
            (o.transports && typeof o.transports[0] === "string")) {
            o.transports = (o.transports || ["polling", "websocket", "webtransport"])
                .map((transportName) => DEFAULT_TRANSPORTS[transportName])
                .filter((t) => !!t);
        }
        super(uri, o);
    }
}
