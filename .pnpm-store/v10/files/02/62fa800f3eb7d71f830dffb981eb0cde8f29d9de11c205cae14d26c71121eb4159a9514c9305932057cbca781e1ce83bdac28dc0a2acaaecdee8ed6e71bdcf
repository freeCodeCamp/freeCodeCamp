/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @type {WeakMap<object, WeakMap<object, object>>} */
const mergeCache = new WeakMap();
/** @type {WeakMap<object, Map<string, Map<string|number|boolean, object>>>} */
const setPropertyCache = new WeakMap();
const DELETE = Symbol("DELETE");
const DYNAMIC_INFO = Symbol("cleverMerge dynamic info");

/**
 * Merges two given objects and caches the result to avoid computation if same objects passed as arguments again.
 * @template T
 * @template O
 * @example
 * // performs cleverMerge(first, second), stores the result in WeakMap and returns result
 * cachedCleverMerge({a: 1}, {a: 2})
 * {a: 2}
 *  // when same arguments passed, gets the result from WeakMap and returns it.
 * cachedCleverMerge({a: 1}, {a: 2})
 * {a: 2}
 * @param {T | null | undefined} first first object
 * @param {O | null | undefined} second second object
 * @returns {T & O | T | O} merged object of first and second object
 */
const cachedCleverMerge = (first, second) => {
	if (second === undefined) return /** @type {T} */ (first);
	if (first === undefined) return /** @type {O} */ (second);
	if (typeof second !== "object" || second === null)
		return /** @type {O} */ (second);
	if (typeof first !== "object" || first === null)
		return /** @type {T} */ (first);

	let innerCache = mergeCache.get(first);
	if (innerCache === undefined) {
		innerCache = new WeakMap();
		mergeCache.set(first, innerCache);
	}
	const prevMerge = /** @type {T & O} */ (innerCache.get(second));
	if (prevMerge !== undefined) return prevMerge;
	const newMerge = _cleverMerge(first, second, true);
	innerCache.set(second, newMerge);
	return /** @type {T & O} */ (newMerge);
};

/**
 * @template T
 * @param {Partial<T>} obj object
 * @param {string} property property
 * @param {string|number|boolean} value assignment value
 * @returns {T} new object
 */
const cachedSetProperty = (obj, property, value) => {
	let mapByProperty = setPropertyCache.get(obj);

	if (mapByProperty === undefined) {
		mapByProperty = new Map();
		setPropertyCache.set(obj, mapByProperty);
	}

	let mapByValue = mapByProperty.get(property);

	if (mapByValue === undefined) {
		mapByValue = new Map();
		mapByProperty.set(property, mapByValue);
	}

	let result = mapByValue.get(value);

	if (result) return /** @type {T} */ (result);

	result = {
		...obj,
		[property]: value
	};
	mapByValue.set(value, result);

	return /** @type {T} */ (result);
};

/** @typedef {Map<string, any>} ByValues */

/**
 * @typedef {object} ObjectParsedPropertyEntry
 * @property {any | undefined} base base value
 * @property {string | undefined} byProperty the name of the selector property
 * @property {ByValues} byValues value depending on selector property, merged with base
 */

/**
 * @typedef {object} ParsedObject
 * @property {Map<string, ObjectParsedPropertyEntry>} static static properties (key is property name)
 * @property {{ byProperty: string, fn: Function } | undefined} dynamic dynamic part
 */

/** @type {WeakMap<object, ParsedObject>} */
const parseCache = new WeakMap();

/**
 * @param {object} obj the object
 * @returns {ParsedObject} parsed object
 */
const cachedParseObject = obj => {
	const entry = parseCache.get(obj);
	if (entry !== undefined) return entry;
	const result = parseObject(obj);
	parseCache.set(obj, result);
	return result;
};

/**
 * @template {object} T
 * @param {T} obj the object
 * @returns {ParsedObject} parsed object
 */
