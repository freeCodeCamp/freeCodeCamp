export {};

import * as util from "node:util";

declare global {
    interface TextDecoder extends util.TextDecoder {}
    var TextDecoder: typeof globalThis extends { onmessage: any; TextDecoder: infer T } ? T : typeof util.TextDecoder;

    interface TextEncoder extends util.TextEncoder {}
    var TextEncoder: typeof globalThis extends { onmessage: any; TextEncoder: infer T } ? T : typeof util.TextEncoder;
}
