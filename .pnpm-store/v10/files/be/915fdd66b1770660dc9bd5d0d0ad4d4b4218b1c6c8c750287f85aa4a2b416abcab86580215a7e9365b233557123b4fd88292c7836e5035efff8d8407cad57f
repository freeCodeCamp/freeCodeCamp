/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const { equals } = require("../util/ArrayHelpers");
const makeSerializable = require("../util/makeSerializable");
const { propertyAccess } = require("../util/property");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ExportsInfo").ExportInfoName} ExportInfoName */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./CommonJsDependencyHelpers").CommonJSDependencyBaseKeywords} CommonJSDependencyBaseKeywords */

class CommonJsSelfReferenceDependency extends NullDependency {
	/**
	 * Creates an instance of CommonJsSelfReferenceDependency.
	 * @param {Range} range range
	 * @param {CommonJSDependencyBaseKeywords} base base
	 * @param {ExportInfoName[]} names names
	 * @param {boolean} call is a call
	 */
	constructor(range, base, names, call) {
		super();
		this.range = range;
		this.base = base;
		this.names = names;
		this.call = call;
	}

	get type() {
		return "cjs self exports reference";
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
		return [this.call ? this.names.slice(0, -1) : this.names];
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.range);
		write(this.base);
		write(this.names);
		write(this.call);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.range = read();
		this.base = read();
		this.names = read();
		this.call = read();
		super.deserialize(context);
	}
}

makeSerializable(
	CommonJsSelfReferenceDependency,
	"webpack/lib/dependencies/CommonJsSelfReferenceDependency"
);

CommonJsSelfReferenceDependency.Template = class CommonJsSelfReferenceDependencyTemplate extends (
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
		{ module, moduleGraph, runtime, runtimeRequirements }
	) {
		const dep = /** @type {CommonJsSelfReferenceDependency} */ (dependency);
		const used =
			dep.names.length === 0
				? dep.names
				: moduleGraph.getExportsInfo(module).getUsedName(dep.names, runtime);
		if (!used) {
			throw new Error(
				"Self-reference dependency has unused export name: This should not happen"
			);
		}

		/** @type {string} */
		let base;
		switch (dep.base) {
			case "exports":
				runtimeRequirements.add(RuntimeGlobals.exports);
				base = module.exportsArgument;
				break;
			case "module.exports":
				runtimeRequirements.add(RuntimeGlobals.module);
				base = `${module.moduleArgument}.exports`;
				break;
			case "this":
				runtimeRequirements.add(RuntimeGlobals.thisAsExports);
				base = "this";
				break;
			default:
				throw new Error(`Unsupported base ${dep.base}`);
		}

		if (base === dep.base && equals(used, dep.names)) {
			// Nothing has to be changed
			// We don't use a replacement for compat reasons
			// for plugins that update `module._source` which they
			// shouldn't do!
			return;
		}

		source.replace(
			dep.range[0],
			dep.range[1] - 1,
			`${base}${propertyAccess(used)}`
		);
	}
};

module.exports = CommonJsSelfReferenceDependency;
