/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const createHash = require("../util/createHash");
const ArraySerializer = require("./ArraySerializer");
const DateObjectSerializer = require("./DateObjectSerializer");
const ErrorObjectSerializer = require("./ErrorObjectSerializer");
const MapObjectSerializer = require("./MapObjectSerializer");
const NullPrototypeObjectSerializer = require("./NullPrototypeObjectSerializer");
const PlainObjectSerializer = require("./PlainObjectSerializer");
const RegExpObjectSerializer = require("./RegExpObjectSerializer");
const SerializerMiddleware = require("./SerializerMiddleware");
const SetObjectSerializer = require("./SetObjectSerializer");

/** @typedef {typeof import("../util/Hash")} Hash */
/** @typedef {import("./types").ComplexSerializableType} ComplexSerializableType */
/** @typedef {import("./types").PrimitiveSerializableType} PrimitiveSerializableType */

/** @typedef {new (...params: any[]) => any} Constructor */

/*

Format:

File -> Section*
Section -> ObjectSection | ReferenceSection | EscapeSection | OtherSection

ObjectSection -> ESCAPE (
	number:relativeOffset (number > 0) |
	string:request (string|null):export
) Section:value* ESCAPE ESCAPE_END_OBJECT
ReferenceSection -> ESCAPE number:relativeOffset (number < 0)
EscapeSection -> ESCAPE ESCAPE_ESCAPE_VALUE (escaped value ESCAPE)
EscapeSection -> ESCAPE ESCAPE_UNDEFINED (escaped value ESCAPE)
OtherSection -> any (except ESCAPE)

Why using null as escape value?
Multiple null values can merged by the BinaryMiddleware, which makes it very efficient
Technically any value can be used.

*/

/**
 * @typedef {object} ObjectSerializerContext
 * @property {function(any): void} write
 * @property {(function(any): void)=} writeLazy
 * @property {(function(any, object=): (() => Promise<any> | any))=} writeSeparate
 * @property {function(any): void} setCircularReference
 */

/**
 * @typedef {object} ObjectDeserializerContext
 * @property {function(): any} read
 * @property {function(any): void} setCircularReference
 */

/**
 * @typedef {object} ObjectSerializer
 * @property {function(any, ObjectSerializerContext): void} serialize
 * @property {function(ObjectDeserializerContext): any} deserialize
 */

/**
 * @template T
 * @param {Set<T>} set set
 * @param {number} size count of items to keep
 */
const setSetSize = (set, size) => {
	let i = 0;
	for (const item of set) {
		if (i++ >= size) {
			set.delete(item);
		}
	}
};

/**
 * @template K, X
 * @param {Map<K, X>} map map
 * @param {number} size count of items to keep
 */
const setMapSize = (map, size) => {
	let i = 0;
	for (const item of map.keys()) {
		if (i++ >= size) {
			map.delete(item);
		}
	}
};

/**
 * @param {Buffer} buffer buffer
 * @param {string | Hash} hashFunction hash function to use
 * @returns {string} hash
 */
const toHash = (buffer, hashFunction) => {
	const hash = createHash(hashFunction);
	hash.update(buffer);
	return /** @type {string} */ (hash.digest("latin1"));
};

const ESCAPE = null;
const ESCAPE_ESCAPE_VALUE = null;
const ESCAPE_END_OBJECT = true;
const ESCAPE_UNDEFINED = false;

const CURRENT_VERSION = 2;

/** @type {Map<Constructor, { request?: string, name?: string | number | null, serializer?: ObjectSerializer }>} */
const serializers = new Map();
/** @type {Map<string | number, ObjectSerializer>} */
const serializerInversed = new Map();

/** @type {Set<string>} */
const loadedRequests = new Set();

const NOT_SERIALIZABLE = {};

const jsTypes = new Map();
jsTypes.set(Object, new PlainObjectSerializer());
jsTypes.set(Array, new ArraySerializer());
jsTypes.set(null, new NullPrototypeObjectSerializer());
jsTypes.set(Map, new MapObjectSerializer());
jsTypes.set(Set, new SetObjectSerializer());
jsTypes.set(Date, new DateObjectSerializer());
jsTypes.set(RegExp, new RegExpObjectSerializer());
jsTypes.set(Error, new ErrorObjectSerializer(Error));
jsTypes.set(EvalError, new ErrorObjectSerializer(EvalError));
jsTypes.set(RangeError, new ErrorObjectSerializer(RangeError));
jsTypes.set(ReferenceError, new ErrorObjectSerializer(ReferenceError));
jsTypes.set(SyntaxError, new ErrorObjectSerializer(SyntaxError));
jsTypes.set(TypeError, new ErrorObjectSerializer(TypeError));

