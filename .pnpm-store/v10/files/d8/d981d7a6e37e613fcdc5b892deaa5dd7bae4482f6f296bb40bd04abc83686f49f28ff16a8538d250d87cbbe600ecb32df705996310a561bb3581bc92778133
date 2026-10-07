/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra and Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Module = require("../Module");
const {
	REMOTE_AND_SHARE_INIT_TYPES
} = require("../ModuleSourceTypesConstants");
const { WEBPACK_MODULE_TYPE_REMOTE } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const FallbackDependency = require("./FallbackDependency");
const RemoteToExternalDependency = require("./RemoteToExternalDependency");

/** @typedef {import("../../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
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

class RemoteModule extends Module {
	/**
	 * @param {string} request request string
	 * @param {string[]} externalRequests list of external requests to containers
	 * @param {string} internalRequest name of exposed module in container
	 * @param {string} shareScope the used share scope name
	 */
	constructor(request, externalRequests, internalRequest, shareScope) {
		super(WEBPACK_MODULE_TYPE_REMOTE);
		this.request = request;
		this.externalRequests = externalRequests;
		this.internalRequest = internalRequest;
		this.shareScope = shareScope;
		this._identifier = `remote (${shareScope}) ${this.externalRequests.join(
			" "
		)} ${this.internalRequest}`;
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
		return `remote ${this.request}`;
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return `${this.layer ? `(${this.layer})/` : ""}webpack/container/remote/${
			this.request
		}`;
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
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		return 6;
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return REMOTE_AND_SHARE_INIT_TYPES;
	}

	/**
	 * @returns {string | null} absolute path which should be used for condition matching (usually the resource path)
	 */
	nameForCondition() {
		return this.request;
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ runtimeTemplate, moduleGraph, chunkGraph }) {
		const module = moduleGraph.getModule(this.dependencies[0]);
		const id = module && chunkGraph.getModuleId(module);
		const sources = new Map();
		sources.set("remote", new RawSource(""));
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
