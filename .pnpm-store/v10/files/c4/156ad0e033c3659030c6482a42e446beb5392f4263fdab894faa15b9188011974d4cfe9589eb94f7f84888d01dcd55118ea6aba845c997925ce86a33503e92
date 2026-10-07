/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { OriginalSource, RawSource } = require("webpack-sources");
const Module = require("./Module");
const {
	JAVASCRIPT_TYPE,
	JAVASCRIPT_TYPES
} = require("./ModuleSourceTypeConstants");
const { JAVASCRIPT_MODULE_TYPE_DYNAMIC } = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const DelegatedSourceDependency = require("./dependencies/DelegatedSourceDependency");
const StaticExportsDependency = require("./dependencies/StaticExportsDependency");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptions} DllReferencePluginOptions */
/** @typedef {import("./config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./LibManifestPlugin").ManifestModuleData} ManifestModuleData */
/** @typedef {import("./Module").ModuleId} ModuleId */
/** @typedef {import("./Module").BuildCallback} BuildCallback */
/** @typedef {import("./Module").BuildMeta} BuildMeta */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("./Module").LibIdent} LibIdent */
/** @typedef {import("./Module").NeedBuildCallback} NeedBuildCallback */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Module").Sources} Sources */
/** @typedef {import("./Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./dependencies/StaticExportsDependency").Exports} Exports */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

/** @typedef {string} DelegatedModuleSourceRequest */

/** @typedef {NonNullable<DllReferencePluginOptions["type"]>} DelegatedModuleType */

/**
 * Defines the delegated module data type used by this module.
 * @typedef {object} DelegatedModuleData
 * @property {BuildMeta=} buildMeta build meta
 * @property {Exports=} exports exports
 * @property {ModuleId} id module id
 */

const RUNTIME_REQUIREMENTS = new Set([
	RuntimeGlobals.module,
	RuntimeGlobals.require
]);

class DelegatedModule extends Module {
	/**
	 * Creates an instance of DelegatedModule.
	 * @param {DelegatedModuleSourceRequest} sourceRequest source request
	 * @param {DelegatedModuleData} data data
	 * @param {DelegatedModuleType} type type
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
		this.delegateData = data;

		// Build info
		/** @type {undefined | DelegatedSourceDependency} */
		this.delegatedSourceDependency = undefined;
	}

	/**
	 * Returns the source types this module can generate.
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JAVASCRIPT_TYPES;
	}

	/**
	 * Gets the library identifier.
	 * @param {LibIdentOptions} options options
	 * @returns {LibIdent | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return typeof this.originalRequest === "string"
			? this.originalRequest
			: this.originalRequest.libIdent(options);
	}

	/**
	 * Returns the unique identifier used to reference this module.
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return `delegated ${JSON.stringify(this.request)} from ${
			this.sourceRequest
		}`;
	}

	/**
	 * Returns a human-readable identifier for this module.
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `delegated ${this.userRequest} from ${this.sourceRequest}`;
	}

	/**
	 * Checks whether the module needs to be rebuilt for the current build state.
	 * @param {NeedBuildContext} context context info
	 * @param {NeedBuildCallback} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		return callback(null, !this.buildMeta);
	}

	/**
	 * Builds the module using the provided compilation context.
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {ResolverWithOptions} resolver the resolver
	 * @param {InputFileSystem} fs the file system
	 * @param {BuildCallback} callback callback function
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
	 * Generates code and runtime requirements for this module.
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ runtimeTemplate, moduleGraph, chunkGraph }) {
		const dep = /** @type {DelegatedSourceDependency} */ (this.dependencies[0]);
		const sourceModule = moduleGraph.getModule(dep);
		/** @type {string} */
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
				/** @type {RuntimeRequirements} */
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

		/** @type {Sources} */
		const sources = new Map();
		if (this.useSourceMap || this.useSimpleSourceMap) {
			sources.set(JAVASCRIPT_TYPE, new OriginalSource(str, this.identifier()));
		} else {
			sources.set(JAVASCRIPT_TYPE, new RawSource(str));
		}

		return {
			sources,
			runtimeRequirements: RUNTIME_REQUIREMENTS
		};
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return 42;
	}

	/**
	 * Updates the hash with the data contributed by this instance.
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
	 * Serializes this instance into the provided serializer context.
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
	 * Restores this instance from the provided deserializer context.
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
		this.delegateData =
			/** @type {EXPECTED_ANY} */
			(undefined);
	}
}

makeSerializable(DelegatedModule, "webpack/lib/DelegatedModule");

module.exports = DelegatedModule;