// If in a sandboxed environment (e. g. jest), this escapes the sandbox and registers
// real Object and Array types to. These types may occur in the wild too, e. g. when
// using Structured Clone in postMessage.
// eslint-disable-next-line n/exports-style
if (exports.constructor !== Object) {
	// eslint-disable-next-line jsdoc/check-types, n/exports-style
	const Obj = /** @type {typeof Object} */ (exports.constructor);
	const Fn = /** @type {typeof Function} */ (Obj.constructor);
	for (const [type, config] of Array.from(jsTypes)) {
		if (type) {
			const Type = new Fn(`return ${type.name};`)();
			jsTypes.set(Type, config);
		}
	}
}

{
	let i = 1;
	for (const [type, serializer] of jsTypes) {
		serializers.set(type, {
			request: "",
			name: i++,
			serializer
		});
	}
}

for (const { request, name, serializer } of serializers.values()) {
	serializerInversed.set(
		`${request}/${name}`,
		/** @type {ObjectSerializer} */ (serializer)
	);
}

/** @type {Map<RegExp, (request: string) => boolean>} */
const loaders = new Map();

/**
 * @typedef {ComplexSerializableType[]} DeserializedType
 * @typedef {PrimitiveSerializableType[]} SerializedType
 * @extends {SerializerMiddleware<DeserializedType, SerializedType>}
 */
class ObjectMiddleware extends SerializerMiddleware {
	/**
	 * @param {function(any): void} extendContext context extensions
	 * @param {string | Hash} hashFunction hash function to use
	 */
	constructor(extendContext, hashFunction = "md4") {
		super();
		this.extendContext = extendContext;
		this._hashFunction = hashFunction;
	}

	/**
	 * @param {RegExp} regExp RegExp for which the request is tested
	 * @param {function(string): boolean} loader loader to load the request, returns true when successful
	 * @returns {void}
	 */
	static registerLoader(regExp, loader) {
		loaders.set(regExp, loader);
	}

	/**
	 * @param {Constructor} Constructor the constructor
	 * @param {string} request the request which will be required when deserializing
	 * @param {string | null} name the name to make multiple serializer unique when sharing a request
	 * @param {ObjectSerializer} serializer the serializer
	 * @returns {void}
	 */
	static register(Constructor, request, name, serializer) {
		const key = `${request}/${name}`;

		if (serializers.has(Constructor)) {
			throw new Error(
				`ObjectMiddleware.register: serializer for ${Constructor.name} is already registered`
			);
		}

		if (serializerInversed.has(key)) {
			throw new Error(
				`ObjectMiddleware.register: serializer for ${key} is already registered`
			);
		}

		serializers.set(Constructor, {
			request,
			name,
			serializer
		});

		serializerInversed.set(key, serializer);
	}

	/**
	 * @param {Constructor} Constructor the constructor
	 * @returns {void}
	 */
	static registerNotSerializable(Constructor) {
		if (serializers.has(Constructor)) {
			throw new Error(
				`ObjectMiddleware.registerNotSerializable: serializer for ${Constructor.name} is already registered`
			);
		}

		serializers.set(Constructor, NOT_SERIALIZABLE);
	}

	static getSerializerFor(object) {
		const proto = Object.getPrototypeOf(object);
		let c;
		if (proto === null) {
			// Object created with Object.create(null)
			c = null;
		} else {
			c = proto.constructor;
			if (!c) {
				throw new Error(
					"Serialization of objects with prototype without valid constructor property not possible"
				);
			}
		}
		const config = serializers.get(c);

		if (!config) throw new Error(`No serializer registered for ${c.name}`);
		if (config === NOT_SERIALIZABLE) throw NOT_SERIALIZABLE;

		return config;
	}

	/**
	 * @param {string} request request
	 * @param {TODO} name name
	 * @returns {ObjectSerializer} serializer
	 */
	static getDeserializerFor(request, name) {
		const key = `${request}/${name}`;
		const serializer = serializerInversed.get(key);

		if (serializer === undefined) {
			throw new Error(`No deserializer registered for ${key}`);
		}

		return serializer;
	}

	/**
	 * @param {string} request request
	 * @param {string} name name
	 * @returns {ObjectSerializer | undefined} serializer
	 */
	static _getDeserializerForWithoutError(request, name) {
		const key = `${request}/${name}`;
		const serializer = serializerInversed.get(key);
		return serializer;
	}

