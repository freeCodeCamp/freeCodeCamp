'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*
control character types:
1 - metadata
2 - symbols
6 - false
7 - true
8- 16 - negative doubles
16-24 positive doubles
27 - String starts with a character 27 or less or is an empty string
0 - multipart separator
> 27 normal string characters
*/
/*
* Convert arbitrary scalar values to buffer bytes with type preservation and type-appropriate ordering
*/

const float64Array = new Float64Array(2);
const int32Array = new Int32Array(float64Array.buffer, 0, 4);
const {lowIdx, highIdx} = (() => {
	if (new Uint8Array(new Uint32Array([0xFFEE1100]).buffer)[0] === 0xFF) {
		return { lowIdx: 1, highIdx: 0 };
	}
	return { lowIdx: 0, highIdx: 1 };
})();
let nullTerminate = false;
let textEncoder;
try {
	textEncoder = new TextEncoder();
} catch (error) {}

/*
* Convert arbitrary scalar values to buffer bytes with type preservation and type-appropriate ordering
*/
function writeKey(key, target, position, inSequence) {
	let targetView = target.dataView;
	if (!targetView)
		targetView  = target.dataView = new DataView(target.buffer, target.byteOffset, ((target.byteLength + 3) >> 2) << 2);
	switch (typeof key) {
	case 'string':
		let strLength = key.length;
		let c1 = key.charCodeAt(0);
		if (!(c1 >= 28)) // escape character
			target[position++] = 27;
		if (strLength < 0x40) {
			let i, c2;
			for (i = 0; i < strLength; i++) {
				c1 = key.charCodeAt(i);
				if (c1 <= 4) {
					target[position++] = 4;
					target[position++] = c1;
				} else if (c1 < 0x80) {
					target[position++] = c1;
				} else if (c1 < 0x800) {
					target[position++] = c1 >> 6 | 0xc0;
					target[position++] = c1 & 0x3f | 0x80;
				} else if (
					(c1 & 0xfc00) === 0xd800 &&
					((c2 = key.charCodeAt(i + 1)) & 0xfc00) === 0xdc00
				) {
					c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
					i++;
					target[position++] = c1 >> 18 | 0xf0;
					target[position++] = c1 >> 12 & 0x3f | 0x80;
					target[position++] = c1 >> 6 & 0x3f | 0x80;
					target[position++] = c1 & 0x3f | 0x80;
				} else {
					target[position++] = c1 >> 12 | 0xe0;
					target[position++] = c1 >> 6 & 0x3f | 0x80;
					target[position++] = c1 & 0x3f | 0x80;
				}
			}
		} else {
			if (target.utf8Write)
				position += target.utf8Write(key, position, target.byteLength - position);
			else
				position += textEncoder.encodeInto(key, target.subarray(position)).written;
			if (position > target.length - 4)
				throw new RangeError('String does not fit in target buffer')
		}
		break
	case 'number':
		float64Array[0] = key;
		let lowInt = int32Array[lowIdx];
		let highInt = int32Array[highIdx];
		let length;
		if (key < 0) {
			targetView.setInt32(position + 4, ~((lowInt >>> 4) | (highInt << 28)));
			targetView.setInt32(position + 0, (highInt ^ 0x7fffffff) >>> 4);
			targetView.setInt32(position + 8, ((lowInt & 0xf) ^ 0xf) << 4, true); // just always do the null termination here
			return position + 9
		} else if ((lowInt & 0xf) || inSequence) {
			length = 9;
		} else if (lowInt & 0xfffff)
			length = 8;
		else if (lowInt || (highInt & 0xf))
			length = 6;
		else
			length = 4;
		// switching order to go to little endian
		targetView.setInt32(position + 0, (highInt >>> 4) | 0x10000000);
		targetView.setInt32(position + 4, (lowInt >>> 4) | (highInt << 28));
		// if (length == 9 || nullTerminate)
		targetView.setInt32(position + 8, (lowInt & 0xf) << 4, true);
		return position + length;
	case 'object':
		if (key) {
			if (Array.isArray(key)) {
				for (let i = 0, l = key.length; i < l; i++) {
					if (i > 0)
						target[position++] = 0;
					position = writeKey(key[i], target, position, true);
				}
				break
			} else if (key instanceof Uint8Array) {
				target.set(key, position);
				position += key.length;
				break
			} else {
				throw new Error('Unable to serialize object as a key: ' + JSON.stringify(key))
			}
		} else // null
			target[position++] = 0;
			break
	case 'boolean':
		targetView.setUint32(position++, key ? 7 : 6, true);
		return position
	case 'bigint':
		let asFloat = Number(key);
		if (BigInt(asFloat) > key) {
			float64Array[0] = asFloat;
			if (asFloat > 0) {
				if (int32Array[lowIdx])
					int32Array[lowIdx]--;
				else {
					int32Array[highIdx]--;
					int32Array[lowIdx] = 0xffffffff;
				}
			} else {
				if (int32Array[lowIdx] < 0xffffffff)
					int32Array[lowIdx]++;
				else {
					int32Array[highIdx]++;
					int32Array[lowIdx] = 0;
				}
			}
			asFloat = float64Array[0];
		}
		let difference = key - BigInt(asFloat);
		if (difference === 0n)
			return writeKey(asFloat, target, position, inSequence)
		writeKey(asFloat, target, position, inSequence);
		position += 9; // always increment by 9 if we are adding fractional bits
		let exponent = BigInt((int32Array[highIdx] >> 20 & 0x7ff) - 1079);
		let nextByte = difference >> exponent;
		target[position - 1] |= Number(nextByte);
		difference -= nextByte << exponent;
		let first = true;
		while (difference || first) {
			first = false;
			exponent -= 7n;
			let nextByte = difference >> exponent;
			target[position++] = Number(nextByte) | 0x80;
			difference -= nextByte << exponent;
		}
		return position;
	case 'undefined':
		return position
	// undefined is interpreted as the absence of a key, signified by zero length
	case 'symbol':
		target[position++] = 2;
		return writeKey(key.description, target, position, inSequence)
	default:
		throw new Error('Can not serialize key of type ' + typeof key)
	}
	if (nullTerminate && !inSequence)
		targetView.setUint32(position, 0);
	return position
}

