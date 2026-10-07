/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as strings from 'vs/base/common/strings';

/**
 * Return a hash value for an object.
 */
export function hash(obj: any): number {
	return doHash(obj, 0);
}

export function doHash(obj: any, hashVal: number): number {
	switch (typeof obj) {
		case 'object':
			if (obj === null) {
				return numberHash(349, hashVal);
			} else if (Array.isArray(obj)) {
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

export function numberHash(val: number, initialHashVal: number): number {
	return (((initialHashVal << 5) - initialHashVal) + val) | 0;  // hashVal * 31 + ch, keep as int32
}

function booleanHash(b: boolean, initialHashVal: number): number {
	return numberHash(b ? 433 : 863, initialHashVal);
}

export function stringHash(s: string, hashVal: number) {
	hashVal = numberHash(149417, hashVal);
	for (let i = 0, length = s.length; i < length; i++) {
		hashVal = numberHash(s.charCodeAt(i), hashVal);
	}
	return hashVal;
}

function arrayHash(arr: any[], initialHashVal: number): number {
	initialHashVal = numberHash(104579, initialHashVal);
	return arr.reduce((hashVal, item) => doHash(item, hashVal), initialHashVal);
}

function objectHash(obj: any, initialHashVal: number): number {
	initialHashVal = numberHash(181387, initialHashVal);
	return Object.keys(obj).sort().reduce((hashVal, key) => {
		hashVal = stringHash(key, hashVal);
		return doHash(obj[key], hashVal);
	}, initialHashVal);
}

export class Hasher {

	private _value = 0;

	get value(): number {
		return this._value;
	}

	hash(obj: any): number {
		this._value = doHash(obj, this._value);
		return this._value;
	}
}

const enum SHA1Constant {
	BLOCK_SIZE = 64, // 512 / 8
	UNICODE_REPLACEMENT = 0xFFFD,
}

function leftRotate(value: number, bits: number, totalBits: number = 32): number {
	// delta + bits = totalBits
	const delta = totalBits - bits;

	// All ones, expect `delta` zeros aligned to the right
	const mask = ~((1 << delta) - 1);

	// Join (value left-shifted `bits` bits) with (masked value right-shifted `delta` bits)
	return ((value << bits) | ((mask & value) >>> delta)) >>> 0;
}

function fill(dest: Uint8Array, index: number = 0, count: number = dest.byteLength, value: number = 0): void {
	for (let i = 0; i < count; i++) {
		dest[index + i] = value;
	}
}

function leftPad(value: string, length: number, char: string = '0'): string {
	while (value.length < length) {
		value = char + value;
	}
	return value;
}

export function toHexString(buffer: ArrayBuffer): string;
export function toHexString(value: number, bitsize?: number): string;
export function toHexString(bufferOrValue: ArrayBuffer | number, bitsize: number = 32): string {
	if (bufferOrValue instanceof ArrayBuffer) {
		return Array.from(new Uint8Array(bufferOrValue)).map(b => b.toString(16).padStart(2, '0')).join('');
	}

	return leftPad((bufferOrValue >>> 0).toString(16), bitsize / 4);
}

/**
 * A SHA1 implementation that works with strings and does not allocate.
 */
export class StringSHA1 {
	private static _bigBlock32 = new DataView(new ArrayBuffer(320)); // 80 * 4 = 320

	private _h0 = 0x67452301;
	private _h1 = 0xEFCDAB89;
	private _h2 = 0x98BADCFE;
	private _h3 = 0x10325476;
	private _h4 = 0xC3D2E1F0;

	private readonly _buff: Uint8Array;
	private readonly _buffDV: DataView;
	private _buffLen: number;
	private _totalLen: number;
	private _leftoverHighSurrogate: number;
	private _finished: boolean;

	constructor() {
		this._buff = new Uint8Array(SHA1Constant.BLOCK_SIZE + 3 /* to fit any utf-8 */);
		this._buffDV = new DataView(this._buff.buffer);
		this._buffLen = 0;
		this._totalLen = 0;
		this._leftoverHighSurrogate = 0;
		this._finished = false;
	}

	public update(str: string): void {
		const strLen = str.length;
		if (strLen === 0) {
			return;
		}

		const buff = this._buff;
		let buffLen = this._buffLen;
		let leftoverHighSurrogate = this._leftoverHighSurrogate;
		let charCode: number;
		let offset: number;

		if (leftoverHighSurrogate !== 0) {
			charCode = leftoverHighSurrogate;
			offset = -1;
			leftoverHighSurrogate = 0;
		} else {
			charCode = str.charCodeAt(0);
			offset = 0;
		}

		while (true) {
			let codePoint = charCode;
			if (strings.isHighSurrogate(charCode)) {
				if (offset + 1 < strLen) {
					const nextCharCode = str.charCodeAt(offset + 1);
					if (strings.isLowSurrogate(nextCharCode)) {
						offset++;
						codePoint = strings.computeCodePoint(charCode, nextCharCode);
					} else {
						// illegal => unicode replacement character
						codePoint = SHA1Constant.UNICODE_REPLACEMENT;
					}
				} else {
					// last character is a surrogate pair
					leftoverHighSurrogate = charCode;
					break;
				}
			} else if (strings.isLowSurrogate(charCode)) {
				// illegal => unicode replacement character
				codePoint = SHA1Constant.UNICODE_REPLACEMENT;
			}

			buffLen = this._push(buff, buffLen, codePoint);
			offset++;
			if (offset < strLen) {
				charCode = str.charCodeAt(offset);
			} else {
				break;
			}
		}

		this._buffLen = buffLen;
		this._leftoverHighSurrogate = leftoverHighSurrogate;
	}

	private _push(buff: Uint8Array, buffLen: number, codePoint: number): number {
		if (codePoint < 0x0080) {
			buff[buffLen++] = codePoint;
		} else if (codePoint < 0x0800) {
			buff[buffLen++] = 0b11000000 | ((codePoint & 0b00000000000000000000011111000000) >>> 6);
			buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
		} else if (codePoint < 0x10000) {
			buff[buffLen++] = 0b11100000 | ((codePoint & 0b00000000000000001111000000000000) >>> 12);
			buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000111111000000) >>> 6);
			buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
		} else {
			buff[buffLen++] = 0b11110000 | ((codePoint & 0b00000000000111000000000000000000) >>> 18);
			buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000111111000000000000) >>> 12);
			buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000111111000000) >>> 6);
			buff[buffLen++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
		}

		if (buffLen >= SHA1Constant.BLOCK_SIZE) {
			this._step();
			buffLen -= SHA1Constant.BLOCK_SIZE;
			this._totalLen += SHA1Constant.BLOCK_SIZE;
			// take last 3 in case of UTF8 overflow
			buff[0] = buff[SHA1Constant.BLOCK_SIZE + 0];
			buff[1] = buff[SHA1Constant.BLOCK_SIZE + 1];
			buff[2] = buff[SHA1Constant.BLOCK_SIZE + 2];
		}

		return buffLen;
	}

	public digest(): string {
		if (!this._finished) {
			this._finished = true;
			if (this._leftoverHighSurrogate) {
				// illegal => unicode replacement character
				this._leftoverHighSurrogate = 0;
				this._buffLen = this._push(this._buff, this._buffLen, SHA1Constant.UNICODE_REPLACEMENT);
			}
			this._totalLen += this._buffLen;
			this._wrapUp();
		}

		return toHexString(this._h0) + toHexString(this._h1) + toHexString(this._h2) + toHexString(this._h3) + toHexString(this._h4);
	}

	private _wrapUp(): void {
		this._buff[this._buffLen++] = 0x80;
		fill(this._buff, this._buffLen);

		if (this._buffLen > 56) {
			this._step();
			fill(this._buff);
		}

		// this will fit because the mantissa can cover up to 52 bits
		const ml = 8 * this._totalLen;

		this._buffDV.setUint32(56, Math.floor(ml / 4294967296), false);
		this._buffDV.setUint32(60, ml % 4294967296, false);

		this._step();
	}

	private _step(): void {
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

		let f: number, k: number;
		let temp: number;

		for (let j = 0; j < 80; j++) {
			if (j < 20) {
				f = (b & c) | ((~b) & d);
				k = 0x5A827999;
			} else if (j < 40) {
				f = b ^ c ^ d;
				k = 0x6ED9EBA1;
			} else if (j < 60) {
				f = (b & c) | (b & d) | (c & d);
				k = 0x8F1BBCDC;
			} else {
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
