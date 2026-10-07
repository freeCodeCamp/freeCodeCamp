"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdkStreamMixin = void 0;
const node_http_handler_1 = require("@smithy/node-http-handler");
const util_buffer_from_1 = require("@smithy/util-buffer-from");
const stream_1 = require("stream");
const util_1 = require("util");
const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream) => {
    var _a, _b;
    if (!(stream instanceof stream_1.Readable)) {
        const name = ((_b = (_a = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) || stream;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
    };
    return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === undefined || Buffer.isEncoding(encoding)) {
                return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
            }
            else {
                const decoder = new util_1.TextDecoder(encoding);
                return decoder.decode(buf);
            }
        },
        transformToWebStream: () => {
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            if (stream.readableFlowing !== null) {
                throw new Error("The stream has been consumed by other callbacks.");
            }
            if (typeof stream_1.Readable.toWeb !== "function") {
                throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
            }
            transformed = true;
            return stream_1.Readable.toWeb(stream);
        },
    });
};
exports.sdkStreamMixin = sdkStreamMixin;
