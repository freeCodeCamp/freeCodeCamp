/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const InitFragment = require("../InitFragment");
const makeSerializable = require("../util/makeSerializable");
const propertyAccess = require("../util/propertyAccess");
const { handleDependencyBase } = require("./CommonJsDependencyHelpers");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./CommonJsDependencyHelpers").CommonJSDependencyBaseKeywords} CommonJSDependencyBaseKeywords */

const EMPTY_OBJECT = {};

class CommonJsExportsDependency extends NullDependency {
	/**
	 * @param {Range} range range
	 * @param {Range | null} valueRange value range
	 * @param {CommonJSDependencyBaseKeywords} base base
	 * @param {string[]} names names
	 */
	constructor(range, valueRange, base, names) {
		super();
		this.range = range;
		this.valueRange = valueRange;
		this.base = base;
		this.names = names;
	}

	get type() {
		return "cjs exports";
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		const name = this.names[0];
		return {
			exports: [
				{
					name,
					// we can't mangle names that are in an empty object
					// because one could access the prototype property
					// when export isn't set yet
					canMangle: !(name in EMPTY_OBJECT)
				}
			],
			dependencies: undefined
		};
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.range);
		write(this.valueRange);
		write(this.base);
		write(this.names);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.range = read();
		this.valueRange = read();
		this.base = read();
		this.names = read();
		super.deserialize(context);
	}
}

makeSerializable(
	CommonJsExportsDependency,
	"webpack/lib/dependencies/CommonJsExportsDependency"
);

CommonJsExportsDependency.Template = class CommonJsExportsDependencyTemplate extends (
	NullDependency.Template
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
		{ module, moduleGraph, initFragments, runtimeRequirements, runtime }
	) {
		const dep = /** @type {CommonJsExportsDependency} */ (dependency);
		const used = moduleGraph
			.getExportsInfo(module)
			.getUsedName(dep.names, runtime);

		const [type, base] = handleDependencyBase(
			dep.base,
			module,
			runtimeRequirements
		);

		switch (type) {
			case "expression":
				if (!used) {
					initFragments.push(
						new InitFragment(
							"var __webpack_unused_export__;\n",
							InitFragment.STAGE_CONSTANTS,
							0,
							"__webpack_unused_export__"
						)
					);
					source.replace(
						dep.range[0],
						dep.range[1] - 1,
						"__webpack_unused_export__"
					);
					return;
				}
				source.replace(
					dep.range[0],
					dep.range[1] - 1,
					`${base}${propertyAccess(used)}`
				);
				return;
			case "Object.defineProperty":
				if (!used) {
					initFragments.push(
						new InitFragment(
							"var __webpack_unused_export__;\n",
							InitFragment.STAGE_CONSTANTS,
							0,
							"__webpack_unused_export__"
						)
					);
					source.replace(
						dep.range[0],
						/** @type {Range} */ (dep.valueRange)[0] - 1,
						"__webpack_unused_export__ = ("
					);
					source.replace(
						/** @type {Range} */ (dep.valueRange)[1],
						dep.range[1] - 1,
						")"
					);
					return;
				}
				source.replace(
					dep.range[0],
					/** @type {Range} */ (dep.valueRange)[0] - 1,
					`Object.defineProperty(${base}${propertyAccess(
						used.slice(0, -1)
					)}, ${JSON.stringify(used[used.length - 1])}, (`
				);
				source.replace(
					/** @type {Range} */ (dep.valueRange)[1],
					dep.range[1] - 1,
					"))"
				);
		}
	}
};

module.exports = CommonJsExportsDependency;
