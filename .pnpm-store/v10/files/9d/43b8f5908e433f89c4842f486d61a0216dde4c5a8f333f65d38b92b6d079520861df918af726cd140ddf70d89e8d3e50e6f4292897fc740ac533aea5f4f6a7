/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Generator = require("../Generator");
const InitFragment = require("../InitFragment");
const { WEBASSEMBLY_TYPES } = require("../ModuleSourceTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./AsyncWebAssemblyModulesPlugin").AsyncWasmModuleClass} AsyncWasmModule */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").SourceType} SourceType */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */

/**
 * Represents the async web assembly javascript generator runtime component.
 * @typedef {{ request: string, importVar: string, dependency: WebAssemblyImportDependency }} ImportObjRequestItem
 */

class AsyncWebAssemblyJavascriptGenerator extends Generator {
	/**
	 * Returns the source types available for this module.
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return WEBASSEMBLY_TYPES;
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {NormalModule} module the module
	 * @param {SourceType=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		// it's only estimated so this number is probably fine
		// Example: m.exports=s.v(e,_.id,"6db474f11db19c35388a")
		if (/** @type {AsyncWasmModule} */ (module).phase === "source") {
			return 44;
		}

		return 40 + module.dependencies.length * 10;
	}

	/**
	 * Generates generated code for this runtime module.
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(module, generateContext) {
		const {
			runtimeTemplate,
			chunkGraph,
			moduleGraph,
			runtimeRequirements,
			runtime
		} = generateContext;

		// Check if this is a source phase import
		if (/** @type {AsyncWasmModule} */ (module).phase === "source") {
			return this._generateSourcePhase(module, generateContext);
		}

		runtimeRequirements.add(RuntimeGlobals.module);
		runtimeRequirements.add(RuntimeGlobals.moduleId);
		runtimeRequirements.add(RuntimeGlobals.exports);
		runtimeRequirements.add(RuntimeGlobals.instantiateWasm);
		/** @type {InitFragment<GenerateContext>[]} */
		const initFragments = [];
		/** @type {Map<Module, ImportObjRequestItem>} */
		const depModules = new Map();
		/** @type {Map<string, WebAssemblyImportDependency[]>} */
		const wasmDepsByRequest = new Map();
		for (const dep of module.dependencies) {
			if (dep instanceof WebAssemblyImportDependency) {
				const module = /** @type {Module} */ (moduleGraph.getModule(dep));
				if (!depModules.has(module)) {
					depModules.set(module, {
						request: dep.request,
						importVar: `WEBPACK_IMPORTED_MODULE_${depModules.size}`,
						dependency: dep
					});
				}
				let list = wasmDepsByRequest.get(dep.request);
				if (list === undefined) {
					list = [];
					wasmDepsByRequest.set(dep.request, list);
				}
				list.push(dep);
			}
		}

		/** @type {string[]} */
		const promises = [];

		const importStatements = Array.from(
			depModules,
			([importedModule, { request, importVar, dependency }]) => {
				if (moduleGraph.isAsync(importedModule)) {
					promises.push(importVar);
				}
				return runtimeTemplate.importStatement({
					update: false,
					module: importedModule,
					moduleGraph,
					chunkGraph,
					request,
					originModule: module,
					importVar,
					runtimeRequirements,
					dependency
				});
			}
		);
		const importsCode = importStatements.map(([x]) => x).join("");
		const importsCompatCode = importStatements.map(([_, x]) => x).join("");

		const importObjRequestItems = Array.from(
			wasmDepsByRequest,
			([request, deps]) => {
				const exportItems = deps.map((dep) => {
					const importedModule =
						/** @type {Module} */
						(moduleGraph.getModule(dep));
					const importVar =
						/** @type {ImportObjRequestItem} */
						(depModules.get(importedModule)).importVar;
					return `${JSON.stringify(
						dep.name
					)}: ${runtimeTemplate.exportFromImport({
						moduleGraph,
						module: importedModule,
						chunkGraph,
						request,
						exportName: dep.name,
						originModule: module,
						asiSafe: true,
						isCall: false,
						callContext: false,
						defaultInterop: true,
						importVar,
						initFragments,
						runtime,
						runtimeRequirements,
						dependency: dep
					})}`;
				});
				return Template.asString([
					`${JSON.stringify(request)}: {`,
					Template.indent(exportItems.join(",\n")),
					"}"
				]);
			}
		);

		const importsObj =
			importObjRequestItems.length > 0
				? Template.asString([
						"{",
						Template.indent(importObjRequestItems.join(",\n")),
						"}"
					])
				: undefined;

		const instantiateCall = `${RuntimeGlobals.instantiateWasm}(${module.exportsArgument}, ${
			module.moduleArgument
		}.id, ${JSON.stringify(
			chunkGraph.getRenderedModuleHash(module, runtime)
		)}${importsObj ? `, ${importsObj})` : ")"}`;

		if (promises.length > 0) {
			runtimeRequirements.add(RuntimeGlobals.asyncModule);
		}

		const source = new RawSource(
			promises.length > 0
				? Template.asString([
						`var __webpack_instantiate__ = ${runtimeTemplate.basicFunction(
							`[${promises.join(", ")}]`,
							`${importsCompatCode}return ${instantiateCall};`
						)}`,
						`${RuntimeGlobals.asyncModule}(${
							module.moduleArgument
						}, async ${runtimeTemplate.basicFunction(
							"__webpack_handle_async_dependencies__, __webpack_async_result__",
							[
								"try {",
								importsCode,
								`var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([${promises.join(
									", "
								)}]);`,
								`var [${promises.join(
									", "
								)}] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;`,
								`${importsCompatCode}await ${instantiateCall};`,
								"__webpack_async_result__();",
								"} catch(e) { __webpack_async_result__(e); }"
							]
						)}, 1);`
					])
				: `${importsCode}${importsCompatCode}module.exports = ${instantiateCall};`
		);

		return InitFragment.addToSource(source, initFragments, generateContext);
	}

	/**
	 * Generate code for source phase import (returns WebAssembly.Module)
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source} generated code
	 */
	_generateSourcePhase(module, generateContext) {
		const { chunkGraph, runtimeTemplate, runtimeRequirements, runtime } =
			generateContext;

		runtimeRequirements.add(RuntimeGlobals.module);
		runtimeRequirements.add(RuntimeGlobals.moduleId);
		runtimeRequirements.add(RuntimeGlobals.exports);
		runtimeRequirements.add(RuntimeGlobals.compileWasm);
		runtimeRequirements.add(RuntimeGlobals.asyncModule);
		runtimeRequirements.add(RuntimeGlobals.definePropertyGetters);

		// Source phase: export default WebAssembly.Module (via compileWasm)
		const compileCall = `${RuntimeGlobals.compileWasm}(${
			module.moduleArgument
		}.id, ${JSON.stringify(chunkGraph.getRenderedModuleHash(module, runtime))})`;

		// Use async module wrapper to handle the Promise from compileWasm
		return new RawSource(
			Template.asString([
				`${RuntimeGlobals.asyncModule}(${
					module.moduleArgument
				}, async ${runtimeTemplate.basicFunction(
					"__webpack_handle_async_dependencies__, __webpack_async_result__",
					[
						"try {",
						`var __webpack_wasm_module__ = await ${compileCall};`,
						`${RuntimeGlobals.definePropertyGetters}(${module.exportsArgument}, { "default": ${runtimeTemplate.returningFunction("__webpack_wasm_module__")} });`,
						"__webpack_async_result__();",
						"} catch(e) { __webpack_async_result__(e); }"
					]
				)}, 1);`
			])
		);
	}

	/**
	 * Generates fallback output for the provided error condition.
	 * @param {Error} error the error
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generateError(error, module, generateContext) {
		return new RawSource(`throw new Error(${JSON.stringify(error.message)});`);
	}
}

module.exports = AsyncWebAssemblyJavascriptGenerator;
