"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64 = void 0;
const util_buffer_from_1 = require("@smithy/util-buffer-from");
const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
const fromBase64 = (input) => {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};
exports.fromBase64 = fromBase64;
