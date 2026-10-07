/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");
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
/** @typedef {import("../Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */

class ReadFileChunkLoadingRuntimeModule extends RuntimeModule {
	/**
	 * @param {ReadOnlyRuntimeRequirements} runtimeRequirements runtime requirements
	 */
	constructor(runtimeRequirements) {
		super("readFile chunk loading", RuntimeModule.STAGE_ATTACH);
		this.runtimeRequirements = runtimeRequirements;
	}

	/**
	 * @private
	 * @param {Chunk} chunk chunk
	 * @param {string} rootOutputDir root output directory
	 * @returns {string} generated code
	 */
	_generateBaseUri(chunk, rootOutputDir) {
		const options = chunk.getEntryOptions();
		if (options && options.baseUri) {
			return `${RuntimeGlobals.baseURI} = ${JSON.stringify(options.baseUri)};`;
		}

		return `${RuntimeGlobals.baseURI} = require("url").pathToFileURL(${
			rootOutputDir
				? `__dirname + ${JSON.stringify(`/${rootOutputDir}`)}`
				: "__filename"
		});`;
	}

	/**
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
			/** @type {string} */ (compilation.outputOptions.path),
			false
		);

		const stateExpression = withHmr
			? `${RuntimeGlobals.hmrRuntimeStatePrefix}_readFileVm`
			: undefined;

		return Template.asString([
			withBaseURI
				? this._generateBaseUri(chunk, rootOutputDir)
				: "// no baseURI",
			"",
			"// object to store loaded chunks",
			'// "0" means "already loaded", Promise means loading',
			`var installedChunks = ${
				stateExpression ? `${stateExpression} = ${stateExpression} || ` : ""
			}{`,
			Template.indent(
				Array.from(initialChunkIds, id => `${JSON.stringify(id)}: 0`).join(
					",\n"
				)
			),
			"};",
			"",
			withOnChunkLoad
				? `${
						RuntimeGlobals.onChunksLoaded
					}.readFileVm = ${runtimeTemplate.returningFunction(
						"installedChunks[chunkId] === 0",
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
						"for(var i = 0; i < chunkIds.length; i++) {",
						Template.indent([
							"if(installedChunks[chunkIds[i]]) {",
							Template.indent(["installedChunks[chunkIds[i]][0]();"]),
							"}",
							"installedChunks[chunkIds[i]] = 0;"
						]),
						"}",
						withOnChunkLoad ? `${RuntimeGlobals.onChunksLoaded}();` : ""
					])};`
				: "// no chunk install function needed",
			"",
			withLoading
				? Template.asString([
						"// ReadFile + VM.run chunk loading for javascript",
						`${fn}.readFileVm = function(chunkId, promises) {`,
						hasJsMatcher !== false
							? Template.indent([
									"",
									"var installedChunkData = installedChunks[chunkId];",
									'if(installedChunkData !== 0) { // 0 means "already installed".',
									Template.indent([
										'// array of [resolve, reject, promise] means "currently loading"',
										"if(installedChunkData) {",
										Template.indent(["promises.push(installedChunkData[2]);"]),
										"} else {",
										Template.indent([
											hasJsMatcher === true
												? "if(true) { // all chunks have JS"
												: `if(${hasJsMatcher("chunkId")}) {`,
											Template.indent([
												"// load the chunk and return promise to it",
												"var promise = new Promise(function(resolve, reject) {",
												Template.indent([
													"installedChunkData = installedChunks[chunkId] = [resolve, reject];",
													`var filename = require('path').join(__dirname, ${JSON.stringify(
														rootOutputDir
													)} + ${
														RuntimeGlobals.getChunkScriptFilename
													}(chunkId));`,
													"require('fs').readFile(filename, 'utf-8', function(err, content) {",
													Template.indent([
														"if(err) return reject(err);",
														"var chunk = {};",
														"require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\\n})', filename)" +
															"(chunk, require, require('path').dirname(filename), filename);",
														"installChunk(chunk);"
													]),
													"});"
												]),
												"});",
												"promises.push(installedChunkData[2] = promise);"
											]),
											hasJsMatcher === true
												? "}"
												: "} else installedChunks[chunkId] = 0;"
										]),
										"}"
									]),
									"}"
								])
							: Template.indent(["installedChunks[chunkId] = 0;"]),
						"};"
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
							"return new Promise(function(resolve, reject) {",
							Template.indent([
								`var filename = require('path').join(__dirname, ${JSON.stringify(
									rootOutputDir
								)} + ${RuntimeGlobals.getChunkUpdateScriptFilename}(chunkId));`,
								"require('fs').readFile(filename, 'utf-8', function(err, content) {",
								Template.indent([
									"if(err) return reject(err);",
									"var update = {};",
									"require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\\n})', filename)" +
										"(update, require, require('path').dirname(filename), filename);",
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
									"if(runtime) currentUpdateRuntime.push(runtime);",
									"resolve();"
								]),
								"});"
							]),
							"});"
						]),
						"}",
						"",
						Template.getFunctionContent(
							require("../hmr/JavascriptHotModuleReplacement.runtime.js")
						)
							.replace(/\$key\$/g, "readFileVm")
							.replace(/\$installedChunks\$/g, "installedChunks")
							.replace(/\$loadUpdateChunk\$/g, "loadUpdateChunk")
							.replace(/\$moduleCache\$/g, RuntimeGlobals.moduleCache)
							.replace(/\$moduleFactories\$/g, RuntimeGlobals.moduleFactories)
							.replace(
								/\$ensureChunkHandlers\$/g,
								RuntimeGlobals.ensureChunkHandlers
							)
							.replace(/\$hasOwnProperty\$/g, RuntimeGlobals.hasOwnProperty)
							.replace(/\$hmrModuleData\$/g, RuntimeGlobals.hmrModuleData)
							.replace(
								/\$hmrDownloadUpdateHandlers\$/g,
								RuntimeGlobals.hmrDownloadUpdateHandlers
							)
							.replace(
								/\$hmrInvalidateModuleHandlers\$/g,
								RuntimeGlobals.hmrInvalidateModuleHandlers
							)
					])
				: "// no HMR",
			"",
			withHmrManifest
				? Template.asString([
						`${RuntimeGlobals.hmrDownloadManifest} = function() {`,
						Template.indent([
							"return new Promise(function(resolve, reject) {",
							Template.indent([
								`var filename = require('path').join(__dirname, ${JSON.stringify(
									rootOutputDir
								)} + ${RuntimeGlobals.getUpdateManifestFilename}());`,
								"require('fs').readFile(filename, 'utf-8', function(err, content) {",
								Template.indent([
									"if(err) {",
									Template.indent([
										'if(err.code === "ENOENT") return resolve();',
										"return reject(err);"
									]),
									"}",
									"try { resolve(JSON.parse(content)); }",
									"catch(e) { reject(e); }"
								]),
								"});"
							]),
							"});"
						]),
						"}"
					])
				: "// no HMR manifest"
		]);
	}
}

module.exports = ReadFileChunkLoadingRuntimeModule;
