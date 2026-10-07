/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const ChunkGraph = require("./ChunkGraph");
const DependenciesBlock = require("./DependenciesBlock");
const ModuleGraph = require("./ModuleGraph");
const { JS_TYPES } = require("./ModuleSourceTypesConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const { first } = require("./util/SetHelpers");
const { compareChunksById } = require("./util/comparators");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./ChunkGroup")} ChunkGroup */
/** @typedef {import("./CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Compilation").AssetInfo} AssetInfo */
/** @typedef {import("./ConcatenationScope")} ConcatenationScope */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./ExportsInfo").UsageStateType} UsageStateType */
/** @typedef {import("./FileSystemInfo")} FileSystemInfo */
/** @typedef {import("./FileSystemInfo").Snapshot} Snapshot */
/** @typedef {import("./ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("./ModuleTypeConstants").ModuleTypes} ModuleTypes */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/Hash")} Hash */
/** @template T @typedef {import("./util/LazySet")<T>} LazySet<T> */
/** @template T @typedef {import("./util/SortableSet")<T>} SortableSet<T> */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @typedef {object} SourceContext
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {RuntimeSpec} runtime the runtimes code should be generated for
 * @property {string=} type the type of source that should be generated
 */

/** @typedef {ReadonlySet<string>} SourceTypes */

// TODO webpack 6: compilation will be required in CodeGenerationContext
/**
 * @typedef {object} CodeGenerationContext
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {RuntimeSpec} runtime the runtimes code should be generated for
 * @property {ConcatenationScope=} concatenationScope when in concatenated module, information about other concatenated modules
 * @property {CodeGenerationResults | undefined} codeGenerationResults code generation results of other modules (need to have a codeGenerationDependency to use that)
 * @property {Compilation=} compilation the compilation
 * @property {SourceTypes=} sourceTypes source types
 */

/**
 * @typedef {object} ConcatenationBailoutReasonContext
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 */

/** @typedef {Set<string>} RuntimeRequirements */
/** @typedef {ReadonlySet<string>} ReadOnlyRuntimeRequirements */

/**
 * @typedef {object} CodeGenerationResult
 * @property {Map<string, Source>} sources the resulting sources for all source types
 * @property {Map<string, any>=} data the resulting data for all source types
 * @property {ReadOnlyRuntimeRequirements | null} runtimeRequirements the runtime requirements
 * @property {string=} hash a hash of the code generation result (will be automatically calculated from sources and runtimeRequirements if not provided)
 */

/**
 * @typedef {object} LibIdentOptions
 * @property {string} context absolute context path to which lib ident is relative to
 * @property {object=} associatedObjectForCache object for caching
 */

/**
 * @typedef {object} KnownBuildMeta
 * @property {("default" | "namespace" | "flagged" | "dynamic")=} exportsType
 * @property {(false | "redirect" | "redirect-warn")=} defaultObject
 * @property {boolean=} strictHarmonyModule
 * @property {boolean=} async
 * @property {boolean=} sideEffectFree
 * @property {Record<string, string>=} exportsFinalName
 */

/**
 * @typedef {object} KnownBuildInfo
 * @property {boolean=} cacheable
 * @property {boolean=} parsed
 * @property {string=} moduleArgument
 * @property {string=} exportsArgument
 * @property {boolean=} strict
 * @property {string=} moduleConcatenationBailout
 * @property {LazySet<string>=} fileDependencies
 * @property {LazySet<string>=} contextDependencies
 * @property {LazySet<string>=} missingDependencies
 * @property {LazySet<string>=} buildDependencies
 * @property {ValueCacheVersions=} valueDependencies
 * @property {TODO=} hash
 * @property {Record<string, Source>=} assets
 * @property {Map<string, AssetInfo | undefined>=} assetsInfo
 * @property {(Snapshot | null)=} snapshot
 */

/** @typedef {Map<string, string | Set<string>>} ValueCacheVersions */

/**
 * @typedef {object} NeedBuildContext
 * @property {Compilation} compilation
 * @property {FileSystemInfo} fileSystemInfo
 * @property {ValueCacheVersions} valueCacheVersions
 */

/** @typedef {KnownBuildMeta & Record<string, any>} BuildMeta */
/** @typedef {KnownBuildInfo & Record<string, any>} BuildInfo */

/**
 * @typedef {object} FactoryMeta
 * @property {boolean=} sideEffectFree
 */

/** @typedef {{ factoryMeta: FactoryMeta | undefined, resolveOptions: ResolveOptions | undefined }} UnsafeCacheData */

const EMPTY_RESOLVE_OPTIONS = {};

let debugId = 1000;

const DEFAULT_TYPES_UNKNOWN = new Set(["unknown"]);

const deprecatedNeedRebuild = util.deprecate(
	/**
	 * @param {Module} module the module
	 * @param {NeedBuildContext} context context info
	 * @returns {boolean} true, when rebuild is needed
	 */
	(module, context) =>
		module.needRebuild(
			context.fileSystemInfo.getDeprecatedFileTimestamps(),
			context.fileSystemInfo.getDeprecatedContextTimestamps()
		),
	"Module.needRebuild is deprecated in favor of Module.needBuild",
	"DEP_WEBPACK_MODULE_NEED_REBUILD"
);

/** @typedef {(requestShortener: RequestShortener) => string} OptimizationBailoutFunction */

class Module extends DependenciesBlock {
	/**
	 * @param {ModuleTypes | ""} type the module type, when deserializing the type is not known and is an empty string
	 * @param {(string | null)=} context an optional context
	 * @param {(string | null)=} layer an optional layer in which the module is
	 */
	constructor(type, context = null, layer = null) {
		super();

		/** @type {ModuleTypes} */
		this.type = type;
		/** @type {string | null} */
		this.context = context;
		/** @type {string | null} */
		this.layer = layer;
		/** @type {boolean} */
		this.needId = true;

		// Unique Id
		/** @type {number} */
		this.debugId = debugId++;

		// Info from Factory
		/** @type {ResolveOptions | undefined} */
		this.resolveOptions = EMPTY_RESOLVE_OPTIONS;
		/** @type {FactoryMeta | undefined} */
		this.factoryMeta = undefined;
		// TODO refactor this -> options object filled from Factory
		// TODO webpack 6: use an enum
		/** @type {boolean} */
		this.useSourceMap = false;
		/** @type {boolean} */
		this.useSimpleSourceMap = false;

		// Is in hot context, i.e. HotModuleReplacementPlugin.js enabled
		/** @type {boolean} */
		this.hot = false;
		// Info from Build
		/** @type {WebpackError[] | undefined} */
		this._warnings = undefined;
		/** @type {WebpackError[] | undefined} */
		this._errors = undefined;
		/** @type {BuildMeta | undefined} */
		this.buildMeta = undefined;
		/** @type {BuildInfo | undefined} */
		this.buildInfo = undefined;
		/** @type {Dependency[] | undefined} */
		this.presentationalDependencies = undefined;
		/** @type {Dependency[] | undefined} */
		this.codeGenerationDependencies = undefined;
	}

	// TODO remove in webpack 6
	// BACKWARD-COMPAT START
	/**
	 * @returns {ModuleId | null} module id
	 */
	get id() {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.id",
			"DEP_WEBPACK_MODULE_ID"
		).getModuleId(this);
	}

	/**
	 * @param {ModuleId} value value
	 */
	set id(value) {
		if (value === "") {
			this.needId = false;
			return;
		}
		ChunkGraph.getChunkGraphForModule(
			this,
			"Module.id",
			"DEP_WEBPACK_MODULE_ID"
		).setModuleId(this, value);
	}

	/**
	 * @returns {string} the hash of the module
	 */
	get hash() {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.hash",
			"DEP_WEBPACK_MODULE_HASH"
		).getModuleHash(this, undefined);
	}

	/**
	 * @returns {string} the shortened hash of the module
	 */
	get renderedHash() {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.renderedHash",
			"DEP_WEBPACK_MODULE_RENDERED_HASH"
		).getRenderedModuleHash(this, undefined);
	}

	get profile() {
		return ModuleGraph.getModuleGraphForModule(
			this,
			"Module.profile",
			"DEP_WEBPACK_MODULE_PROFILE"
		).getProfile(this);
	}

	set profile(value) {
		ModuleGraph.getModuleGraphForModule(
			this,
			"Module.profile",
			"DEP_WEBPACK_MODULE_PROFILE"
		).setProfile(this, value);
	}

	/**
	 * @returns {number | null} the pre order index
	 */
	get index() {
		return ModuleGraph.getModuleGraphForModule(
			this,
			"Module.index",
			"DEP_WEBPACK_MODULE_INDEX"
		).getPreOrderIndex(this);
	}

	/**
	 * @param {number} value the pre order index
	 */
	set index(value) {
		ModuleGraph.getModuleGraphForModule(
			this,
			"Module.index",
			"DEP_WEBPACK_MODULE_INDEX"
		).setPreOrderIndex(this, value);
	}

	/**
	 * @returns {number | null} the post order index
	 */
	get index2() {
		return ModuleGraph.getModuleGraphForModule(
			this,
			"Module.index2",
			"DEP_WEBPACK_MODULE_INDEX2"
		).getPostOrderIndex(this);
	}

	/**
	 * @param {number} value the post order index
	 */
	set index2(value) {
		ModuleGraph.getModuleGraphForModule(
			this,
			"Module.index2",
			"DEP_WEBPACK_MODULE_INDEX2"
		).setPostOrderIndex(this, value);
	}

	/**
	 * @returns {number | null} the depth
	 */
	get depth() {
		return ModuleGraph.getModuleGraphForModule(
			this,
			"Module.depth",
			"DEP_WEBPACK_MODULE_DEPTH"
		).getDepth(this);
	}

	/**
	 * @param {number} value the depth
	 */
	set depth(value) {
		ModuleGraph.getModuleGraphForModule(
			this,
			"Module.depth",
			"DEP_WEBPACK_MODULE_DEPTH"
		).setDepth(this, value);
	}

	/**
	 * @returns {Module | null | undefined} issuer
	 */
	get issuer() {
		return ModuleGraph.getModuleGraphForModule(
			this,
			"Module.issuer",
			"DEP_WEBPACK_MODULE_ISSUER"
		).getIssuer(this);
	}

	/**
	 * @param {Module | null} value issuer
	 */
	set issuer(value) {
		ModuleGraph.getModuleGraphForModule(
			this,
			"Module.issuer",
			"DEP_WEBPACK_MODULE_ISSUER"
		).setIssuer(this, value);
	}

	get usedExports() {
		return ModuleGraph.getModuleGraphForModule(
			this,
			"Module.usedExports",
			"DEP_WEBPACK_MODULE_USED_EXPORTS"
		).getUsedExports(this, undefined);
	}

	/**
	 * @deprecated
	 * @returns {(string | OptimizationBailoutFunction)[]} list
	 */
	get optimizationBailout() {
		return ModuleGraph.getModuleGraphForModule(
			this,
			"Module.optimizationBailout",
			"DEP_WEBPACK_MODULE_OPTIMIZATION_BAILOUT"
		).getOptimizationBailout(this);
	}

	get optional() {
		return this.isOptional(
			ModuleGraph.getModuleGraphForModule(
				this,
				"Module.optional",
				"DEP_WEBPACK_MODULE_OPTIONAL"
			)
		);
	}

	/**
	 * @param {Chunk} chunk the chunk
	 * @returns {boolean} true, when the module was added
	 */
	addChunk(chunk) {
		const chunkGraph = ChunkGraph.getChunkGraphForModule(
			this,
			"Module.addChunk",
			"DEP_WEBPACK_MODULE_ADD_CHUNK"
		);
		if (chunkGraph.isModuleInChunk(this, chunk)) return false;
		chunkGraph.connectChunkAndModule(chunk, this);
		return true;
	}

	/**
	 * @param {Chunk} chunk the chunk
	 * @returns {void}
	 */
	removeChunk(chunk) {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.removeChunk",
			"DEP_WEBPACK_MODULE_REMOVE_CHUNK"
		).disconnectChunkAndModule(chunk, this);
	}

	/**
	 * @param {Chunk} chunk the chunk
	 * @returns {boolean} true, when the module is in the chunk
	 */
	isInChunk(chunk) {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.isInChunk",
			"DEP_WEBPACK_MODULE_IS_IN_CHUNK"
		).isModuleInChunk(this, chunk);
	}

	isEntryModule() {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.isEntryModule",
			"DEP_WEBPACK_MODULE_IS_ENTRY_MODULE"
		).isEntryModule(this);
	}

	getChunks() {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.getChunks",
			"DEP_WEBPACK_MODULE_GET_CHUNKS"
		).getModuleChunks(this);
	}

	getNumberOfChunks() {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.getNumberOfChunks",
			"DEP_WEBPACK_MODULE_GET_NUMBER_OF_CHUNKS"
		).getNumberOfModuleChunks(this);
	}

	get chunksIterable() {
		return ChunkGraph.getChunkGraphForModule(
			this,
			"Module.chunksIterable",
			"DEP_WEBPACK_MODULE_CHUNKS_ITERABLE"
		).getOrderedModuleChunksIterable(this, compareChunksById);
	}

	/**
	 * @param {string} exportName a name of an export
	 * @returns {boolean | null} true, if the export is provided why the module.
	 * null, if it's unknown.
	 * false, if it's not provided.
	 */
	isProvided(exportName) {
		return ModuleGraph.getModuleGraphForModule(
			this,
			"Module.usedExports",
			"DEP_WEBPACK_MODULE_USED_EXPORTS"
		).isExportProvided(this, exportName);
	}
	// BACKWARD-COMPAT END

	/**
	 * @returns {string} name of the exports argument
	 */
	get exportsArgument() {
		return (this.buildInfo && this.buildInfo.exportsArgument) || "exports";
	}

	/**
	 * @returns {string} name of the module argument
	 */
	get moduleArgument() {
		return (this.buildInfo && this.buildInfo.moduleArgument) || "module";
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {boolean | undefined} strict the importing module is strict
	 * @returns {"namespace" | "default-only" | "default-with-named" | "dynamic"} export type
	 * "namespace": Exports is already a namespace object. namespace = exports.
	 * "dynamic": Check at runtime if __esModule is set. When set: namespace = { ...exports, default: exports }. When not set: namespace = { default: exports }.
	 * "default-only": Provide a namespace object with only default export. namespace = { default: exports }
	 * "default-with-named": Provide a namespace object with named and default export. namespace = { ...exports, default: exports }
	 */
	getExportsType(moduleGraph, strict) {
		switch (this.buildMeta && this.buildMeta.exportsType) {
			case "flagged":
				return strict ? "default-with-named" : "namespace";
			case "namespace":
				return "namespace";
			case "default":
				switch (/** @type {BuildMeta} */ (this.buildMeta).defaultObject) {
					case "redirect":
						return "default-with-named";
					case "redirect-warn":
						return strict ? "default-only" : "default-with-named";
					default:
						return "default-only";
				}
			case "dynamic": {
				if (strict) return "default-with-named";
				// Try to figure out value of __esModule by following reexports
				const handleDefault = () => {
					switch (/** @type {BuildMeta} */ (this.buildMeta).defaultObject) {
						case "redirect":
						case "redirect-warn":
							return "default-with-named";
						default:
							return "default-only";
					}
				};
				const exportInfo = moduleGraph.getReadOnlyExportInfo(
					this,
					"__esModule"
				);
				if (exportInfo.provided === false) {
					return handleDefault();
				}
				const target = exportInfo.getTarget(moduleGraph);
				if (
					!target ||
					!target.export ||
					target.export.length !== 1 ||
					target.export[0] !== "__esModule"
				) {
					return "dynamic";
				}
				switch (
					target.module.buildMeta &&
					target.module.buildMeta.exportsType
				) {
					case "flagged":
					case "namespace":
						return "namespace";
					case "default":
						return handleDefault();
					default:
						return "dynamic";
				}
			}
			default:
				return strict ? "default-with-named" : "dynamic";
		}
	}

	/**
	 * @param {Dependency} presentationalDependency dependency being tied to module.
	 * This is a Dependency without edge in the module graph. It's only for presentation.
	 * @returns {void}
	 */
	addPresentationalDependency(presentationalDependency) {
		if (this.presentationalDependencies === undefined) {
			this.presentationalDependencies = [];
		}
		this.presentationalDependencies.push(presentationalDependency);
	}

	/**
	 * @param {Dependency} codeGenerationDependency dependency being tied to module.
	 * This is a Dependency where the code generation result of the referenced module is needed during code generation.
	 * The Dependency should also be added to normal dependencies via addDependency.
	 * @returns {void}
	 */
	addCodeGenerationDependency(codeGenerationDependency) {
		if (this.codeGenerationDependencies === undefined) {
			this.codeGenerationDependencies = [];
		}
		this.codeGenerationDependencies.push(codeGenerationDependency);
	}

	/**
	 * Removes all dependencies and blocks
	 * @returns {void}
	 */
	clearDependenciesAndBlocks() {
		if (this.presentationalDependencies !== undefined) {
			this.presentationalDependencies.length = 0;
		}
		if (this.codeGenerationDependencies !== undefined) {
			this.codeGenerationDependencies.length = 0;
		}
		super.clearDependenciesAndBlocks();
	}

	/**
	 * @param {WebpackError} warning the warning
	 * @returns {void}
	 */
	addWarning(warning) {
		if (this._warnings === undefined) {
			this._warnings = [];
		}
		this._warnings.push(warning);
	}

	/**
	 * @returns {Iterable<WebpackError> | undefined} list of warnings if any
	 */
	getWarnings() {
		return this._warnings;
	}

	/**
	 * @returns {number} number of warnings
	 */
	getNumberOfWarnings() {
		return this._warnings !== undefined ? this._warnings.length : 0;
	}

	/**
	 * @param {WebpackError} error the error
	 * @returns {void}
	 */
	addError(error) {
		if (this._errors === undefined) {
			this._errors = [];
		}
		this._errors.push(error);
	}

	/**
	 * @returns {Iterable<WebpackError> | undefined} list of errors if any
	 */
	getErrors() {
		return this._errors;
	}

	/**
	 * @returns {number} number of errors
	 */
	getNumberOfErrors() {
		return this._errors !== undefined ? this._errors.length : 0;
	}

	/**
	 * removes all warnings and errors
	 * @returns {void}
	 */
	clearWarningsAndErrors() {
		if (this._warnings !== undefined) {
			this._warnings.length = 0;
		}
		if (this._errors !== undefined) {
			this._errors.length = 0;
		}
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {boolean} true, if the module is optional
	 */
	isOptional(moduleGraph) {
		let hasConnections = false;
		for (const r of moduleGraph.getIncomingConnections(this)) {
			if (
				!r.dependency ||
				!r.dependency.optional ||
				!r.isTargetActive(undefined)
			) {
				return false;
			}
			hasConnections = true;
		}
		return hasConnections;
	}

	/**
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {Chunk} chunk a chunk
	 * @param {Chunk=} ignoreChunk chunk to be ignored
	 * @returns {boolean} true, if the module is accessible from "chunk" when ignoring "ignoreChunk"
	 */
	isAccessibleInChunk(chunkGraph, chunk, ignoreChunk) {
		// Check if module is accessible in ALL chunk groups
		for (const chunkGroup of chunk.groupsIterable) {
			if (!this.isAccessibleInChunkGroup(chunkGraph, chunkGroup)) return false;
		}
		return true;
	}

	/**
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {ChunkGroup} chunkGroup a chunk group
	 * @param {Chunk=} ignoreChunk chunk to be ignored
	 * @returns {boolean} true, if the module is accessible from "chunkGroup" when ignoring "ignoreChunk"
	 */
	isAccessibleInChunkGroup(chunkGraph, chunkGroup, ignoreChunk) {
		const queue = new Set([chunkGroup]);

		// Check if module is accessible from all items of the queue
		queueFor: for (const cg of queue) {
			// 1. If module is in one of the chunks of the group we can continue checking the next items
			//    because it's accessible.
			for (const chunk of cg.chunks) {
				if (chunk !== ignoreChunk && chunkGraph.isModuleInChunk(this, chunk))
					continue queueFor;
			}
			// 2. If the chunk group is initial, we can break here because it's not accessible.
			if (chunkGroup.isInitial()) return false;
			// 3. Enqueue all parents because it must be accessible from ALL parents
			for (const parent of chunkGroup.parentsIterable) queue.add(parent);
		}
		// When we processed through the whole list and we didn't bailout, the module is accessible
		return true;
	}

	/**
	 * @param {Chunk} chunk a chunk
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @returns {boolean} true, if the module has any reason why "chunk" should be included
	 */
	hasReasonForChunk(chunk, moduleGraph, chunkGraph) {
		// check for each reason if we need the chunk
		for (const [
			fromModule,
			connections
		] of moduleGraph.getIncomingConnectionsByOriginModule(this)) {
			if (!connections.some(c => c.isTargetActive(chunk.runtime))) continue;
			for (const originChunk of chunkGraph.getModuleChunksIterable(
				/** @type {Module} */ (fromModule)
			)) {
				// return true if module this is not reachable from originChunk when ignoring chunk
				if (!this.isAccessibleInChunk(chunkGraph, originChunk, chunk))
					return true;
			}
		}
		return false;
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {boolean} true if at least one other module depends on this module
	 */
	hasReasons(moduleGraph, runtime) {
		for (const c of moduleGraph.getIncomingConnections(this)) {
			if (c.isTargetActive(runtime)) return true;
		}
		return false;
	}

	/**
	 * @returns {string} for debugging
	 */
	toString() {
		return `Module[${this.debugId}: ${this.identifier()}]`;
	}

	/**
	 * @param {NeedBuildContext} context context info
	 * @param {function((WebpackError | null)=, boolean=): void} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild(context, callback) {
		callback(
			null,
			!this.buildMeta ||
				this.needRebuild === Module.prototype.needRebuild ||
				deprecatedNeedRebuild(this, context)
		);
	}

	/**
	 * @deprecated Use needBuild instead
	 * @param {Map<string, number|null>} fileTimestamps timestamps of files
	 * @param {Map<string, number|null>} contextTimestamps timestamps of directories
	 * @returns {boolean} true, if the module needs a rebuild
	 */
	needRebuild(fileTimestamps, contextTimestamps) {
		return true;
	}

	/**
	 * @param {Hash} hash the hash used to track dependencies
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(
		hash,
		context = {
			chunkGraph: ChunkGraph.getChunkGraphForModule(
				this,
				"Module.updateHash",
				"DEP_WEBPACK_MODULE_UPDATE_HASH"
			),
			runtime: undefined
		}
	) {
		const { chunkGraph, runtime } = context;
		hash.update(chunkGraph.getModuleGraphHash(this, runtime));
		if (this.presentationalDependencies !== undefined) {
			for (const dep of this.presentationalDependencies) {
				dep.updateHash(hash, context);
			}
		}
		super.updateHash(hash, context);
	}

	/**
	 * @returns {void}
	 */
	invalidateBuild() {
		// should be overridden to support this feature
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {RequestShortener} requestShortener the request shortener
	 * @returns {string} a user readable identifier of the module
	 */
	readableIdentifier(requestShortener) {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {WebpackOptions} options webpack options
	 * @param {Compilation} compilation the compilation
	 * @param {ResolverWithOptions} resolver the resolver
	 * @param {InputFileSystem} fs the file system
	 * @param {function(WebpackError=): void} callback callback function
	 * @returns {void}
	 */
	build(options, compilation, resolver, fs, callback) {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}

	/**
	 * @abstract
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		// Better override this method to return the correct types
		if (this.source === Module.prototype.source) {
			return DEFAULT_TYPES_UNKNOWN;
		}
		return JS_TYPES;
	}

	/**
	 * @abstract
	 * @deprecated Use codeGeneration() instead
	 * @param {DependencyTemplates} dependencyTemplates the dependency templates
	 * @param {RuntimeTemplate} runtimeTemplate the runtime template
	 * @param {string=} type the type of source that should be generated
	 * @returns {Source} generated source
	 */
	source(dependencyTemplates, runtimeTemplate, type = "javascript") {
		if (this.codeGeneration === Module.prototype.codeGeneration) {
			const AbstractMethodError = require("./AbstractMethodError");
			throw new AbstractMethodError();
		}
		const chunkGraph = ChunkGraph.getChunkGraphForModule(
			this,
			"Module.source() is deprecated. Use Compilation.codeGenerationResults.getSource(module, runtime, type) instead",
			"DEP_WEBPACK_MODULE_SOURCE"
		);
		/** @type {CodeGenerationContext} */
		const codeGenContext = {
			dependencyTemplates,
			runtimeTemplate,
			moduleGraph: chunkGraph.moduleGraph,
			chunkGraph,
			runtime: undefined,
			codeGenerationResults: undefined
		};
		const sources = this.codeGeneration(codeGenContext).sources;

		return /** @type {Source} */ (
			type
				? sources.get(type)
				: sources.get(/** @type {string} */ (first(this.getSourceTypes())))
		);
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}

	/**
	 * @param {LibIdentOptions} options options
	 * @returns {string | null} an identifier for library inclusion
	 */
	libIdent(options) {
		return null;
	}

	/**
	 * @returns {string | null} absolute path which should be used for condition matching (usually the resource path)
	 */
	nameForCondition() {
		return null;
	}

	/**
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(context) {
		return `Module Concatenation is not implemented for ${this.constructor.name}`;
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this module should be connected to referencing modules when consumed for side-effects only
	 */
	getSideEffectsConnectionState(moduleGraph) {
		return true;
	}

	/**
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration(context) {
		// Best override this method
		const sources = new Map();
		for (const type of this.getSourceTypes()) {
			if (type !== "unknown") {
				sources.set(
					type,
					this.source(
						context.dependencyTemplates,
						context.runtimeTemplate,
						type
					)
				);
			}
		}
		return {
			sources,
			runtimeRequirements: new Set([
				RuntimeGlobals.module,
				RuntimeGlobals.exports,
				RuntimeGlobals.require
			])
		};
	}

	/**
	 * @param {Chunk} chunk the chunk which condition should be checked
	 * @param {Compilation} compilation the compilation
	 * @returns {boolean} true, if the chunk is ok for the module
	 */
	chunkCondition(chunk, compilation) {
		return true;
	}

	hasChunkCondition() {
		return this.chunkCondition !== Module.prototype.chunkCondition;
	}

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 * @param {Module} module fresh module
	 * @returns {void}
	 */
	updateCacheModule(module) {
		this.type = module.type;
		this.layer = module.layer;
		this.context = module.context;
		this.factoryMeta = module.factoryMeta;
		this.resolveOptions = module.resolveOptions;
	}

	/**
	 * Module should be unsafe cached. Get data that's needed for that.
	 * This data will be passed to restoreFromUnsafeCache later.
	 * @returns {UnsafeCacheData} cached data
	 */
	getUnsafeCacheData() {
		return {
			factoryMeta: this.factoryMeta,
			resolveOptions: this.resolveOptions
		};
	}

	/**
	 * restore unsafe cache data
	 * @param {object} unsafeCacheData data from getUnsafeCacheData
	 * @param {NormalModuleFactory} normalModuleFactory the normal module factory handling the unsafe caching
	 */
	_restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory) {
		this.factoryMeta = unsafeCacheData.factoryMeta;
		this.resolveOptions = unsafeCacheData.resolveOptions;
	}

	/**
	 * Assuming this module is in the cache. Remove internal references to allow freeing some memory.
	 */
	cleanupForCache() {
		this.factoryMeta = undefined;
		this.resolveOptions = undefined;
	}

	/**
	 * @returns {Source | null} the original source for the module before webpack transformation
	 */
	originalSource() {
		return null;
	}

	/**
	 * @param {LazySet<string>} fileDependencies set where file dependencies are added to
	 * @param {LazySet<string>} contextDependencies set where context dependencies are added to
	 * @param {LazySet<string>} missingDependencies set where missing dependencies are added to
	 * @param {LazySet<string>} buildDependencies set where build dependencies are added to
	 */
	addCacheDependencies(
		fileDependencies,
		contextDependencies,
		missingDependencies,
		buildDependencies
	) {}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.type);
		write(this.layer);
		write(this.context);
		write(this.resolveOptions);
		write(this.factoryMeta);
		write(this.useSourceMap);
		write(this.useSimpleSourceMap);
		write(this.hot);
		write(
			this._warnings !== undefined && this._warnings.length === 0
				? undefined
				: this._warnings
		);
		write(
			this._errors !== undefined && this._errors.length === 0
				? undefined
				: this._errors
		);
		write(this.buildMeta);
		write(this.buildInfo);
		write(this.presentationalDependencies);
		write(this.codeGenerationDependencies);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.type = read();
		this.layer = read();
		this.context = read();
		this.resolveOptions = read();
		this.factoryMeta = read();
		this.useSourceMap = read();
		this.useSimpleSourceMap = read();
		this.hot = read();
		this._warnings = read();
		this._errors = read();
		this.buildMeta = read();
		this.buildInfo = read();
		this.presentationalDependencies = read();
		this.codeGenerationDependencies = read();
		super.deserialize(context);
	}
}

makeSerializable(Module, "webpack/lib/Module");

// TODO remove in webpack 6
// eslint-disable-next-line no-warning-comments
// @ts-ignore https://github.com/microsoft/TypeScript/issues/42919
Object.defineProperty(Module.prototype, "hasEqualsChunks", {
	get() {
		throw new Error(
			"Module.hasEqualsChunks was renamed (use hasEqualChunks instead)"
		);
	}
});

// TODO remove in webpack 6
// eslint-disable-next-line no-warning-comments
// @ts-ignore https://github.com/microsoft/TypeScript/issues/42919
Object.defineProperty(Module.prototype, "isUsed", {
	get() {
		throw new Error(
			"Module.isUsed was renamed (use getUsedName, isExportUsed or isModuleUsed instead)"
		);
	}
});

// TODO remove in webpack 6
Object.defineProperty(Module.prototype, "errors", {
	get: util.deprecate(
		/**
		 * @this {Module}
		 * @returns {WebpackError[]} array
		 */
		function () {
			if (this._errors === undefined) {
				this._errors = [];
			}
			return this._errors;
		},
		"Module.errors was removed (use getErrors instead)",
		"DEP_WEBPACK_MODULE_ERRORS"
	)
});

// TODO remove in webpack 6
Object.defineProperty(Module.prototype, "warnings", {
	get: util.deprecate(
		/**
		 * @this {Module}
		 * @returns {WebpackError[]} array
		 */
		function () {
			if (this._warnings === undefined) {
				this._warnings = [];
			}
			return this._warnings;
		},
		"Module.warnings was removed (use getWarnings instead)",
		"DEP_WEBPACK_MODULE_WARNINGS"
	)
});

// TODO remove in webpack 6
// eslint-disable-next-line no-warning-comments
// @ts-ignore https://github.com/microsoft/TypeScript/issues/42919
Object.defineProperty(Module.prototype, "used", {
	get() {
		throw new Error(
			"Module.used was refactored (use ModuleGraph.getUsedExports instead)"
		);
	},
	set(value) {
		throw new Error(
			"Module.used was refactored (use ModuleGraph.setUsedExports instead)"
		);
	}
});

module.exports = Module;
