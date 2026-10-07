/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const DescriptionFileUtils = require("./DescriptionFileUtils");
const forEachBail = require("./forEachBail");
const { processExportsField } = require("./util/entrypoints");
const { parseIdentifier } = require("./util/identifier");
const {
	deprecatedInvalidSegmentRegEx,
	invalidSegmentRegEx,
} = require("./util/path");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").JsonObject} JsonObject */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
/** @typedef {import("./util/entrypoints").ExportsField} ExportsField */
/** @typedef {import("./util/entrypoints").FieldProcessor} FieldProcessor */

module.exports = class ExportsFieldPlugin {
	/**
	 * @param {string | ResolveStepHook} source source
	 * @param {Set<string>} conditionNames condition names
	 * @param {string | string[]} fieldNamePath name path
	 * @param {string | ResolveStepHook} target target
	 */
	constructor(source, conditionNames, fieldNamePath, target) {
		this.source = source;
		this.target = target;
		this.conditionNames = conditionNames;
		this.fieldName = fieldNamePath;
		/** @type {WeakMap<JsonObject, FieldProcessor>} */
		this.fieldProcessorCache = new WeakMap();
	}

	/**
	 * @param {Resolver} resolver the resolver
	 * @returns {void}
	 */
	apply(resolver) {
		const target = resolver.ensureHook(this.target);
		resolver
			.getHook(this.source)
			.tapAsync("ExportsFieldPlugin", (request, resolveContext, callback) => {
				// When there is no description file, abort
				if (!request.descriptionFilePath) return callback();
				if (
					// When the description file is inherited from parent, abort
					// (There is no description file inside of this package)
					request.relativePath !== "." ||
					request.request === undefined
				) {
					return callback();
				}

				const remainingRequest =
					request.query || request.fragment
						? (request.request === "." ? "./" : request.request) +
							request.query +
							request.fragment
						: request.request;
				const exportsField =
					/** @type {ExportsField | null | undefined} */
					(
						DescriptionFileUtils.getField(
							/** @type {JsonObject} */ (request.descriptionFileData),
							this.fieldName,
						)
					);
				if (!exportsField) return callback();

				if (request.directory) {
					return callback(
						new Error(
							`Resolving to directories is not possible with the exports field (request was ${remainingRequest}/)`,
						),
					);
				}

				/** @type {string[]} */
				let paths;
				/** @type {string | null} */
				let usedField;

				try {
					// We attach the cache to the description file instead of the exportsField value
					// because we use a WeakMap and the exportsField could be a string too.
					// Description file is always an object when exports field can be accessed.
					let fieldProcessor = this.fieldProcessorCache.get(
						/** @type {JsonObject} */ (request.descriptionFileData),
					);
					if (fieldProcessor === undefined) {
						fieldProcessor = processExportsField(exportsField);
						this.fieldProcessorCache.set(
							/** @type {JsonObject} */ (request.descriptionFileData),
							fieldProcessor,
						);
					}
					[paths, usedField] = fieldProcessor(
						remainingRequest,
						this.conditionNames,
					);
				} catch (/** @type {unknown} */ err) {
					if (resolveContext.log) {
						resolveContext.log(
							`Exports field in ${request.descriptionFilePath} can't be processed: ${err}`,
						);
					}
					return callback(/** @type {Error} */ (err));
				}

				if (paths.length === 0) {
					const conditions = [...this.conditionNames];
					const conditionsStr =
						conditions.length === 1
							? `the condition "${conditions[0]}"`
							: `the conditions ${JSON.stringify(conditions)}`;
					return callback(
						new Error(
							`"${remainingRequest}" is not exported under ${conditionsStr} from package ${request.descriptionFileRoot} (see exports field in ${request.descriptionFilePath})`,
						),
					);
				}

				forEachBail(
					paths,
					/**
					 * @param {string} path path
					 * @param {(err?: null | Error, result?: null | ResolveRequest) => void} callback callback
					 * @param {number} i index
					 * @returns {void}
					 */
					(path, callback, i) => {
						const parsedIdentifier = parseIdentifier(path);

						if (!parsedIdentifier) return callback();

						const [relativePath, query, fragment] = parsedIdentifier;

						if (relativePath.length === 0 || !relativePath.startsWith("./")) {
							if (paths.length === i) {
								return callback(
									new Error(
										`Invalid "exports" target "${path}" defined for "${usedField}" in the package config ${request.descriptionFilePath}, targets must start with "./"`,
									),
								);
							}

							return callback();
						}

						if (
							invalidSegmentRegEx.exec(relativePath.slice(2)) !== null &&
							deprecatedInvalidSegmentRegEx.test(relativePath.slice(2))
						) {
							if (paths.length === i) {
								return callback(
									new Error(
										`Invalid "exports" target "${path}" defined for "${usedField}" in the package config ${request.descriptionFilePath}, targets must start with "./"`,
									),
								);
							}

							return callback();
						}

						/** @type {ResolveRequest} */
						const obj = {
							...request,
							request: undefined,
							path: resolver.join(
								/** @type {string} */ (request.descriptionFileRoot),
								relativePath,
							),
							relativePath,
							query,
							fragment,
						};

						resolver.doResolve(
							target,
							obj,
							`using exports field: ${path}`,
							resolveContext,
							(err, result) => {
								if (err) return callback(err);
								// Don't allow to continue - https://github.com/webpack/enhanced-resolve/issues/400
								if (result === undefined) return callback(null, null);
								callback(null, result);
							},
						);
					},
					/**
					 * @param {(null | Error)=} err error
					 * @param {(null | ResolveRequest)=} result result
					 * @returns {void}
					 */
					(err, result) => callback(err, result || null),
				);
			});
	}
};
