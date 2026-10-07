import { encodeHex, VSBuffer } from './buffer.js';
import { isHighSurrogate, isLowSurrogate, computeCodePoint } from './strings.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Return a hash value for an object.
 *
 * Note that this should not be used for binary data types. Instead,
 * prefer {@link hashAsync}.
 */
function hash(obj) {
    return doHash(obj, 0);
}
function doHash(obj, hashVal) {
    switch (typeof obj) {
        case 'object':
            if (obj === null) {
                return numberHash(349, hashVal);
            }
            else if (Array.isArray(obj)) {
                return arrayHash(obj, hashVal);
            }
            return objectHash(obj, hashVal);
        case 'string':
            return stringHash(obj, hashVal);
        case 'boolean':
            return booleanHash(obj, hashVal);
        case 'number':
            return numberHash(obj, hashVal);
        case 'undefined':
            return numberHash(937, hashVal);
        default:
            return numberHash(617, hashVal);
    }
}
function numberHash(val, initialHashVal) {
    return (((initialHashVal << 5) - initialHashVal) + val) | 0; // hashVal * 31 + ch, keep as int32
}
function booleanHash(b, initialHashVal) {
    return numberHash(b ? 433 : 863, initialHashVal);
}
function stringHash(s, hashVal) {
    hashVal = numberHash(149417, hashVal);
    for (let i = 0, length = s.length; i < length; i++) {
        hashVal = numberHash(s.charCodeAt(i), hashVal);
    }
    return hashVal;
}
function arrayHash(arr, initialHashVal) {
    initialHashVal = numberHash(104579, initialHashVal);
    return arr.reduce((hashVal, item) => doHash(item, hashVal), initialHashVal);
}
function objectHash(obj, initialHashVal) {
    initialHashVal = numberHash(181387, initialHashVal);
    return Object.keys(obj).sort().reduce((hashVal, key) => {
        hashVal = stringHash(key, hashVal);
        return doHash(obj[key], hashVal);
    }, initialHashVal);
}
function leftRotate(value, bits, totalBits = 32) {
    // delta + bits = totalBits
    const delta = totalBits - bits;
    // All ones, expect `delta` zeros aligned to the right
    const mask = ~((1 << delta) - 1);
    // Join (value left-shifted `bits` bits) with (masked value right-shifted `delta` bits)
    return ((value << bits) | ((mask & value) >>> delta)) >>> 0;
}
function toHexString(bufferOrValue, bitsize = 32) {
    if (bufferOrValue instanceof ArrayBuffer) {
        return encodeHex(VSBuffer.wrap(new Uint8Array(bufferOrValue)));
    }
    return (bufferOrValue >>> 0).toString(16).padStart(bitsize / 4, '0');
}
/**
 * A SHA1 implementation that works with strings and does not allocate.
 *
 * Prefer to use {@link hashAsync} in async contexts
 */
