/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @thelarkinn
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module")} Module */

/**
 * Error raised when webpack detects an attempt to lazy-load a chunk name that
 * is already claimed by an entrypoint's initial chunk.
 */
class AsyncDependencyToInitialChunkError extends WebpackError {
	/**
	 * Captures the chunk name, originating module, and source location for an
	 * invalid async dependency targeting an initial chunk.
	 * @param {string} chunkName Name of Chunk
	 * @param {Module} module module tied to dependency
	 * @param {DependencyLocation} loc location of dependency
	 */
	constructor(chunkName, module, loc) {
		super(
			`It's not allowed to load an initial chunk on demand. The chunk name "${chunkName}" is already used by an entrypoint.`
		);

		/** @type {string} */
		this.name = "AsyncDependencyToInitialChunkError";
		/** @type {Module} */
		this.module = module;
		/** @type {DependencyLocation} */
		this.loc = loc;
	}
}

module.exports = AsyncDependencyToInitialChunkError;
