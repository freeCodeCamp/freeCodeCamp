/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

const slashCode = "/".charCodeAt(0);
const backslashCode = "\\".charCodeAt(0);

/**
 * @param {string} path path
 * @param {string} parent parent path
 * @returns {boolean} true, if path is inside of parent
 */
const isInside = (path, parent) => {
	if (!path.startsWith(parent)) return false;
	if (path.length === parent.length) return true;
	const charCode = path.charCodeAt(parent.length);
	return charCode === slashCode || charCode === backslashCode;
};

module.exports = class RestrictionsPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {Set<string | RegExp>} restrictions restrictions
	 */
	constructor(source, restrictions) {
		this.source = source;
		this.restrictions = restrictions;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		resolver
			.getHook(this.source)
			.tapAsync("RestrictionsPlugin", (request, resolveContext, callback) => {
				if (typeof request.path === "string") {
					const { path } = request;
					for (const rule of this.restrictions) {
						if (typeof rule === "string") {
							if (!isInside(path, rule)) {
								if (resolveContext.log) {
									resolveContext.log(
										`${path} is not inside of the restriction ${rule}`,
									);
								}
								return callback(null, null);
							}
						} else if (!rule.test(path)) {
							if (resolveContext.log) {
								resolveContext.log(
									`${path} doesn't match the restriction ${rule}`,
								);
							}
							return callback(null, null);
						}
					}
				}

				callback();
			});
	}
};
