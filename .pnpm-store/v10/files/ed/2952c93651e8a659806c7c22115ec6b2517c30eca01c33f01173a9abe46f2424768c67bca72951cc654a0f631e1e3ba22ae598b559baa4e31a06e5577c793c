/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const { constants } = require("buffer");
const { pipeline } = require("stream");
const {
	createBrotliCompress,
	createBrotliDecompress,
	createGzip,
	createGunzip,
	constants: zConstants
} = require("zlib");
const createHash = require("../util/createHash");
const { dirname, join, mkdirp } = require("../util/fs");
const memoize = require("../util/memoize");
const SerializerMiddleware = require("./SerializerMiddleware");

/** @typedef {typeof import("../util/Hash")} Hash */
/** @typedef {import("../util/fs").IStats} IStats */
/** @typedef {import("../util/fs").IntermediateFileSystem} IntermediateFileSystem */
/** @typedef {import("./types").BufferSerializableType} BufferSerializableType */

/*
Format:

File -> Header Section*

Version -> u32
AmountOfSections -> u32
SectionSize -> i32 (if less than zero represents lazy value)

Header -> Version AmountOfSections SectionSize*

Buffer -> n bytes
Section -> Buffer

*/

// "wpc" + 1 in little-endian
const VERSION = 0x01637077;
const WRITE_LIMIT_TOTAL = 0x7fff0000;
const WRITE_LIMIT_CHUNK = 511 * 1024 * 1024;

/**
 * @param {Buffer[]} buffers buffers
 * @param {string | Hash} hashFunction hash function to use
 * @returns {string} hash
 */
const hashForName = (buffers, hashFunction) => {
	const hash = createHash(hashFunction);
	for (const buf of buffers) hash.update(buf);
	return /** @type {string} */ (hash.digest("hex"));
};

const COMPRESSION_CHUNK_SIZE = 100 * 1024 * 1024;
const DECOMPRESSION_CHUNK_SIZE = 100 * 1024 * 1024;

/** @type {function(Buffer, number, number): void} */
const writeUInt64LE = Buffer.prototype.writeBigUInt64LE
	? (buf, value, offset) => {
			buf.writeBigUInt64LE(BigInt(value), offset);
		}
	: (buf, value, offset) => {
			const low = value % 0x100000000;
			const high = (value - low) / 0x100000000;
			buf.writeUInt32LE(low, offset);
			buf.writeUInt32LE(high, offset + 4);
		};

/** @type {function(Buffer, number): void} */
const readUInt64LE = Buffer.prototype.readBigUInt64LE
	? (buf, offset) => Number(buf.readBigUInt64LE(offset))
	: (buf, offset) => {
			const low = buf.readUInt32LE(offset);
			const high = buf.readUInt32LE(offset + 4);
			return high * 0x100000000 + low;
		};

/**
 * @typedef {object} SerializeResult
 * @property {string | false} name
 * @property {number} size
 * @property {Promise<any>=} backgroundJob
 */

/**
 * @param {FileMiddleware} middleware this
 * @param {BufferSerializableType[] | Promise<BufferSerializableType[]>} data data to be serialized
 * @param {string | boolean} name file base name
 * @param {function(string | false, Buffer[], number): Promise<void>} writeFile writes a file
 * @param {string | Hash} hashFunction hash function to use
 * @returns {Promise<SerializeResult>} resulting file pointer and promise
 */
