/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Chunk").ChunkId} ChunkId */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("./RemoteModule")} RemoteModule */

class RemoteRuntimeModule extends RuntimeModule {
	constructor() {
		super("remotes loading");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const { runtimeTemplate, moduleGraph } = compilation;
		/** @type {Record<ChunkId, (string | number)[]>} */
		const chunkToRemotesMapping = {};
		/** @type {Record<ModuleId, [string, string, string | number | null]>} */
		const idToExternalAndNameMapping = {};
		for (const chunk of /** @type {Chunk} */ (
			this.chunk
		).getAllReferencedChunks()) {
			const modules = chunkGraph.getChunkModulesIterableBySourceType(
				chunk,
				"remote"
			);
			if (!modules) continue;
			/** @type {ModuleId[]} */
			const remotes = (chunkToRemotesMapping[
				/** @type {ChunkId} */
				(chunk.id)
			] = []);
			for (const m of modules) {
				const module = /** @type {RemoteModule} */ (m);
				const name = module.internalRequest;
				const id = /** @type {ModuleId} */ (chunkGraph.getModuleId(module));
				const shareScope = module.shareScope;
				const dep = module.dependencies[0];
				const externalModule = moduleGraph.getModule(dep);
				const externalModuleId =
					/** @type {ModuleId} */
					(externalModule && chunkGraph.getModuleId(externalModule));
				remotes.push(id);
				idToExternalAndNameMapping[id] = [shareScope, name, externalModuleId];
			}
		}
		return Template.asString([
			`var chunkMapping = ${JSON.stringify(
				chunkToRemotesMapping,
				null,
				"\t"
			)};`,
			`var idToExternalAndNameMapping = ${JSON.stringify(
				idToExternalAndNameMapping,
				null,
				"\t"
			)};`,
			`${
				RuntimeGlobals.ensureChunkHandlers
			}.remotes = ${runtimeTemplate.basicFunction("chunkId, promises", [
				`if(${RuntimeGlobals.hasOwnProperty}(chunkMapping, chunkId)) {`,
				Template.indent([
					`chunkMapping[chunkId].forEach(${runtimeTemplate.basicFunction("id", [
						`var getScope = ${RuntimeGlobals.currentRemoteGetScope};`,
						"if(!getScope) getScope = [];",
						"var data = idToExternalAndNameMapping[id];",
						"if(getScope.indexOf(data) >= 0) return;",
						"getScope.push(data);",
						"if(data.p) return promises.push(data.p);",
						`var onError = ${runtimeTemplate.basicFunction("error", [
							'if(!error) error = new Error("Container missing");',
							'if(typeof error.message === "string")',
							Template.indent(
								"error.message += '\\nwhile loading \"' + data[1] + '\" from ' + data[2];"
							),
							`${
								RuntimeGlobals.moduleFactories
							}[id] = ${runtimeTemplate.basicFunction("", ["throw error;"])}`,
							"data.p = 0;"
						])};`,
						`var handleFunction = ${runtimeTemplate.basicFunction(
							"fn, arg1, arg2, d, next, first",
							[
								"try {",
								Template.indent([
									"var promise = fn(arg1, arg2);",
									"if(promise && promise.then) {",
									Template.indent([
										`var p = promise.then(${runtimeTemplate.returningFunction(
											"next(result, d)",
											"result"
										)}, onError);`,
										"if(first) promises.push(data.p = p); else return p;"
									]),
									"} else {",
									Template.indent(["return next(promise, d, first);"]),
									"}"
								]),
								"} catch(error) {",
								Template.indent(["onError(error);"]),
								"}"
							]
						)}`,
						`var onExternal = ${runtimeTemplate.returningFunction(
							`external ? handleFunction(${RuntimeGlobals.initializeSharing}, data[0], 0, external, onInitialized, first) : onError()`,
							"external, _, first"
						)};`,
						`var onInitialized = ${runtimeTemplate.returningFunction(
							"handleFunction(external.get, data[1], getScope, 0, onFactory, first)",
							"_, external, first"
						)};`,
						`var onFactory = ${runtimeTemplate.basicFunction("factory", [
							"data.p = 1;",
							`${
								RuntimeGlobals.moduleFactories
							}[id] = ${runtimeTemplate.basicFunction("module", [
								"module.exports = factory();"
							])}`
						])};`,
						`handleFunction(${RuntimeGlobals.require}, data[2], 0, 0, onExternal, 1);`
					])});`
				]),
				"}"
			])}`
		]);
	}
}

module.exports = RemoteRuntimeModule;
