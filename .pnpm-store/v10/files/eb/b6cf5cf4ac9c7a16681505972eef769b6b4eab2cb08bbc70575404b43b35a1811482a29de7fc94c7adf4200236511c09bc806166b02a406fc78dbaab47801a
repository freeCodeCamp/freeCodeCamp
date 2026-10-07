/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const AsyncDependenciesBlock = require("../AsyncDependenciesBlock");
const Module = require("../Module");
const {
	CONSUME_SHARED_TYPES,
	JAVASCRIPT_TYPES
} = require("../ModuleSourceTypeConstants");
const {
	WEBPACK_MODULE_TYPE_CONSUME_SHARED_MODULE
} = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const { rangeToString, stringifyHoley } = require("../util/semver");
const ConsumeSharedFallbackDependency = require("./ConsumeSharedFallbackDependency");

/** @type {WeakMap<ModuleGraph, WeakMap<ConsumeSharedModule, Module | null>>} */
const fallbackModuleCache = new WeakMap();

/** @typedef {import("../config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../Module").BuildCallback} BuildCallback */
/** @typedef {import("../Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("../Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("../Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("../Module").LibIdent} LibIdent */
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
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("../util/semver").SemVerRange} SemVerRange */
/** @typedef {import("../Module").BasicSourceTypes} BasicSourceTypes */

/**
 * Represents the consume shared module runtime component.
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
	 * Creates an instance of ConsumeSharedModule.
	 * @param {string} context context
	 * @param {ConsumeOptions} options consume options
	 */
	constructor(context, options) {
		super(WEBPACK_MODULE_TYPE_CONSUME_SHARED_MODULE, context);
		this.options = options;
	}

	/**
	 * Returns the unique identifier used to reference this module.
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
	 * Returns a human-readable identifier for this module.
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
	 * Gets the library identifier.
	 * @param {LibIdentOptions} options options
	 * @returns {LibIdent | null} an identifier for library inclusion
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
	 * Returns the source types this module can generate.
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return CONSUME_SHARED_TYPES;
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
	 * Get fallback module.
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {Module | null} fallback module
	 */
	_getFallbackModule(moduleGraph) {
		let moduleCache = fallbackModuleCache.get(moduleGraph);
		if (!moduleCache) {
			moduleCache = new WeakMap();
			fallbackModuleCache.set(moduleGraph, moduleCache);
		}
		const cached = moduleCache.get(this);
		if (cached !== undefined) {
			return cached;
		}

		/** @type {undefined | null | Module} */
		let fallbackModule = null;

		if (this.options.import) {
			if (this.options.eager) {
				const dep = this.dependencies[0];
				if (dep) {
					fallbackModule = moduleGraph.getModule(dep);
				}
			} else {
				const block = this.blocks[0];
				if (block && block.dependencies.length > 0) {
					fallbackModule = moduleGraph.getModule(block.dependencies[0]);
				}
			}
		}

		moduleCache.set(this, fallbackModule);
		return fallbackModule;
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
		const fallbackModule = this._getFallbackModule(moduleGraph);
		if (!fallbackModule) return "dynamic";
		return fallbackModule.getExportsType(moduleGraph, strict);
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
		hash.update(JSON.stringify(this.options));
		super.updateHash(hash, context);
	}

	/**
	 * Generates code and runtime requirements for this module.
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration({ chunkGraph, runtimeTemplate }) {
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
		/** @type {undefined | string} */
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

		/** @type {string} */
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
		/** @type {Sources} */
		const sources = new Map();
		sources.set("consume-shared", new RawSource(code));
		return {
			runtimeRequirements,
			sources
		};
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.options);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
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
