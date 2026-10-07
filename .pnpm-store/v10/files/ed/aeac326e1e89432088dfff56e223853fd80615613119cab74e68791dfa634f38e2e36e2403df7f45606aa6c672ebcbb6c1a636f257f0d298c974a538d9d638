var decoder
try {
	decoder = new TextDecoder()
} catch(error) {}
var src
var srcEnd
var position = 0
var alreadySet
const EMPTY_ARRAY = []
var strings = EMPTY_ARRAY
var stringPosition = 0
var currentUnpackr = {}
var currentStructures
var srcString
var srcStringStart = 0
var srcStringEnd = 0
var bundledStrings
var referenceMap
var currentExtensions = []
var dataView
var defaultOptions = {
	useRecords: false,
	mapsAsObjects: true
}
export class C1Type {}
export const C1 = new C1Type()
C1.name = 'MessagePack 0xC1'
var sequentialMode = false
var inlineObjectReadThreshold = 2
var readStruct, onLoadedStructures, onSaveState
var BlockedFunction // we use search and replace to change the next call to BlockedFunction to avoid CSP issues for
// no-eval build
try {
	new Function('')
} catch(error) {
	// if eval variants are not supported, do not create inline object readers ever
	inlineObjectReadThreshold = Infinity
}

export class Unpackr {
	constructor(options) {
		if (options) {
			if (options.useRecords === false && options.mapsAsObjects === undefined)
				options.mapsAsObjects = true
			if (options.sequential && options.trusted !== false) {
				options.trusted = true;
				if (!options.structures && options.useRecords != false) {
					options.structures = []
					if (!options.maxSharedStructures)
						options.maxSharedStructures = 0
				}
			}
			if (options.structures)
				options.structures.sharedLength = options.structures.length
			else if (options.getStructures) {
				(options.structures = []).uninitialized = true // this is what we use to denote an uninitialized structures
				options.structures.sharedLength = 0
			}
			if (options.int64AsNumber) {
				options.int64AsType = 'number'
			}
		}
		Object.assign(this, options)
	}
	unpack(source, options) {
		if (src) {
			// re-entrant execution, save the state and restore it after we do this unpack
			return saveState(() => {
				clearSource()
				return this ? this.unpack(source, options) : Unpackr.prototype.unpack.call(defaultOptions, source, options)
			})
		}
		if (!source.buffer && source.constructor === ArrayBuffer)
			source = typeof Buffer !== 'undefined' ? Buffer.from(source) : new Uint8Array(source);
		if (typeof options === 'object') {
			srcEnd = options.end || source.length
			position = options.start || 0
		} else {
			position = 0
			srcEnd = options > -1 ? options : source.length
		}
		stringPosition = 0
		srcStringEnd = 0
		srcString = null
		strings = EMPTY_ARRAY
		bundledStrings = null
		src = source
		// this provides cached access to the data view for a buffer if it is getting reused, which is a recommend
		// technique for getting data from a database where it can be copied into an existing buffer instead of creating
		// new ones
		try {
			dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength))
		} catch(error) {
			// if it doesn't have a buffer, maybe it is the wrong type of object
			src = null
			if (source instanceof Uint8Array)
				throw error
			throw new Error('Source must be a Uint8Array or Buffer but was a ' + ((source && typeof source == 'object') ? source.constructor.name : typeof source))
		}
		if (this instanceof Unpackr) {
			currentUnpackr = this
			if (this.structures) {
				currentStructures = this.structures
				return checkedRead(options)
			} else if (!currentStructures || currentStructures.length > 0) {
				currentStructures = []
			}
		} else {
			currentUnpackr = defaultOptions
			if (!currentStructures || currentStructures.length > 0)
				currentStructures = []
		}
		return checkedRead(options)
	}
	unpackMultiple(source, forEach) {
		let values, lastPosition = 0
		try {
			sequentialMode = true
			let size = source.length
			let value = this ? this.unpack(source, size) : defaultUnpackr.unpack(source, size)
			if (forEach) {
				if (forEach(value, lastPosition, position) === false) return;
				while(position < size) {
					lastPosition = position
					if (forEach(checkedRead(), lastPosition, position) === false) {
						return
					}
				}
			}
			else {
				values = [ value ]
				while(position < size) {
					lastPosition = position
					values.push(checkedRead())
				}
				return values
			}
		} catch(error) {
			error.lastPosition = lastPosition
			error.values = values
			throw error
		} finally {
			sequentialMode = false
			clearSource()
		}
	}
	_mergeStructures(loadedStructures, existingStructures) {
		if (onLoadedStructures)
			loadedStructures = onLoadedStructures.call(this, loadedStructures);
		loadedStructures = loadedStructures || []
		if (Object.isFrozen(loadedStructures))
			loadedStructures = loadedStructures.map(structure => structure.slice(0))
		for (let i = 0, l = loadedStructures.length; i < l; i++) {
			let structure = loadedStructures[i]
			if (structure) {
				structure.isShared = true
				if (i >= 32)
					structure.highByte = (i - 32) >> 5
			}
		}
		loadedStructures.sharedLength = loadedStructures.length
		for (let id in existingStructures || []) {
			if (id >= 0) {
				let structure = loadedStructures[id]
				let existing = existingStructures[id]
				if (existing) {
					if (structure)
						(loadedStructures.restoreStructures || (loadedStructures.restoreStructures = []))[id] = structure
					loadedStructures[id] = existing
				}
			}
		}
		return this.structures = loadedStructures
	}
	decode(source, options) {
		return this.unpack(source, options)
	}
}
export function getPosition() {
	return position
}
export function checkedRead(options) {
	try {
		if (!currentUnpackr.trusted && !sequentialMode) {
			let sharedLength = currentStructures.sharedLength || 0
			if (sharedLength < currentStructures.length)
				currentStructures.length = sharedLength
		}
		let result
		if (currentUnpackr.randomAccessStructure && src[position] < 0x40 && src[position] >= 0x20 && readStruct) {
			result = readStruct(src, position, srcEnd, currentUnpackr)
			src = null // dispose of this so that recursive unpack calls don't save state
			if (!(options && options.lazy) && result)
				result = result.toJSON()
			position = srcEnd
		} else
			result = read()
		if (bundledStrings) { // bundled strings to skip past
			position = bundledStrings.postBundlePosition
			bundledStrings = null
		}
		if (sequentialMode)
			// we only need to restore the structures if there was an error, but if we completed a read,
			// we can clear this out and keep the structures we read
			currentStructures.restoreStructures = null

		if (position == srcEnd) {
			// finished reading this source, cleanup references
			if (currentStructures && currentStructures.restoreStructures)
				restoreStructures()
			currentStructures = null
			src = null
			if (referenceMap)
				referenceMap = null
		} else if (position > srcEnd) {
			// over read
			throw new Error('Unexpected end of MessagePack data')
		} else if (!sequentialMode) {
			let jsonView;
			try {
				jsonView = JSON.stringify(result, (_, value) => typeof value === "bigint" ? `${value}n` : value).slice(0, 100)
			} catch(error) {
				jsonView = '(JSON view not available ' + error + ')'
			}
			throw new Error('Data read, but end of buffer not reached ' + jsonView)
		}
		// else more to read, but we are reading sequentially, so don't clear source yet
		return result
	} catch(error) {
		if (currentStructures && currentStructures.restoreStructures)
			restoreStructures()
		clearSource()
		if (error instanceof RangeError || error.message.startsWith('Unexpected end of buffer') || position > srcEnd) {
			error.incomplete = true
		}
		throw error
	}
}

