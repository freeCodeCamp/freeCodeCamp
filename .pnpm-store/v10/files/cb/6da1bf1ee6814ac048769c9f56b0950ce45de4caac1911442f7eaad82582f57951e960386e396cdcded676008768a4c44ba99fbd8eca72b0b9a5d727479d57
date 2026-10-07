/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("../util/fs").JsonValue} JsonValue */

// Inspired by https://github.com/npm/json-parse-even-better-errors

// Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
// because the buffer-to-string conversion in `fs.readFileSync()`
// translates it to FEFF, the UTF-16 BOM.
/**
 * @param {string | Buffer} txt text
 * @returns {string} text without BOM
 */
const stripBOM = (txt) => String(txt).replace(/^\uFEFF/, "");

class JSONParseError extends SyntaxError {
	/**
	 * @param {Error} err err
	 * @param {EXPECTED_ANY} raw raw
	 * @param {string} txt text
	 * @param {number=} context context
	 * @param {EXPECTED_FUNCTION=} caller caller
	 */
	constructor(err, raw, txt, context = 20, caller = parseJson) {
		let originalMessage = err.message;
		/** @type {string} */
		let message;
		/** @type {number} */
		let position;

		if (typeof raw !== "string") {
			message = `Cannot parse ${Array.isArray(raw) && raw.length === 0 ? "an empty array" : String(raw)}`;
			position = 0;
		} else if (!txt) {
			message = `${originalMessage} while parsing empty string`;
			position = 0;
		} else {
			// Node 20 puts single quotes around the token and a comma after it
			const UNEXPECTED_TOKEN = /^Unexpected token '?(.)'?(,)? /i;
			const badTokenMatch = originalMessage.match(UNEXPECTED_TOKEN);
			const badIndexMatch = originalMessage.match(/ position\s+(\d+)/i);

			if (badTokenMatch) {
				const h = badTokenMatch[1].charCodeAt(0).toString(16).toUpperCase();
				const hex = `0x${h.length % 2 ? "0" : ""}${h}`;

				originalMessage = originalMessage.replace(
					UNEXPECTED_TOKEN,
					`Unexpected token ${JSON.stringify(badTokenMatch[1])} (${hex})$2 `
				);
			}

			/** @type {number | undefined} */
			let errIdx;

			if (badIndexMatch) {
				errIdx = Number(badIndexMatch[1]);
			} else if (
				// doesn't happen in Node 22+
				/^Unexpected end of JSON.*/i.test(originalMessage)
			) {
				errIdx = txt.length - 1;
			}

			if (errIdx === undefined) {
				message = `${originalMessage} while parsing '${txt.slice(0, context * 2)}'`;
				position = 0;
			} else {
				const start = errIdx <= context ? 0 : errIdx - context;
				const end =
					errIdx + context >= txt.length ? txt.length : errIdx + context;
				const slice = `${start ? "..." : ""}${txt.slice(start, end)}${end === txt.length ? "" : "..."}`;

				message = `${originalMessage} while parsing ${txt === slice ? "" : "near "}${JSON.stringify(slice)}`;
				position = errIdx;
			}
		}

		super(message);

		this.name = "JSONParseError";
		this.systemError = err;
		this.position = position;

		Error.captureStackTrace(this, caller || this.constructor);
	}
}

/**
 * @template [R=JsonValue]
 * @callback ParseJsonFn
 * @param {string} raw text
 * @param {(this: EXPECTED_ANY, key: string, value: EXPECTED_ANY) => EXPECTED_ANY=} reviver reviver
 * @returns {R} parsed JSON
 */

/** @type {ParseJsonFn} */
const parseJson = (raw, reviver) => {
	const txt = stripBOM(raw);

	try {
		return JSON.parse(txt, reviver);
	} catch (err) {
		throw new JSONParseError(/** @type {Error} */ (err), raw, txt);
	}
};

module.exports = parseJson;
