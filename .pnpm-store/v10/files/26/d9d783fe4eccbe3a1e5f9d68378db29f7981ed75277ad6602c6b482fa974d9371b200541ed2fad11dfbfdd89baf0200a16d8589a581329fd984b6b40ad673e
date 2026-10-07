/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const forEachBail = require("./forEachBail");
const getPaths = require("./getPaths");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {import("./Resolver").ResolveContext} ResolveContext */
/** @typedef {(err?: null | Error, result?: null | ResolveRequest) => void} InnerCallback */
/**
 * @param {Resolver} resolver resolver
 * @param {string[]} directories directories
 * @param {ResolveStepHook} target target
 * @param {ResolveRequest} request request
 * @param {ResolveContext} resolveContext resolve context
 * @param {InnerCallback} callback callback
 * @returns {void}
 */
function modulesResolveHandler(
	resolver,
	directories,
	target,
	request,
	resolveContext,
	callback,
) {
	const fs = resolver.fileSystem;
	const addrs = getPaths(/** @type {string} */ (request.path))
		.paths.map((path) =>
			directories.map((directory) => resolver.join(path, directory)),
		)
		.reduce((array, path) => {
			array.push(...path);
			return array;
		}, []);
	forEachBail(
		addrs,
		/**
		 * @param {string} addr addr
		 * @param {(err?: null | Error, result?: null | ResolveRequest) => void} callback callback
		 * @returns {void}
		 */
		(addr, callback) => {
			fs.stat(addr, (err, stat) => {
				if (!err && stat && stat.isDirectory()) {
					/** @type {ResolveRequest} */
					const obj = {
						...request,
						path: addr,
						request: `./${request.request}`,
						module: false,
					};
					const message = `looking for modules in ${addr}`;
					return resolver.doResolve(
						target,
						obj,
						message,
						resolveContext,
						callback,
					);
				}
				if (resolveContext.log) {
					resolveContext.log(`${addr} doesn't exist or is not a directory`);
				}
				if (resolveContext.missingDependencies) {
					resolveContext.missingDependencies.add(addr);
				}
				return callback();
			});
		},
		callback,
	);
}

module.exports = {
	modulesResolveHandler,
};