function restoreStructures() {
	for (let id in currentStructures.restoreStructures) {
		currentStructures[id] = currentStructures.restoreStructures[id]
	}
	currentStructures.restoreStructures = null
}

export function read() {
	let token = src[position++]
	if (token < 0xa0) {
		if (token < 0x80) {
			if (token < 0x40)
				return token
			else {
				let structure = currentStructures[token & 0x3f] ||
					currentUnpackr.getStructures && loadStructures()[token & 0x3f]
				if (structure) {
					if (!structure.read) {
						structure.read = createStructureReader(structure, token & 0x3f)
					}
					return structure.read()
				} else
					return token
			}
		} else if (token < 0x90) {
			// map
			token -= 0x80
			if (currentUnpackr.mapsAsObjects) {
				let object = {}
				for (let i = 0; i < token; i++) {
					let key = readKey()
					if (key === '__proto__')
						key = '__proto_'
					object[key] = read()
				}
				return object
			} else {
				let map = new Map()
				for (let i = 0; i < token; i++) {
					map.set(read(), read())
				}
				return map
			}
		} else {
			token -= 0x90
			let array = new Array(token)
			for (let i = 0; i < token; i++) {
				array[i] = read()
			}
			if (currentUnpackr.freezeData)
				return Object.freeze(array)
			return array
		}
	} else if (token < 0xc0) {
		// fixstr
		let length = token - 0xa0
		if (srcStringEnd >= position) {
			return srcString.slice(position - srcStringStart, (position += length) - srcStringStart)
		}
		if (srcStringEnd == 0 && srcEnd < 140) {
			// for small blocks, avoiding the overhead of the extract call is helpful
			let string = length < 16 ? shortStringInJS(length) : longStringInJS(length)
			if (string != null)
				return string
		}
		return readFixedString(length)
	} else {
		let value
		switch (token) {
			case 0xc0: return null
			case 0xc1:
				if (bundledStrings) {
					value = read() // followed by the length of the string in characters (not bytes!)
					if (value > 0)
						return bundledStrings[1].slice(bundledStrings.position1, bundledStrings.position1 += value)
					else
						return bundledStrings[0].slice(bundledStrings.position0, bundledStrings.position0 -= value)
				}
				return C1; // "never-used", return special object to denote that
			case 0xc2: return false
			case 0xc3: return true
			case 0xc4:
				// bin 8
				value = src[position++]
				if (value === undefined)
					throw new Error('Unexpected end of buffer')
				return readBin(value)
			case 0xc5:
				// bin 16
				value = dataView.getUint16(position)
				position += 2
				return readBin(value)
			case 0xc6:
				// bin 32
				value = dataView.getUint32(position)
				position += 4
				return readBin(value)
			case 0xc7:
				// ext 8
				return readExt(src[position++])
			case 0xc8:
				// ext 16
				value = dataView.getUint16(position)
				position += 2
				return readExt(value)
			case 0xc9:
				// ext 32
				value = dataView.getUint32(position)
				position += 4
				return readExt(value)
			case 0xca:
				value = dataView.getFloat32(position)
				if (currentUnpackr.useFloat32 > 2) {
					// this does rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
					let multiplier = mult10[((src[position] & 0x7f) << 1) | (src[position + 1] >> 7)]
					position += 4
					return ((multiplier * value + (value > 0 ? 0.5 : -0.5)) >> 0) / multiplier
				}
				position += 4
				return value
			case 0xcb:
				value = dataView.getFloat64(position)
				position += 8
				return value
			// uint handlers
			case 0xcc:
				return src[position++]
			case 0xcd:
				value = dataView.getUint16(position)
				position += 2
				return value
			case 0xce:
				value = dataView.getUint32(position)
				position += 4
				return value
			case 0xcf:
				if (currentUnpackr.int64AsType === 'number') {
					value = dataView.getUint32(position) * 0x100000000
					value += dataView.getUint32(position + 4)
				} else if (currentUnpackr.int64AsType === 'string') {
					value = dataView.getBigUint64(position).toString()
				} else if (currentUnpackr.int64AsType === 'auto') {
					value = dataView.getBigUint64(position)
					if (value<=BigInt(2)<<BigInt(52)) value=Number(value)
				} else
					value = dataView.getBigUint64(position)
				position += 8
				return value

			// int handlers
			case 0xd0:
				return dataView.getInt8(position++)
			case 0xd1:
				value = dataView.getInt16(position)
				position += 2
				return value
			case 0xd2:
				value = dataView.getInt32(position)
				position += 4
				return value
			case 0xd3:
				if (currentUnpackr.int64AsType === 'number') {
					value = dataView.getInt32(position) * 0x100000000
					value += dataView.getUint32(position + 4)
				} else if (currentUnpackr.int64AsType === 'string') {
					value = dataView.getBigInt64(position).toString()
				} else if (currentUnpackr.int64AsType === 'auto') {
					value = dataView.getBigInt64(position)
					if (value>=BigInt(-2)<<BigInt(52)&&value<=BigInt(2)<<BigInt(52)) value=Number(value)
				} else
					value = dataView.getBigInt64(position)
				position += 8
				return value

			case 0xd4:
				// fixext 1
				value = src[position++]
				if (value == 0x72) {
					return recordDefinition(src[position++] & 0x3f)
				} else {
					let extension = currentExtensions[value]
					if (extension) {
						if (extension.read) {
							position++ // skip filler byte
							return extension.read(read())
						} else if (extension.noBuffer) {
							position++ // skip filler byte
							return extension()
						} else
							return extension(src.subarray(position, ++position))
					} else
						throw new Error('Unknown extension ' + value)
				}
			case 0xd5:
				// fixext 2
				value = src[position]
				if (value == 0x72) {
					position++
					return recordDefinition(src[position++] & 0x3f, src[position++])
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
				value = src[position++]
				if (srcStringEnd >= position) {
					return srcString.slice(position - srcStringStart, (position += value) - srcStringStart)
				}
				return readString8(value)
			case 0xda:
			// str 16
				value = dataView.getUint16(position)
				position += 2
				if (srcStringEnd >= position) {
					return srcString.slice(position - srcStringStart, (position += value) - srcStringStart)
				}
				return readString16(value)
			case 0xdb:
			// str 32
				value = dataView.getUint32(position)
				position += 4
				if (srcStringEnd >= position) {
					return srcString.slice(position - srcStringStart, (position += value) - srcStringStart)
				}
				return readString32(value)
			case 0xdc:
			// array 16
				value = dataView.getUint16(position)
				position += 2
				return readArray(value)
			case 0xdd:
			// array 32
				value = dataView.getUint32(position)
				position += 4
				return readArray(value)
			case 0xde:
			// map 16
				value = dataView.getUint16(position)
				position += 2
				return readMap(value)
			case 0xdf:
			// map 32
				value = dataView.getUint32(position)
				position += 4
				return readMap(value)
			default: // negative int
				if (token >= 0xe0)
					return token - 0x100
				if (token === undefined) {
					let error = new Error('Unexpected end of MessagePack data')
					error.incomplete = true
					throw error
				}
				throw new Error('Unknown MessagePack token ' + token)

		}
	}
}
const validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/
function createStructureReader(structure, firstId) {
	function readObject() {
		// This initial function is quick to instantiate, but runs slower. After several iterations pay the cost to build the faster function
		if (readObject.count++ > inlineObjectReadThreshold) {
			let readObject = structure.read = (new Function('r', 'return function(){return ' + (currentUnpackr.freezeData ? 'Object.freeze' : '') +
				'({' + structure.map(key => key === '__proto__' ? '__proto_:r()' : validName.test(key) ? key + ':r()' : ('[' + JSON.stringify(key) + ']:r()')).join(',') + '})}'))(read)
			if (structure.highByte === 0)
				structure.read = createSecondByteReader(firstId, structure.read)
			return readObject() // second byte is already read, if there is one so immediately read object
		}
		let object = {}
		for (let i = 0, l = structure.length; i < l; i++) {
			let key = structure[i]
			if (key === '__proto__')
				key = '__proto_'
			object[key] = read()
		}
		if (currentUnpackr.freezeData)
			return Object.freeze(object);
		return object
	}
	readObject.count = 0
	if (structure.highByte === 0) {
		return createSecondByteReader(firstId, readObject)
	}
	return readObject
}

const createSecondByteReader = (firstId, read0) => {
	return function() {
		let highByte = src[position++]
		if (highByte === 0)
			return read0()
		let id = firstId < 32 ? -(firstId + (highByte << 5)) : firstId + (highByte << 5)
		let structure = currentStructures[id] || loadStructures()[id]
		if (!structure) {
			throw new Error('Record id is not defined for ' + id)
		}
		if (!structure.read)
			structure.read = createStructureReader(structure, firstId)
		return structure.read()
	}
}

export function loadStructures() {
	let loadedStructures = saveState(() => {
		// save the state in case getStructures modifies our buffer
		src = null
		return currentUnpackr.getStructures()
	})
	return currentStructures = currentUnpackr._mergeStructures(loadedStructures, currentStructures)
}

var readFixedString = readStringJS
var readString8 = readStringJS
var readString16 = readStringJS
var readString32 = readStringJS
export let isNativeAccelerationEnabled = false

export function setExtractor(extractStrings) {
	isNativeAccelerationEnabled = true
	readFixedString = readString(1)
	readString8 = readString(2)
	readString16 = readString(3)
	readString32 = readString(5)
	function readString(headerLength) {
		return function readString(length) {
			let string = strings[stringPosition++]
			if (string == null) {
				if (bundledStrings)
					return readStringJS(length)
				let byteOffset = src.byteOffset
				let extraction = extractStrings(position - headerLength + byteOffset, srcEnd + byteOffset, src.buffer)
				if (typeof extraction == 'string') {
					string = extraction
					strings = EMPTY_ARRAY
				} else {
					strings = extraction
					stringPosition = 1
					srcStringEnd = 1 // even if a utf-8 string was decoded, must indicate we are in the midst of extracted strings and can't skip strings
					string = strings[0]
					if (string === undefined)
						throw new Error('Unexpected end of buffer')
				}
			}
			let srcStringLength = string.length
			if (srcStringLength <= length) {
				position += length
				return string
			}
			srcString = string
			srcStringStart = position
			srcStringEnd = position + srcStringLength
			position += length
			return string.slice(0, length) // we know we just want the beginning
		}
	}
}
function readStringJS(length) {
	let result
	if (length < 16) {
		if (result = shortStringInJS(length))
			return result
	}
	if (length > 64 && decoder)
		return decoder.decode(src.subarray(position, position += length))
	const end = position + length
	const units = []
	result = ''
	while (position < end) {
		const byte1 = src[position++]
		if ((byte1 & 0x80) === 0) {
			// 1 byte
			units.push(byte1)
		} else if ((byte1 & 0xe0) === 0xc0) {
			// 2 bytes
			const byte2 = src[position++] & 0x3f
			units.push(((byte1 & 0x1f) << 6) | byte2)
		} else if ((byte1 & 0xf0) === 0xe0) {
			// 3 bytes
			const byte2 = src[position++] & 0x3f
			const byte3 = src[position++] & 0x3f
			units.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3)
		} else if ((byte1 & 0xf8) === 0xf0) {
			// 4 bytes
			const byte2 = src[position++] & 0x3f
			const byte3 = src[position++] & 0x3f
			const byte4 = src[position++] & 0x3f
			let unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4
			if (unit > 0xffff) {
				unit -= 0x10000
				units.push(((unit >>> 10) & 0x3ff) | 0xd800)
				unit = 0xdc00 | (unit & 0x3ff)
			}
			units.push(unit)
		} else {
			units.push(byte1)
		}

		if (units.length >= 0x1000) {
			result += fromCharCode.apply(String, units)
			units.length = 0
		}
	}

	if (units.length > 0) {
		result += fromCharCode.apply(String, units)
	}

	return result
}
export function readString(source, start, length) {
	let existingSrc = src;
	src = source;
	position = start;
	try {
		return readStringJS(length);
	} finally {
		src = existingSrc;
	}
}

