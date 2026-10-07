/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const CachedConstDependency = require("./CachedConstDependency");
const ExternalModuleInitFragment = require("./ExternalModuleInitFragment");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../dependencies/ExternalModuleInitFragment").ArrayImportSpecifiers} ArrayImportSpecifiers */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class ExternalModuleDependency extends CachedConstDependency {
	/**
	 * Creates an instance of ExternalModuleDependency.
	 * @param {string} module module
	 * @param {ArrayImportSpecifiers} importSpecifiers import specifiers
	 * @param {string | undefined} defaultImport default import
	 * @param {string} expression expression
	 * @param {Range | null} range range
	 * @param {string} identifier identifier
	 * @param {number=} place place where we inject the expression
	 */
	constructor(
		module,
		importSpecifiers,
		defaultImport,
		expression,
		range,
		identifier,
		place = CachedConstDependency.PLACE_MODULE
	) {
		super(expression, range, identifier, place);

		this.importedModule = module;
		this.specifiers = importSpecifiers;
		this.default = defaultImport;
	}

	/**
	 * Create hash update.
	 * @returns {string} hash update
	 */
	_createHashUpdate() {
		return `${this.importedModule}${JSON.stringify(this.specifiers)}${
			this.default || "null"
		}${super._createHashUpdate()}`;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		super.serialize(context);
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
		super.deserialize(context);
		const { read } = context;
		this.importedModule = read();
		this.specifiers = read();
		this.default = read();
	}
}

makeSerializable(
	ExternalModuleDependency,
	"webpack/lib/dependencies/ExternalModuleDependency"
);

ExternalModuleDependency.Template = class ExternalModuleDependencyTemplate extends (
	CachedConstDependency.Template
) {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		super.apply(dependency, source, templateContext);
		const dep = /** @type {ExternalModuleDependency} */ (dependency);
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

module.exports = ExternalModuleDependency;
