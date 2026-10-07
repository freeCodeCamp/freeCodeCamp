/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { UsageState } = require("../ExportsInfo");
const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ExportsInfo").ExportInfoName} ExportInfoName */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * Defines the sortable set type used by this module.
 * @template T
 * @typedef {import("../util/SortableSet")<T>} SortableSet
 */

/**
 * Returns value of the property.
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {Module} module the module
 * @param {ExportInfoName[] | null} exportName_ name of the export if any
 * @param {string | null} property name of the requested property
 * @param {RuntimeSpec} runtime for which runtime
 * @returns {undefined | null | boolean | ExportInfoName[]} value of the property
 */
const getProperty = (moduleGraph, module, exportName_, property, runtime) => {
	if (!exportName_) {
		switch (property) {
			case "usedExports": {
				const usedExports = moduleGraph
					.getExportsInfo(module)
					.getUsedExports(runtime);
				if (
					typeof usedExports === "boolean" ||
					usedExports === undefined ||
					usedExports === null
				) {
					return usedExports;
				}
				return [...usedExports].sort();
			}
		}
	}
	const exportName = /** @type {ExportInfoName[]} */ (exportName_);
	switch (property) {
		case "canMangle": {
			const exportsInfo = moduleGraph.getExportsInfo(module);
			const exportInfo = exportsInfo.getReadOnlyExportInfoRecursive(exportName);
			if (exportInfo) return exportInfo.canMangle;
			return exportsInfo.otherExportsInfo.canMangle;
		}
		case "used":
			return (
				moduleGraph.getExportsInfo(module).getUsed(exportName, runtime) !==
				UsageState.Unused
			);
		case "useInfo": {
			const state = moduleGraph
				.getExportsInfo(module)
				.getUsed(exportName, runtime);
			switch (state) {
				case UsageState.Used:
				case UsageState.OnlyPropertiesUsed:
					return true;
				case UsageState.Unused:
					return false;
				case UsageState.NoInfo:
					return;
				case UsageState.Unknown:
					return null;
				default:
					throw new Error(`Unexpected UsageState ${state}`);
			}
		}
		case "provideInfo":
			return moduleGraph.getExportsInfo(module).isExportProvided(exportName);
	}
};

class ExportsInfoDependency extends NullDependency {
	/**
	 * Creates an instance of ExportsInfoDependency.
	 * @param {Range} range range
	 * @param {ExportInfoName[] | null} exportName export name
	 * @param {string | null} property property
	 */
	constructor(range, exportName, property) {
		super();
		this.range = range;
		this.exportName = exportName;
		this.property = property;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.range);
		write(this.exportName);
		write(this.property);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 * @returns {ExportsInfoDependency} ExportsInfoDependency
	 */
	static deserialize(context) {
		const obj = new ExportsInfoDependency(
			context.read(),
			context.read(),
			context.read()
		);
		obj.deserialize(context);
		return obj;
	}
}

makeSerializable(
	ExportsInfoDependency,
	"webpack/lib/dependencies/ExportsInfoDependency"
);

ExportsInfoDependency.Template = class ExportsInfoDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, { module, moduleGraph, runtime }) {
		const dep = /** @type {ExportsInfoDependency} */ (dependency);

		const value = getProperty(
			moduleGraph,
			module,
			dep.exportName,
			dep.property,
			runtime
		);
		source.replace(
			dep.range[0],
			dep.range[1] - 1,
			value === undefined ? "undefined" : JSON.stringify(value)
		);
	}
};

module.exports = ExportsInfoDependency;
