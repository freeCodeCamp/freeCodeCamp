import { fromArrayBuffer } from "@smithy/util-buffer-from";
import { fromUtf8 } from "@smithy/util-utf8";
export const toBase64 = (_input) => {
    let input;
    if (typeof _input === "string") {
        input = fromUtf8(_input);
    }
    else {
        input = _input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
};
