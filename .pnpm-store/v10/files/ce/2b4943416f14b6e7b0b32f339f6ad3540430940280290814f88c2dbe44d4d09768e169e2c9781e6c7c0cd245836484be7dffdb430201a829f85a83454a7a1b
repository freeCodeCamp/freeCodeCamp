import { streamCollector } from "@smithy/node-http-handler";
import { fromArrayBuffer } from "@smithy/util-buffer-from";
import { Readable } from "stream";
import { TextDecoder } from "util";
const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
export const sdkStreamMixin = (stream) => {
    if (!(stream instanceof Readable)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await streamCollector(stream);
    };
    return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === undefined || Buffer.isEncoding(encoding)) {
                return fromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
            }
            else {
                const decoder = new TextDecoder(encoding);
                return decoder.decode(buf);
            }
        },
        transformToWebStream: () => {
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            if (stream.readableFlowing !== null) {
                throw new Error("The stream has been consumed by other callbacks.");
            }
            if (typeof Readable.toWeb !== "function") {
                throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
            }
            transformed = true;
            return Readable.toWeb(stream);
        },
    });
};
