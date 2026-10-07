/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra and Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Module = require("../Module");
const {
	JAVASCRIPT_TYPES,
	REMOTE_AND_SHARE_INIT_TYPES
} = require("../ModuleSourceTypeConstants");
const { WEBPACK_MODULE_TYPE_REMOTE } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const FallbackDependency = require("./FallbackDependency");
const RemoteToExternalDependency = require("./RemoteToExternalDependency");

/** @typedef {import("../config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Module").BuildCallback} BuildCallback */
/** @typedef {import("../Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("../Module").CodeGenerationResultData} CodeGenerationResultData */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("../Module").LibIdent} LibIdent */
/** @typedef {import("../Module").NameForCondition} NameForCondition */
/** @typedef {import("../Module").NeedBuildCallback} NeedBuildCallback */
/** @typedef {import("../Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("../Module").Sources} Sources */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../Module").ExportsType} ExportsType */
/** @typedef {import("../RequestShortener")} RequestShortener */
/** @typedef {import("../ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("../Module").BasicSourceTypes} BasicSourceTypes */

const RUNTIME_REQUIREMENTS = new Set([RuntimeGlobals.module]);

/** @typedef {string[]} ExternalRequests */

class RemoteModule extends Module {
	/**
	 * Creates an instance of RemoteModule.
	 * @param {string} request request string
	 * @param {ExternalRequests} externalRequests list of external requests to containers
	 * @param {string} internalRequest name of exposed module in container
	 * @param {string} shareScope the used share scope name
	 */
	constructor(request, externalRequests, internalRequest, shareScope) {
		super(WEBPACK_MODULE_TYPE_REMOTE);
		/** @type {string} */
		this.request = request;
		/** @type {ExternalRequests} */
		this.externalRequests = externalRequests;
		/** @type {string} */
		this.internalRequest = internalRequest;
		/** @type {string} */
		this.shareScope = shareScope;
		/** @type {string} */
		this._identifier = `remote (${shareScope}) ${this.externalRequests.join(
			" "
		)} ${this.internalRequest}`;
	}

	/**
	 * Returns the unique identifier used to reference this module.
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		return this._identifier;
	}

	/**
	 * Returns a human-readable identifier for this module.
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		return `remote ${this.request}`;
	}

	/**
	 * Gets the library identifier.
	 * @param {LibIdentOptions} options options
	 * @returns {LibIdent | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return `${this.layer ? `(${this.layer})/` : ""}webpack/container/remote/${
			this.request
		}`;
	}

	/**
	 * Checks whether the module needs to be rebuilt for the current build state.
	 * @param {NeedBuildContext} context context info
	 * @param {NeedBuildCallback} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		callback(null, !this.buildInfo);
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
			strict: true
		};

		this.clearDependenciesAndBlocks();
		if (this.externalRequests.length === 1) {
			this.addDependency(
				new RemoteToExternalDependency(this.externalRequests[0])
			);
		} else {
			this.addDependency(new FallbackDependency(this.externalRequests));
		}

		callback();
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return 6;
	}

	/**
	 * Returns the source types this module can generate.
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return REMOTE_AND_SHARE_INIT_TYPES;
	}

	/**
	 * Basic source types are high-level categories like javascript, css, webassembly, etc.
	 * We only have built-in knowledge about the javascript basic type here; other basic types may be
	 * added or changed over time by generators and do not need to be handled or detected here.
	 *
	 * Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
	 * from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.
	 * @returns {BasicSourceTypes} types available (do not mutate)
	 */
	getSourceBasicTypes() {
		return JAVASCRIPT_TYPES;
	}

	/**
	 * Returns export type.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {boolean | undefined} strict the importing module is strict
	 * @returns {ExportsType} export type
	 * "namespace": Exports is already a namespace object. namespace = exports.
	 * "dynamic": Check at runtime if __esModule is set. When set: namespace = { ...exports, default: exports }. When not set: namespace = { default: exports }.
	 * "default-only": Provide a namespace object with only default export. namespace = { default: exports }
	 * "default-with-named": Provide a namespace object with named and default export. namespace = { ...exports, default: exports }
	 */
	getExportsType(moduleGraph, strict) {
		return "dynamic";
	}

	/**
	 * Returns the path used when matching this module against rule conditions.
	 * @returns {NameForCondition | null} absolute path which should be used for condition matching (usually the resource path)
	 */
	nameForCondition() {
		return this.request;
	}

	/**
	 * Generates code and runtime requirements for this module.
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ moduleGraph, chunkGraph }) {
		const module = moduleGraph.getModule(this.dependencies[0]);
		const id = module && chunkGraph.getModuleId(module);
		/** @type {Sources} */
		const sources = new Map();
		sources.set("remote", new RawSource(""));
		/** @type {CodeGenerationResultData} */
		const data = new Map();
		data.set("share-init", [
			{
				shareScope: this.shareScope,
				initStage: 20,
				init: id === undefined ? "" : `initExternal(${JSON.stringify(id)});`
			}
		]);
		return { sources, data, runtimeRequirements: RUNTIME_REQUIREMENTS };
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.request);
		write(this.externalRequests);
		write(this.internalRequest);
		write(this.shareScope);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 * @returns {RemoteModule} deserialized module
	 */
	static deserialize(context) {
		const { read } = context;
		const obj = new RemoteModule(read(), read(), read(), read());
		obj.deserialize(context);
		return obj;
	}
}

makeSerializable(RemoteModule, "webpack/lib/container/RemoteModule");

module.exports = RemoteModule;
