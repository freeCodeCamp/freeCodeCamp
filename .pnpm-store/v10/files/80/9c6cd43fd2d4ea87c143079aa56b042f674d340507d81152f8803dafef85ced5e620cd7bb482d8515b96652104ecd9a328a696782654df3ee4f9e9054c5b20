/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { OriginalSource, RawSource } = require("webpack-sources");
const AsyncDependenciesBlock = require("./AsyncDependenciesBlock");
const { makeWebpackError } = require("./HookWebpackError");
const Module = require("./Module");
const {
	JAVASCRIPT_TYPE,
	JAVASCRIPT_TYPES
} = require("./ModuleSourceTypeConstants");
const { JAVASCRIPT_MODULE_TYPE_DYNAMIC } = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const Template = require("./Template");
const WebpackError = require("./WebpackError");
const {
	getOutgoingAsyncModules
} = require("./async-modules/AsyncModuleHelpers");
const { ImportPhase, ImportPhaseUtils } = require("./dependencies/ImportPhase");
const {
	compareLocations,
	compareModulesById,
	compareSelect,
	concatComparators,
	keepOriginalOrder
} = require("./util/comparators");
const {
	contextify,
	makePathsRelative,
	parseResource
} = require("./util/identifier");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("./config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Chunk").ChunkId} ChunkId */
/** @typedef {import("./Chunk").ChunkName} ChunkName */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./ChunkGroup").RawChunkGroupOptions} RawChunkGroupOptions */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./Dependency").RawReferencedExports} RawReferencedExports */
/** @typedef {import("./Generator").SourceTypes} SourceTypes */
/** @typedef {import("./Module").BuildCallback} BuildCallback */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./Module").FileSystemDependencies} FileSystemDependencies */
/** @typedef {import("./Module").BuildMeta} BuildMeta */
/** @typedef {import("./Module").CodeGenerationContext} CodeGenerationContext */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Module").LibIdentOptions} LibIdentOptions */
/** @typedef {import("./Module").LibIdent} LibIdent */
/** @typedef {import("./Module").NeedBuildCallback} NeedBuildCallback */
/** @typedef {import("./Module").NeedBuildContext} NeedBuildContext */
/** @typedef {import("./Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("./Module").Sources} Sources */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./ResolverFactory").ResolverWithOptions} ResolverWithOptions */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./dependencies/ContextElementDependency")} ContextElementDependency */
/** @typedef {import("./javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./dependencies/ImportPhase").ImportPhaseType} ImportPhaseType */

/** @typedef {"sync" | "eager" | "weak" | "async-weak" | "lazy" | "lazy-once"} ContextMode Context mode */

/**
 * @typedef {object} ContextOptions
 * @property {ContextMode} mode
 * @property {boolean} recursive
 * @property {RegExp | false | null} regExp
 * @property {"strict" | boolean=} namespaceObject
 * @property {string=} addon
 * @property {ChunkName=} chunkName
 * @property {RegExp | null=} include
 * @property {RegExp | null=} exclude
 * @property {RawChunkGroupOptions=} groupOptions
 * @property {string=} typePrefix
 * @property {string=} category
 * @property {RawReferencedExports | null=} referencedExports exports referenced from modules (won't be mangled)
 * @property {string | null=} layer
 * @property {ImportAttributes=} attributes
 * @property {ImportPhaseType=} phase
 */

/**
 * @typedef {object} ContextModuleOptionsExtras
 * @property {false | string | string[]} resource
 * @property {string=} resourceQuery
 * @property {string=} resourceFragment
 * @property {ResolveOptions=} resolveOptions
 */

/** @typedef {ContextOptions & ContextModuleOptionsExtras} ContextModuleOptions */

/**
 * @callback ResolveDependenciesCallback
 * @param {Error | null} err
 * @param {ContextElementDependency[]=} dependencies
 * @returns {void}
 */

/**
 * @callback ResolveDependencies
 * @param {InputFileSystem} fs
 * @param {ContextModuleOptions} options
 * @param {ResolveDependenciesCallback} callback
 */

/** @typedef {1 | 3 | 7 | 9} FakeMapType */

/** @typedef {Record<ModuleId, FakeMapType>} FakeMap */
/** @typedef {Record<string, ModuleId>} UserRequestMap */
/** @typedef {Record<ModuleId, ModuleId[]>} UserRequestsMap */

class ContextModule extends Module {
	/**
	 * @param {ResolveDependencies} resolveDependencies function to get dependencies in this context
	 * @param {ContextModuleOptions} options options object
	 */
	constructor(resolveDependencies, options) {
		if (!options || typeof options.resource === "string") {
			const parsed = parseResource(
				options ? /** @type {string} */ (options.resource) : ""
			);
			const resource = parsed.path;
			const resourceQuery = (options && options.resourceQuery) || parsed.query;
			const resourceFragment =
				(options && options.resourceFragment) || parsed.fragment;
			const layer = options && options.layer;

			super(JAVASCRIPT_MODULE_TYPE_DYNAMIC, resource, layer);
			/** @type {ContextModuleOptions} */
			this.options = {
				...options,
				resource,
				resourceQuery,
				resourceFragment
			};
		} else {
			super(JAVASCRIPT_MODULE_TYPE_DYNAMIC, undefined, options.layer);
			/** @type {ContextModuleOptions} */
			this.options = {
				...options,
				resource: options.resource,
				resourceQuery: options.resourceQuery || "",
				resourceFragment: options.resourceFragment || ""
			};
		}

		// Info from Factory
		/** @type {ResolveDependencies | undefined} */
		this.resolveDependencies = resolveDependencies;
		if (options && options.resolveOptions !== undefined) {
			this.resolveOptions = options.resolveOptions;
		}

		if (options && typeof options.mode !== "string") {
			throw new Error("options.mode is a required option");
		}

		this._identifier = this._createIdentifier();
		this._forceBuild = true;
	}

