/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */

class ConstDependency extends NullDependency {
	/**
	 * @param {string} expression the expression
	 * @param {number | Range} range the source range
	 * @param {(string[] | null)=} runtimeRequirements runtime requirements
	 */
	constructor(expression, range, runtimeRequirements) {
		super();
		this.expression = expression;
		this.range = range;
		this.runtimeRequirements = runtimeRequirements
			? new Set(runtimeRequirements)
			: null;
		this._hashUpdate = undefined;
	}

	/**
	 * Update the hash
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		if (this._hashUpdate === undefined) {
			let hashUpdate = `${this.range}|${this.expression}`;
			if (this.runtimeRequirements) {
				for (const item of this.runtimeRequirements) {
					hashUpdate += "|";
					hashUpdate += item;
				}
			}
			this._hashUpdate = hashUpdate;
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this dependency connects the module to referencing modules
	 */
	getModuleEvaluationSideEffectsState(moduleGraph) {
		return false;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.expression);
		write(this.range);
		write(this.runtimeRequirements);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.expression = read();
		this.range = read();
		this.runtimeRequirements = read();
		super.deserialize(context);
	}
}

makeSerializable(ConstDependency, "webpack/lib/dependencies/ConstDependency");

ConstDependency.Template = class ConstDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {ConstDependency} */ (dependency);
		if (dep.runtimeRequirements) {
			for (const req of dep.runtimeRequirements) {
				templateContext.runtimeRequirements.add(req);
			}
		}
		if (typeof dep.range === "number") {
			source.insert(dep.range, dep.expression);
			return;
		}

		source.replace(dep.range[0], dep.range[1] - 1, dep.expression);
	}
};

module.exports = ConstDependency;
