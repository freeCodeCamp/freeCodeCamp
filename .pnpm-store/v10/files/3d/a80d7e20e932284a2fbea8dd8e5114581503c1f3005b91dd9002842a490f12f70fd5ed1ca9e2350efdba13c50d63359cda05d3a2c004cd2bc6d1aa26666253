import { Unpackr, mult10, C1Type, typedArrays, addExtension as unpackAddExtension } from './unpack.js'
let textEncoder
try {
	textEncoder = new TextEncoder()
} catch (error) {}
let extensions, extensionClasses
const hasNodeBuffer = typeof Buffer !== 'undefined'
const ByteArrayAllocate = hasNodeBuffer ?
	function(length) { return Buffer.allocUnsafeSlow(length) } : Uint8Array
const ByteArray = hasNodeBuffer ? Buffer : Uint8Array
const MAX_BUFFER_SIZE = hasNodeBuffer ? 0x100000000 : 0x7fd00000
let target, keysTarget
let targetView
let position = 0
let safeEnd
let bundledStrings = null
let writeStructSlots
const MAX_BUNDLE_SIZE = 0x5500 // maximum characters such that the encoded bytes fits in 16 bits.
const hasNonLatin = /[\u0080-\uFFFF]/
export const RECORD_SYMBOL = Symbol('record-id')
export class Packr extends Unpackr {
	constructor(options) {
		super(options)
		this.offset = 0
		let typeBuffer
		let start
		let hasSharedUpdate
		let structures
		let referenceMap
		let encodeUtf8 = ByteArray.prototype.utf8Write ? function(string, position) {
			return target.utf8Write(string, position, target.byteLength - position)
		} : (textEncoder && textEncoder.encodeInto) ?
			function(string, position) {
				return textEncoder.encodeInto(string, target.subarray(position)).written
			} : false

		let packr = this
		if (!options)
			options = {}
		let isSequential = options && options.sequential
		let hasSharedStructures = options.structures || options.saveStructures
		let maxSharedStructures = options.maxSharedStructures
		if (maxSharedStructures == null)
			maxSharedStructures = hasSharedStructures ? 32 : 0
		if (maxSharedStructures > 8160)
			throw new Error('Maximum maxSharedStructure is 8160')
		if (options.structuredClone && options.moreTypes == undefined) {
			this.moreTypes = true
		}
		let maxOwnStructures = options.maxOwnStructures
		if (maxOwnStructures == null)
			maxOwnStructures = hasSharedStructures ? 32 : 64
		if (!this.structures && options.useRecords != false)
			this.structures = []
		// two byte record ids for shared structures
		let useTwoByteRecords = maxSharedStructures > 32 || (maxOwnStructures + maxSharedStructures > 64)
		let sharedLimitId = maxSharedStructures + 0x40
		let maxStructureId = maxSharedStructures + maxOwnStructures + 0x40
		if (maxStructureId > 8256) {
			throw new Error('Maximum maxSharedStructure + maxOwnStructure is 8192')
		}
		let recordIdsToRemove = []
		let transitionsCount = 0
		let serializationsSinceTransitionRebuild = 0

		this.pack = this.encode = function(value, encodeOptions) {
			if (!target) {
				target = new ByteArrayAllocate(8192)
				targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, 8192))
				position = 0
			}
			safeEnd = target.length - 10
			if (safeEnd - position < 0x800) {
				// don't start too close to the end,
				target = new ByteArrayAllocate(target.length)
				targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length))
				safeEnd = target.length - 10
				position = 0
			} else
				position = (position + 7) & 0x7ffffff8 // Word align to make any future copying of this buffer faster
			start = position
			if (encodeOptions & RESERVE_START_SPACE) position += (encodeOptions & 0xff)
			referenceMap = packr.structuredClone ? new Map() : null
			if (packr.bundleStrings && typeof value !== 'string') {
				bundledStrings = []
				bundledStrings.size = Infinity // force a new bundle start on first string
			} else
				bundledStrings = null
			structures = packr.structures
			if (structures) {
				if (structures.uninitialized)
					structures = packr._mergeStructures(packr.getStructures())
				let sharedLength = structures.sharedLength || 0
				if (sharedLength > maxSharedStructures) {
					//if (maxSharedStructures <= 32 && structures.sharedLength > 32) // TODO: could support this, but would need to update the limit ids
					throw new Error('Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to ' + structures.sharedLength)
				}
				if (!structures.transitions) {
					// rebuild our structure transitions
					structures.transitions = Object.create(null)
					for (let i = 0; i < sharedLength; i++) {
						let keys = structures[i]
						if (!keys)
							continue
						let nextTransition, transition = structures.transitions
						for (let j = 0, l = keys.length; j < l; j++) {
							let key = keys[j]
							nextTransition = transition[key]
							if (!nextTransition) {
								nextTransition = transition[key] = Object.create(null)
							}
							transition = nextTransition
						}
						transition[RECORD_SYMBOL] = i + 0x40
					}
					this.lastNamedStructuresLength = sharedLength
				}
				if (!isSequential) {
					structures.nextId = sharedLength + 0x40
				}
			}
			if (hasSharedUpdate)
				hasSharedUpdate = false
			let encodingError;
			try {
				if (packr.randomAccessStructure && value && typeof value === 'object') {
					if (value.constructor === Object) writeStruct(value); // simple object
					else if (value.constructor !== Map && !Array.isArray(value) && !extensionClasses.some(extClass => value instanceof extClass)) {
						// allow user classes, if they don't need special handling (but do use toJSON if available)
						writeStruct(value.toJSON ? value.toJSON() : value);
					} else pack(value)
				} else
					pack(value)
				let lastBundle = bundledStrings;
				if (bundledStrings)
					writeBundles(start, pack, 0)
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
									targetView.getUint32(lastBundle.position + start) + incrementPosition)
								incrementPosition = -1; // reset
							}
							lastBundle = lastBundle.previous;
							i++;
						}
					}
					if (incrementPosition >= 0 && lastBundle) {
						// update the bundle reference now
						targetView.setUint32(lastBundle.position + start,
							targetView.getUint32(lastBundle.position + start) + incrementPosition)
					}
					position += idsToInsert.length * 6;
					if (position > safeEnd)
						makeRoom(position)
					packr.offset = position
					let serialized = insertIds(target.subarray(start, position), idsToInsert)
					referenceMap = null
					return serialized
				}
				packr.offset = position // update the offset so next serialization doesn't write over our buffer, but can continue writing to same buffer sequentially
				if (encodeOptions & REUSE_BUFFER_MODE) {
					target.start = start
					target.end = position
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
						let sharedLength = structures.sharedLength || 0
						// we can't rely on start/end with REUSE_BUFFER_MODE since they will (probably) change when we save
						let returnBuffer = target.subarray(start, position)
						let newSharedData = prepareStructures(structures, packr);
						if (!encodingError) { // TODO: If there is an encoding error, should make the structures as uninitialized so they get rebuilt next time
							if (packr.saveStructures(newSharedData, newSharedData.isCompatible) === false) {
								// get updated structures and try again if the update failed
								return packr.pack(value, encodeOptions)
							}
							packr.lastNamedStructuresLength = sharedLength
							// don't keep large buffers around
							if (target.length > 0x40000000) target = null
							return returnBuffer
						}
					}
				}
				// don't keep large buffers around, they take too much memory and cause problems (limit at 1GB)
				if (target.length > 0x40000000) target = null
				if (encodeOptions & RESET_BUFFER_MODE)
					position = start
			}
		}
		const resetStructures = () => {
			if (serializationsSinceTransitionRebuild < 10)
				serializationsSinceTransitionRebuild++
			let sharedLength = structures.sharedLength || 0
			if (structures.length > sharedLength && !isSequential)
				structures.length = sharedLength
			if (transitionsCount > 10000) {
				// force a rebuild occasionally after a lot of transitions so it can get cleaned up
				structures.transitions = null
				serializationsSinceTransitionRebuild = 0
				transitionsCount = 0
				if (recordIdsToRemove.length > 0)
					recordIdsToRemove = []
			} else if (recordIdsToRemove.length > 0 && !isSequential) {
				for (let i = 0, l = recordIdsToRemove.length; i < l; i++) {
					recordIdsToRemove[i][RECORD_SYMBOL] = 0
				}
				recordIdsToRemove = []
			}
		}
		const packArray = (value) => {
			var length = value.length
			if (length < 0x10) {
				target[position++] = 0x90 | length
			} else if (length < 0x10000) {
				target[position++] = 0xdc
				target[position++] = length >> 8
				target[position++] = length & 0xff
			} else {
				target[position++] = 0xdd
				targetView.setUint32(position, length)
				position += 4
			}
			for (let i = 0; i < length; i++) {
				pack(value[i])
			}
		}
		const pack = (value) => {
			if (position > safeEnd)
				target = makeRoom(position)

			var type = typeof value
			var length
			if (type === 'string') {
				let strLength = value.length
				if (bundledStrings && strLength >= 4 && strLength < 0x1000) {
					if ((bundledStrings.size += strLength) > MAX_BUNDLE_SIZE) {
						let extStart
						let maxBytes = (bundledStrings[0] ? bundledStrings[0].length * 3 + bundledStrings[1].length : 0) + 10
						if (position + maxBytes > safeEnd)
							target = makeRoom(position + maxBytes)
						let lastBundle
						if (bundledStrings.position) { // here we use the 0x62 extension to write the last bundle and reserve space for the reference pointer to the next/current bundle
							lastBundle = bundledStrings
							target[position] = 0xc8 // ext 16
							position += 3 // reserve for the writing bundle size
							target[position++] = 0x62 // 'b'
							extStart = position - start
							position += 4 // reserve for writing bundle reference
							writeBundles(start, pack, 0) // write the last bundles
							targetView.setUint16(extStart + start - 3, position - start - extStart)
						} else { // here we use the 0x62 extension just to reserve the space for the reference pointer to the bundle (will be updated once the bundle is written)
							target[position++] = 0xd6 // fixext 4
							target[position++] = 0x62 // 'b'
							extStart = position - start
							position += 4 // reserve for writing bundle reference
						}
						bundledStrings = ['', ''] // create new ones
						bundledStrings.previous = lastBundle;
						bundledStrings.size = 0
						bundledStrings.position = extStart
					}
					let twoByte = hasNonLatin.test(value)
					bundledStrings[twoByte ? 0 : 1] += value
					target[position++] = 0xc1
					pack(twoByte ? -strLength : strLength);
					return
				}
				let headerSize
				// first we estimate the header size, so we can write to the correct location
				if (strLength < 0x20) {
					headerSize = 1
				} else if (strLength < 0x100) {
					headerSize = 2
				} else if (strLength < 0x10000) {
					headerSize = 3
				} else {
					headerSize = 5
				}
				let maxBytes = strLength * 3
				if (position + maxBytes > safeEnd)
					target = makeRoom(position + maxBytes)

				if (strLength < 0x40 || !encodeUtf8) {
					let i, c1, c2, strPosition = position + headerSize
					for (i = 0; i < strLength; i++) {
						c1 = value.charCodeAt(i)
						if (c1 < 0x80) {
							target[strPosition++] = c1
						} else if (c1 < 0x800) {
							target[strPosition++] = c1 >> 6 | 0xc0
							target[strPosition++] = c1 & 0x3f | 0x80
						} else if (
							(c1 & 0xfc00) === 0xd800 &&
							((c2 = value.charCodeAt(i + 1)) & 0xfc00) === 0xdc00
						) {
							c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff)
							i++
							target[strPosition++] = c1 >> 18 | 0xf0
							target[strPosition++] = c1 >> 12 & 0x3f | 0x80
							target[strPosition++] = c1 >> 6 & 0x3f | 0x80
							target[strPosition++] = c1 & 0x3f | 0x80
						} else {
							target[strPosition++] = c1 >> 12 | 0xe0
							target[strPosition++] = c1 >> 6 & 0x3f | 0x80
							target[strPosition++] = c1 & 0x3f | 0x80
						}
					}
					length = strPosition - position - headerSize
				} else {
					length = encodeUtf8(value, position + headerSize)
				}

				if (length < 0x20) {
					target[position++] = 0xa0 | length
				} else if (length < 0x100) {
					if (headerSize < 2) {
						target.copyWithin(position + 2, position + 1, position + 1 + length)
					}
					target[position++] = 0xd9
					target[position++] = length
				} else if (length < 0x10000) {
					if (headerSize < 3) {
						target.copyWithin(position + 3, position + 2, position + 2 + length)
					}
					target[position++] = 0xda
					target[position++] = length >> 8
					target[position++] = length & 0xff
				} else {
					if (headerSize < 5) {
						target.copyWithin(position + 5, position + 3, position + 3 + length)
					}
					target[position++] = 0xdb
					targetView.setUint32(position, length)
					position += 4
				}
				position += length
			} else if (type === 'number') {
				if (value >>> 0 === value) {// positive integer, 32-bit or less
					// positive uint
					if (value < 0x20 || (value < 0x80 && this.useRecords === false) || (value < 0x40 && !this.randomAccessStructure)) {
						target[position++] = value
					} else if (value < 0x100) {
						target[position++] = 0xcc
						target[position++] = value
					} else if (value < 0x10000) {
						target[position++] = 0xcd
						target[position++] = value >> 8
						target[position++] = value & 0xff
					} else {
						target[position++] = 0xce
						targetView.setUint32(position, value)
						position += 4
					}
				} else if (value >> 0 === value) { // negative integer
					if (value >= -0x20) {
						target[position++] = 0x100 + value
					} else if (value >= -0x80) {
						target[position++] = 0xd0
						target[position++] = value + 0x100
					} else if (value >= -0x8000) {
						target[position++] = 0xd1
						targetView.setInt16(position, value)
						position += 2
					} else {
						target[position++] = 0xd2
						targetView.setInt32(position, value)
						position += 4
					}
				} else {
					let useFloat32
					if ((useFloat32 = this.useFloat32) > 0 && value < 0x100000000 && value >= -0x80000000) {
						target[position++] = 0xca
						targetView.setFloat32(position, value)
						let xShifted
						if (useFloat32 < 4 ||
								// this checks for rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
								((xShifted = value * mult10[((target[position] & 0x7f) << 1) | (target[position + 1] >> 7)]) >> 0) === xShifted) {
							position += 4
							return
						} else
							position-- // move back into position for writing a double
					}
					target[position++] = 0xcb
					targetView.setFloat64(position, value)
					position += 8
				}
			} else if (type === 'object' || type === 'function') {
				if (!value)
					target[position++] = 0xc0
				else {
					if (referenceMap) {
						let referee = referenceMap.get(value)
						if (referee) {
							if (!referee.id) {
								let idsToInsert = referenceMap.idsToInsert || (referenceMap.idsToInsert = [])
								referee.id = idsToInsert.push(referee)
							}
							target[position++] = 0xd6 // fixext 4
							target[position++] = 0x70 // "p" for pointer
							targetView.setUint32(position, referee.id)
							position += 4
							return
						} else
							referenceMap.set(value, { offset: position - start })
					}
					let constructor = value.constructor
					if (constructor === Object) {
						writeObject(value)
					} else if (constructor === Array) {
						packArray(value)
					} else if (constructor === Map) {
						if (this.mapAsEmptyObject) target[position++] = 0x80
						else {
							length = value.size
							if (length < 0x10) {
								target[position++] = 0x80 | length
							} else if (length < 0x10000) {
								target[position++] = 0xde
								target[position++] = length >> 8
								target[position++] = length & 0xff
							} else {
								target[position++] = 0xdf
								targetView.setUint32(position, length)
								position += 4
							}
							for (let [key, entryValue] of value) {
								pack(key)
								pack(entryValue)
							}
						}
					} else {
						for (let i = 0, l = extensions.length; i < l; i++) {
							let extensionClass = extensionClasses[i]
							if (value instanceof extensionClass) {
								let extension = extensions[i]
								if (extension.write) {
									if (extension.type) {
										target[position++] = 0xd4 // one byte "tag" extension
										target[position++] = extension.type
										target[position++] = 0
									}
									let writeResult = extension.write.call(this, value)
									if (writeResult === value) { // avoid infinite recursion
										if (Array.isArray(value)) {
											packArray(value)
										} else {
											writeObject(value)
										}
									} else {
										pack(writeResult)
									}
									return
								}
								let currentTarget = target
								let currentTargetView = targetView
								let currentPosition = position
								target = null
								let result
								try {
									result = extension.pack.call(this, value, (size) => {
										// restore target and use it
										target = currentTarget
										currentTarget = null
										position += size
										if (position > safeEnd)
											makeRoom(position)
										return {
											target, targetView, position: position - size
										}
									}, pack)
								} finally {
									// restore current target information (unless already restored)
									if (currentTarget) {
										target = currentTarget
										targetView = currentTargetView
										position = currentPosition
										safeEnd = target.length - 10
									}
								}
								if (result) {
									if (result.length + position > safeEnd)
										makeRoom(result.length + position)
									position = writeExtensionData(result, target, position, extension.type)
								}
								return
							}
						}
						// check isArray after extensions, because extensions can extend Array
						if (Array.isArray(value)) {
							packArray(value)
						} else {
							// use this as an alternate mechanism for expressing how to serialize
							if (value.toJSON) {
								const json = value.toJSON()
								// if for some reason value.toJSON returns itself it'll loop forever
								if (json !== value)
									return pack(json)
							}

							// if there is a writeFunction, use it, otherwise just encode as undefined
							if (type === 'function')
								return pack(this.writeFunction && this.writeFunction(value));

							// no extension found, write as plain object
							writeObject(value)
						}
					}
				}
			} else if (type === 'boolean') {
				target[position++] = value ? 0xc3 : 0xc2
			} else if (type === 'bigint') {
				if (value < 0x8000000000000000 && value >= -0x8000000000000000) {
					// use a signed int as long as it fits
					target[position++] = 0xd3
					targetView.setBigInt64(position, value)
				} else if (value < 0x10000000000000000 && value > 0) {
					// if we can fit an unsigned int, use that
					target[position++] = 0xcf
					targetView.setBigUint64(position, value)
				} else {
					// overflow
					if (this.largeBigIntToFloat) {
						target[position++] = 0xcb
						targetView.setFloat64(position, Number(value))
					} else if (this.largeBigIntToString) {
						return pack(value.toString());
					} else if (this.useBigIntExtension || this.moreTypes) {
						let empty = value < 0 ? BigInt(-1) : BigInt(0)

						let array
						if (value >> BigInt(0x10000) === empty) {
							let mask = BigInt(0x10000000000000000) - BigInt(1) // literal would overflow
							let chunks = []
							while (true) {
								chunks.push(value & mask)
								if ((value >> BigInt(63)) === empty) break
								value >>= BigInt(64)
							}

							array = new Uint8Array(new BigUint64Array(chunks).buffer)
							array.reverse()
						} else {
							let invert = value < 0
							let string = (invert ? ~value : value).toString(16)
							if (string.length % 2) {
								string = '0' + string
							} else if (parseInt(string.charAt(0), 16) >= 8) {
								string = '00' + string
							}

							if (hasNodeBuffer) {
								array = Buffer.from(string, 'hex')
							} else {
								array = new Uint8Array(string.length / 2)
								for (let i = 0; i < array.length; i++) {
									array[i] = parseInt(string.slice(i * 2, i * 2 + 2), 16)
								}
							}

							if (invert) {
								for (let i = 0; i < array.length; i++) array[i] = ~array[i]
							}
						}

						if (array.length + position > safeEnd)
							makeRoom(array.length + position)
						position = writeExtensionData(array, target, position, 0x42)
						return
					} else {
						throw new RangeError(value + ' was too large to fit in MessagePack 64-bit integer format, use' +
							' useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set' +
							' largeBigIntToString to convert to string')
					}
				}
				position += 8
			} else if (type === 'undefined') {
				if (this.encodeUndefinedAsNil)
					target[position++] = 0xc0
				else {
					target[position++] = 0xd4 // a number of implementations use fixext1 with type 0, data 0 to denote undefined, so we follow suite
					target[position++] = 0
					target[position++] = 0
				}
			} else {
				throw new Error('Unknown type: ' + type)
			}
		}

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
				keys = Object.keys(object)
			}
			let length = keys.length
			if (length < 0x10) {
				target[position++] = 0x80 | length
			} else if (length < 0x10000) {
				target[position++] = 0xde
				target[position++] = length >> 8
				target[position++] = length & 0xff
			} else {
				target[position++] = 0xdf
				targetView.setUint32(position, length)
				position += 4
			}
			let key
			if (this.coercibleKeyAsNumber) {
				for (let i = 0; i < length; i++) {
					key = keys[i]
					let num = Number(key)
					pack(isNaN(num) ? key : num)
					pack(object[key])
				}

			} else {
				for (let i = 0; i < length; i++) {
					pack(key = keys[i])
					pack(object[key])
				}
			}
		} :
		(object) => {
			target[position++] = 0xde // always using map 16, so we can preallocate and set the length afterwards
			let objectOffset = position - start
			position += 2
			let size = 0
			for (let key in object) {
				if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
					pack(key)
					pack(object[key])
					size++
				}
			}
			if (size > 0xffff) {
				throw new Error('Object is too large to serialize with fast 16-bit map size,' +
				' use the "variableMapSize" option to serialize this object');
			}
			target[objectOffset++ + start] = size >> 8
			target[objectOffset + start] = size & 0xff
		}

		const writeRecord = this.useRecords === false ? writePlainObject :
		(options.progressiveRecords && !useTwoByteRecords) ?  // this is about 2% faster for highly stable structures, since it only requires one for-in loop (but much more expensive when new structure needs to be written)
		(object) => {
			let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null))
			let objectOffset = position++ - start
			let wroteKeys
			for (let key in object) {
				if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
					nextTransition = transition[key]
					if (nextTransition)
						transition = nextTransition
					else {
						// record doesn't exist, create full new record and insert it
						let keys = Object.keys(object)
						let lastTransition = transition
						transition = structures.transitions
						let newTransitions = 0
						for (let i = 0, l = keys.length; i < l; i++) {
							let key = keys[i]
							nextTransition = transition[key]
							if (!nextTransition) {
								nextTransition = transition[key] = Object.create(null)
								newTransitions++
							}
							transition = nextTransition
						}
						if (objectOffset + start + 1 == position) {
							// first key, so we don't need to insert, we can just write record directly
							position--
							newRecord(transition, keys, newTransitions)
						} else // otherwise we need to insert the record, moving existing data after the record
							insertNewRecord(transition, keys, objectOffset, newTransitions)
						wroteKeys = true
						transition = lastTransition[key]
					}
					pack(object[key])
				}
			}
			if (!wroteKeys) {
				let recordId = transition[RECORD_SYMBOL]
				if (recordId)
					target[objectOffset + start] = recordId
				else
					insertNewRecord(transition, Object.keys(object), objectOffset, 0)
			}
		} :
		(object) => {
			let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null))
			let newTransitions = 0
			for (let key in object) if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
				nextTransition = transition[key]
				if (!nextTransition) {
					nextTransition = transition[key] = Object.create(null)
					newTransitions++
				}
				transition = nextTransition
			}
			let recordId = transition[RECORD_SYMBOL]
			if (recordId) {
				if (recordId >= 0x60 && useTwoByteRecords) {
					target[position++] = ((recordId -= 0x60) & 0x1f) + 0x60
					target[position++] = recordId >> 5
				} else
					target[position++] = recordId
			} else {
				newRecord(transition, transition.__keys__ || Object.keys(object), newTransitions)
			}
			// now write the values
			for (let key in object)
				if (typeof object.hasOwnProperty !== 'function' || object.hasOwnProperty(key)) {
					pack(object[key])
				}
		}

		// create reference to useRecords if useRecords is a function
		const checkUseRecords = typeof this.useRecords == 'function' && this.useRecords;

		const writeObject = checkUseRecords ? (object) => {
			checkUseRecords(object) ? writeRecord(object) : writePlainObject(object)
		} : writeRecord

		const makeRoom = (end) => {
			let newSize
			if (end > 0x1000000) {
				// special handling for really large buffers
				if ((end - start) > MAX_BUFFER_SIZE)
					throw new Error('Packed buffer would be larger than maximum buffer size')
				newSize = Math.min(MAX_BUFFER_SIZE,
					Math.round(Math.max((end - start) * (end > 0x4000000 ? 1.25 : 2), 0x400000) / 0x1000) * 0x1000)
			} else // faster handling for smaller buffers
				newSize = ((Math.max((end - start) << 2, target.length - 1) >> 12) + 1) << 12
			let newBuffer = new ByteArrayAllocate(newSize)
			targetView = newBuffer.dataView || (newBuffer.dataView = new DataView(newBuffer.buffer, 0, newSize))
			end = Math.min(end, target.length)
			if (target.copy)
				target.copy(newBuffer, 0, start, end)
			else
				newBuffer.set(target.slice(start, end))
			position -= start
			start = 0
			safeEnd = newBuffer.length - 10
			return target = newBuffer
		}
		const newRecord = (transition, keys, newTransitions) => {
			let recordId = structures.nextId
			if (!recordId)
				recordId = 0x40
			if (recordId < sharedLimitId && this.shouldShareStructure && !this.shouldShareStructure(keys)) {
				recordId = structures.nextOwnId
				if (!(recordId < maxStructureId))
					recordId = sharedLimitId
				structures.nextOwnId = recordId + 1
			} else {
				if (recordId >= maxStructureId)// cycle back around
					recordId = sharedLimitId
				structures.nextId = recordId + 1
			}
			let highByte = keys.highByte = recordId >= 0x60 && useTwoByteRecords ? (recordId - 0x60) >> 5 : -1
			transition[RECORD_SYMBOL] = recordId
			transition.__keys__ = keys
			structures[recordId - 0x40] = keys

			if (recordId < sharedLimitId) {
				keys.isShared = true
				structures.sharedLength = recordId - 0x3f
				hasSharedUpdate = true
				if (highByte >= 0) {
					target[position++] = (recordId & 0x1f) + 0x60
					target[position++] = highByte
				} else {
					target[position++] = recordId
				}
			} else {
				if (highByte >= 0) {
					target[position++] = 0xd5 // fixext 2
					target[position++] = 0x72 // "r" record defintion extension type
					target[position++] = (recordId & 0x1f) + 0x60
					target[position++] = highByte
				} else {
					target[position++] = 0xd4 // fixext 1
					target[position++] = 0x72 // "r" record defintion extension type
					target[position++] = recordId
				}

				if (newTransitions)
					transitionsCount += serializationsSinceTransitionRebuild * newTransitions
				// record the removal of the id, we can maintain our shared structure
				if (recordIdsToRemove.length >= maxOwnStructures)
					recordIdsToRemove.shift()[RECORD_SYMBOL] = 0 // we are cycling back through, and have to remove old ones
				recordIdsToRemove.push(transition)
				pack(keys)
			}
		}
		const insertNewRecord = (transition, keys, insertionOffset, newTransitions) => {
			let mainTarget = target
			let mainPosition = position
			let mainSafeEnd = safeEnd
			let mainStart = start
			target = keysTarget
			position = 0
			start = 0
			if (!target)
				keysTarget = target = new ByteArrayAllocate(8192)
			safeEnd = target.length - 10
			newRecord(transition, keys, newTransitions)
			keysTarget = target
			let keysPosition = position
			target = mainTarget
			position = mainPosition
			safeEnd = mainSafeEnd
			start = mainStart
			if (keysPosition > 1) {
				let newEnd = position + keysPosition - 1
				if (newEnd > safeEnd)
					makeRoom(newEnd)
				let insertionPosition = insertionOffset + start
				target.copyWithin(insertionPosition + keysPosition, insertionPosition + 1, position)
				target.set(keysTarget.slice(0, keysPosition), insertionPosition)
				position = newEnd
			} else {
				target[insertionOffset + start] = keysTarget[0]
			}
		}
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
		}
	}
	useBuffer(buffer) {
		// this means we are finished using our own buffer and we can write over it safely
		target = buffer
		target.dataView || (target.dataView = new DataView(target.buffer, target.byteOffset, target.byteLength))
		targetView = target.dataView;
		position = 0
	}
	set position (value) {
		position = value;
	}
	get position() {
		return position;
	}
	clearSharedData() {
		if (this.structures)
			this.structures = []
		if (this.typedStructs)
			this.typedStructs = []
	}
}

