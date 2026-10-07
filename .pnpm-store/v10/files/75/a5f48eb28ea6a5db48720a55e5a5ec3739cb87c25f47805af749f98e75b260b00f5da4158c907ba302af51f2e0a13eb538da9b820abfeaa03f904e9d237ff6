import { isArrayBuffer } from "@smithy/is-array-buffer";
import { Buffer } from "buffer";
export const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return Buffer.from(input, offset, length);
};
export const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? Buffer.from(input, encoding) : Buffer.from(input);
};
