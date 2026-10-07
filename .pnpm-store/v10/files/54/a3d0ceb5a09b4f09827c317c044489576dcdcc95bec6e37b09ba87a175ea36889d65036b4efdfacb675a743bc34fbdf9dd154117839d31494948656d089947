/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */

/**
 * @param {Resolver} resolver resolver
 * @param {ResolveRequest} request string
 * @returns {string} inner request
 */
module.exports = function getInnerRequest(resolver, request) {
	if (
		typeof request.__innerRequest === "string" &&
		request.__innerRequest_request === request.request &&
		request.__innerRequest_relativePath === request.relativePath
	) {
		return request.__innerRequest;
	}
	/** @type {string | undefined} */
	let innerRequest;
	if (request.request) {
		innerRequest = request.request;
		if (/^\.\.?(?:\/|$)/.test(innerRequest) && request.relativePath) {
			innerRequest = resolver.join(request.relativePath, innerRequest);
		}
	} else {
		innerRequest = request.relativePath;
	}
	// eslint-disable-next-line camelcase
	request.__innerRequest_request = request.request;
	// eslint-disable-next-line camelcase
	request.__innerRequest_relativePath = request.relativePath;
	return (request.__innerRequest = /** @type {string} */ (innerRequest));
};
