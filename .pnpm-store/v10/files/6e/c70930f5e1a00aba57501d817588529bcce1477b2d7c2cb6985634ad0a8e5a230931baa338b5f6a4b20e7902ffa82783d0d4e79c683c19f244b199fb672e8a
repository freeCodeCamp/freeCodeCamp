/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const forEachBail = require("./forEachBail");
const getPaths = require("./getPaths");
const { PathType, getType } = require("./util/path");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class SymlinkPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, target) {
		this.source = source;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		const fs = resolver.fileSystem;
		resolver
			.getHook(this.source)
			.tapAsync("SymlinkPlugin", (request, resolveContext, callback) => {
				if (request.ignoreSymlinks) return callback();
				const pathsResult = getPaths(/** @type {string} */ (request.path));
				const pathSegments = pathsResult.segments;
				const { paths } = pathsResult;

				let containsSymlink = false;
				let idx = -1;
				forEachBail(
					paths,
					/**
					 * @param {string} path path
					 * @param {(err?: null | Error, result?: null | number) => void} callback callback
					 * @returns {void}
					 */
					(path, callback) => {
						idx++;
						if (resolveContext.fileDependencies) {
							resolveContext.fileDependencies.add(path);
						}
						fs.readlink(path, (err, result) => {
							if (!err && result) {
								pathSegments[idx] = /** @type {string} */ (result);
								containsSymlink = true;
								// Shortcut when absolute symlink found
								const resultType = getType(result.toString());
								if (
									resultType === PathType.AbsoluteWin ||
									resultType === PathType.AbsolutePosix
								) {
									return callback(null, idx);
								}
							}
							callback();
						});
					},
					/**
					 * @param {null | Error=} err error
					 * @param {null | number=} idx result
					 * @returns {void}
					 */
					(err, idx) => {
						if (!containsSymlink) return callback();
						const resultSegments =
							typeof idx === "number"
								? pathSegments.slice(0, idx + 1)
								: [...pathSegments];
						const result = resultSegments.reduceRight((a, b) =>
							resolver.join(a, b),
						);
						/** @type {ResolveRequest} */
						const obj = {
							...request,
							path: result,
						};
						resolver.doResolve(
							target,
							obj,
							`resolved symlink to ${result}`,
							resolveContext,
							callback,
						);
					},
				);
			});
	}
};
