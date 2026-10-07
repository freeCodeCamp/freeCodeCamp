/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const getGeneratedSourceInfo = require("./getGeneratedSourceInfo");
const splitIntoLines = require("./splitIntoLines");

/** @typedef {import("./getGeneratedSourceInfo").GeneratedSourceInfo} GeneratedSourceInfo */
/** @typedef {import("./streamChunks").OnChunk} OnChunk */
/** @typedef {import("./streamChunks").OnName} OnName */
/** @typedef {import("./streamChunks").OnSource} OnSource */

/**
 * @param {string} source source
 * @param {OnChunk} onChunk on chunk
 * @param {OnSource} _onSource on source
 * @param {OnName} _onName on name
 * @returns {GeneratedSourceInfo} source info
 */
const streamChunksOfRawSource = (source, onChunk, _onSource, _onName) => {
	let line = 1;
	const matches = splitIntoLines(source);
	/** @type {undefined | string} */
	let match;
	for (match of matches) {
		onChunk(match, line, 0, -1, -1, -1, -1);
		line++;
	}
	return matches.length === 0 || /** @type {string} */ (match).endsWith("\n")
		? {
				generatedLine: matches.length + 1,
				generatedColumn: 0,
			}
		: {
				generatedLine: matches.length,
				generatedColumn: /** @type {string} */ (match).length,
			};
};

/**
 * @param {string} source source
 * @param {OnChunk} onChunk on chunk
 * @param {OnSource} onSource on source
 * @param {OnName} onName on name
 * @param {boolean} finalSource is final source
 * @returns {GeneratedSourceInfo} source info
 */
module.exports = (source, onChunk, onSource, onName, finalSource) =>
	finalSource
		? getGeneratedSourceInfo(source)
		: streamChunksOfRawSource(source, onChunk, onSource, onName);