extensionClasses = [ Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor /*TypedArray*/, DataView, C1Type ]
extensions = [{
	pack(date, allocateForWrite, pack) {
		let seconds = date.getTime() / 1000
		if ((this.useTimestamp32 || date.getMilliseconds() === 0) && seconds >= 0 && seconds < 0x100000000) {
			// Timestamp 32
			let { target, targetView, position} = allocateForWrite(6)
			target[position++] = 0xd6
			target[position++] = 0xff
			targetView.setUint32(position, seconds)
		} else if (seconds > 0 && seconds < 0x100000000) {
			// Timestamp 64
			let { target, targetView, position} = allocateForWrite(10)
			target[position++] = 0xd7
			target[position++] = 0xff
			targetView.setUint32(position, date.getMilliseconds() * 4000000 + ((seconds / 1000 / 0x100000000) >> 0))
			targetView.setUint32(position + 4, seconds)
		} else if (isNaN(seconds)) {
			if (this.onInvalidDate) {
				allocateForWrite(0)
				return pack(this.onInvalidDate())
			}
			// Intentionally invalid timestamp
			let { target, targetView, position} = allocateForWrite(3)
			target[position++] = 0xd4
			target[position++] = 0xff
			target[position++] = 0xff
		} else {
			// Timestamp 96
			let { target, targetView, position} = allocateForWrite(15)
			target[position++] = 0xc7
			target[position++] = 12
			target[position++] = 0xff
			targetView.setUint32(position, date.getMilliseconds() * 1000000)
			targetView.setBigInt64(position + 4, BigInt(Math.floor(seconds)))
		}
	}
}, {
	pack(set, allocateForWrite, pack) {
		if (this.setAsEmptyObject) {
			allocateForWrite(0);
			return pack({})
		}
		let array = Array.from(set)
		let { target, position} = allocateForWrite(this.moreTypes ? 3 : 0)
		if (this.moreTypes) {
			target[position++] = 0xd4
			target[position++] = 0x73 // 's' for Set
			target[position++] = 0
		}
		pack(array)
	}
}, {
	pack(error, allocateForWrite, pack) {
		let { target, position} = allocateForWrite(this.moreTypes ? 3 : 0)
		if (this.moreTypes) {
			target[position++] = 0xd4
			target[position++] = 0x65 // 'e' for error
			target[position++] = 0
		}
		pack([ error.name, error.message, error.cause ])
	}
}, {
	pack(regex, allocateForWrite, pack) {
		let { target, position} = allocateForWrite(this.moreTypes ? 3 : 0)
		if (this.moreTypes) {
			target[position++] = 0xd4
			target[position++] = 0x78 // 'x' for regeXp
			target[position++] = 0
		}
		pack([ regex.source, regex.flags ])
	}
}, {
	pack(arrayBuffer, allocateForWrite) {
		if (this.moreTypes)
			writeExtBuffer(arrayBuffer, 0x10, allocateForWrite)
		else
			writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite)
	}
}, {
	pack(typedArray, allocateForWrite) {
		let constructor = typedArray.constructor
		if (constructor !== ByteArray && this.moreTypes)
			writeExtBuffer(typedArray, typedArrays.indexOf(constructor.name), allocateForWrite)
		else
			writeBuffer(typedArray, allocateForWrite)
	}
}, {
	pack(arrayBuffer, allocateForWrite) {
		if (this.moreTypes)
			writeExtBuffer(arrayBuffer, 0x11, allocateForWrite)
		else
			writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite)
	}
}, {
	pack(c1, allocateForWrite) { // specific 0xC1 object
		let { target, position} = allocateForWrite(1)
		target[position] = 0xc1
	}
}]

