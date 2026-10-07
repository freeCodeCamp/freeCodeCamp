/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ConditionalInitFragment = require("../ConditionalInitFragment");
const Dependency = require("../Dependency");
const HarmonyLinkingError = require("../HarmonyLinkingError");
const InitFragment = require("../InitFragment");
const Template = require("../Template");
const AwaitDependenciesInitFragment = require("../async-modules/AwaitDependenciesInitFragment");
const { filterRuntime, mergeRuntime } = require("../util/runtime");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ExportsInfo")} ExportsInfo */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

const ExportPresenceModes = {
	NONE: /** @type {0} */ (0),
	WARN: /** @type {1} */ (1),
	AUTO: /** @type {2} */ (2),
	ERROR: /** @type {3} */ (3),
	/**
	 * @param {string | false} str param
	 * @returns {0 | 1 | 2 | 3} result
	 */
	fromUserOption(str) {
		switch (str) {
			case "error":
				return ExportPresenceModes.ERROR;
			case "warn":
				return ExportPresenceModes.WARN;
			case "auto":
				return ExportPresenceModes.AUTO;
			case false:
				return ExportPresenceModes.NONE;
			default:
				throw new Error(`Invalid export presence value ${str}`);
		}
	}
};

class HarmonyImportDependency extends ModuleDependency {
	/**
	 * @param {string} request request string
	 * @param {number} sourceOrder source order
	 * @param {ImportAttributes=} attributes import attributes
	 */
	constructor(request, sourceOrder, attributes) {
		super(request);
		this.sourceOrder = sourceOrder;
		this.assertions = attributes;
	}

	get category() {
		return "esm";
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return Dependency.NO_EXPORTS_REFERENCED;
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {string} name of the variable for the import
	 */
	getImportVar(moduleGraph) {
		const module = /** @type {Module} */ (moduleGraph.getParentModule(this));
		const meta = /** @type {TODO} */ (moduleGraph.getMeta(module));
		let importVarMap = meta.importVarMap;
		if (!importVarMap) meta.importVarMap = importVarMap = new Map();
		let importVar = importVarMap.get(
			/** @type {Module} */ (moduleGraph.getModule(this))
		);
		if (importVar) return importVar;
		importVar = `${Template.toIdentifier(
			`${this.userRequest}`
		)}__WEBPACK_IMPORTED_MODULE_${importVarMap.size}__`;
		importVarMap.set(
			/** @type {Module} */ (moduleGraph.getModule(this)),
			importVar
		);
		return importVar;
	}

	/**
	 * @param {boolean} update create new variables or update existing one
	 * @param {DependencyTemplateContext} templateContext the template context
	 * @returns {[string, string]} the import statement and the compat statement
	 */
	getImportStatement(
		update,
		{ runtimeTemplate, module, moduleGraph, chunkGraph, runtimeRequirements }
	) {
		return runtimeTemplate.importStatement({
			update,
			module: /** @type {Module} */ (moduleGraph.getModule(this)),
			chunkGraph,
			importVar: this.getImportVar(moduleGraph),
			request: this.request,
			originModule: module,
			runtimeRequirements
		});
	}

	/**
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {string[]} ids imported ids
	 * @param {string} additionalMessage extra info included in the error message
	 * @returns {WebpackError[] | undefined} errors
	 */
	getLinkingErrors(moduleGraph, ids, additionalMessage) {
		const importedModule = moduleGraph.getModule(this);
		// ignore errors for missing or failed modules
		if (!importedModule || importedModule.getNumberOfErrors() > 0) {
			return;
		}

		const parentModule =
			/** @type {Module} */
			(moduleGraph.getParentModule(this));
		const exportsType = importedModule.getExportsType(
			moduleGraph,
			/** @type {BuildMeta} */ (parentModule.buildMeta).strictHarmonyModule
		);
		if (exportsType === "namespace" || exportsType === "default-with-named") {
			if (ids.length === 0) {
				return;
			}

			if (
				(exportsType !== "default-with-named" || ids[0] !== "default") &&
				moduleGraph.isExportProvided(importedModule, ids) === false
			) {
				// We are sure that it's not provided

				// Try to provide detailed info in the error message
				let pos = 0;
				let exportsInfo = moduleGraph.getExportsInfo(importedModule);
				while (pos < ids.length && exportsInfo) {
					const id = ids[pos++];
					const exportInfo = exportsInfo.getReadOnlyExportInfo(id);
					if (exportInfo.provided === false) {
						// We are sure that it's not provided
						const providedExports = exportsInfo.getProvidedExports();
						const moreInfo = !Array.isArray(providedExports)
							? " (possible exports unknown)"
							: providedExports.length === 0
								? " (module has no exports)"
								: ` (possible exports: ${providedExports.join(", ")})`;
						return [
							new HarmonyLinkingError(
								`export ${ids
									.slice(0, pos)
									.map(id => `'${id}'`)
									.join(".")} ${additionalMessage} was not found in '${
									this.userRequest
								}'${moreInfo}`
							)
						];
					}
					exportsInfo =
						/** @type {ExportsInfo} */
						(exportInfo.getNestedExportsInfo());
				}

				// General error message
				return [
					new HarmonyLinkingError(
						`export ${ids
							.map(id => `'${id}'`)
							.join(".")} ${additionalMessage} was not found in '${
							this.userRequest
						}'`
					)
				];
			}
		}
		switch (exportsType) {
			case "default-only":
				// It's has only a default export
				if (ids.length > 0 && ids[0] !== "default") {
					// In strict harmony modules we only support the default export
					return [
						new HarmonyLinkingError(
							`Can't import the named export ${ids
								.map(id => `'${id}'`)
								.join(
									"."
								)} ${additionalMessage} from default-exporting module (only default export is available)`
						)
					];
				}
				break;
			case "default-with-named":
				// It has a default export and named properties redirect
				// In some cases we still want to warn here
				if (
					ids.length > 0 &&
					ids[0] !== "default" &&
					/** @type {BuildMeta} */
					(importedModule.buildMeta).defaultObject === "redirect-warn"
				) {
					// For these modules only the default export is supported
					return [
						new HarmonyLinkingError(
							`Should not import the named export ${ids
								.map(id => `'${id}'`)
								.join(
									"."
								)} ${additionalMessage} from default-exporting module (only default export is available soon)`
						)
					];
				}
				break;
		}
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.sourceOrder);
		write(this.assertions);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.sourceOrder = read();
		this.assertions = read();
		super.deserialize(context);
	}
}

