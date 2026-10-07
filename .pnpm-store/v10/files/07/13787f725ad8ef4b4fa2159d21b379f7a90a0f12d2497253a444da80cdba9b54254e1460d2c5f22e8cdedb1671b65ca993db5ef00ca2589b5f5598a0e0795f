/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const path = require("path");
const DescriptionFileUtils = require("./DescriptionFileUtils");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").JsonObject} JsonObject */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

/** @typedef {{ name: string | string[], forceRelative: boolean }} MainFieldOptions */

const alreadyTriedMainField = Symbol("alreadyTriedMainField");

module.exports = class MainFieldPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {MainFieldOptions} options options
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, options, target) {
		this.source = source;
		this.options = options;
		this.target = target;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("MainFieldPlugin", (request, resolveContext, callback) => {
				if (
					request.path !== request.descriptionFileRoot ||
					/** @type {ResolveRequest & { [alreadyTriedMainField]?: string }} */
					(request)[alreadyTriedMainField] === request.descriptionFilePath ||
					!request.descriptionFilePath
				) {
					return callback();
				}
				const filename = path.basename(request.descriptionFilePath);
				let mainModule =
					/** @type {string | null | undefined} */
					(
						DescriptionFileUtils.getField(
							/** @type {JsonObject} */ (request.descriptionFileData),
							this.options.name,
						)
					);

				if (
					!mainModule ||
					typeof mainModule !== "string" ||
					mainModule === "." ||
					mainModule === "./"
				) {
					return callback();
				}
				if (this.options.forceRelative && !/^\.\.?\//.test(mainModule)) {
					mainModule = `./${mainModule}`;
				}
				/** @type {ResolveRequest & { [alreadyTriedMainField]?: string }} */
				const obj = {
					...request,
					request: mainModule,
					module: false,
					directory: mainModule.endsWith("/"),
					[alreadyTriedMainField]: request.descriptionFilePath,
				};
				return resolver.doResolve(
					target,
					obj,
					`use ${mainModule} from ${this.options.name} in ${filename}`,
					resolveContext,
					callback,
				);
			});
	}
};
