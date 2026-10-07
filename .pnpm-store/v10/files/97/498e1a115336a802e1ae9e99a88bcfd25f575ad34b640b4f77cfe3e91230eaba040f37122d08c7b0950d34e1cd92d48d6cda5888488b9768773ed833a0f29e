/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const InitFragment = require("../InitFragment");
const Template = require("../Template");
const {
	getDependencyUsedByExportsCondition
} = require("../optimize/InnerGraph");
const { getTrimmedIdsAndRange } = require("../util/chainedImports");
const makeSerializable = require("../util/makeSerializable");
const { propertyAccess } = require("../util/property");
const traverseDestructuringAssignmentProperties = require("../util/traverseDestructuringAssignmentProperties");
const HarmonyImportDependency = require("./HarmonyImportDependency");
const { ImportPhaseUtils } = require("./ImportPhase");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency").GetConditionFn} GetConditionFn */
/** @typedef {import("../Dependency").RawReferencedExports} RawReferencedExports */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../javascript/JavascriptParser").DestructuringAssignmentProperties} DestructuringAssignmentProperties */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../optimize/InnerGraph").UsedByExports} UsedByExports */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("../util/chainedImports").IdRanges} IdRanges */
/** @typedef {import("./HarmonyImportDependency").ExportPresenceMode} ExportPresenceMode */
/** @typedef {HarmonyImportDependency.Ids} Ids */
/** @typedef {import("./ImportPhase").ImportPhaseType} ImportPhaseType */

const idsSymbol = /** @type {symbol} */ (
	Symbol("HarmonyImportSpecifierDependency.ids")
);

const { ExportPresenceModes } = HarmonyImportDependency;

class HarmonyImportSpecifierDependency extends HarmonyImportDependency {
	/**
	 * Creates an instance of HarmonyImportSpecifierDependency.
	 * @param {string} request request
	 * @param {number} sourceOrder source order
	 * @param {Ids} ids ids
	 * @param {string} name name
	 * @param {Range} range range
	 * @param {ExportPresenceMode} exportPresenceMode export presence mode
	 * @param {ImportPhaseType} phase import phase
	 * @param {ImportAttributes | undefined} attributes import attributes
	 * @param {IdRanges | undefined} idRanges ranges for members of ids; the two arrays are right-aligned
	 */
	constructor(
		request,
		sourceOrder,
		ids,
		name,
		range,
		exportPresenceMode,
		phase,
		attributes,
		idRanges // TODO webpack 6 make this non-optional. It must always be set to properly trim ids.
	) {
		super(request, sourceOrder, phase, attributes);
		this.ids = ids;
		this.name = name;
		this.range = range;
		this.idRanges = idRanges;
		this.exportPresenceMode = exportPresenceMode;
		/** @type {undefined | boolean} */
		this.namespaceObjectAsContext = false;
		/** @type {undefined | boolean} */
		this.call = undefined;
		/** @type {undefined | boolean} */
		this.directImport = undefined;
		/** @type {undefined | boolean | string} */
		this.shorthand = undefined;
		/** @type {undefined | boolean} */
		this.asiSafe = undefined;
		/** @type {UsedByExports | undefined} */
		this.usedByExports = undefined;
		/** @type {DestructuringAssignmentProperties | undefined} */
		this.referencedPropertiesInDestructuring = undefined;
	}

	// TODO webpack 6 remove
	/**
	 * Returns id.
	 * @deprecated
	 */
	get id() {
		throw new Error("id was renamed to ids and type changed to string[]");
	}

	// TODO webpack 6 remove
	/**
	 * Returns id.
	 * @deprecated
	 */
	getId() {
		throw new Error("id was renamed to ids and type changed to string[]");
	}

	// TODO webpack 6 remove
	/**
	 * Updates id.
	 * @deprecated
	 */
	setId() {
		throw new Error("id was renamed to ids and type changed to string[]");
	}

	get type() {
		return "harmony import specifier";
	}

	/**
	 * Returns the imported ids.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {Ids} the imported ids
	 */
	getIds(moduleGraph) {
		const meta = moduleGraph.getMetaIfExisting(this);
		if (meta === undefined) return this.ids;
		const ids = meta[idsSymbol];
		return ids !== undefined ? ids : this.ids;
	}

	/**
	 * Updates ids using the provided module graph.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {Ids} ids the imported ids
	 * @returns {void}
	 */
	setIds(moduleGraph, ids) {
		moduleGraph.getMeta(this)[idsSymbol] = ids;
	}

	/**
	 * Returns function to determine if the connection is active.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {null | false | GetConditionFn} function to determine if the connection is active
	 */
	getCondition(moduleGraph) {
		return getDependencyUsedByExportsCondition(
			this,
			this.usedByExports,
			moduleGraph
		);
	}

