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
const { ImportPhase, ImportPhaseUtils } = require("./ImportPhase");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ExportsInfo")} ExportsInfo */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("./ImportPhase").ImportPhaseType} ImportPhaseType */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/** @typedef {0 | 1 | 2 | 3} ExportPresenceMode */

const ExportPresenceModes = {
	NONE: /** @type {ExportPresenceMode} */ (0),
	WARN: /** @type {ExportPresenceMode} */ (1),
	AUTO: /** @type {ExportPresenceMode} */ (2),
	ERROR: /** @type {ExportPresenceMode} */ (3),
	/**
	 * Returns result.
	 * @param {string | false} str param
	 * @returns {ExportPresenceMode} result
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
	},
	/**
	 * Resolve export presence mode from parser options with a specific key and shared fallbacks.
	 * @param {string | false | undefined} specificValue the type-specific option value (e.g. importExportsPresence or reexportExportsPresence)
	 * @param {JavascriptParserOptions} options parser options
	 * @returns {ExportPresenceMode} resolved mode
	 */
	resolveFromOptions(specificValue, options) {
		if (specificValue !== undefined) {
			return ExportPresenceModes.fromUserOption(specificValue);
		}
		if (options.exportsPresence !== undefined) {
			return ExportPresenceModes.fromUserOption(options.exportsPresence);
		}
		return options.strictExportPresence
			? ExportPresenceModes.ERROR
			: ExportPresenceModes.AUTO;
	}
};

/**
 * Get the non-optional leading part of a member chain.
 * @param {string[]} members members
 * @param {boolean[]} membersOptionals optionality for each member
 * @returns {string[]} the non-optional prefix
 */
const getNonOptionalPart = (members, membersOptionals) => {
	let i = 0;
	while (i < members.length && membersOptionals[i] === false) i++;
	return i !== members.length ? members.slice(0, i) : members;
};

/** @typedef {string[]} Ids */

class HarmonyImportDependency extends ModuleDependency {
	/**
	 * Creates an instance of HarmonyImportDependency.
	 * @param {string} request request string
	 * @param {number} sourceOrder source order
	 * @param {ImportPhaseType=} phase import phase
	 * @param {ImportAttributes=} attributes import attributes
	 */
	constructor(
		request,
		sourceOrder,
		phase = ImportPhase.Evaluation,
		attributes = undefined
	) {
		super(request, sourceOrder);
		this.phase = phase;
		this.attributes = attributes;
	}

	get category() {
		return "esm";
	}

	/**
	 * Returns an identifier to merge equal requests.
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		let str = super.getResourceIdentifier();
		// We specifically use this check to avoid writing the default (`evaluation` or `0`) value and save memory
		if (this.phase) {
			str += `|phase${ImportPhaseUtils.stringify(this.phase)}`;
		}
		if (this.attributes) {
			str += `|attributes${JSON.stringify(this.attributes)}`;
		}
		return str;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {ReferencedExports} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return Dependency.NO_EXPORTS_REFERENCED;
	}

	/**
	 * Returns name of the variable for the import.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {string} name of the variable for the import
	 */
	getImportVar(moduleGraph) {
		const module = /** @type {Module} */ (moduleGraph.getParentModule(this));
		const importedModule = /** @type {Module} */ (moduleGraph.getModule(this));
		const meta = moduleGraph.getMeta(module);

		const isDeferred =
			ImportPhaseUtils.isDefer(this.phase) &&
			!(/** @type {BuildMeta} */ (importedModule.buildMeta).async);

		const metaKey = isDeferred ? "deferredImportVarMap" : "importVarMap";
		let importVarMap = meta[metaKey];
		if (!importVarMap) {
			meta[metaKey] = importVarMap =
				/** @type {Map<Module, string>} */
				(new Map());
		}

		let importVar = importVarMap.get(importedModule);
		if (importVar) return importVar;
		importVar = `${Template.toIdentifier(`${this.userRequest}`)}__WEBPACK_${
			isDeferred ? "DEFERRED_" : ""
		}IMPORTED_MODULE_${importVarMap.size}__`;
		importVarMap.set(importedModule, importVar);
		return importVar;
	}

	/**
	 * Gets module exports.
	 * @param {DependencyTemplateContext} context the template context
	 * @returns {string} the expression
	 */
	getModuleExports({
		runtimeTemplate,
		moduleGraph,
		chunkGraph,
		runtimeRequirements
	}) {
		return runtimeTemplate.moduleExports({
			module: moduleGraph.getModule(this),
			chunkGraph,
			request: this.request,
			runtimeRequirements
		});
	}

	/**
	 * Gets import statement.
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
			moduleGraph,
			chunkGraph,
			importVar: this.getImportVar(moduleGraph),
			request: this.request,
			originModule: module,
			runtimeRequirements,
			dependency: this
		});
	}

	/**
	 * Gets linking errors.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {Ids} ids imported ids
	 * @param {string} additionalMessage extra info included in the error message
	 * @returns {WebpackError[] | undefined} errors
	 */
	getLinkingErrors(moduleGraph, ids, additionalMessage) {
		// Source phase imports don't have exports to check
		if (ImportPhaseUtils.isSource(this.phase)) {
			return;
		}

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
									.map((id) => `'${id}'`)
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
							.map((id) => `'${id}'`)
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
								.map((id) => `'${id}'`)
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
								.map((id) => `'${id}'`)
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
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.attributes);
		write(this.phase);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.attributes = read();
		this.phase = read();
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
	 * Applies the plugin by registering its hooks on the compiler.
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
		const key = `${
			ImportPhaseUtils.isDefer(dep.phase)
				? "deferred "
				: ImportPhaseUtils.isSource(dep.phase)
					? "source "
					: ""
		}harmony import ${moduleKey}`;

		const runtimeCondition = dep.weak
			? false
			: connection
				? filterRuntime(runtime, (r) => connection.isTargetActive(r))
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
					/** @type {number} */ (dep.sourceOrder),
					key,
					runtimeCondition
				)
			);
			const importVar = dep.getImportVar(templateContext.moduleGraph);
			templateContext.initFragments.push(
				new AwaitDependenciesInitFragment(new Map([[importVar, importVar]]))
			);
			templateContext.initFragments.push(
				new ConditionalInitFragment(
					importStatement[1],
					InitFragment.STAGE_ASYNC_HARMONY_IMPORTS,
					/** @type {number} */ (dep.sourceOrder),
					`${key} compat`,
					runtimeCondition
				)
			);
		} else {
			templateContext.initFragments.push(
				new ConditionalInitFragment(
					importStatement[0] + importStatement[1],
					InitFragment.STAGE_HARMONY_IMPORTS,
					/** @type {number} */ (dep.sourceOrder),
					key,
					runtimeCondition
				)
			);
		}
	}

	/**
	 * Gets import emitted runtime.
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
module.exports.getNonOptionalPart = getNonOptionalPart;
