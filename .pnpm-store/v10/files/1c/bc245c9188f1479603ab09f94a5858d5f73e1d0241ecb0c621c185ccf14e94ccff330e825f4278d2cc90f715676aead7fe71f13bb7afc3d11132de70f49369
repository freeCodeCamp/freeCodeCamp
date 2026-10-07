/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra and Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Module = require("../Module");
const { JS_TYPES } = require("../ModuleSourceTypesConstants");
const { WEBPACK_MODULE_TYPE_FALLBACK } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const makeSerializable = require("../util/makeSerializable");
const FallbackItemDependency = require("./FallbackItemDependency");

/** @typedef {import("../../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../ChunkGroup")} ChunkGroup */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("../Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../RequestShortener")} RequestShortener */
/** @typedef {import("../ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */

const RUNTIME_REQUIREMENTS = new Set([RuntimeGlobals.module]);

class FallbackModule extends Module {
	/**
	 * @param {string[]} requests list of requests to choose one
	 */
	constructor(requests) {
		super(WEBPACK_MODULE_TYPE_FALLBACK);
		this.requests = requests;
		this._identifier = `fallback ${this.requests.join(" ")}`;
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return this._identifier;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return this._identifier;
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return `${this.layer ? `(${this.layer})/` : ""}webpack/container/fallback/${
			this.requests[0]
		}/and ${this.requests.length - 1} more`;
	}

	/**
	 * @param {Chunk} chunk the chunk which condition should be checked
	 * @param {Compilation} compilation the compilation
	 * @returns {boolean} true, if the chunk is ok for the module
	 */
	chunkCondition(chunk, { chunkGraph }) {
		return chunkGraph.getNumberOfEntryModules(chunk) > 0;
	}

	/**
	 * @param {NeedBuildContext} context context info
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		callback(null, !this.buildInfo);
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
			strict: true
		};

		this.clearDependenciesAndBlocks();
		for (const request of this.requests)
			this.addDependency(new FallbackItemDependency(request));

		callback();
	}

	/**
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return this.requests.length * 5 + 42;
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JS_TYPES;
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ runtimeTemplate, moduleGraph, chunkGraph }) {
		const ids = this.dependencies.map(dep =>
			chunkGraph.getModuleId(/** @type {Module} */ (moduleGraph.getModule(dep)))
		);
		const code = Template.asString([
			`var ids = ${JSON.stringify(ids)};`,
			"var error, result, i = 0;",
			`var loop = ${runtimeTemplate.basicFunction("next", [
				"while(i < ids.length) {",
				Template.indent([
					`try { next = ${RuntimeGlobals.require}(ids[i++]); } catch(e) { return handleError(e); }`,
					"if(next) return next.then ? next.then(handleResult, handleError) : handleResult(next);"
				]),
				"}",
				"if(error) throw error;"
			])}`,
			`var handleResult = ${runtimeTemplate.basicFunction("result", [
				"if(result) return result;",
				"return loop();"
			])};`,
			`var handleError = ${runtimeTemplate.basicFunction("e", [
				"error = e;",
				"return loop();"
			])};`,
			"module.exports = loop();"
		]);
		const sources = new Map();
		sources.set("javascript", new RawSource(code));
		return { sources, runtimeRequirements: RUNTIME_REQUIREMENTS };
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.requests);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {FallbackModule} deserialized fallback module
	 */
	static deserialize(context) {
		const { read } = context;
		const obj = new FallbackModule(read());
		obj.deserialize(context);
		return obj;
	}
}

makeSerializable(FallbackModule, "webpack/lib/container/FallbackModule");

module.exports = FallbackModule;
