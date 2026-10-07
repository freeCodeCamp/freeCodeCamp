/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const { extname } = require("path");
const db = require("mime-db");

/**
 * RegExp to match type in RFC 6838
 *
 * type-name = restricted-name
 * subtype-name = restricted-name
 * restricted-name = restricted-name-first *126restricted-name-chars
 * restricted-name-first  = ALPHA / DIGIT
 * restricted-name-chars  = ALPHA / DIGIT / "!" / "#" / "$" / "&" / "-" / "^" / "_"
 * restricted-name-chars =/ "." ; Characters before first dot always specify a facet name
 * restricted-name-chars =/ "+" ; Characters after last plus always specify a structured syntax suffix
 * ALPHA =  %x41-5A / %x61-7A   ; A-Z / a-z
 * DIGIT =  %x30-39             ; 0-9
 */
const TYPE_REGEXP =
	/^ *(([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126})) *(?:;.*)?$/;
const extensions = Object.create(null);
const types = Object.create(null);

// Score RFC facets (see https://tools.ietf.org/html/rfc6838#section-3)

/** @type {Record<string, number>} */
const FACET_SCORES = {
	"prs.": 100,
	"x-": 200,
	"x.": 300,
	"vnd.": 400,
	default: 900
};

/** @typedef {"nginx" | "apache" | "iana" | "default"} SourceScore */

// Score mime source (Logic originally from `jshttp/mime-types` module)
/** @type {Record<SourceScore, number>} */
const SOURCE_SCORES = {
	nginx: 10,
	apache: 20,
	iana: 40,
	default: 30
};

/** @type {Record<string, number>} */
const TYPE_SCORES = {
	// prefer application/xml over text/xml
	// prefer application/rtf over text/rtf
	application: 1,

	// prefer font/woff over application/font-woff
	font: 2,

	// prefer video/mp4 over audio/mp4 over application/mp4
	// See https://www.rfc-editor.org/rfc/rfc4337.html#section-2
	audio: 2,
	video: 3,

	default: 0
};

/**
 * @param {string} mimeType mime type
 * @param {SourceScore=} source source
 * @returns {number} min score
 */
function mimeScore(mimeType, source = "default") {
	if (mimeType === "application/octet-stream") {
		return 0;
	}

	const [type, subtype] = mimeType.split("/");

	const facet = subtype.replace(/(\.|x-).*/, "$1");

	const facetScore = FACET_SCORES[facet] || FACET_SCORES.default;
	const sourceScore = SOURCE_SCORES[source] || SOURCE_SCORES.default;
	const typeScore = TYPE_SCORES[type] || TYPE_SCORES.default;

	// All else being equal prefer shorter types
	const lengthScore = 1 - mimeType.length / 100;

	return facetScore + sourceScore + typeScore + lengthScore;
}

/**
 * @param {string} ext extension
 * @param {string} type0 the first type
 * @param {string} type1 the second type
 * @returns {string} preferred type
 */
const preferredType = (ext, type0, type1) => {
	const score0 = type0 ? mimeScore(type0, db[type0].source) : 0;
	const score1 = type1 ? mimeScore(type1, db[type1].source) : 0;

	return score0 > score1 ? type0 : type1;
};

/**
 * @param {Record<string, readonly string[]>} extensions extensions
 * @param {Record<string, string>} types types
 */
const populate = (extensions, types) => {
	for (const type of Object.keys(db)) {
		const mime = db[type];
		const foundExtensions = mime.extensions;

		if (!foundExtensions || foundExtensions.length === 0) {
			continue;
		}

		// mime -> extensions
		extensions[type] = foundExtensions;

		// extension -> mime
		for (let i = 0; i < foundExtensions.length; i++) {
			const extension = foundExtensions[i];

			types[extension] = preferredType(extension, types[extension], type);
		}
	}
};

populate(extensions, types);

/**
 * Get the default extension for a MIME type.
 * @param {string} type type
 * @returns {undefined | string} resolve extension
 */
const extension = (type) => {
	if (!type) {
		return;
	}

	const match = TYPE_REGEXP.exec(type);

	if (!match) {
		return;
	}

	const possibleExtensions = extensions[match[1].toLowerCase()];

	if (!possibleExtensions || possibleExtensions.length === 0) {
		return;
	}

	return possibleExtensions[0];
};

/**
 * Lookup the MIME type for a file path/extension.
 * @param {string} path path
 * @returns {undefined | string} resolved MIME type
 */
const lookup = (path) => {
	if (!path) {
		return;
	}

	// get the extension ("ext" or ".ext" or full path)
	const extension = extname(`x.${path}`).toLowerCase().slice(1);

	if (!extension) {
		return;
	}

	return types[extension];
};

module.exports = { extension, lookup };
