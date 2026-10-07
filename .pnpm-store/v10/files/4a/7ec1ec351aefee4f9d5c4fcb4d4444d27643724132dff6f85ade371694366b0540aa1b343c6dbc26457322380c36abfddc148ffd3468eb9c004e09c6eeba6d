import { fromArrayBuffer, fromString } from "@smithy/util-buffer-from";
import { toUint8Array } from "@smithy/util-utf8";
import { Buffer } from "buffer";
import { createHash, createHmac } from "crypto";
export class Hash {
    constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
    }
    update(toHash, encoding) {
        this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret
            ? createHmac(this.algorithmIdentifier, castSourceData(this.secret))
            : createHash(this.algorithmIdentifier);
    }
}
function castSourceData(toCast, encoding) {
    if (Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return fromString(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return fromArrayBuffer(toCast);
}
