/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const NormalModule = require("./NormalModule");
const { DEFAULTS } = require("./config/defaults");
const createHash = require("./util/createHash");
const memoize = require("./util/memoize");

/** @typedef {import("../declarations/WebpackOptions").HashFunction} HashFunction */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./RequestShortener")} RequestShortener */

/** @typedef {(str: string) => boolean} MatcherFn */
/** @typedef {string | RegExp | MatcherFn | (string | RegExp | MatcherFn)[]} Matcher */
/** @typedef {{ test?: Matcher, include?: Matcher, exclude?: Matcher }} MatchObject */

const ModuleFilenameHelpers = module.exports;

// TODO webpack 6: consider removing these
ModuleFilenameHelpers.ALL_LOADERS_RESOURCE = "[all-loaders][resource]";
ModuleFilenameHelpers.REGEXP_ALL_LOADERS_RESOURCE =
	/\[all-?loaders\]\[resource\]/gi;
ModuleFilenameHelpers.LOADERS_RESOURCE = "[loaders][resource]";
ModuleFilenameHelpers.REGEXP_LOADERS_RESOURCE = /\[loaders\]\[resource\]/gi;
ModuleFilenameHelpers.RESOURCE = "[resource]";
ModuleFilenameHelpers.REGEXP_RESOURCE = /\[resource\]/gi;
ModuleFilenameHelpers.ABSOLUTE_RESOURCE_PATH = "[absolute-resource-path]";
// cSpell:words olute
ModuleFilenameHelpers.REGEXP_ABSOLUTE_RESOURCE_PATH =
	/\[abs(olute)?-?resource-?path\]/gi;
ModuleFilenameHelpers.RESOURCE_PATH = "[resource-path]";
ModuleFilenameHelpers.REGEXP_RESOURCE_PATH = /\[resource-?path\]/gi;
ModuleFilenameHelpers.ALL_LOADERS = "[all-loaders]";
ModuleFilenameHelpers.REGEXP_ALL_LOADERS = /\[all-?loaders\]/gi;
ModuleFilenameHelpers.LOADERS = "[loaders]";
ModuleFilenameHelpers.REGEXP_LOADERS = /\[loaders\]/gi;
ModuleFilenameHelpers.QUERY = "[query]";
ModuleFilenameHelpers.REGEXP_QUERY = /\[query\]/gi;
ModuleFilenameHelpers.ID = "[id]";
ModuleFilenameHelpers.REGEXP_ID = /\[id\]/gi;
ModuleFilenameHelpers.HASH = "[hash]";
ModuleFilenameHelpers.REGEXP_HASH = /\[hash\]/gi;
ModuleFilenameHelpers.NAMESPACE = "[namespace]";
ModuleFilenameHelpers.REGEXP_NAMESPACE = /\[namespace\]/gi;

/** @typedef {() => string} ReturnStringCallback */

/**
 * Returns a function that returns the part of the string after the token
 * @param {ReturnStringCallback} strFn the function to get the string
 * @param {string} token the token to search for
 * @returns {ReturnStringCallback} a function that returns the part of the string after the token
 */
const getAfter = (strFn, token) => () => {
	const str = strFn();
	const idx = str.indexOf(token);
	return idx < 0 ? "" : str.slice(idx);
};

/**
 * Returns a function that returns the part of the string before the token
 * @param {ReturnStringCallback} strFn the function to get the string
 * @param {string} token the token to search for
 * @returns {ReturnStringCallback} a function that returns the part of the string before the token
 */
const getBefore = (strFn, token) => () => {
	const str = strFn();
	const idx = str.lastIndexOf(token);
	return idx < 0 ? "" : str.slice(0, idx);
};

/**
 * Returns a function that returns a hash of the string
 * @param {ReturnStringCallback} strFn the function to get the string
 * @param {HashFunction=} hashFunction the hash function to use
 * @returns {ReturnStringCallback} a function that returns the hash of the string
 */
const getHash =
	(strFn, hashFunction = DEFAULTS.HASH_FUNCTION) =>
	() => {
		const hash = createHash(hashFunction);
		hash.update(strFn());
		const digest = hash.digest("hex");
		return digest.slice(0, 4);
	};