	/**
	 * Returns the source types this module can generate.
	 * @returns {SourceTypes} types available (do not mutate)
	 */
	getSourceTypes() {
		return JAVASCRIPT_TYPES;
	}

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 * @param {Module} module fresh module
	 * @returns {void}
	 */
	updateCacheModule(module) {
		const m = /** @type {ContextModule} */ (module);
		this.resolveDependencies = m.resolveDependencies;
		this.options = m.options;
	}

	/**
	 * Assuming this module is in the cache. Remove internal references to allow freeing some memory.
	 */
	cleanupForCache() {
		super.cleanupForCache();
		this.resolveDependencies = undefined;
	}

	/**
	 * @private
	 * @param {RegExp} regexString RegExp as a string
	 * @param {boolean=} stripSlash do we need to strip a slsh
	 * @returns {string} pretty RegExp
	 */
	_prettyRegExp(regexString, stripSlash = true) {
		const str = stripSlash
			? regexString.source + regexString.flags
			: `${regexString}`;
		return str.replace(/!/g, "%21").replace(/\|/g, "%7C");
	}

	_createIdentifier() {
		let identifier =
			this.context ||
			(typeof this.options.resource === "string" ||
			this.options.resource === false
				? `${this.options.resource}`
				: this.options.resource.join("|"));
		if (this.options.resourceQuery) {
			identifier += `|${this.options.resourceQuery}`;
		}
		if (this.options.resourceFragment) {
			identifier += `|${this.options.resourceFragment}`;
		}
		if (this.options.mode) {
			identifier += `|${this.options.mode}`;
		}
		if (!this.options.recursive) {
			identifier += "|nonrecursive";
		}
		if (this.options.addon) {
			identifier += `|${this.options.addon}`;
		}
		if (this.options.regExp) {
			identifier += `|${this._prettyRegExp(this.options.regExp, false)}`;
		}
		if (this.options.include) {
			identifier += `|include: ${this._prettyRegExp(
				this.options.include,
				false
			)}`;
		}
		if (this.options.exclude) {
			identifier += `|exclude: ${this._prettyRegExp(
				this.options.exclude,
				false
			)}`;
		}
		if (this.options.referencedExports) {
			identifier += `|referencedExports: ${JSON.stringify(
				this.options.referencedExports
			)}`;
		}
		if (this.options.chunkName) {
			identifier += `|chunkName: ${this.options.chunkName}`;
		}
		if (this.options.groupOptions) {
			identifier += `|groupOptions: ${JSON.stringify(
				this.options.groupOptions
			)}`;
		}
		if (this.options.namespaceObject === "strict") {
			identifier += "|strict namespace object";
		} else if (this.options.namespaceObject) {
			identifier += "|namespace object";
		}
		if (this.options.attributes) {
			identifier += `|importAttributes: ${JSON.stringify(this.options.attributes)}`;
		}
		if (this.options.phase) {
			identifier += `|importPhase: ${this.options.phase}`;
		}
		if (this.layer) {
			identifier += `|layer: ${this.layer}`;
		}
		return identifier;
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
		/** @type {string} */
		let identifier;

		if (this.context) {
			identifier = `${requestShortener.shorten(this.context)}/`;
		} else if (
			typeof this.options.resource === "string" ||
			this.options.resource === false
		) {
			identifier = `${requestShortener.shorten(`${this.options.resource}`)}/`;
		} else {
			identifier = this.options.resource
				.map((r) => `${requestShortener.shorten(r)}/`)
				.join(" ");
		}
		if (this.options.resourceQuery) {
			identifier += ` ${this.options.resourceQuery}`;
		}
		if (this.options.mode) {
			identifier += ` ${this.options.mode}`;
		}
		if (!this.options.recursive) {
			identifier += " nonrecursive";
		}
		if (this.options.addon) {
			identifier += ` ${requestShortener.shorten(this.options.addon)}`;
		}
		if (this.options.regExp) {
			identifier += ` ${this._prettyRegExp(this.options.regExp)}`;
		}
		if (this.options.include) {
			identifier += ` include: ${this._prettyRegExp(this.options.include)}`;
		}
		if (this.options.exclude) {
			identifier += ` exclude: ${this._prettyRegExp(this.options.exclude)}`;
		}
		if (this.options.referencedExports) {
			identifier += ` referencedExports: ${this.options.referencedExports
				.map((e) => e.join("."))
				.join(", ")}`;
		}
		if (this.options.chunkName) {
			identifier += ` chunkName: ${this.options.chunkName}`;
		}
		if (this.options.groupOptions) {
			const groupOptions = this.options.groupOptions;
			for (const key of Object.keys(groupOptions)) {
				identifier += ` ${key}: ${
					groupOptions[/** @type {keyof RawChunkGroupOptions} */ (key)]
				}`;
			}
		}
		if (this.options.namespaceObject === "strict") {
			identifier += " strict namespace object";
		} else if (this.options.namespaceObject) {
			identifier += " namespace object";
		}

		return identifier;
	}

