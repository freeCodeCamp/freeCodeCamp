"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromisePolyfill = void 0;
// TODO: Remove this class once Node 22 becomes the minimum supported version.
class PromisePolyfill extends Promise {
    // Available starting from Node 22
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
    static withResolver() {
        let resolve;
        let reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        return { promise, resolve: resolve, reject: reject };
    }
}
exports.PromisePolyfill = PromisePolyfill;
