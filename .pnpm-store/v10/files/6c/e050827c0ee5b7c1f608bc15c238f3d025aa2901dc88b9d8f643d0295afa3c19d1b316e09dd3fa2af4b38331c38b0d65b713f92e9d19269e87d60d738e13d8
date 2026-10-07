/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { contextify } = require("./util/identifier");

/** @typedef {import("./util/identifier").AssociatedObjectForCache} AssociatedObjectForCache */

/**
 * Shortens absolute or verbose request strings so diagnostics and stats output
 * can be rendered relative to a chosen base directory.
 */
class RequestShortener {
	/**
	 * Binds a context-aware shortening function to the provided directory and
	 * optional cache owner.
	 * @param {string} dir the directory
	 * @param {AssociatedObjectForCache=} associatedObjectForCache an object to which the cache will be attached
	 */
	constructor(dir, associatedObjectForCache) {
		this.contextify = contextify.bindContextCache(
			dir,
			associatedObjectForCache
		);
	}

	/**
	 * Returns a request string rewritten relative to the configured directory
	 * when one is provided.
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
