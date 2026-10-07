/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Module = require("./Module");
const { JS_TYPES } = require("./ModuleSourceTypesConstants");
const { JAVASCRIPT_MODULE_TYPE_DYNAMIC } = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Module").SourceContext} SourceContext */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

const RUNTIME_REQUIREMENTS = new Set([
	RuntimeGlobals.require,
	RuntimeGlobals.module
]);

class DllModule extends Module {
	/**
	 * @param {string} context context path
	 * @param {Dependency[]} dependencies dependencies
	 * @param {string} name name
	 */
	constructor(context, dependencies, name) {
		super(JAVASCRIPT_MODULE_TYPE_DYNAMIC, context);

		// Info from Factory
		/** @type {Dependency[]} */
		this.dependencies = dependencies;
		this.name = name;
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JS_TYPES;
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return `dll ${this.name}`;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `dll ${this.name}`;
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
		this.buildMeta = {};
		this.buildInfo = {};
		return callback();
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration(context) {
		const sources = new Map();
		sources.set(
			"javascript",
			new RawSource(`module.exports = ${RuntimeGlobals.require};`)
		);
		return {
			sources,
			runtimeRequirements: RUNTIME_REQUIREMENTS
		};
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
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return 12;
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		hash.update(`dll module${this.name || ""}`);
		super.updateHash(hash, context);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		context.write(this.name);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		this.name = context.read();
		super.deserialize(context);
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
		this.dependencies = module.dependencies;
	}

	/**
	 * Assuming this module is in the cache. Remove internal references to allow freeing some memory.
	 */
	cleanupForCache() {
		super.cleanupForCache();
		this.dependencies = /** @type {EXPECTED_ANY} */ (undefined);
	}
}

makeSerializable(DllModule, "webpack/lib/DllModule");

module.exports = DllModule;
