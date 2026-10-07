import { getType, stringify, isObject, noop, assertTypes } from '@vitest/utils';
import { printDiffOrStringify, diff } from '@vitest/utils/diff';
import c from 'tinyrainbow';
import { isMockFunction } from '@vitest/spy';
import { processError } from '@vitest/utils/error';
import { use, util } from 'chai';

const MATCHERS_OBJECT = Symbol.for("matchers-object");
const JEST_MATCHERS_OBJECT = Symbol.for("$$jest-matchers-object");
const GLOBAL_EXPECT = Symbol.for("expect-global");
const ASYMMETRIC_MATCHERS_OBJECT = Symbol.for("asymmetric-matchers-object");

// selectively ported from https://github.com/jest-community/jest-extended
const customMatchers = {
	toSatisfy(actual, expected, message) {
		const { printReceived, printExpected, matcherHint } = this.utils;
		const pass = expected(actual);
		return {
			pass,
			message: () => pass ? `\
${matcherHint(".not.toSatisfy", "received", "")}

Expected value to not satisfy:
${message || printExpected(expected)}
Received:
${printReceived(actual)}` : `\
${matcherHint(".toSatisfy", "received", "")}

Expected value to satisfy:
${message || printExpected(expected)}

Received:
${printReceived(actual)}`
		};
	},
	toBeOneOf(actual, expected) {
		const { equals, customTesters } = this;
		const { printReceived, printExpected, matcherHint } = this.utils;
		if (!Array.isArray(expected)) {
			throw new TypeError(`You must provide an array to ${matcherHint(".toBeOneOf")}, not '${typeof expected}'.`);
		}
		const pass = expected.length === 0 || expected.some((item) => equals(item, actual, customTesters));
		return {
			pass,
			message: () => pass ? `\
${matcherHint(".not.toBeOneOf", "received", "")}

Expected value to not be one of:
${printExpected(expected)}
Received:
${printReceived(actual)}` : `\
${matcherHint(".toBeOneOf", "received", "")}

Expected value to be one of:
${printExpected(expected)}

Received:
${printReceived(actual)}`
		};
	}
};

const EXPECTED_COLOR = c.green;
const RECEIVED_COLOR = c.red;
const INVERTED_COLOR = c.inverse;
const BOLD_WEIGHT = c.bold;
const DIM_COLOR = c.dim;
function matcherHint(matcherName, received = "received", expected = "expected", options = {}) {
	const { comment = "", isDirectExpectCall = false, isNot = false, promise = "", secondArgument = "", expectedColor = EXPECTED_COLOR, receivedColor = RECEIVED_COLOR, secondArgumentColor = EXPECTED_COLOR } = options;
	let hint = "";
	let dimString = "expect";
	if (!isDirectExpectCall && received !== "") {
		hint += DIM_COLOR(`${dimString}(`) + receivedColor(received);
		dimString = ")";
	}
	if (promise !== "") {
		hint += DIM_COLOR(`${dimString}.`) + promise;
		dimString = "";
	}
	if (isNot) {
		hint += `${DIM_COLOR(`${dimString}.`)}not`;
		dimString = "";
	}
	if (matcherName.includes(".")) {
		// Old format: for backward compatibility,
		// especially without promise or isNot options
		dimString += matcherName;
	} else {
		// New format: omit period from matcherName arg
		hint += DIM_COLOR(`${dimString}.`) + matcherName;
		dimString = "";
	}
	if (expected === "") {
		dimString += "()";
	} else {
		hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected);
		if (secondArgument) {
			hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument);
		}
		dimString = ")";
	}
	if (comment !== "") {
		dimString += ` // ${comment}`;
	}
	if (dimString !== "") {
		hint += DIM_COLOR(dimString);
	}
	return hint;
}
const SPACE_SYMBOL = "·";
// Instead of inverse highlight which now implies a change,
// replace common spaces with middle dot at the end of any line.
function replaceTrailingSpaces(text) {
	return text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
}
function printReceived(object) {
	return RECEIVED_COLOR(replaceTrailingSpaces(stringify(object)));
}
function printExpected(value) {
	return EXPECTED_COLOR(replaceTrailingSpaces(stringify(value)));
}
function getMatcherUtils() {
	return {
		EXPECTED_COLOR,
		RECEIVED_COLOR,
		INVERTED_COLOR,
		BOLD_WEIGHT,
		DIM_COLOR,
		diff,
		matcherHint,
		printReceived,
		printExpected,
		printDiffOrStringify,
		printWithType
	};
}
function printWithType(name, value, print) {
	const type = getType(value);
	const hasType = type !== "null" && type !== "undefined" ? `${name} has type:  ${type}\n` : "";
	const hasValue = `${name} has value: ${print(value)}`;
	return hasType + hasValue;
}
function addCustomEqualityTesters(newTesters) {
	if (!Array.isArray(newTesters)) {
		throw new TypeError(`expect.customEqualityTesters: Must be set to an array of Testers. Was given "${getType(newTesters)}"`);
	}
	globalThis[JEST_MATCHERS_OBJECT].customEqualityTesters.push(...newTesters);
}
function getCustomEqualityTesters() {
	return globalThis[JEST_MATCHERS_OBJECT].customEqualityTesters;
}