/**
 * Returns the lazy access object.
 * @template T
 * Returns a lazy object. The object is lazy in the sense that the properties are
 * only evaluated when they are accessed. This is only obtained by setting a function as the value for each key.
 * @param {Record<string, () => T>} obj the object to convert to a lazy access object
 * @returns {Record<string, T>} the lazy access object
 */
const lazyObject = (obj) => {
	const newObj = /** @type {Record<string, T>} */ ({});
	for (const key of Object.keys(obj)) {
		const fn = obj[key];
		Object.defineProperty(newObj, key, {
			get: () => fn(),
			set: (v) => {
				Object.defineProperty(newObj, key, {
					value: v,
					enumerable: true,
					writable: true
				});
			},
			enumerable: true,
			configurable: true
		});
	}
	return newObj;
};

const SQUARE_BRACKET_TAG_REGEXP = /\[\\*([\w-]+)\\*\]/g;
/**
 * Defines the module filename template context type used by this module.
 * @typedef {object} ModuleFilenameTemplateContext
 * @property {string} identifier the identifier of the module
 * @property {string} shortIdentifier the shortened identifier of the module
 * @property {string} resource the resource of the module request
 * @property {string} resourcePath the resource path of the module request
 * @property {string} absoluteResourcePath the absolute resource path of the module request
 * @property {string} loaders the loaders of the module request
 * @property {string} allLoaders the all loaders of the module request
 * @property {string} query the query of the module identifier
 * @property {string} moduleId the module id of the module
 * @property {string} hash the hash of the module identifier
 * @property {string} namespace the module namespace
 */
/** @typedef {((context: ModuleFilenameTemplateContext) => string)} ModuleFilenameTemplateFunction */
/** @typedef {string | ModuleFilenameTemplateFunction} ModuleFilenameTemplate */

/**
 * Returns the filename.
 * @param {Module | string} module the module
 * @param {{ namespace?: string, moduleFilenameTemplate?: ModuleFilenameTemplate }} options options
 * @param {{ requestShortener: RequestShortener, chunkGraph: ChunkGraph, hashFunction?: HashFunction }} contextInfo context info
 * @returns {string} the filename
 */
