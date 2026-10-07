/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Florent Cailhol @ooflorent
*/

"use strict";

const Dependency = require("../Dependency");
const InitFragment = require("../InitFragment");
const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @param {string[]|null} path the property path array
 * @returns {string} the converted path
 */
const pathToString = path =>
	path !== null && path.length > 0
		? path.map(part => `[${JSON.stringify(part)}]`).join("")
		: "";

class ProvidedDependency extends ModuleDependency {
	/**
	 * @param {string} request request
	 * @param {string} identifier identifier
	 * @param {string[]} ids ids
	 * @param {Range} range range
	 */
	constructor(request, identifier, ids, range) {
		super(request);
		this.identifier = identifier;
		this.ids = ids;
		this.range = range;
		this._hashUpdate = undefined;
	}

	get type() {
		return "provided";
	}

	get category() {
		return "esm";
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		const ids = this.ids;
		if (ids.length === 0) return Dependency.EXPORTS_OBJECT_REFERENCED;
		return [ids];
	}

	/**
	 * Update the hash
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		if (this._hashUpdate === undefined) {
			this._hashUpdate = this.identifier + (this.ids ? this.ids.join(",") : "");
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.identifier);
		write(this.ids);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.identifier = read();
		this.ids = read();
		super.deserialize(context);
	}
}

makeSerializable(
	ProvidedDependency,
	"webpack/lib/dependencies/ProvidedDependency"
);

class ProvidedDependencyTemplate extends ModuleDependency.Template {
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
			runtime,
			runtimeTemplate,
			moduleGraph,
			chunkGraph,
			initFragments,
			runtimeRequirements
		}
	) {
		const dep = /** @type {ProvidedDependency} */ (dependency);
		const connection =
			/** @type {ModuleGraphConnection} */
			(moduleGraph.getConnection(dep));
		const exportsInfo = moduleGraph.getExportsInfo(connection.module);
		const usedName = exportsInfo.getUsedName(dep.ids, runtime);
		initFragments.push(
			new InitFragment(
				`/* provided dependency */ var ${
					dep.identifier
				} = ${runtimeTemplate.moduleExports({
					module: moduleGraph.getModule(dep),
					chunkGraph,
					request: dep.request,
					runtimeRequirements
				})}${pathToString(/** @type {string[]} */ (usedName))};\n`,
				InitFragment.STAGE_PROVIDES,
				1,
				`provided ${dep.identifier}`
			)
		);
		source.replace(dep.range[0], dep.range[1] - 1, dep.identifier);
	}
}

ProvidedDependency.Template = ProvidedDependencyTemplate;

module.exports = ProvidedDependency;
