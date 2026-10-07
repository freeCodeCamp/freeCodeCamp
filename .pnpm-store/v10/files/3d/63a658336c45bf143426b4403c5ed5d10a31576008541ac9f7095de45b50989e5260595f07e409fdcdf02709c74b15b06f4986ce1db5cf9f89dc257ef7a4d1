/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Module = require("../Module");
const { JS_TYPES } = require("../ModuleSourceTypesConstants");
const { ASSET_MODULE_TYPE_RAW_DATA_URL } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("../../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../RequestShortener")} RequestShortener */
/** @typedef {import("../ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */

class RawDataUrlModule extends Module {
	/**
	 * @param {string} url raw url
	 * @param {string} identifier unique identifier
	 * @param {string=} readableIdentifier readable identifier
	 */
	constructor(url, identifier, readableIdentifier) {
		super(ASSET_MODULE_TYPE_RAW_DATA_URL, null);
		this.url = url;
		this.urlBuffer = url ? Buffer.from(url) : undefined;
		this.identifierStr = identifier || this.url;
		this.readableIdentifierStr = readableIdentifier || this.identifierStr;
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
		if (this.url === undefined)
			this.url = /** @type {Buffer} */ (this.urlBuffer).toString();
		return Math.max(1, this.url.length);
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
		if (this.url === undefined)
			this.url = /** @type {Buffer} */ (this.urlBuffer).toString();
		const sources = new Map();
		sources.set(
			"javascript",
			new RawSource(`module.exports = ${JSON.stringify(this.url)};`)
		);
		const data = new Map();
		data.set("url", {
			javascript: this.url
		});
		const runtimeRequirements = new Set();
		runtimeRequirements.add(RuntimeGlobals.module);
		return { sources, runtimeRequirements, data };
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, context) {
		hash.update(/** @type {Buffer} */ (this.urlBuffer));
		super.updateHash(hash, context);
	}

	/**
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
