/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { OriginalSource, RawSource } = require("webpack-sources");
const Module = require("./Module");
const { JS_TYPES } = require("./ModuleSourceTypesConstants");
const { JAVASCRIPT_MODULE_TYPE_DYNAMIC } = require("./ModuleTypeConstants");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Module").ReadOnlyRuntimeRequirements} ReadOnlyRuntimeRequirements */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

class RawModule extends Module {
	/**
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
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JS_TYPES;
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return this.identifierStr;
	}

	/**
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return Math.max(1, this.sourceStr.length);
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return /** @type {string} */ (
			requestShortener.shorten(this.readableIdentifierStr)
		);
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
		this.buildMeta = {};
		this.buildInfo = {
			cacheable: true
		};
		callback();
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration(context) {
		const sources = new Map();
		if (this.useSourceMap || this.useSimpleSourceMap) {
			sources.set(
				"javascript",
				new OriginalSource(this.sourceStr, this.identifier())
			);
		} else {
			sources.set("javascript", new RawSource(this.sourceStr));
		}
		return { sources, runtimeRequirements: this.runtimeRequirements };
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		hash.update(this.sourceStr);
		super.updateHash(hash, context);
	}

	/**
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
