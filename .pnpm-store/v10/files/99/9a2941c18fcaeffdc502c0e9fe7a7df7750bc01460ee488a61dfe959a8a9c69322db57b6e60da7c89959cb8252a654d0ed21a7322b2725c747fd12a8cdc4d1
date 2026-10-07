/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");
const { first } = require("../util/SetHelpers");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compilation").AssetInfo} AssetInfo */
/** @typedef {import("../TemplatedPathPlugin").TemplatePath} TemplatePath */

class GetChunkFilenameRuntimeModule extends RuntimeModule {
	/**
	 * @param {string} contentType the contentType to use the content hash for
	 * @param {string} name kind of filename
	 * @param {string} global function name to be assigned
	 * @param {function(Chunk): TemplatePath | false} getFilenameForChunk functor to get the filename or function
	 * @param {boolean} allChunks when false, only async chunks are included
	 */
	constructor(contentType, name, global, getFilenameForChunk, allChunks) {
		super(`get ${name} chunk filename`);
		this.contentType = contentType;
		this.global = global;
		this.getFilenameForChunk = getFilenameForChunk;
		this.allChunks = allChunks;
		this.dependentHash = true;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { global, contentType, getFilenameForChunk, allChunks } = this;
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const { runtimeTemplate } = compilation;

		/** @type {Map<string | TemplatePath, Set<Chunk>>} */
		const chunkFilenames = new Map();
		let maxChunks = 0;
		/** @type {string | undefined} */
		let dynamicFilename;

		/**
		 * @param {Chunk} c the chunk
		 * @returns {void}
		 */
		const addChunk = c => {
			const chunkFilename = getFilenameForChunk(c);
			if (chunkFilename) {
				let set = chunkFilenames.get(chunkFilename);
				if (set === undefined) {
					chunkFilenames.set(chunkFilename, (set = new Set()));
				}
				set.add(c);
				if (typeof chunkFilename === "string") {
					if (set.size < maxChunks) return;
					if (set.size === maxChunks) {
						if (
							chunkFilename.length <
							/** @type {string} */ (dynamicFilename).length
						) {
							return;
						}

						if (
							chunkFilename.length ===
								/** @type {string} */ (dynamicFilename).length &&
							chunkFilename < /** @type {string} */ (dynamicFilename)
						) {
							return;
						}
					}
					maxChunks = set.size;
					dynamicFilename = chunkFilename;
				}
			}
		};

		/** @type {string[]} */
		const includedChunksMessages = [];
		if (allChunks) {
			includedChunksMessages.push("all chunks");
			for (const c of chunk.getAllReferencedChunks()) {
				addChunk(c);
			}
		} else {
			includedChunksMessages.push("async chunks");
			for (const c of chunk.getAllAsyncChunks()) {
				addChunk(c);
			}
			const includeEntries = chunkGraph
				.getTreeRuntimeRequirements(chunk)
				.has(RuntimeGlobals.ensureChunkIncludeEntries);
			if (includeEntries) {
				includedChunksMessages.push("sibling chunks for the entrypoint");
				for (const c of chunkGraph.getChunkEntryDependentChunksIterable(
					chunk
				)) {
					addChunk(c);
				}
			}
		}
		for (const entrypoint of chunk.getAllReferencedAsyncEntrypoints()) {
			addChunk(entrypoint.chunks[entrypoint.chunks.length - 1]);
		}

		/** @type {Map<string, Set<string | number | null>>} */
		const staticUrls = new Map();
		/** @type {Set<Chunk>} */
		const dynamicUrlChunks = new Set();

		/**
		 * @param {Chunk} c the chunk
		 * @param {string | TemplatePath} chunkFilename the filename template for the chunk
		 * @returns {void}
		 */
		const addStaticUrl = (c, chunkFilename) => {
			/**
			 * @param {string | number} value a value
			 * @returns {string} string to put in quotes
			 */
			const unquotedStringify = value => {
				const str = `${value}`;
				if (str.length >= 5 && str === `${c.id}`) {
					// This is shorter and generates the same result
					return '" + chunkId + "';
				}
				const s = JSON.stringify(str);
				return s.slice(1, -1);
			};
			/**
			 * @param {string} value string
			 * @returns {function(number): string} string to put in quotes with length
			 */
			const unquotedStringifyWithLength = value => length =>
				unquotedStringify(`${value}`.slice(0, length));
			const chunkFilenameValue =
				typeof chunkFilename === "function"
					? JSON.stringify(
							chunkFilename({
								chunk: c,
								contentHashType: contentType
							})
						)
					: JSON.stringify(chunkFilename);
			const staticChunkFilename = compilation.getPath(chunkFilenameValue, {
				hash: `" + ${RuntimeGlobals.getFullHash}() + "`,
				hashWithLength: length =>
					`" + ${RuntimeGlobals.getFullHash}().slice(0, ${length}) + "`,
				chunk: {
					id: unquotedStringify(/** @type {number | string} */ (c.id)),
					hash: unquotedStringify(/** @type {string} */ (c.renderedHash)),
					hashWithLength: unquotedStringifyWithLength(
						/** @type {string} */ (c.renderedHash)
					),
					name: unquotedStringify(
						c.name || /** @type {number | string} */ (c.id)
					),
					contentHash: {
						[contentType]: unquotedStringify(c.contentHash[contentType])
					},
					contentHashWithLength: {
						[contentType]: unquotedStringifyWithLength(
							c.contentHash[contentType]
						)
					}
				},
				contentHashType: contentType
			});
			let set = staticUrls.get(staticChunkFilename);
			if (set === undefined) {
				staticUrls.set(staticChunkFilename, (set = new Set()));
			}
			set.add(c.id);
		};

		for (const [filename, chunks] of chunkFilenames) {
			if (filename !== dynamicFilename) {
				for (const c of chunks) addStaticUrl(c, filename);
			} else {
				for (const c of chunks) dynamicUrlChunks.add(c);
			}
		}

		/**
		 * @param {function(Chunk): string | number} fn function from chunk to value
		 * @returns {string} code with static mapping of results of fn
		 */
		const createMap = fn => {
			/** @type {Record<number | string, number | string>} */
			const obj = {};
			let useId = false;
			/** @type {number | string | undefined} */
			let lastKey;
			let entries = 0;
			for (const c of dynamicUrlChunks) {
				const value = fn(c);
				if (value === c.id) {
					useId = true;
				} else {
					obj[/** @type {number | string} */ (c.id)] = value;
					lastKey = /** @type {number | string} */ (c.id);
					entries++;
				}
			}
			if (entries === 0) return "chunkId";
			if (entries === 1) {
				return useId
					? `(chunkId === ${JSON.stringify(lastKey)} ? ${JSON.stringify(
							obj[/** @type {number | string} */ (lastKey)]
						)} : chunkId)`
					: JSON.stringify(obj[/** @type {number | string} */ (lastKey)]);
			}
			return useId
				? `(${JSON.stringify(obj)}[chunkId] || chunkId)`
				: `${JSON.stringify(obj)}[chunkId]`;
		};

		/**
		 * @param {function(Chunk): string | number} fn function from chunk to value
		 * @returns {string} code with static mapping of results of fn for including in quoted string
		 */
		const mapExpr = fn => `" + ${createMap(fn)} + "`;

		/**
		 * @param {function(Chunk): string | number} fn function from chunk to value
		 * @returns {function(number): string} function which generates code with static mapping of results of fn for including in quoted string for specific length
		 */
		const mapExprWithLength = fn => length =>
			`" + ${createMap(c => `${fn(c)}`.slice(0, length))} + "`;

		const url =
			dynamicFilename &&
			compilation.getPath(JSON.stringify(dynamicFilename), {
				hash: `" + ${RuntimeGlobals.getFullHash}() + "`,
				hashWithLength: length =>
					`" + ${RuntimeGlobals.getFullHash}().slice(0, ${length}) + "`,
				chunk: {
					id: '" + chunkId + "',
					hash: mapExpr(c => /** @type {string} */ (c.renderedHash)),
					hashWithLength: mapExprWithLength(
						c => /** @type {string} */ (c.renderedHash)
					),
					name: mapExpr(c => c.name || /** @type {number | string} */ (c.id)),
					contentHash: {
						[contentType]: mapExpr(c => c.contentHash[contentType])
					},
					contentHashWithLength: {
						[contentType]: mapExprWithLength(c => c.contentHash[contentType])
					}
				},
				contentHashType: contentType
			});

		return Template.asString([
			`// This function allow to reference ${includedChunksMessages.join(
				" and "
			)}`,
			`${global} = ${runtimeTemplate.basicFunction(
				"chunkId",

				staticUrls.size > 0
					? [
							"// return url for filenames not based on template",
							// it minimizes to `x===1?"...":x===2?"...":"..."`
							Template.asString(
								Array.from(staticUrls, ([url, ids]) => {
									const condition =
										ids.size === 1
											? `chunkId === ${JSON.stringify(first(ids))}`
											: `{${Array.from(
													ids,
													id => `${JSON.stringify(id)}:1`
												).join(",")}}[chunkId]`;
									return `if (${condition}) return ${url};`;
								})
							),
							"// return url for filenames based on template",
							`return ${url};`
						]
					: ["// return url for filenames based on template", `return ${url};`]
			)};`
		]);
	}
}

module.exports = GetChunkFilenameRuntimeModule;
