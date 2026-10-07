/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { UsageState } = require("../ExportsInfo");
const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {Module} module the module
 * @param {string[] | null} _exportName name of the export if any
 * @param {string | null} property name of the requested property
 * @param {RuntimeSpec} runtime for which runtime
 * @returns {any} value of the property
 */
const getProperty = (moduleGraph, module, _exportName, property, runtime) => {
	if (!_exportName) {
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
				return Array.from(usedExports).sort();
			}
		}
	}
	const exportName = /** @type {string[]} */ (_exportName);
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
	 * @param {Range} range range
	 * @param {string[] | null} exportName export name
	 * @param {string | null} property property
	 */
	constructor(range, exportName, property) {
		super();
		this.range = range;
		this.exportName = exportName;
		this.property = property;
	}

	/**
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
