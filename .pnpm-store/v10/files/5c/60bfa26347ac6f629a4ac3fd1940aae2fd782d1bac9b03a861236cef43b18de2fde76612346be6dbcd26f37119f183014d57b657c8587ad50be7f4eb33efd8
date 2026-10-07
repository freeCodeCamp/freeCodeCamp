
/*

For "any-data":
32-55 - record with record ids (-32)
56 - 8-bit record ids
57 - 16-bit record ids
58 - 24-bit record ids
59 - 32-bit record ids
250-255 - followed by typed fixed width values
64-250 msgpackr/cbor/paired data
arrays and strings within arrays are handled by paired encoding

Structure encoding:
(type - string (using paired encoding))+

Type encoding
encoding byte - fixed width byte - next reference+

Encoding byte:
first bit:
	0 - inline
	1 - reference
second bit:
	0 - data or number
	1 - string

remaining bits:
	character encoding - ISO-8859-x


null (0xff)+ 0xf6
null (0xff)+ 0xf7

*/


import {setWriteStructSlots, RECORD_SYMBOL, addExtension} from './pack.js'
import {setReadStruct, mult10, readString} from './unpack.js';
const ASCII = 3; // the MIBenum from https://www.iana.org/assignments/character-sets/character-sets.xhtml (and other character encodings could be referenced by MIBenum)
const NUMBER = 0;
const UTF8 = 2;
const OBJECT_DATA = 1;
const DATE = 16;
const TYPE_NAMES = ['num', 'object', 'string', 'ascii'];
TYPE_NAMES[DATE] = 'date';
const float32Headers = [false, true, true, false, false, true, true, false];
let evalSupported;
try {
	new Function('');
	evalSupported = true;
} catch(error) {
	// if eval variants are not supported, do not create inline object readers ever
}

let updatedPosition;
const hasNodeBuffer = typeof Buffer !== 'undefined'
let textEncoder, currentSource;
try {
	textEncoder = new TextEncoder()
} catch (error) {}
const encodeUtf8 = hasNodeBuffer ? function(target, string, position) {
	return target.utf8Write(string, position, target.byteLength - position)
} : (textEncoder && textEncoder.encodeInto) ?
	function(target, string, position) {
		return textEncoder.encodeInto(string, target.subarray(position)).written
	} : false

