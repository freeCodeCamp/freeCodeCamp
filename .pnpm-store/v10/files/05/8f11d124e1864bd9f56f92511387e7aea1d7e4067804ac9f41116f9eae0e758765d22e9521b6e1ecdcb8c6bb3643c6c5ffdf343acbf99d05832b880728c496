/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const forEachBail = require("./forEachBail");
const { PathType, getType } = require("./util/path");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveContext} ResolveContext */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {import("./Resolver").ResolveCallback} ResolveCallback */
/** @typedef {string | string[] | false} Alias */
/** @typedef {{ alias: Alias, name: string, onlyModule?: boolean }} AliasOption */

/** @typedef {(err?: null | Error, result?: null | ResolveRequest) => void} InnerCallback */
/**
 * @param {Resolver} resolver resolver
 * @param {AliasOption[]} options options
 * @param {ResolveStepHook} target target
 * @param {ResolveRequest} request request
 * @param {ResolveContext} resolveContext resolve context
 * @param {InnerCallback} callback callback
 * @returns {void}
 */
function aliasResolveHandler(
	resolver,
	options,
	target,
	request,
	resolveContext,
	callback,
) {
	const innerRequest = request.request || request.path;
	if (!innerRequest) return callback();

	/**
	 * @param {string} maybeAbsolutePath path
	 * @returns {null | string} absolute path with slash ending
	 */
	const getAbsolutePathWithSlashEnding = (maybeAbsolutePath) => {
		const type = getType(maybeAbsolutePath);
		if (type === PathType.AbsolutePosix || type === PathType.AbsoluteWin) {
			return resolver.join(maybeAbsolutePath, "_").slice(0, -1);
		}
		return null;
	};
	/**
	 * @param {string} path path
	 * @param {string} maybeSubPath sub path
	 * @returns {boolean} true, if path is sub path
	 */
	const isSubPath = (path, maybeSubPath) => {
		const absolutePath = getAbsolutePathWithSlashEnding(maybeSubPath);
		if (!absolutePath) return false;
		return path.startsWith(absolutePath);
	};

	forEachBail(
		options,
		(item, callback) => {
			/** @type {boolean} */
			let shouldStop = false;

			const matchRequest =
				innerRequest === item.name ||
				(!item.onlyModule &&
					(request.request
						? innerRequest.startsWith(`${item.name}/`)
						: isSubPath(innerRequest, item.name)));

			const splitName = item.name.split("*");
			const matchWildcard = !item.onlyModule && splitName.length === 2;

			if (matchRequest || matchWildcard) {
				/**
				 * @param {Alias} alias alias
				 * @param {(err?: null | Error, result?: null | ResolveRequest) => void} callback callback
				 * @returns {void}
				 */
				const resolveWithAlias = (alias, callback) => {
					if (alias === false) {
						/** @type {ResolveRequest} */
						const ignoreObj = {
							...request,
							path: false,
						};
						if (typeof resolveContext.yield === "function") {
							resolveContext.yield(ignoreObj);
							return callback(null, null);
						}
						return callback(null, ignoreObj);
					}

					let newRequestStr;

					const [prefix, suffix] = splitName;
					if (
						matchWildcard &&
						innerRequest.startsWith(prefix) &&
						innerRequest.endsWith(suffix)
					) {
						const match = innerRequest.slice(
							prefix.length,
							innerRequest.length - suffix.length,
						);
						newRequestStr = alias.toString().replace("*", match);
					}

					if (
						matchRequest &&
						innerRequest !== alias &&
						!innerRequest.startsWith(`${alias}/`)
					) {
						/** @type {string} */
						const remainingRequest = innerRequest.slice(item.name.length);
						newRequestStr = alias + remainingRequest;
					}

					if (newRequestStr !== undefined) {
						shouldStop = true;
						/** @type {ResolveRequest} */
						const obj = {
							...request,
							request: newRequestStr,
							fullySpecified: false,
						};
						return resolver.doResolve(
							target,
							obj,
							`aliased with mapping '${item.name}': '${alias}' to '${newRequestStr}'`,
							resolveContext,
							(err, result) => {
								if (err) return callback(err);
								if (result) return callback(null, result);
								return callback();
							},
						);
					}
					return callback();
				};

				/**
				 * @param {(null | Error)=} err error
				 * @param {(null | ResolveRequest)=} result result
				 * @returns {void}
				 */
				const stoppingCallback = (err, result) => {
					if (err) return callback(err);

					if (result) return callback(null, result);
					// Don't allow other aliasing or raw request
					if (shouldStop) return callback(null, null);
					return callback();
				};

				if (Array.isArray(item.alias)) {
					return forEachBail(item.alias, resolveWithAlias, stoppingCallback);
				}
				return resolveWithAlias(item.alias, stoppingCallback);
			}

			return callback();
		},
		callback,
	);
}

module.exports.aliasResolveHandler = aliasResolveHandler;