let position;
function readKey(buffer, start, end, inSequence) {
	position = start;
	let controlByte = buffer[position];
	let value;
	if (controlByte < 24) {
		if (controlByte < 8) {
			position++;
			if (controlByte == 6) {
				value = false;
			} else if (controlByte == 7) {
				value = true;
			} else if (controlByte == 0) {
				value = null;
			} else if (controlByte == 2) {
				value = Symbol.for(readStringSafely(buffer, end));
			} else
				return Uint8Array.prototype.slice.call(buffer, start, end)
		} else {
			let dataView;
			try {
				dataView = buffer.dataView || (buffer.dataView = new DataView(buffer.buffer, buffer.byteOffset, ((buffer.byteLength + 3) >> 2) << 2));
			} catch(error) {
				// if it is write at the end of the ArrayBuffer, we may need to retry with the exact remaining bytes
				dataView = buffer.dataView || (buffer.dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.buffer.byteLength - buffer.byteOffset));
			}

			let highInt = dataView.getInt32(position) << 4;
			let size = end - position;
			let lowInt;
			if (size > 4) {
				lowInt = position + 8 <= buffer.length ? dataView.getInt32(position + 4) : (
					buffer[position + 4] << 24 |
					buffer[position + 5] << 16 |
					buffer[position + 6] << 8 |
					buffer[position + 7]
				);
				highInt |= lowInt >>> 28;
				if (size <= 6) { // clear the last bits
					lowInt &= -0x10000;
				}
				lowInt = lowInt << 4;
				if (size > 8) {
					lowInt = lowInt | buffer[position + 8] >> 4;
				}
			} else
				lowInt = 0;
			if (controlByte < 16) {
				// negative gets negated
				highInt = highInt ^ 0x7fffffff;
				lowInt = ~lowInt;
			}
			int32Array[highIdx] = highInt;
			int32Array[lowIdx] = lowInt;
			value = float64Array[0];
			position += 9;
			if (size > 9 && buffer[position] > 0) {
				// convert the float to bigint, and then we will add precision as we enumerate through the
				// extra bytes
				value = BigInt(value);
				let exponent = highInt >> 20 & 0x7ff;
				let next_byte = buffer[position - 1] & 0xf;
				value += BigInt(next_byte) << BigInt(exponent - 1079);
				while ((next_byte = buffer[position]) > 0 && position++ < end) {
					value += BigInt(next_byte & 0x7f) << BigInt((start - position) * 7 + exponent - 1016);
				}
			}
		}
	} else {
		if (controlByte == 27) {
			position++;
		}
		value = readStringSafely(buffer, end);
		if (position < end) position--; // if have a null terminator for the string, count that as the array separator
	}
	while (position < end) {
		if (buffer[position] === 0)
			position++;
		if (inSequence) {
			encoder.position = position;
			return value
		}
		let nextValue = readKey(buffer, position, end, true);
		if (value instanceof Array) {
			value.push(nextValue);
		} else
			value = [ value, nextValue ];
	}
	return value
}
const enableNullTermination = () => nullTerminate = true;

