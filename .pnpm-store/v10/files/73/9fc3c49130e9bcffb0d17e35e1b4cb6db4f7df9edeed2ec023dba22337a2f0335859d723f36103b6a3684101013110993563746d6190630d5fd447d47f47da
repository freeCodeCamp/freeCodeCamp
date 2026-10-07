/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");
const { compareModulesByIdentifier } = require("../util/comparators");
const WebAssemblyUtils = require("./WebAssemblyUtils");

/** @typedef {import("@webassemblyjs/ast").Signature} Signature */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

// TODO webpack 6 remove the whole folder

// Get all wasm modules
/**
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {Chunk} chunk the chunk
 * @returns {Module[]} all wasm modules
 */
const getAllWasmModules = (moduleGraph, chunkGraph, chunk) => {
	const wasmModules = chunk.getAllAsyncChunks();
	const array = [];
	for (const chunk of wasmModules) {
		for (const m of chunkGraph.getOrderedChunkModulesIterable(
			chunk,
			compareModulesByIdentifier
		)) {
			if (m.type.startsWith("webassembly")) {
				array.push(m);
			}
		}
	}

	return array;
};

/**
 * generates the import object function for a module
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {Module} module the module
 * @param {boolean | undefined} mangle mangle imports
 * @param {string[]} declarations array where declarations are pushed to
 * @param {RuntimeSpec} runtime the runtime
 * @returns {string} source code
 */
const generateImportObject = (
	chunkGraph,
	module,
	mangle,
	declarations,
	runtime
) => {
	const moduleGraph = chunkGraph.moduleGraph;
	/** @type {Map<string, string | number>} */
	const waitForInstances = new Map();
	const properties = [];
	const usedWasmDependencies = WebAssemblyUtils.getUsedDependencies(
		moduleGraph,
		module,
		mangle
	);
	for (const usedDep of usedWasmDependencies) {
		const dep = usedDep.dependency;
		const importedModule = moduleGraph.getModule(dep);
		const exportName = dep.name;
		const usedName =
			importedModule &&
			moduleGraph
				.getExportsInfo(importedModule)
				.getUsedName(exportName, runtime);
		const description = dep.description;
		const direct = dep.onlyDirectImport;

		const module = usedDep.module;
		const name = usedDep.name;

		if (direct) {
			const instanceVar = `m${waitForInstances.size}`;
			waitForInstances.set(
				instanceVar,
				/** @type {ModuleId} */
				(chunkGraph.getModuleId(/** @type {Module} */ (importedModule)))
			);
			properties.push({
				module,
				name,
				value: `${instanceVar}[${JSON.stringify(usedName)}]`
			});
		} else {
			const params =
				/** @type {Signature} */
				(description.signature).params.map(
					(param, k) => `p${k}${param.valtype}`
				);

			const mod = `${RuntimeGlobals.moduleCache}[${JSON.stringify(
				chunkGraph.getModuleId(/** @type {Module} */ (importedModule))
			)}]`;
			const modExports = `${mod}.exports`;

			const cache = `wasmImportedFuncCache${declarations.length}`;
			declarations.push(`var ${cache};`);

			const modCode =
				/** @type {Module} */
				(importedModule).type.startsWith("webassembly")
					? `${mod} ? ${modExports}[${JSON.stringify(usedName)}] : `
					: "";

			properties.push({
				module,
				name,
				value: Template.asString([
					`${modCode}function(${params}) {`,
					Template.indent([
						`if(${cache} === undefined) ${cache} = ${modExports};`,
						`return ${cache}[${JSON.stringify(usedName)}](${params});`
					]),
					"}"
				])
			});
		}
	}

	let importObject;
	if (mangle) {
		importObject = [
			"return {",
			Template.indent([
				properties.map(p => `${JSON.stringify(p.name)}: ${p.value}`).join(",\n")
			]),
			"};"
		];
	} else {
		/** @type {Map<string, Array<{ name: string, value: string }>>} */
		const propertiesByModule = new Map();
		for (const p of properties) {
			let list = propertiesByModule.get(p.module);
			if (list === undefined) {
				propertiesByModule.set(p.module, (list = []));
			}
			list.push(p);
		}
		importObject = [
			"return {",
			Template.indent([
				Array.from(propertiesByModule, ([module, list]) =>
					Template.asString([
						`${JSON.stringify(module)}: {`,
						Template.indent([
							list.map(p => `${JSON.stringify(p.name)}: ${p.value}`).join(",\n")
						]),
						"}"
					])
				).join(",\n")
			]),
			"};"
		];
	}

	const moduleIdStringified = JSON.stringify(chunkGraph.getModuleId(module));
	if (waitForInstances.size === 1) {
		const moduleId = Array.from(waitForInstances.values())[0];
		const promise = `installedWasmModules[${JSON.stringify(moduleId)}]`;
		const variable = Array.from(waitForInstances.keys())[0];
		return Template.asString([
			`${moduleIdStringified}: function() {`,
			Template.indent([
				`return promiseResolve().then(function() { return ${promise}; }).then(function(${variable}) {`,
				Template.indent(importObject),
				"});"
			]),
			"},"
		]);
	} else if (waitForInstances.size > 0) {
		const promises = Array.from(
			waitForInstances.values(),
			id => `installedWasmModules[${JSON.stringify(id)}]`
		).join(", ");
		const variables = Array.from(
			waitForInstances.keys(),
			(name, i) => `${name} = array[${i}]`
		).join(", ");
		return Template.asString([
			`${moduleIdStringified}: function() {`,
			Template.indent([
				`return promiseResolve().then(function() { return Promise.all([${promises}]); }).then(function(array) {`,
				Template.indent([`var ${variables};`, ...importObject]),
				"});"
			]),
			"},"
		]);
	}
	return Template.asString([
		`${moduleIdStringified}: function() {`,
		Template.indent(importObject),
		"},"
	]);
};