	/**
	 * Gets the library identifier.
	 * @param {LibIdentOptions} options options
	 * @returns {LibIdent | null} an identifier for library inclusion
	 */
	libIdent(options) {
		/** @type {string} */
		let identifier;

		if (this.context) {
			identifier = contextify(
				options.context,
				this.context,
				options.associatedObjectForCache
			);
		} else if (typeof this.options.resource === "string") {
			identifier = contextify(
				options.context,
				this.options.resource,
				options.associatedObjectForCache
			);
		} else if (this.options.resource === false) {
			identifier = "false";
		} else {
			identifier = this.options.resource
				.map((res) =>
					contextify(options.context, res, options.associatedObjectForCache)
				)
				.join(" ");
		}

		if (this.layer) identifier = `(${this.layer})/${identifier}`;
		if (this.options.mode) {
			identifier += ` ${this.options.mode}`;
		}
		if (this.options.recursive) {
			identifier += " recursive";
		}
		if (this.options.addon) {
			identifier += ` ${contextify(
				options.context,
				this.options.addon,
				options.associatedObjectForCache
			)}`;
		}
		if (this.options.regExp) {
			identifier += ` ${this._prettyRegExp(this.options.regExp)}`;
		}
		if (this.options.include) {
			identifier += ` include: ${this._prettyRegExp(this.options.include)}`;
		}
		if (this.options.exclude) {
			identifier += ` exclude: ${this._prettyRegExp(this.options.exclude)}`;
		}
		if (this.options.referencedExports) {
			identifier += ` referencedExports: ${this.options.referencedExports
				.map((e) => e.join("."))
				.join(", ")}`;
		}

		return identifier;
	}

	/**
	 * Invalidates the cached state associated with this value.
	 * @returns {void}
	 */
	invalidateBuild() {
		this._forceBuild = true;
	}

	/**
	 * Checks whether the module needs to be rebuilt for the current build state.
	 * @param {NeedBuildContext} context context info
	 * @param {NeedBuildCallback} callback callback function, returns true, if the module needs a rebuild
	 * @returns {void}
	 */
	needBuild({ fileSystemInfo }, callback) {
		// build if enforced
		if (this._forceBuild) return callback(null, true);

		const buildInfo = /** @type {BuildInfo} */ (this.buildInfo);

		// always build when we have no snapshot and context
		if (!buildInfo.snapshot) {
			return callback(null, Boolean(this.context || this.options.resource));
		}

		fileSystemInfo.checkSnapshotValid(buildInfo.snapshot, (err, valid) => {
			callback(err, !valid);
		});
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
		this._forceBuild = false;
		/** @type {BuildMeta} */
		this.buildMeta = {
			exportsType: "default",
			defaultObject: "redirect-warn"
		};
		this.buildInfo = {
			snapshot: undefined
		};
		this.dependencies.length = 0;
		this.blocks.length = 0;
		const startTime = Date.now();
		/** @type {ResolveDependencies} */
		(this.resolveDependencies)(fs, this.options, (err, dependencies) => {
			if (err) {
				return callback(
					makeWebpackError(err, "ContextModule.resolveDependencies")
				);
			}

			// abort if something failed
			// this will create an empty context
			if (!dependencies) {
				callback();
				return;
			}

			// enhance dependencies with meta info
			for (const dep of dependencies) {
				dep.loc = {
					name: dep.userRequest
				};
				dep.request = this.options.addon + dep.request;
			}
			dependencies.sort(
				concatComparators(
					compareSelect((a) => a.loc, compareLocations),
					keepOriginalOrder(this.dependencies)
				)
			);

			if (this.options.mode === "sync" || this.options.mode === "eager") {
				// if we have an sync or eager context
				// just add all dependencies and continue
				this.dependencies = dependencies;
			} else if (this.options.mode === "lazy-once") {
				// for the lazy-once mode create a new async dependency block
				// and add that block to this context
				if (dependencies.length > 0) {
					const block = new AsyncDependenciesBlock({
						...this.options.groupOptions,
						name: this.options.chunkName
					});
					for (const dep of dependencies) {
						block.addDependency(dep);
					}
					this.addBlock(block);
				}
			} else if (
				this.options.mode === "weak" ||
				this.options.mode === "async-weak"
			) {
				// we mark all dependencies as weak
				for (const dep of dependencies) {
					dep.weak = true;
				}
				this.dependencies = dependencies;
			} else if (this.options.mode === "lazy") {
				// if we are lazy create a new async dependency block per dependency
				// and add all blocks to this context
				let index = 0;
				for (const dep of dependencies) {
					let chunkName = this.options.chunkName;
					if (chunkName) {
						if (!/\[(?:index|request)\]/.test(chunkName)) {
							chunkName += "[index]";
						}
						chunkName = chunkName.replace(/\[index\]/g, `${index++}`);
						chunkName = chunkName.replace(
							/\[request\]/g,
							Template.toPath(dep.userRequest)
						);
					}
					const block = new AsyncDependenciesBlock(
						{
							...this.options.groupOptions,
							name: chunkName
						},
						dep.loc,
						dep.userRequest
					);
					block.addDependency(dep);
					this.addBlock(block);
				}
			} else {
				callback(
					new WebpackError(`Unsupported mode "${this.options.mode}" in context`)
				);
				return;
			}
			if (!this.context && !this.options.resource) return callback();

			const snapshotOptions = compilation.options.snapshot.contextModule;

			compilation.fileSystemInfo.createSnapshot(
				startTime,
				null,
				this.context
					? [this.context]
					: typeof this.options.resource === "string"
						? [this.options.resource]
						: /** @type {string[]} */ (this.options.resource),
				null,
				snapshotOptions,
				(err, snapshot) => {
					if (err) return callback(err);
					/** @type {BuildInfo} */
					(this.buildInfo).snapshot = snapshot;
					callback();
				}
			);
		});
	}

