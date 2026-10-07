/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const { UsageState } = require("../ExportsInfo");
const Generator = require("../Generator");
const InitFragment = require("../InitFragment");
const { WEBASSEMBLY_TYPES } = require("../ModuleSourceTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const ModuleDependency = require("../dependencies/ModuleDependency");
const WebAssemblyExportImportedDependency = require("../dependencies/WebAssemblyExportImportedDependency");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").SourceType} SourceType */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */

class WebAssemblyJavascriptGenerator extends Generator {
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
		return 95 + module.dependencies.length * 5;
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
			moduleGraph,
			chunkGraph,
			runtimeRequirements,
			runtime
		} = generateContext;
		/** @type {InitFragment<GenerateContext>[]} */
		const initFragments = [];

		const exportsInfo = moduleGraph.getExportsInfo(module);

		let needExportsCopy = false;
		/** @typedef {{ dependency: ModuleDependency | undefined, importVar: string, index: number, request: string | undefined, names: Set<string>, reexports: string[] }} ImportData */
		/** @type {Map<Module, ImportData>} */
		const importedModules = new Map();
		/** @type {string[]} */
		const initParams = [];
		let index = 0;
		for (const dep of module.dependencies) {
			const moduleDep =
				dep && dep instanceof ModuleDependency ? dep : undefined;
			const mod = moduleGraph.getModule(dep);
			if (mod) {
				let importData = importedModules.get(mod);
				if (importData === undefined) {
					importedModules.set(
						mod,
						(importData = {
							dependency: moduleDep,
							importVar: `m${index}`,
							index,
							request: (moduleDep && moduleDep.userRequest) || undefined,
							names: new Set(),
							reexports: []
						})
					);
					index++;
				}
				if (dep instanceof WebAssemblyImportDependency) {
					importData.names.add(dep.name);
					if (dep.description.type === "GlobalType") {
						const exportName = dep.name;
						const importedModule = moduleGraph.getModule(dep);

						if (importedModule) {
							const usedName = moduleGraph
								.getExportsInfo(importedModule)
								.getUsedName(exportName, runtime);
							if (usedName) {
								initParams.push(
									runtimeTemplate.exportFromImport({
										moduleGraph,
										chunkGraph,
										module: importedModule,
										request: dep.request,
										importVar: importData.importVar,
										originModule: module,
										exportName: dep.name,
										asiSafe: true,
										isCall: false,
										callContext: null,
										defaultInterop: true,
										initFragments,
										runtime,
										runtimeRequirements,
										dependency: dep
									})
								);
							}
						}
					}
				}
				if (dep instanceof WebAssemblyExportImportedDependency) {
					importData.names.add(dep.name);
					const usedName = moduleGraph
						.getExportsInfo(module)
						.getUsedName(dep.exportName, runtime);
					if (usedName) {
						runtimeRequirements.add(RuntimeGlobals.exports);
						const exportProp = `${module.exportsArgument}[${JSON.stringify(
							usedName
						)}]`;
						const defineStatement = Template.asString([
							`${exportProp} = ${runtimeTemplate.exportFromImport({
								moduleGraph,
								module: /** @type {Module} */ (moduleGraph.getModule(dep)),
								chunkGraph,
								request: dep.request,
								importVar: importData.importVar,
								originModule: module,
								exportName: dep.name,
								asiSafe: true,
								isCall: false,
								callContext: null,
								defaultInterop: true,
								initFragments,
								runtime,
								runtimeRequirements,
								dependency: dep
							})};`,
							`if(WebAssembly.Global) ${exportProp} = ` +
								`new WebAssembly.Global({ value: ${JSON.stringify(
									dep.valueType
								)} }, ${exportProp});`
						]);
						importData.reexports.push(defineStatement);
						needExportsCopy = true;
					}
				}
			}
		}
		const importsCode = Template.asString(
			Array.from(
				importedModules,
				([module, { importVar, request, reexports, dependency }]) => {
					const importStatement = runtimeTemplate.importStatement({
						module,
						moduleGraph,
						chunkGraph,
						request,
						importVar,
						originModule: module,
						runtimeRequirements,
						dependency
					});
					return importStatement[0] + importStatement[1] + reexports.join("\n");
				}
			)
		);

		const copyAllExports =
			exportsInfo.otherExportsInfo.getUsed(runtime) === UsageState.Unused &&
			!needExportsCopy;

		// need these globals
		runtimeRequirements.add(RuntimeGlobals.module);
		runtimeRequirements.add(RuntimeGlobals.moduleId);
		runtimeRequirements.add(RuntimeGlobals.wasmInstances);
		if (exportsInfo.otherExportsInfo.getUsed(runtime) !== UsageState.Unused) {
			runtimeRequirements.add(RuntimeGlobals.makeNamespaceObject);
			runtimeRequirements.add(RuntimeGlobals.exports);
		}
		if (!copyAllExports) {
			runtimeRequirements.add(RuntimeGlobals.exports);
		}

		// create source
		const source = new RawSource(
			[
				'"use strict";',
				"// Instantiate WebAssembly module",
				`var wasmExports = ${RuntimeGlobals.wasmInstances}[${module.moduleArgument}.id];`,

				exportsInfo.otherExportsInfo.getUsed(runtime) !== UsageState.Unused
					? `${RuntimeGlobals.makeNamespaceObject}(${module.exportsArgument});`
					: "",

				// this must be before import for circular dependencies
				"// export exports from WebAssembly module",
				copyAllExports
					? `${module.moduleArgument}.exports = wasmExports;`
					: "for(var name in wasmExports) " +
						"if(name) " +
						`${module.exportsArgument}[name] = wasmExports[name];`,
				"// exec imports from WebAssembly module (for esm order)",
				importsCode,
				"",
				"// exec wasm module",
				`wasmExports[""](${initParams.join(", ")})`
			].join("\n")
		);
		return InitFragment.addToSource(source, initFragments, generateContext);
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

module.exports = WebAssemblyJavascriptGenerator;