	/**
	 * @param {DeserializedType} data data
	 * @param {object} context context object
	 * @returns {SerializedType|Promise<SerializedType>} serialized data
	 */
	serialize(data, context) {
		/** @type {any[]} */
		let result = [CURRENT_VERSION];
		let currentPos = 0;
		let referenceable = new Map();
		const addReferenceable = item => {
			referenceable.set(item, currentPos++);
		};
		let bufferDedupeMap = new Map();
		/**
		 * @param {Buffer} buf buffer
		 * @returns {Buffer} deduped buffer
		 */
		const dedupeBuffer = buf => {
			const len = buf.length;
			const entry = bufferDedupeMap.get(len);
			if (entry === undefined) {
				bufferDedupeMap.set(len, buf);
				return buf;
			}
			if (Buffer.isBuffer(entry)) {
				if (len < 32) {
					if (buf.equals(entry)) {
						return entry;
					}
					bufferDedupeMap.set(len, [entry, buf]);
					return buf;
				}
				const hash = toHash(entry, this._hashFunction);
				const newMap = new Map();
				newMap.set(hash, entry);
				bufferDedupeMap.set(len, newMap);
				const hashBuf = toHash(buf, this._hashFunction);
				if (hash === hashBuf) {
					return entry;
				}
				return buf;
			} else if (Array.isArray(entry)) {
				if (entry.length < 16) {
					for (const item of entry) {
						if (buf.equals(item)) {
							return item;
						}
					}
					entry.push(buf);
					return buf;
				}
				const newMap = new Map();
				const hash = toHash(buf, this._hashFunction);
				let found;
				for (const item of entry) {
					const itemHash = toHash(item, this._hashFunction);
					newMap.set(itemHash, item);
					if (found === undefined && itemHash === hash) found = item;
				}
				bufferDedupeMap.set(len, newMap);
				if (found === undefined) {
					newMap.set(hash, buf);
					return buf;
				}
				return found;
			}
			const hash = toHash(buf, this._hashFunction);
			const item = entry.get(hash);
			if (item !== undefined) {
				return item;
			}
			entry.set(hash, buf);
			return buf;
		};
		let currentPosTypeLookup = 0;
		let objectTypeLookup = new Map();
		const cycleStack = new Set();
		const stackToString = item => {
			const arr = Array.from(cycleStack);
			arr.push(item);
			return arr
				.map(item => {
					if (typeof item === "string") {
						if (item.length > 100) {
							return `String ${JSON.stringify(item.slice(0, 100)).slice(
								0,
								-1
							)}..."`;
						}
						return `String ${JSON.stringify(item)}`;
					}
					try {
						const { request, name } = ObjectMiddleware.getSerializerFor(item);
						if (request) {
							return `${request}${name ? `.${name}` : ""}`;
						}
					} catch (_err) {
						// ignore -> fallback
					}
					if (typeof item === "object" && item !== null) {
						if (item.constructor) {
							if (item.constructor === Object)
								return `Object { ${Object.keys(item).join(", ")} }`;
							if (item.constructor === Map) return `Map { ${item.size} items }`;
							if (item.constructor === Array)
								return `Array { ${item.length} items }`;
							if (item.constructor === Set) return `Set { ${item.size} items }`;
							if (item.constructor === RegExp) return item.toString();
							return `${item.constructor.name}`;
						}
						return `Object [null prototype] { ${Object.keys(item).join(
							", "
						)} }`;
					}
					if (typeof item === "bigint") {
						return `BigInt ${item}n`;
					}
					try {
						return `${item}`;
					} catch (err) {
						return `(${err.message})`;
					}
				})
				.join(" -> ");
		};
		/** @type {WeakSet<Error>} */
		let hasDebugInfoAttached;
		let ctx = {
			write(value, key) {
				try {
					process(value);
				} catch (err) {
					if (err !== NOT_SERIALIZABLE) {
						if (hasDebugInfoAttached === undefined)
							hasDebugInfoAttached = new WeakSet();
						if (!hasDebugInfoAttached.has(/** @type {Error} */ (err))) {
							/** @type {Error} */
							(err).message += `\nwhile serializing ${stackToString(value)}`;
							hasDebugInfoAttached.add(/** @type {Error} */ (err));
						}
					}
					throw err;
				}
			},
			setCircularReference(ref) {
				addReferenceable(ref);
			},
			snapshot() {
				return {
					length: result.length,
					cycleStackSize: cycleStack.size,
					referenceableSize: referenceable.size,
					currentPos,
					objectTypeLookupSize: objectTypeLookup.size,
					currentPosTypeLookup
				};
			},
			rollback(snapshot) {
				result.length = snapshot.length;
				setSetSize(cycleStack, snapshot.cycleStackSize);
				setMapSize(referenceable, snapshot.referenceableSize);
				currentPos = snapshot.currentPos;
				setMapSize(objectTypeLookup, snapshot.objectTypeLookupSize);
				currentPosTypeLookup = snapshot.currentPosTypeLookup;
			},
			...context
		};
		this.extendContext(ctx);
		const process = item => {
			if (Buffer.isBuffer(item)) {
				// check if we can emit a reference
				const ref = referenceable.get(item);
				if (ref !== undefined) {
					result.push(ESCAPE, ref - currentPos);
					return;
				}
				const alreadyUsedBuffer = dedupeBuffer(item);
				if (alreadyUsedBuffer !== item) {
					const ref = referenceable.get(alreadyUsedBuffer);
					if (ref !== undefined) {
						referenceable.set(item, ref);
						result.push(ESCAPE, ref - currentPos);
						return;
					}
					item = alreadyUsedBuffer;
				}
				addReferenceable(item);

				result.push(item);
			} else if (item === ESCAPE) {
				result.push(ESCAPE, ESCAPE_ESCAPE_VALUE);
			} else if (
				typeof item === "object"
				// We don't have to check for null as ESCAPE is null and this has been checked before
			) {
				// check if we can emit a reference
				const ref = referenceable.get(item);
				if (ref !== undefined) {
					result.push(ESCAPE, ref - currentPos);
					return;
				}

				if (cycleStack.has(item)) {
					throw new Error(
						"This is a circular references. To serialize circular references use 'setCircularReference' somewhere in the circle during serialize and deserialize."
					);
				}

				const { request, name, serializer } =
					ObjectMiddleware.getSerializerFor(item);
				const key = `${request}/${name}`;
				const lastIndex = objectTypeLookup.get(key);

				if (lastIndex === undefined) {
					objectTypeLookup.set(key, currentPosTypeLookup++);

					result.push(ESCAPE, request, name);
				} else {
					result.push(ESCAPE, currentPosTypeLookup - lastIndex);
				}

				cycleStack.add(item);

				try {
					serializer.serialize(item, ctx);
				} finally {
					cycleStack.delete(item);
				}

				result.push(ESCAPE, ESCAPE_END_OBJECT);

				addReferenceable(item);
			} else if (typeof item === "string") {
				if (item.length > 1) {
					// short strings are shorter when not emitting a reference (this saves 1 byte per empty string)
					// check if we can emit a reference
					const ref = referenceable.get(item);
					if (ref !== undefined) {
						result.push(ESCAPE, ref - currentPos);
						return;
					}
					addReferenceable(item);
				}

				if (item.length > 102400 && context.logger) {
					context.logger.warn(
						`Serializing big strings (${Math.round(
							item.length / 1024
						)}kiB) impacts deserialization performance (consider using Buffer instead and decode when needed)`
					);
				}

				result.push(item);
			} else if (typeof item === "function") {
				if (!SerializerMiddleware.isLazy(item))
					throw new Error(`Unexpected function ${item}`);
				/** @type {SerializedType} */
				const serializedData =
					SerializerMiddleware.getLazySerializedValue(item);
				if (serializedData !== undefined) {
					if (typeof serializedData === "function") {
						result.push(serializedData);
					} else {
						throw new Error("Not implemented");
					}
				} else if (SerializerMiddleware.isLazy(item, this)) {
					throw new Error("Not implemented");
				} else {
					const data = SerializerMiddleware.serializeLazy(item, data =>
						this.serialize([data], context)
					);
					SerializerMiddleware.setLazySerializedValue(item, data);
					result.push(data);
				}
			} else if (item === undefined) {
				result.push(ESCAPE, ESCAPE_UNDEFINED);
			} else {
				result.push(item);
			}
		};

		try {
			for (const item of data) {
				process(item);
			}
			return result;
		} catch (err) {
			if (err === NOT_SERIALIZABLE) return null;

			throw err;
		} finally {
			// Get rid of these references to avoid leaking memory
			// This happens because the optimized code v8 generates
			// is optimized for our "ctx.write" method so it will reference
			// it from e. g. Dependency.prototype.serialize -(IC)-> ctx.write
			data =
				result =
				referenceable =
				bufferDedupeMap =
				objectTypeLookup =
				ctx =
					/** @type {EXPECTED_ANY} */
					(undefined);
		}
	}

