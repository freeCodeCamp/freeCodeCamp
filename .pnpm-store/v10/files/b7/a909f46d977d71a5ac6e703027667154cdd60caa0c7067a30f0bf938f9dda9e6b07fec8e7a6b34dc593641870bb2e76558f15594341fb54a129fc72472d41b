/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class LogInfoPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 */
	constructor(source) {
		this.source = source;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const { source } = this;
		resolver
			.getHook(this.source)
			.tapAsync("LogInfoPlugin", (request, resolveContext, callback) => {
				if (!resolveContext.log) return callback();
				const { log } = resolveContext;
				const prefix = `[${source}] `;
				if (request.path) {
					log(`${prefix}Resolving in directory: ${request.path}`);
				}
				if (request.request) {
					log(`${prefix}Resolving request: ${request.request}`);
				}
				if (request.module) log(`${prefix}Request is an module request.`);
				if (request.directory) log(`${prefix}Request is a directory request.`);
				if (request.query) {
					log(`${prefix}Resolving request query: ${request.query}`);
				}
				if (request.fragment) {
					log(`${prefix}Resolving request fragment: ${request.fragment}`);
				}
				if (request.descriptionFilePath) {
					log(
						`${prefix}Has description data from ${request.descriptionFilePath}`,
					);
				}
				if (request.relativePath) {
					log(
						`${prefix}Relative path from description file is: ${request.relativePath}`,
					);
				}
				callback();
			});
	}
};
