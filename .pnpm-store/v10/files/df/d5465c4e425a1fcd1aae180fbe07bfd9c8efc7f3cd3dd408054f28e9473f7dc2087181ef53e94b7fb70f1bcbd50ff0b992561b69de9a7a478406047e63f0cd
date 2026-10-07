/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Natsu @xiaoxiaojx
*/

"use strict";

// data URL scheme: "data:text/javascript;charset=utf-8;base64,some-string"
// http://www.ietf.org/rfc/rfc2397.txt
const URIRegEx = /^data:([^;,]+)?((?:;[^;,]+)*?)(?:;(base64)?)?,(.*)$/i;

/**
 * Decodes the provided uri.
 * @param {string} uri data URI
 * @returns {Buffer | null} decoded data
 */
const decodeDataURI = (uri) => {
	const match = URIRegEx.exec(uri);
	if (!match) return null;

	const isBase64 = match[3];
	const body = match[4];

	if (isBase64) {
		return Buffer.from(body, "base64");
	}

	// CSS allows to use `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" style="stroke: rgb(223,224,225); stroke-width: 2px; fill: none; stroke-dasharray: 6px 3px" /></svg>`
	// so we return original body if we can't `decodeURIComponent`
	try {
		return Buffer.from(decodeURIComponent(body), "ascii");
	} catch (_) {
		return Buffer.from(body, "ascii");
	}
};

module.exports = {
	URIRegEx,
	decodeDataURI
};
