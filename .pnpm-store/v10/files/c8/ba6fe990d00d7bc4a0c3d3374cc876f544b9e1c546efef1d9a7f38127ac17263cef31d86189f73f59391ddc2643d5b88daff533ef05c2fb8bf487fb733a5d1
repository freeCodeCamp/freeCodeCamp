"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtleCryptoProvider = void 0;
const CryptoProvider_js_1 = require("./CryptoProvider.js");
/**
 * `CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
 *
 * This only supports asynchronous operations.
 */
class SubtleCryptoProvider extends CryptoProvider_js_1.CryptoProvider {
    constructor(subtleCrypto) {
        super();
        // If no subtle crypto is interface, default to the global namespace. This
        // is to allow custom interfaces (eg. using the Node webcrypto interface in
        // tests).
        this.subtleCrypto = subtleCrypto || crypto.subtle;
    }
    /** @override */
    computeHMACSignature(payload, secret) {
        throw new CryptoProvider_js_1.CryptoProviderOnlySupportsAsyncError('SubtleCryptoProvider cannot be used in a synchronous context.');
    }
    /** @override */
    async computeHMACSignatureAsync(payload, secret) {
        const encoder = new TextEncoder();
        const key = await this.subtleCrypto.importKey('raw', encoder.encode(secret), {
            name: 'HMAC',
            hash: { name: 'SHA-256' },
        }, false, ['sign']);
        const signatureBuffer = await this.subtleCrypto.sign('hmac', key, encoder.encode(payload));
        // crypto.subtle returns the signature in base64 format. This must be
        // encoded in hex to match the CryptoProvider contract. We map each byte in
        // the buffer to its corresponding hex octet and then combine into a string.
        const signatureBytes = new Uint8Array(signatureBuffer);
        const signatureHexCodes = new Array(signatureBytes.length);
        for (let i = 0; i < signatureBytes.length; i++) {
            signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
        }
        return signatureHexCodes.join('');
    }
}
exports.SubtleCryptoProvider = SubtleCryptoProvider;
// Cached mapping of byte to hex representation. We do this once to avoid re-
// computing every time we need to convert the result of a signature to hex.
const byteHexMapping = new Array(256);
for (let i = 0; i < byteHexMapping.length; i++) {
    byteHexMapping[i] = i.toString(16).padStart(2, '0');
}
