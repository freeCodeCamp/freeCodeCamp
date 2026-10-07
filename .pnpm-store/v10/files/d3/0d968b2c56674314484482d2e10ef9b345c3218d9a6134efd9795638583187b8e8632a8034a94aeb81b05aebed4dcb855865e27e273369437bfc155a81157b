export {};

import * as buffer from "node:buffer";

type _Blob = typeof globalThis extends { onmessage: any } ? {} : buffer.Blob;
type _BlobPropertyBag = typeof globalThis extends { onmessage: any } ? {} : buffer.BlobPropertyBag;
type _File = typeof globalThis extends { onmessage: any } ? {} : buffer.File;
type _FilePropertyBag = typeof globalThis extends { onmessage: any } ? {} : buffer.FilePropertyBag;

declare global {
    interface Blob extends _Blob {}
    var Blob: typeof globalThis extends { onmessage: any; Blob: infer T } ? T : typeof buffer.Blob;

    interface BlobPropertyBag extends _BlobPropertyBag {}

    interface File extends _File {}
    var File: typeof globalThis extends { onmessage: any; File: infer T } ? T : typeof buffer.File;

    interface FilePropertyBag extends _FilePropertyBag {}

    function atob(data: string): string;
    function btoa(data: string): string;
}
