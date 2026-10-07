/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Natsu @xiaoxiaojx
*/

"use strict";

const path = require("path");
const urlUtils = require("url");
const { isAbsolute, join } = require("./fs");

/** @typedef {import("./fs").InputFileSystem} InputFileSystem */
/** @typedef {string | Buffer<ArrayBufferLike>} StringOrBuffer */
/** @typedef {(input: StringOrBuffer, resourcePath: string, fs: InputFileSystem) => Promise<{ source: StringOrBuffer, sourceMap: string | RawSourceMap | undefined, fileDependencies: string[] }>} SourceMapExtractorFunction */
/** @typedef {import("webpack-sources").RawSourceMap} RawSourceMap */
/** @typedef {(resourcePath: string) => Promise<StringOrBuffer>} ReadResource */

/**
 * Defines the source mapping url type used by this module.
 * @typedef {object} SourceMappingURL
 * @property {string} sourceMappingURL
 * @property {string} replacementString
 */

// Matches only the last occurrence of sourceMappingURL
const innerRegex = /\s*[#@]\s*sourceMappingURL\s*=\s*([^\s'"]*)\s*/;

const validProtocolPattern = /^[a-z][a-z0-9+.-]*:/i;

const sourceMappingURLRegex = new RegExp(
	"(?:" +
		"/\\*" +
		"(?:\\s*\r?\n(?://)?)?" +
		`(?:${innerRegex.source})` +
		"\\s*" +
		"\\*/" +
		"|" +
		`//(?:${innerRegex.source})` +
		")" +
		"\\s*"
);

/**
 * Extract source mapping URL from code comments
 * @param {string} code source code content
 * @returns {SourceMappingURL} source mapping information
 */
function getSourceMappingURL(code) {
	const lines = code.split(/^/m);
	/** @type {RegExpMatchArray | null | undefined} */
	let match;

	for (let i = lines.length - 1; i >= 0; i--) {
		match = lines[i].match(sourceMappingURLRegex);
		if (match) {
			break;
		}
	}

	const sourceMappingURL = match ? match[1] || match[2] || "" : "";

	return {
		sourceMappingURL: sourceMappingURL
			? decodeURI(sourceMappingURL)
			: sourceMappingURL,
		replacementString: match ? match[0] : ""
	};
}

/**
 * Get absolute path for source file
 * @param {string} context context directory
 * @param {string} request file request
 * @param {string} sourceRoot source root directory
 * @returns {string} absolute path
 */
function getAbsolutePath(context, request, sourceRoot) {
	if (sourceRoot) {
		if (isAbsolute(sourceRoot)) {
			return join(undefined, sourceRoot, request);
		}

		return join(undefined, join(undefined, context, sourceRoot), request);
	}

	return join(undefined, context, request);
}

/**
 * Check if value is a URL
 * @param {string} value string to check
 * @returns {boolean} true if value is a URL
 */
function isURL(value) {
	return validProtocolPattern.test(value) && !path.win32.isAbsolute(value);
}

/**
 * Fetch from multiple possible file paths
 * @param {ReadResource} readResource read resource function
 * @param {string[]} possibleRequests array of possible file paths
 * @param {string} errorsAccumulator accumulated error messages
 * @returns {Promise<{ path: string, data?: string }>} source content promise
 */
async function fetchPathsFromURL(
	readResource,
	possibleRequests,
	errorsAccumulator = ""
) {
	/** @type {StringOrBuffer} */
	let result;

	try {
		result = await readResource(possibleRequests[0]);
	} catch (error) {
		errorsAccumulator += `${/** @type {Error} */ (error).message}\n\n`;

		const [, ...tailPossibleRequests] = possibleRequests;

		if (tailPossibleRequests.length === 0) {
			/** @type {Error} */ (error).message = errorsAccumulator;

			throw error;
		}

		return fetchPathsFromURL(
			readResource,
			tailPossibleRequests,
			errorsAccumulator
		);
	}

	return {
		path: possibleRequests[0],
		data: result.toString("utf8")
	};
}

/**
 * Fetch source content from URL
 * @param {ReadResource} readResource The read resource function
 * @param {string} context context directory
 * @param {string} url source URL
 * @param {string=} sourceRoot source root directory
 * @param {boolean=} skipReading whether to skip reading file content
 * @returns {Promise<{ sourceURL: string, sourceContent?: StringOrBuffer }>} source content promise
 */
async function fetchFromURL(
	readResource,
	context,
	url,
	sourceRoot,
	skipReading = false
) {
	// 1. It's an absolute url and it is not `windows` path like `C:\dir\file`
	if (isURL(url)) {
		// eslint-disable-next-line n/no-deprecated-api
		const { protocol } = urlUtils.parse(url);
		if (protocol === "data:") {
			const sourceContent = skipReading ? "" : await readResource(url);

			return { sourceURL: "", sourceContent };
		}

		if (protocol === "file:") {
			const pathFromURL = urlUtils.fileURLToPath(url);
			const sourceURL = path.normalize(pathFromURL);
			const sourceContent = skipReading ? "" : await readResource(sourceURL);

			return { sourceURL, sourceContent };
		}

		const sourceContent = skipReading ? "" : await readResource(url);
		return { sourceURL: url, sourceContent };
	}

	// 3. Absolute path
	if (isAbsolute(url)) {
		let sourceURL = path.normalize(url);

		/** @type {undefined | StringOrBuffer} */
		let sourceContent;

		if (!skipReading) {
			/** @type {string[]} */
			const possibleRequests = [sourceURL];

			if (url.startsWith("/")) {
				possibleRequests.push(
					getAbsolutePath(context, sourceURL.slice(1), sourceRoot || "")
				);
			}

			const result = await fetchPathsFromURL(readResource, possibleRequests);

			sourceURL = result.path;
			sourceContent = result.data;
		}

		return { sourceURL, sourceContent };
	}

	// 4. Relative path
	const sourceURL = getAbsolutePath(context, url, sourceRoot || "");
	/** @type {undefined | StringOrBuffer} */
	let sourceContent;

	if (!skipReading) {
		sourceContent = await readResource(sourceURL);
	}

	return { sourceURL, sourceContent };
}

/**
 * Extract source map from code content
 * @param {StringOrBuffer} stringOrBuffer The input code content as string or buffer
 * @param {string} resourcePath The path to the resource file
 * @param {ReadResource} readResource The read resource function
 * @returns {Promise<{ source: StringOrBuffer, sourceMap: string | RawSourceMap | undefined }>} Promise resolving to extracted source map information
 */
async function extractSourceMap(stringOrBuffer, resourcePath, readResource) {
	const input =
		typeof stringOrBuffer === "string"
			? stringOrBuffer
			: stringOrBuffer.toString("utf8");
	const inputSourceMap = undefined;
	const output = {
		source: stringOrBuffer,
		sourceMap: inputSourceMap
	};
	const { sourceMappingURL, replacementString } = getSourceMappingURL(input);

	if (!sourceMappingURL) {
		return output;
	}

	const baseContext = path.dirname(resourcePath);

	const { sourceURL, sourceContent } = await fetchFromURL(
		readResource,
		baseContext,
		sourceMappingURL
	);

	if (!sourceContent) {
		return output;
	}

	/** @type {RawSourceMap} */
	const map = JSON.parse(
		sourceContent.toString("utf8").replace(/^\)\]\}'/, "")
	);

	const context = sourceURL ? path.dirname(sourceURL) : baseContext;

	const resolvedSources = await Promise.all(
		map.sources.map(
			async (/** @type {string} */ source, /** @type {number} */ i) => {
				const originalSourceContent =
					map.sourcesContent &&
					typeof map.sourcesContent[i] !== "undefined" &&
					map.sourcesContent[i] !== null
						? map.sourcesContent[i]
						: undefined;
				const skipReading = typeof originalSourceContent !== "undefined";
				// We do not skipReading here, because we need absolute paths in sources.
				// This is necessary so that for sourceMaps with the same file structure in sources, name collisions do not occur.
				// https://github.com/webpack-contrib/source-map-loader/issues/51
				let { sourceURL, sourceContent } = await fetchFromURL(
					readResource,
					context,
					source,
					map.sourceRoot,
					skipReading
				);

				if (skipReading) {
					sourceContent = originalSourceContent;
				}

				// Return original value of `source` when error happens
				return { sourceURL, sourceContent };
			}
		)
	);

	/** @type {RawSourceMap} */
	const newMap = { ...map };

	newMap.sources = [];
	newMap.sourcesContent = [];

	delete newMap.sourceRoot;

	for (const source of resolvedSources) {
		const { sourceURL, sourceContent } = source;

		newMap.sources.push(sourceURL || "");
		newMap.sourcesContent.push(
			sourceContent ? sourceContent.toString("utf8") : ""
		);
	}

	const sourcesContentIsEmpty =
		newMap.sourcesContent.filter(Boolean).length === 0;

	if (sourcesContentIsEmpty) {
		delete newMap.sourcesContent;
	}

	return {
		source: input.replace(replacementString, ""),
		sourceMap: /** @type {RawSourceMap} */ (newMap)
	};
}

module.exports = extractSourceMap;
module.exports.getSourceMappingURL = getSourceMappingURL;
