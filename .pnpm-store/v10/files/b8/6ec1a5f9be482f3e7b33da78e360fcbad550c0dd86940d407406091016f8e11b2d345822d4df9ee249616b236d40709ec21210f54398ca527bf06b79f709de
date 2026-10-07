/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const CssIcssExportDependency = require("./CssIcssExportDependency");
const CssLocalIdentifierDependency = require("./CssLocalIdentifierDependency");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../DependencyTemplate").CssDependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class CssIcssImportDependency extends ModuleDependency {
	/**
	 * Example of dependency:
	 *
	 *:import('./style.css') { IMPORTED_NAME: v-primary }
	 * @param {string} request request request path which needs resolving
	 * @param {string} exportName export name
	 * @param {[number, number]} range the range of dependency
	 */
	constructor(request, exportName, range) {
		super(request);
		this.range = range;
		this.exportName = exportName;
	}

	get type() {
		return "css :import";
	}

	get category() {
		return "css-import";
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.range);
		write(this.exportName);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.range = read();
		this.exportName = read();
		super.deserialize(context);
	}
}

CssIcssImportDependency.Template = class CssIcssImportDependencyTemplate extends (
	ModuleDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {CssIcssImportDependency} */ (dependency);
		const { range } = dep;
		const module = templateContext.moduleGraph.getModule(dep);
		let value;

		for (const item of module.dependencies) {
			if (
				item instanceof CssLocalIdentifierDependency &&
				dep.exportName === item.name
			) {
				value = CssLocalIdentifierDependency.Template.getIdentifier(
					item,
					dep.exportName,
					{
						...templateContext,
						module
					}
				);
				break;
			} else if (
				item instanceof CssIcssExportDependency &&
				dep.exportName === item.name
			) {
				value = item.value;
				break;
			}
		}

		if (!value) {
			throw new Error(
				`Imported '${dep.exportName}' name from '${dep.request}' not found`
			);
		}

		source.replace(range[0], range[1], value);
	}
};

makeSerializable(
	CssIcssImportDependency,
	"webpack/lib/dependencies/CssIcssImportDependency"
);

module.exports = CssIcssImportDependency;
