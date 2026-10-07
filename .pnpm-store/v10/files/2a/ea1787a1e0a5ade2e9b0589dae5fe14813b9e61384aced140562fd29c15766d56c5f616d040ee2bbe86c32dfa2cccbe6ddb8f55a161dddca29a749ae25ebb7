/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource, RawSource } = require("webpack-sources");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const { getUndoPath } = require("../util/identifier");
const {
	createChunkHashHandler,
	getChunkInfo
} = require("./ChunkFormatHelpers");
const {
	getChunkFilenameTemplate,
	getCompilationHooks
} = require("./JavascriptModulesPlugin");
const { generateEntryStartup } = require("./StartupHelpers");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "CommonJsChunkFormatPlugin";

class CommonJsChunkFormatPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.additionalChunkRuntimeRequirements.tap(
				PLUGIN_NAME,
				(chunk, set, { chunkGraph }) => {
					if (chunk.hasRuntime()) return;
					if (chunkGraph.getNumberOfEntryModules(chunk) > 0) {
						set.add(RuntimeGlobals.require);
						set.add(RuntimeGlobals.startupEntrypoint);
						set.add(RuntimeGlobals.externalInstallChunk);
					}
				}
			);
			const hooks = getCompilationHooks(compilation);
			hooks.renderChunk.tap(PLUGIN_NAME, (modules, renderContext) => {
				const { chunk, chunkGraph, runtimeTemplate } = renderContext;
				const source = new ConcatSource();
				source.add(`exports.id = ${JSON.stringify(chunk.id)};\n`);
				source.add(`exports.ids = ${JSON.stringify(chunk.ids)};\n`);
				source.add("exports.modules = ");
				source.add(modules);
				source.add(";\n");
				const runtimeModules = chunkGraph.getChunkRuntimeModulesInOrder(chunk);
				if (runtimeModules.length > 0) {
					source.add("exports.runtime =\n");
					source.add(
						Template.renderChunkRuntimeModules(runtimeModules, renderContext)
					);
				}
				const { entries, runtimeChunk } = getChunkInfo(chunk, chunkGraph);
				if (runtimeChunk) {
					const currentOutputName = compilation
						.getPath(
							getChunkFilenameTemplate(chunk, compilation.outputOptions),
							{
								chunk,
								contentHashType: "javascript"
							}
						)
						.replace(/^\/+/g, "")
						.split("/");
					const runtimeOutputName = compilation
						.getPath(
							getChunkFilenameTemplate(
								/** @type {Chunk} */
								(runtimeChunk),
								compilation.outputOptions
							),
							{
								chunk: /** @type {Chunk} */ (runtimeChunk),
								contentHashType: "javascript"
							}
						)
						.replace(/^\/+/g, "")
						.split("/");

					// remove common parts
					while (
						currentOutputName.length > 1 &&
						runtimeOutputName.length > 1 &&
						currentOutputName[0] === runtimeOutputName[0]
					) {
						currentOutputName.shift();
						runtimeOutputName.shift();
					}
					const last = runtimeOutputName.join("/");
					// create final path
					const runtimePath =
						getUndoPath(currentOutputName.join("/"), last, true) + last;

					const entrySource = new ConcatSource();
					entrySource.add(
						`(${
							runtimeTemplate.supportsArrowFunction() ? "() => " : "function() "
						}{\n`
					);
					entrySource.add("var exports = {};\n");
					entrySource.add(source);
					entrySource.add(";\n\n// load runtime\n");
					entrySource.add(
						`var ${RuntimeGlobals.require} = require(${JSON.stringify(
							runtimePath
						)});\n`
					);
					entrySource.add(`${RuntimeGlobals.externalInstallChunk}(exports);\n`);
					const startupSource = new RawSource(
						generateEntryStartup(
							chunkGraph,
							runtimeTemplate,
							entries,
							chunk,
							false
						)
					);
					entrySource.add(
						hooks.renderStartup.call(
							startupSource,
							entries[entries.length - 1][0],
							renderContext
						)
					);
					entrySource.add("\n})()");
					return entrySource;
				}
				return source;
			});

			hooks.chunkHash.tap(PLUGIN_NAME, createChunkHashHandler(PLUGIN_NAME));
		});
	}
}

module.exports = CommonJsChunkFormatPlugin;