	/**
	 * Adds the provided file dependencies to the module.
	 * @param {FileSystemDependencies} fileDependencies set where file dependencies are added to
	 * @param {FileSystemDependencies} contextDependencies set where context dependencies are added to
	 * @param {FileSystemDependencies} missingDependencies set where missing dependencies are added to
	 * @param {FileSystemDependencies} buildDependencies set where build dependencies are added to
	 */
	addCacheDependencies(
		fileDependencies,
		contextDependencies,
		missingDependencies,
		buildDependencies
	) {
		if (this.context) {
			contextDependencies.add(this.context);
		} else if (typeof this.options.resource === "string") {
			contextDependencies.add(this.options.resource);
		} else if (this.options.resource === false) {
			// Do nothing
		} else {
			for (const res of this.options.resource) contextDependencies.add(res);
		}
	}

	/**
	 * @param {Dependency[]} dependencies all dependencies
	 * @param {ChunkGraph} chunkGraph chunk graph
	 * @returns {UserRequestMap} map with user requests
	 */
	getUserRequestMap(dependencies, chunkGraph) {
		const moduleGraph = chunkGraph.moduleGraph;
		// if we filter first we get a new array
		// therefore we don't need to create a clone of dependencies explicitly
		// therefore the order of this is !important!
		const sortedDependencies =
			/** @type {ContextElementDependency[]} */
			(dependencies)
				.filter((dependency) => moduleGraph.getModule(dependency))
				.sort((a, b) => {
					if (a.userRequest === b.userRequest) {
						return 0;
					}
					return a.userRequest < b.userRequest ? -1 : 1;
				});
		/** @type {UserRequestMap} */
		const map = Object.create(null);
		for (const dep of sortedDependencies) {
			const module = /** @type {Module} */ (moduleGraph.getModule(dep));
			map[dep.userRequest] =
				/** @type {ModuleId} */
				(chunkGraph.getModuleId(module));
		}
		return map;
	}

	/**
	 * @param {Dependency[]} dependencies all dependencies
	 * @param {ChunkGraph} chunkGraph chunk graph
	 * @returns {FakeMap | FakeMapType} fake map
	 */
	getFakeMap(dependencies, chunkGraph) {
		if (!this.options.namespaceObject) {
			return 9;
		}
		const moduleGraph = chunkGraph.moduleGraph;
		// bitfield
		let hasType = 0;
		const comparator = compareModulesById(chunkGraph);
		// if we filter first we get a new array
		// therefore we don't need to create a clone of dependencies explicitly
		// therefore the order of this is !important!
		const sortedModules = dependencies
			.map(
				(dependency) =>
					/** @type {Module} */ (moduleGraph.getModule(dependency))
			)
			.filter(Boolean)
			.sort(comparator);
		/** @type {FakeMap} */
		const fakeMap = Object.create(null);
		for (const module of sortedModules) {
			const exportsType = module.getExportsType(
				moduleGraph,
				this.options.namespaceObject === "strict"
			);
			const id = /** @type {ModuleId} */ (chunkGraph.getModuleId(module));
			switch (exportsType) {
				case "namespace":
					fakeMap[id] = 9;
					hasType |= 1;
					break;
				case "dynamic":
					fakeMap[id] = 7;
					hasType |= 2;
					break;
				case "default-only":
					fakeMap[id] = 1;
					hasType |= 4;
					break;
				case "default-with-named":
					fakeMap[id] = 3;
					hasType |= 8;
					break;
				default:
					throw new Error(`Unexpected exports type ${exportsType}`);
			}
		}
		if (hasType === 1) {
			return 9;
		}
		if (hasType === 2) {
			return 7;
		}
		if (hasType === 4) {
			return 1;
		}
		if (hasType === 8) {
			return 3;
		}
		if (hasType === 0) {
			return 9;
		}
		return fakeMap;
	}

	/**
	 * @param {FakeMap | FakeMapType} fakeMap fake map
	 * @returns {string} fake map init statement
	 */
	getFakeMapInitStatement(fakeMap) {
		return typeof fakeMap === "object"
			? `var fakeMap = ${JSON.stringify(fakeMap, null, "\t")};`
			: "";
	}

	/**
	 * @param {Dependency[]} dependencies all dependencies
	 * @param {ChunkGraph} chunkGraph chunk graph
	 * @returns {UserRequestsMap} map with user requests
	 */
	getModuleDeferredAsyncDepsMap(dependencies, chunkGraph) {
		const moduleGraph = chunkGraph.moduleGraph;
		const comparator = compareModulesById(chunkGraph);
		// if we filter first we get a new array
		// therefore we don't need to create a clone of dependencies explicitly
		// therefore the order of this is !important!
		const sortedModules = dependencies
			.map(
				(dependency) =>
					/** @type {Module} */ (moduleGraph.getModule(dependency))
			)
			.filter(Boolean)
			.sort(comparator);
		/** @type {UserRequestsMap} */
		const map = Object.create(null);
		for (const module of sortedModules) {
			if (!(/** @type {BuildMeta} */ (module.buildMeta).async)) {
				const id = /** @type {ModuleId} */ (chunkGraph.getModuleId(module));
				map[id] = Array.from(
					getOutgoingAsyncModules(chunkGraph.moduleGraph, module),
					(m) => chunkGraph.getModuleId(m)
				).filter((id) => id !== null);
			}
		}
		return map;
	}

