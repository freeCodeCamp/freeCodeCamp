/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const { UsageState } = require("../ExportsInfo");
const Template = require("../Template");
const { equals } = require("../util/ArrayHelpers");
const makeSerializable = require("../util/makeSerializable");
const propertyAccess = require("../util/propertyAccess");
const { handleDependencyBase } = require("./CommonJsDependencyHelpers");
const ModuleDependency = require("./ModuleDependency");
const processExportInfo = require("./processExportInfo");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../Dependency").TRANSITIVE} TRANSITIVE */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ExportsInfo")} ExportsInfo */
/** @typedef {import("../ExportsInfo").ExportInfo} ExportInfo */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./CommonJsDependencyHelpers").CommonJSDependencyBaseKeywords} CommonJSDependencyBaseKeywords */

const idsSymbol = Symbol("CommonJsExportRequireDependency.ids");

const EMPTY_OBJECT = {};

class CommonJsExportRequireDependency extends ModuleDependency {
	/**
	 * @param {Range} range range
	 * @param {Range | null} valueRange value range
	 * @param {CommonJSDependencyBaseKeywords} base base
	 * @param {string[]} names names
	 * @param {string} request request
	 * @param {string[]} ids ids
	 * @param {boolean} resultUsed true, when the result is used
	 */
	constructor(range, valueRange, base, names, request, ids, resultUsed) {
		super(request);
		this.range = range;
		this.valueRange = valueRange;
		this.base = base;
		this.names = names;
		this.ids = ids;
		this.resultUsed = resultUsed;
		this.asiSafe = undefined;
	}

	get type() {
		return "cjs export require";
	}