const serialize = async (
	middleware,
	data,
	name,
	writeFile,
	hashFunction = "md4"
) => {
	/** @type {(Buffer[] | Buffer | SerializeResult | Promise<SerializeResult>)[]} */
	const processedData = [];
	/** @type {WeakMap<SerializeResult, function(): any | Promise<any>>} */
	const resultToLazy = new WeakMap();
	/** @type {Buffer[] | undefined} */
	let lastBuffers;
	for (const item of await data) {
		if (typeof item === "function") {
			if (!SerializerMiddleware.isLazy(item))
				throw new Error("Unexpected function");
			if (!SerializerMiddleware.isLazy(item, middleware)) {
				throw new Error(
					"Unexpected lazy value with non-this target (can't pass through lazy values)"
				);
			}
			lastBuffers = undefined;
			const serializedInfo = SerializerMiddleware.getLazySerializedValue(item);
			if (serializedInfo) {
				if (typeof serializedInfo === "function") {
					throw new Error(
						"Unexpected lazy value with non-this target (can't pass through lazy values)"
					);
				} else {
					processedData.push(serializedInfo);
				}
			} else {
				const content = item();
				if (content) {
					const options = SerializerMiddleware.getLazyOptions(item);
					processedData.push(
						serialize(
							middleware,
							content,
							(options && options.name) || true,
							writeFile,
							hashFunction
						).then(result => {
							/** @type {any} */ (item).options.size = result.size;
							resultToLazy.set(result, item);
							return result;
						})
					);
				} else {
					throw new Error(
						"Unexpected falsy value returned by lazy value function"
					);
				}
			}
		} else if (item) {
			if (lastBuffers) {
				lastBuffers.push(item);
			} else {
				lastBuffers = [item];
				processedData.push(lastBuffers);
			}
		} else {
			throw new Error("Unexpected falsy value in items array");
		}
	}
	/** @type {Promise<any>[]} */
	const backgroundJobs = [];
	const resolvedData = (
		await Promise.all(
			/** @type {Promise<Buffer[] | Buffer | SerializeResult>[]} */
			(processedData)
		)
	).map(item => {
		if (Array.isArray(item) || Buffer.isBuffer(item)) return item;

		backgroundJobs.push(item.backgroundJob);
		// create pointer buffer from size and name
		const name = /** @type {string} */ (item.name);
		const nameBuffer = Buffer.from(name);
		const buf = Buffer.allocUnsafe(8 + nameBuffer.length);
		writeUInt64LE(buf, item.size, 0);
		nameBuffer.copy(buf, 8, 0);
		const lazy = resultToLazy.get(item);
		SerializerMiddleware.setLazySerializedValue(lazy, buf);
		return buf;
	});
	/** @type {number[]} */
	const lengths = [];
	for (const item of resolvedData) {
		if (Array.isArray(item)) {
			let l = 0;
			for (const b of item) l += b.length;
			while (l > 0x7fffffff) {
				lengths.push(0x7fffffff);
				l -= 0x7fffffff;
			}
			lengths.push(l);
		} else if (item) {
			lengths.push(-item.length);
		} else {
			throw new Error(`Unexpected falsy value in resolved data ${item}`);
		}
	}
	const header = Buffer.allocUnsafe(8 + lengths.length * 4);
	header.writeUInt32LE(VERSION, 0);
	header.writeUInt32LE(lengths.length, 4);
	for (let i = 0; i < lengths.length; i++) {
		header.writeInt32LE(lengths[i], 8 + i * 4);
	}
	/** @type {Buffer[]} */
	const buf = [header];
	for (const item of resolvedData) {
		if (Array.isArray(item)) {
			for (const b of item) buf.push(b);
		} else if (item) {
			buf.push(item);
		}
	}
	if (name === true) {
		name = hashForName(buf, hashFunction);
	}
	let size = 0;
	for (const b of buf) size += b.length;
	backgroundJobs.push(writeFile(name, buf, size));
	return {
		size,
		name,
		backgroundJob:
			backgroundJobs.length === 1
				? backgroundJobs[0]
				: Promise.all(backgroundJobs)
	};
};

/**
 * @param {FileMiddleware} middleware this
 * @param {string | false} name filename
 * @param {function(string | false): Promise<Buffer[]>} readFile read content of a file
 * @returns {Promise<BufferSerializableType[]>} deserialized data
 */
