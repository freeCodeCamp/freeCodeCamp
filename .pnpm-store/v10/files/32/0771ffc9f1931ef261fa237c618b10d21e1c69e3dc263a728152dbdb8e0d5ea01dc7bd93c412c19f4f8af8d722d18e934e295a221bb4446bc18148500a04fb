/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").CssDependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../css/CssParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class CssIcssSymbolDependency extends NullDependency {
	/**
	 * @param {string} name name
	 * @param {string} value value
	 * @param {Range} range range
	 */
	constructor(name, value, range) {
		super();
		this.name = name;
		this.value = value;
		this.range = range;
		this._hashUpdate = undefined;
	}

	get type() {
		return "css @value identifier";
	}

	get category() {
		return "self";
	}

	/**
	 * Update the hash
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		if (this._hashUpdate === undefined) {
			this._hashUpdate = `${this.range}${this.name}${this.value}`;
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		return {
			exports: [
				{
					name: this.name,
					canMangle: true
				}
			],
			dependencies: undefined
		};
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return [[this.name]];
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.name);
		write(this.value);
		write(this.range);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.name = read();
		this.value = read();
		this.range = read();
		super.deserialize(context);
	}
}

CssIcssSymbolDependency.Template = class CssValueAtRuleDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, { cssData }) {
		const dep = /** @type {CssIcssSymbolDependency} */ (dependency);

		source.replace(dep.range[0], dep.range[1] - 1, dep.value);

		cssData.exports.set(dep.name, dep.value);
	}
};

makeSerializable(
	CssIcssSymbolDependency,
	"webpack/lib/dependencies/CssIcssSymbolDependency"
);

module.exports = CssIcssSymbolDependency;