function writeExtBuffer(typedArray, type, allocateForWrite, encode) {
	let length = typedArray.byteLength
	if (length + 1 < 0x100) {
		var { target, position } = allocateForWrite(4 + length)
		target[position++] = 0xc7
		target[position++] = length + 1
	} else if (length + 1 < 0x10000) {
		var { target, position } = allocateForWrite(5 + length)
		target[position++] = 0xc8
		target[position++] = (length + 1) >> 8
		target[position++] = (length + 1) & 0xff
	} else {
		var { target, position, targetView } = allocateForWrite(7 + length)
		target[position++] = 0xc9
		targetView.setUint32(position, length + 1) // plus one for the type byte
		position += 4
	}
	target[position++] = 0x74 // "t" for typed array
	target[position++] = type
	if (!typedArray.buffer) typedArray = new Uint8Array(typedArray)
	target.set(new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength), position)
}
function writeBuffer(buffer, allocateForWrite) {
	let length = buffer.byteLength
	var target, position
	if (length < 0x100) {
		var { target, position } = allocateForWrite(length + 2)
		target[position++] = 0xc4
		target[position++] = length
	} else if (length < 0x10000) {
		var { target, position } = allocateForWrite(length + 3)
		target[position++] = 0xc5
		target[position++] = length >> 8
		target[position++] = length & 0xff
	} else {
		var { target, position, targetView } = allocateForWrite(length + 5)
		target[position++] = 0xc6
		targetView.setUint32(position, length)
		position += 4
	}
	target.set(buffer, position)
}

