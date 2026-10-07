export {};

import * as url from "node:url";

declare global {
    interface URL extends url.URL {}
    var URL: typeof globalThis extends { onmessage: any; URL: infer T } ? T : typeof url.URL;

    interface URLPattern extends url.URLPattern {}
    var URLPattern: typeof globalThis extends {
        onmessage: any;
        scheduler: any; // Must be a var introduced at the same time as URLPattern.
        URLPattern: infer T;
    } ? T
        : typeof url.URLPattern;

    interface URLPatternInit extends url.URLPatternInit {}

    interface URLPatternResult extends url.URLPatternResult {}

    interface URLSearchParams extends url.URLSearchParams {}
    var URLSearchParams: typeof globalThis extends { onmessage: any; URLSearchParams: infer T } ? T
        : typeof url.URLSearchParams;
}