const TYPE = Symbol('type');
const PARENT = Symbol('parent');
setWriteStructSlots(writeStruct, prepareStructures);
function writeStruct(object, target, encodingStart, position, structures, makeRoom, pack, packr) {
	let typedStructs = packr.typedStructs || (packr.typedStructs = []);
	// note that we rely on pack.js to load stored structures before we get to this point
	let targetView = target.dataView;
	let refsStartPosition = (typedStructs.lastStringStart || 100) + position;
	let safeEnd = target.length - 10;
	let start = position;
	if (position > safeEnd) {
		target = makeRoom(position);
		targetView = target.dataView;
		position -= encodingStart;
		start -= encodingStart;
		refsStartPosition -= encodingStart;
		encodingStart = 0;
		safeEnd = target.length - 10;
	}

	let refOffset, refPosition = refsStartPosition;

	let transition = typedStructs.transitions || (typedStructs.transitions = Object.create(null));
	let nextId = typedStructs.nextId || typedStructs.length;
	let headerSize =
		nextId < 0xf ? 1 :
			nextId < 0xf0 ? 2 :
				nextId < 0xf000 ? 3 :
					nextId < 0xf00000 ? 4 : 0;
	if (headerSize === 0)
		return 0;
	position += headerSize;
	let queuedReferences = [];
	let usedAscii0;
	let keyIndex = 0;
	for (let key in object) {
		let value = object[key];
		let nextTransition = transition[key];
		if (!nextTransition) {
			transition[key] = nextTransition = {
				key,
				parent: transition,
				enumerationOffset: 0,
				ascii0: null,
				ascii8: null,
				num8: null,
				string16: null,
				object16: null,
				num32: null,
				float64: null,
				date64: null
			};
		}
		if (position > safeEnd) {
			target = makeRoom(position);
			targetView = target.dataView;
			position -= encodingStart;
			start -= encodingStart;
			refsStartPosition -= encodingStart;
			refPosition -= encodingStart;
			encodingStart = 0;
			safeEnd = target.length - 10
		}
		switch (typeof value) {
			case 'number':
				let number = value;
				// first check to see if we are using a lot of ids and should default to wide/common format
				if (nextId < 200 || !nextTransition.num64) {
					if (number >> 0 === number && number < 0x20000000 && number > -0x1f000000) {
						if (number < 0xf6 && number >= 0 && (nextTransition.num8 && !(nextId > 200 && nextTransition.num32) || number < 0x20 && !nextTransition.num32)) {
							transition = nextTransition.num8 || createTypeTransition(nextTransition, NUMBER, 1);
							target[position++] = number;
						} else {
							transition = nextTransition.num32 || createTypeTransition(nextTransition, NUMBER, 4);
							targetView.setUint32(position, number, true);
							position += 4;
						}
						break;
					} else if (number < 0x100000000 && number >= -0x80000000) {
						targetView.setFloat32(position, number, true);
						if (float32Headers[target[position + 3] >>> 5]) {
							let xShifted
							// this checks for rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
							if (((xShifted = number * mult10[((target[position + 3] & 0x7f) << 1) | (target[position + 2] >> 7)]) >> 0) === xShifted) {
								transition = nextTransition.num32 || createTypeTransition(nextTransition, NUMBER, 4);
								position += 4;
								break;
							}
						}
					}
				}
				transition = nextTransition.num64 || createTypeTransition(nextTransition, NUMBER, 8);
				targetView.setFloat64(position, number, true);
				position += 8;
				break;
			case 'string':
				let strLength = value.length;
				refOffset = refPosition - refsStartPosition;
				if ((strLength << 2) + refPosition > safeEnd) {
					target = makeRoom((strLength << 2) + refPosition);
					targetView = target.dataView;
					position -= encodingStart;
					start -= encodingStart;
					refsStartPosition -= encodingStart;
					refPosition -= encodingStart;
					encodingStart = 0;
					safeEnd = target.length - 10
				}
				if (strLength > ((0xff00 + refOffset) >> 2)) {
					queuedReferences.push(key, value, position - start);
					break;
				}
				let isNotAscii
				let strStart = refPosition;
				if (strLength < 0x40) {
					let i, c1, c2;
					for (i = 0; i < strLength; i++) {
						c1 = value.charCodeAt(i)
						if (c1 < 0x80) {
							target[refPosition++] = c1
						} else if (c1 < 0x800) {
							isNotAscii = true;
							target[refPosition++] = c1 >> 6 | 0xc0
							target[refPosition++] = c1 & 0x3f | 0x80
						} else if (
							(c1 & 0xfc00) === 0xd800 &&
							((c2 = value.charCodeAt(i + 1)) & 0xfc00) === 0xdc00
						) {
							isNotAscii = true;
							c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff)
							i++
							target[refPosition++] = c1 >> 18 | 0xf0
							target[refPosition++] = c1 >> 12 & 0x3f | 0x80
							target[refPosition++] = c1 >> 6 & 0x3f | 0x80
							target[refPosition++] = c1 & 0x3f | 0x80
						} else {
							isNotAscii = true;
							target[refPosition++] = c1 >> 12 | 0xe0
							target[refPosition++] = c1 >> 6 & 0x3f | 0x80
							target[refPosition++] = c1 & 0x3f | 0x80
						}
					}
				} else {
					refPosition += encodeUtf8(target, value, refPosition);
					isNotAscii = refPosition - strStart > strLength;
				}
				if (refOffset < 0xa0 || (refOffset < 0xf6 && (nextTransition.ascii8 || nextTransition.string8))) {
					// short strings
					if (isNotAscii) {
						if (!(transition = nextTransition.string8)) {
							if (typedStructs.length > 10 && (transition = nextTransition.ascii8)) {
								// we can safely change ascii to utf8 in place since they are compatible
								transition.__type = UTF8;
								nextTransition.ascii8 = null;
								nextTransition.string8 = transition;
								pack(null, 0, true); // special call to notify that structures have been updated
							} else {
								transition = createTypeTransition(nextTransition, UTF8, 1);
							}
						}
					} else if (refOffset === 0 && !usedAscii0) {
						usedAscii0 = true;
						transition = nextTransition.ascii0 || createTypeTransition(nextTransition, ASCII, 0);
						break; // don't increment position
					}// else ascii:
					else if (!(transition = nextTransition.ascii8) && !(typedStructs.length > 10 && (transition = nextTransition.string8)))
						transition = createTypeTransition(nextTransition, ASCII, 1);
					target[position++] = refOffset;
				} else {
					// TODO: Enable ascii16 at some point, but get the logic right
					//if (isNotAscii)
						transition = nextTransition.string16 || createTypeTransition(nextTransition, UTF8, 2);
					//else
						//transition = nextTransition.ascii16 || createTypeTransition(nextTransition, ASCII, 2);
					targetView.setUint16(position, refOffset, true);
					position += 2;
				}
				break;
			case 'object':
				if (value) {
					if (value.constructor === Date) {
						transition = nextTransition.date64 || createTypeTransition(nextTransition, DATE, 8);
						targetView.setFloat64(position, value.getTime(), true);
						position += 8;
					} else {
						queuedReferences.push(key, value, keyIndex);
					}
					break;
				} else { // null
					nextTransition = anyType(nextTransition, position, targetView, -10); // match CBOR with this
					if (nextTransition) {
						transition = nextTransition;
						position = updatedPosition;
					} else queuedReferences.push(key, value, keyIndex);
				}
				break;
			case 'boolean':
				transition = nextTransition.num8 || nextTransition.ascii8 || createTypeTransition(nextTransition, NUMBER, 1);
				target[position++] = value ? 0xf9 : 0xf8; // match CBOR with these
				break;
			case 'undefined':
				nextTransition = anyType(nextTransition, position, targetView, -9); // match CBOR with this
				if (nextTransition) {
					transition = nextTransition;
					position = updatedPosition;
				} else queuedReferences.push(key, value, keyIndex);
				break;
			default:
				queuedReferences.push(key, value, keyIndex);
		}
		keyIndex++;
	}

	for (let i = 0, l = queuedReferences.length; i < l;) {
		let key = queuedReferences[i++];
		let value = queuedReferences[i++];
		let propertyIndex = queuedReferences[i++];
		let nextTransition = transition[key];
		if (!nextTransition) {
			transition[key] = nextTransition = {
				key,
				parent: transition,
				enumerationOffset: propertyIndex - keyIndex,
				ascii0: null,
				ascii8: null,
				num8: null,
				string16: null,
				object16: null,
				num32: null,
				float64: null
			};
		}
		let newPosition;
		if (value) {
			/*if (typeof value === 'string') { // TODO: we could re-enable long strings
				if (position + value.length * 3 > safeEnd) {
					target = makeRoom(position + value.length * 3);
					position -= start;
					targetView = target.dataView;
					start = 0;
				}
				newPosition = position + target.utf8Write(value, position, 0xffffffff);
			} else { */
			let size;
			refOffset = refPosition - refsStartPosition;
			if (refOffset < 0xff00) {
				transition = nextTransition.object16;
				if (transition)
					size = 2;
				else if ((transition = nextTransition.object32))
					size = 4;
				else {
					transition = createTypeTransition(nextTransition, OBJECT_DATA, 2);
					size = 2;
				}
			} else {
				transition = nextTransition.object32 || createTypeTransition(nextTransition, OBJECT_DATA, 4);
				size = 4;
			}
			newPosition = pack(value, refPosition);
			//}
			if (typeof newPosition === 'object') {
				// re-allocated
				refPosition = newPosition.position;
				targetView = newPosition.targetView;
				target = newPosition.target;
				refsStartPosition -= encodingStart;
				position -= encodingStart;
				start -= encodingStart;
				encodingStart = 0;
			} else
				refPosition = newPosition;
			if (size === 2) {
				targetView.setUint16(position, refOffset, true);
				position += 2;
			} else {
				targetView.setUint32(position, refOffset, true);
				position += 4;
			}
		} else { // null or undefined
			transition = nextTransition.object16 || createTypeTransition(nextTransition, OBJECT_DATA, 2);
			targetView.setInt16(position, value === null ? -10 : -9, true);
			position += 2;
		}
		keyIndex++;
	}


	let recordId = transition[RECORD_SYMBOL];
	if (recordId == null) {
		recordId = packr.typedStructs.length;
		let structure = [];
		let nextTransition = transition;
		let key, type;
		while ((type = nextTransition.__type) !== undefined) {
			let size = nextTransition.__size;
			nextTransition = nextTransition.__parent;
			key = nextTransition.key;
			let property = [type, size, key];
			if (nextTransition.enumerationOffset)
				property.push(nextTransition.enumerationOffset);
			structure.push(property);
			nextTransition = nextTransition.parent;
		}
		structure.reverse();
		transition[RECORD_SYMBOL] = recordId;
		packr.typedStructs[recordId] = structure;
		pack(null, 0, true); // special call to notify that structures have been updated
	}


	switch (headerSize) {
		case 1:
			if (recordId >= 0x10) return 0;
			target[start] = recordId + 0x20;
			break;
		case 2:
			if (recordId >= 0x100) return 0;
			target[start] = 0x38;
			target[start + 1] = recordId;
			break;
		case 3:
			if (recordId >= 0x10000) return 0;
			target[start] = 0x39;
			targetView.setUint16(start + 1, recordId, true);
			break;
		case 4:
			if (recordId >= 0x1000000) return 0;
			targetView.setUint32(start, (recordId << 8) + 0x3a, true);
			break;
	}

	if (position < refsStartPosition) {
		if (refsStartPosition === refPosition)
			return position; // no refs
		// adjust positioning
		target.copyWithin(position, refsStartPosition, refPosition);
		refPosition += position - refsStartPosition;
		typedStructs.lastStringStart = position - start;
	} else if (position > refsStartPosition) {
		if (refsStartPosition === refPosition)
			return position; // no refs
		typedStructs.lastStringStart = position - start;
		return writeStruct(object, target, encodingStart, start, structures, makeRoom, pack, packr);
	}
	return refPosition;
}
function anyType(transition, position, targetView, value) {
	let nextTransition;
	if ((nextTransition = transition.ascii8 || transition.num8)) {
		targetView.setInt8(position, value, true);
		updatedPosition = position + 1;
		return nextTransition;
	}
	if ((nextTransition = transition.string16 || transition.object16)) {
		targetView.setInt16(position, value, true);
		updatedPosition = position + 2;
		return nextTransition;
	}
	if (nextTransition = transition.num32) {
		targetView.setUint32(position, 0xe0000100 + value, true);
		updatedPosition = position + 4;
		return nextTransition;
	}
	// transition.float64
	if (nextTransition = transition.num64) {
		targetView.setFloat64(position, NaN, true);
		targetView.setInt8(position, value);
		updatedPosition = position + 8;
		return nextTransition;
	}
	updatedPosition = position;
	// TODO: can we do an "any" type where we defer the decision?
	return;
}
function createTypeTransition(transition, type, size) {
	let typeName = TYPE_NAMES[type] + (size << 3);
	let newTransition = transition[typeName] || (transition[typeName] = Object.create(null));
	newTransition.__type = type;
	newTransition.__size = size;
	newTransition.__parent = transition;
	return newTransition;
}
function onLoadedStructures(sharedData) {
	if (!(sharedData instanceof Map))
		return sharedData;
	let typed = sharedData.get('typed') || [];
	if (Object.isFrozen(typed))
		typed = typed.map(structure => structure.slice(0));
	let named = sharedData.get('named');
	let transitions = Object.create(null);
	for (let i = 0, l = typed.length; i < l; i++) {
		let structure = typed[i];
		let transition = transitions;
		for (let [type, size, key] of structure) {
			let nextTransition = transition[key];
			if (!nextTransition) {
				transition[key] = nextTransition = {
					key,
					parent: transition,
					enumerationOffset: 0,
					ascii0: null,
					ascii8: null,
					num8: null,
					string16: null,
					object16: null,
					num32: null,
					float64: null,
					date64: null,
				};
			}
			transition = createTypeTransition(nextTransition, type, size);
		}
		transition[RECORD_SYMBOL] = i;
	}
	typed.transitions = transitions;
	this.typedStructs = typed;
	this.lastTypedStructuresLength = typed.length;
	return named;
}
var sourceSymbol = Symbol.for('source')
function readStruct(src, position, srcEnd, unpackr) {
	let recordId = src[position++] - 0x20;
	if (recordId >= 24) {
		switch(recordId) {
			case 24: recordId = src[position++]; break;
			// little endian:
			case 25: recordId = src[position++] + (src[position++] << 8); break;
			case 26: recordId = src[position++] + (src[position++] << 8) + (src[position++] << 16); break;
			case 27: recordId = src[position++] + (src[position++] << 8) + (src[position++] << 16) + (src[position++] << 24); break;
		}
	}
	let structure = unpackr.typedStructs && unpackr.typedStructs[recordId];
	if (!structure) {
		// copy src buffer because getStructures will override it
		src = Uint8Array.prototype.slice.call(src, position, srcEnd);
		srcEnd -= position;
		position = 0;
		if (!unpackr.getStructures)
			throw new Error(`Reference to shared structure ${recordId} without getStructures method`);
		unpackr._mergeStructures(unpackr.getStructures());
		if (!unpackr.typedStructs)
			throw new Error('Could not find any shared typed structures');
		unpackr.lastTypedStructuresLength = unpackr.typedStructs.length;
		structure = unpackr.typedStructs[recordId];
		if (!structure)
			throw new Error('Could not find typed structure ' + recordId);
	}
	var construct = structure.construct;
	var fullConstruct = structure.fullConstruct;
	if (!construct) {
		construct = structure.construct = function LazyObject() {
		}
		fullConstruct = structure.fullConstruct = function LoadedObject() {
		}
		fullConstruct.prototype = unpackr.structPrototype || {};
		var prototype = construct.prototype = unpackr.structPrototype ? Object.create(unpackr.structPrototype) : {};
		let properties = [];
		let currentOffset = 0;
		let lastRefProperty;
		for (let i = 0, l = structure.length; i < l; i++) {
			let definition = structure[i];
			let [ type, size, key, enumerationOffset ] = definition;
			if (key === '__proto__')
				key = '__proto_';
			let property = {
				key,
				offset: currentOffset,
			}
			if (enumerationOffset)
				properties.splice(i + enumerationOffset, 0, property);
			else
				properties.push(property);
			let getRef;
			switch(size) { // TODO: Move into a separate function
				case 0: getRef = () => 0; break;
				case 1:
					getRef = (source, position) => {
						let ref = source.bytes[position + property.offset];
						return ref >= 0xf6 ? toConstant(ref) : ref;
					};
					break;
				case 2:
					getRef = (source, position) => {
						let src = source.bytes;
						let dataView = src.dataView || (src.dataView = new DataView(src.buffer, src.byteOffset, src.byteLength));
						let ref = dataView.getUint16(position + property.offset, true);
						return ref >= 0xff00 ? toConstant(ref & 0xff) : ref;
					};
					break;
				case 4:
					getRef = (source, position) => {
						let src = source.bytes;
						let dataView = src.dataView || (src.dataView = new DataView(src.buffer, src.byteOffset, src.byteLength));
						let ref = dataView.getUint32(position + property.offset, true);
						return ref >= 0xffffff00 ? toConstant(ref & 0xff) : ref;
					};
					break;
			}
			property.getRef = getRef;
			currentOffset += size;
			let get;
			switch(type) {
				case ASCII:
					if (lastRefProperty && !lastRefProperty.next)
						lastRefProperty.next = property;
					lastRefProperty = property;
					property.multiGetCount = 0;
					get = function(source) {
						let src = source.bytes;
						let position = source.position;
						let refStart = currentOffset + position;
						let ref = getRef(source, position);
						if (typeof ref !== 'number') return ref;

						let end, next = property.next;
						while(next) {
							end = next.getRef(source, position);
							if (typeof end === 'number')
								break;
							else
								end = null;
							next = next.next;
						}
						if (end == null)
							end = source.bytesEnd - refStart;
						if (source.srcString) {
							return source.srcString.slice(ref, end);
						}
						/*if (property.multiGetCount > 0) {
							let asciiEnd;
							next = firstRefProperty;
							let dataView = src.dataView || (src.dataView = new DataView(src.buffer, src.byteOffset, src.byteLength));
							do {
								asciiEnd = dataView.getUint16(source.position + next.offset, true);
								if (asciiEnd < 0xff00)
									break;
								else
									asciiEnd = null;
							} while((next = next.next));
							if (asciiEnd == null)
								asciiEnd = source.bytesEnd - refStart
							source.srcString = src.toString('latin1', refStart, refStart + asciiEnd);
							return source.srcString.slice(ref, end);
						}
						if (source.prevStringGet) {
							source.prevStringGet.multiGetCount += 2;
						} else {
							source.prevStringGet = property;
							property.multiGetCount--;
						}*/
						return readString(src, ref + refStart, end - ref);
						//return src.toString('latin1', ref + refStart, end + refStart);
					};
					break;
				case UTF8: case OBJECT_DATA:
					if (lastRefProperty && !lastRefProperty.next)
						lastRefProperty.next = property;
					lastRefProperty = property;
					get = function(source) {
						let position = source.position;
						let refStart = currentOffset + position;
						let ref = getRef(source, position);
						if (typeof ref !== 'number') return ref;
						let src = source.bytes;
						let end, next = property.next;
						while(next) {
							end = next.getRef(source, position);
							if (typeof end === 'number')
								break;
							else
								end = null;
							next = next.next;
						}
						if (end == null)
							end = source.bytesEnd - refStart;
						if (type === UTF8) {
							return src.toString('utf8', ref + refStart, end + refStart);
						} else {
							currentSource = source;
							try {
								return unpackr.unpack(src, { start: ref + refStart, end: end + refStart });
							} finally {
								currentSource = null;
							}
						}
					};
					break;
				case NUMBER:
					switch(size) {
						case 4:
							get = function (source) {
								let src = source.bytes;
								let dataView = src.dataView || (src.dataView = new DataView(src.buffer, src.byteOffset, src.byteLength));
								let position = source.position + property.offset;
								let value = dataView.getInt32(position, true)
								if (value < 0x20000000) {
									if (value > -0x1f000000)
										return value;
									if (value > -0x20000000)
										return toConstant(value & 0xff);
								}
								let fValue = dataView.getFloat32(position, true);
								// this does rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
								let multiplier = mult10[((src[position + 3] & 0x7f) << 1) | (src[position + 2] >> 7)]
								return ((multiplier * fValue + (fValue > 0 ? 0.5 : -0.5)) >> 0) / multiplier;
							};
							break;
						case 8:
							get = function (source) {
								let src = source.bytes;
								let dataView = src.dataView || (src.dataView = new DataView(src.buffer, src.byteOffset, src.byteLength));
								let value = dataView.getFloat64(source.position + property.offset, true);
								if (isNaN(value)) {
									let byte = src[source.position + property.offset];
									if (byte >= 0xf6)
										return toConstant(byte);
								}
								return value;
							};
							break;
						case 1:
							get = function (source) {
								let src = source.bytes;
								let value = src[source.position + property.offset];
								return value < 0xf6 ? value : toConstant(value);
							};
							break;
					}
					break;
				case DATE:
					get = function (source) {
						let src = source.bytes;
						let dataView = src.dataView || (src.dataView = new DataView(src.buffer, src.byteOffset, src.byteLength));
						return new Date(dataView.getFloat64(source.position + property.offset, true));
					};
					break;

			}
			property.get = get;
		}
		// TODO: load the srcString for faster string decoding on toJSON
		if (evalSupported) {
			let objectLiteralProperties = [];
			let args = [];
			let i = 0;
			let hasInheritedProperties;
			for (let property of properties) { // assign in enumeration order
				if (unpackr.alwaysLazyProperty && unpackr.alwaysLazyProperty(property.key)) {
					// these properties are not eagerly evaluated and this can be used for creating properties
					// that are not serialized as JSON
					hasInheritedProperties = true;
					continue;
				}
				Object.defineProperty(prototype, property.key, { get: withSource(property.get), enumerable: true });
				let valueFunction = 'v' + i++;
				args.push(valueFunction);
				objectLiteralProperties.push('o[' + JSON.stringify(property.key) + ']=' + valueFunction + '(s)');
			}
			if (hasInheritedProperties) {
				objectLiteralProperties.push('__proto__:this');
			}
			let toObject = (new Function(...args, 'var c=this;return function(s){var o=new c();' + objectLiteralProperties.join(';') + ';return o;}')).apply(fullConstruct, properties.map(prop => prop.get));
			Object.defineProperty(prototype, 'toJSON', {
				value(omitUnderscoredProperties) {
					return toObject.call(this, this[sourceSymbol]);
				}
			});
		} else {
			Object.defineProperty(prototype, 'toJSON', {
				value(omitUnderscoredProperties) {
					// return an enumerable object with own properties to JSON stringify
					let resolved = {};
					for (let i = 0, l = properties.length; i < l; i++) {
						// TODO: check alwaysLazyProperty
						let key = properties[i].key;

						resolved[key] = this[key];
					}
					return resolved;
				},
				// not enumerable or anything
			});
		}
	}
	var instance = new construct();
	instance[sourceSymbol] = {
		bytes: src,
		position,
		srcString: '',
		bytesEnd: srcEnd
	}
	return instance;
}
function toConstant(code) {
	switch(code) {
		case 0xf6: return null;
		case 0xf7: return undefined;
		case 0xf8: return false;
		case 0xf9: return true;
	}
	throw new Error('Unknown constant');
}
function withSource(get) {
	return function() {
		return get(this[sourceSymbol]);
	}
}

