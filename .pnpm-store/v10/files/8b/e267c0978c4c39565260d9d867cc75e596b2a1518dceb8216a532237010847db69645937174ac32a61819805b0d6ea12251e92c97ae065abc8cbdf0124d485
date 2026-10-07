/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const { UsageState } = require("../ExportsInfo");
const Generator = require("../Generator");
const InitFragment = require("../InitFragment");
const { WEBASSEMBLY_TYPES } = require("../ModuleSourceTypesConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const ModuleDependency = require("../dependencies/ModuleDependency");
const WebAssemblyExportImportedDependency = require("../dependencies/WebAssemblyExportImportedDependency");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */

class WebAssemblyJavascriptGenerator extends Generator {
	/**
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return WEBASSEMBLY_TYPES;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		return 95 + module.dependencies.length * 5;
	}

	/**
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
		/** @type {InitFragment<InitFragment<string>>[]} */
		const initFragments = [];

		const exportsInfo = moduleGraph.getExportsInfo(module);

		let needExportsCopy = false;
		const importedModules = new Map();
		const initParams = [];
		let index = 0;
		for (const dep of module.dependencies) {
			const moduleDep =
				dep && dep instanceof ModuleDependency ? dep : undefined;
			if (moduleGraph.getModule(dep)) {
				let importData = importedModules.get(moduleGraph.getModule(dep));
				if (importData === undefined) {
					importedModules.set(
						moduleGraph.getModule(dep),
						(importData = {
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
										runtimeRequirements
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
								runtimeRequirements
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
				([module, { importVar, request, reexports }]) => {
					const importStatement = runtimeTemplate.importStatement({
						module,
						chunkGraph,
						request,
						importVar,
						originModule: module,
						runtimeRequirements
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
}

module.exports = WebAssemblyJavascriptGenerator;
