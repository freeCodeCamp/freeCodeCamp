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
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./Module").BuildCallback} BuildCallback */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").NeedBuildCallback} NeedBuildCallback */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */
/** @typedef {import("./Module").Sources} Sources */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

class RawModule extends Module {
	/**
	 * Creates an instance of RawModule.
	 * @param {string} source source code
	 * @param {string} identifier unique identifier
	 * @param {string=} readableIdentifier readable identifier
	 * @param {ReadOnlyRuntimeRequirements=} runtimeRequirements runtime requirements needed for the source code
	 */
	constructor(source, identifier, readableIdentifier, runtimeRequirements) {
		super(JAVASCRIPT_MODULE_TYPE_DYNAMIC, null);
		this.sourceStr = source;
		this.identifierStr = identifier || this.sourceStr;
		this.readableIdentifierStr = readableIdentifier || this.identifierStr;
		this.runtimeRequirements = runtimeRequirements || null;
	}

	/**
	 * Returns the source types this module can generate.
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JAVASCRIPT_TYPES;
	}

	/**
	 * Returns the unique identifier used to reference this module.
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return this.identifierStr;
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return Math.max(1, this.sourceStr.length);
	}

	/**
	 * Returns a human-readable identifier for this module.
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return /** @type {string} */ (
			requestShortener.shorten(this.readableIdentifierStr)
		);
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
		this.buildMeta = {};
		this.buildInfo = {
			cacheable: true
		};
		callback();
	}

	/**
	 * Gets side effects connection state.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this module should be connected to referencing modules when consumed for side-effects only
	 */
	getSideEffectsConnectionState(moduleGraph) {
		if (this.factoryMeta !== undefined) {
			if (this.factoryMeta.sideEffectFree) return false;
			if (this.factoryMeta.sideEffectFree === false) return true;
		}
		return true;
	}

	/**
	 * Generates code and runtime requirements for this module.
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration(context) {
		/** @type {Sources} */
		const sources = new Map();
		if (this.useSourceMap || this.useSimpleSourceMap) {
			sources.set(
				JAVASCRIPT_TYPE,
				new OriginalSource(this.sourceStr, this.identifier())
			);
		} else {
			sources.set(JAVASCRIPT_TYPE, new RawSource(this.sourceStr));
		}
		return { sources, runtimeRequirements: this.runtimeRequirements };
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		hash.update(this.sourceStr);
		super.updateHash(hash, context);
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.sourceStr);
		write(this.identifierStr);
		write(this.readableIdentifierStr);
		write(this.runtimeRequirements);

		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.sourceStr = read();
		this.identifierStr = read();
		this.readableIdentifierStr = read();
		this.runtimeRequirements = read();

		super.deserialize(context);
	}
}

makeSerializable(RawModule, "webpack/lib/RawModule");

module.exports = RawModule;
