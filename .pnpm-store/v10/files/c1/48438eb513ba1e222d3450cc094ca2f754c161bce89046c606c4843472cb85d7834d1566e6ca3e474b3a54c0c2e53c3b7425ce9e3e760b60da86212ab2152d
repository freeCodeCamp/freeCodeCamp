"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePacket = void 0;
exports.encodePacketToBinary = encodePacketToBinary;
const commons_js_1 = require("./commons.js");
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        return callback(supportsBinary ? data : "b" + toBuffer(data, true).toString("base64"));
    }
    // plain string
    return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
};
exports.encodePacket = encodePacket;
const toBuffer = (data, forceBufferConversion) => {
    if (Buffer.isBuffer(data) ||
        (data instanceof Uint8Array && !forceBufferConversion)) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return Buffer.from(data);
    }
    else {
        return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    }
};
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (packet.data instanceof ArrayBuffer || ArrayBuffer.isView(packet.data)) {
        return callback(toBuffer(packet.data, false));
    }
    (0, exports.encodePacket)(packet, true, (encoded) => {
        if (!TEXT_ENCODER) {
            // lazily created for compatibility with Node.js 10
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}