// Extracted out of jasmine 2.5.2
function equals(a, b, customTesters, strictCheck) {
	customTesters = customTesters || [];
	return eq(a, b, [], [], customTesters, strictCheck ? hasKey : hasDefinedKey);
}
const functionToString = Function.prototype.toString;
function isAsymmetric(obj) {
	return !!obj && typeof obj === "object" && "asymmetricMatch" in obj && isA("Function", obj.asymmetricMatch);
}
function hasAsymmetric(obj, seen = new Set()) {
	if (seen.has(obj)) {
		return false;
	}
	seen.add(obj);
	if (isAsymmetric(obj)) {
		return true;
	}
	if (Array.isArray(obj)) {
		return obj.some((i) => hasAsymmetric(i, seen));
	}
	if (obj instanceof Set) {
		return Array.from(obj).some((i) => hasAsymmetric(i, seen));
	}
	if (isObject(obj)) {
		return Object.values(obj).some((v) => hasAsymmetric(v, seen));
	}
	return false;
}
function asymmetricMatch(a, b) {
	const asymmetricA = isAsymmetric(a);
	const asymmetricB = isAsymmetric(b);
	if (asymmetricA && asymmetricB) {
		return undefined;
	}
	if (asymmetricA) {
		return a.asymmetricMatch(b);
	}
	if (asymmetricB) {
		return b.asymmetricMatch(a);
	}
}
// Equality function lovingly adapted from isEqual in
//   [Underscore](http://underscorejs.org)
function eq(a, b, aStack, bStack, customTesters, hasKey) {
	let result = true;
	const asymmetricResult = asymmetricMatch(a, b);
	if (asymmetricResult !== undefined) {
		return asymmetricResult;
	}
	const testerContext = { equals };
	for (let i = 0; i < customTesters.length; i++) {
		const customTesterResult = customTesters[i].call(testerContext, a, b, customTesters);
		if (customTesterResult !== undefined) {
			return customTesterResult;
		}
	}
	if (typeof URL === "function" && a instanceof URL && b instanceof URL) {
		return a.href === b.href;
	}
	if (Object.is(a, b)) {
		return true;
	}
	// A strict comparison is necessary because `null == undefined`.
	if (a === null || b === null) {
		return a === b;
	}
	const className = Object.prototype.toString.call(a);
	if (className !== Object.prototype.toString.call(b)) {
		return false;
	}
	switch (className) {
		case "[object Boolean]":
		case "[object String]":
		case "[object Number]": if (typeof a !== typeof b) {
			// One is a primitive, one a `new Primitive()`
			return false;
		} else if (typeof a !== "object" && typeof b !== "object") {
			// both are proper primitives
			return Object.is(a, b);
		} else {
			// both are `new Primitive()`s
			return Object.is(a.valueOf(), b.valueOf());
		}
		case "[object Date]": {
			const numA = +a;
			const numB = +b;
			// Coerce dates to numeric primitive values. Dates are compared by their
			// millisecond representations. Note that invalid dates with millisecond representations
			// of `NaN` are equivalent.
			return numA === numB || Number.isNaN(numA) && Number.isNaN(numB);
		}
		case "[object RegExp]": return a.source === b.source && a.flags === b.flags;
		case "[object Temporal.Instant]":
		case "[object Temporal.ZonedDateTime]":
		case "[object Temporal.PlainDateTime]":
		case "[object Temporal.PlainDate]":
		case "[object Temporal.PlainTime]":
		case "[object Temporal.PlainYearMonth]":
		case "[object Temporal.PlainMonthDay]": return a.equals(b);
		case "[object Temporal.Duration]": return a.toString() === b.toString();
	}
	if (typeof a !== "object" || typeof b !== "object") {
		return false;
	}
	// Use DOM3 method isEqualNode (IE>=9)
	if (isDomNode(a) && isDomNode(b)) {
		return a.isEqualNode(b);
	}
	// Used to detect circular references.
	let length = aStack.length;
	while (length--) {
		// Linear search. Performance is inversely proportional to the number of
		// unique nested structures.
		// circular references at same depth are equal
		// circular reference is not equal to non-circular one
		if (aStack[length] === a) {
			return bStack[length] === b;
		} else if (bStack[length] === b) {
			return false;
		}
	}
	// Add the first object to the stack of traversed objects.
	aStack.push(a);
	bStack.push(b);
	// Recursively compare objects and arrays.
	// Compare array lengths to determine if a deep comparison is necessary.
	if (className === "[object Array]" && a.length !== b.length) {
		return false;
	}
	if (a instanceof Error && b instanceof Error) {
		try {
			return isErrorEqual(a, b, aStack, bStack, customTesters, hasKey);
		} finally {
			aStack.pop();
			bStack.pop();
		}
	}
	// Deep compare objects.
	const aKeys = keys(a, hasKey);
	let key;
	let size = aKeys.length;
	// Ensure that both objects contain the same number of properties before comparing deep equality.
	if (keys(b, hasKey).length !== size) {
		return false;
	}
	while (size--) {
		key = aKeys[size];
		// Deep compare each member
		result = hasKey(b, key) && eq(a[key], b[key], aStack, bStack, customTesters, hasKey);
		if (!result) {
			return false;
		}
	}
	// Remove the first object from the stack of traversed objects.
	aStack.pop();
	bStack.pop();
	return result;
}
function isErrorEqual(a, b, aStack, bStack, customTesters, hasKey) {
	// https://nodejs.org/docs/latest-v22.x/api/assert.html#comparison-details
	// - [[Prototype]] of objects are compared using the === operator.
	// - Only enumerable "own" properties are considered.
	// - Error names, messages, causes, and errors are always compared, even if these are not enumerable properties. errors is also compared.
	let result = Object.getPrototypeOf(a) === Object.getPrototypeOf(b) && a.name === b.name && a.message === b.message;
	// check Error.cause asymmetrically
	if (typeof b.cause !== "undefined") {
		result && (result = eq(a.cause, b.cause, aStack, bStack, customTesters, hasKey));
	}
	// AggregateError.errors
	if (a instanceof AggregateError && b instanceof AggregateError) {
		result && (result = eq(a.errors, b.errors, aStack, bStack, customTesters, hasKey));
	}
	// spread to compare enumerable properties
	result && (result = eq({ ...a }, { ...b }, aStack, bStack, customTesters, hasKey));
	return result;
}
function keys(obj, hasKey) {
	const keys = [];
	for (const key in obj) {
		if (hasKey(obj, key)) {
			keys.push(key);
		}
	}
	return keys.concat(Object.getOwnPropertySymbols(obj).filter((symbol) => Object.getOwnPropertyDescriptor(obj, symbol).enumerable));
}
function hasDefinedKey(obj, key) {
	return hasKey(obj, key) && obj[key] !== undefined;
}
function hasKey(obj, key) {
	return Object.prototype.hasOwnProperty.call(obj, key);
}
function isA(typeName, value) {
	return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
}
function isDomNode(obj) {
	return obj !== null && typeof obj === "object" && "nodeType" in obj && typeof obj.nodeType === "number" && "nodeName" in obj && typeof obj.nodeName === "string" && "isEqualNode" in obj && typeof obj.isEqualNode === "function";
}
function fnNameFor(func) {
	if (func.name) {
		return func.name;
	}
	const matches = functionToString.call(func).match(/^(?:async)?\s*function\s*(?:\*\s*)?([\w$]+)\s*\(/);
	return matches ? matches[1] : "<anonymous>";
}
function getPrototype(obj) {
	if (Object.getPrototypeOf) {
		return Object.getPrototypeOf(obj);
	}
	if (obj.constructor.prototype === obj) {
		return null;
	}
	return obj.constructor.prototype;
}
function hasProperty(obj, property) {
	if (!obj) {
		return false;
	}
	if (Object.prototype.hasOwnProperty.call(obj, property)) {
		return true;
	}
	return hasProperty(getPrototype(obj), property);
}
// SENTINEL constants are from https://github.com/facebook/immutable-js
const IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
const IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
const IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
const IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
const IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
function isImmutableUnorderedKeyed(maybeKeyed) {
	return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL] && !maybeKeyed[IS_ORDERED_SENTINEL]);
}
function isImmutableUnorderedSet(maybeSet) {
	return !!(maybeSet && maybeSet[IS_SET_SENTINEL] && !maybeSet[IS_ORDERED_SENTINEL]);
}
function isObjectLiteral(source) {
	return source != null && typeof source === "object" && !Array.isArray(source);
}
function isImmutableList(source) {
	return Boolean(source && isObjectLiteral(source) && source[IS_LIST_SENTINEL]);
}
function isImmutableOrderedKeyed(source) {
	return Boolean(source && isObjectLiteral(source) && source[IS_KEYED_SENTINEL] && source[IS_ORDERED_SENTINEL]);
}
function isImmutableOrderedSet(source) {
	return Boolean(source && isObjectLiteral(source) && source[IS_SET_SENTINEL] && source[IS_ORDERED_SENTINEL]);
}
function isImmutableRecord(source) {
	return Boolean(source && isObjectLiteral(source) && source[IS_RECORD_SYMBOL]);
}
/**
* Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/
const IteratorSymbol = Symbol.iterator;
function hasIterator(object) {
	return !!(object != null && object[IteratorSymbol]);
}
function iterableEquality(a, b, customTesters = [], aStack = [], bStack = []) {
	if (typeof a !== "object" || typeof b !== "object" || Array.isArray(a) || Array.isArray(b) || !hasIterator(a) || !hasIterator(b)) {
		return undefined;
	}
	if (a.constructor !== b.constructor) {
		return false;
	}
	let length = aStack.length;
	while (length--) {
		// Linear search. Performance is inversely proportional to the number of
		// unique nested structures.
		// circular references at same depth are equal
		// circular reference is not equal to non-circular one
		if (aStack[length] === a) {
			return bStack[length] === b;
		}
	}
	aStack.push(a);
	bStack.push(b);
	const filteredCustomTesters = [...customTesters.filter((t) => t !== iterableEquality), iterableEqualityWithStack];
	function iterableEqualityWithStack(a, b) {
		return iterableEquality(a, b, [...customTesters], [...aStack], [...bStack]);
	}
	if (a.size !== undefined) {
		if (a.size !== b.size) {
			return false;
		} else if (isA("Set", a) || isImmutableUnorderedSet(a)) {
			let allFound = true;
			for (const aValue of a) {
				if (!b.has(aValue)) {
					let has = false;
					for (const bValue of b) {
						const isEqual = equals(aValue, bValue, filteredCustomTesters);
						if (isEqual === true) {
							has = true;
						}
					}
					if (has === false) {
						allFound = false;
						break;
					}
				}
			}
			// Remove the first value from the stack of traversed values.
			aStack.pop();
			bStack.pop();
			return allFound;
		} else if (isA("Map", a) || isImmutableUnorderedKeyed(a)) {
			let allFound = true;
			for (const aEntry of a) {
				if (!b.has(aEntry[0]) || !equals(aEntry[1], b.get(aEntry[0]), filteredCustomTesters)) {
					let has = false;
					for (const bEntry of b) {
						const matchedKey = equals(aEntry[0], bEntry[0], filteredCustomTesters);
						let matchedValue = false;
						if (matchedKey === true) {
							matchedValue = equals(aEntry[1], bEntry[1], filteredCustomTesters);
						}
						if (matchedValue === true) {
							has = true;
						}
					}
					if (has === false) {
						allFound = false;
						break;
					}
				}
			}
			// Remove the first value from the stack of traversed values.
			aStack.pop();
			bStack.pop();
			return allFound;
		}
	}
	const bIterator = b[IteratorSymbol]();
	for (const aValue of a) {
		const nextB = bIterator.next();
		if (nextB.done || !equals(aValue, nextB.value, filteredCustomTesters)) {
			return false;
		}
	}
	if (!bIterator.next().done) {
		return false;
	}
	if (!isImmutableList(a) && !isImmutableOrderedKeyed(a) && !isImmutableOrderedSet(a) && !isImmutableRecord(a)) {
		const aEntries = Object.entries(a);
		const bEntries = Object.entries(b);
		if (!equals(aEntries, bEntries, filteredCustomTesters)) {
			return false;
		}
	}
	// Remove the first value from the stack of traversed values.
	aStack.pop();
	bStack.pop();
	return true;
}
/**
* Checks if `hasOwnProperty(object, key)` up the prototype chain, stopping at `Object.prototype`.
*/
function hasPropertyInObject(object, key) {
	const shouldTerminate = !object || typeof object !== "object" || object === Object.prototype;
	if (shouldTerminate) {
		return false;
	}
	return Object.prototype.hasOwnProperty.call(object, key) || hasPropertyInObject(Object.getPrototypeOf(object), key);
}
function isObjectWithKeys(a) {
	return isObject(a) && !(a instanceof Error) && !Array.isArray(a) && !(a instanceof Date);
}
function subsetEquality(object, subset, customTesters = []) {
	const filteredCustomTesters = customTesters.filter((t) => t !== subsetEquality);
	// subsetEquality needs to keep track of the references
	// it has already visited to avoid infinite loops in case
	// there are circular references in the subset passed to it.
	const subsetEqualityWithContext = (seenReferences = new WeakMap()) => (object, subset) => {
		if (!isObjectWithKeys(subset)) {
			return undefined;
		}
		return Object.keys(subset).every((key) => {
			if (subset[key] != null && typeof subset[key] === "object") {
				if (seenReferences.has(subset[key])) {
					return equals(object[key], subset[key], filteredCustomTesters);
				}
				seenReferences.set(subset[key], true);
			}
			const result = object != null && hasPropertyInObject(object, key) && equals(object[key], subset[key], [...filteredCustomTesters, subsetEqualityWithContext(seenReferences)]);
			// The main goal of using seenReference is to avoid circular node on tree.
			// It will only happen within a parent and its child, not a node and nodes next to it (same level)
			// We should keep the reference for a parent and its child only
			// Thus we should delete the reference immediately so that it doesn't interfere
			// other nodes within the same level on tree.
			seenReferences.delete(subset[key]);
			return result;
		});
	};
	return subsetEqualityWithContext()(object, subset);
}
function typeEquality(a, b) {
	if (a == null || b == null || a.constructor === b.constructor) {
		return undefined;
	}
	return false;
}
function arrayBufferEquality(a, b) {
	let dataViewA = a;
	let dataViewB = b;
	if (!(a instanceof DataView && b instanceof DataView)) {
		if (!(a instanceof ArrayBuffer) || !(b instanceof ArrayBuffer)) {
			return undefined;
		}
		try {
			dataViewA = new DataView(a);
			dataViewB = new DataView(b);
		} catch {
			return undefined;
		}
	}
	// Buffers are not equal when they do not have the same byte length
	if (dataViewA.byteLength !== dataViewB.byteLength) {
		return false;
	}
	// Check if every byte value is equal to each other
	for (let i = 0; i < dataViewA.byteLength; i++) {
		if (dataViewA.getUint8(i) !== dataViewB.getUint8(i)) {
			return false;
		}
	}
	return true;
}
function sparseArrayEquality(a, b, customTesters = []) {
	if (!Array.isArray(a) || !Array.isArray(b)) {
		return undefined;
	}
	// A sparse array [, , 1] will have keys ["2"] whereas [undefined, undefined, 1] will have keys ["0", "1", "2"]
	const aKeys = Object.keys(a);
	const bKeys = Object.keys(b);
	const filteredCustomTesters = customTesters.filter((t) => t !== sparseArrayEquality);
	return equals(a, b, filteredCustomTesters, true) && equals(aKeys, bKeys);
}
function generateToBeMessage(deepEqualityName, expected = "#{this}", actual = "#{exp}") {
	const toBeMessage = `expected ${expected} to be ${actual} // Object.is equality`;
	if (["toStrictEqual", "toEqual"].includes(deepEqualityName)) {
		return `${toBeMessage}\n\nIf it should pass with deep equality, replace "toBe" with "${deepEqualityName}"\n\nExpected: ${expected}\nReceived: serializes to the same string\n`;
	}
	return toBeMessage;
}
function pluralize(word, count) {
	return `${count} ${word}${count === 1 ? "" : "s"}`;
}
function getObjectKeys(object) {
	return [...Object.keys(object), ...Object.getOwnPropertySymbols(object).filter((s) => {
		var _Object$getOwnPropert;
		return (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(object, s)) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.enumerable;
	})];
}
function getObjectSubset(object, subset, customTesters) {
	let stripped = 0;
	const getObjectSubsetWithContext = (seenReferences = new WeakMap()) => (object, subset) => {
		if (Array.isArray(object)) {
			if (Array.isArray(subset) && subset.length === object.length) {
				// The map method returns correct subclass of subset.
				return subset.map((sub, i) => getObjectSubsetWithContext(seenReferences)(object[i], sub));
			}
		} else if (object instanceof Date) {
			return object;
		} else if (isObject(object) && isObject(subset)) {
			if (equals(object, subset, [
				...customTesters,
				iterableEquality,
				subsetEquality
			])) {
				// return "expected" subset to avoid showing irrelevant toMatchObject diff
				return subset;
			}
			const trimmed = {};
			seenReferences.set(object, trimmed);
			// preserve constructor for toMatchObject diff
			if (typeof object.constructor === "function" && typeof object.constructor.name === "string") {
				Object.defineProperty(trimmed, "constructor", {
					enumerable: false,
					value: object.constructor
				});
			}
			for (const key of getObjectKeys(object)) {
				if (hasPropertyInObject(subset, key)) {
					trimmed[key] = seenReferences.has(object[key]) ? seenReferences.get(object[key]) : getObjectSubsetWithContext(seenReferences)(object[key], subset[key]);
				} else {
					if (!seenReferences.has(object[key])) {
						stripped += 1;
						if (isObject(object[key])) {
							stripped += getObjectKeys(object[key]).length;
						}
						getObjectSubsetWithContext(seenReferences)(object[key], subset[key]);
					}
				}
			}
			if (getObjectKeys(trimmed).length > 0) {
				return trimmed;
			}
		}
		return object;
	};
	return {
		subset: getObjectSubsetWithContext()(object, subset),
		stripped
	};
}