function writeExtensionData(result, target, position, type) {
	let length = result.length
	switch (length) {
		case 1:
			target[position++] = 0xd4
			break
		case 2:
			target[position++] = 0xd5
			break
		case 4:
			target[position++] = 0xd6
			break
		case 8:
			target[position++] = 0xd7
			break
		case 16:
			target[position++] = 0xd8
			break
		default:
			if (length < 0x100) {
				target[position++] = 0xc7
				target[position++] = length
			} else if (length < 0x10000) {
				target[position++] = 0xc8
				target[position++] = length >> 8
				target[position++] = length & 0xff
			} else {
				target[position++] = 0xc9
				target[position++] = length >> 24
				target[position++] = (length >> 16) & 0xff
				target[position++] = (length >> 8) & 0xff
				target[position++] = length & 0xff
			}
	}
	target[position++] = type
	target.set(result, position)
	position += length
	return position
}

function insertIds(serialized, idsToInsert) {
	// insert the ids that need to be referenced for structured clones
	let nextId
	let distanceToMove = idsToInsert.length * 6
	let lastEnd = serialized.length - distanceToMove
	while (nextId = idsToInsert.pop()) {
		let offset = nextId.offset
		let id = nextId.id
		serialized.copyWithin(offset + distanceToMove, offset, lastEnd)
		distanceToMove -= 6
		let position = offset + distanceToMove
		serialized[position++] = 0xd6
		serialized[position++] = 0x69 // 'i'
		serialized[position++] = id >> 24
		serialized[position++] = (id >> 16) & 0xff
		serialized[position++] = (id >> 8) & 0xff
		serialized[position++] = id & 0xff
		lastEnd = offset
	}
	return serialized
}

