/**
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bytesToHex(bytes) {
    return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
}
/**
 * Generates a random v4 UUID, as specified in RFC4122.
 *
 * Uses the native Web Crypto API if available, otherwise falls back to a
 * polyfill.
 *
 * Example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 */
export function uuidv4() {
    // Available only in secure contexts
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
    if ('crypto' in globalThis && 'randomUUID' in globalThis.crypto) {
        // Node with
        // https://nodejs.org/dist/latest-v20.x/docs/api/globals.html#crypto_1 or
        // secure browser context.
        return globalThis.crypto.randomUUID();
    }
    const randomValues = new Uint8Array(16);
    if ('crypto' in globalThis && 'getRandomValues' in globalThis.crypto) {
        // Node (>=18) with
        // https://nodejs.org/dist/latest-v20.x/docs/api/globals.html#crypto_1 or
        // browser.
        globalThis.crypto.getRandomValues(randomValues);
    }
    else {
        // Node (<=16) without
        // https://nodejs.org/dist/latest-v20.x/docs/api/globals.html#crypto_1.
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('crypto').webcrypto.getRandomValues(randomValues);
    }
    // Set version (4) and variant (RFC4122) bits.
    randomValues[6] = (randomValues[6] & 0x0f) | 0x40;
    randomValues[8] = (randomValues[8] & 0x3f) | 0x80;
    return [
        bytesToHex(randomValues.subarray(0, 4)),
        bytesToHex(randomValues.subarray(4, 6)),
        bytesToHex(randomValues.subarray(6, 8)),
        bytesToHex(randomValues.subarray(8, 10)),
        bytesToHex(randomValues.subarray(10, 16)),
    ].join('-');
}
//# sourceMappingURL=uuid.js.map