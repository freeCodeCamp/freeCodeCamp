/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const InitFragment = require("../InitFragment");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class ModuleDecoratorDependency extends NullDependency {
	/**
	 * Creates an instance of ModuleDecoratorDependency.
	 * @param {string} decorator the decorator requirement
	 * @param {boolean} allowExportsAccess allow to access exports from module
	 */
	constructor(decorator, allowExportsAccess) {
		super();
		this.decorator = decorator;
		this.allowExportsAccess = allowExportsAccess;
		/** @type {undefined | string} */
		this._hashUpdate = undefined;
	}

	/**
	 * Returns a display name for the type of dependency.
	 * @returns {string} a display name for the type of dependency
	 */
	get type() {
		return "module decorator";
	}

	get category() {
		return "self";
	}

	/**
	 * Returns an identifier to merge equal requests.
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return "self";
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {ReferencedExports} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return this.allowExportsAccess
			? Dependency.EXPORTS_OBJECT_REFERENCED
			: Dependency.NO_EXPORTS_REFERENCED;
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		if (this._hashUpdate === undefined) {
			this._hashUpdate = `${this.decorator}${this.allowExportsAccess}`;
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.decorator);
		write(this.allowExportsAccess);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.decorator = read();
		this.allowExportsAccess = read();
		super.deserialize(context);
	}
}

makeSerializable(
	ModuleDecoratorDependency,
	"webpack/lib/dependencies/ModuleDecoratorDependency"
);

ModuleDecoratorDependency.Template = class ModuleDecoratorDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(
		dependency,
		source,
		{ module, chunkGraph, initFragments, runtimeRequirements }
	) {
		const dep = /** @type {ModuleDecoratorDependency} */ (dependency);
		runtimeRequirements.add(RuntimeGlobals.moduleLoaded);
		runtimeRequirements.add(RuntimeGlobals.moduleId);
		runtimeRequirements.add(RuntimeGlobals.module);
		runtimeRequirements.add(dep.decorator);
		initFragments.push(
			new InitFragment(
				`/* module decorator */ ${module.moduleArgument} = ${dep.decorator}(${module.moduleArgument});\n`,
				InitFragment.STAGE_PROVIDES,
				0,
				`module decorator ${chunkGraph.getModuleId(module)}`
			)
		);
	}
};

module.exports = ModuleDecoratorDependency;