	/**
	 * @param {SerializedType} data data
	 * @param {object} context context object
	 * @returns {DeserializedType|Promise<DeserializedType>} deserialized data
	 */
	deserialize(data, context) {
		let currentDataPos = 0;
		const read = () => {
			if (currentDataPos >= data.length)
				throw new Error("Unexpected end of stream");

			return data[currentDataPos++];
		};

		if (read() !== CURRENT_VERSION)
			throw new Error("Version mismatch, serializer changed");

		let currentPos = 0;
		let referenceable = [];
		const addReferenceable = item => {
			referenceable.push(item);
			currentPos++;
		};
		let currentPosTypeLookup = 0;
		let objectTypeLookup = [];
		let result = [];
		let ctx = {
			read() {
				return decodeValue();
			},
			setCircularReference(ref) {
				addReferenceable(ref);
			},
			...context
		};
		this.extendContext(ctx);
		const decodeValue = () => {
			const item = read();

			if (item === ESCAPE) {
				const nextItem = read();

				if (nextItem === ESCAPE_ESCAPE_VALUE) {
					return ESCAPE;
				} else if (nextItem === ESCAPE_UNDEFINED) {
					// Nothing
				} else if (nextItem === ESCAPE_END_OBJECT) {
					throw new Error(
						`Unexpected end of object at position ${currentDataPos - 1}`
					);
				} else {
					const request = nextItem;
					let serializer;

					if (typeof request === "number") {
						if (request < 0) {
							// relative reference
							return referenceable[currentPos + request];
						}
						serializer = objectTypeLookup[currentPosTypeLookup - request];
					} else {
						if (typeof request !== "string") {
							throw new Error(
								`Unexpected type (${typeof request}) of request ` +
									`at position ${currentDataPos - 1}`
							);
						}
						const name = /** @type {string} */ (read());

						serializer = ObjectMiddleware._getDeserializerForWithoutError(
							request,
							name
						);

						if (serializer === undefined) {
							if (request && !loadedRequests.has(request)) {
								let loaded = false;
								for (const [regExp, loader] of loaders) {
									if (regExp.test(request) && loader(request)) {
										loaded = true;
										break;
									}
								}
								if (!loaded) {
									require(request);
								}

								loadedRequests.add(request);
							}

							serializer = ObjectMiddleware.getDeserializerFor(request, name);
						}

						objectTypeLookup.push(serializer);
						currentPosTypeLookup++;
					}
					try {
						const item = serializer.deserialize(ctx);
						const end1 = read();

						if (end1 !== ESCAPE) {
							throw new Error("Expected end of object");
						}

						const end2 = read();

						if (end2 !== ESCAPE_END_OBJECT) {
							throw new Error("Expected end of object");
						}

						addReferenceable(item);

						return item;
					} catch (err) {
						// As this is only for error handling, we omit creating a Map for
						// faster access to this information, as this would affect performance
						// in the good case
						let serializerEntry;
						for (const entry of serializers) {
							if (entry[1].serializer === serializer) {
								serializerEntry = entry;
								break;
							}
						}
						const name = !serializerEntry
							? "unknown"
							: !serializerEntry[1].request
								? serializerEntry[0].name
								: serializerEntry[1].name
									? `${serializerEntry[1].request} ${serializerEntry[1].name}`
									: serializerEntry[1].request;
						/** @type {Error} */
						(err).message += `\n(during deserialization of ${name})`;
						throw err;
					}
				}
			} else if (typeof item === "string") {
				if (item.length > 1) {
					addReferenceable(item);
				}

				return item;
			} else if (Buffer.isBuffer(item)) {
				addReferenceable(item);

				return item;
			} else if (typeof item === "function") {
				return SerializerMiddleware.deserializeLazy(
					item,
					data => this.deserialize(data, context)[0]
				);
			} else {
				return item;
			}
		};

		try {
			while (currentDataPos < data.length) {
				result.push(decodeValue());
			}
			return result;
		} finally {
			// Get rid of these references to avoid leaking memory
			// This happens because the optimized code v8 generates
			// is optimized for our "ctx.read" method so it will reference
			// it from e. g. Dependency.prototype.deserialize -(IC)-> ctx.read
			result =
				referenceable =
				data =
				objectTypeLookup =
				ctx =
					/** @type {EXPECTED_ANY} */
					(undefined);
		}
	}
}

module.exports = ObjectMiddleware;
module.exports.NOT_SERIALIZABLE = NOT_SERIALIZABLE;