	/**
	 * @param {false | UserRequestsMap} asyncDepsMap fake map
	 * @returns {string} async deps map init statement
	 */
	getModuleDeferredAsyncDepsMapInitStatement(asyncDepsMap) {
		return typeof asyncDepsMap === "object"
			? `var asyncDepsMap = ${JSON.stringify(asyncDepsMap, null, "\t")};`
			: "";
	}

	/**
	 * @param {FakeMapType} type type
	 * @param {boolean=} asyncModule is async module
	 * @returns {string} return result
	 */
	getReturn(type, asyncModule) {
		if (type === 9) {
			return `${RuntimeGlobals.require}(id)`;
		}
		return `${RuntimeGlobals.createFakeNamespaceObject}(id, ${type}${
			asyncModule ? " | 16" : ""
		})`;
	}

	/**
	 * @param {FakeMap | FakeMapType} fakeMap fake map
	 * @param {boolean=} asyncModule is async module
	 * @param {string=} asyncDeps async deps for deferred module
	 * @param {string=} fakeMapDataExpression fake map data expression
	 * @returns {string} module object source
	 */
	getReturnModuleObjectSource(
		fakeMap,
		asyncModule,
		asyncDeps,
		fakeMapDataExpression = "fakeMap[id]"
	) {
		const source =
			typeof fakeMap === "number"
				? this.getReturn(fakeMap, asyncModule)
				: `${RuntimeGlobals.createFakeNamespaceObject}(id, ${fakeMapDataExpression}${asyncModule ? " | 16" : ""})`;
		if (asyncDeps) {
			if (!asyncModule) {
				throw new Error("Must be async when module is deferred");
			}
			const type =
				typeof fakeMap === "number" ? fakeMap : fakeMapDataExpression;
			return `${asyncDeps} ? ${asyncDeps}.length ? ${RuntimeGlobals.deferredModuleAsyncTransitiveDependencies}(${asyncDeps}).then(${RuntimeGlobals.makeDeferredNamespaceObject}.bind(${RuntimeGlobals.require}, id, ${type} ^ 1, true)) : ${RuntimeGlobals.makeDeferredNamespaceObject}(id, ${type} ^ 1 | 16) : ${source}`;
		}
		return source;
	}

	/**
	 * @param {Dependency[]} dependencies dependencies
	 * @param {ModuleId} id module id
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @returns {string} source code
	 */
	getSyncSource(dependencies, id, chunkGraph) {
		const map = this.getUserRequestMap(dependencies, chunkGraph);
		const fakeMap = this.getFakeMap(dependencies, chunkGraph);
		const returnModuleObject = this.getReturnModuleObjectSource(fakeMap);

		return `var map = ${JSON.stringify(map, null, "\t")};
${this.getFakeMapInitStatement(fakeMap)}

function webpackContext(req) {
	var id = webpackContextResolve(req);
	return ${returnModuleObject};
}
function webpackContextResolve(req) {
	if(!${RuntimeGlobals.hasOwnProperty}(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = ${JSON.stringify(id)};`;
	}

	/**
	 * @param {Dependency[]} dependencies dependencies
	 * @param {ModuleId} id module id
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @returns {string} source code
	 */
	getWeakSyncSource(dependencies, id, chunkGraph) {
		const map = this.getUserRequestMap(dependencies, chunkGraph);
		const fakeMap = this.getFakeMap(dependencies, chunkGraph);
		const returnModuleObject = this.getReturnModuleObjectSource(fakeMap);

		return `var map = ${JSON.stringify(map, null, "\t")};
${this.getFakeMapInitStatement(fakeMap)}

function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!${RuntimeGlobals.moduleFactories}[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return ${returnModuleObject};
}
function webpackContextResolve(req) {
	if(!${RuntimeGlobals.hasOwnProperty}(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = ${JSON.stringify(id)};
module.exports = webpackContext;`;
	}

