"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBase64 = void 0;
const util_utf8_1 = require("@smithy/util-utf8");
const constants_browser_1 = require("./constants.browser");
function toBase64(_input) {
    let input;
    if (typeof _input === "string") {
        input = (0, util_utf8_1.fromUtf8)(_input);
    }
    else {
        input = _input;
    }
    const isArrayLike = typeof input === "object" && typeof input.length === "number";
    const isUint8Array = typeof input === "object" &&
        typeof input.byteOffset === "number" &&
        typeof input.byteLength === "number";
    if (!isArrayLike && !isUint8Array) {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    let str = "";
    for (let i = 0; i < input.length; i += 3) {
        let bits = 0;
        let bitLength = 0;
        for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
            bits |= input[j] << ((limit - j - 1) * constants_browser_1.bitsPerByte);
            bitLength += constants_browser_1.bitsPerByte;
        }
        const bitClusterCount = Math.ceil(bitLength / constants_browser_1.bitsPerLetter);
        bits <<= bitClusterCount * constants_browser_1.bitsPerLetter - bitLength;
        for (let k = 1; k <= bitClusterCount; k++) {
            const offset = (bitClusterCount - k) * constants_browser_1.bitsPerLetter;
            str += constants_browser_1.alphabetByValue[(bits & (constants_browser_1.maxLetterValue << offset)) >> offset];
        }
        str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
}
exports.toBase64 = toBase64;
