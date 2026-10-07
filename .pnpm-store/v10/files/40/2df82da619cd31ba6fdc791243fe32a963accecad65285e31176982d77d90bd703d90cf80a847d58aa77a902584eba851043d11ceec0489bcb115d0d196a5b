/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const { HotUpdateChunk, RuntimeGlobals } = require("..");
const { JAVASCRIPT_TYPE } = require("../ModuleSourceTypeConstants");
const Template = require("../Template");
const {
	createChunkHashHandler,
	getChunkInfo
} = require("../javascript/ChunkFormatHelpers");
const { getAllChunks } = require("../javascript/ChunkHelpers");
const {
	chunkHasJs,
	getChunkFilenameTemplate,
	getCompilationHooks
} = require("../javascript/JavascriptModulesPlugin");
const { getUndoPath } = require("../util/identifier");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Entrypoint")} Entrypoint */

/**
 * Gets relative path.
 * @param {Compilation} compilation the compilation instance
 * @param {Chunk} chunk the chunk
 * @param {Chunk} runtimeChunk the runtime chunk
 * @returns {string} the relative path
 */
const getRelativePath = (compilation, chunk, runtimeChunk) => {
	const currentOutputName = compilation
		.getPath(
			getChunkFilenameTemplate(runtimeChunk, compilation.outputOptions),
			{
				chunk: runtimeChunk,
				contentHashType: "javascript"
			}
		)
		.replace(/^\/+/g, "")
		.split("/");
	const baseOutputName = [...currentOutputName];
	const chunkOutputName = compilation
		.getPath(getChunkFilenameTemplate(chunk, compilation.outputOptions), {
			chunk,
			contentHashType: "javascript"
		})
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
	return getUndoPath(baseOutputName.join("/"), last, true) + last;
};

/**
 * Renders chunk import.
 * @param {Compilation} compilation the compilation instance
 * @param {Chunk} chunk the chunk to render the import for
 * @param {string=} namedImport the named import to use for the import
 * @param {Chunk=} runtimeChunk the runtime chunk
 * @returns {string} the import source
 */
function renderChunkImport(compilation, chunk, namedImport, runtimeChunk) {
	return `import ${namedImport ? `* as ${namedImport}` : `{ ${RuntimeGlobals.require} }`} from ${JSON.stringify(
		getRelativePath(compilation, chunk, runtimeChunk || chunk)
	)};\n`;
}

/**
 * Gets chunk named import.
 * @param {number} index the index of the chunk
 * @returns {string} the named import to use for the import
 */
function getChunkNamedImport(index) {
	return `__webpack_chunk_${index}__`;
}

const PLUGIN_NAME = "ModuleChunkFormatPlugin";

class ModuleChunkFormatPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.additionalChunkRuntimeRequirements.tap(
				PLUGIN_NAME,
				(chunk, set) => {
					if (chunk.hasRuntime()) return;
					if (compilation.chunkGraph.getNumberOfEntryModules(chunk) > 0) {
						set.add(RuntimeGlobals.require);
						set.add(RuntimeGlobals.externalInstallChunk);
					}
				}
			);
			const hooks = getCompilationHooks(compilation);
			/**
			 * With dependent chunks.
			 * @param {Iterable<Chunk>} chunks the chunks to render
			 * @param {ChunkGraph} chunkGraph the chunk graph
			 * @param {Chunk=} runtimeChunk the runtime chunk
			 * @returns {Source | undefined} the source
			 */
			const withDependentChunks = (chunks, chunkGraph, runtimeChunk) => {
				if (/** @type {Set<Chunk>} */ (chunks).size > 0) {
					const source = new ConcatSource();
					let index = 0;

					for (const chunk of chunks) {
						index++;

						if (!chunkHasJs(chunk, chunkGraph)) {
							continue;
						}
						const namedImport = getChunkNamedImport(index);
						source.add(
							renderChunkImport(
								compilation,
								chunk,
								namedImport,
								runtimeChunk || chunk
							)
						);
						source.add(
							`${RuntimeGlobals.externalInstallChunk}(${namedImport});\n`
						);
					}
					return source;
				}
			};
			hooks.renderStartup.tap(
				PLUGIN_NAME,
				(modules, _lastModule, renderContext) => {
					const { chunk, chunkGraph } = renderContext;
					if (
						chunkGraph.getNumberOfEntryModules(chunk) > 0 &&
						chunk.hasRuntime()
					) {
						const entryDependentChunks =
							chunkGraph.getChunkEntryDependentChunksIterable(chunk);
						const sourceWithDependentChunks = withDependentChunks(
							entryDependentChunks,
							chunkGraph,
							chunk
						);
						if (!sourceWithDependentChunks) {
							return modules;
						}
						if (modules.size() === 0) {
							return sourceWithDependentChunks;
						}
						const source = new ConcatSource();
						source.add(sourceWithDependentChunks);
						source.add("\n");
						source.add(modules);
						return source;
					}
					return modules;
				}
			);
			hooks.renderChunk.tap(PLUGIN_NAME, (modules, renderContext) => {
				const { chunk, chunkGraph, runtimeTemplate } = renderContext;
				const hotUpdateChunk = chunk instanceof HotUpdateChunk ? chunk : null;
				const source = new ConcatSource();
				source.add(
					`export const ${RuntimeGlobals.esmId} = ${JSON.stringify(chunk.id)};\n`
				);
				source.add(
					`export const ${RuntimeGlobals.esmIds} = ${JSON.stringify(chunk.ids)};\n`
				);
				source.add(`export const ${RuntimeGlobals.esmModules} = `);
				source.add(modules);
				source.add(";\n");
				const runtimeModules = chunkGraph.getChunkRuntimeModulesInOrder(chunk);
				if (runtimeModules.length > 0) {
					source.add(`export const ${RuntimeGlobals.esmRuntime} =\n`);
					source.add(
						Template.renderChunkRuntimeModules(runtimeModules, renderContext)
					);
				}
				if (hotUpdateChunk) {
					return source;
				}
				const { entries, runtimeChunk } = getChunkInfo(chunk, chunkGraph);
				if (runtimeChunk) {
					const entrySource = new ConcatSource();
					entrySource.add(source);
					entrySource.add(";\n\n// load runtime\n");
					entrySource.add(
						renderChunkImport(compilation, runtimeChunk, "", chunk)
					);
					const startupSource = new ConcatSource();
					startupSource.add(
						`var __webpack_exec__ = ${runtimeTemplate.returningFunction(
							`${RuntimeGlobals.require}(${RuntimeGlobals.entryModuleId} = moduleId)`,
							"moduleId"
						)}\n`
					);

					/** @type {Set<Chunk>} */
					const loadedChunks = new Set();
					for (let i = 0; i < entries.length; i++) {
						const [module, entrypoint] = entries[i];
						if (!chunkGraph.getModuleSourceTypes(module).has(JAVASCRIPT_TYPE)) {
							continue;
						}
						const final = i + 1 === entries.length;
						const moduleId = chunkGraph.getModuleId(module);
						const chunks = getAllChunks(
							/** @type {Entrypoint} */ (entrypoint),
							/** @type {Chunk} */ (runtimeChunk),
							undefined
						);
						/** @type {Set<Chunk>} */
						const processChunks = new Set();
						for (const chunk of chunks) {
							if (loadedChunks.has(chunk)) {
								continue;
							}
							loadedChunks.add(chunk);
							processChunks.add(chunk);
						}
						const sourceWithDependentChunks = withDependentChunks(
							processChunks,
							chunkGraph,
							chunk
						);
						if (sourceWithDependentChunks) {
							startupSource.add("\n");
							startupSource.add(sourceWithDependentChunks);
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
							renderContext
						)
					);
					return entrySource;
				}
				return source;
			});
			hooks.chunkHash.tap(PLUGIN_NAME, createChunkHashHandler(PLUGIN_NAME));
		});
	}
}

module.exports = ModuleChunkFormatPlugin;
