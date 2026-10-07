/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DescriptionFileUtils = require("./DescriptionFileUtils");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").JsonObject} JsonObject */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

const slashCode = "/".charCodeAt(0);

module.exports = class SelfReferencePlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {string | string[]} fieldNamePath name path
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, fieldNamePath, target) {
		this.source = source;
		this.target = target;
		this.fieldName = fieldNamePath;
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("SelfReferencePlugin", (request, resolveContext, callback) => {
				if (!request.descriptionFilePath) return callback();

				const req = request.request;
				if (!req) return callback();

				// Feature is only enabled when an exports field is present
				const exportsField = DescriptionFileUtils.getField(
					/** @type {JsonObject} */ (request.descriptionFileData),
					this.fieldName,
				);
				if (!exportsField) return callback();

				const name = DescriptionFileUtils.getField(
					/** @type {JsonObject} */ (request.descriptionFileData),
					"name",
				);
				if (typeof name !== "string") return callback();

				if (
					req.startsWith(name) &&
					(req.length === name.length ||
						req.charCodeAt(name.length) === slashCode)
				) {
					const remainingRequest = `.${req.slice(name.length)}`;
					/** @type {ResolveRequest} */
					const obj = {
						...request,
						request: remainingRequest,
						path: /** @type {string} */ (request.descriptionFileRoot),
						relativePath: ".",
					};

					resolver.doResolve(
						target,
						obj,
						"self reference",
						resolveContext,
						callback,
					);
				} else {
					return callback();
				}
			});
	}
};
