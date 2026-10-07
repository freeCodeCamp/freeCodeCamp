(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.msgpackr = {}));
})(this, (function (exports) { 'use strict';

	var decoder;
	try {
		decoder = new TextDecoder();
	} catch(error) {}
	var src;
	var srcEnd;
	var position$1 = 0;
	var currentUnpackr = {};
	var currentStructures;
	var srcString;
	var srcStringStart = 0;
	var srcStringEnd = 0;
	var bundledStrings$1;
	var referenceMap;
	var currentExtensions = [];
	var dataView;
	var defaultOptions = {
		useRecords: false,
		mapsAsObjects: true
	};
	class C1Type {}
	const C1 = new C1Type();
	C1.name = 'MessagePack 0xC1';
	var sequentialMode = false;
	var inlineObjectReadThreshold = 2;
	var readStruct;
	// no-eval build
	try {
		new Function('');
	} catch(error) {
		// if eval variants are not supported, do not create inline object readers ever
		inlineObjectReadThreshold = Infinity;
	}

	class Unpackr {
		constructor(options) {
			if (options) {
				if (options.useRecords === false && options.mapsAsObjects === undefined)
					options.mapsAsObjects = true;
				if (options.sequential && options.trusted !== false) {
					options.trusted = true;
					if (!options.structures && options.useRecords != false) {
						options.structures = [];
						if (!options.maxSharedStructures)
							options.maxSharedStructures = 0;
					}
				}
				if (options.structures)
					options.structures.sharedLength = options.structures.length;
				else if (options.getStructures) {
					(options.structures = []).uninitialized = true; // this is what we use to denote an uninitialized structures
					options.structures.sharedLength = 0;
				}
				if (options.int64AsNumber) {
					options.int64AsType = 'number';
				}
			}
			Object.assign(this, options);
		}
		unpack(source, options) {
			if (src) {
				// re-entrant execution, save the state and restore it after we do this unpack
				return saveState(() => {
					clearSource();
					return this ? this.unpack(source, options) : Unpackr.prototype.unpack.call(defaultOptions, source, options)
				})
			}
			if (!source.buffer && source.constructor === ArrayBuffer)
				source = typeof Buffer !== 'undefined' ? Buffer.from(source) : new Uint8Array(source);
			if (typeof options === 'object') {
				srcEnd = options.end || source.length;
				position$1 = options.start || 0;
			} else {
				position$1 = 0;
				srcEnd = options > -1 ? options : source.length;
			}
			srcStringEnd = 0;
			srcString = null;
			bundledStrings$1 = null;
			src = source;
			// this provides cached access to the data view for a buffer if it is getting reused, which is a recommend
			// technique for getting data from a database where it can be copied into an existing buffer instead of creating
			// new ones
			try {
				dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength));
			} catch(error) {
				// if it doesn't have a buffer, maybe it is the wrong type of object
				src = null;
				if (source instanceof Uint8Array)
					throw error
				throw new Error('Source must be a Uint8Array or Buffer but was a ' + ((source && typeof source == 'object') ? source.constructor.name : typeof source))
			}
			if (this instanceof Unpackr) {
				currentUnpackr = this;
				if (this.structures) {
					currentStructures = this.structures;
					return checkedRead(options)
				} else if (!currentStructures || currentStructures.length > 0) {
					currentStructures = [];
				}
			} else {
				currentUnpackr = defaultOptions;
				if (!currentStructures || currentStructures.length > 0)
					currentStructures = [];
			}
			return checkedRead(options)
		}
		unpackMultiple(source, forEach) {
			let values, lastPosition = 0;
			try {
				sequentialMode = true;
				let size = source.length;
				let value = this ? this.unpack(source, size) : defaultUnpackr.unpack(source, size);
				if (forEach) {
					if (forEach(value, lastPosition, position$1) === false) return;
					while(position$1 < size) {
						lastPosition = position$1;
						if (forEach(checkedRead(), lastPosition, position$1) === false) {
							return
						}
					}
				}
				else {
					values = [ value ];
					while(position$1 < size) {
						lastPosition = position$1;
						values.push(checkedRead());
					}
					return values
				}
			} catch(error) {
				error.lastPosition = lastPosition;
				error.values = values;
				throw error
			} finally {
				sequentialMode = false;
				clearSource();
			}
		}
		_mergeStructures(loadedStructures, existingStructures) {
			loadedStructures = loadedStructures || [];
			if (Object.isFrozen(loadedStructures))
				loadedStructures = loadedStructures.map(structure => structure.slice(0));
			for (let i = 0, l = loadedStructures.length; i < l; i++) {
				let structure = loadedStructures[i];
				if (structure) {
					structure.isShared = true;
					if (i >= 32)
						structure.highByte = (i - 32) >> 5;
				}
			}
			loadedStructures.sharedLength = loadedStructures.length;
			for (let id in existingStructures || []) {
				if (id >= 0) {
					let structure = loadedStructures[id];
					let existing = existingStructures[id];
					if (existing) {
						if (structure)
							(loadedStructures.restoreStructures || (loadedStructures.restoreStructures = []))[id] = structure;
						loadedStructures[id] = existing;
					}
				}
			}
			return this.structures = loadedStructures
		}
		decode(source, options) {
			return this.unpack(source, options)
		}
	}
	function checkedRead(options) {
		try {
			if (!currentUnpackr.trusted && !sequentialMode) {
				let sharedLength = currentStructures.sharedLength || 0;
				if (sharedLength < currentStructures.length)
					currentStructures.length = sharedLength;
			}
			let result;
			if (currentUnpackr.randomAccessStructure && src[position$1] < 0x40 && src[position$1] >= 0x20 && readStruct) {
				result = readStruct(src, position$1, srcEnd, currentUnpackr);
				src = null; // dispose of this so that recursive unpack calls don't save state
				if (!(options && options.lazy) && result)
					result = result.toJSON();
				position$1 = srcEnd;
			} else
				result = read();
			if (bundledStrings$1) { // bundled strings to skip past
				position$1 = bundledStrings$1.postBundlePosition;
				bundledStrings$1 = null;
			}
			if (sequentialMode)
				// we only need to restore the structures if there was an error, but if we completed a read,
				// we can clear this out and keep the structures we read
				currentStructures.restoreStructures = null;

			if (position$1 == srcEnd) {
				// finished reading this source, cleanup references
				if (currentStructures && currentStructures.restoreStructures)
					restoreStructures();
				currentStructures = null;
				src = null;
				if (referenceMap)
					referenceMap = null;
			} else if (position$1 > srcEnd) {
				// over read
				throw new Error('Unexpected end of MessagePack data')
			} else if (!sequentialMode) {
				let jsonView;
				try {
					jsonView = JSON.stringify(result, (_, value) => typeof value === "bigint" ? `${value}n` : value).slice(0, 100);
				} catch(error) {
					jsonView = '(JSON view not available ' + error + ')';
				}
				throw new Error('Data read, but end of buffer not reached ' + jsonView)
			}
			// else more to read, but we are reading sequentially, so don't clear source yet
			return result
		} catch(error) {
			if (currentStructures && currentStructures.restoreStructures)
				restoreStructures();
			clearSource();
			if (error instanceof RangeError || error.message.startsWith('Unexpected end of buffer') || position$1 > srcEnd) {
				error.incomplete = true;
			}
			throw error
		}
	}

	function restoreStructures() {
		for (let id in currentStructures.restoreStructures) {
			currentStructures[id] = currentStructures.restoreStructures[id];
		}
		currentStructures.restoreStructures = null;
	}

	function read() {
		let token = src[position$1++];
		if (token < 0xa0) {
			if (token < 0x80) {
				if (token < 0x40)
					return token
				else {
					let structure = currentStructures[token & 0x3f] ||
						currentUnpackr.getStructures && loadStructures()[token & 0x3f];
					if (structure) {
						if (!structure.read) {
							structure.read = createStructureReader(structure, token & 0x3f);
						}
						return structure.read()
					} else
						return token
				}
			} else if (token < 0x90) {
				// map
				token -= 0x80;
				if (currentUnpackr.mapsAsObjects) {
					let object = {};
					for (let i = 0; i < token; i++) {
						let key = readKey();
						if (key === '__proto__')
							key = '__proto_';
						object[key] = read();
					}
					return object
				} else {
					let map = new Map();
					for (let i = 0; i < token; i++) {
						map.set(read(), read());
					}
					return map
				}
			} else {
				token -= 0x90;
				let array = new Array(token);
				for (let i = 0; i < token; i++) {
					array[i] = read();
				}
				if (currentUnpackr.freezeData)
					return Object.freeze(array)
				return array
			}
		} else if (token < 0xc0) {
			// fixstr
			let length = token - 0xa0;
			if (srcStringEnd >= position$1) {
				return srcString.slice(position$1 - srcStringStart, (position$1 += length) - srcStringStart)
			}
			if (srcStringEnd == 0 && srcEnd < 140) {
				// for small blocks, avoiding the overhead of the extract call is helpful
				let string = length < 16 ? shortStringInJS(length) : longStringInJS(length);
				if (string != null)
					return string
			}
			return readFixedString(length)
		} else {
			let value;
			switch (token) {
				case 0xc0: return null
				case 0xc1:
					if (bundledStrings$1) {
						value = read(); // followed by the length of the string in characters (not bytes!)
						if (value > 0)
							return bundledStrings$1[1].slice(bundledStrings$1.position1, bundledStrings$1.position1 += value)
						else
							return bundledStrings$1[0].slice(bundledStrings$1.position0, bundledStrings$1.position0 -= value)
					}
					return C1; // "never-used", return special object to denote that
				case 0xc2: return false
				case 0xc3: return true
				case 0xc4:
					// bin 8
					value = src[position$1++];
					if (value === undefined)
						throw new Error('Unexpected end of buffer')
					return readBin(value)
				case 0xc5:
					// bin 16
					value = dataView.getUint16(position$1);
					position$1 += 2;
					return readBin(value)
				case 0xc6:
					// bin 32
					value = dataView.getUint32(position$1);
					position$1 += 4;
					return readBin(value)
				case 0xc7:
					// ext 8
					return readExt(src[position$1++])
				case 0xc8:
					// ext 16
					value = dataView.getUint16(position$1);
					position$1 += 2;
					return readExt(value)
				case 0xc9:
					// ext 32
					value = dataView.getUint32(position$1);
					position$1 += 4;
					return readExt(value)
				case 0xca:
					value = dataView.getFloat32(position$1);
					if (currentUnpackr.useFloat32 > 2) {
						// this does rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
						let multiplier = mult10[((src[position$1] & 0x7f) << 1) | (src[position$1 + 1] >> 7)];
						position$1 += 4;
						return ((multiplier * value + (value > 0 ? 0.5 : -0.5)) >> 0) / multiplier
					}
					position$1 += 4;
					return value
				case 0xcb:
					value = dataView.getFloat64(position$1);
					position$1 += 8;
					return value
				// uint handlers
				case 0xcc:
					return src[position$1++]
				case 0xcd:
					value = dataView.getUint16(position$1);
					position$1 += 2;
					return value
				case 0xce:
					value = dataView.getUint32(position$1);
					position$1 += 4;
					return value
				case 0xcf:
					if (currentUnpackr.int64AsType === 'number') {
						value = dataView.getUint32(position$1) * 0x100000000;
						value += dataView.getUint32(position$1 + 4);
					} else if (currentUnpackr.int64AsType === 'string') {
						value = dataView.getBigUint64(position$1).toString();
					} else if (currentUnpackr.int64AsType === 'auto') {
						value = dataView.getBigUint64(position$1);
						if (value<=BigInt(2)<<BigInt(52)) value=Number(value);
					} else
						value = dataView.getBigUint64(position$1);
					position$1 += 8;
					return value

				// int handlers
				case 0xd0:
					return dataView.getInt8(position$1++)
				case 0xd1:
					value = dataView.getInt16(position$1);
					position$1 += 2;
					return value
				case 0xd2:
					value = dataView.getInt32(position$1);
					position$1 += 4;
					return value
				case 0xd3:
					if (currentUnpackr.int64AsType === 'number') {
						value = dataView.getInt32(position$1) * 0x100000000;
						value += dataView.getUint32(position$1 + 4);
					} else if (currentUnpackr.int64AsType === 'string') {
						value = dataView.getBigInt64(position$1).toString();
					} else if (currentUnpackr.int64AsType === 'auto') {
						value = dataView.getBigInt64(position$1);
						if (value>=BigInt(-2)<<BigInt(52)&&value<=BigInt(2)<<BigInt(52)) value=Number(value);
					} else
						value = dataView.getBigInt64(position$1);
					position$1 += 8;
					return value

				case 0xd4:
					// fixext 1
					value = src[position$1++];
					if (value == 0x72) {
						return recordDefinition(src[position$1++] & 0x3f)
					} else {
						let extension = currentExtensions[value];
						if (extension) {
							if (extension.read) {
								position$1++; // skip filler byte
								return extension.read(read())
							} else if (extension.noBuffer) {
								position$1++; // skip filler byte
								return extension()
							} else
								return extension(src.subarray(position$1, ++position$1))
						} else
							throw new Error('Unknown extension ' + value)
					}
				case 0xd5:
					// fixext 2
					value = src[position$1];
					if (value == 0x72) {
						position$1++;
						return recordDefinition(src[position$1++] & 0x3f, src[position$1++])
					} else
						return readExt(2)
				case 0xd6:
					// fixext 4
					return readExt(4)
				case 0xd7:
					// fixext 8
					return readExt(8)
				case 0xd8:
					// fixext 16
					return readExt(16)
				case 0xd9:
				// str 8
					value = src[position$1++];
					if (srcStringEnd >= position$1) {
						return srcString.slice(position$1 - srcStringStart, (position$1 += value) - srcStringStart)
					}
					return readString8(value)
				case 0xda:
				// str 16
					value = dataView.getUint16(position$1);
					position$1 += 2;
					if (srcStringEnd >= position$1) {
						return srcString.slice(position$1 - srcStringStart, (position$1 += value) - srcStringStart)
					}
					return readString16(value)
				case 0xdb:
				// str 32
					value = dataView.getUint32(position$1);
					position$1 += 4;
					if (srcStringEnd >= position$1) {
						return srcString.slice(position$1 - srcStringStart, (position$1 += value) - srcStringStart)
					}
					return readString32(value)
				case 0xdc:
				// array 16
					value = dataView.getUint16(position$1);
					position$1 += 2;
					return readArray(value)
				case 0xdd:
				// array 32
					value = dataView.getUint32(position$1);
					position$1 += 4;
					return readArray(value)
				case 0xde:
				// map 16
					value = dataView.getUint16(position$1);
					position$1 += 2;
					return readMap(value)
				case 0xdf:
				// map 32
					value = dataView.getUint32(position$1);
					position$1 += 4;
					return readMap(value)
				default: // negative int
					if (token >= 0xe0)
						return token - 0x100
					if (token === undefined) {
						let error = new Error('Unexpected end of MessagePack data');
						error.incomplete = true;
						throw error
					}
					throw new Error('Unknown MessagePack token ' + token)

			}
		}
	}
	const validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
	function createStructureReader(structure, firstId) {
		function readObject() {
			// This initial function is quick to instantiate, but runs slower. After several iterations pay the cost to build the faster function
			if (readObject.count++ > inlineObjectReadThreshold) {
				let readObject = structure.read = (new Function('r', 'return function(){return ' + (currentUnpackr.freezeData ? 'Object.freeze' : '') +
					'({' + structure.map(key => key === '__proto__' ? '__proto_:r()' : validName.test(key) ? key + ':r()' : ('[' + JSON.stringify(key) + ']:r()')).join(',') + '})}'))(read);
				if (structure.highByte === 0)
					structure.read = createSecondByteReader(firstId, structure.read);
				return readObject() // second byte is already read, if there is one so immediately read object
			}
			let object = {};
			for (let i = 0, l = structure.length; i < l; i++) {
				let key = structure[i];
				if (key === '__proto__')
					key = '__proto_';
				object[key] = read();
			}
			if (currentUnpackr.freezeData)
				return Object.freeze(object);
			return object
		}
		readObject.count = 0;
		if (structure.highByte === 0) {
			return createSecondByteReader(firstId, readObject)
		}
		return readObject
	}

	const createSecondByteReader = (firstId, read0) => {
		return function() {
			let highByte = src[position$1++];
			if (highByte === 0)
				return read0()
			let id = firstId < 32 ? -(firstId + (highByte << 5)) : firstId + (highByte << 5);
			let structure = currentStructures[id] || loadStructures()[id];
			if (!structure) {
				throw new Error('Record id is not defined for ' + id)
			}
			if (!structure.read)
				structure.read = createStructureReader(structure, firstId);
			return structure.read()
		}
	};

	function loadStructures() {
		let loadedStructures = saveState(() => {
			// save the state in case getStructures modifies our buffer
			src = null;
			return currentUnpackr.getStructures()
		});
		return currentStructures = currentUnpackr._mergeStructures(loadedStructures, currentStructures)
	}

	var readFixedString = readStringJS;
	var readString8 = readStringJS;
	var readString16 = readStringJS;
	var readString32 = readStringJS;
	let isNativeAccelerationEnabled = false;
	function readStringJS(length) {
		let result;
		if (length < 16) {
			if (result = shortStringInJS(length))
				return result
		}
		if (length > 64 && decoder)
			return decoder.decode(src.subarray(position$1, position$1 += length))
		const end = position$1 + length;
		const units = [];
		result = '';
		while (position$1 < end) {
			const byte1 = src[position$1++];
			if ((byte1 & 0x80) === 0) {
				// 1 byte
				units.push(byte1);
			} else if ((byte1 & 0xe0) === 0xc0) {
				// 2 bytes
				const byte2 = src[position$1++] & 0x3f;
				units.push(((byte1 & 0x1f) << 6) | byte2);
			} else if ((byte1 & 0xf0) === 0xe0) {
				// 3 bytes
				const byte2 = src[position$1++] & 0x3f;
				const byte3 = src[position$1++] & 0x3f;
				units.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
			} else if ((byte1 & 0xf8) === 0xf0) {
				// 4 bytes
				const byte2 = src[position$1++] & 0x3f;
				const byte3 = src[position$1++] & 0x3f;
				const byte4 = src[position$1++] & 0x3f;
				let unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
				if (unit > 0xffff) {
					unit -= 0x10000;
					units.push(((unit >>> 10) & 0x3ff) | 0xd800);
					unit = 0xdc00 | (unit & 0x3ff);
				}
				units.push(unit);
			} else {
				units.push(byte1);
			}

			if (units.length >= 0x1000) {
				result += fromCharCode.apply(String, units);
				units.length = 0;
			}
		}

		if (units.length > 0) {
			result += fromCharCode.apply(String, units);
		}

		return result
	}

	function readArray(length) {
		let array = new Array(length);
		for (let i = 0; i < length; i++) {
			array[i] = read();
		}
		if (currentUnpackr.freezeData)
			return Object.freeze(array)
		return array
	}

	function readMap(length) {
		if (currentUnpackr.mapsAsObjects) {
			let object = {};
			for (let i = 0; i < length; i++) {
				let key = readKey();
				if (key === '__proto__')
					key = '__proto_';
				object[key] = read();
			}
			return object
		} else {
			let map = new Map();
			for (let i = 0; i < length; i++) {
				map.set(read(), read());
			}
			return map
		}
	}

	var fromCharCode = String.fromCharCode;
	function longStringInJS(length) {
		let start = position$1;
		let bytes = new Array(length);
		for (let i = 0; i < length; i++) {
			const byte = src[position$1++];
			if ((byte & 0x80) > 0) {
					position$1 = start;
					return
				}
				bytes[i] = byte;
			}
			return fromCharCode.apply(String, bytes)
	}
	function shortStringInJS(length) {
		if (length < 4) {
			if (length < 2) {
				if (length === 0)
					return ''
				else {
					let a = src[position$1++];
					if ((a & 0x80) > 1) {
						position$1 -= 1;
						return
					}
					return fromCharCode(a)
				}
			} else {
				let a = src[position$1++];
				let b = src[position$1++];
				if ((a & 0x80) > 0 || (b & 0x80) > 0) {
					position$1 -= 2;
					return
				}
				if (length < 3)
					return fromCharCode(a, b)
				let c = src[position$1++];
				if ((c & 0x80) > 0) {
					position$1 -= 3;
					return
				}
				return fromCharCode(a, b, c)
			}
		} else {
			let a = src[position$1++];
			let b = src[position$1++];
			let c = src[position$1++];
			let d = src[position$1++];
			if ((a & 0x80) > 0 || (b & 0x80) > 0 || (c & 0x80) > 0 || (d & 0x80) > 0) {
				position$1 -= 4;
				return
			}
			if (length < 6) {
				if (length === 4)
					return fromCharCode(a, b, c, d)
				else {
					let e = src[position$1++];
					if ((e & 0x80) > 0) {
						position$1 -= 5;
						return
					}
					return fromCharCode(a, b, c, d, e)
				}
			} else if (length < 8) {
				let e = src[position$1++];
				let f = src[position$1++];
				if ((e & 0x80) > 0 || (f & 0x80) > 0) {
					position$1 -= 6;
					return
				}
				if (length < 7)
					return fromCharCode(a, b, c, d, e, f)
				let g = src[position$1++];
				if ((g & 0x80) > 0) {
					position$1 -= 7;
					return
				}
				return fromCharCode(a, b, c, d, e, f, g)
			} else {
				let e = src[position$1++];
				let f = src[position$1++];
				let g = src[position$1++];
				let h = src[position$1++];
				if ((e & 0x80) > 0 || (f & 0x80) > 0 || (g & 0x80) > 0 || (h & 0x80) > 0) {
					position$1 -= 8;
					return
				}
				if (length < 10) {
					if (length === 8)
						return fromCharCode(a, b, c, d, e, f, g, h)
					else {
						let i = src[position$1++];
						if ((i & 0x80) > 0) {
							position$1 -= 9;
							return
						}
						return fromCharCode(a, b, c, d, e, f, g, h, i)
					}
				} else if (length < 12) {
					let i = src[position$1++];
					let j = src[position$1++];
					if ((i & 0x80) > 0 || (j & 0x80) > 0) {
						position$1 -= 10;
						return
					}
					if (length < 11)
						return fromCharCode(a, b, c, d, e, f, g, h, i, j)
					let k = src[position$1++];
					if ((k & 0x80) > 0) {
						position$1 -= 11;
						return
					}
					return fromCharCode(a, b, c, d, e, f, g, h, i, j, k)
				} else {
					let i = src[position$1++];
					let j = src[position$1++];
					let k = src[position$1++];
					let l = src[position$1++];
					if ((i & 0x80) > 0 || (j & 0x80) > 0 || (k & 0x80) > 0 || (l & 0x80) > 0) {
						position$1 -= 12;
						return
					}
					if (length < 14) {
						if (length === 12)
							return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l)
						else {
							let m = src[position$1++];
							if ((m & 0x80) > 0) {
								position$1 -= 13;
								return
							}
							return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m)
						}
					} else {
						let m = src[position$1++];
						let n = src[position$1++];
						if ((m & 0x80) > 0 || (n & 0x80) > 0) {
							position$1 -= 14;
							return
						}
						if (length < 15)
							return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n)
						let o = src[position$1++];
						if ((o & 0x80) > 0) {
							position$1 -= 15;
							return
						}
						return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
					}
				}
			}
		}
	}

	function readOnlyJSString() {
		let token = src[position$1++];
		let length;
		if (token < 0xc0) {
			// fixstr
			length = token - 0xa0;
		} else {
			switch(token) {
				case 0xd9:
				// str 8
					length = src[position$1++];
					break
				case 0xda:
				// str 16
					length = dataView.getUint16(position$1);
					position$1 += 2;
					break
				case 0xdb:
				// str 32
					length = dataView.getUint32(position$1);
					position$1 += 4;
					break
				default:
					throw new Error('Expected string')
			}
		}
		return readStringJS(length)
	}


	function readBin(length) {
		return currentUnpackr.copyBuffers ?
			// specifically use the copying slice (not the node one)
			Uint8Array.prototype.slice.call(src, position$1, position$1 += length) :
			src.subarray(position$1, position$1 += length)
	}
	function readExt(length) {
		let type = src[position$1++];
		if (currentExtensions[type]) {
			let end;
			return currentExtensions[type](src.subarray(position$1, end = (position$1 += length)), (readPosition) => {
				position$1 = readPosition;
				try {
					return read();
				} finally {
					position$1 = end;
				}
			})
		}
		else
			throw new Error('Unknown extension type ' + type)
	}

	var keyCache = new Array(4096);
	function readKey() {
		let length = src[position$1++];
		if (length >= 0xa0 && length < 0xc0) {
			// fixstr, potentially use key cache
			length = length - 0xa0;
			if (srcStringEnd >= position$1) // if it has been extracted, must use it (and faster anyway)
				return srcString.slice(position$1 - srcStringStart, (position$1 += length) - srcStringStart)
			else if (!(srcStringEnd == 0 && srcEnd < 180))
				return readFixedString(length)
		} else { // not cacheable, go back and do a standard read
			position$1--;
			return asSafeString(read())
		}
		let key = ((length << 5) ^ (length > 1 ? dataView.getUint16(position$1) : length > 0 ? src[position$1] : 0)) & 0xfff;
		let entry = keyCache[key];
		let checkPosition = position$1;
		let end = position$1 + length - 3;
		let chunk;
		let i = 0;
		if (entry && entry.bytes == length) {
			while (checkPosition < end) {
				chunk = dataView.getUint32(checkPosition);
				if (chunk != entry[i++]) {
					checkPosition = 0x70000000;
					break
				}
				checkPosition += 4;
			}
			end += 3;
			while (checkPosition < end) {
				chunk = src[checkPosition++];
				if (chunk != entry[i++]) {
					checkPosition = 0x70000000;
					break
				}
			}
			if (checkPosition === end) {
				position$1 = checkPosition;
				return entry.string
			}
			end -= 3;
			checkPosition = position$1;
		}
		entry = [];
		keyCache[key] = entry;
		entry.bytes = length;
		while (checkPosition < end) {
			chunk = dataView.getUint32(checkPosition);
			entry.push(chunk);
			checkPosition += 4;
		}
		end += 3;
		while (checkPosition < end) {
			chunk = src[checkPosition++];
			entry.push(chunk);
		}
		// for small blocks, avoiding the overhead of the extract call is helpful
		let string = length < 16 ? shortStringInJS(length) : longStringInJS(length);
		if (string != null)
			return entry.string = string
		return entry.string = readFixedString(length)
	}

	function asSafeString(property) {
		// protect against expensive (DoS) string conversions
		if (typeof property === 'string') return property;
		if (typeof property === 'number' || typeof property === 'boolean' || typeof property === 'bigint') return property.toString();
		if (property == null) return property + '';
		if (currentUnpackr.allowArraysInMapKeys && Array.isArray(property) && property.flat().every(item => ['string', 'number', 'boolean', 'bigint'].includes(typeof item))) {
			return property.flat().toString();
		}
		throw new Error(`Invalid property type for record: ${typeof property}`);
	}
	// the registration of the record definition extension (as "r")
	const recordDefinition = (id, highByte) => {
		let structure = read().map(asSafeString); // ensure that all keys are strings and
		// that the array is mutable
		let firstByte = id;
		if (highByte !== undefined) {
			id = id < 32 ? -((highByte << 5) + id) : ((highByte << 5) + id);
			structure.highByte = highByte;
		}
		let existingStructure = currentStructures[id];
		// If it is a shared structure, we need to restore any changes after reading.
		// Also in sequential mode, we may get incomplete reads and thus errors, and we need to restore
		// to the state prior to an incomplete read in order to properly resume.
		if (existingStructure && (existingStructure.isShared || sequentialMode)) {
			(currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure;
		}
		currentStructures[id] = structure;
		structure.read = createStructureReader(structure, firstByte);
		return structure.read()
	};
	currentExtensions[0] = () => {}; // notepack defines extension 0 to mean undefined, so use that as the default here
	currentExtensions[0].noBuffer = true;

	currentExtensions[0x42] = data => {
		let headLength = (data.byteLength % 8) || 8;
		let head = BigInt(data[0] & 0x80 ? data[0] - 0x100 : data[0]);
		for (let i = 1; i < headLength; i++) {
			head <<= BigInt(8);
			head += BigInt(data[i]);
		}
		if (data.byteLength !== headLength) {
			let view = new DataView(data.buffer, data.byteOffset, data.byteLength);
			let decode = (start, end) => {
				let length = end - start;
				if (length <= 40) {
					let out = view.getBigUint64(start);
					for (let i = start + 8; i < end; i += 8) {
						out <<= BigInt(64n);
						out |= view.getBigUint64(i);
					}
					return out
				}
				// if (length === 8) return view.getBigUint64(start)
				let middle = start + (length >> 4 << 3);
				let left = decode(start, middle);
				let right = decode(middle, end);
				return (left << BigInt((end - middle) * 8)) | right
			};
			head = (head << BigInt((view.byteLength - headLength) * 8)) | decode(headLength, view.byteLength);
		}
		return head
	};

	let errors = {
		Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, AggregateError: typeof AggregateError === 'function' ? AggregateError : null,
	};
	currentExtensions[0x65] = () => {
		let data = read();
		if (!errors[data[0]]) {
			let error = Error(data[1], { cause: data[2] });
			error.name = data[0];
			return error
		}
		return errors[data[0]](data[1], { cause: data[2] })
	};

	currentExtensions[0x69] = (data) => {
		// id extension (for structured clones)
		if (currentUnpackr.structuredClone === false) throw new Error('Structured clone extension is disabled')
		let id = dataView.getUint32(position$1 - 4);
		if (!referenceMap)
			referenceMap = new Map();
		let token = src[position$1];
		let target;
		// TODO: handle any other types that can cycle and make the code more robust if there are other extensions
		if (token >= 0x90 && token < 0xa0 || token == 0xdc || token == 0xdd)
			target = [];
		else if (token >= 0x80 && token < 0x90 || token == 0xde || token == 0xdf)
			target = new Map();
		else if ((token >= 0xc7 && token <= 0xc9 || token >= 0xd4 && token <= 0xd8) && src[position$1 + 1] === 0x73)
			target = new Set();
		else
			target = {};

		let refEntry = { target }; // a placeholder object
		referenceMap.set(id, refEntry);
		let targetProperties = read(); // read the next value as the target object to id
		if (!refEntry.used) {
			// no cycle, can just use the returned read object
			return refEntry.target = targetProperties // replace the placeholder with the real one
		} else {
			// there is a cycle, so we have to assign properties to original target
			Object.assign(target, targetProperties);
		}

		// copy over map/set entries if we're able to
		if (target instanceof Map)
			for (let [k, v] of targetProperties.entries()) target.set(k, v);
		if (target instanceof Set)
			for (let i of Array.from(targetProperties)) target.add(i);
		return target
	};

	currentExtensions[0x70] = (data) => {
		// pointer extension (for structured clones)
		if (currentUnpackr.structuredClone === false) throw new Error('Structured clone extension is disabled')
		let id = dataView.getUint32(position$1 - 4);
		let refEntry = referenceMap.get(id);
		refEntry.used = true;
		return refEntry.target
	};

	currentExtensions[0x73] = () => new Set(read());

	const typedArrays = ['Int8','Uint8','Uint8Clamped','Int16','Uint16','Int32','Uint32','Float32','Float64','BigInt64','BigUint64'].map(type => type + 'Array');

	let glbl = typeof globalThis === 'object' ? globalThis : window;
	currentExtensions[0x74] = (data) => {
		let typeCode = data[0];
		// we always have to slice to get a new ArrayBuffer that is aligned
		let buffer = Uint8Array.prototype.slice.call(data, 1).buffer;

		let typedArrayName = typedArrays[typeCode];
		if (!typedArrayName) {
			if (typeCode === 16) return buffer
			if (typeCode === 17) return new DataView(buffer)
			throw new Error('Could not find typed array for code ' + typeCode)
		}
		return new glbl[typedArrayName](buffer)
	};
	currentExtensions[0x78] = () => {
		let data = read();
		return new RegExp(data[0], data[1])
	};
	const TEMP_BUNDLE = [];
	currentExtensions[0x62] = (data) => {
		let dataSize = (data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3];
		let dataPosition = position$1;
		position$1 += dataSize - data.length;
		bundledStrings$1 = TEMP_BUNDLE;
		bundledStrings$1 = [readOnlyJSString(), readOnlyJSString()];
		bundledStrings$1.position0 = 0;
		bundledStrings$1.position1 = 0;
		bundledStrings$1.postBundlePosition = position$1;
		position$1 = dataPosition;
		return read()
	};

	currentExtensions[0xff] = (data) => {
		// 32-bit date extension
		if (data.length == 4)
			return new Date((data[0] * 0x1000000 + (data[1] << 16) + (data[2] << 8) + data[3]) * 1000)
		else if (data.length == 8)
			return new Date(
				((data[0] << 22) + (data[1] << 14) + (data[2] << 6) + (data[3] >> 2)) / 1000000 +
				((data[3] & 0x3) * 0x100000000 + data[4] * 0x1000000 + (data[5] << 16) + (data[6] << 8) + data[7]) * 1000)
		else if (data.length == 12)
			return new Date(
				((data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3]) / 1000000 +
				(((data[4] & 0x80) ? -0x1000000000000 : 0) + data[6] * 0x10000000000 + data[7] * 0x100000000 + data[8] * 0x1000000 + (data[9] << 16) + (data[10] << 8) + data[11]) * 1000)
		else
			return new Date('invalid')
	};
	// registration of bulk record definition?
	// currentExtensions[0x52] = () =>

	function saveState(callback) {
		let savedSrcEnd = srcEnd;
		let savedPosition = position$1;
		let savedSrcStringStart = srcStringStart;
		let savedSrcStringEnd = srcStringEnd;
		let savedSrcString = srcString;
		let savedReferenceMap = referenceMap;
		let savedBundledStrings = bundledStrings$1;

		// TODO: We may need to revisit this if we do more external calls to user code (since it could be slow)
		let savedSrc = new Uint8Array(src.slice(0, srcEnd)); // we copy the data in case it changes while external data is processed
		let savedStructures = currentStructures;
		let savedStructuresContents = currentStructures.slice(0, currentStructures.length);
		let savedPackr = currentUnpackr;
		let savedSequentialMode = sequentialMode;
		let value = callback();
		srcEnd = savedSrcEnd;
		position$1 = savedPosition;
		srcStringStart = savedSrcStringStart;
		srcStringEnd = savedSrcStringEnd;
		srcString = savedSrcString;
		referenceMap = savedReferenceMap;
		bundledStrings$1 = savedBundledStrings;
		src = savedSrc;
		sequentialMode = savedSequentialMode;
		currentStructures = savedStructures;
		currentStructures.splice(0, currentStructures.length, ...savedStructuresContents);
		currentUnpackr = savedPackr;
		dataView = new DataView(src.buffer, src.byteOffset, src.byteLength);
		return value
	}
	function clearSource() {
		src = null;
		referenceMap = null;
		currentStructures = null;
	}

	function addExtension$1(extension) {
		if (extension.unpack)
			currentExtensions[extension.type] = extension.unpack;
		else
			currentExtensions[extension.type] = extension;
	}

	const mult10 = new Array(147); // this is a table matching binary exponents to the multiplier to determine significant digit rounding
	for (let i = 0; i < 256; i++) {
		mult10[i] = +('1e' + Math.floor(45.15 - i * 0.30103));
	}
	const Decoder = Unpackr;
	var defaultUnpackr = new Unpackr({ useRecords: false });
	const unpack = defaultUnpackr.unpack;
	const unpackMultiple = defaultUnpackr.unpackMultiple;
	const decode = defaultUnpackr.unpack;
	const FLOAT32_OPTIONS = {
		NEVER: 0,
		ALWAYS: 1,
		DECIMAL_ROUND: 3,
		DECIMAL_FIT: 4
	};
	let f32Array = new Float32Array(1);
	let u8Array = new Uint8Array(f32Array.buffer, 0, 4);
	function roundFloat32(float32Number) {
		f32Array[0] = float32Number;
		let multiplier = mult10[((u8Array[3] & 0x7f) << 1) | (u8Array[2] >> 7)];
		return ((multiplier * float32Number + (float32Number > 0 ? 0.5 : -0.5)) >> 0) / multiplier
	}

	let textEncoder;
	try {
		textEncoder = new TextEncoder();
	} catch (error) {}
	let extensions, extensionClasses;
	const hasNodeBuffer = typeof Buffer !== 'undefined';
	const ByteArrayAllocate = hasNodeBuffer ?
		function(length) { return Buffer.allocUnsafeSlow(length) } : Uint8Array;
	const ByteArray = hasNodeBuffer ? Buffer : Uint8Array;
	const MAX_BUFFER_SIZE = hasNodeBuffer ? 0x100000000 : 0x7fd00000;
	let target, keysTarget;
	let targetView;
	let position = 0;
	let safeEnd;
	let bundledStrings = null;
	let writeStructSlots;
	const MAX_BUNDLE_SIZE = 0x5500; // maximum characters such that the encoded bytes fits in 16 bits.
	const hasNonLatin = /[\u0080-\uFFFF]/;
	const RECORD_SYMBOL = Symbol('record-id');
	class Packr extends Unpackr {
		constructor(options) {
			super(options);
			this.offset = 0;
			let start;
			let hasSharedUpdate;
			let structures;
			let referenceMap;
			let encodeUtf8 = ByteArray.prototype.utf8Write ? function(string, position) {
				return target.utf8Write(string, position, target.byteLength - position)
			} : (textEncoder && textEncoder.encodeInto) ?
				function(string, position) {
					return textEncoder.encodeInto(string, target.subarray(position)).written
				} : false;

			let packr = this;
			if (!options)
				options = {};
			let isSequential = options && options.sequential;
			let hasSharedStructures = options.structures || options.saveStructures;
			let maxSharedStructures = options.maxSharedStructures;
			if (maxSharedStructures == null)
				maxSharedStructures = hasSharedStructures ? 32 : 0;
			if (maxSharedStructures > 8160)
				throw new Error('Maximum maxSharedStructure is 8160')
			if (options.structuredClone && options.moreTypes == undefined) {
				this.moreTypes = true;
			}
			let maxOwnStructures = options.maxOwnStructures;
			if (maxOwnStructures == null)
				maxOwnStructures = hasSharedStructures ? 32 : 64;
			if (!this.structures && options.useRecords != false)
				this.structures = [];
			// two byte record ids for shared structures
			let useTwoByteRecords = maxSharedStructures > 32 || (maxOwnStructures + maxSharedStructures > 64);
			let sharedLimitId = maxSharedStructures + 0x40;
			let maxStructureId = maxSharedStructures + maxOwnStructures + 0x40;
			if (maxStructureId > 8256) {
				throw new Error('Maximum maxSharedStructure + maxOwnStructure is 8192')
			}
			let recordIdsToRemove = [];
			let transitionsCount = 0;
			let serializationsSinceTransitionRebuild = 0;

			this.pack = this.encode = function(value, encodeOptions) {
				if (!target) {
					target = new ByteArrayAllocate(8192);
					targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, 8192));
					position = 0;
				}
				safeEnd = target.length - 10;
				if (safeEnd - position < 0x800) {
					// don't start too close to the end,
					target = new ByteArrayAllocate(target.length);
					targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length));
					safeEnd = target.length - 10;
					position = 0;
				} else
					position = (position + 7) & 0x7ffffff8; // Word align to make any future copying of this buffer faster
				start = position;
				if (encodeOptions & RESERVE_START_SPACE) position += (encodeOptions & 0xff);
				referenceMap = packr.structuredClone ? new Map() : null;
				if (packr.bundleStrings && typeof value !== 'string') {
					bundledStrings = [];
					bundledStrings.size = Infinity; // force a new bundle start on first string
				} else
					bundledStrings = null;
				structures = packr.structures;
				if (structures) {
					if (structures.uninitialized)
						structures = packr._mergeStructures(packr.getStructures());
					let sharedLength = structures.sharedLength || 0;
					if (sharedLength > maxSharedStructures) {
						//if (maxSharedStructures <= 32 && structures.sharedLength > 32) // TODO: could support this, but would need to update the limit ids
						throw new Error('Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to ' + structures.sharedLength)
					}
					if (!structures.transitions) {
						// rebuild our structure transitions
						structures.transitions = Object.create(null);
						for (let i = 0; i < sharedLength; i++) {
							let keys = structures[i];
							if (!keys)
								continue
							let nextTransition, transition = structures.transitions;
							for (let j = 0, l = keys.length; j < l; j++) {
								let key = keys[j];
								nextTransition = transition[key];
								if (!nextTransition) {
									nextTransition = transition[key] = Object.create(null);
								}
								transition = nextTransition;
							}
							transition[RECORD_SYMBOL] = i + 0x40;
						}
						this.lastNamedStructuresLength = sharedLength;
					}
					if (!isSequential) {
						structures.nextId = sharedLength + 0x40;
					}
				}
				if (hasSharedUpdate)
					hasSharedUpdate = false;
				let encodingError;
				try {
					if (packr.randomAccessStructure && value && typeof value === 'object') {
						if (value.constructor === Object) writeStruct(value); // simple object
						else if (value.constructor !== Map && !Array.isArray(value) && !extensionClasses.some(extClass => value instanceof extClass)) {
							// allow user classes, if they don't need special handling (but do use toJSON if available)
							writeStruct(value.toJSON ? value.toJSON() : value);
						} else pack(value);
					} else
						pack(value);
					let lastBundle = bundledStrings;
					if (bundledStrings)
						writeBundles(start, pack, 0);
					if (referenceMap && referenceMap.idsToInsert) {
						let idsToInsert = referenceMap.idsToInsert.sort((a, b) => a.offset > b.offset ? 1 : -1);
						let i = idsToInsert.length;
						let incrementPosition = -1;
						while (lastBundle && i > 0) {
							let insertionPoint = idsToInsert[--i].offset + start;
							if (insertionPoint < (lastBundle.stringsPosition + start) && incrementPosition === -1)
								incrementPosition = 0;
							if (insertionPoint > (lastBundle.position + start)) {
								if (incrementPosition >= 0)
									incrementPosition += 6;
							} else {
								if (incrementPosition >= 0) {
									// update the bundle reference now
									targetView.setUint32(lastBundle.position + start,
										targetView.getUint32(lastBundle.position + start) + incrementPosition);
									incrementPosition = -1; // reset
								}
								lastBundle = lastBundle.previous;
								i++;
							}
						}
						if (incrementPosition >= 0 && lastBundle) {
							// update the bundle reference now
							targetView.setUint32(lastBundle.position + start,
								targetView.getUint32(lastBundle.position + start) + incrementPosition);
						}
						position += idsToInsert.length * 6;
						if (position > safeEnd)
							makeRoom(position);
						packr.offset = position;
						let serialized = insertIds(target.subarray(start, position), idsToInsert);
						referenceMap = null;
						return serialized
					}
					packr.offset = position; // update the offset so next serialization doesn't write over our buffer, but can continue writing to same buffer sequentially
					if (encodeOptions & REUSE_BUFFER_MODE) {
						target.start = start;
						target.end = position;
						return target
					}
					return target.subarray(start, position) // position can change if we call pack again in saveStructures, so we get the buffer now
				} catch(error) {
					encodingError = error;
					throw error;
				} finally {
					if (structures) {
						resetStructures();
						if (hasSharedUpdate && packr.saveStructures) {
							let sharedLength = structures.sharedLength || 0;
							// we can't rely on start/end with REUSE_BUFFER_MODE since they will (probably) change when we save
							let returnBuffer = target.subarray(start, position);
							let newSharedData = prepareStructures(structures, packr);
							if (!encodingError) { // TODO: If there is an encoding error, should make the structures as uninitialized so they get rebuilt next time
								if (packr.saveStructures(newSharedData, newSharedData.isCompatible) === false) {
									// get updated structures and try again if the update failed
									return packr.pack(value, encodeOptions)
								}
								packr.lastNamedStructuresLength = sharedLength;
								// don't keep large buffers around
								if (target.length > 0x40000000) target = null;
								return returnBuffer
							}
						}
					}
					// don't keep large buffers around, they take too much memory and cause problems (limit at 1GB)
					if (target.length > 0x40000000) target = null;
					if (encodeOptions & RESET_BUFFER_MODE)
						position = start;
				}
			};
			const resetStructures = () => {
				if (serializationsSinceTransitionRebuild < 10)
					serializationsSinceTransitionRebuild++;
				let sharedLength = structures.sharedLength || 0;
				if (structures.length > sharedLength && !isSequential)
					structures.length = sharedLength;
				if (transitionsCount > 10000) {
					// force a rebuild occasionally after a lot of transitions so it can get cleaned up
					structures.transitions = null;
					serializationsSinceTransitionRebuild = 0;
					transitionsCount = 0;
					if (recordIdsToRemove.length > 0)
						recordIdsToRemove = [];
				} else if (recordIdsToRemove.length > 0 && !isSequential) {
					for (let i = 0, l = recordIdsToRemove.length; i < l; i++) {
						recordIdsToRemove[i][RECORD_SYMBOL] = 0;
					}
					recordIdsToRemove = [];
				}
			};
			const packArray = (value) => {
				var length = value.length;
				if (length < 0x10) {
					target[position++] = 0x90 | length;
				} else if (length < 0x10000) {
					target[position++] = 0xdc;
					target[position++] = length >> 8;
					target[position++] = length & 0xff;
				} else {
					target[position++] = 0xdd;
					targetView.setUint32(position, length);
					position += 4;
				}
				for (let i = 0; i < length; i++) {
					pack(value[i]);
				}
			};
			const pack = (value) => {
				if (position > safeEnd)
					target = makeRoom(position);

				var type = typeof value;
				var length;
				if (type === 'string') {
					let strLength = value.length;
					if (bundledStrings && strLength >= 4 && strLength < 0x1000) {
						if ((bundledStrings.size += strLength) > MAX_BUNDLE_SIZE) {
							let extStart;
							let maxBytes = (bundledStrings[0] ? bundledStrings[0].length * 3 + bundledStrings[1].length : 0) + 10;
							if (position + maxBytes > safeEnd)
								target = makeRoom(position + maxBytes);
							let lastBundle;
							if (bundledStrings.position) { // here we use the 0x62 extension to write the last bundle and reserve space for the reference pointer to the next/current bundle
								lastBundle = bundledStrings;
								target[position] = 0xc8; // ext 16
								position += 3; // reserve for the writing bundle size
								target[position++] = 0x62; // 'b'
								extStart = position - start;
								position += 4; // reserve for writing bundle reference
								writeBundles(start, pack, 0); // write the last bundles
								targetView.setUint16(extStart + start - 3, position - start - extStart);
							} else { // here we use the 0x62 extension just to reserve the space for the reference pointer to the bundle (will be updated once the bundle is written)
								target[position++] = 0xd6; // fixext 4
								target[position++] = 0x62; // 'b'
								extStart = position - start;
								position += 4; // reserve for writing bundle reference
							}
							bundledStrings = ['', '']; // create new ones
							bundledStrings.previous = lastBundle;
							bundledStrings.size = 0;
							bundledStrings.position = extStart;
						}
						let twoByte = hasNonLatin.test(value);
						bundledStrings[twoByte ? 0 : 1] += value;
						target[position++] = 0xc1;
						pack(twoByte ? -strLength : strLength);
						return
					}
					let headerSize;
					// first we estimate the header size, so we can write to the correct location
					if (strLength < 0x20) {
						headerSize = 1;
					} else if (strLength < 0x100) {
						headerSize = 2;
					} else if (strLength < 0x10000) {
						headerSize = 3;
					} else {
						headerSize = 5;
					}
					let maxBytes = strLength * 3;
					if (position + maxBytes > safeEnd)
						target = makeRoom(position + maxBytes);

					if (strLength < 0x40 || !encodeUtf8) {
						let i, c1, c2, strPosition = position + headerSize;
						for (i = 0; i < strLength; i++) {
							c1 = value.charCodeAt(i);
							if (c1 < 0x80) {
								target[strPosition++] = c1;
							} else if (c1 < 0x800) {
								target[strPosition++] = c1 >> 6 | 0xc0;
								target[strPosition++] = c1 & 0x3f | 0x80;
							} else if (
								(c1 & 0xfc00) === 0xd800 &&
								((c2 = value.charCodeAt(i + 1)) & 0xfc00) === 0xdc00
							) {
								c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
								i++;
								target[strPosition++] = c1 >> 18 | 0xf0;
								target[strPosition++] = c1 >> 12 & 0x3f | 0x80;
								target[strPosition++] = c1 >> 6 & 0x3f | 0x80;
								target[strPosition++] = c1 & 0x3f | 0x80;
							} else {
								target[strPosition++] = c1 >> 12 | 0xe0;
								target[strPosition++] = c1 >> 6 & 0x3f | 0x80;
								target[strPosition++] = c1 & 0x3f | 0x80;
							}
						}
						length = strPosition - position - headerSize;
					} else {
						length = encodeUtf8(value, position + headerSize);
					}

					if (length < 0x20) {
						target[position++] = 0xa0 | length;
					} else if (length < 0x100) {
						if (headerSize < 2) {
							target.copyWithin(position + 2, position + 1, position + 1 + length);
						}
						target[position++] = 0xd9;
						target[position++] = length;
					} else if (length < 0x10000) {
						if (headerSize < 3) {
							target.copyWithin(position + 3, position + 2, position + 2 + length);
						}
						target[position++] = 0xda;
						target[position++] = length >> 8;
						target[position++] = length & 0xff;
					} else {
						if (headerSize < 5) {
							target.copyWithin(position + 5, position + 3, position + 3 + length);
						}
						target[position++] = 0xdb;
						targetView.setUint32(position, length);
						position += 4;
					}
					position += length;
				} else if (type === 'number') {
					if (value >>> 0 === value) {// positive integer, 32-bit or less
						// positive uint
						if (value < 0x20 || (value < 0x80 && this.useRecords === false) || (value < 0x40 && !this.randomAccessStructure)) {
							target[position++] = value;
						} else if (value < 0x100) {
							target[position++] = 0xcc;
							target[position++] = value;
						} else if (value < 0x10000) {
							target[position++] = 0xcd;
							target[position++] = value >> 8;
							target[position++] = value & 0xff;
						} else {
							target[position++] = 0xce;
							targetView.setUint32(position, value);
							position += 4;
						}
					} else if (value >> 0 === value) { // negative integer
						if (value >= -0x20) {
							target[position++] = 0x100 + value;
						} else if (value >= -0x80) {
							target[position++] = 0xd0;
							target[position++] = value + 0x100;
						} else if (value >= -0x8000) {
							target[position++] = 0xd1;
							targetView.setInt16(position, value);
							position += 2;
						} else {
							target[position++] = 0xd2;
							targetView.setInt32(position, value);
							position += 4;
						}
					} else {
						let useFloat32;
						if ((useFloat32 = this.useFloat32) > 0 && value < 0x100000000 && value >= -0x80000000) {
							target[position++] = 0xca;
							targetView.setFloat32(position, value);
							let xShifted;
							if (useFloat32 < 4 ||
									// this checks for rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
									((xShifted = value * mult10[((target[position] & 0x7f) << 1) | (target[position + 1] >> 7)]) >> 0) === xShifted) {
								position += 4;
								return
							} else
								position--; // move back into position for writing a double
						}
						target[position++] = 0xcb;
						targetView.setFloat64(position, value);
						position += 8;
					}
				} else if (type === 'object' || type === 'function') {
					if (!value)
						target[position++] = 0xc0;
					else {
						if (referenceMap) {
							let referee = referenceMap.get(value);
							if (referee) {
								if (!referee.id) {
									let idsToInsert = referenceMap.idsToInsert || (referenceMap.idsToInsert = []);
									referee.id = idsToInsert.push(referee);
								}
								target[position++] = 0xd6; // fixext 4
								target[position++] = 0x70; // "p" for pointer
								targetView.setUint32(position, referee.id);
								position += 4;
								return
							} else
								referenceMap.set(value, { offset: position - start });
						}
						let constructor = value.constructor;
						if (constructor === Object) {
							writeObject(value);
						} else if (constructor === Array) {
							packArray(value);
						} else if (constructor === Map) {
							if (this.mapAsEmptyObject) target[position++] = 0x80;
							else {
								length = value.size;
								if (length < 0x10) {
									target[position++] = 0x80 | length;
								} else if (length < 0x10000) {
									target[position++] = 0xde;
									target[position++] = length >> 8;
									target[position++] = length & 0xff;
								} else {
									target[position++] = 0xdf;
									targetView.setUint32(position, length);
									position += 4;
								}
								for (let [key, entryValue] of value) {
									pack(key);
									pack(entryValue);
								}
							}
						} else {
							for (let i = 0, l = extensions.length; i < l; i++) {
								let extensionClass = extensionClasses[i];
								if (value instanceof extensionClass) {
									let extension = extensions[i];
									if (extension.write) {
										if (extension.type) {
											target[position++] = 0xd4; // one byte "tag" extension
											target[position++] = extension.type;
											target[position++] = 0;
										}
										let writeResult = extension.write.call(this, value);
										if (writeResult === value) { // avoid infinite recursion
											if (Array.isArray(value)) {
												packArray(value);
											} else {
												writeObject(value);
											}
										} else {
											pack(writeResult);
										}
										return
									}
									let currentTarget = target;
									let currentTargetView = targetView;
									let currentPosition = position;
									target = null;
									let result;
									try {
										result = extension.pack.call(this, value, (size) => {
											// restore target and use it
											target = currentTarget;
											currentTarget = null;
											position += size;
											if (position > safeEnd)
												makeRoom(position);
											return {
												target, targetView, position: position - size
											}
										}, pack);
									} finally {
										// restore current target information (unless already restored)
										if (currentTarget) {
											target = currentTarget;
											targetView = currentTargetView;
											position = currentPosition;
											safeEnd = target.length - 10;
										}
									}
									if (result) {
										if (result.length + position > safeEnd)
											makeRoom(result.length + position);
										position = writeExtensionData(result, target, position, extension.type);
									}
									return
								}
							}
							// check isArray after extensions, because extensions can extend Array
							if (Array.isArray(value)) {
								packArray(value);
							} else {
								// use this as an alternate mechanism for expressing how to serialize
								if (value.toJSON) {
									const json = value.toJSON();
									// if for some reason value.toJSON returns itself it'll loop forever
									if (json !== value)
										return pack(json)
								}

								// if there is a writeFunction, use it, otherwise just encode as undefined
								if (type === 'function')
									return pack(this.writeFunction && this.writeFunction(value));

								// no extension found, write as plain object
								writeObject(value);
							}
						}
					}
				} else if (type === 'boolean') {
					target[position++] = value ? 0xc3 : 0xc2;
				} else if (type === 'bigint') {
					if (value < 0x8000000000000000 && value >= -0x8000000000000000) {
						// use a signed int as long as it fits
						target[position++] = 0xd3;
						targetView.setBigInt64(position, value);
					} else if (value < 0x10000000000000000 && value > 0) {
						// if we can fit an unsigned int, use that
						target[position++] = 0xcf;
						targetView.setBigUint64(position, value);
					} else {
						// overflow
						if (this.largeBigIntToFloat) {
							target[position++] = 0xcb;
							targetView.setFloat64(position, Number(value));
						} else if (this.largeBigIntToString) {
							return pack(value.toString());
						} else if (this.useBigIntExtension || this.moreTypes) {
							let empty = value < 0 ? BigInt(-1) : BigInt(0);

							let array;
							if (value >> BigInt(0x10000) === empty) {
								let mask = BigInt(0x10000000000000000) - BigInt(1); // literal would overflow
								let chunks = [];
								while (true) {
									chunks.push(value & mask);
									if ((value >> BigInt(63)) === empty) break
									value >>= BigInt(64);
								}

								array = new Uint8Array(new BigUint64Array(chunks).buffer);
								array.reverse();
							} else {
								let invert = value < 0;
								let string = (invert ? ~value : value).toString(16);
								if (string.length % 2) {
									string = '0' + string;
								} else if (parseInt(string.charAt(0), 16) >= 8) {
									string = '00' + string;
								}

								if (hasNodeBuffer) {
									array = Buffer.from(string, 'hex');
								} else {
									array = new Uint8Array(string.length / 2);
									for (let i = 0; i < array.length; i++) {
										array[i] = parseInt(string.slice(i * 2, i * 2 + 2), 16);
									}
								}

								if (invert) {
									for (let i = 0; i < array.length; i++) array[i] = ~array[i];
								}
							}

							if (array.length + position > safeEnd)
								makeRoom(array.length + position);
							position = writeExtensionData(array, target, position, 0x42);
							return
						} else {
							throw new RangeError(value + ' was too large to fit in MessagePack 64-bit integer format, use' +
								' useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set' +
								' largeBigIntToString to convert to string')
						}
					}
					position += 8;
				} else if (type === 'undefined') {
					if (this.encodeUndefinedAsNil)
						target[position++] = 0xc0;
					else {
						target[position++] = 0xd4; // a number of implementations use fixext1 with type 0, data 0 to denote undefined, so we follow suite
						target[position++] = 0;
						target[position++] = 0;
					}
				} else {
					throw new Error('Unknown type: ' + type)
				}
			};

			const writePlainObject = (this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues) ? (object) => {
				// this method is slightly slower, but generates "preferred serialization" (optimally small for smaller objects)
				let keys;
				if (this.skipValues) {
					keys = [];
					for (let key in object) {
						if ((typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) &&
							!this.skipValues.includes(object[key]))
							keys.push(key);
					}
				} else {
					keys = Object.keys(object);
				}
				let length = keys.length;
				if (length < 0x10) {
					target[position++] = 0x80 | length;
				} else if (length < 0x10000) {
					target[position++] = 0xde;
					target[position++] = length >> 8;
					target[position++] = length & 0xff;
				} else {
					target[position++] = 0xdf;
					targetView.setUint32(position, length);
					position += 4;
				}
				let key;
				if (this.coercibleKeyAsNumber) {
					for (let i = 0; i < length; i++) {
						key = keys[i];
						let num = Number(key);
						pack(isNaN(num) ? key : num);
						pack(object[key]);
					}

				} else {
					for (let i = 0; i < length; i++) {
						pack(key = keys[i]);
						pack(object[key]);
					}
				}
			} :
			(object) => {
				target[position++] = 0xde; // always using map 16, so we can preallocate and set the length afterwards
				let objectOffset = position - start;
				position += 2;
				let size = 0;
				for (let key in object) {
					if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
						pack(key);
						pack(object[key]);
						size++;
					}
				}
				if (size > 0xffff) {
					throw new Error('Object is too large to serialize with fast 16-bit map size,' +
					' use the "variableMapSize" option to serialize this object');
				}
				target[objectOffset++ + start] = size >> 8;
				target[objectOffset + start] = size & 0xff;
			};

			const writeRecord = this.useRecords === false ? writePlainObject :
			(options.progressiveRecords && !useTwoByteRecords) ?  // this is about 2% faster for highly stable structures, since it only requires one for-in loop (but much more expensive when new structure needs to be written)
			(object) => {
				let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null));
				let objectOffset = position++ - start;
				let wroteKeys;
				for (let key in object) {
					if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
						nextTransition = transition[key];
						if (nextTransition)
							transition = nextTransition;
						else {
							// record doesn't exist, create full new record and insert it
							let keys = Object.keys(object);
							let lastTransition = transition;
							transition = structures.transitions;
							let newTransitions = 0;
							for (let i = 0, l = keys.length; i < l; i++) {
								let key = keys[i];
								nextTransition = transition[key];
								if (!nextTransition) {
									nextTransition = transition[key] = Object.create(null);
									newTransitions++;
								}
								transition = nextTransition;
							}
							if (objectOffset + start + 1 == position) {
								// first key, so we don't need to insert, we can just write record directly
								position--;
								newRecord(transition, keys, newTransitions);
							} else // otherwise we need to insert the record, moving existing data after the record
								insertNewRecord(transition, keys, objectOffset, newTransitions);
							wroteKeys = true;
							transition = lastTransition[key];
						}
						pack(object[key]);
					}
				}
				if (!wroteKeys) {
					let recordId = transition[RECORD_SYMBOL];
					if (recordId)
						target[objectOffset + start] = recordId;
					else
						insertNewRecord(transition, Object.keys(object), objectOffset, 0);
				}
			} :
			(object) => {
				let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null));
				let newTransitions = 0;
				for (let key in object) if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
					nextTransition = transition[key];
					if (!nextTransition) {
						nextTransition = transition[key] = Object.create(null);
						newTransitions++;
					}
					transition = nextTransition;
				}
				let recordId = transition[RECORD_SYMBOL];
				if (recordId) {
					if (recordId >= 0x60 && useTwoByteRecords) {
						target[position++] = ((recordId -= 0x60) & 0x1f) + 0x60;
						target[position++] = recordId >> 5;
					} else
						target[position++] = recordId;
				} else {
					newRecord(transition, transition.__keys__ || Object.keys(object), newTransitions);
				}
				// now write the values
				for (let key in object)
					if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
						pack(object[key]);
					}
			};

			// create reference to useRecords if useRecords is a function
			const checkUseRecords = typeof this.useRecords == 'function' && this.useRecords;

			const writeObject = checkUseRecords ? (object) => {
				checkUseRecords(object) ? writeRecord(object) : writePlainObject(object);
			} : writeRecord;

			const makeRoom = (end) => {
				let newSize;
				if (end > 0x1000000) {
					// special handling for really large buffers
					if ((end - start) > MAX_BUFFER_SIZE)
						throw new Error('Packed buffer would be larger than maximum buffer size')
					newSize = Math.min(MAX_BUFFER_SIZE,
						Math.round(Math.max((end - start) * (end > 0x4000000 ? 1.25 : 2), 0x400000) / 0x1000) * 0x1000);
				} else // faster handling for smaller buffers
					newSize = ((Math.max((end - start) << 2, target.length - 1) >> 12) + 1) << 12;
				let newBuffer = new ByteArrayAllocate(newSize);
				targetView = newBuffer.dataView || (newBuffer.dataView = new DataView(newBuffer.buffer, 0, newSize));
				end = Math.min(end, target.length);
				if (target.copy)
					target.copy(newBuffer, 0, start, end);
				else
					newBuffer.set(target.slice(start, end));
				position -= start;
				start = 0;
				safeEnd = newBuffer.length - 10;
				return target = newBuffer
			};
			const newRecord = (transition, keys, newTransitions) => {
				let recordId = structures.nextId;
				if (!recordId)
					recordId = 0x40;
				if (recordId < sharedLimitId && this.shouldShareStructure && !this.shouldShareStructure(keys)) {
					recordId = structures.nextOwnId;
					if (!(recordId < maxStructureId))
						recordId = sharedLimitId;
					structures.nextOwnId = recordId + 1;
				} else {
					if (recordId >= maxStructureId)// cycle back around
						recordId = sharedLimitId;
					structures.nextId = recordId + 1;
				}
				let highByte = keys.highByte = recordId >= 0x60 && useTwoByteRecords ? (recordId - 0x60) >> 5 : -1;
				transition[RECORD_SYMBOL] = recordId;
				transition.__keys__ = keys;
				structures[recordId - 0x40] = keys;

				if (recordId < sharedLimitId) {
					keys.isShared = true;
					structures.sharedLength = recordId - 0x3f;
					hasSharedUpdate = true;
					if (highByte >= 0) {
						target[position++] = (recordId & 0x1f) + 0x60;
						target[position++] = highByte;
					} else {
						target[position++] = recordId;
					}
				} else {
					if (highByte >= 0) {
						target[position++] = 0xd5; // fixext 2
						target[position++] = 0x72; // "r" record defintion extension type
						target[position++] = (recordId & 0x1f) + 0x60;
						target[position++] = highByte;
					} else {
						target[position++] = 0xd4; // fixext 1
						target[position++] = 0x72; // "r" record defintion extension type
						target[position++] = recordId;
					}

					if (newTransitions)
						transitionsCount += serializationsSinceTransitionRebuild * newTransitions;
					// record the removal of the id, we can maintain our shared structure
					if (recordIdsToRemove.length >= maxOwnStructures)
						recordIdsToRemove.shift()[RECORD_SYMBOL] = 0; // we are cycling back through, and have to remove old ones
					recordIdsToRemove.push(transition);
					pack(keys);
				}
			};
			const insertNewRecord = (transition, keys, insertionOffset, newTransitions) => {
				let mainTarget = target;
				let mainPosition = position;
				let mainSafeEnd = safeEnd;
				let mainStart = start;
				target = keysTarget;
				position = 0;
				start = 0;
				if (!target)
					keysTarget = target = new ByteArrayAllocate(8192);
				safeEnd = target.length - 10;
				newRecord(transition, keys, newTransitions);
				keysTarget = target;
				let keysPosition = position;
				target = mainTarget;
				position = mainPosition;
				safeEnd = mainSafeEnd;
				start = mainStart;
				if (keysPosition > 1) {
					let newEnd = position + keysPosition - 1;
					if (newEnd > safeEnd)
						makeRoom(newEnd);
					let insertionPosition = insertionOffset + start;
					target.copyWithin(insertionPosition + keysPosition, insertionPosition + 1, position);
					target.set(keysTarget.slice(0, keysPosition), insertionPosition);
					position = newEnd;
				} else {
					target[insertionOffset + start] = keysTarget[0];
				}
			};
			const writeStruct = (object) => {
				let newPosition = writeStructSlots(object, target, start, position, structures, makeRoom, (value, newPosition, notifySharedUpdate) => {
					if (notifySharedUpdate)
						return hasSharedUpdate = true;
					position = newPosition;
					let startTarget = target;
					pack(value);
					resetStructures();
					if (startTarget !== target) {
						return { position, targetView, target }; // indicate the buffer was re-allocated
					}
					return position;
				}, this);
				if (newPosition === 0) // bail and go to a msgpack object
					return writeObject(object);
				position = newPosition;
			};
		}
		useBuffer(buffer) {
			// this means we are finished using our own buffer and we can write over it safely
			target = buffer;
			target.dataView || (target.dataView = new DataView(target.buffer, target.byteOffset, target.byteLength));
			targetView = target.dataView;
			position = 0;
		}
		set position (value) {
			position = value;
		}
		get position() {
			return position;
		}
		clearSharedData() {
			if (this.structures)
				this.structures = [];
			if (this.typedStructs)
				this.typedStructs = [];
		}
	}

	extensionClasses = [ Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor /*TypedArray*/, DataView, C1Type ];
	extensions = [{
		pack(date, allocateForWrite, pack) {
			let seconds = date.getTime() / 1000;
			if ((this.useTimestamp32 || date.getMilliseconds() === 0) && seconds >= 0 && seconds < 0x100000000) {
				// Timestamp 32
				let { target, targetView, position} = allocateForWrite(6);
				target[position++] = 0xd6;
				target[position++] = 0xff;
				targetView.setUint32(position, seconds);
			} else if (seconds > 0 && seconds < 0x100000000) {
				// Timestamp 64
				let { target, targetView, position} = allocateForWrite(10);
				target[position++] = 0xd7;
				target[position++] = 0xff;
				targetView.setUint32(position, date.getMilliseconds() * 4000000 + ((seconds / 1000 / 0x100000000) >> 0));
				targetView.setUint32(position + 4, seconds);
			} else if (isNaN(seconds)) {
				if (this.onInvalidDate) {
					allocateForWrite(0);
					return pack(this.onInvalidDate())
				}
				// Intentionally invalid timestamp
				let { target, targetView, position} = allocateForWrite(3);
				target[position++] = 0xd4;
				target[position++] = 0xff;
				target[position++] = 0xff;
			} else {
				// Timestamp 96
				let { target, targetView, position} = allocateForWrite(15);
				target[position++] = 0xc7;
				target[position++] = 12;
				target[position++] = 0xff;
				targetView.setUint32(position, date.getMilliseconds() * 1000000);
				targetView.setBigInt64(position + 4, BigInt(Math.floor(seconds)));
			}
		}
	}, {
		pack(set, allocateForWrite, pack) {
			if (this.setAsEmptyObject) {
				allocateForWrite(0);
				return pack({})
			}
			let array = Array.from(set);
			let { target, position} = allocateForWrite(this.moreTypes ? 3 : 0);
			if (this.moreTypes) {
				target[position++] = 0xd4;
				target[position++] = 0x73; // 's' for Set
				target[position++] = 0;
			}
			pack(array);
		}
	}, {
		pack(error, allocateForWrite, pack) {
			let { target, position} = allocateForWrite(this.moreTypes ? 3 : 0);
			if (this.moreTypes) {
				target[position++] = 0xd4;
				target[position++] = 0x65; // 'e' for error
				target[position++] = 0;
			}
			pack([ error.name, error.message, error.cause ]);
		}
	}, {
		pack(regex, allocateForWrite, pack) {
			let { target, position} = allocateForWrite(this.moreTypes ? 3 : 0);
			if (this.moreTypes) {
				target[position++] = 0xd4;
				target[position++] = 0x78; // 'x' for regeXp
				target[position++] = 0;
			}
			pack([ regex.source, regex.flags ]);
		}
	}, {
		pack(arrayBuffer, allocateForWrite) {
			if (this.moreTypes)
				writeExtBuffer(arrayBuffer, 0x10, allocateForWrite);
			else
				writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite);
		}
	}, {
		pack(typedArray, allocateForWrite) {
			let constructor = typedArray.constructor;
			if (constructor !== ByteArray && this.moreTypes)
				writeExtBuffer(typedArray, typedArrays.indexOf(constructor.name), allocateForWrite);
			else
				writeBuffer(typedArray, allocateForWrite);
		}
	}, {
		pack(arrayBuffer, allocateForWrite) {
			if (this.moreTypes)
				writeExtBuffer(arrayBuffer, 0x11, allocateForWrite);
			else
				writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite);
		}
	}, {
		pack(c1, allocateForWrite) { // specific 0xC1 object
			let { target, position} = allocateForWrite(1);
			target[position] = 0xc1;
		}
	}];

	function writeExtBuffer(typedArray, type, allocateForWrite, encode) {
		let length = typedArray.byteLength;
		if (length + 1 < 0x100) {
			var { target, position } = allocateForWrite(4 + length);
			target[position++] = 0xc7;
			target[position++] = length + 1;
		} else if (length + 1 < 0x10000) {
			var { target, position } = allocateForWrite(5 + length);
			target[position++] = 0xc8;
			target[position++] = (length + 1) >> 8;
			target[position++] = (length + 1) & 0xff;
		} else {
			var { target, position, targetView } = allocateForWrite(7 + length);
			target[position++] = 0xc9;
			targetView.setUint32(position, length + 1); // plus one for the type byte
			position += 4;
		}
		target[position++] = 0x74; // "t" for typed array
		target[position++] = type;
		if (!typedArray.buffer) typedArray = new Uint8Array(typedArray);
		target.set(new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength), position);
	}
	function writeBuffer(buffer, allocateForWrite) {
		let length = buffer.byteLength;
		var target, position;
		if (length < 0x100) {
			var { target, position } = allocateForWrite(length + 2);
			target[position++] = 0xc4;
			target[position++] = length;
		} else if (length < 0x10000) {
			var { target, position } = allocateForWrite(length + 3);
			target[position++] = 0xc5;
			target[position++] = length >> 8;
			target[position++] = length & 0xff;
		} else {
			var { target, position, targetView } = allocateForWrite(length + 5);
			target[position++] = 0xc6;
			targetView.setUint32(position, length);
			position += 4;
		}
		target.set(buffer, position);
	}

	function writeExtensionData(result, target, position, type) {
		let length = result.length;
		switch (length) {
			case 1:
				target[position++] = 0xd4;
				break
			case 2:
				target[position++] = 0xd5;
				break
			case 4:
				target[position++] = 0xd6;
				break
			case 8:
				target[position++] = 0xd7;
				break
			case 16:
				target[position++] = 0xd8;
				break
			default:
				if (length < 0x100) {
					target[position++] = 0xc7;
					target[position++] = length;
				} else if (length < 0x10000) {
					target[position++] = 0xc8;
					target[position++] = length >> 8;
					target[position++] = length & 0xff;
				} else {
					target[position++] = 0xc9;
					target[position++] = length >> 24;
					target[position++] = (length >> 16) & 0xff;
					target[position++] = (length >> 8) & 0xff;
					target[position++] = length & 0xff;
				}
		}
		target[position++] = type;
		target.set(result, position);
		position += length;
		return position
	}

	function insertIds(serialized, idsToInsert) {
		// insert the ids that need to be referenced for structured clones
		let nextId;
		let distanceToMove = idsToInsert.length * 6;
		let lastEnd = serialized.length - distanceToMove;
		while (nextId = idsToInsert.pop()) {
			let offset = nextId.offset;
			let id = nextId.id;
			serialized.copyWithin(offset + distanceToMove, offset, lastEnd);
			distanceToMove -= 6;
			let position = offset + distanceToMove;
			serialized[position++] = 0xd6;
			serialized[position++] = 0x69; // 'i'
			serialized[position++] = id >> 24;
			serialized[position++] = (id >> 16) & 0xff;
			serialized[position++] = (id >> 8) & 0xff;
			serialized[position++] = id & 0xff;
			lastEnd = offset;
		}
		return serialized
	}

	function writeBundles(start, pack, incrementPosition) {
		if (bundledStrings.length > 0) {
			targetView.setUint32(bundledStrings.position + start, position + incrementPosition - bundledStrings.position - start);
			bundledStrings.stringsPosition = position - start;
			let writeStrings = bundledStrings;
			bundledStrings = null;
			pack(writeStrings[0]);
			pack(writeStrings[1]);
		}
	}

	function addExtension(extension) {
		if (extension.Class) {
			if (!extension.pack && !extension.write)
				throw new Error('Extension has no pack or write function')
			if (extension.pack && !extension.type)
				throw new Error('Extension has no type (numeric code to identify the extension)')
			extensionClasses.unshift(extension.Class);
			extensions.unshift(extension);
		}
		addExtension$1(extension);
	}
	function prepareStructures(structures, packr) {
		structures.isCompatible = (existingStructures) => {
			let compatible = !existingStructures || ((packr.lastNamedStructuresLength || 0) === existingStructures.length);
			if (!compatible) // we want to merge these existing structures immediately since we already have it and we are in the right transaction
				packr._mergeStructures(existingStructures);
			return compatible;
		};
		return structures
	}

	let defaultPackr = new Packr({ useRecords: false });
	const pack = defaultPackr.pack;
	const encode = defaultPackr.pack;
	const Encoder = Packr;
	const { NEVER, ALWAYS, DECIMAL_ROUND, DECIMAL_FIT } = FLOAT32_OPTIONS;
	const REUSE_BUFFER_MODE = 512;
	const RESET_BUFFER_MODE = 1024;
	const RESERVE_START_SPACE = 2048;

	/**
	 * Given an Iterable first argument, returns an Iterable where each value is packed as a Buffer
	 * If the argument is only Async Iterable, the return value will be an Async Iterable.
	 * @param {Iterable|Iterator|AsyncIterable|AsyncIterator} objectIterator - iterable source, like a Readable object stream, an array, Set, or custom object
	 * @param {options} [options] - msgpackr pack options
	 * @returns {IterableIterator|Promise.<AsyncIterableIterator>}
	 */
	function packIter (objectIterator, options = {}) {
	  if (!objectIterator || typeof objectIterator !== 'object') {
	    throw new Error('first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable')
	  } else if (typeof objectIterator[Symbol.iterator] === 'function') {
	    return packIterSync(objectIterator, options)
	  } else if (typeof objectIterator.then === 'function' || typeof objectIterator[Symbol.asyncIterator] === 'function') {
	    return packIterAsync(objectIterator, options)
	  } else {
	    throw new Error('first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise')
	  }
	}

	function * packIterSync (objectIterator, options) {
	  const packr = new Packr(options);
	  for (const value of objectIterator) {
	    yield packr.pack(value);
	  }
	}

	async function * packIterAsync (objectIterator, options) {
	  const packr = new Packr(options);
	  for await (const value of objectIterator) {
	    yield packr.pack(value);
	  }
	}

	/**
	 * Given an Iterable/Iterator input which yields buffers, returns an IterableIterator which yields sync decoded objects
	 * Or, given an Async Iterable/Iterator which yields promises resolving in buffers, returns an AsyncIterableIterator.
	 * @param {Iterable|Iterator|AsyncIterable|AsyncIterableIterator} bufferIterator
	 * @param {object} [options] - unpackr options
	 * @returns {IterableIterator|Promise.<AsyncIterableIterator}
	 */
	function unpackIter (bufferIterator, options = {}) {
	  if (!bufferIterator || typeof bufferIterator !== 'object') {
	    throw new Error('first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise')
	  }

	  const unpackr = new Unpackr(options);
	  let incomplete;
	  const parser = (chunk) => {
	    let yields;
	    // if there's incomplete data from previous chunk, concatinate and try again
	    if (incomplete) {
	      chunk = Buffer.concat([incomplete, chunk]);
	      incomplete = undefined;
	    }

	    try {
	      yields = unpackr.unpackMultiple(chunk);
	    } catch (err) {
	      if (err.incomplete) {
	        incomplete = chunk.slice(err.lastPosition);
	        yields = err.values;
	      } else {
	        throw err
	      }
	    }
	    return yields
	  };

	  if (typeof bufferIterator[Symbol.iterator] === 'function') {
	    return (function * iter () {
	      for (const value of bufferIterator) {
	        yield * parser(value);
	      }
	    })()
	  } else if (typeof bufferIterator[Symbol.asyncIterator] === 'function') {
	    return (async function * iter () {
	      for await (const value of bufferIterator) {
	        yield * parser(value);
	      }
	    })()
	  }
	}
	const decodeIter = unpackIter;
	const encodeIter = packIter;

	const useRecords = false;
	const mapsAsObjects = true;

	exports.ALWAYS = ALWAYS;
	exports.C1 = C1;
	exports.DECIMAL_FIT = DECIMAL_FIT;
	exports.DECIMAL_ROUND = DECIMAL_ROUND;
	exports.Decoder = Decoder;
	exports.Encoder = Encoder;
	exports.FLOAT32_OPTIONS = FLOAT32_OPTIONS;
	exports.NEVER = NEVER;
	exports.Packr = Packr;
	exports.RESERVE_START_SPACE = RESERVE_START_SPACE;
	exports.RESET_BUFFER_MODE = RESET_BUFFER_MODE;
	exports.REUSE_BUFFER_MODE = REUSE_BUFFER_MODE;
	exports.Unpackr = Unpackr;
	exports.addExtension = addExtension;
	exports.clearSource = clearSource;
	exports.decode = decode;
	exports.decodeIter = decodeIter;
	exports.encode = encode;
	exports.encodeIter = encodeIter;
	exports.isNativeAccelerationEnabled = isNativeAccelerationEnabled;
	exports.mapsAsObjects = mapsAsObjects;
	exports.pack = pack;
	exports.roundFloat32 = roundFloat32;
	exports.unpack = unpack;
	exports.unpackMultiple = unpackMultiple;
	exports.useRecords = useRecords;

}));
//# sourceMappingURL=index.js.map
