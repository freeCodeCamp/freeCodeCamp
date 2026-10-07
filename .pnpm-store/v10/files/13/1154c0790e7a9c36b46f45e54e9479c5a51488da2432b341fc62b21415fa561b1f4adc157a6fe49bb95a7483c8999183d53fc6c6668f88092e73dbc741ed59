/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const Dependency = require("../Dependency");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../AsyncDependenciesBlock")} AsyncDependenciesBlock */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Entrypoint")} Entrypoint */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class WorkerDependency extends ModuleDependency {
	/**
	 * @param {string} request request
	 * @param {Range} range range
	 * @param {object} workerDependencyOptions options
	 * @param {string=} workerDependencyOptions.publicPath public path for the worker
	 */
	constructor(request, range, workerDependencyOptions) {
		super(request);
		this.range = range;
		// If options are updated, don't forget to update the hash and serialization functions
		this.options = workerDependencyOptions;
		/** Cache the hash */
		this._hashUpdate = undefined;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return Dependency.NO_EXPORTS_REFERENCED;
	}

	get type() {
		return "new Worker()";
	}

	get category() {
		return "worker";
	}

	/**
	 * Update the hash
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		if (this._hashUpdate === undefined) {
			this._hashUpdate = JSON.stringify(this.options);
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.options);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.options = read();
		super.deserialize(context);
	}
}

WorkerDependency.Template = class WorkerDependencyTemplate extends (
	ModuleDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const { chunkGraph, moduleGraph, runtimeRequirements } = templateContext;
		const dep = /** @type {WorkerDependency} */ (dependency);
		const block = /** @type {AsyncDependenciesBlock} */ (
			moduleGraph.getParentBlock(dependency)
		);
		const entrypoint = /** @type {Entrypoint} */ (
			chunkGraph.getBlockChunkGroup(block)
		);
		const chunk = entrypoint.getEntrypointChunk();
		// We use the workerPublicPath option if provided, else we fallback to the RuntimeGlobal publicPath
		const workerImportBaseUrl = dep.options.publicPath
			? `"${dep.options.publicPath}"`
			: RuntimeGlobals.publicPath;

		runtimeRequirements.add(RuntimeGlobals.publicPath);
		runtimeRequirements.add(RuntimeGlobals.baseURI);
		runtimeRequirements.add(RuntimeGlobals.getChunkScriptFilename);

		source.replace(
			dep.range[0],
			dep.range[1] - 1,
			`/* worker import */ ${workerImportBaseUrl} + ${
				RuntimeGlobals.getChunkScriptFilename
			}(${JSON.stringify(chunk.id)}), ${RuntimeGlobals.baseURI}`
		);
	}
};

makeSerializable(WorkerDependency, "webpack/lib/dependencies/WorkerDependency");

module.exports = WorkerDependency;
