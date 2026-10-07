"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBase64 = decodeBase64;
/*
 * Shared base64 decode helper for generated decode data.
 * Assumes global atob is available.
 */
function decodeBase64(input) {
    const binary = 
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    typeof atob === "function"
        ? // Browser (and Node >=16)
            // eslint-disable-next-line n/no-unsupported-features/node-builtins
            atob(input)
        : // Older Node versions (<16)
            // eslint-disable-next-line n/no-unsupported-features/node-builtins
            typeof Buffer.from === "function"
                ? // eslint-disable-next-line n/no-unsupported-features/node-builtins
                    Buffer.from(input, "base64").toString("binary")
                : // eslint-disable-next-line unicorn/no-new-buffer, n/no-deprecated-api
                    new Buffer(input, "base64").toString("binary");
    const evenLength = binary.length & ~1; // Round down to even length
    const out = new Uint16Array(evenLength / 2);
    for (let index = 0, outIndex = 0; index < evenLength; index += 2) {
        const lo = binary.charCodeAt(index);
        const hi = binary.charCodeAt(index + 1);
        out[outIndex++] = lo | (hi << 8);
    }
    return out;
}
//# sourceMappingURL=decode-shared.js.map