/**
 * @typedef {object} WasmChunkLoadingRuntimeModuleOptions
 * @property {(path: string) => string} generateLoadBinaryCode
 * @property {boolean} [supportsStreaming]
 * @property {boolean} [mangleImports]
 * @property {ReadOnlyRuntimeRequirements} runtimeRequirements
 */

class WasmChunkLoadingRuntimeModule extends RuntimeModule {
	/**
	 * @param {WasmChunkLoadingRuntimeModuleOptions} options options
	 */
	constructor({
		generateLoadBinaryCode,
		supportsStreaming,
		mangleImports,
		runtimeRequirements
	}) {
		super("wasm chunk loading", RuntimeModule.STAGE_ATTACH);
		this.generateLoadBinaryCode = generateLoadBinaryCode;
		this.supportsStreaming = supportsStreaming;
		this.mangleImports = mangleImports;
		this._runtimeRequirements = runtimeRequirements;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const fn = RuntimeGlobals.ensureChunkHandlers;
		const withHmr = this._runtimeRequirements.has(
			RuntimeGlobals.hmrDownloadUpdateHandlers
		);
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { moduleGraph, outputOptions } = compilation;
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const wasmModules = getAllWasmModules(moduleGraph, chunkGraph, chunk);
		const { mangleImports } = this;
		/** @type {string[]} */
		const declarations = [];
		const importObjects = wasmModules.map(module =>
			generateImportObject(
				chunkGraph,
				module,
				mangleImports,
				declarations,
				chunk.runtime
			)
		);
		const chunkModuleIdMap = chunkGraph.getChunkModuleIdMap(chunk, m =>
			m.type.startsWith("webassembly")
		);
		/**
		 * @param {string} content content
		 * @returns {string} created import object
		 */
		const createImportObject = content =>
			mangleImports
				? `{ ${JSON.stringify(WebAssemblyUtils.MANGLED_MODULE)}: ${content} }`
				: content;
		const wasmModuleSrcPath = compilation.getPath(
			JSON.stringify(outputOptions.webassemblyModuleFilename),
			{
				hash: `" + ${RuntimeGlobals.getFullHash}() + "`,
				hashWithLength: length =>
					`" + ${RuntimeGlobals.getFullHash}}().slice(0, ${length}) + "`,
				module: {
					id: '" + wasmModuleId + "',
					hash: `" + ${JSON.stringify(
						chunkGraph.getChunkModuleRenderedHashMap(chunk, m =>
							m.type.startsWith("webassembly")
						)
					)}[chunkId][wasmModuleId] + "`,
					hashWithLength(length) {
						return `" + ${JSON.stringify(
							chunkGraph.getChunkModuleRenderedHashMap(
								chunk,
								m => m.type.startsWith("webassembly"),
								length
							)
						)}[chunkId][wasmModuleId] + "`;
					}
				},
				runtime: chunk.runtime
			}
		);

		const stateExpression = withHmr
			? `${RuntimeGlobals.hmrRuntimeStatePrefix}_wasm`
			: undefined;

		return Template.asString([
			"// object to store loaded and loading wasm modules",
			`var installedWasmModules = ${
				stateExpression ? `${stateExpression} = ${stateExpression} || ` : ""
			}{};`,
			"",
			// This function is used to delay reading the installed wasm module promises
			// by a microtask. Sorting them doesn't help because there are edge cases where
			// sorting is not possible (modules splitted into different chunks).
			// So we not even trying and solve this by a microtask delay.
			"function promiseResolve() { return Promise.resolve(); }",
			"",
			Template.asString(declarations),
			"var wasmImportObjects = {",
			Template.indent(importObjects),
			"};",
			"",
			`var wasmModuleMap = ${JSON.stringify(
				chunkModuleIdMap,
				undefined,
				"\t"
			)};`,
			"",
			"// object with all WebAssembly.instance exports",
			`${RuntimeGlobals.wasmInstances} = {};`,
			"",
			"// Fetch + compile chunk loading for webassembly",
			`${fn}.wasm = function(chunkId, promises) {`,
			Template.indent([
				"",
				"var wasmModules = wasmModuleMap[chunkId] || [];",
				"",
				"wasmModules.forEach(function(wasmModuleId, idx) {",
				Template.indent([
					"var installedWasmModuleData = installedWasmModules[wasmModuleId];",
					"",
					'// a Promise means "currently loading" or "already loaded".',
					"if(installedWasmModuleData)",
					Template.indent(["promises.push(installedWasmModuleData);"]),
					"else {",
					Template.indent([
						"var importObject = wasmImportObjects[wasmModuleId]();",
						`var req = ${this.generateLoadBinaryCode(wasmModuleSrcPath)};`,
						"var promise;",
						this.supportsStreaming
							? Template.asString([
									"if(importObject && typeof importObject.then === 'function' && typeof WebAssembly.compileStreaming === 'function') {",
									Template.indent([
										"promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {",
										Template.indent([
											`return WebAssembly.instantiate(items[0], ${createImportObject(
												"items[1]"
											)});`
										]),
										"});"
									]),
									"} else if(typeof WebAssembly.instantiateStreaming === 'function') {",
									Template.indent([
										`promise = WebAssembly.instantiateStreaming(req, ${createImportObject(
											"importObject"
										)});`
									])
								])
							: Template.asString([
									"if(importObject && typeof importObject.then === 'function') {",
									Template.indent([
										"var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });",
										"promise = Promise.all([",
										Template.indent([
											"bytesPromise.then(function(bytes) { return WebAssembly.compile(bytes); }),",
											"importObject"
										]),
										"]).then(function(items) {",
										Template.indent([
											`return WebAssembly.instantiate(items[0], ${createImportObject(
												"items[1]"
											)});`
										]),
										"});"
									])
								]),
						"} else {",
						Template.indent([
							"var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });",
							"promise = bytesPromise.then(function(bytes) {",
							Template.indent([
								`return WebAssembly.instantiate(bytes, ${createImportObject(
									"importObject"
								)});`
							]),
							"});"
						]),
						"}",
						"promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {",
						Template.indent([
							`return ${RuntimeGlobals.wasmInstances}[wasmModuleId] = (res.instance || res).exports;`
						]),
						"}));"
					]),
					"}"
				]),
				"});"
			]),
			"};"
		]);
	}
}

module.exports = WasmChunkLoadingRuntimeModule;
