import { VALID_ID_PREFIX, NULL_BYTE_PLACEHOLDER } from './constants.js';

// port from nanoid
// https://github.com/ai/nanoid
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
function nanoid(size = 21) {
	let id = "";
	let i = size;
	while (i--) {
		id += urlAlphabet[Math.random() * 64 | 0];
	}
	return id;
}

const RealDate = Date;
function random(seed) {
	const x = Math.sin(seed++) * 1e4;
	return x - Math.floor(x);
}
function shuffle(array, seed = RealDate.now()) {
	let length = array.length;
	while (length) {
		const index = Math.floor(random(seed) * length--);
		const previous = array[length];
		array[length] = array[index];
		array[index] = previous;
		++seed;
	}
	return array;
}

/**
* Get original stacktrace without source map support the most performant way.
* - Create only 1 stack frame.
* - Rewrite prepareStackTrace to bypass "support-stack-trace" (usually takes ~250ms).
*/
function createSimpleStackTrace(options) {
	const { message = "$$stack trace error", stackTraceLimit = 1 } = options || {};
	const limit = Error.stackTraceLimit;
	const prepareStackTrace = Error.prepareStackTrace;
	Error.stackTraceLimit = stackTraceLimit;
	Error.prepareStackTrace = (e) => e.stack;
	const err = new Error(message);
	const stackTrace = err.stack || "";
	Error.prepareStackTrace = prepareStackTrace;
	Error.stackTraceLimit = limit;
	return stackTrace;
}
function notNullish(v) {
	return v != null;
}
function assertTypes(value, name, types) {
	const receivedType = typeof value;
	const pass = types.includes(receivedType);
	if (!pass) {
		throw new TypeError(`${name} value must be ${types.join(" or ")}, received "${receivedType}"`);
	}
}
function isPrimitive(value) {
	return value === null || typeof value !== "function" && typeof value !== "object";
}
function slash(path) {
	return path.replace(/\\/g, "/");
}
const postfixRE = /[?#].*$/;
function cleanUrl(url) {
	return url.replace(postfixRE, "");
}
function splitFileAndPostfix(path) {
	const file = cleanUrl(path);
	return {
		file,
		postfix: path.slice(file.length)
	};
}
const externalRE = /^(?:[a-z]+:)?\/\//;
const isExternalUrl = (url) => externalRE.test(url);
/**
* Prepend `/@id/` and replace null byte so the id is URL-safe.
* This is prepended to resolved ids that are not valid browser
* import specifiers by the importAnalysis plugin.
*/
function wrapId(id) {
	return id.startsWith(VALID_ID_PREFIX) ? id : VALID_ID_PREFIX + id.replace("\0", NULL_BYTE_PLACEHOLDER);
}
/**
* Undo {@link wrapId}'s `/@id/` and null byte replacements.
*/
function unwrapId(id) {
	return id.startsWith(VALID_ID_PREFIX) ? id.slice(VALID_ID_PREFIX.length).replace(NULL_BYTE_PLACEHOLDER, "\0") : id;
}
function withTrailingSlash(path) {
	if (path.at(-1) !== "/") {
		return `${path}/`;
	}
	return path;
}
function filterOutComments(s) {
	const result = [];
	let commentState = "none";
	for (let i = 0; i < s.length; ++i) {
		if (commentState === "singleline") {
			if (s[i] === "\n") {
				commentState = "none";
			}
		} else if (commentState === "multiline") {
			if (s[i - 1] === "*" && s[i] === "/") {
				commentState = "none";
			}
		} else if (commentState === "none") {
			if (s[i] === "/" && s[i + 1] === "/") {
				commentState = "singleline";
			} else if (s[i] === "/" && s[i + 1] === "*") {
				commentState = "multiline";
				i += 2;
			} else {
				result.push(s[i]);
			}
		}
	}
	return result.join("");
}
const bareImportRE = /^(?![a-z]:)[\w@](?!.*:\/\/)/i;
function isBareImport(id) {
	return bareImportRE.test(id);
}
function toArray(array) {
	if (array === null || array === undefined) {
		array = [];
	}
	if (Array.isArray(array)) {
		return array;
	}
	return [array];
}
function isObject(item) {
	return item != null && typeof item === "object" && !Array.isArray(item);
}
function isFinalObj(obj) {
	return obj === Object.prototype || obj === Function.prototype || obj === RegExp.prototype;
}
function getType(value) {
	return Object.prototype.toString.apply(value).slice(8, -1);
}
function collectOwnProperties(obj, collector) {
	const collect = typeof collector === "function" ? collector : (key) => collector.add(key);
	Object.getOwnPropertyNames(obj).forEach(collect);
	Object.getOwnPropertySymbols(obj).forEach(collect);
}
function getOwnProperties(obj) {
	const ownProps = new Set();
	if (isFinalObj(obj)) {
		return [];
	}
	collectOwnProperties(obj, ownProps);
	return Array.from(ownProps);
}
const defaultCloneOptions = { forceWritable: false };
function deepClone(val, options = defaultCloneOptions) {
	const seen = new WeakMap();
	return clone(val, seen, options);
}
function clone(val, seen, options = defaultCloneOptions) {
	let k, out;
	if (seen.has(val)) {
		return seen.get(val);
	}
	if (Array.isArray(val)) {
		out = Array.from({ length: k = val.length });
		seen.set(val, out);
		while (k--) {
			out[k] = clone(val[k], seen, options);
		}
		return out;
	}
	if (Object.prototype.toString.call(val) === "[object Object]") {
		out = Object.create(Object.getPrototypeOf(val));
		seen.set(val, out);
		// we don't need properties from prototype
		const props = getOwnProperties(val);
		for (const k of props) {
			const descriptor = Object.getOwnPropertyDescriptor(val, k);
			if (!descriptor) {
				continue;
			}
			const cloned = clone(val[k], seen, options);
			if (options.forceWritable) {
				Object.defineProperty(out, k, {
					enumerable: descriptor.enumerable,
					configurable: true,
					writable: true,
					value: cloned
				});
			} else if ("get" in descriptor) {
				Object.defineProperty(out, k, {
					...descriptor,
					get() {
						return cloned;
					}
				});
			} else {
				Object.defineProperty(out, k, {
					...descriptor,
					value: cloned
				});
			}
		}
		return out;
	}
	return val;
}
function noop() {}
function objectAttr(source, path, defaultValue = undefined) {
	// a[3].b -> a.3.b
	const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
	let result = source;
	for (const p of paths) {
		result = new Object(result)[p];
		if (result === undefined) {
			return defaultValue;
		}
	}
	return result;
}
function createDefer() {
	let resolve = null;
	let reject = null;
	const p = new Promise((_resolve, _reject) => {
		resolve = _resolve;
		reject = _reject;
	});
	p.resolve = resolve;
	p.reject = reject;
	return p;
}
/**
* If code starts with a function call, will return its last index, respecting arguments.
* This will return 25 - last ending character of toMatch ")"
* Also works with callbacks
* ```
* toMatch({ test: '123' });
* toBeAliased('123')
* ```
*/
function getCallLastIndex(code) {
	let charIndex = -1;
	let inString = null;
	let startedBracers = 0;
	let endedBracers = 0;
	let beforeChar = null;
	while (charIndex <= code.length) {
		beforeChar = code[charIndex];
		charIndex++;
		const char = code[charIndex];
		const isCharString = char === "\"" || char === "'" || char === "`";
		if (isCharString && beforeChar !== "\\") {
			if (inString === char) {
				inString = null;
			} else if (!inString) {
				inString = char;
			}
		}
		if (!inString) {
			if (char === "(") {
				startedBracers++;
			}
			if (char === ")") {
				endedBracers++;
			}
		}
		if (startedBracers && endedBracers && startedBracers === endedBracers) {
			return charIndex;
		}
	}
	return null;
}
function isNegativeNaN(val) {
	if (!Number.isNaN(val)) {
		return false;
	}
	const f64 = new Float64Array(1);
	f64[0] = val;
	const u32 = new Uint32Array(f64.buffer);
	const isNegative = u32[1] >>> 31 === 1;
	return isNegative;
}
function toString(v) {
	return Object.prototype.toString.call(v);
}
function isPlainObject(val) {
	return toString(val) === "[object Object]" && (!val.constructor || val.constructor.name === "Object");
}
function isMergeableObject(item) {
	return isPlainObject(item) && !Array.isArray(item);
}
function ordinal(i) {
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
/**
* Deep merge :P
*
* Will merge objects only if they are plain
*
* Do not merge types - it is very expensive and usually it's better to case a type here
*/
function deepMerge(target, ...sources) {
	if (!sources.length) {
		return target;
	}
	const source = sources.shift();
	if (source === undefined) {
		return target;
	}
	if (isMergeableObject(target) && isMergeableObject(source)) {
		Object.keys(source).forEach((key) => {
			const _source = source;
			if (isMergeableObject(_source[key])) {
				if (!target[key]) {
					target[key] = {};
				}
				deepMerge(target[key], _source[key]);
			} else {
				target[key] = _source[key];
			}
		});
	}
	return deepMerge(target, ...sources);
}
function unique(array) {
	return Array.from(new Set(array));
}

export { assertTypes, cleanUrl, clone, createDefer, createSimpleStackTrace, deepClone, deepMerge, filterOutComments, getCallLastIndex, getOwnProperties, getType, isBareImport, isExternalUrl, isNegativeNaN, isObject, isPrimitive, nanoid, noop, notNullish, objectAttr, ordinal, shuffle, slash, splitFileAndPostfix, toArray, unique, unwrapId, withTrailingSlash, wrapId };
