/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { contextify } = require("./util/identifier");

class RequestShortener {
	/**
	 * @param {string} dir the directory
	 * @param {object=} associatedObjectForCache an object to which the cache will be attached
	 */
	constructor(dir, associatedObjectForCache) {
		this.contextify = contextify.bindContextCache(
			dir,
			associatedObjectForCache
		);
	}

	/**
	 * @param {string | undefined | null} request the request to shorten
	 * @returns {string | undefined | null} the shortened request
	 */
	shorten(request) {
		if (!request) {
			return request;
		}
		return this.contextify(request);
	}
}

module.exports = RequestShortener;