	/**
	 * @param {Dependency[]} dependencies dependencies
	 * @param {ModuleId} id module id
	 * @param {ImportPhaseType} phase import phase
	 * @param {object} context context
	 * @param {ChunkGraph} context.chunkGraph the chunk graph
	 * @param {RuntimeTemplate} context.runtimeTemplate the chunk graph
	 * @returns {string} source code
	 */
	getAsyncWeakSource(dependencies, id, phase, { chunkGraph, runtimeTemplate }) {
		const map = this.getUserRequestMap(dependencies, chunkGraph);
		const fakeMap = this.getFakeMap(dependencies, chunkGraph);
		const asyncDepsMap =
			ImportPhaseUtils.isDefer(phase) &&
			this.getModuleDeferredAsyncDepsMap(dependencies, chunkGraph);
		const returnModuleObject = this.getReturnModuleObjectSource(
			fakeMap,
			true,
			asyncDepsMap ? "asyncDepsMap[id]" : undefined
		);

		return `var map = ${JSON.stringify(map, null, "\t")};
${this.getFakeMapInitStatement(fakeMap)}
${this.getModuleDeferredAsyncDepsMapInitStatement(asyncDepsMap)}

function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(${runtimeTemplate.basicFunction(
		"id",
		[
			`if(!${RuntimeGlobals.moduleFactories}[id]) {`,
			Template.indent([
				'var e = new Error("Module \'" + req + "\' (\'" + id + "\') is not available (weak dependency)");',
				"e.code = 'MODULE_NOT_FOUND';",
				"throw e;"
			]),
			"}",
			`return ${returnModuleObject};`
		]
	)});
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(${runtimeTemplate.basicFunction("", [
		`if(!${RuntimeGlobals.hasOwnProperty}(map, req)) {`,
		Template.indent([
			'var e = new Error("Cannot find module \'" + req + "\'");',
			"e.code = 'MODULE_NOT_FOUND';",
			"throw e;"
		]),
		"}",
		"return map[req];"
	])});
}
webpackAsyncContext.keys = ${runtimeTemplate.returningFunction(
			"Object.keys(map)"
		)};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = ${JSON.stringify(id)};
module.exports = webpackAsyncContext;`;
	}

	/**
	 * @param {Dependency[]} dependencies dependencies
	 * @param {ModuleId} id module id
	 * @param {ImportPhaseType} phase import phase
	 * @param {object} context context
	 * @param {ChunkGraph} context.chunkGraph the chunk graph
	 * @param {RuntimeTemplate} context.runtimeTemplate the chunk graph
	 * @returns {string} source code
	 */
	getEagerSource(dependencies, id, phase, { chunkGraph, runtimeTemplate }) {
		const map = this.getUserRequestMap(dependencies, chunkGraph);
		const fakeMap = this.getFakeMap(dependencies, chunkGraph);
		const asyncDepsMap =
			ImportPhaseUtils.isDefer(phase) &&
			this.getModuleDeferredAsyncDepsMap(dependencies, chunkGraph);
		const thenFunction = runtimeTemplate.returningFunction(
			this.getReturnModuleObjectSource(
				fakeMap,
				true,
				asyncDepsMap ? "asyncDepsMap[id]" : undefined
			),
			"id"
		);

		return `var map = ${JSON.stringify(map, null, "\t")};
${this.getFakeMapInitStatement(fakeMap)}
${this.getModuleDeferredAsyncDepsMapInitStatement(asyncDepsMap)}

function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(${thenFunction});
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(${runtimeTemplate.basicFunction("", [
		`if(!${RuntimeGlobals.hasOwnProperty}(map, req)) {`,
		Template.indent([
			'var e = new Error("Cannot find module \'" + req + "\'");',
			"e.code = 'MODULE_NOT_FOUND';",
			"throw e;"
		]),
		"}",
		"return map[req];"
	])});
}
webpackAsyncContext.keys = ${runtimeTemplate.returningFunction(
			"Object.keys(map)"
		)};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = ${JSON.stringify(id)};
module.exports = webpackAsyncContext;`;
	}

	/**
	 * @param {AsyncDependenciesBlock} block block
	 * @param {Dependency[]} dependencies dependencies
	 * @param {ModuleId} id module id
	 * @param {ImportPhaseType} phase import phase
	 * @param {object} options options object
	 * @param {RuntimeTemplate} options.runtimeTemplate the runtime template
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @returns {string} source code
	 */
	getLazyOnceSource(
		block,
		dependencies,
		id,
		phase,
		{ runtimeTemplate, chunkGraph }
	) {
		const promise = runtimeTemplate.blockPromise({
			chunkGraph,
			block,
			message: "lazy-once context",
			/** @type {RuntimeRequirements} */
			runtimeRequirements: new Set()
		});
		const map = this.getUserRequestMap(dependencies, chunkGraph);
		const fakeMap = this.getFakeMap(dependencies, chunkGraph);
		const asyncDepsMap =
			ImportPhaseUtils.isDefer(phase) &&
			this.getModuleDeferredAsyncDepsMap(dependencies, chunkGraph);
		const thenFunction = runtimeTemplate.returningFunction(
			this.getReturnModuleObjectSource(
				fakeMap,
				true,
				asyncDepsMap ? "asyncDepsMap[id]" : undefined
			),
			"id"
		);

		return `var map = ${JSON.stringify(map, null, "\t")};
${this.getFakeMapInitStatement(fakeMap)}
${this.getModuleDeferredAsyncDepsMapInitStatement(asyncDepsMap)}

function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(${thenFunction});
}
function webpackAsyncContextResolve(req) {
	return ${promise}.then(${runtimeTemplate.basicFunction("", [
		`if(!${RuntimeGlobals.hasOwnProperty}(map, req)) {`,
		Template.indent([
			'var e = new Error("Cannot find module \'" + req + "\'");',
			"e.code = 'MODULE_NOT_FOUND';",
			"throw e;"
		]),
		"}",
		"return map[req];"
	])});
}
webpackAsyncContext.keys = ${runtimeTemplate.returningFunction(
			"Object.keys(map)"
		)};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = ${JSON.stringify(id)};
module.exports = webpackAsyncContext;`;
	}

	/**
	 * @param {AsyncDependenciesBlock[]} blocks blocks
	 * @param {ModuleId} id module id
	 * @param {ImportPhaseType} phase import phase
	 * @param {object} context context
	 * @param {ChunkGraph} context.chunkGraph the chunk graph
	 * @param {RuntimeTemplate} context.runtimeTemplate the chunk graph
	 * @returns {string} source code
	 */
	getLazySource(blocks, id, phase, { chunkGraph, runtimeTemplate }) {
		const moduleGraph = chunkGraph.moduleGraph;
		let hasMultipleOrNoChunks = false;
		let hasNoChunk = true;
		let hasNoModuleDeferred = true;
		const fakeMap = this.getFakeMap(
			blocks.map((b) => b.dependencies[0]),
			chunkGraph
		);
		const hasFakeMap = typeof fakeMap === "object";
		/** @typedef {{ userRequest: string, dependency: ContextElementDependency, chunks: undefined | Chunk[], module: Module, block: AsyncDependenciesBlock, asyncDeps: undefined | ModuleId[] }} Item */
		/**
		 * @type {Item[]}
		 */
		const items = blocks
			.map((block) => {
				const dependency =
					/** @type {ContextElementDependency} */
					(block.dependencies[0]);
				return {
					dependency,
					module: /** @type {Module} */ (moduleGraph.getModule(dependency)),
					block,
					userRequest: dependency.userRequest,
					chunks: undefined,
					asyncDeps: undefined
				};
			})
			.filter((item) => item.module);
		for (const item of items) {
			const chunkGroup = chunkGraph.getBlockChunkGroup(item.block);
			const chunks = (chunkGroup && chunkGroup.chunks) || [];
			item.chunks = chunks;
			if (chunks.length > 0) {
				hasNoChunk = false;
			}
			if (chunks.length !== 1) {
				hasMultipleOrNoChunks = true;
			}
			const isModuleDeferred =
				ImportPhaseUtils.isDefer(phase) &&
				!(/** @type {BuildMeta} */ (item.module.buildMeta).async);
			if (isModuleDeferred) {
				const asyncDeps = Array.from(
					getOutgoingAsyncModules(chunkGraph.moduleGraph, item.module),
					(m) => chunkGraph.getModuleId(m)
				).filter((id) => id !== null);
				item.asyncDeps = asyncDeps;
				hasNoModuleDeferred = false;
			}
		}
		const shortMode = hasNoChunk && hasNoModuleDeferred && !hasFakeMap;
		const sortedItems = items.sort((a, b) => {
			if (a.userRequest === b.userRequest) return 0;
			return a.userRequest < b.userRequest ? -1 : 1;
		});
		/** @type {Record<string, ModuleId | (ModuleId | FakeMapType | ChunkId[] | (ModuleId[] | undefined))[]>} */
		const map = Object.create(null);
		for (const item of sortedItems) {
			const moduleId =
				/** @type {ModuleId} */
				(chunkGraph.getModuleId(item.module));
			if (shortMode) {
				map[item.userRequest] = moduleId;
			} else {
				/** @type {(ModuleId | FakeMapType | ChunkId[] | (ModuleId[] | undefined))[]} */
				const array = [moduleId];
				if (hasFakeMap) {
					array.push(fakeMap[moduleId]);
				}
				if (!hasNoChunk) {
					array.push(
						/** @type {Chunk[]} */ (item.chunks).map(
							(chunk) => /** @type {ChunkId} */ (chunk.id)
						)
					);
				}
				if (!hasNoModuleDeferred) {
					array.push(item.asyncDeps);
				}
				map[item.userRequest] = array;
			}
		}

		const chunksPosition = hasFakeMap ? 2 : 1;
		const asyncDepsPosition = chunksPosition + 1;
		const requestPrefix = hasNoChunk
			? "Promise.resolve()"
			: hasMultipleOrNoChunks
				? `Promise.all(ids[${chunksPosition}].map(${RuntimeGlobals.ensureChunk}))`
				: `${RuntimeGlobals.ensureChunk}(ids[${chunksPosition}][0])`;
		const returnModuleObject = this.getReturnModuleObjectSource(
			fakeMap,
			true,
			hasNoModuleDeferred ? undefined : `ids[${asyncDepsPosition}]`,
			shortMode ? "invalid" : "ids[1]"
		);

		const webpackAsyncContext =
			requestPrefix === "Promise.resolve()"
				? `
function webpackAsyncContext(req) {
	return Promise.resolve().then(${runtimeTemplate.basicFunction("", [
		`if(!${RuntimeGlobals.hasOwnProperty}(map, req)) {`,
		Template.indent([
			'var e = new Error("Cannot find module \'" + req + "\'");',
			"e.code = 'MODULE_NOT_FOUND';",
			"throw e;"
		]),
		"}",
		shortMode ? "var id = map[req];" : "var ids = map[req], id = ids[0];",
		`return ${returnModuleObject};`
	])});
}`
				: `function webpackAsyncContext(req) {
	try {
		if(!${RuntimeGlobals.hasOwnProperty}(map, req)) {
			return Promise.resolve().then(${runtimeTemplate.basicFunction("", [
				'var e = new Error("Cannot find module \'" + req + "\'");',
				"e.code = 'MODULE_NOT_FOUND';",
				"throw e;"
			])});
		}
	} catch(err) {
		return Promise.reject(err);
	}

	var ids = map[req], id = ids[0];
	return ${requestPrefix}.then(${runtimeTemplate.returningFunction(returnModuleObject)});
}`;

		return `var map = ${JSON.stringify(map, null, "\t")};
${webpackAsyncContext}
webpackAsyncContext.keys = ${runtimeTemplate.returningFunction(
			"Object.keys(map)"
		)};
webpackAsyncContext.id = ${JSON.stringify(id)};
module.exports = webpackAsyncContext;`;
	}

	/**
	 * @param {ModuleId} id module id
	 * @param {RuntimeTemplate} runtimeTemplate runtime template
	 * @returns {string} source for empty async context
	 */
	getSourceForEmptyContext(id, runtimeTemplate) {
		return `function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = ${runtimeTemplate.returningFunction("[]")};
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = ${JSON.stringify(id)};
module.exports = webpackEmptyContext;`;
	}

	/**
	 * @param {ModuleId} id module id
	 * @param {RuntimeTemplate} runtimeTemplate runtime template
	 * @returns {string} source for empty async context
	 */
	getSourceForEmptyAsyncContext(id, runtimeTemplate) {
		return `function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(${runtimeTemplate.basicFunction("", [
		'var e = new Error("Cannot find module \'" + req + "\'");',
		"e.code = 'MODULE_NOT_FOUND';",
		"throw e;"
	])});
}
webpackEmptyAsyncContext.keys = ${runtimeTemplate.returningFunction("[]")};
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = ${JSON.stringify(id)};
module.exports = webpackEmptyAsyncContext;`;
	}

	/**
	 * @param {string} asyncMode module mode
	 * @param {ImportPhaseType} phase import phase
	 * @param {CodeGenerationContext} context context info
	 * @returns {string} the source code
	 */
	getSourceString(asyncMode, phase, { runtimeTemplate, chunkGraph }) {
		const id = /** @type {ModuleId} */ (chunkGraph.getModuleId(this));
		if (asyncMode === "lazy") {
			if (this.blocks && this.blocks.length > 0) {
				return this.getLazySource(this.blocks, id, phase, {
					runtimeTemplate,
					chunkGraph
				});
			}
			return this.getSourceForEmptyAsyncContext(id, runtimeTemplate);
		}
		if (asyncMode === "eager") {
			if (this.dependencies && this.dependencies.length > 0) {
				return this.getEagerSource(this.dependencies, id, phase, {
					chunkGraph,
					runtimeTemplate
				});
			}
			return this.getSourceForEmptyAsyncContext(id, runtimeTemplate);
		}
		if (asyncMode === "lazy-once") {
			const block = this.blocks[0];
			if (block) {
				return this.getLazyOnceSource(block, block.dependencies, id, phase, {
					runtimeTemplate,
					chunkGraph
				});
			}
			return this.getSourceForEmptyAsyncContext(id, runtimeTemplate);
		}
		if (asyncMode === "async-weak") {
			if (this.dependencies && this.dependencies.length > 0) {
				return this.getAsyncWeakSource(this.dependencies, id, phase, {
					chunkGraph,
					runtimeTemplate
				});
			}
			return this.getSourceForEmptyAsyncContext(id, runtimeTemplate);
		}
		if (
			asyncMode === "weak" &&
			this.dependencies &&
			this.dependencies.length > 0
		) {
			return this.getWeakSyncSource(this.dependencies, id, chunkGraph);
		}
		if (this.dependencies && this.dependencies.length > 0) {
			return this.getSyncSource(this.dependencies, id, chunkGraph);
		}
		return this.getSourceForEmptyContext(id, runtimeTemplate);
	}

	/**
	 * @param {string} sourceString source content
	 * @param {Compilation=} compilation the compilation
	 * @returns {Source} generated source
	 */
	getSource(sourceString, compilation) {
		if (this.useSourceMap || this.useSimpleSourceMap) {
			return new OriginalSource(
				sourceString,
				`webpack://${makePathsRelative(
					(compilation && compilation.compiler.context) || "",
					this.identifier(),
					compilation && compilation.compiler.root
				)}`
			);
		}
		return new RawSource(sourceString);
	}

	/**
	 * Generates code and runtime requirements for this module.
	 * @param {CodeGenerationContext} context context for code generation
	 * @returns {CodeGenerationResult} result
	 */
	codeGeneration(context) {
		const { chunkGraph, compilation } = context;

		/** @type {Sources} */
		const sources = new Map();
		sources.set(
			JAVASCRIPT_TYPE,
			this.getSource(
				this.getSourceString(
					this.options.mode,
					this.options.phase || ImportPhase.Evaluation,
					context
				),
				compilation
			)
		);
		/** @type {RuntimeRequirements} */
		const set = new Set();
		const allDeps =
			this.dependencies.length > 0
				? /** @type {ContextElementDependency[]} */ [...this.dependencies]
				: [];
		for (const block of this.blocks) {
			for (const dep of block.dependencies) {
				allDeps.push(/** @type {ContextElementDependency} */ (dep));
			}
		}
		set.add(RuntimeGlobals.module);
		set.add(RuntimeGlobals.hasOwnProperty);
		if (allDeps.length > 0) {
			const asyncMode = this.options.mode;
			set.add(RuntimeGlobals.require);
			if (asyncMode === "weak") {
				set.add(RuntimeGlobals.moduleFactories);
			} else if (asyncMode === "async-weak") {
				set.add(RuntimeGlobals.moduleFactories);
				set.add(RuntimeGlobals.ensureChunk);
			} else if (asyncMode === "lazy" || asyncMode === "lazy-once") {
				set.add(RuntimeGlobals.ensureChunk);
			}
			if (this.getFakeMap(allDeps, chunkGraph) !== 9) {
				set.add(RuntimeGlobals.createFakeNamespaceObject);
			}
			if (
				ImportPhaseUtils.isDefer(this.options.phase || ImportPhase.Evaluation)
			) {
				set.add(RuntimeGlobals.makeDeferredNamespaceObject);
			}
		}
		return {
			sources,
			runtimeRequirements: set
		};
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {string=} type the source type for which the size should be estimated
	 * @returns {number} the estimated size of the module (must be non-zero)
	 */
	size(type) {
		// base penalty
		let size = 160;

		// if we don't have dependencies we stop here.
		for (const dependency of this.dependencies) {
			const element = /** @type {ContextElementDependency} */ (dependency);
			size += 5 + element.userRequest.length;
		}
		return size;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this._identifier);
		write(this._forceBuild);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this._identifier = read();
		this._forceBuild = read();
		super.deserialize(context);
	}
}

makeSerializable(ContextModule, "webpack/lib/ContextModule");

module.exports = ContextModule;