if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT)) {
	const globalState = new WeakMap();
	const matchers = Object.create(null);
	const customEqualityTesters = [];
	const asymmetricMatchers = Object.create(null);
	Object.defineProperty(globalThis, MATCHERS_OBJECT, { get: () => globalState });
	Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT, {
		configurable: true,
		get: () => ({
			state: globalState.get(globalThis[GLOBAL_EXPECT]),
			matchers,
			customEqualityTesters
		})
	});
	Object.defineProperty(globalThis, ASYMMETRIC_MATCHERS_OBJECT, { get: () => asymmetricMatchers });
}
function getState(expect) {
	return globalThis[MATCHERS_OBJECT].get(expect);
}
function setState(state, expect) {
	const map = globalThis[MATCHERS_OBJECT];
	const current = map.get(expect) || {};
	// so it keeps getters from `testPath`
	const results = Object.defineProperties(current, {
		...Object.getOwnPropertyDescriptors(current),
		...Object.getOwnPropertyDescriptors(state)
	});
	map.set(expect, results);
}

class AsymmetricMatcher {
	// should have "jest" to be compatible with its ecosystem
	$$typeof = Symbol.for("jest.asymmetricMatcher");
	constructor(sample, inverse = false) {
		this.sample = sample;
		this.inverse = inverse;
	}
	getMatcherContext(expect) {
		return {
			...getState(expect || globalThis[GLOBAL_EXPECT]),
			equals,
			isNot: this.inverse,
			customTesters: getCustomEqualityTesters(),
			utils: {
				...getMatcherUtils(),
				diff,
				stringify,
				iterableEquality,
				subsetEquality
			}
		};
	}
}
// implement custom chai/loupe inspect for better AssertionError.message formatting
// https://github.com/chaijs/loupe/blob/9b8a6deabcd50adc056a64fb705896194710c5c6/src/index.ts#L29
// @ts-expect-error computed properties is not supported when isolatedDeclarations is enabled
// FIXME: https://github.com/microsoft/TypeScript/issues/61068
AsymmetricMatcher.prototype[Symbol.for("chai/inspect")] = function(options) {
	// minimal pretty-format with simple manual truncation
	const result = stringify(this, options.depth, { min: true });
	if (result.length <= options.truncate) {
		return result;
	}
	return `${this.toString()}{…}`;
};
class StringContaining extends AsymmetricMatcher {
	constructor(sample, inverse = false) {
		if (!isA("String", sample)) {
			throw new Error("Expected is not a string");
		}
		super(sample, inverse);
	}
	asymmetricMatch(other) {
		const result = isA("String", other) && other.includes(this.sample);
		return this.inverse ? !result : result;
	}
	toString() {
		return `String${this.inverse ? "Not" : ""}Containing`;
	}
	getExpectedType() {
		return "string";
	}
}
class Anything extends AsymmetricMatcher {
	asymmetricMatch(other) {
		return other != null;
	}
	toString() {
		return "Anything";
	}
	toAsymmetricMatcher() {
		return "Anything";
	}
}
class ObjectContaining extends AsymmetricMatcher {
	constructor(sample, inverse = false) {
		super(sample, inverse);
	}
	getPrototype(obj) {
		if (Object.getPrototypeOf) {
			return Object.getPrototypeOf(obj);
		}
		if (obj.constructor.prototype === obj) {
			return null;
		}
		return obj.constructor.prototype;
	}
	hasProperty(obj, property) {
		if (!obj) {
			return false;
		}
		if (Object.prototype.hasOwnProperty.call(obj, property)) {
			return true;
		}
		return this.hasProperty(this.getPrototype(obj), property);
	}
	asymmetricMatch(other) {
		if (typeof this.sample !== "object") {
			throw new TypeError(`You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`);
		}
		let result = true;
		const matcherContext = this.getMatcherContext();
		for (const property in this.sample) {
			if (!this.hasProperty(other, property) || !equals(this.sample[property], other[property], matcherContext.customTesters)) {
				result = false;
				break;
			}
		}
		return this.inverse ? !result : result;
	}
	toString() {
		return `Object${this.inverse ? "Not" : ""}Containing`;
	}
	getExpectedType() {
		return "object";
	}
}
class ArrayContaining extends AsymmetricMatcher {
	constructor(sample, inverse = false) {
		super(sample, inverse);
	}
	asymmetricMatch(other) {
		if (!Array.isArray(this.sample)) {
			throw new TypeError(`You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`);
		}
		const matcherContext = this.getMatcherContext();
		const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every((item) => other.some((another) => equals(item, another, matcherContext.customTesters)));
		return this.inverse ? !result : result;
	}
	toString() {
		return `Array${this.inverse ? "Not" : ""}Containing`;
	}
	getExpectedType() {
		return "array";
	}
}
class Any extends AsymmetricMatcher {
	constructor(sample) {
		if (typeof sample === "undefined") {
			throw new TypeError("any() expects to be passed a constructor function. " + "Please pass one or use anything() to match any object.");
		}
		super(sample);
	}
	fnNameFor(func) {
		if (func.name) {
			return func.name;
		}
		const functionToString = Function.prototype.toString;
		const matches = functionToString.call(func).match(/^(?:async)?\s*function\s*(?:\*\s*)?([\w$]+)\s*\(/);
		return matches ? matches[1] : "<anonymous>";
	}
	asymmetricMatch(other) {
		if (this.sample === String) {
			return typeof other == "string" || other instanceof String;
		}
		if (this.sample === Number) {
			return typeof other == "number" || other instanceof Number;
		}
		if (this.sample === Function) {
			return typeof other == "function" || typeof other === "function";
		}
		if (this.sample === Boolean) {
			return typeof other == "boolean" || other instanceof Boolean;
		}
		if (this.sample === BigInt) {
			return typeof other == "bigint" || other instanceof BigInt;
		}
		if (this.sample === Symbol) {
			return typeof other == "symbol" || other instanceof Symbol;
		}
		if (this.sample === Object) {
			return typeof other == "object";
		}
		return other instanceof this.sample;
	}
	toString() {
		return "Any";
	}
	getExpectedType() {
		if (this.sample === String) {
			return "string";
		}
		if (this.sample === Number) {
			return "number";
		}
		if (this.sample === Function) {
			return "function";
		}
		if (this.sample === Object) {
			return "object";
		}
		if (this.sample === Boolean) {
			return "boolean";
		}
		return this.fnNameFor(this.sample);
	}
	toAsymmetricMatcher() {
		return `Any<${this.fnNameFor(this.sample)}>`;
	}
}
class StringMatching extends AsymmetricMatcher {
	constructor(sample, inverse = false) {
		if (!isA("String", sample) && !isA("RegExp", sample)) {
			throw new Error("Expected is not a String or a RegExp");
		}
		super(new RegExp(sample), inverse);
	}
	asymmetricMatch(other) {
		const result = isA("String", other) && this.sample.test(other);
		return this.inverse ? !result : result;
	}
	toString() {
		return `String${this.inverse ? "Not" : ""}Matching`;
	}
	getExpectedType() {
		return "string";
	}
}
class CloseTo extends AsymmetricMatcher {
	precision;
	constructor(sample, precision = 2, inverse = false) {
		if (!isA("Number", sample)) {
			throw new Error("Expected is not a Number");
		}
		if (!isA("Number", precision)) {
			throw new Error("Precision is not a Number");
		}
		super(sample);
		this.inverse = inverse;
		this.precision = precision;
	}
	asymmetricMatch(other) {
		if (!isA("Number", other)) {
			return false;
		}
		let result = false;
		if (other === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY) {
			result = true;
		} else if (other === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY) {
			result = true;
		} else {
			result = Math.abs(this.sample - other) < 10 ** -this.precision / 2;
		}
		return this.inverse ? !result : result;
	}
	toString() {
		return `Number${this.inverse ? "Not" : ""}CloseTo`;
	}
	getExpectedType() {
		return "number";
	}
	toAsymmetricMatcher() {
		return [
			this.toString(),
			this.sample,
			`(${pluralize("digit", this.precision)})`
		].join(" ");
	}
}
const JestAsymmetricMatchers = (chai, utils) => {
	utils.addMethod(chai.expect, "anything", () => new Anything());
	utils.addMethod(chai.expect, "any", (expected) => new Any(expected));
	utils.addMethod(chai.expect, "stringContaining", (expected) => new StringContaining(expected));
	utils.addMethod(chai.expect, "objectContaining", (expected) => new ObjectContaining(expected));
	utils.addMethod(chai.expect, "arrayContaining", (expected) => new ArrayContaining(expected));
	utils.addMethod(chai.expect, "stringMatching", (expected) => new StringMatching(expected));
	utils.addMethod(chai.expect, "closeTo", (expected, precision) => new CloseTo(expected, precision));
	// defineProperty does not work
	chai.expect.not = {
		stringContaining: (expected) => new StringContaining(expected, true),
		objectContaining: (expected) => new ObjectContaining(expected, true),
		arrayContaining: (expected) => new ArrayContaining(expected, true),
		stringMatching: (expected) => new StringMatching(expected, true),
		closeTo: (expected, precision) => new CloseTo(expected, precision, true)
	};
};

function createAssertionMessage(util, assertion, hasArgs) {
	const not = util.flag(assertion, "negate") ? "not." : "";
	const name = `${util.flag(assertion, "_name")}(${hasArgs ? "expected" : ""})`;
	const promiseName = util.flag(assertion, "promise");
	const promise = promiseName ? `.${promiseName}` : "";
	return `expect(actual)${promise}.${not}${name}`;
}
function recordAsyncExpect(_test, promise, assertion, error) {
	const test = _test;
	// record promise for test, that resolves before test ends
	if (test && promise instanceof Promise) {
		// if promise is explicitly awaited, remove it from the list
		promise = promise.finally(() => {
			if (!test.promises) {
				return;
			}
			const index = test.promises.indexOf(promise);
			if (index !== -1) {
				test.promises.splice(index, 1);
			}
		});
		// record promise
		if (!test.promises) {
			test.promises = [];
		}
		test.promises.push(promise);
		let resolved = false;
		test.onFinished ?? (test.onFinished = []);
		test.onFinished.push(() => {
			if (!resolved) {
				var _vitest_worker__;
				const processor = ((_vitest_worker__ = globalThis.__vitest_worker__) === null || _vitest_worker__ === void 0 ? void 0 : _vitest_worker__.onFilterStackTrace) || ((s) => s || "");
				const stack = processor(error.stack);
				console.warn([
					`Promise returned by \`${assertion}\` was not awaited. `,
					"Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
					"Please remember to await the assertion.\n",
					stack
				].join(""));
			}
		});
		return {
			then(onFulfilled, onRejected) {
				resolved = true;
				return promise.then(onFulfilled, onRejected);
			},
			catch(onRejected) {
				return promise.catch(onRejected);
			},
			finally(onFinally) {
				return promise.finally(onFinally);
			},
			[Symbol.toStringTag]: "Promise"
		};
	}
	return promise;
}
function handleTestError(test, err) {
	var _test$result;
	test.result || (test.result = { state: "fail" });
	test.result.state = "fail";
	(_test$result = test.result).errors || (_test$result.errors = []);
	test.result.errors.push(processError(err));
}
function wrapAssertion(utils, name, fn) {
	return function(...args) {
		// private
		if (name !== "withTest") {
			utils.flag(this, "_name", name);
		}
		if (!utils.flag(this, "soft")) {
			return fn.apply(this, args);
		}
		const test = utils.flag(this, "vitest-test");
		if (!test) {
			throw new Error("expect.soft() can only be used inside a test");
		}
		try {
			const result = fn.apply(this, args);
			if (result && typeof result === "object" && typeof result.then === "function") {
				return result.then(noop, (err) => {
					handleTestError(test, err);
				});
			}
			return result;
		} catch (err) {
			handleTestError(test, err);
		}
	};
}

// Jest Expect Compact
const JestChaiExpect = (chai, utils) => {
	const { AssertionError } = chai;
	const customTesters = getCustomEqualityTesters();
	function def(name, fn) {
		const addMethod = (n) => {
			const softWrapper = wrapAssertion(utils, n, fn);
			utils.addMethod(chai.Assertion.prototype, n, softWrapper);
			utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, n, softWrapper);
		};
		if (Array.isArray(name)) {
			name.forEach((n) => addMethod(n));
		} else {
			addMethod(name);
		}
	}
	[
		"throw",
		"throws",
		"Throw"
	].forEach((m) => {
		utils.overwriteMethod(chai.Assertion.prototype, m, (_super) => {
			return function(...args) {
				const promise = utils.flag(this, "promise");
				const object = utils.flag(this, "object");
				const isNot = utils.flag(this, "negate");
				if (promise === "rejects") {
					utils.flag(this, "object", () => {
						throw object;
					});
				} else if (promise === "resolves" && typeof object !== "function") {
					if (!isNot) {
						const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
						const error = { showDiff: false };
						throw new AssertionError(message, error, utils.flag(this, "ssfi"));
					} else {
						return;
					}
				}
				_super.apply(this, args);
			};
		});
	});
	// @ts-expect-error @internal
	def("withTest", function(test) {
		utils.flag(this, "vitest-test", test);
		return this;
	});
	def("toEqual", function(expected) {
		const actual = utils.flag(this, "object");
		const equal = equals(actual, expected, [...customTesters, iterableEquality]);
		return this.assert(equal, "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", expected, actual);
	});
	def("toStrictEqual", function(expected) {
		const obj = utils.flag(this, "object");
		const equal = equals(obj, expected, [
			...customTesters,
			iterableEquality,
			typeEquality,
			sparseArrayEquality,
			arrayBufferEquality
		], true);
		return this.assert(equal, "expected #{this} to strictly equal #{exp}", "expected #{this} to not strictly equal #{exp}", expected, obj);
	});
	def("toBe", function(expected) {
		const actual = this._obj;
		const pass = Object.is(actual, expected);
		let deepEqualityName = "";
		if (!pass) {
			const toStrictEqualPass = equals(actual, expected, [
				...customTesters,
				iterableEquality,
				typeEquality,
				sparseArrayEquality,
				arrayBufferEquality
			], true);
			if (toStrictEqualPass) {
				deepEqualityName = "toStrictEqual";
			} else {
				const toEqualPass = equals(actual, expected, [...customTesters, iterableEquality]);
				if (toEqualPass) {
					deepEqualityName = "toEqual";
				}
			}
		}
		return this.assert(pass, generateToBeMessage(deepEqualityName), "expected #{this} not to be #{exp} // Object.is equality", expected, actual);
	});
	def("toMatchObject", function(expected) {
		const actual = this._obj;
		const pass = equals(actual, expected, [
			...customTesters,
			iterableEquality,
			subsetEquality
		]);
		const isNot = utils.flag(this, "negate");
		const { subset: actualSubset, stripped } = getObjectSubset(actual, expected, customTesters);
		if (pass && isNot || !pass && !isNot) {
			const msg = utils.getMessage(this, [
				pass,
				"expected #{this} to match object #{exp}",
				"expected #{this} to not match object #{exp}",
				expected,
				actualSubset,
				false
			]);
			const message = stripped === 0 ? msg : `${msg}\n(${stripped} matching ${stripped === 1 ? "property" : "properties"} omitted from actual)`;
			throw new AssertionError(message, {
				showDiff: true,
				expected,
				actual: actualSubset
			});
		}
	});
	def("toMatch", function(expected) {
		const actual = this._obj;
		if (typeof actual !== "string") {
			throw new TypeError(`.toMatch() expects to receive a string, but got ${typeof actual}`);
		}
		return this.assert(typeof expected === "string" ? actual.includes(expected) : actual.match(expected), `expected #{this} to match #{exp}`, `expected #{this} not to match #{exp}`, expected, actual);
	});
	def("toContain", function(item) {
		const actual = this._obj;
		if (typeof Node !== "undefined" && actual instanceof Node) {
			if (!(item instanceof Node)) {
				throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof item}`);
			}
			return this.assert(actual.contains(item), "expected #{this} to contain element #{exp}", "expected #{this} not to contain element #{exp}", item, actual);
		}
		if (typeof DOMTokenList !== "undefined" && actual instanceof DOMTokenList) {
			assertTypes(item, "class name", ["string"]);
			const isNot = utils.flag(this, "negate");
			const expectedClassList = isNot ? actual.value.replace(item, "").trim() : `${actual.value} ${item}`;
			return this.assert(actual.contains(item), `expected "${actual.value}" to contain "${item}"`, `expected "${actual.value}" not to contain "${item}"`, expectedClassList, actual.value);
		}
		// handle simple case on our own using `this.assert` to include diff in error message
		if (typeof actual === "string" && typeof item === "string") {
			return this.assert(actual.includes(item), `expected #{this} to contain #{exp}`, `expected #{this} not to contain #{exp}`, item, actual);
		}
		// make "actual" indexable to have compatibility with jest
		if (actual != null && typeof actual !== "string") {
			utils.flag(this, "object", Array.from(actual));
		}
		return this.contain(item);
	});
	def("toContainEqual", function(expected) {
		const obj = utils.flag(this, "object");
		const index = Array.from(obj).findIndex((item) => {
			return equals(item, expected, customTesters);
		});
		this.assert(index !== -1, "expected #{this} to deep equally contain #{exp}", "expected #{this} to not deep equally contain #{exp}", expected);
	});
	def("toBeTruthy", function() {
		const obj = utils.flag(this, "object");
		this.assert(Boolean(obj), "expected #{this} to be truthy", "expected #{this} to not be truthy", true, obj);
	});
	def("toBeFalsy", function() {
		const obj = utils.flag(this, "object");
		this.assert(!obj, "expected #{this} to be falsy", "expected #{this} to not be falsy", false, obj);
	});
	def("toBeGreaterThan", function(expected) {
		const actual = this._obj;
		assertTypes(actual, "actual", ["number", "bigint"]);
		assertTypes(expected, "expected", ["number", "bigint"]);
		return this.assert(actual > expected, `expected ${actual} to be greater than ${expected}`, `expected ${actual} to be not greater than ${expected}`, expected, actual, false);
	});
	def("toBeGreaterThanOrEqual", function(expected) {
		const actual = this._obj;
		assertTypes(actual, "actual", ["number", "bigint"]);
		assertTypes(expected, "expected", ["number", "bigint"]);
		return this.assert(actual >= expected, `expected ${actual} to be greater than or equal to ${expected}`, `expected ${actual} to be not greater than or equal to ${expected}`, expected, actual, false);
	});
	def("toBeLessThan", function(expected) {
		const actual = this._obj;
		assertTypes(actual, "actual", ["number", "bigint"]);
		assertTypes(expected, "expected", ["number", "bigint"]);
		return this.assert(actual < expected, `expected ${actual} to be less than ${expected}`, `expected ${actual} to be not less than ${expected}`, expected, actual, false);
	});
	def("toBeLessThanOrEqual", function(expected) {
		const actual = this._obj;
		assertTypes(actual, "actual", ["number", "bigint"]);
		assertTypes(expected, "expected", ["number", "bigint"]);
		return this.assert(actual <= expected, `expected ${actual} to be less than or equal to ${expected}`, `expected ${actual} to be not less than or equal to ${expected}`, expected, actual, false);
	});
	def("toBeNaN", function() {
		const obj = utils.flag(this, "object");
		this.assert(Number.isNaN(obj), "expected #{this} to be NaN", "expected #{this} not to be NaN", Number.NaN, obj);
	});
	def("toBeUndefined", function() {
		const obj = utils.flag(this, "object");
		this.assert(undefined === obj, "expected #{this} to be undefined", "expected #{this} not to be undefined", undefined, obj);
	});
	def("toBeNull", function() {
		const obj = utils.flag(this, "object");
		this.assert(obj === null, "expected #{this} to be null", "expected #{this} not to be null", null, obj);
	});
	def("toBeDefined", function() {
		const obj = utils.flag(this, "object");
		this.assert(typeof obj !== "undefined", "expected #{this} to be defined", "expected #{this} to be undefined", obj);
	});
	def("toBeTypeOf", function(expected) {
		const actual = typeof this._obj;
		const equal = expected === actual;
		return this.assert(equal, "expected #{this} to be type of #{exp}", "expected #{this} not to be type of #{exp}", expected, actual);
	});
	def("toBeInstanceOf", function(obj) {
		return this.instanceOf(obj);
	});
	def("toHaveLength", function(length) {
		return this.have.length(length);
	});
	// destructuring, because it checks `arguments` inside, and value is passing as `undefined`
	def("toHaveProperty", function(...args) {
		if (Array.isArray(args[0])) {
			args[0] = args[0].map((key) => String(key).replace(/([.[\]])/g, "\\$1")).join(".");
		}
		const actual = this._obj;
		const [propertyName, expected] = args;
		const getValue = () => {
			const hasOwn = Object.prototype.hasOwnProperty.call(actual, propertyName);
			if (hasOwn) {
				return {
					value: actual[propertyName],
					exists: true
				};
			}
			return utils.getPathInfo(actual, propertyName);
		};
		const { value, exists } = getValue();
		const pass = exists && (args.length === 1 || equals(expected, value, customTesters));
		const valueString = args.length === 1 ? "" : ` with value ${utils.objDisplay(expected)}`;
		return this.assert(pass, `expected #{this} to have property "${propertyName}"${valueString}`, `expected #{this} to not have property "${propertyName}"${valueString}`, expected, exists ? value : undefined);
	});
	def("toBeCloseTo", function(received, precision = 2) {
		const expected = this._obj;
		let pass = false;
		let expectedDiff = 0;
		let receivedDiff = 0;
		if (received === Number.POSITIVE_INFINITY && expected === Number.POSITIVE_INFINITY) {
			pass = true;
		} else if (received === Number.NEGATIVE_INFINITY && expected === Number.NEGATIVE_INFINITY) {
			pass = true;
		} else {
			expectedDiff = 10 ** -precision / 2;
			receivedDiff = Math.abs(expected - received);
			pass = receivedDiff < expectedDiff;
		}
		return this.assert(pass, `expected #{this} to be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`, `expected #{this} to not be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`, received, expected, false);
	});
	function assertIsMock(assertion) {
		if (!isMockFunction(assertion._obj)) {
			throw new TypeError(`${utils.inspect(assertion._obj)} is not a spy or a call to a spy!`);
		}
	}
	function getSpy(assertion) {
		assertIsMock(assertion);
		return assertion._obj;
	}
	def(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(number) {
		const spy = getSpy(this);
		const spyName = spy.getMockName();
		const callCount = spy.mock.calls.length;
		return this.assert(callCount === number, `expected "${spyName}" to be called #{exp} times, but got ${callCount} times`, `expected "${spyName}" to not be called #{exp} times`, number, callCount, false);
	});
	def("toHaveBeenCalledOnce", function() {
		const spy = getSpy(this);
		const spyName = spy.getMockName();
		const callCount = spy.mock.calls.length;
		return this.assert(callCount === 1, `expected "${spyName}" to be called once, but got ${callCount} times`, `expected "${spyName}" to not be called once`, 1, callCount, false);
	});
	def(["toHaveBeenCalled", "toBeCalled"], function() {
		const spy = getSpy(this);
		const spyName = spy.getMockName();
		const callCount = spy.mock.calls.length;
		const called = callCount > 0;
		const isNot = utils.flag(this, "negate");
		let msg = utils.getMessage(this, [
			called,
			`expected "${spyName}" to be called at least once`,
			`expected "${spyName}" to not be called at all, but actually been called ${callCount} times`,
			true,
			called
		]);
		if (called && isNot) {
			msg = formatCalls(spy, msg);
		}
		if (called && isNot || !called && !isNot) {
			throw new AssertionError(msg);
		}
	});
	// manually compare array elements since `jestEquals` cannot
	// apply asymmetric matcher to `undefined` array element.
	function equalsArgumentArray(a, b) {
		return a.length === b.length && a.every((aItem, i) => equals(aItem, b[i], [...customTesters, iterableEquality]));
	}
	def(["toHaveBeenCalledWith", "toBeCalledWith"], function(...args) {
		const spy = getSpy(this);
		const spyName = spy.getMockName();
		const pass = spy.mock.calls.some((callArg) => equalsArgumentArray(callArg, args));
		const isNot = utils.flag(this, "negate");
		const msg = utils.getMessage(this, [
			pass,
			`expected "${spyName}" to be called with arguments: #{exp}`,
			`expected "${spyName}" to not be called with arguments: #{exp}`,
			args
		]);
		if (pass && isNot || !pass && !isNot) {
			throw new AssertionError(formatCalls(spy, msg, args));
		}
	});
	def("toHaveBeenCalledExactlyOnceWith", function(...args) {
		const spy = getSpy(this);
		const spyName = spy.getMockName();
		const callCount = spy.mock.calls.length;
		const hasCallWithArgs = spy.mock.calls.some((callArg) => equalsArgumentArray(callArg, args));
		const pass = hasCallWithArgs && callCount === 1;
		const isNot = utils.flag(this, "negate");
		const msg = utils.getMessage(this, [
			pass,
			`expected "${spyName}" to be called once with arguments: #{exp}`,
			`expected "${spyName}" to not be called once with arguments: #{exp}`,
			args
		]);
		if (pass && isNot || !pass && !isNot) {
			throw new AssertionError(formatCalls(spy, msg, args));
		}
	});
	def(["toHaveBeenNthCalledWith", "nthCalledWith"], function(times, ...args) {
		const spy = getSpy(this);
		const spyName = spy.getMockName();
		const nthCall = spy.mock.calls[times - 1];
		const callCount = spy.mock.calls.length;
		const isCalled = times <= callCount;
		this.assert(nthCall && equalsArgumentArray(nthCall, args), `expected ${ordinalOf(times)} "${spyName}" call to have been called with #{exp}${isCalled ? `` : `, but called only ${callCount} times`}`, `expected ${ordinalOf(times)} "${spyName}" call to not have been called with #{exp}`, args, nthCall, isCalled);
	});
	def(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...args) {
		const spy = getSpy(this);
		const spyName = spy.getMockName();
		const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
		this.assert(lastCall && equalsArgumentArray(lastCall, args), `expected last "${spyName}" call to have been called with #{exp}`, `expected last "${spyName}" call to not have been called with #{exp}`, args, lastCall);
	});
	/**
	* Used for `toHaveBeenCalledBefore` and `toHaveBeenCalledAfter` to determine if the expected spy was called before the result spy.
	*/
	function isSpyCalledBeforeAnotherSpy(beforeSpy, afterSpy, failIfNoFirstInvocation) {
		const beforeInvocationCallOrder = beforeSpy.mock.invocationCallOrder;
		const afterInvocationCallOrder = afterSpy.mock.invocationCallOrder;
		if (beforeInvocationCallOrder.length === 0) {
			return !failIfNoFirstInvocation;
		}
		if (afterInvocationCallOrder.length === 0) {
			return false;
		}
		return beforeInvocationCallOrder[0] < afterInvocationCallOrder[0];
	}
	def(["toHaveBeenCalledBefore"], function(resultSpy, failIfNoFirstInvocation = true) {
		const expectSpy = getSpy(this);
		if (!isMockFunction(resultSpy)) {
			throw new TypeError(`${utils.inspect(resultSpy)} is not a spy or a call to a spy`);
		}
		this.assert(isSpyCalledBeforeAnotherSpy(expectSpy, resultSpy, failIfNoFirstInvocation), `expected "${expectSpy.getMockName()}" to have been called before "${resultSpy.getMockName()}"`, `expected "${expectSpy.getMockName()}" to not have been called before "${resultSpy.getMockName()}"`, resultSpy, expectSpy);
	});
	def(["toHaveBeenCalledAfter"], function(resultSpy, failIfNoFirstInvocation = true) {
		const expectSpy = getSpy(this);
		if (!isMockFunction(resultSpy)) {
			throw new TypeError(`${utils.inspect(resultSpy)} is not a spy or a call to a spy`);
		}
		this.assert(isSpyCalledBeforeAnotherSpy(resultSpy, expectSpy, failIfNoFirstInvocation), `expected "${expectSpy.getMockName()}" to have been called after "${resultSpy.getMockName()}"`, `expected "${expectSpy.getMockName()}" to not have been called after "${resultSpy.getMockName()}"`, resultSpy, expectSpy);
	});
	def(["toThrow", "toThrowError"], function(expected) {
		if (typeof expected === "string" || typeof expected === "undefined" || expected instanceof RegExp) {
			// Fixes the issue related to `chai` <https://github.com/vitest-dev/vitest/issues/6618>
			return this.throws(expected === "" ? /^$/ : expected);
		}
		const obj = this._obj;
		const promise = utils.flag(this, "promise");
		const isNot = utils.flag(this, "negate");
		let thrown = null;
		if (promise === "rejects") {
			thrown = obj;
		} else if (promise === "resolves" && typeof obj !== "function") {
			if (!isNot) {
				const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
				const error = { showDiff: false };
				throw new AssertionError(message, error, utils.flag(this, "ssfi"));
			} else {
				return;
			}
		} else {
			let isThrow = false;
			try {
				obj();
			} catch (err) {
				isThrow = true;
				thrown = err;
			}
			if (!isThrow && !isNot) {
				const message = utils.flag(this, "message") || "expected function to throw an error, but it didn't";
				const error = { showDiff: false };
				throw new AssertionError(message, error, utils.flag(this, "ssfi"));
			}
		}
		if (typeof expected === "function") {
			const name = expected.name || expected.prototype.constructor.name;
			return this.assert(thrown && thrown instanceof expected, `expected error to be instance of ${name}`, `expected error not to be instance of ${name}`, expected, thrown);
		}
		if (expected instanceof Error) {
			const equal = equals(thrown, expected, [...customTesters, iterableEquality]);
			return this.assert(equal, "expected a thrown error to be #{exp}", "expected a thrown error not to be #{exp}", expected, thrown);
		}
		if (typeof expected === "object" && "asymmetricMatch" in expected && typeof expected.asymmetricMatch === "function") {
			const matcher = expected;
			return this.assert(thrown && matcher.asymmetricMatch(thrown), "expected error to match asymmetric matcher", "expected error not to match asymmetric matcher", matcher, thrown);
		}
		throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof expected}"`);
	});
	[{
		name: "toHaveResolved",
		condition: (spy) => spy.mock.settledResults.length > 0 && spy.mock.settledResults.some(({ type }) => type === "fulfilled"),
		action: "resolved"
	}, {
		name: ["toHaveReturned", "toReturn"],
		condition: (spy) => spy.mock.calls.length > 0 && spy.mock.results.some(({ type }) => type !== "throw"),
		action: "called"
	}].forEach(({ name, condition, action }) => {
		def(name, function() {
			const spy = getSpy(this);
			const spyName = spy.getMockName();
			const pass = condition(spy);
			this.assert(pass, `expected "${spyName}" to be successfully ${action} at least once`, `expected "${spyName}" to not be successfully ${action}`, pass, !pass, false);
		});
	});
	[{
		name: "toHaveResolvedTimes",
		condition: (spy, times) => spy.mock.settledResults.reduce((s, { type }) => type === "fulfilled" ? ++s : s, 0) === times,
		action: "resolved"
	}, {
		name: ["toHaveReturnedTimes", "toReturnTimes"],
		condition: (spy, times) => spy.mock.results.reduce((s, { type }) => type === "throw" ? s : ++s, 0) === times,
		action: "called"
	}].forEach(({ name, condition, action }) => {
		def(name, function(times) {
			const spy = getSpy(this);
			const spyName = spy.getMockName();
			const pass = condition(spy, times);
			this.assert(pass, `expected "${spyName}" to be successfully ${action} ${times} times`, `expected "${spyName}" to not be successfully ${action} ${times} times`, `expected resolved times: ${times}`, `received resolved times: ${pass}`, false);
		});
	});
	[{
		name: "toHaveResolvedWith",
		condition: (spy, value) => spy.mock.settledResults.some(({ type, value: result }) => type === "fulfilled" && equals(value, result)),
		action: "resolve"
	}, {
		name: ["toHaveReturnedWith", "toReturnWith"],
		condition: (spy, value) => spy.mock.results.some(({ type, value: result }) => type === "return" && equals(value, result)),
		action: "return"
	}].forEach(({ name, condition, action }) => {
		def(name, function(value) {
			const spy = getSpy(this);
			const pass = condition(spy, value);
			const isNot = utils.flag(this, "negate");
			if (pass && isNot || !pass && !isNot) {
				const spyName = spy.getMockName();
				const msg = utils.getMessage(this, [
					pass,
					`expected "${spyName}" to ${action} with: #{exp} at least once`,
					`expected "${spyName}" to not ${action} with: #{exp}`,
					value
				]);
				const results = action === "return" ? spy.mock.results : spy.mock.settledResults;
				throw new AssertionError(formatReturns(spy, results, msg, value));
			}
		});
	});
	[{
		name: "toHaveLastResolvedWith",
		condition: (spy, value) => {
			const result = spy.mock.settledResults[spy.mock.settledResults.length - 1];
			return result && result.type === "fulfilled" && equals(result.value, value);
		},
		action: "resolve"
	}, {
		name: ["toHaveLastReturnedWith", "lastReturnedWith"],
		condition: (spy, value) => {
			const result = spy.mock.results[spy.mock.results.length - 1];
			return result && result.type === "return" && equals(result.value, value);
		},
		action: "return"
	}].forEach(({ name, condition, action }) => {
		def(name, function(value) {
			const spy = getSpy(this);
			const results = action === "return" ? spy.mock.results : spy.mock.settledResults;
			const result = results[results.length - 1];
			const spyName = spy.getMockName();
			this.assert(condition(spy, value), `expected last "${spyName}" call to ${action} #{exp}`, `expected last "${spyName}" call to not ${action} #{exp}`, value, result === null || result === void 0 ? void 0 : result.value);
		});
	});
	[{
		name: "toHaveNthResolvedWith",
		condition: (spy, index, value) => {
			const result = spy.mock.settledResults[index - 1];
			return result && result.type === "fulfilled" && equals(result.value, value);
		},
		action: "resolve"
	}, {
		name: ["toHaveNthReturnedWith", "nthReturnedWith"],
		condition: (spy, index, value) => {
			const result = spy.mock.results[index - 1];
			return result && result.type === "return" && equals(result.value, value);
		},
		action: "return"
	}].forEach(({ name, condition, action }) => {
		def(name, function(nthCall, value) {
			const spy = getSpy(this);
			const spyName = spy.getMockName();
			const results = action === "return" ? spy.mock.results : spy.mock.settledResults;
			const result = results[nthCall - 1];
			const ordinalCall = `${ordinalOf(nthCall)} call`;
			this.assert(condition(spy, nthCall, value), `expected ${ordinalCall} "${spyName}" call to ${action} #{exp}`, `expected ${ordinalCall} "${spyName}" call to not ${action} #{exp}`, value, result === null || result === void 0 ? void 0 : result.value);
		});
	});
	// @ts-expect-error @internal
	def("withContext", function(context) {
		for (const key in context) {
			utils.flag(this, key, context[key]);
		}
		return this;
	});
	utils.addProperty(chai.Assertion.prototype, "resolves", function __VITEST_RESOLVES__() {
		const error = new Error("resolves");
		utils.flag(this, "promise", "resolves");
		utils.flag(this, "error", error);
		const test = utils.flag(this, "vitest-test");
		const obj = utils.flag(this, "object");
		if (utils.flag(this, "poll")) {
			throw new SyntaxError(`expect.poll() is not supported in combination with .resolves`);
		}
		if (typeof (obj === null || obj === void 0 ? void 0 : obj.then) !== "function") {
			throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof obj}'.`);
		}
		const proxy = new Proxy(this, { get: (target, key, receiver) => {
			const result = Reflect.get(target, key, receiver);
			if (typeof result !== "function") {
				return result instanceof chai.Assertion ? proxy : result;
			}
			return (...args) => {
				utils.flag(this, "_name", key);
				const promise = obj.then((value) => {
					utils.flag(this, "object", value);
					return result.call(this, ...args);
				}, (err) => {
					const _error = new AssertionError(`promise rejected "${utils.inspect(err)}" instead of resolving`, { showDiff: false });
					_error.cause = err;
					_error.stack = error.stack.replace(error.message, _error.message);
					throw _error;
				});
				return recordAsyncExpect(test, promise, createAssertionMessage(utils, this, !!args.length), error);
			};
		} });
		return proxy;
	});
	utils.addProperty(chai.Assertion.prototype, "rejects", function __VITEST_REJECTS__() {
		const error = new Error("rejects");
		utils.flag(this, "promise", "rejects");
		utils.flag(this, "error", error);
		const test = utils.flag(this, "vitest-test");
		const obj = utils.flag(this, "object");
		const wrapper = typeof obj === "function" ? obj() : obj;
		if (utils.flag(this, "poll")) {
			throw new SyntaxError(`expect.poll() is not supported in combination with .rejects`);
		}
		if (typeof (wrapper === null || wrapper === void 0 ? void 0 : wrapper.then) !== "function") {
			throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof wrapper}'.`);
		}
		const proxy = new Proxy(this, { get: (target, key, receiver) => {
			const result = Reflect.get(target, key, receiver);
			if (typeof result !== "function") {
				return result instanceof chai.Assertion ? proxy : result;
			}
			return (...args) => {
				utils.flag(this, "_name", key);
				const promise = wrapper.then((value) => {
					const _error = new AssertionError(`promise resolved "${utils.inspect(value)}" instead of rejecting`, {
						showDiff: true,
						expected: new Error("rejected promise"),
						actual: value
					});
					_error.stack = error.stack.replace(error.message, _error.message);
					throw _error;
				}, (err) => {
					utils.flag(this, "object", err);
					return result.call(this, ...args);
				});
				return recordAsyncExpect(test, promise, createAssertionMessage(utils, this, !!args.length), error);
			};
		} });
		return proxy;
	});
};
function ordinalOf(i) {
	const j = i % 10;
	const k = i % 100;
	if (j === 1 && k !== 11) {
		return `${i}st`;
	}
	if (j === 2 && k !== 12) {
		return `${i}nd`;
	}
	if (j === 3 && k !== 13) {
		return `${i}rd`;
	}
	return `${i}th`;
}
function formatCalls(spy, msg, showActualCall) {
	if (spy.mock.calls.length) {
		msg += c.gray(`\n\nReceived: \n\n${spy.mock.calls.map((callArg, i) => {
			let methodCall = c.bold(`  ${ordinalOf(i + 1)} ${spy.getMockName()} call:\n\n`);
			if (showActualCall) {
				methodCall += diff(showActualCall, callArg, { omitAnnotationLines: true });
			} else {
				methodCall += stringify(callArg).split("\n").map((line) => `    ${line}`).join("\n");
			}
			methodCall += "\n";
			return methodCall;
		}).join("\n")}`);
	}
	msg += c.gray(`\n\nNumber of calls: ${c.bold(spy.mock.calls.length)}\n`);
	return msg;
}
function formatReturns(spy, results, msg, showActualReturn) {
	if (results.length) {
		msg += c.gray(`\n\nReceived: \n\n${results.map((callReturn, i) => {
			let methodCall = c.bold(`  ${ordinalOf(i + 1)} ${spy.getMockName()} call return:\n\n`);
			if (showActualReturn) {
				methodCall += diff(showActualReturn, callReturn.value, { omitAnnotationLines: true });
			} else {
				methodCall += stringify(callReturn).split("\n").map((line) => `    ${line}`).join("\n");
			}
			methodCall += "\n";
			return methodCall;
		}).join("\n")}`);
	}
	msg += c.gray(`\n\nNumber of calls: ${c.bold(spy.mock.calls.length)}\n`);
	return msg;
}

