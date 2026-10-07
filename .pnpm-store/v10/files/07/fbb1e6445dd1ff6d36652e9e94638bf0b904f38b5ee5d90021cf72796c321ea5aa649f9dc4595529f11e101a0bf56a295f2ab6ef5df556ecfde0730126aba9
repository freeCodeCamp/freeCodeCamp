/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Template = require("../Template");
const { equals } = require("../util/ArrayHelpers");
const { getTrimmedIdsAndRange } = require("../util/chainedImports");
const makeSerializable = require("../util/makeSerializable");
const propertyAccess = require("../util/propertyAccess");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class CommonJsFullRequireDependency extends ModuleDependency {
	/**
	 * @param {string} request the request string
	 * @param {Range} range location in source code
	 * @param {string[]} names accessed properties on module
	 * @param {Range[]=} idRanges ranges for members of ids; the two arrays are right-aligned
	 */
	constructor(
		request,
		range,
		names,
		idRanges /* TODO webpack 6 make this non-optional. It must always be set to properly trim ids. */
	) {
		super(request);
		this.range = range;
		this.names = names;
		this.idRanges = idRanges;
		this.call = false;
		this.asiSafe = undefined;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		if (this.call) {
			const importedModule = moduleGraph.getModule(this);
			if (
				!importedModule ||
				importedModule.getExportsType(moduleGraph, false) !== "namespace"
			) {
				return [this.names.slice(0, -1)];
			}
		}
		return [this.names];
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.names);
		write(this.idRanges);
		write(this.call);
		write(this.asiSafe);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.names = read();
		this.idRanges = read();
		this.call = read();
		this.asiSafe = read();
		super.deserialize(context);
	}

	get type() {
		return "cjs full require";
	}

	get category() {
		return "commonjs";
	}
}

CommonJsFullRequireDependency.Template = class CommonJsFullRequireDependencyTemplate extends (
	ModuleDependency.Template
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
		{
			module,
			runtimeTemplate,
			moduleGraph,
			chunkGraph,
			runtimeRequirements,
			runtime,
			initFragments
		}
	) {
		const dep = /** @type {CommonJsFullRequireDependency} */ (dependency);
		if (!dep.range) return;
		const importedModule = moduleGraph.getModule(dep);
		let requireExpr = runtimeTemplate.moduleExports({
			module: importedModule,
			chunkGraph,
			request: dep.request,
			weak: dep.weak,
			runtimeRequirements
		});

		const {
			trimmedRange: [trimmedRangeStart, trimmedRangeEnd],
			trimmedIds
		} = getTrimmedIdsAndRange(
			dep.names,
			dep.range,
			dep.idRanges,
			moduleGraph,
			dep
		);

		if (importedModule) {
			const usedImported = moduleGraph
				.getExportsInfo(importedModule)
				.getUsedName(trimmedIds, runtime);
			if (usedImported) {
				const comment = equals(usedImported, trimmedIds)
					? ""
					: `${Template.toNormalComment(propertyAccess(trimmedIds))} `;
				const access = `${comment}${propertyAccess(usedImported)}`;
				requireExpr =
					dep.asiSafe === true
						? `(${requireExpr}${access})`
						: `${requireExpr}${access}`;
			}
		}
		source.replace(trimmedRangeStart, trimmedRangeEnd - 1, requireExpr);
	}
};

makeSerializable(
	CommonJsFullRequireDependency,
	"webpack/lib/dependencies/CommonJsFullRequireDependency"
);

module.exports = CommonJsFullRequireDependency;