const parseObject = obj => {
	const info = new Map();
	let dynamicInfo;
	/**
	 * @param {string} p path
	 * @returns {Partial<ObjectParsedPropertyEntry>} object parsed property entry
	 */
	const getInfo = p => {
		const entry = info.get(p);
		if (entry !== undefined) return entry;
		const newEntry = {
			base: undefined,
			byProperty: undefined,
			byValues: undefined
		};
		info.set(p, newEntry);
		return newEntry;
	};
	for (const key of Object.keys(obj)) {
		if (key.startsWith("by")) {
			const byProperty = /** @type {keyof T} */ (key);
			const byObj = /** @type {object} */ (obj[byProperty]);
			if (typeof byObj === "object") {
				for (const byValue of Object.keys(byObj)) {
					const obj = byObj[/** @type {keyof (keyof T)} */ (byValue)];
					for (const key of Object.keys(obj)) {
						const entry = getInfo(key);
						if (entry.byProperty === undefined) {
							entry.byProperty = /** @type {string} */ (byProperty);
							entry.byValues = new Map();
						} else if (entry.byProperty !== byProperty) {
							throw new Error(
								`${/** @type {string} */ (byProperty)} and ${entry.byProperty} for a single property is not supported`
							);
						}
						/** @type {ByValues} */
						(entry.byValues).set(
							byValue,
							obj[/** @type {keyof (keyof T)} */ (key)]
						);
						if (byValue === "default") {
							for (const otherByValue of Object.keys(byObj)) {
								if (
									!(/** @type {ByValues} */ (entry.byValues).has(otherByValue))
								)
									/** @type {ByValues} */
									(entry.byValues).set(otherByValue, undefined);
							}
						}
					}
				}
			} else if (typeof byObj === "function") {
				if (dynamicInfo === undefined) {
					dynamicInfo = {
						byProperty: key,
						fn: byObj
					};
				} else {
					throw new Error(
						`${key} and ${dynamicInfo.byProperty} when both are functions is not supported`
					);
				}
			} else {
				const entry = getInfo(key);
				entry.base = obj[/** @type {keyof T} */ (key)];
			}
		} else {
			const entry = getInfo(key);
			entry.base = obj[/** @type {keyof T} */ (key)];
		}
	}
	return {
		static: info,
		dynamic: dynamicInfo
	};
};

/**
 * @template {object} T
 * @param {Map<string, ObjectParsedPropertyEntry>} info static properties (key is property name)
 * @param {{ byProperty: string, fn: Function } | undefined} dynamicInfo dynamic part
 * @returns {T} the object
 */
const serializeObject = (info, dynamicInfo) => {
	const obj = /** @type {T} */ ({});
	// Setup byProperty structure
	for (const entry of info.values()) {
		if (entry.byProperty !== undefined) {
			const byObj = (obj[entry.byProperty] = obj[entry.byProperty] || {});
			for (const byValue of entry.byValues.keys()) {
				byObj[byValue] = byObj[byValue] || {};
			}
		}
	}
	for (const [key, entry] of info) {
		if (entry.base !== undefined) {
			obj[/** @type {keyof T} */ (key)] = entry.base;
		}
		// Fill byProperty structure
		if (entry.byProperty !== undefined) {
			const byObj = (obj[entry.byProperty] = obj[entry.byProperty] || {});
			for (const byValue of Object.keys(byObj)) {
				const value = getFromByValues(entry.byValues, byValue);
				if (value !== undefined) byObj[byValue][key] = value;
			}
		}
	}
	if (dynamicInfo !== undefined) {
		obj[dynamicInfo.byProperty] = dynamicInfo.fn;
	}
	return obj;
};

const VALUE_TYPE_UNDEFINED = 0;
const VALUE_TYPE_ATOM = 1;
const VALUE_TYPE_ARRAY_EXTEND = 2;
const VALUE_TYPE_OBJECT = 3;
const VALUE_TYPE_DELETE = 4;

/**
 * @param {any} value a single value
 * @returns {VALUE_TYPE_UNDEFINED | VALUE_TYPE_ATOM | VALUE_TYPE_ARRAY_EXTEND | VALUE_TYPE_OBJECT | VALUE_TYPE_DELETE} value type
 */
