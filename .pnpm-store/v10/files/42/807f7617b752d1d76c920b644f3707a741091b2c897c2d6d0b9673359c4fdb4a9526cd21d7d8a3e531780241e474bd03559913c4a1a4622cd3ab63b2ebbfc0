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
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */

class CachedConstDependency extends NullDependency {
	/**
	 * Creates an instance of CachedConstDependency.
	 * @param {string} expression expression
	 * @param {Range | null} range range
	 * @param {string} identifier identifier
	 * @param {number=} place place where we inject the expression
	 */
	constructor(
		expression,
		range,
		identifier,
		place = CachedConstDependency.PLACE_MODULE
	) {
		super();

		this.expression = expression;
		this.range = range;
		this.identifier = identifier;
		this.place = place;
		/** @type {undefined | string} */
		this._hashUpdate = undefined;
	}

	/**
	 * Create hash update.
	 * @returns {string} hash update
	 */
	_createHashUpdate() {
		return `${this.place}${this.identifier}${this.range}${this.expression}`;
	}

	/**
	 * Updates the hash with the data contributed by this instance.
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
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.expression);
		write(this.range);
		write(this.identifier);
		write(this.place);

		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.expression = read();
		this.range = read();
		this.identifier = read();
		this.place = read();

		super.deserialize(context);
	}
}

CachedConstDependency.PLACE_MODULE = 10;
CachedConstDependency.PLACE_CHUNK = 20;

makeSerializable(
	CachedConstDependency,
	"webpack/lib/dependencies/CachedConstDependency"
);

CachedConstDependency.Template = class CachedConstDependencyTemplate extends (
	DependencyTemplate
) {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, { initFragments, chunkInitFragments }) {
		const dep = /** @type {CachedConstDependency} */ (dependency);

		(dep.place === CachedConstDependency.PLACE_MODULE
			? initFragments
			: chunkInitFragments
		).push(
			new InitFragment(
				`var ${dep.identifier} = ${dep.expression};\n`,
				InitFragment.STAGE_CONSTANTS,
				// For a chunk we inject expression after imports
				dep.place === CachedConstDependency.PLACE_MODULE ? 0 : 10,
				`const ${dep.identifier}`
			)
		);

		if (typeof dep.range === "number") {
			source.insert(dep.range, dep.identifier);
		} else if (dep.range !== null) {
			source.replace(dep.range[0], dep.range[1] - 1, dep.identifier);
		}
	}
};

module.exports = CachedConstDependency;
