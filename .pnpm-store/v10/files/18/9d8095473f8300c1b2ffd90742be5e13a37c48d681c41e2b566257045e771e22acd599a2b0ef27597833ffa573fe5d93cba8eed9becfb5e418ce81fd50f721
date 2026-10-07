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
     * @param {EngineRequest} req
     */
    constructor(req) {
        super(req);
        this._doSend = (data) => {
            this.socket.send(data, this._onSent);
        };
        this._doSendLast = (data) => {
            this.socket.send(data, this._onSentLast);
        };
        this._onSent = (err) => {
            if (err) {
                this.onError("write error", err.stack);
            }
        };
        this._onSentLast = (err) => {
            if (err) {
                this.onError("write error", err.stack);
            }
            else {
                this.emit("drain");
                this.writable = true;
                this.emit("ready");
            }
        };
        this.socket = req.websocket;
        this.socket.on("message", (data, isBinary) => {
            const message = isBinary ? data : data.toString();
            debug('received "%s"', message);
            super.onData(message);
        });
        this.socket.once("close", this.onClose.bind(this));
        this.socket.on("error", this.onError.bind(this));
        this.writable = true;
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
    send(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const isLast = i + 1 === packets.length;
            if (this._canSendPreEncodedFrame(packet)) {
                // the WebSocket frame was computed with WebSocket.Sender.frame()
                // see https://github.com/websockets/ws/issues/617#issuecomment-283002469
                // @ts-expect-error use of untyped member
                this.socket._sender.sendFrame(packet.options.wsPreEncodedFrame, isLast ? this._onSentLast : this._onSent);
            }
            else {
                this.parser.encodePacket(packet, this.supportsBinary, isLast ? this._doSendLast : this._doSend);
            }
        }
    }
    /**
     * Whether the encoding of the WebSocket frame can be skipped.
     * @param packet
     * @private
     */
    _canSendPreEncodedFrame(packet) {
        var _a, _b, _c;
        return (!this.perMessageDeflate &&
            // @ts-expect-error use of untyped member
            typeof ((_b = (_a = this.socket) === null || _a === void 0 ? void 0 : _a._sender) === null || _b === void 0 ? void 0 : _b.sendFrame) === "function" &&
            ((_c = packet.options) === null || _c === void 0 ? void 0 : _c.wsPreEncodedFrame) !== undefined);
    }
    doClose(fn) {
        debug("closing");
        this.socket.close();
        fn && fn();
    }
}
exports.WebSocket = WebSocket;
