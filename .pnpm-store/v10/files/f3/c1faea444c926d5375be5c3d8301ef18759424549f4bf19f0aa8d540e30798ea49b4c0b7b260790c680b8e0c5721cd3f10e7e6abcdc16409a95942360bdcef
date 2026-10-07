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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WS = void 0;
const ws = __importStar(require("ws"));
const websocket_js_1 = require("./websocket.js");
/**
 * WebSocket transport based on the `WebSocket` object provided by the `ws` package.
 *
 * Usage: Node.js, Deno (compat), Bun (compat)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 */
class WS extends websocket_js_1.BaseWS {
    createSocket(uri, protocols, opts) {
        var _a;
        if ((_a = this.socket) === null || _a === void 0 ? void 0 : _a._cookieJar) {
            opts.headers = opts.headers || {};
            opts.headers.cookie =
                typeof opts.headers.cookie === "string"
                    ? [opts.headers.cookie]
                    : opts.headers.cookie || [];
            for (const [name, cookie] of this.socket._cookieJar.cookies) {
                opts.headers.cookie.push(`${name}=${cookie.value}`);
            }
        }
        return new ws.WebSocket(uri, protocols, opts);
    }
    doWrite(packet, data) {
        const opts = {};
        if (packet.options) {
            opts.compress = packet.options.compress;
        }
        if (this.opts.perMessageDeflate) {
            const len = 
            // @ts-ignore
            "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
                opts.compress = false;
            }
        }
        this.ws.send(data, opts);
    }
}
exports.WS = WS;
