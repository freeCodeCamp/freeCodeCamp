"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocket = void 0;
const transport_1 = require("../transport");
const debug_1 = require("debug");
const debug = (0, debug_1.default)("engine:ws");
class WebSocket extends transport_1.Transport {
    /**
     * WebSocket transport
     *
     * @param req
     */
    constructor(req) {
        super(req);
        this.writable = false;
        this.perMessageDeflate = null;
    }
    /**
     * Transport name
     */
    get name() {
        return "websocket";
    }
    /**
     * Advertise upgrade support.
     */
    get handlesUpgrades() {
        return true;
    }
    /**
     * Writes a packet payload.
     *
     * @param {Array} packets
     * @private
     */
    send(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const isLast = i + 1 === packets.length;
            const send = (data) => {
                const isBinary = typeof data !== "string";
                const compress = this.perMessageDeflate &&
                    Buffer.byteLength(data) > this.perMessageDeflate.threshold;
                debug('writing "%s"', data);
                this.socket.send(data, isBinary, compress);
                if (isLast) {
                    this.emit("drain");
                    this.writable = true;
                    this.emit("ready");
                }
            };
            if (packet.options && typeof packet.options.wsPreEncoded === "string") {
                send(packet.options.wsPreEncoded);
            }
            else {
                this.parser.encodePacket(packet, this.supportsBinary, send);
            }
        }
    }
    /**
     * Closes the transport.
     *
     * @private
     */
    doClose(fn) {
        debug("closing");
        fn && fn();
        // call fn first since socket.end() immediately emits a "close" event
        this.socket.end();
    }
}
exports.WebSocket = WebSocket;