const deserialize = async (middleware, name, readFile) => {
	const contents = await readFile(name);
	if (contents.length === 0) throw new Error(`Empty file ${name}`);
	let contentsIndex = 0;
	let contentItem = contents[0];
	let contentItemLength = contentItem.length;
	let contentPosition = 0;
	if (contentItemLength === 0) throw new Error(`Empty file ${name}`);
	const nextContent = () => {
		contentsIndex++;
		contentItem = contents[contentsIndex];
		contentItemLength = contentItem.length;
		contentPosition = 0;
	};
	/**
	 * @param {number} n number of bytes to ensure
	 */
	const ensureData = n => {
		if (contentPosition === contentItemLength) {
			nextContent();
		}
		while (contentItemLength - contentPosition < n) {
			const remaining = contentItem.slice(contentPosition);
			let lengthFromNext = n - remaining.length;
			const buffers = [remaining];
			for (let i = contentsIndex + 1; i < contents.length; i++) {
				const l = contents[i].length;
				if (l > lengthFromNext) {
					buffers.push(contents[i].slice(0, lengthFromNext));
					contents[i] = contents[i].slice(lengthFromNext);
					lengthFromNext = 0;
					break;
				} else {
					buffers.push(contents[i]);
					contentsIndex = i;
					lengthFromNext -= l;
				}
			}
			if (lengthFromNext > 0) throw new Error("Unexpected end of data");
			contentItem = Buffer.concat(buffers, n);
			contentItemLength = n;
			contentPosition = 0;
		}
	};
	/**
	 * @returns {number} value value
	 */
	const readUInt32LE = () => {
		ensureData(4);
		const value = contentItem.readUInt32LE(contentPosition);
		contentPosition += 4;
		return value;
	};
	/**
	 * @returns {number} value value
	 */
	const readInt32LE = () => {
		ensureData(4);
		const value = contentItem.readInt32LE(contentPosition);
		contentPosition += 4;
		return value;
	};
	/**
	 * @param {number} l length
	 * @returns {Buffer} buffer
	 */
	const readSlice = l => {
		ensureData(l);
		if (contentPosition === 0 && contentItemLength === l) {
			const result = contentItem;
			if (contentsIndex + 1 < contents.length) {
				nextContent();
			} else {
				contentPosition = l;
			}
			return result;
		}
		const result = contentItem.slice(contentPosition, contentPosition + l);
		contentPosition += l;
		// we clone the buffer here to allow the original content to be garbage collected
		return l * 2 < contentItem.buffer.byteLength ? Buffer.from(result) : result;
	};
	const version = readUInt32LE();
	if (version !== VERSION) {
		throw new Error("Invalid file version");
	}
	const sectionCount = readUInt32LE();
	const lengths = [];
	let lastLengthPositive = false;
	for (let i = 0; i < sectionCount; i++) {
		const value = readInt32LE();
		const valuePositive = value >= 0;
		if (lastLengthPositive && valuePositive) {
			lengths[lengths.length - 1] += value;
		} else {
			lengths.push(value);
			lastLengthPositive = valuePositive;
		}
	}
	const result = [];
	for (let length of lengths) {
		if (length < 0) {
			const slice = readSlice(-length);
			const size = Number(readUInt64LE(slice, 0));
			const nameBuffer = slice.slice(8);
			const name = nameBuffer.toString();
			result.push(
				SerializerMiddleware.createLazy(
					memoize(() => deserialize(middleware, name, readFile)),
					middleware,
					{
						name,
						size
					},
					slice
				)
			);
		} else {
			if (contentPosition === contentItemLength) {
				nextContent();
			} else if (contentPosition !== 0) {
				if (length <= contentItemLength - contentPosition) {
					result.push(
						Buffer.from(
							contentItem.buffer,
							contentItem.byteOffset + contentPosition,
							length
						)
					);
					contentPosition += length;
					length = 0;
				} else {
					const l = contentItemLength - contentPosition;
					result.push(
						Buffer.from(
							contentItem.buffer,
							contentItem.byteOffset + contentPosition,
							l
						)
					);
					length -= l;
					contentPosition = contentItemLength;
				}
			} else if (length >= contentItemLength) {
				result.push(contentItem);
				length -= contentItemLength;
				contentPosition = contentItemLength;
			} else {
				result.push(
					Buffer.from(contentItem.buffer, contentItem.byteOffset, length)
				);
				contentPosition += length;
				length = 0;
			}
			while (length > 0) {
				nextContent();
				if (length >= contentItemLength) {
					result.push(contentItem);
					length -= contentItemLength;
					contentPosition = contentItemLength;
				} else {
					result.push(
						Buffer.from(contentItem.buffer, contentItem.byteOffset, length)
					);
					contentPosition += length;
					length = 0;
				}
			}
		}
	}
	return result;
};

/** @typedef {{ filename: string, extension?: string }} FileMiddlewareContext */

/**
 * @typedef {BufferSerializableType[]} DeserializedType
 * @typedef {true} SerializedType
 * @extends {SerializerMiddleware<DeserializedType, SerializedType>}
 */