function saveState() {
	if (currentSource) {
		currentSource.bytes = Uint8Array.prototype.slice.call(currentSource.bytes, currentSource.position, currentSource.bytesEnd);
		currentSource.position = 0;
		currentSource.bytesEnd = currentSource.bytes.length;
	}
}
function prepareStructures(structures, packr) {
	if (packr.typedStructs) {
		let structMap = new Map();
		structMap.set('named', structures);
		structMap.set('typed', packr.typedStructs);
		structures = structMap;
	}
	let lastTypedStructuresLength = packr.lastTypedStructuresLength || 0;
	structures.isCompatible = existing => {
		let compatible = true;
		if (existing instanceof Map) {
			let named = existing.get('named') || [];
			if (named.length !== (packr.lastNamedStructuresLength || 0))
				compatible = false;
			let typed = existing.get('typed') || [];
			if (typed.length !== lastTypedStructuresLength)
				compatible = false;
		} else if (existing instanceof Array || Array.isArray(existing)) {
			if (existing.length !== (packr.lastNamedStructuresLength || 0))
				compatible = false;
		}
		if (!compatible)
			packr._mergeStructures(existing);
		return compatible;
	};
	packr.lastTypedStructuresLength = packr.typedStructs && packr.typedStructs.length;
	return structures;
}

setReadStruct(readStruct, onLoadedStructures, saveState);

