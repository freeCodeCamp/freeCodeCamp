export {};

import * as webstreams from "stream/web";

type _CompressionStream = typeof globalThis extends { onmessage: any } ? {} : webstreams.CompressionStream;
type _DecompressionStream = typeof globalThis extends { onmessage: any } ? {} : webstreams.DecompressionStream;

declare global {
    interface CompressionStream extends _CompressionStream {}
    var CompressionStream: typeof globalThis extends {
        onmessage: any;
        CompressionStream: infer T;
    } ? T
        : typeof webstreams.CompressionStream;

    interface DecompressionStream extends _DecompressionStream {}
    var DecompressionStream: typeof globalThis extends {
        onmessage: any;
        DecompressionStream: infer T;
    } ? T
        : typeof webstreams.DecompressionStream;
}
