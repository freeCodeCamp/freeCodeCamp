/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

/** @typedef {import("./fs").InputFileSystem} InputFileSystem */
/** @typedef {(error: Error|null, result?: Buffer) => void} ErrorFirstCallback */

const backSlashCharCode = "\\".charCodeAt(0);
const slashCharCode = "/".charCodeAt(0);
const aLowerCaseCharCode = "a".charCodeAt(0);
const zLowerCaseCharCode = "z".charCodeAt(0);
const aUpperCaseCharCode = "A".charCodeAt(0);
const zUpperCaseCharCode = "Z".charCodeAt(0);
const _0CharCode = "0".charCodeAt(0);
const _9CharCode = "9".charCodeAt(0);
const plusCharCode = "+".charCodeAt(0);
const hyphenCharCode = "-".charCodeAt(0);
const colonCharCode = ":".charCodeAt(0);
const hashCharCode = "#".charCodeAt(0);
const queryCharCode = "?".charCodeAt(0);
/**
 * Get scheme if specifier is an absolute URL specifier
 * e.g. Absolute specifiers like 'file:///user/webpack/index.js'
 * https://tools.ietf.org/html/rfc3986#section-3.1
 * @param {string} specifier specifier
 * @returns {string|undefined} scheme if absolute URL specifier provided
 */
function getScheme(specifier) {
	const start = specifier.charCodeAt(0);

	// First char maybe only a letter
	if (
		(start < aLowerCaseCharCode || start > zLowerCaseCharCode) &&
		(start < aUpperCaseCharCode || start > zUpperCaseCharCode)
	) {
		return;
	}

	let i = 1;
	let ch = specifier.charCodeAt(i);

	while (
		(ch >= aLowerCaseCharCode && ch <= zLowerCaseCharCode) ||
		(ch >= aUpperCaseCharCode && ch <= zUpperCaseCharCode) ||
		(ch >= _0CharCode && ch <= _9CharCode) ||
		ch === plusCharCode ||
		ch === hyphenCharCode
	) {
		if (++i === specifier.length) return;
		ch = specifier.charCodeAt(i);
	}

	// Scheme must end with colon
	if (ch !== colonCharCode) return;

	// Check for Windows absolute path
	// https://url.spec.whatwg.org/#url-miscellaneous
	if (i === 1) {
		const nextChar = i + 1 < specifier.length ? specifier.charCodeAt(i + 1) : 0;
		if (
			nextChar === 0 ||
			nextChar === backSlashCharCode ||
			nextChar === slashCharCode ||
			nextChar === hashCharCode ||
			nextChar === queryCharCode
		) {
			return;
		}
	}

	return specifier.slice(0, i).toLowerCase();
}

/**
 * @param {string} specifier specifier
 * @returns {string | null | undefined} protocol if absolute URL specifier provided
 */
function getProtocol(specifier) {
	const scheme = getScheme(specifier);
	return scheme === undefined ? undefined : `${scheme}:`;
}

module.exports.getScheme = getScheme;
module.exports.getProtocol = getProtocol;