module.exports = HarmonyImportDependency;

/** @type {WeakMap<Module, WeakMap<Module, RuntimeSpec | boolean>>} */
const importEmittedMap = new WeakMap();

HarmonyImportDependency.Template = class HarmonyImportDependencyTemplate extends (
	ModuleDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {HarmonyImportDependency} */ (dependency);
		const { module, chunkGraph, moduleGraph, runtime } = templateContext;

		const connection = moduleGraph.getConnection(dep);
		if (connection && !connection.isTargetActive(runtime)) return;

		const referencedModule = connection && connection.module;

		if (
			connection &&
			connection.weak &&
			referencedModule &&
			chunkGraph.getModuleId(referencedModule) === null
		) {
			// in weak references, module might not be in any chunk
			// but that's ok, we don't need that logic in this case
			return;
		}

		const moduleKey = referencedModule
			? referencedModule.identifier()
			: dep.request;
		const key = `harmony import ${moduleKey}`;

		const runtimeCondition = dep.weak
			? false
			: connection
				? filterRuntime(runtime, r => connection.isTargetActive(r))
				: true;

		if (module && referencedModule) {
			let emittedModules = importEmittedMap.get(module);
			if (emittedModules === undefined) {
				emittedModules = new WeakMap();
				importEmittedMap.set(module, emittedModules);
			}
			let mergedRuntimeCondition = runtimeCondition;
			const oldRuntimeCondition = emittedModules.get(referencedModule) || false;
			if (oldRuntimeCondition !== false && mergedRuntimeCondition !== true) {
				if (mergedRuntimeCondition === false || oldRuntimeCondition === true) {
					mergedRuntimeCondition = oldRuntimeCondition;
				} else {
					mergedRuntimeCondition = mergeRuntime(
						oldRuntimeCondition,
						mergedRuntimeCondition
					);
				}
			}
			emittedModules.set(referencedModule, mergedRuntimeCondition);
		}

		const importStatement = dep.getImportStatement(false, templateContext);
		if (
			referencedModule &&
			templateContext.moduleGraph.isAsync(referencedModule)
		) {
			templateContext.initFragments.push(
				new ConditionalInitFragment(
					importStatement[0],
					InitFragment.STAGE_HARMONY_IMPORTS,
					dep.sourceOrder,
					key,
					runtimeCondition
				)
			);
			templateContext.initFragments.push(
				new AwaitDependenciesInitFragment(
					new Set([dep.getImportVar(templateContext.moduleGraph)])
				)
			);
			templateContext.initFragments.push(
				new ConditionalInitFragment(
					importStatement[1],
					InitFragment.STAGE_ASYNC_HARMONY_IMPORTS,
					dep.sourceOrder,
					`${key} compat`,
					runtimeCondition
				)
			);
		} else {
			templateContext.initFragments.push(
				new ConditionalInitFragment(
					importStatement[0] + importStatement[1],
					InitFragment.STAGE_HARMONY_IMPORTS,
					dep.sourceOrder,
					key,
					runtimeCondition
				)
			);
		}
	}

	/**
	 * @param {Module} module the module
	 * @param {Module} referencedModule the referenced module
	 * @returns {RuntimeSpec | boolean} runtimeCondition in which this import has been emitted
	 */
	static getImportEmittedRuntime(module, referencedModule) {
		const emittedModules = importEmittedMap.get(module);
		if (emittedModules === undefined) return false;
		return emittedModules.get(referencedModule) || false;
	}
};

module.exports.ExportPresenceModes = ExportPresenceModes;