ModuleFilenameHelpers.createFilename = (
	// eslint-disable-next-line default-param-last
	module = "",
	options,
	{ requestShortener, chunkGraph, hashFunction = DEFAULTS.HASH_FUNCTION }
) => {
	const opts = {
		namespace: "",
		moduleFilenameTemplate: "",
		...(typeof options === "object"
			? options
			: {
					moduleFilenameTemplate: options
				})
	};

	/** @type {ReturnStringCallback} */
	let absoluteResourcePath;
	/** @type {ReturnStringCallback} */
	let hash;
	/** @type {ReturnStringCallback} */
	let identifier;
	/** @type {ReturnStringCallback} */
	let moduleId;
	/** @type {ReturnStringCallback} */
	let shortIdentifier;
	if (typeof module === "string") {
		shortIdentifier =
			/** @type {ReturnStringCallback} */
			(memoize(() => requestShortener.shorten(module)));
		identifier = shortIdentifier;
		moduleId = () => "";
		absoluteResourcePath = () =>
			/** @type {string} */ (module.split("!").pop());
		hash = getHash(identifier, hashFunction);
	} else {
		shortIdentifier = memoize(() =>
			module.readableIdentifier(requestShortener)
		);
		identifier =
			/** @type {ReturnStringCallback} */
			(memoize(() => requestShortener.shorten(module.identifier())));
		moduleId =
			/** @type {ReturnStringCallback} */
			(() => chunkGraph.getModuleId(module));
		absoluteResourcePath = () =>
			module instanceof NormalModule
				? module.resource
				: /** @type {string} */ (module.identifier().split("!").pop());
		hash = getHash(identifier, hashFunction);
	}
	const resource =
		/** @type {ReturnStringCallback} */
		(memoize(() => shortIdentifier().split("!").pop()));

	const loaders = getBefore(shortIdentifier, "!");
	const allLoaders = getBefore(identifier, "!");
	const query = getAfter(resource, "?");
	const resourcePath = () => {
		const q = query().length;
		return q === 0 ? resource() : resource().slice(0, -q);
	};
	if (typeof opts.moduleFilenameTemplate === "function") {
		return opts.moduleFilenameTemplate(
			/** @type {ModuleFilenameTemplateContext} */
			(
				lazyObject({
					identifier,
					shortIdentifier,
					resource,
					resourcePath: memoize(resourcePath),
					absoluteResourcePath: memoize(absoluteResourcePath),
					loaders: memoize(loaders),
					allLoaders: memoize(allLoaders),
					query: memoize(query),
					moduleId: memoize(moduleId),
					hash: memoize(hash),
					namespace: () => opts.namespace
				})
			)
		);
	}

	// TODO webpack 6: consider removing alternatives without dashes
	/** @type {Map<string, () => string>} */
	const replacements = new Map([
		["identifier", identifier],
		["short-identifier", shortIdentifier],
		["resource", resource],
		["resource-path", resourcePath],
		// cSpell:words resourcepath
		["resourcepath", resourcePath],
		["absolute-resource-path", absoluteResourcePath],
		["abs-resource-path", absoluteResourcePath],
		// cSpell:words absoluteresource
		["absoluteresource-path", absoluteResourcePath],
		// cSpell:words absresource
		["absresource-path", absoluteResourcePath],
		// cSpell:words resourcepath
		["absolute-resourcepath", absoluteResourcePath],
		// cSpell:words resourcepath
		["abs-resourcepath", absoluteResourcePath],
		// cSpell:words absoluteresourcepath
		["absoluteresourcepath", absoluteResourcePath],
		// cSpell:words absresourcepath
		["absresourcepath", absoluteResourcePath],
		["all-loaders", allLoaders],
		// cSpell:words allloaders
		["allloaders", allLoaders],
		["loaders", loaders],
		["query", query],
		["id", moduleId],
		["hash", hash],
		["namespace", () => opts.namespace]
	]);

	// TODO webpack 6: consider removing weird double placeholders
	return /** @type {string} */ (opts.moduleFilenameTemplate)
		.replace(ModuleFilenameHelpers.REGEXP_ALL_LOADERS_RESOURCE, "[identifier]")
		.replace(
			ModuleFilenameHelpers.REGEXP_LOADERS_RESOURCE,
			"[short-identifier]"
		)
		.replace(SQUARE_BRACKET_TAG_REGEXP, (match, content) => {
			if (content.length + 2 === match.length) {
				const replacement = replacements.get(content.toLowerCase());
				if (replacement !== undefined) {
					return replacement();
				}
			} else if (match.startsWith("[\\") && match.endsWith("\\]")) {
				return `[${match.slice(2, -2)}]`;
			}
			return match;
		});
};

/**
 * Replaces duplicate items in an array with new values generated by a callback function.
 * The callback function is called with the duplicate item, the index of the duplicate item, and the number of times the item has been replaced.
 * The callback function should return the new value for the duplicate item.
 * @template T
 * @param {T[]} array the array with duplicates to be replaced
 * @param {(duplicateItem: T, duplicateItemIndex: number, numberOfTimesReplaced: number) => T} fn callback function to generate new values for the duplicate items
 * @param {(firstElement: T, nextElement: T) => -1 | 0 | 1=} comparator optional comparator function to sort the duplicate items
 * @returns {T[]} the array with duplicates replaced
 * @example
 * ```js
 * const array = ["a", "b", "c", "a", "b", "a"];
 * const result = ModuleFilenameHelpers.replaceDuplicates(array, (item, index, count) => `${item}-${count}`);
 * // result: ["a-1", "b-1", "c", "a-2", "b-2", "a-3"]
 * ```
 */