const encoder = {
	writeKey,
	readKey,
	enableNullTermination,
};
let targetBuffer = [];
let targetPosition = 0;
const hasNodeBuffer = typeof Buffer !== 'undefined';
const ByteArrayAllocate = hasNodeBuffer ? Buffer.allocUnsafeSlow : Uint8Array;
const toBufferKey = (key) => {
	let newBuffer;
	if (targetPosition + 100 > targetBuffer.length) {
		targetBuffer = new ByteArrayAllocate(8192);
		targetPosition = 0;
		newBuffer = true;
	}
	try {
		let result = targetBuffer.slice(targetPosition, targetPosition = writeKey(key, targetBuffer, targetPosition));
		if (targetPosition > targetBuffer.length) {
			if (newBuffer)
				throw new Error('Key is too large')
			return toBufferKey(key)
		}
		return result
	} catch(error) {
		if (newBuffer)
			throw error
		targetPosition = targetBuffer.length;
		return toBufferKey(key)
	}
};
const fromBufferKey = (sourceBuffer) => {
	return readKey(sourceBuffer, 0, sourceBuffer.length)
};
const fromCharCode = String.fromCharCode;
function makeStringBuilder() {
	let stringBuildCode = '(source) => {';
	let previous = [];
	for (let i = 0; i < 0x30; i++) {
		let v = fromCharCode((i & 0xf) + 97) + fromCharCode((i >> 4) + 97);
		stringBuildCode += `
		let ${v} = source[position++]
		if (${v} > 4) {
			if (${v} >= 0x80) ${v} = finishUtf8(${v}, source)
		} else {
			if (${v} === 4)
				${v} = source[position++]
			else
				return fromCharCode(${previous})
		}
		`;
		previous.push(v);
		if (i == 1000000) // this just exists to prevent rollup from doing dead code elimination on finishUtf8
			finishUtf8();
	}
	stringBuildCode += `return fromCharCode(${previous}) + readString(source)}`;
	return stringBuildCode
}

let pendingSurrogate;
function finishUtf8(byte1, src) {
	if ((byte1 & 0xe0) === 0xc0) {
		// 2 bytes
		const byte2 = src[position++] & 0x3f;
		return ((byte1 & 0x1f) << 6) | byte2
	} else if ((byte1 & 0xf0) === 0xe0) {
		// 3 bytes
		const byte2 = src[position++] & 0x3f;
		const byte3 = src[position++] & 0x3f;
		return ((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3
	} else if ((byte1 & 0xf8) === 0xf0) {
		// 4 bytes
		if (pendingSurrogate) {
			byte1 = pendingSurrogate;
			pendingSurrogate = null;
			position += 3;
			return byte1
		}
		const byte2 = src[position++] & 0x3f;
		const byte3 = src[position++] & 0x3f;
		const byte4 = src[position++] & 0x3f;
		let unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
		if (unit > 0xffff) {
			pendingSurrogate = 0xdc00 | (unit & 0x3ff);
			unit = (((unit - 0x10000) >>> 10) & 0x3ff) | 0xd800;
			position -= 4; // reset so we can return the next part of the surrogate pair
		}
		return unit
	} else {
		return byte1
	}
}

const readString =
	typeof process !== 'undefined' && process.isBun ? // the eval in bun doesn't properly closure on position, so we
		// have to manually update it
		(function(reading) {
			let { setPosition, getPosition, readString } = reading;
			return (source) => {
				setPosition(position);
				let value = readString(source);
				position = getPosition();
				return value;
			};
		})((new Function('fromCharCode', 'let position; let readString = ' + makeStringBuilder() +
			';return {' +
			'setPosition(p) { position = p },' +
			'getPosition() { return position },' +
			'readString }'))(fromCharCode)) :
		eval(makeStringBuilder());
function readStringSafely(source, end) {
	if (source[end] > 0) {
		let previous = source[end];
		try {
			// read string expects a null terminator, that is a 0 or undefined from reading past the end of the buffer, so we
			// have to ensure that, but do so safely, restoring the buffer to its original state
			source[end] = 0;
			return readString(source)
		} finally {
			source[end] = previous;
		}
	} else return readString(source);
}
function compareKeys(a, b) {
	// compare with type consistency that matches binary comparison
	if (typeof a == 'object') {
		if (!a) {
			return b == null ? 0 : -1
		}
		if (a.compare) {
			if (b == null) {
				return 1
			} else if (b.compare) {
				return a.compare(b)
			} else {
				return -1
			}
		}
		let arrayComparison;
		if (b instanceof Array) {
			let i = 0;
			while((arrayComparison = compareKeys(a[i], b[i])) == 0 && i <= a.length)  {
				i++;
			}
			return arrayComparison
		}
		arrayComparison = compareKeys(a[0], b);
		if (arrayComparison == 0 && a.length > 1)
			return 1
		return arrayComparison
	} else if (typeof a == typeof b) {
		if (typeof a === 'symbol') {
			a = Symbol.keyFor(a);
			b = Symbol.keyFor(b);
		}
		return a < b ? -1 : a === b ? 0 : 1
	}
	else if (typeof b == 'object') {
		if (b instanceof Array)
			return -compareKeys(b, a)
		return 1
	} else {
		return typeOrder[typeof a] < typeOrder[typeof b] ? -1 : 1
	}
}
const typeOrder = {
	symbol: 0,
	undefined: 1,
	boolean: 2,
	number: 3,
	string: 4
};
const MINIMUM_KEY = null;
const MAXIMUM_KEY = new Uint8Array([0xff]);

exports.MAXIMUM_KEY = MAXIMUM_KEY;
exports.MINIMUM_KEY = MINIMUM_KEY;
exports.compareKeys = compareKeys;
exports.enableNullTermination = enableNullTermination;
exports.encoder = encoder;
exports.fromBufferKey = fromBufferKey;
exports.readKey = readKey;
exports.toBufferKey = toBufferKey;
exports.writeKey = writeKey;
