/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Chunk")} Chunk */

class ChunkRenderError extends WebpackError {
	/**
	 * Create a new ChunkRenderError
	 * @param {Chunk} chunk A chunk
	 * @param {string} file Related file
	 * @param {Error} error Original error
	 */
	constructor(chunk, file, error) {
		super();

		/** @type {string} */
		this.name = "ChunkRenderError";
		/** @type {Chunk} */
		this.chunk = chunk;
		/** @type {string} */
		this.file = file;
		/** @type {Error} */
		this.error = error;
		/** @type {string} */
		this.message = error.message;
		/** @type {string} */
		this.details = error.stack;
	}
}

/** @type {typeof ChunkRenderError} */
module.exports = ChunkRenderError;