	/**
	 * @returns {boolean | TRANSITIVE} true, when changes to the referenced module could affect the referencing module; TRANSITIVE, when changes to the referenced module could affect referencing modules of the referencing module
	 */
	couldAffectReferencingModule() {
		return Dependency.TRANSITIVE;
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {string[]} the imported id
	 */
	getIds(moduleGraph) {
		return (
			/** @type {TODO} */ (moduleGraph.getMeta(this))[idsSymbol] || this.ids
		);
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {string[]} ids the imported ids
	 * @returns {void}
	 */
	setIds(moduleGraph, ids) {
		/** @type {TODO} */ (moduleGraph.getMeta(this))[idsSymbol] = ids;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		const ids = this.getIds(moduleGraph);
		const getFullResult = () => {
			if (ids.length === 0) {
				return Dependency.EXPORTS_OBJECT_REFERENCED;
			}
			return [
				{
					name: ids,
					canMangle: false
				}
			];
		};
		if (this.resultUsed) return getFullResult();
		/** @type {ExportsInfo | undefined} */
		let exportsInfo = moduleGraph.getExportsInfo(
			/** @type {Module} */ (moduleGraph.getParentModule(this))
		);
		for (const name of this.names) {
			const exportInfo = /** @type {ExportInfo} */ (
				exportsInfo.getReadOnlyExportInfo(name)
			);
			const used = exportInfo.getUsed(runtime);
			if (used === UsageState.Unused) return Dependency.NO_EXPORTS_REFERENCED;
			if (used !== UsageState.OnlyPropertiesUsed) return getFullResult();
			exportsInfo = exportInfo.exportsInfo;
			if (!exportsInfo) return getFullResult();
		}
		if (exportsInfo.otherExportsInfo.getUsed(runtime) !== UsageState.Unused) {
			return getFullResult();
		}
		/** @type {string[][]} */
		const referencedExports = [];
		for (const exportInfo of exportsInfo.orderedExports) {
			processExportInfo(
				runtime,
				referencedExports,
				ids.concat(exportInfo.name),
				exportInfo,
				false
			);
		}
		return referencedExports.map(name => ({
			name,
			canMangle: false
		}));
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		if (this.names.length === 1) {
			const ids = this.getIds(moduleGraph);
			const name = this.names[0];
			const from = moduleGraph.getConnection(this);
			if (!from) return;
			return {
				exports: [
					{
						name,
						from,
						export: ids.length === 0 ? null : ids,
						// we can't mangle names that are in an empty object
						// because one could access the prototype property
						// when export isn't set yet
						canMangle: !(name in EMPTY_OBJECT) && false
					}
				],
				dependencies: [from.module]
			};
		} else if (this.names.length > 0) {
			const name = this.names[0];
			return {
				exports: [
					{
						name,
						// we can't mangle names that are in an empty object
						// because one could access the prototype property
						// when export isn't set yet
						canMangle: !(name in EMPTY_OBJECT) && false
					}
				],
				dependencies: undefined
			};
		}
		const from = moduleGraph.getConnection(this);
		if (!from) return;
		const reexportInfo = this.getStarReexports(
			moduleGraph,
			undefined,
			from.module
		);
		const ids = this.getIds(moduleGraph);
		if (reexportInfo) {
			return {
				exports: Array.from(
					/** @type {TODO} */ (reexportInfo).exports,
					name => ({
						name,
						from,
						export: ids.concat(name),
						canMangle: !(name in EMPTY_OBJECT) && false
					})
				),
				// TODO handle deep reexports
				dependencies: [from.module]
			};
		}
		return {
			exports: true,
			from: ids.length === 0 ? from : undefined,
			canMangle: false,
			dependencies: [from.module]
		};
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {RuntimeSpec} runtime the runtime
	 * @param {Module} importedModule the imported module (optional)
	 * @returns {{exports?: Set<string>, checked?: Set<string>} | undefined} information
	 */
	getStarReexports(
		moduleGraph,
		runtime,
		importedModule = /** @type {Module} */ (moduleGraph.getModule(this))
	) {
		/** @type {ExportsInfo | undefined} */
		let importedExportsInfo = moduleGraph.getExportsInfo(importedModule);
		const ids = this.getIds(moduleGraph);
		if (ids.length > 0)
			importedExportsInfo = importedExportsInfo.getNestedExportsInfo(ids);
		/** @type {ExportsInfo | undefined} */
		let exportsInfo = moduleGraph.getExportsInfo(
			/** @type {Module} */ (moduleGraph.getParentModule(this))
		);
		if (this.names.length > 0)
			exportsInfo = exportsInfo.getNestedExportsInfo(this.names);

		const noExtraExports =
			importedExportsInfo &&
			importedExportsInfo.otherExportsInfo.provided === false;
		const noExtraImports =
			exportsInfo &&
			exportsInfo.otherExportsInfo.getUsed(runtime) === UsageState.Unused;

		if (!noExtraExports && !noExtraImports) {
			return;
		}

		const isNamespaceImport =
			importedModule.getExportsType(moduleGraph, false) === "namespace";

		/** @type {Set<string>} */
		const exports = new Set();
		/** @type {Set<string>} */
		const checked = new Set();

		if (noExtraImports) {
			for (const exportInfo of /** @type {ExportsInfo} */ (exportsInfo)
				.orderedExports) {
				const name = exportInfo.name;
				if (exportInfo.getUsed(runtime) === UsageState.Unused) continue;
				if (name === "__esModule" && isNamespaceImport) {
					exports.add(name);
				} else if (importedExportsInfo) {
					const importedExportInfo =
						importedExportsInfo.getReadOnlyExportInfo(name);
					if (importedExportInfo.provided === false) continue;
					exports.add(name);
					if (importedExportInfo.provided === true) continue;
					checked.add(name);
				} else {
					exports.add(name);
					checked.add(name);
				}
			}
		} else if (noExtraExports) {
			for (const importedExportInfo of /** @type {ExportsInfo} */ (
				importedExportsInfo
			).orderedExports) {
				const name = importedExportInfo.name;
				if (importedExportInfo.provided === false) continue;
				if (exportsInfo) {
					const exportInfo = exportsInfo.getReadOnlyExportInfo(name);
					if (exportInfo.getUsed(runtime) === UsageState.Unused) continue;
				}
				exports.add(name);
				if (importedExportInfo.provided === true) continue;
				checked.add(name);
			}
			if (isNamespaceImport) {
				exports.add("__esModule");
				checked.delete("__esModule");
			}
		}

		return { exports, checked };
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.asiSafe);
		write(this.range);
		write(this.valueRange);
		write(this.base);
		write(this.names);
		write(this.ids);
		write(this.resultUsed);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.asiSafe = read();
		this.range = read();
		this.valueRange = read();
		this.base = read();
		this.names = read();
		this.ids = read();
		this.resultUsed = read();
		super.deserialize(context);
	}
}

makeSerializable(
	CommonJsExportRequireDependency,
	"webpack/lib/dependencies/CommonJsExportRequireDependency"
);

CommonJsExportRequireDependency.Template = class CommonJsExportRequireDependencyTemplate extends (
	ModuleDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(
		dependency,
		source,
		{
			module,
			runtimeTemplate,
			chunkGraph,
			moduleGraph,
			runtimeRequirements,
			runtime
		}
	) {
		const dep = /** @type {CommonJsExportRequireDependency} */ (dependency);
		const used = moduleGraph
			.getExportsInfo(module)
			.getUsedName(dep.names, runtime);

		const [type, base] = handleDependencyBase(
			dep.base,
			module,
			runtimeRequirements
		);

		const importedModule = moduleGraph.getModule(dep);
		let requireExpr = runtimeTemplate.moduleExports({
			module: importedModule,
			chunkGraph,
			request: dep.request,
			weak: dep.weak,
			runtimeRequirements
		});
		if (importedModule) {
			const ids = dep.getIds(moduleGraph);
			const usedImported = moduleGraph
				.getExportsInfo(importedModule)
				.getUsedName(ids, runtime);
			if (usedImported) {
				const comment = equals(usedImported, ids)
					? ""
					: `${Template.toNormalComment(propertyAccess(ids))} `;
				requireExpr += `${comment}${propertyAccess(usedImported)}`;
			}
		}

		switch (type) {
			case "expression":
				source.replace(
					dep.range[0],
					dep.range[1] - 1,
					used
						? `${base}${propertyAccess(used)} = ${requireExpr}`
						: `/* unused reexport */ ${requireExpr}`
				);
				return;
			case "Object.defineProperty":
				throw new Error("TODO");
			default:
				throw new Error("Unexpected type");
		}
	}
};

module.exports = CommonJsExportRequireDependency;
