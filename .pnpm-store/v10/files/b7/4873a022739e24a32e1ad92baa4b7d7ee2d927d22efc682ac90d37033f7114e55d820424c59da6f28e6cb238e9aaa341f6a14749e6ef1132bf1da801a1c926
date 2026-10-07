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
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../javascript/JavascriptModulesPlugin").ChunkRenderContext} ChunkRenderContext */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */

class ExternalModuleDependency extends CachedConstDependency {
	/**
	 * @param {string} module module
	 * @param {{ name: string, value: string }[]} importSpecifiers import specifiers
	 * @param {string | undefined} defaultImport default import
	 * @param {string} expression expression
	 * @param {Range} range range
	 * @param {string} identifier identifier
	 */
	constructor(
		module,
		importSpecifiers,
		defaultImport,
		expression,
		range,
		identifier
	) {
		super(expression, range, identifier);

		this.importedModule = module;
		this.specifiers = importSpecifiers;
		this.default = defaultImport;
	}

	/**
	 * @returns {string} hash update
	 */
	_createHashUpdate() {
		return `${this.importedModule}${JSON.stringify(this.specifiers)}${
			this.default || "null"
		}${super._createHashUpdate()}`;
	}

	/**
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
