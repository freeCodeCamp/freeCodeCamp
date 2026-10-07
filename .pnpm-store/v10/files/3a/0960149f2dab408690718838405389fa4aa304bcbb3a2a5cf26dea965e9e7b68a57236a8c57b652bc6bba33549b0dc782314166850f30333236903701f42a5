"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const events_1 = require("events");
const parser_v4 = require("engine.io-parser");
const parser_v3 = require("./parser-v3/index");
const debug_1 = require("debug");
const debug = (0, debug_1.default)("engine:transport");
function noop() { }
class Transport extends events_1.EventEmitter {
    get readyState() {
        return this._readyState;
    }
    set readyState(state) {
        debug("readyState updated from %s to %s (%s)", this._readyState, state, this.name);
        this._readyState = state;
    }
    /**
     * Transport constructor.
     *
     * @param {EngineRequest} req
     */
    constructor(req) {
        super();
        /**
         * Whether the transport is currently ready to send packets.
         */
        this.writable = false;
        /**
         * The current state of the transport.
         * @protected
         */
        this._readyState = "open";
        /**
         * Whether the transport is discarded and can be safely closed (used during upgrade).
         * @protected
         */
        this.discarded = false;
        this.protocol = req._query.EIO === "4" ? 4 : 3; // 3rd revision by default
        this.parser = this.protocol === 4 ? parser_v4 : parser_v3;
        this.supportsBinary = !(req._query && req._query.b64);
    }
    /**
     * Flags the transport as discarded.
     *
     * @package
     */
    discard() {
        this.discarded = true;
    }
    /**
     * Called with an incoming HTTP request.
     *
     * @param req
     * @package
     */
    onRequest(req) { }
    /**
     * Closes the transport.
     *
     * @package
     */
    close(fn) {
        if ("closed" === this.readyState || "closing" === this.readyState)
            return;
        this.readyState = "closing";
        this.doClose(fn || noop);
    }
    /**
     * Called with a transport error.
     *
     * @param {String} msg - message error
     * @param {Object} desc - error description
     * @protected
     */
    onError(msg, desc) {
        if (this.listeners("error").length) {
            const err = new Error(msg);
            // @ts-ignore
            err.type = "TransportError";
            // @ts-ignore
            err.description = desc;
            this.emit("error", err);
        }
        else {
            debug("ignored transport error %s (%s)", msg, desc);
        }
    }
    /**
     * Called with parsed out a packets from the data stream.
     *
     * @param {Object} packet
     * @protected
     */
    onPacket(packet) {
        this.emit("packet", packet);
    }
    /**
     * Called with the encoded packet data.
     *
     * @param data
     * @protected
     */
    onData(data) {
        this.onPacket(this.parser.decodePacket(data));
    }
    /**
     * Called upon transport close.
     *
     * @protected
     */
    onClose() {
        this.readyState = "closed";
        this.emit("close");
    }
}
exports.Transport = Transport;
/**
 * The list of transports this transport can be upgraded to.
 */
Transport.upgradesTo = [];