class FileMiddleware extends SerializerMiddleware {
	/**
	 * @param {IntermediateFileSystem} fs filesystem
	 * @param {string | Hash} hashFunction hash function to use
	 */
	constructor(fs, hashFunction = "md4") {
		super();
		this.fs = fs;
		this._hashFunction = hashFunction;
	}

	/**
	 * @param {DeserializedType} data data
	 * @param {object} context context object
	 * @returns {SerializedType|Promise<SerializedType>} serialized data
	 */
	serialize(data, context) {
		const { filename, extension = "" } = context;
		return new Promise((resolve, reject) => {
			mkdirp(this.fs, dirname(this.fs, filename), err => {
				if (err) return reject(err);

				// It's important that we don't touch existing files during serialization
				// because serialize may read existing files (when deserializing)
				const allWrittenFiles = new Set();
				/**
				 * @param {string | false} name name
				 * @param {Buffer[]} content content
				 * @param {number} size size
				 * @returns {Promise<void>}
				 */
				const writeFile = async (name, content, size) => {
					const file = name
						? join(this.fs, filename, `../${name}${extension}`)
						: filename;
					await new Promise(
						/**
						 * @param {(value?: undefined) => void} resolve resolve
						 * @param {(reason?: Error | null) => void} reject reject
						 */
						(resolve, reject) => {
							let stream = this.fs.createWriteStream(`${file}_`);
							let compression;
							if (file.endsWith(".gz")) {
								compression = createGzip({
									chunkSize: COMPRESSION_CHUNK_SIZE,
									level: zConstants.Z_BEST_SPEED
								});
							} else if (file.endsWith(".br")) {
								compression = createBrotliCompress({
									chunkSize: COMPRESSION_CHUNK_SIZE,
									params: {
										[zConstants.BROTLI_PARAM_MODE]: zConstants.BROTLI_MODE_TEXT,
										[zConstants.BROTLI_PARAM_QUALITY]: 2,
										[zConstants.BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING]: true,
										[zConstants.BROTLI_PARAM_SIZE_HINT]: size
									}
								});
							}
							if (compression) {
								pipeline(compression, stream, reject);
								stream = compression;
								stream.on("finish", () => resolve());
							} else {
								stream.on("error", err => reject(err));
								stream.on("finish", () => resolve());
							}
							// split into chunks for WRITE_LIMIT_CHUNK size
							/** @type {TODO[]} */
							const chunks = [];
							for (const b of content) {
								if (b.length < WRITE_LIMIT_CHUNK) {
									chunks.push(b);
								} else {
									for (let i = 0; i < b.length; i += WRITE_LIMIT_CHUNK) {
										chunks.push(b.slice(i, i + WRITE_LIMIT_CHUNK));
									}
								}
							}

							const len = chunks.length;
							let i = 0;
							/**
							 * @param {(Error | null)=} err err
							 */
							const batchWrite = err => {
								// will be handled in "on" error handler
								if (err) return;

								if (i === len) {
									stream.end();
									return;
								}

								// queue up a batch of chunks up to the write limit
								// end is exclusive
								let end = i;
								let sum = chunks[end++].length;
								while (end < len) {
									sum += chunks[end].length;
									if (sum > WRITE_LIMIT_TOTAL) break;
									end++;
								}
								while (i < end - 1) {
									stream.write(chunks[i++]);
								}
								stream.write(chunks[i++], batchWrite);
							};
							batchWrite();
						}
					);
					if (name) allWrittenFiles.add(file);
				};

				resolve(
					serialize(this, data, false, writeFile, this._hashFunction).then(
						async ({ backgroundJob }) => {
							await backgroundJob;

							// Rename the index file to disallow access during inconsistent file state
							await new Promise(
								/**
								 * @param {(value?: undefined) => void} resolve resolve
								 */
								resolve => {
									this.fs.rename(filename, `${filename}.old`, err => {
										resolve();
									});
								}
							);

							// update all written files
							await Promise.all(
								Array.from(
									allWrittenFiles,
									file =>
										new Promise(
											/**
											 * @param {(value?: undefined) => void} resolve resolve
											 * @param {(reason?: Error | null) => void} reject reject
											 * @returns {void}
											 */
											(resolve, reject) => {
												this.fs.rename(`${file}_`, file, err => {
													if (err) return reject(err);
													resolve();
												});
											}
										)
								)
							);

							// As final step automatically update the index file to have a consistent pack again
							await new Promise(
								/**
								 * @param {(value?: undefined) => void} resolve resolve
								 * @returns {void}
								 */
								resolve => {
									this.fs.rename(`${filename}_`, filename, err => {
										if (err) return reject(err);
										resolve();
									});
								}
							);
							return /** @type {true} */ (true);
						}
					)
				);
			});
		});
	}