	/**
	 * Gets module evaluation side effects state.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this dependency connects the module to referencing modules
	 */
	getModuleEvaluationSideEffectsState(moduleGraph) {
		return false;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {ReferencedExports} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		let ids = this.getIds(moduleGraph);
		if (ids.length === 0) return this._getReferencedExportsInDestructuring();
		let namespaceObjectAsContext = this.namespaceObjectAsContext;
		if (ids[0] === "default") {
			const selfModule =
				/** @type {Module} */
				(moduleGraph.getParentModule(this));
			const importedModule =
				/** @type {Module} */
				(moduleGraph.getModule(this));
			switch (
				importedModule.getExportsType(
					moduleGraph,
					/** @type {BuildMeta} */
					(selfModule.buildMeta).strictHarmonyModule
				)
			) {
				case "default-only":
				case "default-with-named":
					if (ids.length === 1) {
						return this._getReferencedExportsInDestructuring();
					}
					ids = ids.slice(1);
					namespaceObjectAsContext = true;
					break;
				case "dynamic":
					return Dependency.EXPORTS_OBJECT_REFERENCED;
			}
		}

		if (
			this.call &&
			!this.directImport &&
			(namespaceObjectAsContext || ids.length > 1)
		) {
			if (ids.length === 1) return Dependency.EXPORTS_OBJECT_REFERENCED;
			ids = ids.slice(0, -1);
		}

		return this._getReferencedExportsInDestructuring(ids);
	}

	/**
	 * Get referenced exports in destructuring.
	 * @param {Ids=} ids ids
	 * @returns {RawReferencedExports} referenced exports
	 */
	_getReferencedExportsInDestructuring(ids) {
		if (this.referencedPropertiesInDestructuring) {
			/** @type {RawReferencedExports} */
			const refsInDestructuring = [];
			traverseDestructuringAssignmentProperties(
				this.referencedPropertiesInDestructuring,
				(stack) => refsInDestructuring.push(stack.map((p) => p.id))
			);
			/** @type {RawReferencedExports} */
			const refs = [];
			for (const idsInDestructuring of refsInDestructuring) {
				refs.push(ids ? [...ids, ...idsInDestructuring] : idsInDestructuring);
			}
			return refs;
		}
		return ids ? [ids] : Dependency.EXPORTS_OBJECT_REFERENCED;
	}

	/**
	 * Get effective export presence level.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportPresenceMode} effective mode
	 */
	_getEffectiveExportPresenceLevel(moduleGraph) {
		if (this.exportPresenceMode !== ExportPresenceModes.AUTO) {
			return this.exportPresenceMode;
		}
		const buildMeta =
			/** @type {BuildMeta} */
			(
				/** @type {Module} */
				(moduleGraph.getParentModule(this)).buildMeta
			);
		return buildMeta.strictHarmonyModule
			? ExportPresenceModes.ERROR
			: ExportPresenceModes.WARN;
	}

	/**
	 * Returns warnings.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | null | undefined} warnings
	 */
	getWarnings(moduleGraph) {
		const exportsPresence = this._getEffectiveExportPresenceLevel(moduleGraph);
		if (exportsPresence === ExportPresenceModes.WARN) {
			return this._getErrors(moduleGraph);
		}
		return null;
	}

	/**
	 * Returns errors.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | null | undefined} errors
	 */
	getErrors(moduleGraph) {
		const exportsPresence = this._getEffectiveExportPresenceLevel(moduleGraph);
		if (exportsPresence === ExportPresenceModes.ERROR) {
			return this._getErrors(moduleGraph);
		}
		return null;
	}

	/**
	 * Returns errors.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | undefined} errors
	 */
	_getErrors(moduleGraph) {
		const ids = this.getIds(moduleGraph);
		return this.getLinkingErrors(
			moduleGraph,
			ids,
			`(imported as '${this.name}')`
		);
	}

	/**
	 * implement this method to allow the occurrence order plugin to count correctly
	 * @returns {number} count how often the id is used in this dependency
	 */
	getNumberOfIdOccurrences() {
		return 0;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.ids);
		write(this.name);
		write(this.range);
		write(this.idRanges);
		write(this.exportPresenceMode);
		write(this.namespaceObjectAsContext);
		write(this.call);
		write(this.directImport);
		write(this.shorthand);
		write(this.asiSafe);
		write(this.usedByExports);
		write(this.referencedPropertiesInDestructuring);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.ids = read();
		this.name = read();
		this.range = read();
		this.idRanges = read();
		this.exportPresenceMode = read();
		this.namespaceObjectAsContext = read();
		this.call = read();
		this.directImport = read();
		this.shorthand = read();
		this.asiSafe = read();
		this.usedByExports = read();
		this.referencedPropertiesInDestructuring = read();
		super.deserialize(context);
	}
}

makeSerializable(
	HarmonyImportSpecifierDependency,
	"webpack/lib/dependencies/HarmonyImportSpecifierDependency"
);

