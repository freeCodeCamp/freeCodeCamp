/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Hash = require("../Hash");

// 65536 is the size of a wasm memory page
// 64 is the maximum chunk size for every possible wasm hash implementation
// 4 is the maximum number of bytes per char for string encoding (max is utf-8)
// ~3 makes sure that it's always a block of 4 chars, so avoid partially encoded bytes for base64
const MAX_SHORT_STRING = Math.floor((65536 - 64) / 4) & ~3;

/**
 * Represents the wasm hash runtime component.
 * @typedef {object} WasmExports
 * @property {WebAssembly.Memory} memory
 * @property {() => void} init
 * @property {(length: number) => void} update
 * @property {(length: number) => void} final
 */

class WasmHash extends Hash {
	/**
	 * Creates an instance of WasmHash.
	 * @param {WebAssembly.Instance} instance wasm instance
	 * @param {WebAssembly.Instance[]} instancesPool pool of instances
	 * @param {number} chunkSize size of data chunks passed to wasm
	 * @param {number} digestSize size of digest returned by wasm
	 */
	constructor(instance, instancesPool, chunkSize, digestSize) {
		super();

		const exports = /** @type {WasmExports} */ (instance.exports);
		exports.init();
		/** @type {WasmExports} */
		this.exports = exports;
		/** @type {Buffer} */
		this.mem = Buffer.from(exports.memory.buffer, 0, 65536);
		/** @type {number} */
		this.buffered = 0;
		/** @type {WebAssembly.Instance[]} */
		this.instancesPool = instancesPool;
		/** @type {number} */
		this.chunkSize = chunkSize;
		/** @type {number} */
		this.digestSize = digestSize;
	}

	reset() {
		this.buffered = 0;
		this.exports.init();
	}

	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @overload
	 * @param {string | Buffer} data data
	 * @returns {Hash} updated hash
	 */
	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @overload
	 * @param {string} data data
	 * @param {string=} inputEncoding data encoding
	 * @returns {this} updated hash
	 */
	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @param {string | Buffer} data data
	 * @param {string=} inputEncoding data encoding
	 * @returns {this} updated hash
	 */
	update(data, inputEncoding) {
		if (typeof data === "string") {
			while (data.length > MAX_SHORT_STRING) {
				this._updateWithShortString(
					data.slice(0, MAX_SHORT_STRING),
					/** @type {NodeJS.BufferEncoding} */
					(inputEncoding)
				);
				data = data.slice(MAX_SHORT_STRING);
			}
			this._updateWithShortString(
				data,
				/** @type {NodeJS.BufferEncoding} */
				(inputEncoding)
			);
			return this;
		}
		this._updateWithBuffer(data);
		return this;
	}

	/**
	 * Update with short string.
	 * @param {string} data data
	 * @param {BufferEncoding=} encoding encoding
	 * @returns {void}
	 */
	_updateWithShortString(data, encoding) {
		const { exports, buffered, mem, chunkSize } = this;
		/** @type {number} */
		let endPos;
		if (data.length < 70) {
			// eslint-disable-next-line unicorn/text-encoding-identifier-case
			if (!encoding || encoding === "utf-8" || encoding === "utf8") {
				endPos = buffered;
				for (let i = 0; i < data.length; i++) {
					const cc = data.charCodeAt(i);
					if (cc < 0x80) {
						mem[endPos++] = cc;
					} else if (cc < 0x800) {
						mem[endPos] = (cc >> 6) | 0xc0;
						mem[endPos + 1] = (cc & 0x3f) | 0x80;
						endPos += 2;
					} else {
						// bail-out for weird chars
						endPos += mem.write(data.slice(i), endPos, encoding);
						break;
					}
				}
			} else if (encoding === "latin1") {
				endPos = buffered;
				for (let i = 0; i < data.length; i++) {
					const cc = data.charCodeAt(i);
					mem[endPos++] = cc;
				}
			} else {
				endPos = buffered + mem.write(data, buffered, encoding);
			}
		} else {
			endPos = buffered + mem.write(data, buffered, encoding);
		}
		if (endPos < chunkSize) {
			this.buffered = endPos;
		} else {
			const l = endPos & ~(this.chunkSize - 1);
			exports.update(l);
			const newBuffered = endPos - l;
			this.buffered = newBuffered;
			if (newBuffered > 0) mem.copyWithin(0, l, endPos);
		}
	}

	/**
	 * Update with buffer.
	 * @param {Buffer} data data
	 * @returns {void}
	 */
	_updateWithBuffer(data) {
		const { exports, buffered, mem } = this;
		const length = data.length;
		if (buffered + length < this.chunkSize) {
			data.copy(mem, buffered, 0, length);
			this.buffered += length;
		} else {
			const l = (buffered + length) & ~(this.chunkSize - 1);
			if (l > 65536) {
				let i = 65536 - buffered;
				data.copy(mem, buffered, 0, i);
				exports.update(65536);
				const stop = l - buffered - 65536;
				while (i < stop) {
					data.copy(mem, 0, i, i + 65536);
					exports.update(65536);
					i += 65536;
				}
				data.copy(mem, 0, i, l - buffered);
				exports.update(l - buffered - i);
			} else {
				data.copy(mem, buffered, 0, l - buffered);
				exports.update(l);
			}
			const newBuffered = length + buffered - l;
			this.buffered = newBuffered;
			if (newBuffered > 0) data.copy(mem, 0, length - newBuffered, length);
		}
	}

	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @overload
	 * @returns {Buffer} digest
	 */
	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @overload
	 * @param {string=} encoding encoding of the return value
	 * @returns {string} digest
	 */
	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @param {string=} encoding encoding of the return value
	 * @returns {string | Buffer} digest
	 */
	digest(encoding) {
		const { exports, buffered, mem, digestSize } = this;
		exports.final(buffered);
		this.instancesPool.push(this);
		const hex = mem.toString("latin1", 0, digestSize);
		if (encoding === "hex") return hex;
		if (encoding === "binary" || !encoding) return Buffer.from(hex, "hex");
		return Buffer.from(hex, "hex").toString(
			/** @type {NodeJS.BufferEncoding} */ (encoding)
		);
	}
}

/**
 * Returns wasm hash.
 * @param {WebAssembly.Module} wasmModule wasm module
 * @param {WasmHash[]} instancesPool pool of instances
 * @param {number} chunkSize size of data chunks passed to wasm
 * @param {number} digestSize size of digest returned by wasm
 * @returns {WasmHash} wasm hash
 */
const create = (wasmModule, instancesPool, chunkSize, digestSize) => {
	if (instancesPool.length > 0) {
		const old = /** @type {WasmHash} */ (instancesPool.pop());
		old.reset();
		return old;
	}

	return new WasmHash(
		new WebAssembly.Instance(wasmModule),
		instancesPool,
		chunkSize,
		digestSize
	);
};

create.MAX_SHORT_STRING = MAX_SHORT_STRING;

module.exports = create;
