/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const WebpackError = require("../WebpackError");

/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../RequestShortener")} RequestShortener */

/**
 * @param {Module} module module to get chains from
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {RequestShortener} requestShortener to make readable identifiers
 * @returns {string[]} all chains to the module
 */
const getInitialModuleChains = (
	module,
	moduleGraph,
	chunkGraph,
	requestShortener
) => {
	const queue = [
		{ head: module, message: module.readableIdentifier(requestShortener) }
	];
	/** @type {Set<string>} */
	const results = new Set();
	/** @type {Set<string>} */
	const incompleteResults = new Set();
	/** @type {Set<Module>} */
	const visitedModules = new Set();

	for (const chain of queue) {
		const { head, message } = chain;
		let final = true;
		/** @type {Set<Module>} */
		const alreadyReferencedModules = new Set();
		for (const connection of moduleGraph.getIncomingConnections(head)) {
			const newHead = connection.originModule;
			if (newHead) {
				if (!chunkGraph.getModuleChunks(newHead).some(c => c.canBeInitial()))
					continue;
				final = false;
				if (alreadyReferencedModules.has(newHead)) continue;
				alreadyReferencedModules.add(newHead);
				const moduleName = newHead.readableIdentifier(requestShortener);
				const detail = connection.explanation
					? ` (${connection.explanation})`
					: "";
				const newMessage = `${moduleName}${detail} --> ${message}`;
				if (visitedModules.has(newHead)) {
					incompleteResults.add(`... --> ${newMessage}`);
					continue;
				}
				visitedModules.add(newHead);
				queue.push({
					head: newHead,
					message: newMessage
				});
			} else {
				final = false;
				const newMessage = connection.explanation
					? `(${connection.explanation}) --> ${message}`
					: message;
				results.add(newMessage);
			}
		}
		if (final) {
			results.add(message);
		}
	}
	for (const result of incompleteResults) {
		results.add(result);
	}
	return Array.from(results);
};

module.exports = class WebAssemblyInInitialChunkError extends WebpackError {
	/**
	 * @param {Module} module WASM module
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {RequestShortener} requestShortener request shortener
	 */
	constructor(module, moduleGraph, chunkGraph, requestShortener) {
		const moduleChains = getInitialModuleChains(
			module,
			moduleGraph,
			chunkGraph,
			requestShortener
		);
		const message = `WebAssembly module is included in initial chunk.
This is not allowed, because WebAssembly download and compilation must happen asynchronous.
Add an async split point (i. e. import()) somewhere between your entrypoint and the WebAssembly module:
${moduleChains.map(s => `* ${s}`).join("\n")}`;

		super(message);
		this.name = "WebAssemblyInInitialChunkError";
		this.hideStack = true;
		this.module = module;
	}
};
