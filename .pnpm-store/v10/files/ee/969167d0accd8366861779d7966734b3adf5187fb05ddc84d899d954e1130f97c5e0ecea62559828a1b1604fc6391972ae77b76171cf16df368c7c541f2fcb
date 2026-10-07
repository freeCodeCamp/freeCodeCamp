/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");
const {
	generateJavascriptHMR
} = require("../hmr/JavascriptHotModuleReplacementHelper");
const {
	chunkHasJs,
	getChunkFilenameTemplate
} = require("../javascript/JavascriptModulesPlugin");
const { getInitialChunkIds } = require("../javascript/StartupHelpers");
const compileBooleanMatcher = require("../util/compileBooleanMatcher");
const { getUndoPath } = require("../util/identifier");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */

class RequireChunkLoadingRuntimeModule extends RuntimeModule {
	/**
	 * Creates an instance of RequireChunkLoadingRuntimeModule.
	 * @param {ReadOnlyRuntimeRequirements} runtimeRequirements runtime requirements
	 */
	constructor(runtimeRequirements) {
		super("require chunk loading", RuntimeModule.STAGE_ATTACH);
		/** @type {ReadOnlyRuntimeRequirements} */
		this.runtimeRequirements = runtimeRequirements;
	}

	/**
	 * Returns generated code.
	 * @private
	 * @param {Chunk} chunk chunk
	 * @param {string} rootOutputDir root output directory
	 * @param {RuntimeTemplate} runtimeTemplate the runtime template
	 * @returns {string} generated code
	 */
	_generateBaseUri(chunk, rootOutputDir, runtimeTemplate) {
		const options = chunk.getEntryOptions();
		if (options && options.baseUri) {
			return `${RuntimeGlobals.baseURI} = ${JSON.stringify(options.baseUri)};`;
		}

		return `${RuntimeGlobals.baseURI} = require(${runtimeTemplate.renderNodePrefixForCoreModule("url")}).pathToFileURL(${
			rootOutputDir !== "./"
				? `__dirname + ${JSON.stringify(`/${rootOutputDir}`)}`
				: "__filename"
		});`;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const { runtimeTemplate } = compilation;
		const fn = RuntimeGlobals.ensureChunkHandlers;
		const withBaseURI = this.runtimeRequirements.has(RuntimeGlobals.baseURI);
		const withExternalInstallChunk = this.runtimeRequirements.has(
			RuntimeGlobals.externalInstallChunk
		);
		const withOnChunkLoad = this.runtimeRequirements.has(
			RuntimeGlobals.onChunksLoaded
		);
		const withLoading = this.runtimeRequirements.has(
			RuntimeGlobals.ensureChunkHandlers
		);
		const withHmr = this.runtimeRequirements.has(
			RuntimeGlobals.hmrDownloadUpdateHandlers
		);
		const withHmrManifest = this.runtimeRequirements.has(
			RuntimeGlobals.hmrDownloadManifest
		);
		const conditionMap = chunkGraph.getChunkConditionMap(chunk, chunkHasJs);
		const hasJsMatcher = compileBooleanMatcher(conditionMap);
		const initialChunkIds = getInitialChunkIds(chunk, chunkGraph, chunkHasJs);

		const outputName = compilation.getPath(
			getChunkFilenameTemplate(chunk, compilation.outputOptions),
			{
				chunk,
				contentHashType: "javascript"
			}
		);
		const rootOutputDir = getUndoPath(
			outputName,
			compilation.outputOptions.path,
			true
		);

		const stateExpression = withHmr
			? `${RuntimeGlobals.hmrRuntimeStatePrefix}_require`
			: undefined;

		return Template.asString([
			withBaseURI
				? this._generateBaseUri(chunk, rootOutputDir, runtimeTemplate)
				: "// no baseURI",
			"",
			"// object to store loaded chunks",
			'// "1" means "loaded", otherwise not loaded yet',
			`var installedChunks = ${
				stateExpression ? `${stateExpression} = ${stateExpression} || ` : ""
			}{`,
			Template.indent(
				Array.from(initialChunkIds, (id) => `${JSON.stringify(id)}: 1`).join(
					",\n"
				)
			),
			"};",
			"",
			withOnChunkLoad
				? `${
						RuntimeGlobals.onChunksLoaded
					}.require = ${runtimeTemplate.returningFunction(
						"installedChunks[chunkId]",
						"chunkId"
					)};`
				: "// no on chunks loaded",
			"",
			withLoading || withExternalInstallChunk
				? `var installChunk = ${runtimeTemplate.basicFunction("chunk", [
						"var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;",
						"for(var moduleId in moreModules) {",
						Template.indent([
							`if(${RuntimeGlobals.hasOwnProperty}(moreModules, moduleId)) {`,
							Template.indent([
								`${RuntimeGlobals.moduleFactories}[moduleId] = moreModules[moduleId];`
							]),
							"}"
						]),
						"}",
						`if(runtime) runtime(${RuntimeGlobals.require});`,
						"for(var i = 0; i < chunkIds.length; i++)",
						Template.indent("installedChunks[chunkIds[i]] = 1;"),
						withOnChunkLoad ? `${RuntimeGlobals.onChunksLoaded}();` : ""
					])};`
				: "// no chunk install function needed",
			"",
			withLoading
				? Template.asString([
						"// require() chunk loading for javascript",
						`${fn}.require = ${runtimeTemplate.basicFunction(
							"chunkId, promises",
							hasJsMatcher !== false
								? [
										'// "1" is the signal for "already loaded"',
										"if(!installedChunks[chunkId]) {",
										Template.indent([
											hasJsMatcher === true
												? "if(true) { // all chunks have JS"
												: `if(${hasJsMatcher("chunkId")}) {`,
											Template.indent([
												// The require function loads and runs a chunk. When the chunk is being run,
												// it can call __webpack_require__.C to directly complete installed.
												`var installedChunk = require(${JSON.stringify(
													rootOutputDir
												)} + ${
													RuntimeGlobals.getChunkScriptFilename
												}(chunkId));`,
												"if (!installedChunks[chunkId]) {",
												Template.indent(["installChunk(installedChunk);"]),
												"}"
											]),
											"} else installedChunks[chunkId] = 1;",
											""
										]),
										"}"
									]
								: "installedChunks[chunkId] = 1;"
						)};`
					])
				: "// no chunk loading",
			"",
			withExternalInstallChunk
				? Template.asString([
						`module.exports = ${RuntimeGlobals.require};`,
						`${RuntimeGlobals.externalInstallChunk} = installChunk;`
					])
				: "// no external install chunk",
			"",
			withHmr
				? Template.asString([
						"function loadUpdateChunk(chunkId, updatedModulesList) {",
						Template.indent([
							`var update = require(${JSON.stringify(rootOutputDir)} + ${
								RuntimeGlobals.getChunkUpdateScriptFilename
							}(chunkId));`,
							"var updatedModules = update.modules;",
							"var runtime = update.runtime;",
							"for(var moduleId in updatedModules) {",
							Template.indent([
								`if(${RuntimeGlobals.hasOwnProperty}(updatedModules, moduleId)) {`,
								Template.indent([
									"currentUpdate[moduleId] = updatedModules[moduleId];",
									"if(updatedModulesList) updatedModulesList.push(moduleId);"
								]),
								"}"
							]),
							"}",
							"if(runtime) currentUpdateRuntime.push(runtime);"
						]),
						"}",
						"",
						generateJavascriptHMR("require")
					])
				: "// no HMR",
			"",
			withHmrManifest
				? Template.asString([
						`${RuntimeGlobals.hmrDownloadManifest} = function() {`,
						Template.indent([
							"return Promise.resolve().then(function() {",
							Template.indent([
								`return require(${JSON.stringify(rootOutputDir)} + ${
									RuntimeGlobals.getUpdateManifestFilename
								}());`
							]),
							`}).catch(${runtimeTemplate.basicFunction("err", [
								"if(['MODULE_NOT_FOUND', 'ENOENT'].includes(err.code)) return;",
								"throw err;"
							])});`
						]),
						"}"
					])
				: "// no HMR manifest"
		]);
	}
}

module.exports = RequireChunkLoadingRuntimeModule;