function readArray(length) {
	let array = new Array(length)
	for (let i = 0; i < length; i++) {
		array[i] = read()
	}
	if (currentUnpackr.freezeData)
		return Object.freeze(array)
	return array
}

function readMap(length) {
	if (currentUnpackr.mapsAsObjects) {
		let object = {}
		for (let i = 0; i < length; i++) {
			let key = readKey()
			if (key === '__proto__')
				key = '__proto_';
			object[key] = read()
		}
		return object
	} else {
		let map = new Map()
		for (let i = 0; i < length; i++) {
			map.set(read(), read())
		}
		return map
	}
}

var fromCharCode = String.fromCharCode
function longStringInJS(length) {
	let start = position
	let bytes = new Array(length)
	for (let i = 0; i < length; i++) {
		const byte = src[position++];
		if ((byte & 0x80) > 0) {
				position = start
				return
			}
			bytes[i] = byte
		}
		return fromCharCode.apply(String, bytes)
}
function shortStringInJS(length) {
	if (length < 4) {
		if (length < 2) {
			if (length === 0)
				return ''
			else {
				let a = src[position++]
				if ((a & 0x80) > 1) {
					position -= 1
					return
				}
				return fromCharCode(a)
			}
		} else {
			let a = src[position++]
			let b = src[position++]
			if ((a & 0x80) > 0 || (b & 0x80) > 0) {
				position -= 2
				return
			}
			if (length < 3)
				return fromCharCode(a, b)
			let c = src[position++]
			if ((c & 0x80) > 0) {
				position -= 3
				return
			}
			return fromCharCode(a, b, c)
		}
	} else {
		let a = src[position++]
		let b = src[position++]
		let c = src[position++]
		let d = src[position++]
		if ((a & 0x80) > 0 || (b & 0x80) > 0 || (c & 0x80) > 0 || (d & 0x80) > 0) {
			position -= 4
			return
		}
		if (length < 6) {
			if (length === 4)
				return fromCharCode(a, b, c, d)
			else {
				let e = src[position++]
				if ((e & 0x80) > 0) {
					position -= 5
					return
				}
				return fromCharCode(a, b, c, d, e)
			}
		} else if (length < 8) {
			let e = src[position++]
			let f = src[position++]
			if ((e & 0x80) > 0 || (f & 0x80) > 0) {
				position -= 6
				return
			}
			if (length < 7)
				return fromCharCode(a, b, c, d, e, f)
			let g = src[position++]
			if ((g & 0x80) > 0) {
				position -= 7
				return
			}
			return fromCharCode(a, b, c, d, e, f, g)
		} else {
			let e = src[position++]
			let f = src[position++]
			let g = src[position++]
			let h = src[position++]
			if ((e & 0x80) > 0 || (f & 0x80) > 0 || (g & 0x80) > 0 || (h & 0x80) > 0) {
				position -= 8
				return
			}
			if (length < 10) {
				if (length === 8)
					return fromCharCode(a, b, c, d, e, f, g, h)
				else {
					let i = src[position++]
					if ((i & 0x80) > 0) {
						position -= 9
						return
					}
					return fromCharCode(a, b, c, d, e, f, g, h, i)
				}
			} else if (length < 12) {
				let i = src[position++]
				let j = src[position++]
				if ((i & 0x80) > 0 || (j & 0x80) > 0) {
					position -= 10
					return
				}
				if (length < 11)
					return fromCharCode(a, b, c, d, e, f, g, h, i, j)
				let k = src[position++]
				if ((k & 0x80) > 0) {
					position -= 11
					return
				}
				return fromCharCode(a, b, c, d, e, f, g, h, i, j, k)
			} else {
				let i = src[position++]
				let j = src[position++]
				let k = src[position++]
				let l = src[position++]
				if ((i & 0x80) > 0 || (j & 0x80) > 0 || (k & 0x80) > 0 || (l & 0x80) > 0) {
					position -= 12
					return
				}
				if (length < 14) {
					if (length === 12)
						return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l)
					else {
						let m = src[position++]
						if ((m & 0x80) > 0) {
							position -= 13
							return
						}
						return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m)
					}
				} else {
					let m = src[position++]
					let n = src[position++]
					if ((m & 0x80) > 0 || (n & 0x80) > 0) {
						position -= 14
						return
					}
					if (length < 15)
						return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n)
					let o = src[position++]
					if ((o & 0x80) > 0) {
						position -= 15
						return
					}
					return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
				}
			}
		}
	}
}

