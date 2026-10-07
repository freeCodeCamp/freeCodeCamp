/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { OriginalSource, RawSource } = require("webpack-sources");
const Module = require("./Module");
const { JS_TYPES } = require("./ModuleSourceTypesConstants");
const { JAVASCRIPT_MODULE_TYPE_DYNAMIC } = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const DelegatedSourceDependency = require("./dependencies/DelegatedSourceDependency");
const StaticExportsDependency = require("./dependencies/StaticExportsDependency");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./LibManifestPlugin").ManifestModuleData} ManifestModuleData */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Module").SourceContext} SourceContext */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./dependencies/ModuleDependency")} ModuleDependency */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

/** @typedef {string} SourceRequest */
/** @typedef {"require" | "object"} Type */
/** @typedef {TODO} Data */

const RUNTIME_REQUIREMENTS = new Set([
	RuntimeGlobals.module,
	RuntimeGlobals.require
]);

class DelegatedModule extends Module {
	/**
	 * @param {SourceRequest} sourceRequest source request
	 * @param {Data} data data
	 * @param {Type} type type
	 * @param {string} userRequest user request
	 * @param {string | Module} originalRequest original request
	 */
	constructor(sourceRequest, data, type, userRequest, originalRequest) {
		super(JAVASCRIPT_MODULE_TYPE_DYNAMIC, null);

		// Info from Factory
		this.sourceRequest = sourceRequest;
		this.request = data.id;
		this.delegationType = type;
		this.userRequest = userRequest;
		this.originalRequest = originalRequest;
		/** @type {ManifestModuleData | undefined} */
		this.delegateData = data;

		// Build info
		this.delegatedSourceDependency = undefined;
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JS_TYPES;
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return typeof this.originalRequest === "string"
			? this.originalRequest
			: this.originalRequest.libIdent(options);
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return `delegated ${JSON.stringify(this.request)} from ${
			this.sourceRequest
		}`;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `delegated ${this.userRequest} from ${this.sourceRequest}`;
	}

	/**
	 * @param {NeedBuildContext} context context info
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		return callback(null, !this.buildMeta);
	}

	/**
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {ResolverWithOptions} resolver the resolver
	 * @param {InputFileSystem} fs the file system
	 * @param {function(WebpackError=): void} callback callback function
	 * @returns {void}
	 */
	build(options, compilation, resolver, fs, callback) {
		const delegateData = /** @type {ManifestModuleData} */ (this.delegateData);
		this.buildMeta = { ...delegateData.buildMeta };
		this.buildInfo = {};
		this.dependencies.length = 0;
		this.delegatedSourceDependency = new DelegatedSourceDependency(
			this.sourceRequest
		);
		this.addDependency(this.delegatedSourceDependency);
		this.addDependency(
			new StaticExportsDependency(delegateData.exports || true, false)
		);
		callback();
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ runtimeTemplate, moduleGraph, chunkGraph }) {
		const dep = /** @type {DelegatedSourceDependency} */ (this.dependencies[0]);
		const sourceModule = moduleGraph.getModule(dep);
		let str;

		if (!sourceModule) {
			str = runtimeTemplate.throwMissingModuleErrorBlock({
				request: this.sourceRequest
			});
		} else {
			str = `module.exports = (${runtimeTemplate.moduleExports({
				module: sourceModule,
				chunkGraph,
				request: dep.request,
				runtimeRequirements: new Set()
			})})`;

			switch (this.delegationType) {
				case "require":
					str += `(${JSON.stringify(this.request)})`;
					break;
				case "object":
					str += `[${JSON.stringify(this.request)}]`;
					break;
			}

			str += ";";
		}

		const sources = new Map();
		if (this.useSourceMap || this.useSimpleSourceMap) {
			sources.set("javascript", new OriginalSource(str, this.identifier()));
		} else {
			sources.set("javascript", new RawSource(str));
		}

		return {
			sources,
			runtimeRequirements: RUNTIME_REQUIREMENTS
		};
	}

	/**
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return 42;
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		hash.update(this.delegationType);
		hash.update(JSON.stringify(this.request));
		super.updateHash(hash, context);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		// constructor
		write(this.sourceRequest);
		write(this.delegateData);
		write(this.delegationType);
		write(this.userRequest);
		write(this.originalRequest);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context\
	 * @returns {DelegatedModule} DelegatedModule
	 */
	static deserialize(context) {
		const { read } = context;
		const obj = new DelegatedModule(
			read(), // sourceRequest
			read(), // delegateData
			read(), // delegationType
			read(), // userRequest
			read() // originalRequest
		);
		obj.deserialize(context);
		return obj;
	}

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 * @param {Module} module fresh module
	 * @returns {void}
	 */
	updateCacheModule(module) {
		super.updateCacheModule(module);
		const m = /** @type {DelegatedModule} */ (module);
		this.delegationType = m.delegationType;
		this.userRequest = m.userRequest;
		this.originalRequest = m.originalRequest;
		this.delegateData = m.delegateData;
	}

	/**
	 * Assuming this module is in the cache. Remove internal references to allow freeing some memory.
	 */
	cleanupForCache() {
		super.cleanupForCache();
		this.delegateData = undefined;
	}
}

makeSerializable(DelegatedModule, "webpack/lib/DelegatedModule");

module.exports = DelegatedModule;
