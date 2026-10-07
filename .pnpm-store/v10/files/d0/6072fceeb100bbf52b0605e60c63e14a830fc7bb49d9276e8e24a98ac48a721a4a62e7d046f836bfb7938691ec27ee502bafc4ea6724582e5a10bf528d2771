import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";
import { Uint8ArrayBlobAdapter } from "./Uint8ArrayBlobAdapter";
export function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
        return toBase64(payload);
    }
    return toUtf8(payload);
}
export function transformFromString(str, encoding) {
    if (encoding === "base64") {
        return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
    }
    return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
