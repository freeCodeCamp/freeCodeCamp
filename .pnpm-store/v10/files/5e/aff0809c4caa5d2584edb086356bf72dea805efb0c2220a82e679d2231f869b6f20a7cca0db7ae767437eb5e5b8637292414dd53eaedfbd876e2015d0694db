import { FetchHttpClient } from '../net/FetchHttpClient.js';
import { SubtleCryptoProvider } from '../crypto/SubtleCryptoProvider.js';
/**
 * Interface encapsulating various utility functions whose
 * implementations depend on the platform / JS runtime.
 */
export class PlatformFunctions {
    constructor() {
        this._fetchFn = null;
        this._agent = null;
    }
    /**
     * Gets uname with Node's built-in `exec` function, if available.
     */
    getUname() {
        throw new Error('getUname not implemented.');
    }
    /**
     * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
     */
    uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    /**
     * Compares strings in constant time.
     */
    secureCompare(a, b) {
        // return early here if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        const len = a.length;
        let result = 0;
        for (let i = 0; i < len; ++i) {
            result |= a.charCodeAt(i) ^ b.charCodeAt(i);
        }
        return result === 0;
    }
    /**
     * Creates an event emitter.
     */
    createEmitter() {
        throw new Error('createEmitter not implemented.');
    }
    /**
     * Checks if the request data is a stream. If so, read the entire stream
     * to a buffer and return the buffer.
     */
    tryBufferData(data) {
        throw new Error('tryBufferData not implemented.');
    }
    /**
     * Creates an HTTP client which uses the Node `http` and `https` packages
     * to issue requests.
     */
    createNodeHttpClient(agent) {
        throw new Error('createNodeHttpClient not implemented.');
    }
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */
    createFetchHttpClient(fetchFn) {
        return new FetchHttpClient(fetchFn);
    }
    /**
     * Creates an HTTP client using runtime-specific APIs.
     */
    createDefaultHttpClient() {
        throw new Error('createDefaultHttpClient not implemented.');
    }
    /**
     * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
     */
    createNodeCryptoProvider() {
        throw new Error('createNodeCryptoProvider not implemented.');
    }
    /**
     * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
     */
    createSubtleCryptoProvider(subtleCrypto) {
        return new SubtleCryptoProvider(subtleCrypto);
    }
    createDefaultCryptoProvider() {
        throw new Error('createDefaultCryptoProvider not implemented.');
    }
}
