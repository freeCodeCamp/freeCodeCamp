/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Natsu @xiaoxiaojx
*/

"use strict";

const stripJsonComments = require("./strip-json-comments");

/** @typedef {import("../Resolver").FileSystem} FileSystem */

/**
 * @typedef {object} ReadJsonOptions
 * @property {boolean=} stripComments Whether to strip JSONC comments
 */

/**
 * Read and parse JSON file (supports JSONC with comments)
 * @template T
 * @param {FileSystem} fileSystem the file system
 * @param {string} jsonFilePath absolute path to JSON file
 * @param {ReadJsonOptions} options Options
 * @returns {Promise<T>} parsed JSON content
 */
async function readJson(fileSystem, jsonFilePath, options = {}) {
	const { stripComments = false } = options;
	const { readJson } = fileSystem;
	if (readJson && !stripComments) {
		return new Promise((resolve, reject) => {
			readJson(jsonFilePath, (err, content) => {
				if (err) return reject(err);
				resolve(/** @type {T} */ (content));
			});
		});
	}

	const buf = await new Promise((resolve, reject) => {
		fileSystem.readFile(jsonFilePath, (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});

	const jsonText = /** @type {string} */ (buf.toString());
	// Strip comments to support JSONC (e.g., tsconfig.json with comments)
	const jsonWithoutComments = stripComments
		? stripJsonComments(jsonText, { trailingCommas: true, whitespace: true })
		: jsonText;
	return JSON.parse(jsonWithoutComments);
}

module.exports.readJson = readJson;
