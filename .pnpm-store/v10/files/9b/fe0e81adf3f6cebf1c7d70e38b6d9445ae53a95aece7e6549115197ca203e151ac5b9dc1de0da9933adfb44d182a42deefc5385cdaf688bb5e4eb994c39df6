/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RawSource = require("./RawSource");
const Source = require("./Source");
const { getMap, getSourceAndMap } = require("./helpers/getFromStreamChunks");
const streamChunks = require("./helpers/streamChunks");

/** @typedef {import("./CompatSource").SourceLike} SourceLike */
/** @typedef {import("./Source").HashLike} HashLike */
/** @typedef {import("./Source").MapOptions} MapOptions */
/** @typedef {import("./Source").RawSourceMap} RawSourceMap */
/** @typedef {import("./Source").SourceAndMap} SourceAndMap */
/** @typedef {import("./Source").SourceValue} SourceValue */
/** @typedef {import("./helpers/getGeneratedSourceInfo").GeneratedSourceInfo} GeneratedSourceInfo */
/** @typedef {import("./helpers/streamChunks").OnChunk} OnChunk */
/** @typedef {import("./helpers/streamChunks").OnName} OnName */
/** @typedef {import("./helpers/streamChunks").OnSource} OnSource */
/** @typedef {import("./helpers/streamChunks").Options} Options */

/** @typedef {string | Source | SourceLike} Child */

const stringsAsRawSources = new WeakSet();

class ConcatSource extends Source {
	/**
	 * @param {Child[]} args children
	 */
	constructor(...args) {
		super();
		/**
		 * @private
		 * @type {Child[]}
		 */
		this._children = [];

		for (const item of args) {
			if (item instanceof ConcatSource) {
				for (const child of item._children) {
					this._children.push(child);
				}
			} else {
				this._children.push(item);
			}
		}

		/**
		 * @private
		 * @type {boolean}
		 */
		this._isOptimized = args.length === 0;
	}

	/**
	 * @returns {Source[]} children
	 */
	getChildren() {
		if (!this._isOptimized) this._optimize();
		return /** @type {Source[]} */ (this._children);
	}

	/**
	 * @param {Child} item item
	 * @returns {void}
	 */
	add(item) {
		if (item instanceof ConcatSource) {
			for (const child of item._children) {
				this._children.push(child);
			}
		} else {
			this._children.push(item);
		}
		this._isOptimized = false;
	}

	/**
	 * @param {Child[]} items items
	 * @returns {void}
	 */
	addAllSkipOptimizing(items) {
		for (const item of items) {
			this._children.push(item);
		}
	}

	buffer() {
		if (!this._isOptimized) this._optimize();
		/** @type {Buffer[]} */
		const buffers = [];
		for (const child of /** @type {SourceLike[]} */ (this._children)) {
			if (typeof child.buffer === "function") {
				buffers.push(child.buffer());
			} else {
				const bufferOrString = child.source();
				if (Buffer.isBuffer(bufferOrString)) {
					buffers.push(bufferOrString);
				} else {
					// This will not happen
					buffers.push(Buffer.from(bufferOrString, "utf8"));
				}
			}
		}
		return Buffer.concat(buffers);
	}

	/**
	 * @returns {SourceValue} source
	 */
	source() {
		if (!this._isOptimized) this._optimize();
		let source = "";
		for (const child of this._children) {
			source += /** @type {Source} */ (child).source();
		}
		return source;
	}

