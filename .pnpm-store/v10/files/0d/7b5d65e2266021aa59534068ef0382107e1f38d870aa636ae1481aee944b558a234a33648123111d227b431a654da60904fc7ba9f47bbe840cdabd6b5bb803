"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePlatformFunctions = void 0;
const crypto = require("crypto");
const events_1 = require("events");
const NodeCryptoProvider_js_1 = require("../crypto/NodeCryptoProvider.js");
const NodeHttpClient_js_1 = require("../net/NodeHttpClient.js");
const PlatformFunctions_js_1 = require("./PlatformFunctions.js");
const Error_js_1 = require("../Error.js");
const utils_js_1 = require("../utils.js");
const child_process_1 = require("child_process");
class StreamProcessingError extends Error_js_1.StripeError {
}
/**
 * Specializes WebPlatformFunctions using APIs available in Node.js.
 */
class NodePlatformFunctions extends PlatformFunctions_js_1.PlatformFunctions {
    constructor() {
        super();
        this._exec = child_process_1.exec;
        this._UNAME_CACHE = null;
    }
    /** @override */
    uuid4() {
        // available in: v14.17.x+
        if (crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return super.uuid4();
    }
    /**
     * @override
     * Node's built in `exec` function sometimes throws outright,
     * and sometimes has a callback with an error,
     * depending on the type of error.
     *
     * This unifies that interface by resolving with a null uname
     * if an error is encountered.
     */
    getUname() {
        if (!this._UNAME_CACHE) {
            this._UNAME_CACHE = new Promise((resolve, reject) => {
                try {
                    this._exec('uname -a', (err, uname) => {
                        if (err) {
                            return resolve(null);
                        }
                        resolve(uname);
                    });
                }
                catch (e) {
                    resolve(null);
                }
            });
        }
        return this._UNAME_CACHE;
    }
    /**
     * @override
     * Secure compare, from https://github.com/freewil/scmp
     */
    secureCompare(a, b) {
        if (!a || !b) {
            throw new Error('secureCompare must receive two arguments');
        }
        // return early here if buffer lengths are not equal since timingSafeEqual
        // will throw if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
        // otherwise use our own scmp-internal function.
        if (crypto.timingSafeEqual) {
            const textEncoder = new TextEncoder();
            const aEncoded = textEncoder.encode(a);
            const bEncoded = textEncoder.encode(b);
            return crypto.timingSafeEqual(aEncoded, bEncoded);
        }
        return super.secureCompare(a, b);
    }
    createEmitter() {
        return new events_1.EventEmitter();
    }
    /** @override */
    tryBufferData(data) {
        if (!(data.file.data instanceof events_1.EventEmitter)) {
            return Promise.resolve(data);
        }
        const bufferArray = [];
        return new Promise((resolve, reject) => {
            data.file.data
                .on('data', (line) => {
                bufferArray.push(line);
            })
                .once('end', () => {
                // @ts-ignore
                const bufferData = Object.assign({}, data);
                bufferData.file.data = (0, utils_js_1.concat)(bufferArray);
                resolve(bufferData);
            })
                .on('error', (err) => {
                reject(new StreamProcessingError({
                    message: 'An error occurred while attempting to process the file for upload.',
                    detail: err,
                }));
            });
        });
    }
    /** @override */
    createNodeHttpClient(agent) {
        return new NodeHttpClient_js_1.NodeHttpClient(agent);
    }
    /** @override */
    createDefaultHttpClient() {
        return new NodeHttpClient_js_1.NodeHttpClient();
    }
    /** @override */
    createNodeCryptoProvider() {
        return new NodeCryptoProvider_js_1.NodeCryptoProvider();
    }
    /** @override */
    createDefaultCryptoProvider() {
        return this.createNodeCryptoProvider();
    }
}
exports.NodePlatformFunctions = NodePlatformFunctions;