function writeBundles(start, pack, incrementPosition) {
	if (bundledStrings.length > 0) {
		targetView.setUint32(bundledStrings.position + start, position + incrementPosition - bundledStrings.position - start)
		bundledStrings.stringsPosition = position - start;
		let writeStrings = bundledStrings
		bundledStrings = null
		pack(writeStrings[0])
		pack(writeStrings[1])
	}
}

export function addExtension(extension) {
	if (extension.Class) {
		if (!extension.pack && !extension.write)
			throw new Error('Extension has no pack or write function')
		if (extension.pack && !extension.type)
			throw new Error('Extension has no type (numeric code to identify the extension)')
		extensionClasses.unshift(extension.Class)
		extensions.unshift(extension)
	}
	unpackAddExtension(extension)
}
function prepareStructures(structures, packr) {
	structures.isCompatible = (existingStructures) => {
		let compatible = !existingStructures || ((packr.lastNamedStructuresLength || 0) === existingStructures.length)
		if (!compatible) // we want to merge these existing structures immediately since we already have it and we are in the right transaction
			packr._mergeStructures(existingStructures);
		return compatible;
	}
	return structures
}
export function setWriteStructSlots(writeSlots, makeStructures) {
	writeStructSlots = writeSlots;
	prepareStructures = makeStructures;
}

let defaultPackr = new Packr({ useRecords: false })
export const pack = defaultPackr.pack
export const encode = defaultPackr.pack
export const Encoder = Packr
export { FLOAT32_OPTIONS } from './unpack.js'
import { FLOAT32_OPTIONS } from './unpack.js'
export const { NEVER, ALWAYS, DECIMAL_ROUND, DECIMAL_FIT } = FLOAT32_OPTIONS
export const REUSE_BUFFER_MODE = 512
export const RESET_BUFFER_MODE = 1024
export const RESERVE_START_SPACE = 2048