	size() {
		if (!this._isOptimized) this._optimize();
		let size = 0;
		for (const child of this._children) {
			size += /** @type {Source} */ (child).size();
		}
		return size;
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {RawSourceMap | null} map
	 */
	map(options) {
		return getMap(this, options);
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {SourceAndMap} source and map
	 */
	sourceAndMap(options) {
		return getSourceAndMap(this, options);
	}

	/**
	 * @param {Options} options options
	 * @param {OnChunk} onChunk called for each chunk of code
	 * @param {OnSource} onSource called for each source
	 * @param {OnName} onName called for each name
	 * @returns {GeneratedSourceInfo} generated source info
	 */
	streamChunks(options, onChunk, onSource, onName) {
		if (!this._isOptimized) this._optimize();
		if (this._children.length === 1) {
			return /** @type {ConcatSource[]} */ (this._children)[0].streamChunks(
				options,
				onChunk,
				onSource,
				onName,
			);
		}
		let currentLineOffset = 0;
		let currentColumnOffset = 0;
		const sourceMapping = new Map();
		const nameMapping = new Map();
		const finalSource = Boolean(options && options.finalSource);
		let code = "";
		let needToCloseMapping = false;
		for (const item of /** @type {Source[]} */ (this._children)) {
			/** @type {number[]} */
			const sourceIndexMapping = [];
			/** @type {number[]} */
			const nameIndexMapping = [];
			let lastMappingLine = 0;
			const { generatedLine, generatedColumn, source } = streamChunks(
				item,
				options,
				// eslint-disable-next-line no-loop-func
				(
					chunk,
					generatedLine,
					generatedColumn,
					sourceIndex,
					originalLine,
					originalColumn,
					nameIndex,
				) => {
					const line = generatedLine + currentLineOffset;
					const column =
						generatedLine === 1
							? generatedColumn + currentColumnOffset
							: generatedColumn;
					if (needToCloseMapping) {
						if (generatedLine !== 1 || generatedColumn !== 0) {
							onChunk(
								undefined,
								currentLineOffset + 1,
								currentColumnOffset,
								-1,
								-1,
								-1,
								-1,
							);
						}
						needToCloseMapping = false;
					}
					const resultSourceIndex =
						sourceIndex < 0 || sourceIndex >= sourceIndexMapping.length
							? -1
							: sourceIndexMapping[sourceIndex];
					const resultNameIndex =
						nameIndex < 0 || nameIndex >= nameIndexMapping.length
							? -1
							: nameIndexMapping[nameIndex];
					lastMappingLine = resultSourceIndex < 0 ? 0 : generatedLine;
					let _chunk;
					// When using finalSource, we process the entire source code at once at the end, rather than chunk by chunk
					if (finalSource) {
						if (chunk !== undefined) code += chunk;
					} else {
						_chunk = chunk;
					}
					if (resultSourceIndex < 0) {
						onChunk(_chunk, line, column, -1, -1, -1, -1);
					} else {
						onChunk(
							_chunk,
							line,
							column,
							resultSourceIndex,
							originalLine,
							originalColumn,
							resultNameIndex,
						);
					}
				},
				(i, source, sourceContent) => {
					let globalIndex = sourceMapping.get(source);
					if (globalIndex === undefined) {
						sourceMapping.set(source, (globalIndex = sourceMapping.size));
						onSource(globalIndex, source, sourceContent);
					}
					sourceIndexMapping[i] = globalIndex;
				},
				(i, name) => {
					let globalIndex = nameMapping.get(name);
					if (globalIndex === undefined) {
						nameMapping.set(name, (globalIndex = nameMapping.size));
						onName(globalIndex, name);
					}
					nameIndexMapping[i] = globalIndex;
				},
			);
			if (source !== undefined) code += source;
			if (
				needToCloseMapping &&
				(generatedLine !== 1 || generatedColumn !== 0)
			) {
				onChunk(
					undefined,
					currentLineOffset + 1,
					currentColumnOffset,
					-1,
					-1,
					-1,
					-1,
				);
				needToCloseMapping = false;
			}
			if (/** @type {number} */ (generatedLine) > 1) {
				currentColumnOffset = /** @type {number} */ (generatedColumn);
			} else {
				currentColumnOffset += /** @type {number} */ (generatedColumn);
			}
			needToCloseMapping =
				needToCloseMapping ||
				(finalSource && lastMappingLine === generatedLine);
			currentLineOffset += /** @type {number} */ (generatedLine) - 1;
		}
		return {
			generatedLine: currentLineOffset + 1,
			generatedColumn: currentColumnOffset,
			source: finalSource ? code : undefined,
		};
	}

	/**
	 * @param {HashLike} hash hash
	 * @returns {void}
	 */
	updateHash(hash) {
		if (!this._isOptimized) this._optimize();
		hash.update("ConcatSource");
		for (const item of this._children) {
			/** @type {Source} */
			(item).updateHash(hash);
		}
	}

	_optimize() {
		const newChildren = [];
		let currentString;
		/** @type {undefined | string | [string, string] | SourceLike} */
		let currentRawSources;
		/**
		 * @param {string} string string
		 * @returns {void}
		 */
		const addStringToRawSources = (string) => {
			if (currentRawSources === undefined) {
				currentRawSources = string;
			} else if (Array.isArray(currentRawSources)) {
				currentRawSources.push(string);
			} else {
				currentRawSources = [
					typeof currentRawSources === "string"
						? currentRawSources
						: /** @type {string} */ (currentRawSources.source()),
					string,
				];
			}
		};
		/**
		 * @param {SourceLike} source source
		 * @returns {void}
		 */
		const addSourceToRawSources = (source) => {
			if (currentRawSources === undefined) {
				currentRawSources = source;
			} else if (Array.isArray(currentRawSources)) {
				currentRawSources.push(
					/** @type {string} */
					(source.source()),
				);
			} else {
				currentRawSources = [
					typeof currentRawSources === "string"
						? currentRawSources
						: /** @type {string} */ (currentRawSources.source()),
					/** @type {string} */
					(source.source()),
				];
			}
		};
		const mergeRawSources = () => {
			if (Array.isArray(currentRawSources)) {
				const rawSource = new RawSource(currentRawSources.join(""));
				stringsAsRawSources.add(rawSource);
				newChildren.push(rawSource);
			} else if (typeof currentRawSources === "string") {
				const rawSource = new RawSource(currentRawSources);
				stringsAsRawSources.add(rawSource);
				newChildren.push(rawSource);
			} else {
				newChildren.push(currentRawSources);
			}
		};
		for (const child of this._children) {
			if (typeof child === "string") {
				if (currentString === undefined) {
					currentString = child;
				} else {
					currentString += child;
				}
			} else {
				if (currentString !== undefined) {
					addStringToRawSources(currentString);
					currentString = undefined;
				}
				if (stringsAsRawSources.has(child)) {
					addSourceToRawSources(
						/** @type {SourceLike} */
						(child),
					);
				} else {
					if (currentRawSources !== undefined) {
						mergeRawSources();
						currentRawSources = undefined;
					}
					newChildren.push(child);
				}
			}
		}
		if (currentString !== undefined) {
			addStringToRawSources(currentString);
		}
		if (currentRawSources !== undefined) {
			mergeRawSources();
		}
		this._children = newChildren;
		this._isOptimized = true;
	}
}

module.exports = ConcatSource;