const getValueType = value => {
	if (value === undefined) {
		return VALUE_TYPE_UNDEFINED;
	} else if (value === DELETE) {
		return VALUE_TYPE_DELETE;
	} else if (Array.isArray(value)) {
		if (value.includes("...")) return VALUE_TYPE_ARRAY_EXTEND;
		return VALUE_TYPE_ATOM;
	} else if (
		typeof value === "object" &&
		value !== null &&
		(!value.constructor || value.constructor === Object)
	) {
		return VALUE_TYPE_OBJECT;
	}
	return VALUE_TYPE_ATOM;
};

/**
 * Merges two objects. Objects are deeply clever merged.
 * Arrays might reference the old value with "...".
 * Non-object values take preference over object values.
 * @template T
 * @template O
 * @param {T} first first object
 * @param {O} second second object
 * @returns {T & O | T | O} merged object of first and second object
 */
const cleverMerge = (first, second) => {
	if (second === undefined) return first;
	if (first === undefined) return second;
	if (typeof second !== "object" || second === null) return second;
	if (typeof first !== "object" || first === null) return first;

	return /** @type {T & O} */ (_cleverMerge(first, second, false));
};

/**
 * Merges two objects. Objects are deeply clever merged.
 * @param {object} first first object
 * @param {object} second second object
 * @param {boolean} internalCaching should parsing of objects and nested merges be cached
 * @returns {object} merged object of first and second object
 */
const _cleverMerge = (first, second, internalCaching = false) => {
	const firstObject = internalCaching
		? cachedParseObject(first)
		: parseObject(first);
	const { static: firstInfo, dynamic: firstDynamicInfo } = firstObject;

	// If the first argument has a dynamic part we modify the dynamic part to merge the second argument
	if (firstDynamicInfo !== undefined) {
		let { byProperty, fn } = firstDynamicInfo;
		const fnInfo = fn[DYNAMIC_INFO];
		if (fnInfo) {
			second = internalCaching
				? cachedCleverMerge(fnInfo[1], second)
				: cleverMerge(fnInfo[1], second);
			fn = fnInfo[0];
		}
		const newFn = (...args) => {
			const fnResult = fn(...args);
			return internalCaching
				? cachedCleverMerge(fnResult, second)
				: cleverMerge(fnResult, second);
		};
		newFn[DYNAMIC_INFO] = [fn, second];
		return serializeObject(firstObject.static, { byProperty, fn: newFn });
	}

	// If the first part is static only, we merge the static parts and keep the dynamic part of the second argument
	const secondObject = internalCaching
		? cachedParseObject(second)
		: parseObject(second);
	const { static: secondInfo, dynamic: secondDynamicInfo } = secondObject;
	/** @type {Map<string, ObjectParsedPropertyEntry>} */
	const resultInfo = new Map();
	for (const [key, firstEntry] of firstInfo) {
		const secondEntry = secondInfo.get(key);
		const entry =
			secondEntry !== undefined
				? mergeEntries(firstEntry, secondEntry, internalCaching)
				: firstEntry;
		resultInfo.set(key, entry);
	}
	for (const [key, secondEntry] of secondInfo) {
		if (!firstInfo.has(key)) {
			resultInfo.set(key, secondEntry);
		}
	}
	return serializeObject(resultInfo, secondDynamicInfo);
};

/**
 * @param {ObjectParsedPropertyEntry} firstEntry a
 * @param {ObjectParsedPropertyEntry} secondEntry b
 * @param {boolean} internalCaching should parsing of objects and nested merges be cached
 * @returns {ObjectParsedPropertyEntry} new entry
 */
