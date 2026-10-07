/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Florent Cailhol @ooflorent
*/

"use strict";

const DependencyTemplate = require("../DependencyTemplate");
const InitFragment = require("../InitFragment");
const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */

class CachedConstDependency extends NullDependency {
	/**
	 * @param {string} expression expression
	 * @param {Range} range range
	 * @param {string} identifier identifier
	 */
	constructor(expression, range, identifier) {
		super();

		this.expression = expression;
		this.range = range;
		this.identifier = identifier;
		this._hashUpdate = undefined;
	}

	/**
	 * @returns {string} hash update
	 */
	_createHashUpdate() {
		return `${this.identifier}${this.range}${this.expression}`;
	}

	/**
	 * Update the hash
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		if (this._hashUpdate === undefined) {
			this._hashUpdate = this._createHashUpdate();
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.expression);
		write(this.range);
		write(this.identifier);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.expression = read();
		this.range = read();
		this.identifier = read();

		super.deserialize(context);
	}
}

makeSerializable(
	CachedConstDependency,
	"webpack/lib/dependencies/CachedConstDependency"
);

CachedConstDependency.Template = class CachedConstDependencyTemplate extends (
	DependencyTemplate
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
		{ runtimeTemplate, dependencyTemplates, initFragments }
	) {
		const dep = /** @type {CachedConstDependency} */ (dependency);

		initFragments.push(
			new InitFragment(
				`var ${dep.identifier} = ${dep.expression};\n`,
				InitFragment.STAGE_CONSTANTS,
				0,
				`const ${dep.identifier}`
			)
		);

		if (typeof dep.range === "number") {
			source.insert(dep.range, dep.identifier);

			return;
		}

		source.replace(dep.range[0], dep.range[1] - 1, dep.identifier);
	}
};

module.exports = CachedConstDependency;
