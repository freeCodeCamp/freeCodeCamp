/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const { RuntimeGlobals } = require("..");
const HotUpdateChunk = require("../HotUpdateChunk");
const Template = require("../Template");
const { getAllChunks } = require("../javascript/ChunkHelpers");
const {
	chunkHasJs,
	getCompilationHooks,
	getChunkFilenameTemplate
} = require("../javascript/JavascriptModulesPlugin");
const { updateHashForEntryStartup } = require("../javascript/StartupHelpers");
const { getUndoPath } = require("../util/identifier");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Entrypoint")} Entrypoint */

class ModuleChunkFormatPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(
			"ModuleChunkFormatPlugin",
			compilation => {
				compilation.hooks.additionalChunkRuntimeRequirements.tap(
					"ModuleChunkFormatPlugin",
					(chunk, set) => {
						if (chunk.hasRuntime()) return;
						if (compilation.chunkGraph.getNumberOfEntryModules(chunk) > 0) {
							set.add(RuntimeGlobals.require);
							set.add(RuntimeGlobals.startupEntrypoint);
							set.add(RuntimeGlobals.externalInstallChunk);
						}
					}
				);
				const hooks = getCompilationHooks(compilation);
				hooks.renderChunk.tap(
					"ModuleChunkFormatPlugin",
					(modules, renderContext) => {
						const { chunk, chunkGraph, runtimeTemplate } = renderContext;
						const hotUpdateChunk =
							chunk instanceof HotUpdateChunk ? chunk : null;
						const source = new ConcatSource();
						if (hotUpdateChunk) {
							throw new Error(
								"HMR is not implemented for module chunk format yet"
							);
						} else {
							source.add(
								`export const __webpack_id__ = ${JSON.stringify(chunk.id)};\n`
							);
							source.add(
								`export const __webpack_ids__ = ${JSON.stringify(chunk.ids)};\n`
							);
							source.add("export const __webpack_modules__ = ");
							source.add(modules);
							source.add(";\n");
							const runtimeModules =
								chunkGraph.getChunkRuntimeModulesInOrder(chunk);
							if (runtimeModules.length > 0) {
								source.add("export const __webpack_runtime__ =\n");
								source.add(
									Template.renderChunkRuntimeModules(
										runtimeModules,
										renderContext
									)
								);
							}
							const entries = Array.from(
								chunkGraph.getChunkEntryModulesWithChunkGroupIterable(chunk)
							);
							if (entries.length > 0) {
								const runtimeChunk =
									/** @type {Entrypoint[][]} */
									(entries)[0][1].getRuntimeChunk();
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

								/**
								 * @param {Chunk} chunk the chunk
								 * @returns {string} the relative path
								 */
								const getRelativePath = chunk => {
									const baseOutputName = currentOutputName.slice();
									const chunkOutputName = compilation
										.getPath(
											getChunkFilenameTemplate(
												chunk,
												compilation.outputOptions
											),
											{
												chunk,
												contentHashType: "javascript"
											}
										)
										.replace(/^\/+/g, "")
										.split("/");

									// remove common parts except filename
									while (
										baseOutputName.length > 1 &&
										chunkOutputName.length > 1 &&
										baseOutputName[0] === chunkOutputName[0]
									) {
										baseOutputName.shift();
										chunkOutputName.shift();
									}
									const last = chunkOutputName.join("/");
									// create final path
									return (
										getUndoPath(baseOutputName.join("/"), last, true) + last
									);
								};

								const entrySource = new ConcatSource();
								entrySource.add(source);
								entrySource.add(";\n\n// load runtime\n");
								entrySource.add(
									`import ${RuntimeGlobals.require} from ${JSON.stringify(
										getRelativePath(/** @type {Chunk} */ (runtimeChunk))
									)};\n`
								);

								const startupSource = new ConcatSource();
								startupSource.add(
									`var __webpack_exec__ = ${runtimeTemplate.returningFunction(
										`${RuntimeGlobals.require}(${RuntimeGlobals.entryModuleId} = moduleId)`,
										"moduleId"
									)}\n`
								);

								const loadedChunks = new Set();
								let index = 0;
								for (let i = 0; i < entries.length; i++) {
									const [module, entrypoint] = entries[i];
									const final = i + 1 === entries.length;
									const moduleId = chunkGraph.getModuleId(module);
									const chunks = getAllChunks(
										/** @type {Entrypoint} */ (entrypoint),
										/** @type {Chunk} */ (runtimeChunk),
										undefined
									);
									for (const chunk of chunks) {
										if (
											loadedChunks.has(chunk) ||
											!chunkHasJs(chunk, chunkGraph)
										)
											continue;
										loadedChunks.add(chunk);
										startupSource.add(
											`import * as __webpack_chunk_${index}__ from ${JSON.stringify(
												getRelativePath(chunk)
											)};\n`
										);
										startupSource.add(
											`${RuntimeGlobals.externalInstallChunk}(__webpack_chunk_${index}__);\n`
										);
										index++;
									}
									startupSource.add(
										`${
											final ? `var ${RuntimeGlobals.exports} = ` : ""
										}__webpack_exec__(${JSON.stringify(moduleId)});\n`
									);
								}

								entrySource.add(
									hooks.renderStartup.call(
										startupSource,
										entries[entries.length - 1][0],
										{
											...renderContext,
											inlined: false
										}
									)
								);
								return entrySource;
							}
						}
						return source;
					}
				);
				hooks.chunkHash.tap(
					"ModuleChunkFormatPlugin",
					(chunk, hash, { chunkGraph, runtimeTemplate }) => {
						if (chunk.hasRuntime()) return;
						hash.update("ModuleChunkFormatPlugin");
						hash.update("1");
						const entries = Array.from(
							chunkGraph.getChunkEntryModulesWithChunkGroupIterable(chunk)
						);
						updateHashForEntryStartup(hash, chunkGraph, entries, chunk);
					}
				);
			}
		);
	}
}

module.exports = ModuleChunkFormatPlugin;
