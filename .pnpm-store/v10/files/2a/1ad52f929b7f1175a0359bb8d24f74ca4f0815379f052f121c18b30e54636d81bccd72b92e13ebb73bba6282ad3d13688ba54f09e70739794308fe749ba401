/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const CachedInputFileSystem = require("enhanced-resolve").CachedInputFileSystem;
const fs = require("graceful-fs");
const createConsoleLogger = require("../logging/createConsoleLogger");
const NodeWatchFileSystem = require("./NodeWatchFileSystem");
const nodeConsole = require("./nodeConsole");

/** @typedef {import("../../declarations/WebpackOptions").InfrastructureLogging} InfrastructureLogging */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */

class NodeEnvironmentPlugin {
	/**
	 * @param {object} options options
	 * @param {InfrastructureLogging} options.infrastructureLogging infrastructure logging options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { infrastructureLogging } = this.options;
		compiler.infrastructureLogger = createConsoleLogger({
			level: infrastructureLogging.level || "info",
			debug: infrastructureLogging.debug || false,
			console:
				infrastructureLogging.console ||
				nodeConsole({
					colors: infrastructureLogging.colors,
					appendOnly: infrastructureLogging.appendOnly,
					stream:
						/** @type {NodeJS.WritableStream} */
						(infrastructureLogging.stream)
				})
		});
		compiler.inputFileSystem = new CachedInputFileSystem(fs, 60000);
		const inputFileSystem =
			/** @type {InputFileSystem} */
			(compiler.inputFileSystem);
		compiler.outputFileSystem = fs;
		compiler.intermediateFileSystem = fs;
		compiler.watchFileSystem = new NodeWatchFileSystem(inputFileSystem);
		compiler.hooks.beforeRun.tap("NodeEnvironmentPlugin", compiler => {
			if (
				compiler.inputFileSystem === inputFileSystem &&
				inputFileSystem.purge
			) {
				compiler.fsStartTime = Date.now();
				inputFileSystem.purge();
			}
		});
	}
}

module.exports = NodeEnvironmentPlugin;
