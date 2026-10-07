/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");
const {
	parseVersionRuntimeCode,
	versionLtRuntimeCode,
	rangeToStringRuntimeCode,
	satisfyRuntimeCode
} = require("../util/semver");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Chunk").ChunkId} ChunkId */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */
/** @typedef {import("./ConsumeSharedModule")} ConsumeSharedModule */

class ConsumeSharedRuntimeModule extends RuntimeModule {
	/**
	 * @param {ReadOnlyRuntimeRequirements} runtimeRequirements runtime requirements
	 */
	constructor(runtimeRequirements) {
		super("consumes", RuntimeModule.STAGE_ATTACH);
		this._runtimeRequirements = runtimeRequirements;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const { runtimeTemplate, codeGenerationResults } = compilation;
		/** @type {Record<ChunkId, (string | number)[]>} */
		const chunkToModuleMapping = {};
		/** @type {Map<string | number, Source>} */
		const moduleIdToSourceMapping = new Map();
		/** @type {(string | number)[]} */
		const initialConsumes = [];
		/**
		 * @param {Iterable<Module>} modules modules
		 * @param {Chunk} chunk the chunk
		 * @param {(string | number)[]} list list of ids
		 */
		const addModules = (modules, chunk, list) => {
			for (const m of modules) {
				const module = m;
				const id = /** @type {ModuleId} */ (chunkGraph.getModuleId(module));
				list.push(id);
				moduleIdToSourceMapping.set(
					id,
					codeGenerationResults.getSource(
						module,
						chunk.runtime,
						"consume-shared"
					)
				);
			}
		};
		for (const chunk of /** @type {Chunk} */ (
			this.chunk
		).getAllReferencedChunks()) {
			const modules = chunkGraph.getChunkModulesIterableBySourceType(
				chunk,
				"consume-shared"
			);
			if (!modules) continue;
			addModules(
				modules,
				chunk,
				(chunkToModuleMapping[/** @type {ChunkId} */ (chunk.id)] = [])
			);
		}
		for (const chunk of /** @type {Chunk} */ (
			this.chunk
		).getAllInitialChunks()) {
			const modules = chunkGraph.getChunkModulesIterableBySourceType(
				chunk,
				"consume-shared"
			);
			if (!modules) continue;
			addModules(modules, chunk, initialConsumes);
		}
		if (moduleIdToSourceMapping.size === 0) return null;
		return Template.asString([
			parseVersionRuntimeCode(runtimeTemplate),
			versionLtRuntimeCode(runtimeTemplate),
			rangeToStringRuntimeCode(runtimeTemplate),
			satisfyRuntimeCode(runtimeTemplate),
			`var exists = ${runtimeTemplate.basicFunction("scope, key", [
				`return scope && ${RuntimeGlobals.hasOwnProperty}(scope, key);`
			])}`,
			`var get = ${runtimeTemplate.basicFunction("entry", [
				"entry.loaded = 1;",
				"return entry.get()"
			])};`,
			`var eagerOnly = ${runtimeTemplate.basicFunction("versions", [
				`return Object.keys(versions).reduce(${runtimeTemplate.basicFunction(
					"filtered, version",
					Template.indent([
						"if (versions[version].eager) {",
						Template.indent(["filtered[version] = versions[version];"]),
						"}",
						"return filtered;"
					])
				)}, {});`
			])};`,
			`var findLatestVersion = ${runtimeTemplate.basicFunction(
				"scope, key, eager",
				[
					"var versions = eager ? eagerOnly(scope[key]) : scope[key];",
					`var key = Object.keys(versions).reduce(${runtimeTemplate.basicFunction(
						"a, b",
						["return !a || versionLt(a, b) ? b : a;"]
					)}, 0);`,
					"return key && versions[key];"
				]
			)};`,
			`var findSatisfyingVersion = ${runtimeTemplate.basicFunction(
				"scope, key, requiredVersion, eager",
				[
					"var versions = eager ? eagerOnly(scope[key]) : scope[key];",
					`var key = Object.keys(versions).reduce(${runtimeTemplate.basicFunction(
						"a, b",
						[
							"if (!satisfy(requiredVersion, b)) return a;",
							"return !a || versionLt(a, b) ? b : a;"
						]
					)}, 0);`,
					"return key && versions[key]"
				]
			)};`,
			`var findSingletonVersionKey = ${runtimeTemplate.basicFunction(
				"scope, key, eager",
				[
					"var versions = eager ? eagerOnly(scope[key]) : scope[key];",
					`return Object.keys(versions).reduce(${runtimeTemplate.basicFunction(
						"a, b",
						["return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;"]
					)}, 0);`
				]
			)};`,
			`var getInvalidSingletonVersionMessage = ${runtimeTemplate.basicFunction(
				"scope, key, version, requiredVersion",
				[
					'return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"'
				]
			)};`,
			`var getInvalidVersionMessage = ${runtimeTemplate.basicFunction(
				"scope, scopeName, key, requiredVersion, eager",
				[
					"var versions = scope[key];",
					'return "No satisfying version (" + rangeToString(requiredVersion) + ")" + (eager ? " for eager consumption" : "") + " of shared module " + key + " found in shared scope " + scopeName + ".\\n" +',
					`\t"Available versions: " + Object.keys(versions).map(${runtimeTemplate.basicFunction(
						"key",
						['return key + " from " + versions[key].from;']
					)}).join(", ");`
				]
			)};`,
			`var fail = ${runtimeTemplate.basicFunction("msg", [
				"throw new Error(msg);"
			])}`,
			`var failAsNotExist = ${runtimeTemplate.basicFunction("scopeName, key", [
				'return fail("Shared module " + key + " doesn\'t exist in shared scope " + scopeName);'
			])}`,
			`var warn = /*#__PURE__*/ ${
				compilation.outputOptions.ignoreBrowserWarnings
					? runtimeTemplate.basicFunction("", "")
					: runtimeTemplate.basicFunction("msg", [
							'if (typeof console !== "undefined" && console.warn) console.warn(msg);'
						])
			};`,
			`var init = ${runtimeTemplate.returningFunction(
				Template.asString([
					"function(scopeName, key, eager, c, d) {",
					Template.indent([
						`var promise = ${RuntimeGlobals.initializeSharing}(scopeName);`,
						// if we require eager shared, we expect it to be already loaded before it requested, no need to wait the whole scope loaded.
						"if (promise && promise.then && !eager) { ",
						Template.indent([
							`return promise.then(fn.bind(fn, scopeName, ${RuntimeGlobals.shareScopeMap}[scopeName], key, false, c, d));`
						]),
						"}",
						`return fn(scopeName, ${RuntimeGlobals.shareScopeMap}[scopeName], key, eager, c, d);`
					]),
					"}"
				]),
				"fn"
			)};`,
			"",
			`var useFallback = ${runtimeTemplate.basicFunction(
				"scopeName, key, fallback",
				["return fallback ? fallback() : failAsNotExist(scopeName, key);"]
			)}`,
			`var load = /*#__PURE__*/ init(${runtimeTemplate.basicFunction(
				"scopeName, scope, key, eager, fallback",
				[
					"if (!exists(scope, key)) return useFallback(scopeName, key, fallback);",
					"return get(findLatestVersion(scope, key, eager));"
				]
			)});`,
			`var loadVersion = /*#__PURE__*/ init(${runtimeTemplate.basicFunction(
				"scopeName, scope, key, eager, requiredVersion, fallback",
				[
					"if (!exists(scope, key)) return useFallback(scopeName, key, fallback);",
					"var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);",
					"if (satisfyingVersion) return get(satisfyingVersion);",
					"warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager))",
					"return get(findLatestVersion(scope, key, eager));"
				]
			)});`,
			`var loadStrictVersion = /*#__PURE__*/ init(${runtimeTemplate.basicFunction(
				"scopeName, scope, key, eager, requiredVersion, fallback",
				[
					"if (!exists(scope, key)) return useFallback(scopeName, key, fallback);",
					"var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);",
					"if (satisfyingVersion) return get(satisfyingVersion);",
					"if (fallback) return fallback();",
					"fail(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager));"
				]
			)});`,
			`var loadSingleton = /*#__PURE__*/ init(${runtimeTemplate.basicFunction(
				"scopeName, scope, key, eager, fallback",
				[
					"if (!exists(scope, key)) return useFallback(scopeName, key, fallback);",
					"var version = findSingletonVersionKey(scope, key, eager);",
					"return get(scope[key][version]);"
				]
			)});`,
			`var loadSingletonVersion = /*#__PURE__*/ init(${runtimeTemplate.basicFunction(
				"scopeName, scope, key, eager, requiredVersion, fallback",
				[
					"if (!exists(scope, key)) return useFallback(scopeName, key, fallback);",
					"var version = findSingletonVersionKey(scope, key, eager);",
					"if (!satisfy(requiredVersion, version)) {",
					Template.indent([
						"warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));"
					]),
					"}",
					"return get(scope[key][version]);"
				]
			)});`,
			`var loadStrictSingletonVersion = /*#__PURE__*/ init(${runtimeTemplate.basicFunction(
				"scopeName, scope, key, eager, requiredVersion, fallback",
				[
					"if (!exists(scope, key)) return useFallback(scopeName, key, fallback);",
					"var version = findSingletonVersionKey(scope, key, eager);",
					"if (!satisfy(requiredVersion, version)) {",
					Template.indent([
						"fail(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));"
					]),
					"}",
					"return get(scope[key][version]);"
				]
			)});`,
			"var installedModules = {};",
			"var moduleToHandlerMapping = {",
			Template.indent(
				Array.from(
					moduleIdToSourceMapping,
					([key, source]) => `${JSON.stringify(key)}: ${source.source()}`
				).join(",\n")
			),
			"};",

			initialConsumes.length > 0
				? Template.asString([
						`var initialConsumes = ${JSON.stringify(initialConsumes)};`,
						`initialConsumes.forEach(${runtimeTemplate.basicFunction("id", [
							`${
								RuntimeGlobals.moduleFactories
							}[id] = ${runtimeTemplate.basicFunction("module", [
								"// Handle case when module is used sync",
								"installedModules[id] = 0;",
								`delete ${RuntimeGlobals.moduleCache}[id];`,
								"var factory = moduleToHandlerMapping[id]();",
								'if(typeof factory !== "function") throw new Error("Shared module is not available for eager consumption: " + id);',
								"module.exports = factory();"
							])}`
						])});`
					])
				: "// no consumes in initial chunks",
			this._runtimeRequirements.has(RuntimeGlobals.ensureChunkHandlers)
				? Template.asString([
						`var chunkMapping = ${JSON.stringify(
							chunkToModuleMapping,
							null,
							"\t"
						)};`,
						"var startedInstallModules = {};",
						`${
							RuntimeGlobals.ensureChunkHandlers
						}.consumes = ${runtimeTemplate.basicFunction("chunkId, promises", [
							`if(${RuntimeGlobals.hasOwnProperty}(chunkMapping, chunkId)) {`,
							Template.indent([
								`chunkMapping[chunkId].forEach(${runtimeTemplate.basicFunction(
									"id",
									[
										`if(${RuntimeGlobals.hasOwnProperty}(installedModules, id)) return promises.push(installedModules[id]);`,
										"if(!startedInstallModules[id]) {",
										`var onFactory = ${runtimeTemplate.basicFunction(
											"factory",
											[
												"installedModules[id] = 0;",
												`${
													RuntimeGlobals.moduleFactories
												}[id] = ${runtimeTemplate.basicFunction("module", [
													`delete ${RuntimeGlobals.moduleCache}[id];`,
													"module.exports = factory();"
												])}`
											]
										)};`,
										"startedInstallModules[id] = true;",
										`var onError = ${runtimeTemplate.basicFunction("error", [
											"delete installedModules[id];",
											`${
												RuntimeGlobals.moduleFactories
											}[id] = ${runtimeTemplate.basicFunction("module", [
												`delete ${RuntimeGlobals.moduleCache}[id];`,
												"throw error;"
											])}`
										])};`,
										"try {",
										Template.indent([
											"var promise = moduleToHandlerMapping[id]();",
											"if(promise.then) {",
											Template.indent(
												"promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));"
											),
											"} else onFactory(promise);"
										]),
										"} catch(e) { onError(e); }",
										"}"
									]
								)});`
							]),
							"}"
						])}`
					])
				: "// no chunk loading of consumes"
		]);
	}
}

module.exports = ConsumeSharedRuntimeModule;