HarmonyImportSpecifierDependency.Template = class HarmonyImportSpecifierDependencyTemplate extends (
	HarmonyImportDependency.Template
) {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {HarmonyImportSpecifierDependency} */ (dependency);
		const { moduleGraph, runtime, initFragments } = templateContext;
		const connection = moduleGraph.getConnection(dep);

		// Only render declaration for import specifier when the dependency is conditional
		if (connection && !connection.isTargetActive(runtime)) {
			initFragments.push(
				new InitFragment(
					`/* unused harmony import specifier */ var ${dep.name};\n`,
					InitFragment.STAGE_HARMONY_IMPORTS,
					0,
					`unused import specifier ${dep.name}`
				)
			);

			return;
		}

		const ids = dep.getIds(moduleGraph);
		const {
			trimmedRange: [trimmedRangeStart, trimmedRangeEnd],
			trimmedIds
		} = getTrimmedIdsAndRange(ids, dep.range, dep.idRanges, moduleGraph, dep);

		const exportExpr = this._getCodeForIds(
			dep,
			source,
			templateContext,
			trimmedIds
		);
		if (dep.shorthand) {
			source.insert(trimmedRangeEnd, `: ${exportExpr}`);
		} else {
			source.replace(trimmedRangeStart, trimmedRangeEnd - 1, exportExpr);
		}

		if (dep.referencedPropertiesInDestructuring) {
			let prefixedIds = ids;

			if (ids[0] === "default") {
				const selfModule =
					/** @type {Module} */
					(moduleGraph.getParentModule(dep));
				const importedModule =
					/** @type {Module} */
					(moduleGraph.getModule(dep));
				const exportsType = importedModule.getExportsType(
					moduleGraph,
					/** @type {BuildMeta} */
					(selfModule.buildMeta).strictHarmonyModule
				);
				if (
					(exportsType === "default-only" ||
						exportsType === "default-with-named") &&
					ids.length >= 1
				) {
					prefixedIds = ids.slice(1);
				}
			}

			/** @type {{ ids: Ids, range: Range, shorthand: boolean | string }[]} */
			const replacementsInDestructuring = [];
			traverseDestructuringAssignmentProperties(
				dep.referencedPropertiesInDestructuring,
				undefined,
				(stack) => {
					const property = stack[stack.length - 1];
					replacementsInDestructuring.push({
						ids: stack.map((p) => p.id),
						range: property.range,
						shorthand: property.shorthand
					});
				}
			);
			for (const { ids, shorthand, range } of replacementsInDestructuring) {
				/** @type {Ids} */
				const concatedIds = [...prefixedIds, ...ids];
				const module = /** @type {Module} */ (moduleGraph.getModule(dep));
				const used = moduleGraph
					.getExportsInfo(module)
					.getUsedName(concatedIds, runtime);
				if (!used) return;
				const newName = used[used.length - 1];
				const name = concatedIds[concatedIds.length - 1];
				if (newName === name) continue;

				const comment = `${Template.toNormalComment(name)} `;
				const key = comment + JSON.stringify(newName);
				source.replace(
					range[0],
					range[1] - 1,
					shorthand ? `${key}: ${name}` : `${key}`
				);
			}
		}
	}

	/**
	 * Returns generated code.
	 * @param {HarmonyImportSpecifierDependency} dep dependency
	 * @param {ReplaceSource} source source
	 * @param {DependencyTemplateContext} templateContext context
	 * @param {Ids} ids ids
	 * @returns {string} generated code
	 */
	_getCodeForIds(dep, source, templateContext, ids) {
		const { moduleGraph, module, runtime, concatenationScope } =
			templateContext;
		const connection = moduleGraph.getConnection(dep);
		/** @type {string} */
		let exportExpr;
		if (
			connection &&
			concatenationScope &&
			concatenationScope.isModuleInScope(connection.module)
		) {
			if (ids.length === 0) {
				exportExpr = concatenationScope.createModuleReference(
					connection.module,
					{
						asiSafe: dep.asiSafe,
						deferredImport: ImportPhaseUtils.isDefer(dep.phase)
					}
				);
			} else if (dep.namespaceObjectAsContext && ids.length === 1) {
				exportExpr =
					concatenationScope.createModuleReference(connection.module, {
						asiSafe: dep.asiSafe,
						deferredImport: ImportPhaseUtils.isDefer(dep.phase)
					}) + propertyAccess(ids);
			} else {
				exportExpr = concatenationScope.createModuleReference(
					connection.module,
					{
						ids,
						call: dep.call,
						directImport: dep.directImport,
						asiSafe: dep.asiSafe,
						deferredImport: ImportPhaseUtils.isDefer(dep.phase)
					}
				);
			}
		} else {
			super.apply(dep, source, templateContext);

			const { runtimeTemplate, initFragments, runtimeRequirements } =
				templateContext;

			exportExpr = runtimeTemplate.exportFromImport({
				moduleGraph,
				module: /** @type {Module} */ (moduleGraph.getModule(dep)),
				chunkGraph: templateContext.chunkGraph,
				request: dep.request,
				exportName: ids,
				originModule: module,
				asiSafe: dep.shorthand ? true : dep.asiSafe,
				isCall: dep.call,
				callContext: !dep.directImport,
				defaultInterop: true,
				importVar: dep.getImportVar(moduleGraph),
				initFragments,
				runtime,
				runtimeRequirements,
				dependency: dep
			});
		}
		return exportExpr;
	}
};

module.exports = HarmonyImportSpecifierDependency;
module.exports.idsSymbol = idsSymbol;
