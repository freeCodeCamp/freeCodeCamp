"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebPlatformFunctions = void 0;
const PlatformFunctions_js_1 = require("./PlatformFunctions.js");
const StripeEmitter_js_1 = require("../StripeEmitter.js");
/**
 * Specializes WebPlatformFunctions using APIs available in Web workers.
 */
class WebPlatformFunctions extends PlatformFunctions_js_1.PlatformFunctions {
    /** @override */
    getUname() {
        return Promise.resolve(null);
    }
    /** @override */
    createEmitter() {
        return new StripeEmitter_js_1.StripeEmitter();
    }
    /** @override */
    tryBufferData(data) {
        if (data.file.data instanceof ReadableStream) {
            throw new Error('Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.');
        }
        return Promise.resolve(data);
    }
    /** @override */
    createNodeHttpClient() {
        throw new Error('Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.');
    }
    /** @override */
    createDefaultHttpClient() {
        return super.createFetchHttpClient();
    }
    /** @override */
    createNodeCryptoProvider() {
        throw new Error('Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.');
    }
    /** @override */
    createDefaultCryptoProvider() {
        return this.createSubtleCryptoProvider();
    }
}
exports.WebPlatformFunctions = WebPlatformFunctions;