function readOnlyJSString() {
	let token = src[position++]
	let length
	if (token < 0xc0) {
		// fixstr
		length = token - 0xa0
	} else {
		switch(token) {
			case 0xd9:
			// str 8
				length = src[position++]
				break
			case 0xda:
			// str 16
				length = dataView.getUint16(position)
				position += 2
				break
			case 0xdb:
			// str 32
				length = dataView.getUint32(position)
				position += 4
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
		Uint8Array.prototype.slice.call(src, position, position += length) :
		src.subarray(position, position += length)
}
function readExt(length) {
	let type = src[position++]
	if (currentExtensions[type]) {
		let end
		return currentExtensions[type](src.subarray(position, end = (position += length)), (readPosition) => {
			position = readPosition;
			try {
				return read();
			} finally {
				position = end;
			}
		})
	}
	else
		throw new Error('Unknown extension type ' + type)
}

var keyCache = new Array(4096)
function readKey() {
	let length = src[position++]
	if (length >= 0xa0 && length < 0xc0) {
		// fixstr, potentially use key cache
		length = length - 0xa0
		if (srcStringEnd >= position) // if it has been extracted, must use it (and faster anyway)
			return srcString.slice(position - srcStringStart, (position += length) - srcStringStart)
		else if (!(srcStringEnd == 0 && srcEnd < 180))
			return readFixedString(length)
	} else { // not cacheable, go back and do a standard read
		position--
		return asSafeString(read())
	}
	let key = ((length << 5) ^ (length > 1 ? dataView.getUint16(position) : length > 0 ? src[position] : 0)) & 0xfff
	let entry = keyCache[key]
	let checkPosition = position
	let end = position + length - 3
	let chunk
	let i = 0
	if (entry && entry.bytes == length) {
		while (checkPosition < end) {
			chunk = dataView.getUint32(checkPosition)
			if (chunk != entry[i++]) {
				checkPosition = 0x70000000
				break
			}
			checkPosition += 4
		}
		end += 3
		while (checkPosition < end) {
			chunk = src[checkPosition++]
			if (chunk != entry[i++]) {
				checkPosition = 0x70000000
				break
			}
		}
		if (checkPosition === end) {
			position = checkPosition
			return entry.string
		}
		end -= 3
		checkPosition = position
	}
	entry = []
	keyCache[key] = entry
	entry.bytes = length
	while (checkPosition < end) {
		chunk = dataView.getUint32(checkPosition)
		entry.push(chunk)
		checkPosition += 4
	}
	end += 3
	while (checkPosition < end) {
		chunk = src[checkPosition++]
		entry.push(chunk)
	}
	// for small blocks, avoiding the overhead of the extract call is helpful
	let string = length < 16 ? shortStringInJS(length) : longStringInJS(length)
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
	let structure = read().map(asSafeString) // ensure that all keys are strings and
	// that the array is mutable
	let firstByte = id
	if (highByte !== undefined) {
		id = id < 32 ? -((highByte << 5) + id) : ((highByte << 5) + id)
		structure.highByte = highByte
	}
	let existingStructure = currentStructures[id]
	// If it is a shared structure, we need to restore any changes after reading.
	// Also in sequential mode, we may get incomplete reads and thus errors, and we need to restore
	// to the state prior to an incomplete read in order to properly resume.
	if (existingStructure && (existingStructure.isShared || sequentialMode)) {
		(currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure
	}
	currentStructures[id] = structure
	structure.read = createStructureReader(structure, firstByte)
	return structure.read()
}
currentExtensions[0] = () => {} // notepack defines extension 0 to mean undefined, so use that as the default here
currentExtensions[0].noBuffer = true

currentExtensions[0x42] = data => {
	let headLength = (data.byteLength % 8) || 8
	let head = BigInt(data[0] & 0x80 ? data[0] - 0x100 : data[0])
	for (let i = 1; i < headLength; i++) {
		head <<= BigInt(8)
		head += BigInt(data[i])
	}
	if (data.byteLength !== headLength) {
		let view = new DataView(data.buffer, data.byteOffset, data.byteLength)
		let decode = (start, end) => {
			let length = end - start
			if (length <= 40) {
				let out = view.getBigUint64(start)
				for (let i = start + 8; i < end; i += 8) {
					out <<= BigInt(64n)
					out |= view.getBigUint64(i)
				}
				return out
			}
			// if (length === 8) return view.getBigUint64(start)
			let middle = start + (length >> 4 << 3)
			let left = decode(start, middle)
			let right = decode(middle, end)
			return (left << BigInt((end - middle) * 8)) | right
		}
		head = (head << BigInt((view.byteLength - headLength) * 8)) | decode(headLength, view.byteLength)
	}
	return head
}

let errors = {
	Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, AggregateError: typeof AggregateError === 'function' ? AggregateError : null,
}
currentExtensions[0x65] = () => {
	let data = read()
	if (!errors[data[0]]) {
		let error = Error(data[1], { cause: data[2] })
		error.name = data[0]
		return error
	}
	return errors[data[0]](data[1], { cause: data[2] })
}

currentExtensions[0x69] = (data) => {
	// id extension (for structured clones)
	if (currentUnpackr.structuredClone === false) throw new Error('Structured clone extension is disabled')
	let id = dataView.getUint32(position - 4)
	if (!referenceMap)
		referenceMap = new Map()
	let token = src[position]
	let target
	// TODO: handle any other types that can cycle and make the code more robust if there are other extensions
	if (token >= 0x90 && token < 0xa0 || token == 0xdc || token == 0xdd)
		target = []
	else if (token >= 0x80 && token < 0x90 || token == 0xde || token == 0xdf)
		target = new Map()
	else if ((token >= 0xc7 && token <= 0xc9 || token >= 0xd4 && token <= 0xd8) && src[position + 1] === 0x73)
		target = new Set()
	else
		target = {}

	let refEntry = { target } // a placeholder object
	referenceMap.set(id, refEntry)
	let targetProperties = read() // read the next value as the target object to id
	if (!refEntry.used) {
		// no cycle, can just use the returned read object
		return refEntry.target = targetProperties // replace the placeholder with the real one
	} else {
		// there is a cycle, so we have to assign properties to original target
		Object.assign(target, targetProperties)
	}

	// copy over map/set entries if we're able to
	if (target instanceof Map)
		for (let [k, v] of targetProperties.entries()) target.set(k, v)
	if (target instanceof Set)
		for (let i of Array.from(targetProperties)) target.add(i)
	return target
}

currentExtensions[0x70] = (data) => {
	// pointer extension (for structured clones)
	if (currentUnpackr.structuredClone === false) throw new Error('Structured clone extension is disabled')
	let id = dataView.getUint32(position - 4)
	let refEntry = referenceMap.get(id)
	refEntry.used = true
	return refEntry.target
}

currentExtensions[0x73] = () => new Set(read())

export const typedArrays = ['Int8','Uint8','Uint8Clamped','Int16','Uint16','Int32','Uint32','Float32','Float64','BigInt64','BigUint64'].map(type => type + 'Array')

let glbl = typeof globalThis === 'object' ? globalThis : window;
currentExtensions[0x74] = (data) => {
	let typeCode = data[0]
	// we always have to slice to get a new ArrayBuffer that is aligned
	let buffer = Uint8Array.prototype.slice.call(data, 1).buffer

	let typedArrayName = typedArrays[typeCode]
	if (!typedArrayName) {
		if (typeCode === 16) return buffer
		if (typeCode === 17) return new DataView(buffer)
		throw new Error('Could not find typed array for code ' + typeCode)
	}
	return new glbl[typedArrayName](buffer)
}
currentExtensions[0x78] = () => {
	let data = read()
	return new RegExp(data[0], data[1])
}
const TEMP_BUNDLE = []
currentExtensions[0x62] = (data) => {
	let dataSize = (data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3]
	let dataPosition = position
	position += dataSize - data.length
	bundledStrings = TEMP_BUNDLE
	bundledStrings = [readOnlyJSString(), readOnlyJSString()]
	bundledStrings.position0 = 0
	bundledStrings.position1 = 0
	bundledStrings.postBundlePosition = position
	position = dataPosition
	return read()
}

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
}
// registration of bulk record definition?
// currentExtensions[0x52] = () =>

function saveState(callback) {
	if (onSaveState)
		onSaveState();
	let savedSrcEnd = srcEnd
	let savedPosition = position
	let savedStringPosition = stringPosition
	let savedSrcStringStart = srcStringStart
	let savedSrcStringEnd = srcStringEnd
	let savedSrcString = srcString
	let savedStrings = strings
	let savedReferenceMap = referenceMap
	let savedBundledStrings = bundledStrings

	// TODO: We may need to revisit this if we do more external calls to user code (since it could be slow)
	let savedSrc = new Uint8Array(src.slice(0, srcEnd)) // we copy the data in case it changes while external data is processed
	let savedStructures = currentStructures
	let savedStructuresContents = currentStructures.slice(0, currentStructures.length)
	let savedPackr = currentUnpackr
	let savedSequentialMode = sequentialMode
	let value = callback()
	srcEnd = savedSrcEnd
	position = savedPosition
	stringPosition = savedStringPosition
	srcStringStart = savedSrcStringStart
	srcStringEnd = savedSrcStringEnd
	srcString = savedSrcString
	strings = savedStrings
	referenceMap = savedReferenceMap
	bundledStrings = savedBundledStrings
	src = savedSrc
	sequentialMode = savedSequentialMode
	currentStructures = savedStructures
	currentStructures.splice(0, currentStructures.length, ...savedStructuresContents)
	currentUnpackr = savedPackr
	dataView = new DataView(src.buffer, src.byteOffset, src.byteLength)
	return value
}
export function clearSource() {
	src = null
	referenceMap = null
	currentStructures = null
}

export function addExtension(extension) {
	if (extension.unpack)
		currentExtensions[extension.type] = extension.unpack
	else
		currentExtensions[extension.type] = extension
}

export const mult10 = new Array(147) // this is a table matching binary exponents to the multiplier to determine significant digit rounding
for (let i = 0; i < 256; i++) {
	mult10[i] = +('1e' + Math.floor(45.15 - i * 0.30103))
}
export const Decoder = Unpackr
var defaultUnpackr = new Unpackr({ useRecords: false })
export const unpack = defaultUnpackr.unpack
export const unpackMultiple = defaultUnpackr.unpackMultiple
export const decode = defaultUnpackr.unpack
export const FLOAT32_OPTIONS = {
	NEVER: 0,
	ALWAYS: 1,
	DECIMAL_ROUND: 3,
	DECIMAL_FIT: 4
}
let f32Array = new Float32Array(1)
let u8Array = new Uint8Array(f32Array.buffer, 0, 4)
export function roundFloat32(float32Number) {
	f32Array[0] = float32Number
	let multiplier = mult10[((u8Array[3] & 0x7f) << 1) | (u8Array[2] >> 7)]
	return ((multiplier * float32Number + (float32Number > 0 ? 0.5 : -0.5)) >> 0) / multiplier
}
export function setReadStruct(updatedReadStruct, loadedStructs, saveState) {
	readStruct = updatedReadStruct;
	onLoadedStructures = loadedStructs;
	onSaveState = saveState;
}