const mergeEntries = (firstEntry, secondEntry, internalCaching) => {
	switch (getValueType(secondEntry.base)) {
		case VALUE_TYPE_ATOM:
		case VALUE_TYPE_DELETE:
			// No need to consider firstEntry at all
			// second value override everything
			// = second.base + second.byProperty
			return secondEntry;
		case VALUE_TYPE_UNDEFINED:
			if (!firstEntry.byProperty) {
				// = first.base + second.byProperty
				return {
					base: firstEntry.base,
					byProperty: secondEntry.byProperty,
					byValues: secondEntry.byValues
				};
			} else if (firstEntry.byProperty !== secondEntry.byProperty) {
				throw new Error(
					`${firstEntry.byProperty} and ${secondEntry.byProperty} for a single property is not supported`
				);
			} else {
				// = first.base + (first.byProperty + second.byProperty)
				// need to merge first and second byValues
				const newByValues = new Map(firstEntry.byValues);
				for (const [key, value] of secondEntry.byValues) {
					const firstValue = getFromByValues(firstEntry.byValues, key);
					newByValues.set(
						key,
						mergeSingleValue(firstValue, value, internalCaching)
					);
				}
				return {
					base: firstEntry.base,
					byProperty: firstEntry.byProperty,
					byValues: newByValues
				};
			}
		default: {
			if (!firstEntry.byProperty) {
				// The simple case
				// = (first.base + second.base) + second.byProperty
				return {
					base: mergeSingleValue(
						firstEntry.base,
						secondEntry.base,
						internalCaching
					),
					byProperty: secondEntry.byProperty,
					byValues: secondEntry.byValues
				};
			}
			let newBase;
			const intermediateByValues = new Map(firstEntry.byValues);
			for (const [key, value] of intermediateByValues) {
				intermediateByValues.set(
					key,
					mergeSingleValue(value, secondEntry.base, internalCaching)
				);
			}
			if (
				Array.from(firstEntry.byValues.values()).every(value => {
					const type = getValueType(value);
					return type === VALUE_TYPE_ATOM || type === VALUE_TYPE_DELETE;
				})
			) {
				// = (first.base + second.base) + ((first.byProperty + second.base) + second.byProperty)
				newBase = mergeSingleValue(
					firstEntry.base,
					secondEntry.base,
					internalCaching
				);
			} else {
				// = first.base + ((first.byProperty (+default) + second.base) + second.byProperty)
				newBase = firstEntry.base;
				if (!intermediateByValues.has("default"))
					intermediateByValues.set("default", secondEntry.base);
			}
			if (!secondEntry.byProperty) {
				// = first.base + (first.byProperty + second.base)
				return {
					base: newBase,
					byProperty: firstEntry.byProperty,
					byValues: intermediateByValues
				};
			} else if (firstEntry.byProperty !== secondEntry.byProperty) {
				throw new Error(
					`${firstEntry.byProperty} and ${secondEntry.byProperty} for a single property is not supported`
				);
			}
			const newByValues = new Map(intermediateByValues);
			for (const [key, value] of secondEntry.byValues) {
				const firstValue = getFromByValues(intermediateByValues, key);
				newByValues.set(
					key,
					mergeSingleValue(firstValue, value, internalCaching)
				);
			}
			return {
				base: newBase,
				byProperty: firstEntry.byProperty,
				byValues: newByValues
			};
		}
	}
};

/**
 * @param {Map<string, any>} byValues all values
 * @param {string} key value of the selector
 * @returns {any | undefined} value
 */
const getFromByValues = (byValues, key) => {
	if (key !== "default" && byValues.has(key)) {
		return byValues.get(key);
	}
	return byValues.get("default");
};

/**
 * @param {any} a value
 * @param {any} b value
 * @param {boolean} internalCaching should parsing of objects and nested merges be cached
 * @returns {any} value
 */