ModuleFilenameHelpers.replaceDuplicates = (array, fn, comparator) => {
	const countMap = Object.create(null);
	const posMap = Object.create(null);

	for (const [idx, item] of array.entries()) {
		countMap[item] = countMap[item] || [];
		countMap[item].push(idx);
		posMap[item] = 0;
	}
	if (comparator) {
		for (const item of Object.keys(countMap)) {
			countMap[item].sort(comparator);
		}
	}
	return array.map((item, i) => {
		if (countMap[item].length > 1) {
			if (comparator && countMap[item][0] === i) return item;
			return fn(item, i, posMap[item]++);
		}
		return item;
	});
};

/**
 * Tests if a string matches a RegExp or an array of RegExp.
 * @param {string} str string to test
 * @param {Matcher} test value which will be used to match against the string
 * @returns {boolean} true, when the RegExp matches
 * @example
 * ```js
 * ModuleFilenameHelpers.matchPart("foo.js", "foo"); // true
 * ModuleFilenameHelpers.matchPart("foo.js", "foo.js"); // true
 * ModuleFilenameHelpers.matchPart("foo.js", "foo."); // false
 * ModuleFilenameHelpers.matchPart("foo.js", "foo*"); // false
 * ModuleFilenameHelpers.matchPart("foo.js", "foo.*"); // true
 * ModuleFilenameHelpers.matchPart("foo.js", /^foo/); // true
 * ModuleFilenameHelpers.matchPart("foo.js", [/^foo/, "bar"]); // true
 * ModuleFilenameHelpers.matchPart("foo.js", [/^foo/, "bar"]); // true
 * ModuleFilenameHelpers.matchPart("foo.js", [/^foo/, /^bar/]); // true
 * ModuleFilenameHelpers.matchPart("foo.js", [/^baz/, /^bar/]); // false
 * ```
 */
const matchPart = (str, test) => {
	if (!test) return true;
	if (test instanceof RegExp) {
		return test.test(str);
	} else if (typeof test === "string") {
		return str.startsWith(test);
	} else if (typeof test === "function") {
		return test(str);
	}

	return test.some((test) => matchPart(str, test));
};

ModuleFilenameHelpers.matchPart = matchPart;

/**
 * Tests if a string matches a match object. The match object can have the following properties:
 * - `test`: a RegExp or an array of RegExp
 * - `include`: a RegExp or an array of RegExp
 * - `exclude`: a RegExp or an array of RegExp
 *
 * The `test` property is tested first, then `include` and then `exclude`.
 * @param {MatchObject} obj a match object to test against the string
 * @param {string} str string to test against the matching object
 * @returns {boolean} true, when the object matches
 * @example
 * ```js
 * ModuleFilenameHelpers.matchObject({ test: "foo.js" }, "foo.js"); // true
 * ModuleFilenameHelpers.matchObject({ test: /^foo/ }, "foo.js"); // true
 * ModuleFilenameHelpers.matchObject({ test: [/^foo/, "bar"] }, "foo.js"); // true
 * ModuleFilenameHelpers.matchObject({ test: [/^foo/, "bar"] }, "baz.js"); // false
 * ModuleFilenameHelpers.matchObject({ include: "foo.js" }, "foo.js"); // true
 * ModuleFilenameHelpers.matchObject({ include: "foo.js" }, "bar.js"); // false
 * ModuleFilenameHelpers.matchObject({ include: /^foo/ }, "foo.js"); // true
 * ModuleFilenameHelpers.matchObject({ include: [/^foo/, "bar"] }, "foo.js"); // true
 * ModuleFilenameHelpers.matchObject({ include: [/^foo/, "bar"] }, "baz.js"); // false
 * ModuleFilenameHelpers.matchObject({ exclude: "foo.js" }, "foo.js"); // false
 * ModuleFilenameHelpers.matchObject({ exclude: [/^foo/, "bar"] }, "foo.js"); // false
 * ```
 */
ModuleFilenameHelpers.matchObject = (obj, str) => {
	if (obj.test && !ModuleFilenameHelpers.matchPart(str, obj.test)) {
		return false;
	}
	if (obj.include && !ModuleFilenameHelpers.matchPart(str, obj.include)) {
		return false;
	}
	if (obj.exclude && ModuleFilenameHelpers.matchPart(str, obj.exclude)) {
		return false;
	}
	return true;
};
