/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const DependencyTemplate = require("../DependencyTemplate");
const makeSerializable = require("../util/makeSerializable");
const ExternalModuleInitFragment = require("./ExternalModuleInitFragment");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../dependencies/ExternalModuleInitFragment").ArrayImportSpecifiers} ArrayImportSpecifiers */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class ExternalModuleInitFragmentDependency extends NullDependency {
	/**
	 * Creates an instance of ExternalModuleInitFragmentDependency.
	 * @param {string} module module
	 * @param {ArrayImportSpecifiers} importSpecifiers import specifiers
	 * @param {string | undefined} defaultImport default import
	 */
	constructor(module, importSpecifiers, defaultImport) {
		super();
		this.importedModule = module;
		this.specifiers = importSpecifiers;
		this.default = defaultImport;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.importedModule);
		write(this.specifiers);
		write(this.default);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.importedModule = read();
		this.specifiers = read();
		this.default = read();
	}
}

makeSerializable(
	ExternalModuleInitFragmentDependency,
	"webpack/lib/dependencies/ExternalModuleConstDependency"
);

ExternalModuleInitFragmentDependency.Template = class ExternalModuleConstDependencyTemplate extends (
	DependencyTemplate
) {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep =
			/** @type {ExternalModuleInitFragmentDependency} */
			(dependency);
		const { chunkInitFragments, runtimeTemplate } = templateContext;

		chunkInitFragments.push(
			new ExternalModuleInitFragment(
				`${runtimeTemplate.supportNodePrefixForCoreModules() ? "node:" : ""}${
					dep.importedModule
				}`,
				dep.specifiers,
				dep.default
			)
		);
	}
};

module.exports = ExternalModuleInitFragmentDependency;
