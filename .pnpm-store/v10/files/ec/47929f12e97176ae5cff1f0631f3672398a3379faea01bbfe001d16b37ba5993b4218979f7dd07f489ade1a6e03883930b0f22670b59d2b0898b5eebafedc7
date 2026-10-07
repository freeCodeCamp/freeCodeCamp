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
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class ModuleDecoratorDependency extends NullDependency {
	/**
	 * @param {string} decorator the decorator requirement
	 * @param {boolean} allowExportsAccess allow to access exports from module
	 */
	constructor(decorator, allowExportsAccess) {
		super();
		this.decorator = decorator;
		this.allowExportsAccess = allowExportsAccess;
		this._hashUpdate = undefined;
	}

	/**
	 * @returns {string} a display name for the type of dependency
	 */
	get type() {
		return "module decorator";
	}

	get category() {
		return "self";
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return "self";
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return this.allowExportsAccess
			? Dependency.EXPORTS_OBJECT_REFERENCED
			: Dependency.NO_EXPORTS_REFERENCED;
	}

	/**
	 * Update the hash
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
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.decorator);
		write(this.allowExportsAccess);
		super.serialize(context);
	}

	/**
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
