/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Module = require("../Module");
const {
	JAVASCRIPT_TYPE,
	JAVASCRIPT_TYPES
} = require("../ModuleSourceTypeConstants");
const { ASSET_MODULE_TYPE_RAW_DATA_URL } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("../config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../Module").BuildCallback} BuildCallback */
/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("../Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../Module").CodeGenerationResultData} CodeGenerationResultData */
/** @typedef {import("../Module").NeedBuildCallback} NeedBuildCallback */
/** @typedef {import("../Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("../Module").Sources} Sources */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../RequestShortener")} RequestShortener */
/** @typedef {import("../ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */

class RawDataUrlModule extends Module {
	/**
	 * Creates an instance of RawDataUrlModule.
	 * @param {string} url raw url
	 * @param {string} identifier unique identifier
	 * @param {string=} readableIdentifier readable identifier
	 */
	constructor(url, identifier, readableIdentifier) {
		super(ASSET_MODULE_TYPE_RAW_DATA_URL, null);
		/** @type {string} */
		this.url = url;
		/** @type {Buffer | undefined} */
		this.urlBuffer = url ? Buffer.from(url) : undefined;
		/** @type {string} */
		this.identifierStr = identifier;
		/** @type {string} */
		this.readableIdentifierStr = readableIdentifier || this.identifierStr;
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
		if (this.url === undefined) {
			this.url = /** @type {Buffer} */ (this.urlBuffer).toString();
		}
		return Math.max(1, this.url.length);
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
	 * Generates code and runtime requirements for this module.
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration(context) {
		if (this.url === undefined) {
			this.url = /** @type {Buffer} */ (this.urlBuffer).toString();
		}
		/** @type {Sources} */
		const sources = new Map();
		sources.set(
			JAVASCRIPT_TYPE,
			new RawSource(`module.exports = ${JSON.stringify(this.url)};`)
		);
		/** @type {CodeGenerationResultData} */
		const data = new Map();
		data.set("url", {
			javascript: this.url
		});
		/** @type {RuntimeRequirements} */
		const runtimeRequirements = new Set();
		runtimeRequirements.add(RuntimeGlobals.module);
		return { sources, runtimeRequirements, data };
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		hash.update(/** @type {Buffer} */ (this.urlBuffer));
		super.updateHash(hash, context);
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.urlBuffer);
		write(this.identifierStr);
		write(this.readableIdentifierStr);

		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.urlBuffer = read();
		this.identifierStr = read();
		this.readableIdentifierStr = read();

		super.deserialize(context);
	}
}

makeSerializable(RawDataUrlModule, "webpack/lib/asset/RawDataUrlModule");

module.exports = RawDataUrlModule;
