/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const { SyncWaterfallHook } = require("tapable");
const Compilation = require("../Compilation");
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
/** @typedef {import("../Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */

/**
 * Defines the jsonp compilation plugin hooks type used by this module.
 * @typedef {object} JsonpCompilationPluginHooks
 * @property {SyncWaterfallHook<[string, Chunk]>} linkPreload
 * @property {SyncWaterfallHook<[string, Chunk]>} linkPrefetch
 */

/** @type {WeakMap<Compilation, JsonpCompilationPluginHooks>} */
const compilationHooksMap = new WeakMap();

class ModuleChunkLoadingRuntimeModule extends RuntimeModule {
	/**
	 * Returns hooks.
	 * @param {Compilation} compilation the compilation
	 * @returns {JsonpCompilationPluginHooks} hooks
	 */
	static getCompilationHooks(compilation) {
		if (!(compilation instanceof Compilation)) {
			throw new TypeError(
				"The 'compilation' argument must be an instance of Compilation"
			);
		}
		let hooks = compilationHooksMap.get(compilation);
		if (hooks === undefined) {
			hooks = {
				linkPreload: new SyncWaterfallHook(["source", "chunk"]),
				linkPrefetch: new SyncWaterfallHook(["source", "chunk"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * Creates an instance of ModuleChunkLoadingRuntimeModule.
	 * @param {ReadOnlyRuntimeRequirements} runtimeRequirements runtime requirements
	 */
	constructor(runtimeRequirements) {
		super("import chunk loading", RuntimeModule.STAGE_ATTACH);
		/** @type {ReadOnlyRuntimeRequirements} */
		this._runtimeRequirements = runtimeRequirements;
	}

	/**
	 * Returns generated code.
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
		const compilation = /** @type {Compilation} */ (this.compilation);
		const {
			outputOptions: { importMetaName }
		} = compilation;
		return `${RuntimeGlobals.baseURI} = new URL(${JSON.stringify(
			rootOutputDir
		)}, ${importMetaName}.url);`;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const environment = compilation.outputOptions.environment;
		const {
			runtimeTemplate,
			outputOptions: { importFunctionName, crossOriginLoading, charset }
		} = compilation;
		const fn = RuntimeGlobals.ensureChunkHandlers;
		const withBaseURI = this._runtimeRequirements.has(RuntimeGlobals.baseURI);
		const withExternalInstallChunk = this._runtimeRequirements.has(
			RuntimeGlobals.externalInstallChunk
		);
		const withLoading = this._runtimeRequirements.has(
			RuntimeGlobals.ensureChunkHandlers
		);
		const withOnChunkLoad = this._runtimeRequirements.has(
			RuntimeGlobals.onChunksLoaded
		);
		const withHmr = this._runtimeRequirements.has(
			RuntimeGlobals.hmrDownloadUpdateHandlers
		);
		const withHmrManifest = this._runtimeRequirements.has(
			RuntimeGlobals.hmrDownloadManifest
		);
		const { linkPreload, linkPrefetch } =
			ModuleChunkLoadingRuntimeModule.getCompilationHooks(compilation);
		const isNeutralPlatform = runtimeTemplate.isNeutralPlatform();
		const withPrefetch =
			(environment.document || isNeutralPlatform) &&
			this._runtimeRequirements.has(RuntimeGlobals.prefetchChunkHandlers) &&
			chunk.hasChildByOrder(chunkGraph, "prefetch", true, chunkHasJs);
		const withPreload =
			(environment.document || isNeutralPlatform) &&
			this._runtimeRequirements.has(RuntimeGlobals.preloadChunkHandlers) &&
			chunk.hasChildByOrder(chunkGraph, "preload", true, chunkHasJs);
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
			? `${RuntimeGlobals.hmrRuntimeStatePrefix}_module`
			: undefined;

		return Template.asString([
			withBaseURI
				? this._generateBaseUri(chunk, rootOutputDir)
				: "// no baseURI",
			"",
			"// object to store loaded and loading chunks",
			"// undefined = chunk not loaded, null = chunk preloaded/prefetched",
			"// [resolve, Promise] = chunk loading, 0 = chunk loaded",
			`var installedChunks = ${
				stateExpression ? `${stateExpression} = ${stateExpression} || ` : ""
			}{`,
			Template.indent(
				Array.from(initialChunkIds, (id) => `${JSON.stringify(id)}: 0`).join(
					",\n"
				)
			),
			"};",
			"",
			withLoading || withExternalInstallChunk
				? `var installChunk = ${runtimeTemplate.basicFunction("data", [
						runtimeTemplate.destructureObject(
							[
								RuntimeGlobals.esmIds,
								RuntimeGlobals.esmModules,
								RuntimeGlobals.esmRuntime
							],
							"data"
						),
						'// add "modules" to the modules object,',
						'// then flag all "ids" as loaded and fire callback',
						"var moduleId, chunkId, i = 0;",
						`for(moduleId in ${RuntimeGlobals.esmModules}) {`,
						Template.indent([
							`if(${RuntimeGlobals.hasOwnProperty}(${RuntimeGlobals.esmModules}, moduleId)) {`,
							Template.indent(
								`${RuntimeGlobals.moduleFactories}[moduleId] = ${RuntimeGlobals.esmModules}[moduleId];`
							),
							"}"
						]),
						"}",
						`if(${RuntimeGlobals.esmRuntime}) ${RuntimeGlobals.esmRuntime}(${RuntimeGlobals.require});`,
						`for(;i < ${RuntimeGlobals.esmIds}.length; i++) {`,
						Template.indent([
							`chunkId = ${RuntimeGlobals.esmIds}[i];`,
							`if(${RuntimeGlobals.hasOwnProperty}(installedChunks, chunkId) && installedChunks[chunkId]) {`,
							Template.indent("installedChunks[chunkId][0]();"),
							"}",
							`installedChunks[${RuntimeGlobals.esmIds}[i]] = 0;`
						]),
						"}",
						withOnChunkLoad ? `${RuntimeGlobals.onChunksLoaded}();` : ""
					])}`
				: "// no install chunk",
			"",
			withLoading
				? Template.asString([
						`${fn}.j = ${runtimeTemplate.basicFunction(
							"chunkId, promises",
							hasJsMatcher !== false
								? Template.indent([
										"// import() chunk loading for javascript",
										`var installedChunkData = ${RuntimeGlobals.hasOwnProperty}(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;`,
										'if(installedChunkData !== 0) { // 0 means "already installed".',
										Template.indent([
											"",
											'// a Promise means "currently loading".',
											"if(installedChunkData) {",
											Template.indent([
												"promises.push(installedChunkData[1]);"
											]),
											"} else {",
											Template.indent([
												hasJsMatcher === true
													? "if(true) { // all chunks have JS"
													: `if(${hasJsMatcher("chunkId")}) {`,
												Template.indent([
													"// setup Promise in chunk cache",
													`var promise = ${importFunctionName}(${
														compilation.outputOptions.publicPath === "auto"
															? JSON.stringify(rootOutputDir)
															: RuntimeGlobals.publicPath
													} + ${
														RuntimeGlobals.getChunkScriptFilename
													}(chunkId)).then(installChunk, ${runtimeTemplate.basicFunction(
														"e",
														[
															"if(installedChunks[chunkId] !== 0) installedChunks[chunkId] = undefined;",
															"throw e;"
														]
													)});`,
													`var promise = Promise.race([promise, new Promise(${runtimeTemplate.expressionFunction(
														"installedChunkData = installedChunks[chunkId] = [resolve]",
														"resolve"
													)})])`,
													"promises.push(installedChunkData[1] = promise);"
												]),
												hasJsMatcher === true
													? "}"
													: "} else installedChunks[chunkId] = 0;"
											]),
											"}"
										]),
										"}"
									])
								: Template.indent(["installedChunks[chunkId] = 0;"])
						)};`
					])
				: "// no chunk on demand loading",
			"",
			withPrefetch && hasJsMatcher !== false
				? `${
						RuntimeGlobals.prefetchChunkHandlers
					}.j = ${runtimeTemplate.basicFunction("chunkId", [
						isNeutralPlatform
							? "if (typeof document === 'undefined') return;"
							: "",
						`if((!${
							RuntimeGlobals.hasOwnProperty
						}(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && ${
							hasJsMatcher === true ? "true" : hasJsMatcher("chunkId")
						}) {`,
						Template.indent([
							"installedChunks[chunkId] = null;",
							linkPrefetch.call(
								Template.asString([
									"var link = document.createElement('link');",
									charset ? "link.charset = 'utf-8';" : "",
									crossOriginLoading
										? `link.crossOrigin = ${JSON.stringify(
												crossOriginLoading
											)};`
										: "",
									`if (${RuntimeGlobals.scriptNonce}) {`,
									Template.indent(
										`link.setAttribute("nonce", ${RuntimeGlobals.scriptNonce});`
									),
									"}",
									'link.rel = "prefetch";',
									'link.as = "script";',
									`link.href = ${RuntimeGlobals.publicPath} + ${RuntimeGlobals.getChunkScriptFilename}(chunkId);`
								]),
								chunk
							),
							"document.head.appendChild(link);"
						]),
						"}"
					])};`
				: "// no prefetching",
			"",
			withPreload && hasJsMatcher !== false
				? `${
						RuntimeGlobals.preloadChunkHandlers
					}.j = ${runtimeTemplate.basicFunction("chunkId", [
						isNeutralPlatform
							? "if (typeof document === 'undefined') return;"
							: "",
						`if((!${
							RuntimeGlobals.hasOwnProperty
						}(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && ${
							hasJsMatcher === true ? "true" : hasJsMatcher("chunkId")
						}) {`,
						Template.indent([
							"installedChunks[chunkId] = null;",
							linkPreload.call(
								Template.asString([
									"var link = document.createElement('link');",
									charset ? "link.charset = 'utf-8';" : "",
									`if (${RuntimeGlobals.scriptNonce}) {`,
									Template.indent(
										`link.setAttribute("nonce", ${RuntimeGlobals.scriptNonce});`
									),
									"}",
									'link.rel = "modulepreload";',
									`link.href = ${RuntimeGlobals.publicPath} + ${RuntimeGlobals.getChunkScriptFilename}(chunkId);`,
									crossOriginLoading
										? crossOriginLoading === "use-credentials"
											? 'link.crossOrigin = "use-credentials";'
											: Template.asString([
													"if (link.href.indexOf(window.location.origin + '/') !== 0) {",
													Template.indent(
														`link.crossOrigin = ${JSON.stringify(
															crossOriginLoading
														)};`
													),
													"}"
												])
										: ""
								]),
								chunk
							),
							"document.head.appendChild(link);"
						]),
						"}"
					])};`
				: "// no preloaded",
			"",
			withExternalInstallChunk
				? Template.asString([
						`${RuntimeGlobals.externalInstallChunk} = installChunk;`
					])
				: "// no external install chunk",
			"",
			withOnChunkLoad
				? `${
						RuntimeGlobals.onChunksLoaded
					}.j = ${runtimeTemplate.returningFunction(
						"installedChunks[chunkId] === 0",
						"chunkId"
					)};`
				: "// no on chunks loaded",
			withHmr
				? Template.asString([
						generateJavascriptHMR("module"),
						"",
						"function loadUpdateChunk(chunkId, updatedModulesList) {",
						Template.indent([
							`return new Promise(${runtimeTemplate.basicFunction(
								"resolve, reject",
								[
									"// start update chunk loading",
									`var url = ${RuntimeGlobals.publicPath} + ${RuntimeGlobals.getChunkUpdateScriptFilename}(chunkId);`,
									`var onResolve = ${runtimeTemplate.basicFunction("obj", [
										`var updatedModules = obj.${RuntimeGlobals.esmModules};`,
										`var updatedRuntime = obj.${RuntimeGlobals.esmRuntime};`,
										"if(updatedRuntime) currentUpdateRuntime.push(updatedRuntime);",
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
										"resolve(obj);"
									])};`,
									`var onReject = ${runtimeTemplate.basicFunction("error", [
										"var errorMsg = error.message || 'unknown reason';",
										"error.message = 'Loading hot update chunk ' + chunkId + ' failed.\\n(' + errorMsg + ')';",
										"error.name = 'ChunkLoadError';",
										"reject(error);"
									])}`,
									`var loadScript = ${runtimeTemplate.basicFunction(
										"url, onResolve, onReject",
										[
											`return ${importFunctionName}(/* webpackIgnore: true */ url).then(onResolve).catch(onReject)`
										]
									)}`,
									"loadScript(url, onResolve, onReject);"
								]
							)});`
						]),
						"}",
						""
					])
				: "// no HMR",
			"",
			withHmrManifest
				? Template.asString([
						`${
							RuntimeGlobals.hmrDownloadManifest
						} = ${runtimeTemplate.basicFunction("", [
							`return ${importFunctionName}(/* webpackIgnore: true */ ${RuntimeGlobals.publicPath} + ${
								RuntimeGlobals.getUpdateManifestFilename
							}()).then(${runtimeTemplate.basicFunction("obj", [
								"return obj.default;"
							])}, ${runtimeTemplate.basicFunction("error", [
								"if(['MODULE_NOT_FOUND', 'ENOENT'].includes(error.code)) return;",
								"throw error;"
							])});`
						])};`
					])
				: "// no HMR manifest"
		]);
	}
}

module.exports = ModuleChunkLoadingRuntimeModule;
