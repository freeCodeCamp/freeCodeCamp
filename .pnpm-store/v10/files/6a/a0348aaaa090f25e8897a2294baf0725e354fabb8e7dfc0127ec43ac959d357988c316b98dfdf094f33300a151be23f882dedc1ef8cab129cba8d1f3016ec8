/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const streamChunksOfRawSource = require("./streamChunksOfRawSource");
const streamChunksOfSourceMap = require("./streamChunksOfSourceMap");

/** @typedef {import("../Source")} Source */
/** @typedef {import("./getGeneratedSourceInfo").GeneratedSourceInfo} GeneratedSourceInfo */
/** @typedef {(chunk: string | undefined, generatedLine: number, generatedColumn: number, sourceIndex: number, originalLine: number, originalColumn: number, nameIndex: number) => void} OnChunk */
/** @typedef {(sourceIndex: number, source: string | null, sourceContent: string | undefined) => void} OnSource */
/** @typedef {(nameIndex: number, name: string) => void} OnName */

/** @typedef {{ source?: boolean, finalSource?: boolean, columns?: boolean }} Options */

/**
 * @callback StreamChunksFunction
 * @param {Options} options options
 * @param {OnChunk} onChunk on chunk
 * @param {OnSource} onSource on source
 * @param {OnName} onName on name
 */

/** @typedef {Source & { streamChunks?: StreamChunksFunction }} SourceMaybeWithStreamChunksFunction */

/**
 * @param {SourceMaybeWithStreamChunksFunction} source source
 * @param {Options} options options
 * @param {OnChunk} onChunk on chunk
 * @param {OnSource} onSource on source
 * @param {OnName} onName on name
 * @returns {GeneratedSourceInfo} generated source info
 */
module.exports = (source, options, onChunk, onSource, onName) => {
	if (typeof source.streamChunks === "function") {
		return source.streamChunks(options, onChunk, onSource, onName);
	}
	const sourceAndMap = source.sourceAndMap(options);
	if (sourceAndMap.map) {
		return streamChunksOfSourceMap(
			/** @type {string} */
			(sourceAndMap.source),
			sourceAndMap.map,
			onChunk,
			onSource,
			onName,
			Boolean(options && options.finalSource),
			Boolean(options && options.columns !== false),
		);
	}
	return streamChunksOfRawSource(
		/** @type {string} */
		(sourceAndMap.source),
		onChunk,
		onSource,
		onName,
		Boolean(options && options.finalSource),
	);
};
