/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

const WASM_HEADER = Buffer.from([0x00, 0x61, 0x73, 0x6d]);

class ModuleParseError extends WebpackError {
	/**
	 * @param {string | Buffer} source source code
	 * @param {Error & any} err the parse error
	 * @param {string[]} loaders the loaders used
	 * @param {string} type module type
	 */
	constructor(source, err, loaders, type) {
		let message = `Module parse failed: ${err && err.message}`;
		let loc;

		if (
			((Buffer.isBuffer(source) && source.slice(0, 4).equals(WASM_HEADER)) ||
				(typeof source === "string" && /^\0asm/.test(source))) &&
			!type.startsWith("webassembly")
		) {
			message +=
				"\nThe module seem to be a WebAssembly module, but module is not flagged as WebAssembly module for webpack.";
			message +=
				"\nBREAKING CHANGE: Since webpack 5 WebAssembly is not enabled by default and flagged as experimental feature.";
			message +=
				"\nYou need to enable one of the WebAssembly experiments via 'experiments.asyncWebAssembly: true' (based on async modules) or 'experiments.syncWebAssembly: true' (like webpack 4, deprecated).";
			message +=
				"\nFor files that transpile to WebAssembly, make sure to set the module type in the 'module.rules' section of the config (e. g. 'type: \"webassembly/async\"').";
		} else if (!loaders) {
			message +=
				"\nYou may need an appropriate loader to handle this file type.";
		} else if (loaders.length >= 1) {
			message += `\nFile was processed with these loaders:${loaders
				.map(loader => `\n * ${loader}`)
				.join("")}`;
			message +=
				"\nYou may need an additional loader to handle the result of these loaders.";
		} else {
			message +=
				"\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders";
		}

		if (
			err &&
			err.loc &&
			typeof err.loc === "object" &&
			typeof err.loc.line === "number"
		) {
			const lineNumber = err.loc.line;

			if (
				Buffer.isBuffer(source) ||
				/[\0\u0001\u0002\u0003\u0004\u0005\u0006\u0007]/.test(source)
			) {
				// binary file
				message += "\n(Source code omitted for this binary file)";
			} else {
				const sourceLines = source.split(/\r?\n/);
				const start = Math.max(0, lineNumber - 3);
				const linesBefore = sourceLines.slice(start, lineNumber - 1);
				const theLine = sourceLines[lineNumber - 1];
				const linesAfter = sourceLines.slice(lineNumber, lineNumber + 2);

				message += `${linesBefore
					.map(l => `\n| ${l}`)
					.join("")}\n> ${theLine}${linesAfter.map(l => `\n| ${l}`).join("")}`;
			}

			loc = { start: err.loc };
		} else if (err && err.stack) {
			message += `\n${err.stack}`;
		}

		super(message);

		this.name = "ModuleParseError";
		this.loc = loc;
		this.error = err;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.error);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.error = read();

		super.deserialize(context);
	}
}

makeSerializable(ModuleParseError, "webpack/lib/ModuleParseError");

module.exports = ModuleParseError;