const mergeSingleValue = (a, b, internalCaching) => {
	const bType = getValueType(b);
	const aType = getValueType(a);
	switch (bType) {
		case VALUE_TYPE_DELETE:
		case VALUE_TYPE_ATOM:
			return b;
		case VALUE_TYPE_OBJECT: {
			return aType !== VALUE_TYPE_OBJECT
				? b
				: internalCaching
					? cachedCleverMerge(a, b)
					: cleverMerge(a, b);
		}
		case VALUE_TYPE_UNDEFINED:
			return a;
		case VALUE_TYPE_ARRAY_EXTEND:
			switch (
				aType !== VALUE_TYPE_ATOM
					? aType
					: Array.isArray(a)
						? VALUE_TYPE_ARRAY_EXTEND
						: VALUE_TYPE_OBJECT
			) {
				case VALUE_TYPE_UNDEFINED:
					return b;
				case VALUE_TYPE_DELETE:
					return /** @type {any[]} */ (b).filter(item => item !== "...");
				case VALUE_TYPE_ARRAY_EXTEND: {
					const newArray = [];
					for (const item of b) {
						if (item === "...") {
							for (const item of a) {
								newArray.push(item);
							}
						} else {
							newArray.push(item);
						}
					}
					return newArray;
				}
				case VALUE_TYPE_OBJECT:
					return /** @type {any[]} */ (b).map(item =>
						item === "..." ? a : item
					);
				default:
					throw new Error("Not implemented");
			}
		default:
			throw new Error("Not implemented");
	}
};

/**
 * @template {object} T
 * @param {T} obj the object
 * @param {(keyof T)[]=} keysToKeepOriginalValue keys to keep original value
 * @returns {T} the object without operations like "..." or DELETE
 */
const removeOperations = (obj, keysToKeepOriginalValue = []) => {
	const newObj = /** @type {T} */ ({});
	for (const key of Object.keys(obj)) {
		const value = obj[/** @type {keyof T} */ (key)];
		const type = getValueType(value);
		if (
			type === VALUE_TYPE_OBJECT &&
			keysToKeepOriginalValue.includes(/** @type {keyof T} */ (key))
		) {
			newObj[/** @type {keyof T} */ (key)] = value;
			continue;
		}
		switch (type) {
			case VALUE_TYPE_UNDEFINED:
			case VALUE_TYPE_DELETE:
				break;
			case VALUE_TYPE_OBJECT:
				newObj[/** @type {keyof T} */ (key)] =
					/** @type {T[keyof T]} */
					(
						removeOperations(
							/** @type {TODO} */ (value),
							keysToKeepOriginalValue
						)
					);
				break;
			case VALUE_TYPE_ARRAY_EXTEND:
				newObj[/** @type {keyof T} */ (key)] =
					/** @type {T[keyof T]} */
					(
						/** @type {any[]} */
						(value).filter(i => i !== "...")
					);
				break;
			default:
				newObj[/** @type {keyof T} */ (key)] = value;
				break;
		}
	}
	return newObj;
};

/**
 * @template T
 * @template {string} P
 * @param {T} obj the object
 * @param {P} byProperty the by description
 * @param  {...any} values values
 * @returns {Omit<T, P>} object with merged byProperty
 */
const resolveByProperty = (obj, byProperty, ...values) => {
	if (typeof obj !== "object" || obj === null || !(byProperty in obj)) {
		return obj;
	}
	const { [byProperty]: _byValue, ..._remaining } = obj;
	const remaining = /** @type {T} */ (_remaining);
	const byValue =
		/** @type {Record<string, T> | function(...any[]): T} */
		(_byValue);
	if (typeof byValue === "object") {
		const key = values[0];
		if (key in byValue) {
			return cachedCleverMerge(remaining, byValue[key]);
		} else if ("default" in byValue) {
			return cachedCleverMerge(remaining, byValue.default);
		}
		return remaining;
	} else if (typeof byValue === "function") {
		// eslint-disable-next-line prefer-spread
		const result = byValue.apply(null, values);
		return cachedCleverMerge(
			remaining,
			resolveByProperty(result, byProperty, ...values)
		);
	}
};

module.exports.cachedSetProperty = cachedSetProperty;
module.exports.cachedCleverMerge = cachedCleverMerge;
module.exports.cleverMerge = cleverMerge;
module.exports.resolveByProperty = resolveByProperty;
module.exports.removeOperations = removeOperations;
module.exports.DELETE = DELETE;
