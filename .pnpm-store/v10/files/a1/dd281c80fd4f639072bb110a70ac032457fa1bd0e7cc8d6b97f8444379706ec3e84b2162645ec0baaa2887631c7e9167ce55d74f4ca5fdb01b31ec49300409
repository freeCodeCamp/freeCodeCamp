/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const asyncLib = require("neo-async");
const EntryDependency = require("./dependencies/EntryDependency");
const { someInIterable } = require("./util/IterableHelpers");
const { compareModulesById } = require("./util/comparators");
const { dirname, mkdirp } = require("./util/fs");

/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Compiler").IntermediateFileSystem} IntermediateFileSystem */
/** @typedef {import("./Module").BuildMeta} BuildMeta */

/**
 * @typedef {object} ManifestModuleData
 * @property {string | number} id
 * @property {BuildMeta} buildMeta
 * @property {boolean | string[] | undefined} exports
 */

/**
 * @typedef {object} LibManifestPluginOptions
 * @property {string=} context Context of requests in the manifest file (defaults to the webpack context).
 * @property {boolean=} entryOnly If true, only entry points will be exposed (default: true).
 * @property {boolean=} format If true, manifest json file (output) will be formatted.
 * @property {string=} name Name of the exposed dll function (external name, use value of 'output.library').
 * @property {string} path Absolute path to the manifest json file (output).
 * @property {string=} type Type of the dll bundle (external type, use value of 'output.libraryTarget').
 */

class LibManifestPlugin {
	/**
	 * @param {LibManifestPluginOptions} options the options
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
		compiler.hooks.emit.tapAsync(
			{
				name: "LibManifestPlugin",
				stage: 110
			},
			(compilation, callback) => {
				const moduleGraph = compilation.moduleGraph;
				// store used paths to detect issue and output an error. #18200
				const usedPaths = new Set();
				asyncLib.each(
					Array.from(compilation.chunks),
					(chunk, callback) => {
						if (!chunk.canBeInitial()) {
							callback();
							return;
						}
						const chunkGraph = compilation.chunkGraph;
						const targetPath = compilation.getPath(this.options.path, {
							chunk
						});
						if (usedPaths.has(targetPath)) {
							callback(new Error("each chunk must have a unique path"));
							return;
						}
						usedPaths.add(targetPath);
						const name =
							this.options.name &&
							compilation.getPath(this.options.name, {
								chunk,
								contentHashType: "javascript"
							});
						const content = Object.create(null);
						for (const module of chunkGraph.getOrderedChunkModulesIterable(
							chunk,
							compareModulesById(chunkGraph)
						)) {
							if (
								this.options.entryOnly &&
								!someInIterable(
									moduleGraph.getIncomingConnections(module),
									c => c.dependency instanceof EntryDependency
								)
							) {
								continue;
							}
							const ident = module.libIdent({
								context:
									this.options.context ||
									/** @type {string} */ (compiler.options.context),
								associatedObjectForCache: compiler.root
							});
							if (ident) {
								const exportsInfo = moduleGraph.getExportsInfo(module);
								const providedExports = exportsInfo.getProvidedExports();
								/** @type {ManifestModuleData} */
								const data = {
									id: /** @type {ModuleId} */ (chunkGraph.getModuleId(module)),
									buildMeta: /** @type {BuildMeta} */ (module.buildMeta),
									exports: Array.isArray(providedExports)
										? providedExports
										: undefined
								};
								content[ident] = data;
							}
						}
						const manifest = {
							name,
							type: this.options.type,
							content
						};
						// Apply formatting to content if format flag is true;
						const manifestContent = this.options.format
							? JSON.stringify(manifest, null, 2)
							: JSON.stringify(manifest);
						const buffer = Buffer.from(manifestContent, "utf8");
						const intermediateFileSystem =
							/** @type {IntermediateFileSystem} */ (
								compiler.intermediateFileSystem
							);
						mkdirp(
							intermediateFileSystem,
							dirname(intermediateFileSystem, targetPath),
							err => {
								if (err) return callback(err);
								intermediateFileSystem.writeFile(targetPath, buffer, callback);
							}
						);
					},
					callback
				);
			}
		);
	}
}
module.exports = LibManifestPlugin;
