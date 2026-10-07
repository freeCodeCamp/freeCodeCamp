import { fromString } from "@smithy/util-buffer-from";
export const fromUtf8 = (input) => {
    const buf = fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
