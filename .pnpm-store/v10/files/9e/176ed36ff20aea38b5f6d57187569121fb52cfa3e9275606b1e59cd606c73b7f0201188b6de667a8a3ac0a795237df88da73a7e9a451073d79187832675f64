/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const forEachBail = require("./forEachBail");

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").JsonObject} JsonObject */
/** @typedef {import("./Resolver").JsonValue} JsonValue */
/** @typedef {import("./Resolver").ResolveContext} ResolveContext */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */

/**
 * @typedef {object} DescriptionFileInfo
 * @property {JsonObject=} content content
 * @property {string} path path
 * @property {string} directory directory
 */

/**
 * @callback ErrorFirstCallback
 * @param {Error | null=} error
 * @param {DescriptionFileInfo=} result
 */

/**
 * @typedef {object} Result
 * @property {string} path path to description file
 * @property {string} directory directory of description file
 * @property {JsonObject} content content of description file
 */

/**
 * @param {string} directory directory
 * @returns {string | null} parent directory or null
 */
function cdUp(directory) {
	if (directory === "/") return null;
	const i = directory.lastIndexOf("/");
	const j = directory.lastIndexOf("\\");
	const path = i < 0 ? j : j < 0 ? i : i < j ? j : i;
	if (path < 0) return null;
	return directory.slice(0, path || 1);
}

/**
 * @param {Resolver} resolver resolver
 * @param {string} directory directory
 * @param {string[]} filenames filenames
 * @param {DescriptionFileInfo | undefined} oldInfo oldInfo
 * @param {ResolveContext} resolveContext resolveContext
 * @param {ErrorFirstCallback} callback callback
 */
function loadDescriptionFile(
	resolver,
	directory,
	filenames,
	oldInfo,
	resolveContext,
	callback,
) {
	(function findDescriptionFile() {
		if (oldInfo && oldInfo.directory === directory) {
			// We already have info for this directory and can reuse it
			return callback(null, oldInfo);
		}
		forEachBail(
			filenames,
			/**
			 * @param {string} filename filename
			 * @param {(err?: null | Error, result?: null | Result) => void} callback callback
			 * @returns {void}
			 */
			(filename, callback) => {
				const descriptionFilePath = resolver.join(directory, filename);

				/**
				 * @param {(null | Error)=} err error
				 * @param {JsonObject=} resolvedContent content
				 * @returns {void}
				 */
				function onJson(err, resolvedContent) {
					if (err) {
						if (resolveContext.log) {
							resolveContext.log(
								`${descriptionFilePath} (directory description file): ${err}`,
							);
						} else {
							err.message = `${descriptionFilePath} (directory description file): ${err}`;
						}
						return callback(err);
					}
					callback(null, {
						content: /** @type {JsonObject} */ (resolvedContent),
						directory,
						path: descriptionFilePath,
					});
				}

				if (resolver.fileSystem.readJson) {
					resolver.fileSystem.readJson(descriptionFilePath, (err, content) => {
						if (err) {
							if (
								typeof (/** @type {NodeJS.ErrnoException} */ (err).code) !==
								"undefined"
							) {
								if (resolveContext.missingDependencies) {
									resolveContext.missingDependencies.add(descriptionFilePath);
								}
								return callback();
							}
							if (resolveContext.fileDependencies) {
								resolveContext.fileDependencies.add(descriptionFilePath);
							}
							return onJson(err);
						}
						if (resolveContext.fileDependencies) {
							resolveContext.fileDependencies.add(descriptionFilePath);
						}
						onJson(null, content);
					});
				} else {
					resolver.fileSystem.readFile(descriptionFilePath, (err, content) => {
						if (err) {
							if (resolveContext.missingDependencies) {
								resolveContext.missingDependencies.add(descriptionFilePath);
							}
							return callback();
						}
						if (resolveContext.fileDependencies) {
							resolveContext.fileDependencies.add(descriptionFilePath);
						}

						/** @type {JsonObject | undefined} */
						let json;

						if (content) {
							try {
								json = JSON.parse(content.toString());
							} catch (/** @type {unknown} */ err_) {
								return onJson(/** @type {Error} */ (err_));
							}
						} else {
							return onJson(new Error("No content in file"));
						}

						onJson(null, json);
					});
				}
			},
			/**
			 * @param {(null | Error)=} err error
			 * @param {(null | Result)=} result result
			 * @returns {void}
			 */
			(err, result) => {
				if (err) return callback(err);
				if (result) return callback(null, result);
				const dir = cdUp(directory);
				if (!dir) {
					return callback();
				}
				directory = dir;
				return findDescriptionFile();
			},
		);
	})();
}

/**
 * @param {JsonObject} content content
 * @param {string | string[]} field field
 * @returns {JsonValue | undefined} field data
 */
function getField(content, field) {
	if (!content) return undefined;
	if (Array.isArray(field)) {
		/** @type {JsonValue} */
		let current = content;
		for (let j = 0; j < field.length; j++) {
			if (current === null || typeof current !== "object") {
				current = null;
				break;
			}
			current = /** @type {JsonValue} */ (
				/** @type {JsonObject} */
				(current)[field[j]]
			);
		}
		return current;
	}
	return content[field];
}

module.exports.cdUp = cdUp;
module.exports.getField = getField;
module.exports.loadDescriptionFile = loadDescriptionFile;