class StringSHA1 {
    static { this._bigBlock32 = new DataView(new ArrayBuffer(320)); } // 80 * 4 = 320
    constructor() {
        this._h0 = 0x67452301;
        this._h1 = 0xEFCDAB89;
        this._h2 = 0x98BADCFE;
        this._h3 = 0x10325476;
        this._h4 = 0xC3D2E1F0;
        this._buff = new Uint8Array(64 /* SHA1Constant.BLOCK_SIZE */ + 3 /* to fit any utf-8 */);
        this._buffDV = new DataView(this._buff.buffer);
        this._buffLen = 0;
        this._totalLen = 0;
        this._leftoverHighSurrogate = 0;
        this._finished = false;
    }
    update(str) {
        const strLen = str.length;
        if (strLen === 0) {
            return;
        }
        const buff = this._buff;
        let buffLen = this._buffLen;
        let leftoverHighSurrogate = this._leftoverHighSurrogate;
        let charCode;
        let offset;
        if (leftoverHighSurrogate !== 0) {
            charCode = leftoverHighSurrogate;
            offset = -1;
            leftoverHighSurrogate = 0;
        }
        else {
            charCode = str.charCodeAt(0);
            offset = 0;
        }
        while (true) {
            let codePoint = charCode;
            if (isHighSurrogate(charCode)) {
                if (offset + 1 < strLen) {
                    const nextCharCode = str.charCodeAt(offset + 1);
                    if (isLowSurrogate(nextCharCode)) {
                        offset++;
                        codePoint = computeCodePoint(charCode, nextCharCode);
                    }
                    else {
                        // illegal => unicode replacement character
                        codePoint = 65533 /* SHA1Constant.UNICODE_REPLACEMENT */;
                    }
                }
                else {
                    // last character is a surrogate pair
                    leftoverHighSurrogate = charCode;
                    break;
                }
            }
            else if (isLowSurrogate(charCode)) {
                // illegal => unicode replacement character
                codePoint = 65533 /* SHA1Constant.UNICODE_REPLACEMENT */;
            }
            buffLen = this._push(buff, buffLen, codePoint);
            offset++;
            if (offset < strLen) {
                charCode = str.charCodeAt(offset);
            }
            else {
                break;
            }
        }
        this._buffLen = buffLen;
        this._leftoverHighSurrogate = leftoverHighSurrogate;
    }
    _push(buff, buffLen, codePoint) {
        if (codePoint < 0x0080) {
            buff[buffLen++] = codePoint;
        }
        else if (codePoint < 0x0800) {
            buff[buffLen++] = 0b11000000 | ((codePoint & 0b00000000000000000000011111000000) >>> 6);
            buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
        }
        else if (codePoint < 0x10000) {
            buff[buffLen++] = 0b11100000 | ((codePoint & 0b00000000000000001111000000000000) >>> 12);
            buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000111111000000) >>> 6);
            buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
        }
        else {
            buff[buffLen++] = 0b11110000 | ((codePoint & 0b00000000000111000000000000000000) >>> 18);
            buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000111111000000000000) >>> 12);
            buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000111111000000) >>> 6);
            buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
        }
        if (buffLen >= 64 /* SHA1Constant.BLOCK_SIZE */) {
            this._step();
            buffLen -= 64 /* SHA1Constant.BLOCK_SIZE */;
            this._totalLen += 64 /* SHA1Constant.BLOCK_SIZE */;
            // take last 3 in case of UTF8 overflow
            buff[0] = buff[64 /* SHA1Constant.BLOCK_SIZE */ + 0];
            buff[1] = buff[64 /* SHA1Constant.BLOCK_SIZE */ + 1];
            buff[2] = buff[64 /* SHA1Constant.BLOCK_SIZE */ + 2];
        }
        return buffLen;
    }
    digest() {
        if (!this._finished) {
            this._finished = true;
            if (this._leftoverHighSurrogate) {
                // illegal => unicode replacement character
                this._leftoverHighSurrogate = 0;
                this._buffLen = this._push(this._buff, this._buffLen, 65533 /* SHA1Constant.UNICODE_REPLACEMENT */);
            }
            this._totalLen += this._buffLen;
            this._wrapUp();
        }
        return toHexString(this._h0) + toHexString(this._h1) + toHexString(this._h2) + toHexString(this._h3) + toHexString(this._h4);
    }
    _wrapUp() {
        this._buff[this._buffLen++] = 0x80;
        this._buff.subarray(this._buffLen).fill(0);
        if (this._buffLen > 56) {
            this._step();
            this._buff.fill(0);
        }
        // this will fit because the mantissa can cover up to 52 bits
        const ml = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(ml / 4294967296), false);
        this._buffDV.setUint32(60, ml % 4294967296, false);
        this._step();
    }
    _step() {
        const bigBlock32 = StringSHA1._bigBlock32;
        const data = this._buffDV;
        for (let j = 0; j < 64 /* 16*4 */; j += 4) {
            bigBlock32.setUint32(j, data.getUint32(j, false), false);
        }
        for (let j = 64; j < 320 /* 80*4 */; j += 4) {
            bigBlock32.setUint32(j, leftRotate((bigBlock32.getUint32(j - 12, false) ^ bigBlock32.getUint32(j - 32, false) ^ bigBlock32.getUint32(j - 56, false) ^ bigBlock32.getUint32(j - 64, false)), 1), false);
        }
        let a = this._h0;
        let b = this._h1;
        let c = this._h2;
        let d = this._h3;
        let e = this._h4;
        let f, k;
        let temp;
        for (let j = 0; j < 80; j++) {
            if (j < 20) {
                f = (b & c) | ((~b) & d);
                k = 0x5A827999;
            }
            else if (j < 40) {
                f = b ^ c ^ d;
                k = 0x6ED9EBA1;
            }
            else if (j < 60) {
                f = (b & c) | (b & d) | (c & d);
                k = 0x8F1BBCDC;
            }
            else {
                f = b ^ c ^ d;
                k = 0xCA62C1D6;
            }
            temp = (leftRotate(a, 5) + f + e + k + bigBlock32.getUint32(j * 4, false)) & 0xffffffff;
            e = d;
            d = c;
            c = leftRotate(b, 30);
            b = a;
            a = temp;
        }
        this._h0 = (this._h0 + a) & 0xffffffff;
        this._h1 = (this._h1 + b) & 0xffffffff;
        this._h2 = (this._h2 + c) & 0xffffffff;
        this._h3 = (this._h3 + d) & 0xffffffff;
        this._h4 = (this._h4 + e) & 0xffffffff;
    }
}

export { StringSHA1, doHash, hash, numberHash, stringHash };
