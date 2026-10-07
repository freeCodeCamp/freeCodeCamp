/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RawDataUrlModule = require("../asset/RawDataUrlModule");
const {
	getDependencyUsedByExportsCondition
} = require("../optimize/InnerGraph");
const makeSerializable = require("../util/makeSerializable");
const memoize = require("../util/memoize");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").GetConditionFn} GetConditionFn */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

const getIgnoredRawDataUrlModule = memoize(
	() => new RawDataUrlModule("data:,", "ignored-asset", "(ignored asset)")
);

class URLDependency extends ModuleDependency {
	/**
	 * @param {string} request request
	 * @param {Range} range range of the arguments of new URL( |> ... <| )
	 * @param {Range} outerRange range of the full |> new URL(...) <|
	 * @param {boolean=} relative use relative urls instead of absolute with base uri
	 */
	constructor(request, range, outerRange, relative) {
		super(request);
		this.range = range;
		this.outerRange = outerRange;
		this.relative = relative || false;
		/** @type {Set<string> | boolean | undefined} */
		this.usedByExports = undefined;
	}

	get type() {
		return "new URL()";
	}

	get category() {
		return "url";
	}

	/**
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {null | false | GetConditionFn} function to determine if the connection is active
	 */
	getCondition(moduleGraph) {
		return getDependencyUsedByExportsCondition(
			this,
			this.usedByExports,
			moduleGraph
		);
	}

	/**
	 * @param {string} context context directory
	 * @returns {Module | null} a module
	 */
	createIgnoredModule(context) {
		return getIgnoredRawDataUrlModule();
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.outerRange);
		write(this.relative);
		write(this.usedByExports);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.outerRange = read();
		this.relative = read();
		this.usedByExports = read();
		super.deserialize(context);
	}
}

URLDependency.Template = class URLDependencyTemplate extends (
	ModuleDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const {
			chunkGraph,
			moduleGraph,
			runtimeRequirements,
			runtimeTemplate,
			runtime
		} = templateContext;
		const dep = /** @type {URLDependency} */ (dependency);
		const connection = moduleGraph.getConnection(dep);
		// Skip rendering depending when dependency is conditional
		if (connection && !connection.isTargetActive(runtime)) {
			source.replace(
				dep.outerRange[0],
				dep.outerRange[1] - 1,
				"/* unused asset import */ undefined"
			);
			return;
		}

		runtimeRequirements.add(RuntimeGlobals.require);

		if (dep.relative) {
			runtimeRequirements.add(RuntimeGlobals.relativeUrl);
			source.replace(
				dep.outerRange[0],
				dep.outerRange[1] - 1,
				`/* asset import */ new ${
					RuntimeGlobals.relativeUrl
				}(${runtimeTemplate.moduleRaw({
					chunkGraph,
					module: moduleGraph.getModule(dep),
					request: dep.request,
					runtimeRequirements,
					weak: false
				})})`
			);
		} else {
			runtimeRequirements.add(RuntimeGlobals.baseURI);

			source.replace(
				dep.range[0],
				dep.range[1] - 1,
				`/* asset import */ ${runtimeTemplate.moduleRaw({
					chunkGraph,
					module: moduleGraph.getModule(dep),
					request: dep.request,
					runtimeRequirements,
					weak: false
				})}, ${RuntimeGlobals.baseURI}`
			);
		}
	}
};

makeSerializable(URLDependency, "webpack/lib/dependencies/URLDependency");

module.exports = URLDependency;