function getMatcherState(assertion, expect) {
	const obj = assertion._obj;
	const isNot = util.flag(assertion, "negate");
	const promise = util.flag(assertion, "promise") || "";
	const jestUtils = {
		...getMatcherUtils(),
		diff,
		stringify,
		iterableEquality,
		subsetEquality
	};
	const matcherState = {
		...getState(expect),
		customTesters: getCustomEqualityTesters(),
		isNot,
		utils: jestUtils,
		promise,
		equals,
		suppressedErrors: [],
		soft: util.flag(assertion, "soft"),
		poll: util.flag(assertion, "poll")
	};
	return {
		state: matcherState,
		isNot,
		obj
	};
}
class JestExtendError extends Error {
	constructor(message, actual, expected) {
		super(message);
		this.actual = actual;
		this.expected = expected;
	}
}
function JestExtendPlugin(c, expect, matchers) {
	return (_, utils) => {
		Object.entries(matchers).forEach(([expectAssertionName, expectAssertion]) => {
			function expectWrapper(...args) {
				const { state, isNot, obj } = getMatcherState(this, expect);
				const result = expectAssertion.call(state, obj, ...args);
				if (result && typeof result === "object" && typeof result.then === "function") {
					const thenable = result;
					return thenable.then(({ pass, message, actual, expected }) => {
						if (pass && isNot || !pass && !isNot) {
							throw new JestExtendError(message(), actual, expected);
						}
					});
				}
				const { pass, message, actual, expected } = result;
				if (pass && isNot || !pass && !isNot) {
					throw new JestExtendError(message(), actual, expected);
				}
			}
			const softWrapper = wrapAssertion(utils, expectAssertionName, expectWrapper);
			utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, expectAssertionName, softWrapper);
			utils.addMethod(c.Assertion.prototype, expectAssertionName, softWrapper);
			class CustomMatcher extends AsymmetricMatcher {
				constructor(inverse = false, ...sample) {
					super(sample, inverse);
				}
				asymmetricMatch(other) {
					const { pass } = expectAssertion.call(this.getMatcherContext(expect), other, ...this.sample);
					return this.inverse ? !pass : pass;
				}
				toString() {
					return `${this.inverse ? "not." : ""}${expectAssertionName}`;
				}
				getExpectedType() {
					return "any";
				}
				toAsymmetricMatcher() {
					return `${this.toString()}<${this.sample.map((item) => stringify(item)).join(", ")}>`;
				}
			}
			const customMatcher = (...sample) => new CustomMatcher(false, ...sample);
			Object.defineProperty(expect, expectAssertionName, {
				configurable: true,
				enumerable: true,
				value: customMatcher,
				writable: true
			});
			Object.defineProperty(expect.not, expectAssertionName, {
				configurable: true,
				enumerable: true,
				value: (...sample) => new CustomMatcher(true, ...sample),
				writable: true
			});
			// keep track of asymmetric matchers on global so that it can be copied over to local context's `expect`.
			// note that the negated variant is automatically shared since it's assigned on the single `expect.not` object.
			Object.defineProperty(globalThis[ASYMMETRIC_MATCHERS_OBJECT], expectAssertionName, {
				configurable: true,
				enumerable: true,
				value: customMatcher,
				writable: true
			});
		});
	};
}
const JestExtend = (chai, utils) => {
	utils.addMethod(chai.expect, "extend", (expect, expects) => {
		use(JestExtendPlugin(chai, expect, expects));
	});
};

export { ASYMMETRIC_MATCHERS_OBJECT, Any, Anything, ArrayContaining, AsymmetricMatcher, GLOBAL_EXPECT, JEST_MATCHERS_OBJECT, JestAsymmetricMatchers, JestChaiExpect, JestExtend, MATCHERS_OBJECT, ObjectContaining, StringContaining, StringMatching, addCustomEqualityTesters, arrayBufferEquality, customMatchers, equals, fnNameFor, generateToBeMessage, getObjectKeys, getObjectSubset, getState, hasAsymmetric, hasProperty, isA, isAsymmetric, isImmutableUnorderedKeyed, isImmutableUnorderedSet, iterableEquality, pluralize, setState, sparseArrayEquality, subsetEquality, typeEquality };