	/**
	 * @param {SerializedType} data data
	 * @param {object} context context object
	 * @returns {DeserializedType|Promise<DeserializedType>} deserialized data
	 */
	deserialize(data, context) {
		const { filename, extension = "" } = context;
		/**
		 * @param {string | boolean} name name
		 * @returns {Promise<TODO>} result
		 */
		const readFile = name =>
			new Promise((resolve, reject) => {
				const file = name
					? join(this.fs, filename, `../${name}${extension}`)
					: filename;
				this.fs.stat(file, (err, stats) => {
					if (err) {
						reject(err);
						return;
					}
					let remaining = /** @type {IStats} */ (stats).size;
					/** @type {Buffer | undefined} */
					let currentBuffer;
					/** @type {number | undefined} */
					let currentBufferUsed;
					/** @type {any[]} */
					const buf = [];
					/** @type {import("zlib").Zlib & import("stream").Transform | undefined} */
					let decompression;
					if (file.endsWith(".gz")) {
						decompression = createGunzip({
							chunkSize: DECOMPRESSION_CHUNK_SIZE
						});
					} else if (file.endsWith(".br")) {
						decompression = createBrotliDecompress({
							chunkSize: DECOMPRESSION_CHUNK_SIZE
						});
					}
					if (decompression) {
						let newResolve;
						let newReject;
						resolve(
							Promise.all([
								new Promise((rs, rj) => {
									newResolve = rs;
									newReject = rj;
								}),
								new Promise((resolve, reject) => {
									decompression.on("data", chunk => buf.push(chunk));
									decompression.on("end", () => resolve());
									decompression.on("error", err => reject(err));
								})
							]).then(() => buf)
						);
						resolve = newResolve;
						reject = newReject;
					}
					this.fs.open(file, "r", (err, _fd) => {
						if (err) {
							reject(err);
							return;
						}
						const fd = /** @type {number} */ (_fd);
						const read = () => {
							if (currentBuffer === undefined) {
								currentBuffer = Buffer.allocUnsafeSlow(
									Math.min(
										constants.MAX_LENGTH,
										remaining,
										decompression ? DECOMPRESSION_CHUNK_SIZE : Infinity
									)
								);
								currentBufferUsed = 0;
							}
							let readBuffer = currentBuffer;
							let readOffset = /** @type {number} */ (currentBufferUsed);
							let readLength =
								currentBuffer.length -
								/** @type {number} */ (currentBufferUsed);
							// values passed to fs.read must be valid int32 values
							if (readOffset > 0x7fffffff) {
								readBuffer = currentBuffer.slice(readOffset);
								readOffset = 0;
							}
							if (readLength > 0x7fffffff) {
								readLength = 0x7fffffff;
							}
							this.fs.read(
								fd,
								readBuffer,
								readOffset,
								readLength,
								null,
								(err, bytesRead) => {
									if (err) {
										this.fs.close(fd, () => {
											reject(err);
										});
										return;
									}
									/** @type {number} */
									(currentBufferUsed) += bytesRead;
									remaining -= bytesRead;
									if (
										currentBufferUsed ===
										/** @type {Buffer} */ (currentBuffer).length
									) {
										if (decompression) {
											decompression.write(currentBuffer);
										} else {
											buf.push(currentBuffer);
										}
										currentBuffer = undefined;
										if (remaining === 0) {
											if (decompression) {
												decompression.end();
											}
											this.fs.close(fd, err => {
												if (err) {
													reject(err);
													return;
												}
												resolve(buf);
											});
											return;
										}
									}
									read();
								}
							);
						};
						read();
					});
				});
			});
		return deserialize(this, false, readFile);
	}
}

module.exports = FileMiddleware;
