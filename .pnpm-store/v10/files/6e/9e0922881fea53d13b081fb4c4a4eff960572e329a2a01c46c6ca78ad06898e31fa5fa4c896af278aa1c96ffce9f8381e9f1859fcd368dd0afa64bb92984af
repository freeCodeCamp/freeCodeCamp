/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const AsyncDependenciesBlock = require("../AsyncDependenciesBlock");
const Module = require("../Module");
const { CONSUME_SHARED_TYPES } = require("../ModuleSourceTypesConstants");
const {
	WEBPACK_MODULE_TYPE_CONSUME_SHARED_MODULE
} = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const { rangeToString, stringifyHoley } = require("../util/semver");
const ConsumeSharedFallbackDependency = require("./ConsumeSharedFallbackDependency");

/** @typedef {import("../../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../ChunkGroup")} ChunkGroup */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
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
/** @typedef {import("../util/semver").SemVerRange} SemVerRange */

/**
 * @typedef {object} ConsumeOptions
 * @property {string=} import fallback request
 * @property {string=} importResolved resolved fallback request
 * @property {string} shareKey global share key
 * @property {string} shareScope share scope
 * @property {SemVerRange | false | undefined} requiredVersion version requirement
 * @property {string=} packageName package name to determine required version automatically
 * @property {boolean} strictVersion don't use shared version even if version isn't valid
 * @property {boolean} singleton use single global version
 * @property {boolean} eager include the fallback module in a sync way
 */

class ConsumeSharedModule extends Module {
	/**
	 * @param {string} context context
	 * @param {ConsumeOptions} options consume options
	 */
	constructor(context, options) {
		super(WEBPACK_MODULE_TYPE_CONSUME_SHARED_MODULE, context);
		this.options = options;
	}

	/**
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		const {
			shareKey,
			shareScope,
			importResolved,
			requiredVersion,
			strictVersion,
			singleton,
			eager
		} = this.options;
		return `${WEBPACK_MODULE_TYPE_CONSUME_SHARED_MODULE}|${shareScope}|${shareKey}|${
			requiredVersion && rangeToString(requiredVersion)
		}|${strictVersion}|${importResolved}|${singleton}|${eager}`;
	}

	/**
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		const {
			shareKey,
			shareScope,
			importResolved,
			requiredVersion,
			strictVersion,
			singleton,
			eager
		} = this.options;
		return `consume shared module (${shareScope}) ${shareKey}@${
			requiredVersion ? rangeToString(requiredVersion) : "*"
		}${strictVersion ? " (strict)" : ""}${singleton ? " (singleton)" : ""}${
			importResolved
				? ` (fallback: ${requestShortener.shorten(importResolved)})`
				: ""
		}${eager ? " (eager)" : ""}`;
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		const { shareKey, shareScope, import: request } = this.options;
		return `${
			this.layer ? `(${this.layer})/` : ""
		}webpack/sharing/consume/${shareScope}/${shareKey}${
			request ? `/${request}` : ""
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
		this.buildInfo = {};
		if (this.options.import) {
			const dep = new ConsumeSharedFallbackDependency(this.options.import);
			if (this.options.eager) {
				this.addDependency(dep);
			} else {
				const block = new AsyncDependenciesBlock({});
				block.addDependency(dep);
				this.addBlock(block);
			}
		}
		callback();
	}

	/**
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return CONSUME_SHARED_TYPES;
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
		hash.update(JSON.stringify(this.options));
		super.updateHash(hash, context);
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ chunkGraph, moduleGraph, runtimeTemplate }) {
		const runtimeRequirements = new Set([RuntimeGlobals.shareScopeMap]);
		const {
			shareScope,
			shareKey,
			strictVersion,
			requiredVersion,
			import: request,
			singleton,
			eager
		} = this.options;
		let fallbackCode;
		if (request) {
			if (eager) {
				const dep = this.dependencies[0];
				fallbackCode = runtimeTemplate.syncModuleFactory({
					dependency: dep,
					chunkGraph,
					runtimeRequirements,
					request: this.options.import
				});
			} else {
				const block = this.blocks[0];
				fallbackCode = runtimeTemplate.asyncModuleFactory({
					block,
					chunkGraph,
					runtimeRequirements,
					request: this.options.import
				});
			}
		}

		const args = [
			JSON.stringify(shareScope),
			JSON.stringify(shareKey),
			JSON.stringify(eager)
		];
		if (requiredVersion) {
			args.push(stringifyHoley(requiredVersion));
		}
		if (fallbackCode) {
			args.push(fallbackCode);
		}

		let fn;

		if (requiredVersion) {
			if (strictVersion) {
				fn = singleton ? "loadStrictSingletonVersion" : "loadStrictVersion";
			} else {
				fn = singleton ? "loadSingletonVersion" : "loadVersion";
			}
		} else {
			fn = singleton ? "loadSingleton" : "load";
		}

		const code = runtimeTemplate.returningFunction(`${fn}(${args.join(", ")})`);
		const sources = new Map();
		sources.set("consume-shared", new RawSource(code));
		return {
			runtimeRequirements,
			sources
		};
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.options);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.options = read();
		super.deserialize(context);
	}
}

makeSerializable(
	ConsumeSharedModule,
	"webpack/lib/sharing/ConsumeSharedModule"
);

module.exports = ConsumeSharedModule;
