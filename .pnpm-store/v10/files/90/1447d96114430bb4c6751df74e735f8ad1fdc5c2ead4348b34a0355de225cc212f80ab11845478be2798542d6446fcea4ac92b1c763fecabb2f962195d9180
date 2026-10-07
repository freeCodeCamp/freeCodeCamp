import { splitCookiesString } from "set-cookie-parser";
//#region src/utils/normalizeHeaderName.ts
const HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function normalizeHeaderName(name) {
	if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === "") throw new TypeError("Invalid character in header field name");
	return name.trim().toLowerCase();
}
//#endregion
//#region src/utils/normalizeHeaderValue.ts
const charCodesToRemove = [
	String.fromCharCode(10),
	String.fromCharCode(13),
	String.fromCharCode(9),
	String.fromCharCode(32)
];
const HEADER_VALUE_REMOVE_REGEXP = new RegExp(`(^[${charCodesToRemove.join("")}]|$[${charCodesToRemove.join("")}])`, "g");
/**
* Normalize the given header value.
* @see https://fetch.spec.whatwg.org/#concept-header-value-normalize
*/
function normalizeHeaderValue(value) {
	return value.replace(HEADER_VALUE_REMOVE_REGEXP, "");
}
//#endregion
//#region src/utils/isValidHeaderName.ts
/**
* Validate the given header name.
* @see https://fetch.spec.whatwg.org/#header-name
*/
function isValidHeaderName(value) {
	if (typeof value !== "string") return false;
	if (value.length === 0) return false;
	for (let i = 0; i < value.length; i++) {
		const character = value.charCodeAt(i);
		if (character > 127 || !isToken(character)) return false;
	}
	return true;
}
function isToken(value) {
	return ![
		127,
		32,
		"(",
		")",
		"<",
		">",
		"@",
		",",
		";",
		":",
		"\\",
		"\"",
		"/",
		"[",
		"]",
		"?",
		"=",
		"{",
		"}"
	].includes(value);
}
//#endregion
//#region src/utils/isValidHeaderValue.ts
/**
* Validate the given header value.
* @see https://fetch.spec.whatwg.org/#header-value
*/
function isValidHeaderValue(value) {
	if (typeof value !== "string") return false;
	if (value.trim() !== value) return false;
	for (let i = 0; i < value.length; i++) {
		const character = value.charCodeAt(i);
		if (character === 0 || character === 10 || character === 13) return false;
	}
	return true;
}
//#endregion
//#region src/Headers.ts
let _Symbol$toStringTag;
const NORMALIZED_HEADERS = Symbol("normalizedHeaders");
const RAW_HEADER_NAMES = Symbol("rawHeaderNames");
const HEADER_VALUE_DELIMITER = ", ";
var Headers = class Headers {
	constructor(init) {
		this[NORMALIZED_HEADERS] = {};
		this[RAW_HEADER_NAMES] = /* @__PURE__ */ new Map();
		this[_Symbol$toStringTag] = "Headers";
		/**
		* @note Cannot necessarily check if the `init` is an instance of the
		* `Headers` because that class may not be defined in Node or jsdom.
		*/
		if (["Headers", "HeadersPolyfill"].includes(init?.constructor?.name) || init instanceof Headers || typeof globalThis.Headers !== "undefined" && init instanceof globalThis.Headers) init.forEach((value, name) => {
			this.append(name, value);
		}, this);
		else if (Array.isArray(init)) init.forEach(([name, value]) => {
			this.append(name, Array.isArray(value) ? value.join(HEADER_VALUE_DELIMITER) : value);
		});
		else if (init) Object.getOwnPropertyNames(init).forEach((name) => {
			const value = init[name];
			this.append(name, Array.isArray(value) ? value.join(HEADER_VALUE_DELIMITER) : value);
		});
	}
	[(_Symbol$toStringTag = Symbol.toStringTag, Symbol.iterator)]() {
		return this.entries();
	}
	*keys() {
		for (const [name] of this.entries()) yield name;
	}
	*values() {
		for (const [, value] of this.entries()) yield value;
	}
	*entries() {
		let sortedKeys = Object.keys(this[NORMALIZED_HEADERS]).sort((a, b) => a.localeCompare(b));
		for (const name of sortedKeys) if (name === "set-cookie") for (const value of this.getSetCookie()) yield [name, value];
		else yield [name, this.get(name)];
	}
	/**
	* Returns a boolean stating whether a `Headers` object contains a certain header.
	*/
	has(name) {
		if (!isValidHeaderName(name)) throw new TypeError(`Invalid header name "${name}"`);
		return this[NORMALIZED_HEADERS].hasOwnProperty(normalizeHeaderName(name));
	}
	/**
	* Returns a `ByteString` sequence of all the values of a header with a given name.
	*/
	get(name) {
		if (!isValidHeaderName(name)) throw TypeError(`Invalid header name "${name}"`);
		return this[NORMALIZED_HEADERS][normalizeHeaderName(name)] ?? null;
	}
	/**
	* Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
	*/
	set(name, value) {
		if (!isValidHeaderName(name) || !isValidHeaderValue(value)) return;
		const normalizedName = normalizeHeaderName(name);
		const normalizedValue = normalizeHeaderValue(value);
		this[NORMALIZED_HEADERS][normalizedName] = normalizeHeaderValue(normalizedValue);
		this[RAW_HEADER_NAMES].set(normalizedName, name);
	}
	/**
	* Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
	*/
	append(name, value) {
		if (!isValidHeaderName(name) || !isValidHeaderValue(value)) return;
		const normalizedName = normalizeHeaderName(name);
		const normalizedValue = normalizeHeaderValue(value);
		let resolvedValue = this.has(normalizedName) ? `${this.get(normalizedName)}, ${normalizedValue}` : normalizedValue;
		this.set(name, resolvedValue);
	}
	/**
	* Deletes a header from the `Headers` object.
	*/
	delete(name) {
		if (!isValidHeaderName(name)) return;
		if (!this.has(name)) return;
		const normalizedName = normalizeHeaderName(name);
		delete this[NORMALIZED_HEADERS][normalizedName];
		this[RAW_HEADER_NAMES].delete(normalizedName);
	}
	/**
	* Traverses the `Headers` object,
	* calling the given callback for each header.
	*/
	forEach(callback, thisArg) {
		for (const [name, value] of this.entries()) callback.call(thisArg, value, name, this);
	}
	/**
	* Returns an array containing the values
	* of all Set-Cookie headers associated
	* with a response
	*/
	getSetCookie() {
		const setCookieHeader = this.get("set-cookie");
		if (setCookieHeader === null) return [];
		if (setCookieHeader === "") return [""];
		return splitCookiesString(setCookieHeader);
	}
};
//#endregion
//#region src/getRawHeaders.ts
/**
* Returns the object of all raw headers.
*/
function getRawHeaders(headers) {
	const rawHeaders = {};
	for (const [name, value] of headers.entries()) rawHeaders[headers[RAW_HEADER_NAMES].get(name)] = value;
	return rawHeaders;
}
//#endregion
//#region src/transformers/headersToList.ts
function headersToList(headers) {
	const headersList = [];
	headers.forEach((value, name) => {
		const resolvedValue = value.includes(",") ? value.split(",").map((value) => value.trim()) : value;
		headersList.push([name, resolvedValue]);
	});
	return headersList;
}
//#endregion
//#region src/transformers/headersToString.ts
/**
* Converts a given `Headers` instance to its string representation.
*/
function headersToString(headers) {
	return headersToList(headers).map(([name, value]) => {
		return `${name}: ${[].concat(value).join(", ")}`;
	}).join("\r\n");
}
//#endregion
//#region src/transformers/headersToObject.ts
const singleValueHeaders = ["user-agent"];
/**
* Converts a given `Headers` instance into a plain object.
* Respects headers with multiple values.
*/
function headersToObject(headers) {
	const headersObject = {};
	headers.forEach((value, name) => {
		headersObject[name] = !singleValueHeaders.includes(name.toLowerCase()) && value.includes(",") ? value.split(",").map((s) => s.trim()) : value;
	});
	return headersObject;
}
//#endregion
//#region src/transformers/stringToHeaders.ts
/**
* Converts a string representation of headers (i.e. from XMLHttpRequest)
* to a new `Headers` instance.
*/
function stringToHeaders(str) {
	return str.trim().split(/[\r\n]+/).reduce((headers, line) => {
		if (line.trim() === "") return headers;
		const parts = line.split(": ");
		const name = parts.shift();
		const value = parts.join(": ");
		headers.append(name, value);
		return headers;
	}, new Headers());
}
//#endregion
//#region src/transformers/listToHeaders.ts
function listToHeaders(list) {
	const headers = new Headers();
	list.forEach(([name, value]) => {
		[].concat(value).forEach((value) => {
			headers.append(name, value);
		});
	});
	return headers;
}
//#endregion
//#region src/transformers/reduceHeadersObject.ts
/**
* Reduces given headers object instnace.
*/
function reduceHeadersObject(headers, reducer, initialState) {
	return Object.keys(headers).reduce((nextHeaders, name) => {
		return reducer(nextHeaders, name, headers[name]);
	}, initialState);
}
//#endregion
//#region src/transformers/objectToHeaders.ts
/**
* Converts a given headers object to a new `Headers` instance.
*/
function objectToHeaders(headersObject) {
	return reduceHeadersObject(headersObject, (headers, name, value) => {
		[].concat(value).filter(Boolean).forEach((value) => {
			headers.append(name, value);
		});
		return headers;
	}, new Headers());
}
//#endregion
//#region src/transformers/flattenHeadersList.ts
function flattenHeadersList(list) {
	return list.map(([name, values]) => {
		return [name, [].concat(values).join(", ")];
	});
}
//#endregion
//#region src/transformers/flattenHeadersObject.ts
function flattenHeadersObject(headersObject) {
	return reduceHeadersObject(headersObject, (headers, name, value) => {
		headers[name] = [].concat(value).join(", ");
		return headers;
	}, {});
}
//#endregion
export { Headers, flattenHeadersList, flattenHeadersObject, getRawHeaders, headersToList, headersToObject, headersToString, listToHeaders, objectToHeaders, reduceHeadersObject, stringToHeaders };

//# sourceMappingURL=index.mjs.map