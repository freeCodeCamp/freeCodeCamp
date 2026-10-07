"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64 = void 0;
const constants_browser_1 = require("./constants.browser");
const fromBase64 = (input) => {
    let totalByteLength = (input.length / 4) * 3;
    if (input.slice(-2) === "==") {
        totalByteLength -= 2;
    }
    else if (input.slice(-1) === "=") {
        totalByteLength--;
    }
    const out = new ArrayBuffer(totalByteLength);
    const dataView = new DataView(out);
    for (let i = 0; i < input.length; i += 4) {
        let bits = 0;
        let bitLength = 0;
        for (let j = i, limit = i + 3; j <= limit; j++) {
            if (input[j] !== "=") {
                if (!(input[j] in constants_browser_1.alphabetByEncoding)) {
                    throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
                }
                bits |= constants_browser_1.alphabetByEncoding[input[j]] << ((limit - j) * constants_browser_1.bitsPerLetter);
                bitLength += constants_browser_1.bitsPerLetter;
            }
            else {
                bits >>= constants_browser_1.bitsPerLetter;
            }
        }
        const chunkOffset = (i / 4) * 3;
        bits >>= bitLength % constants_browser_1.bitsPerByte;
        const byteLength = Math.floor(bitLength / constants_browser_1.bitsPerByte);
        for (let k = 0; k < byteLength; k++) {
            const offset = (byteLength - k - 1) * constants_browser_1.bitsPerByte;
            dataView.setUint8(chunkOffset + k, (bits & (255 << offset)) >> offset);
        }
    }
    return new Uint8Array(out);
};
exports.fromBase64 = fromBase64;
