/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const asyncLib = require("neo-async");
const { AsyncSeriesWaterfallHook, SyncWaterfallHook } = require("tapable");
const ContextModule = require("./ContextModule");
const ModuleFactory = require("./ModuleFactory");
const ContextElementDependency = require("./dependencies/ContextElementDependency");
const LazySet = require("./util/LazySet");
const { cachedSetProperty } = require("./util/cleverMerge");
const { createFakeHook } = require("./util/deprecation");
const { join } = require("./util/fs");

/** @typedef {import("./ContextModule").ContextModuleOptions} ContextModuleOptions */
/** @typedef {import("./ContextModule").ResolveDependenciesCallback} ResolveDependenciesCallback */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("./ModuleFactory").ModuleFactoryResult} ModuleFactoryResult */
/** @typedef {import("./ResolverFactory")} ResolverFactory */
/** @typedef {import("./dependencies/ContextDependency")} ContextDependency */
/** @typedef {import("enhanced-resolve").ResolveRequest} ResolveRequest */
/**
 * @template T
 * @typedef {import("./util/deprecation").FakeHook<T>} FakeHook<T>
 */
/** @typedef {import("./util/fs").IStats} IStats */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {{ context: string, request: string }} ContextAlternativeRequest */

const EMPTY_RESOLVE_OPTIONS = {};

module.exports = class ContextModuleFactory extends ModuleFactory {
	/**
	 * @param {ResolverFactory} resolverFactory resolverFactory
	 */
	constructor(resolverFactory) {
		super();
		/** @type {AsyncSeriesWaterfallHook<[ContextAlternativeRequest[], ContextModuleOptions]>} */
		const alternativeRequests = new AsyncSeriesWaterfallHook([
			"modules",
			"options"
		]);
		this.hooks = Object.freeze({
			/** @type {AsyncSeriesWaterfallHook<[TODO]>} */
			beforeResolve: new AsyncSeriesWaterfallHook(["data"]),
			/** @type {AsyncSeriesWaterfallHook<[TODO]>} */
			afterResolve: new AsyncSeriesWaterfallHook(["data"]),
			/** @type {SyncWaterfallHook<[string[]]>} */
			contextModuleFiles: new SyncWaterfallHook(["files"]),
			/** @type {FakeHook<Pick<AsyncSeriesWaterfallHook<[ContextAlternativeRequest[]]>, "tap" | "tapAsync" | "tapPromise" | "name">>} */
			alternatives: createFakeHook(
				{
					name: "alternatives",
					/** @type {AsyncSeriesWaterfallHook<[ContextAlternativeRequest[]]>["intercept"]} */
					intercept: interceptor => {
						throw new Error(
							"Intercepting fake hook ContextModuleFactory.hooks.alternatives is not possible, use ContextModuleFactory.hooks.alternativeRequests instead"
						);
					},
					/** @type {AsyncSeriesWaterfallHook<[ContextAlternativeRequest[]]>["tap"]} */
					tap: (options, fn) => {
						alternativeRequests.tap(options, fn);
					},
					/** @type {AsyncSeriesWaterfallHook<[ContextAlternativeRequest[]]>["tapAsync"]} */
					tapAsync: (options, fn) => {
						alternativeRequests.tapAsync(options, (items, _options, callback) =>
							fn(items, callback)
						);
					},
					/** @type {AsyncSeriesWaterfallHook<[ContextAlternativeRequest[]]>["tapPromise"]} */
					tapPromise: (options, fn) => {
						alternativeRequests.tapPromise(options, fn);
					}
				},
				"ContextModuleFactory.hooks.alternatives has deprecated in favor of ContextModuleFactory.hooks.alternativeRequests with an additional options argument.",
				"DEP_WEBPACK_CONTEXT_MODULE_FACTORY_ALTERNATIVES"
			),
			alternativeRequests
		});
		this.resolverFactory = resolverFactory;
	}

	/**
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {function((Error | null)=, ModuleFactoryResult=): void} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		const context = data.context;
		const dependencies = data.dependencies;
		const resolveOptions = data.resolveOptions;
		const dependency = /** @type {ContextDependency} */ (dependencies[0]);
		const fileDependencies = new LazySet();
		const missingDependencies = new LazySet();
		const contextDependencies = new LazySet();
		this.hooks.beforeResolve.callAsync(
			{
				context,
				dependencies,
				layer: data.contextInfo.issuerLayer,
				resolveOptions,
				fileDependencies,
				missingDependencies,
				contextDependencies,
				...dependency.options
			},
			(err, beforeResolveResult) => {
				if (err) {
					return callback(err, {
						fileDependencies,
						missingDependencies,
						contextDependencies
					});
				}

				// Ignored
				if (!beforeResolveResult) {
					return callback(null, {
						fileDependencies,
						missingDependencies,
						contextDependencies
					});
				}

				const context = beforeResolveResult.context;
				const request = beforeResolveResult.request;
				const resolveOptions = beforeResolveResult.resolveOptions;

				let loaders;
				let resource;
				let loadersPrefix = "";
				const idx = request.lastIndexOf("!");
				if (idx >= 0) {
					let loadersRequest = request.slice(0, idx + 1);
					let i;
					for (
						i = 0;
						i < loadersRequest.length && loadersRequest[i] === "!";
						i++
					) {
						loadersPrefix += "!";
					}
					loadersRequest = loadersRequest
						.slice(i)
						.replace(/!+$/, "")
						.replace(/!!+/g, "!");
					loaders = loadersRequest === "" ? [] : loadersRequest.split("!");
					resource = request.slice(idx + 1);
				} else {
					loaders = [];
					resource = request;
				}

				const contextResolver = this.resolverFactory.get(
					"context",
					dependencies.length > 0
						? cachedSetProperty(
								resolveOptions || EMPTY_RESOLVE_OPTIONS,
								"dependencyType",
								dependencies[0].category
							)
						: resolveOptions
				);
				const loaderResolver = this.resolverFactory.get("loader");

				asyncLib.parallel(
					[
						callback => {
							const results = /** @type ResolveRequest[] */ ([]);
							/**
							 * @param {ResolveRequest} obj obj
							 * @returns {void}
							 */
							const yield_ = obj => {
								results.push(obj);
							};

							contextResolver.resolve(
								{},
								context,
								resource,
								{
									fileDependencies,
									missingDependencies,
									contextDependencies,
									yield: yield_
								},
								err => {
									if (err) return callback(err);
									callback(null, results);
								}
							);
						},
						callback => {
							asyncLib.map(
								loaders,
								(loader, callback) => {
									loaderResolver.resolve(
										{},
										context,
										loader,
										{
											fileDependencies,
											missingDependencies,
											contextDependencies
										},
										(err, result) => {
											if (err) return callback(err);
											callback(null, /** @type {string} */ (result));
										}
									);
								},
								callback
							);
						}
					],
					(err, result) => {
						if (err) {
							return callback(err, {
								fileDependencies,
								missingDependencies,
								contextDependencies
							});
						}
						let [contextResult, loaderResult] =
							/** @type {[ResolveRequest[], string[]]} */ (result);
						if (contextResult.length > 1) {
							const first = contextResult[0];
							contextResult = contextResult.filter(r => r.path);
							if (contextResult.length === 0) contextResult.push(first);
						}
						this.hooks.afterResolve.callAsync(
							{
								addon:
									loadersPrefix +
									loaderResult.join("!") +
									(loaderResult.length > 0 ? "!" : ""),
								resource:
									contextResult.length > 1
										? contextResult.map(r => r.path)
										: contextResult[0].path,
								resolveDependencies: this.resolveDependencies.bind(this),
								resourceQuery: contextResult[0].query,
								resourceFragment: contextResult[0].fragment,
								...beforeResolveResult
							},
							(err, result) => {
								if (err) {
									return callback(err, {
										fileDependencies,
										missingDependencies,
										contextDependencies
									});
								}

								// Ignored
								if (!result) {
									return callback(null, {
										fileDependencies,
										missingDependencies,
										contextDependencies
									});
								}

								return callback(null, {
									module: new ContextModule(result.resolveDependencies, result),
									fileDependencies,
									missingDependencies,
									contextDependencies
								});
							}
						);
					}
				);
			}
		);
	}

	/**
	 * @param {InputFileSystem} fs file system
	 * @param {ContextModuleOptions} options options
	 * @param {ResolveDependenciesCallback} callback callback function
	 * @returns {void}
	 */
	resolveDependencies(fs, options, callback) {
		const cmf = this;
		const {
			resource,
			resourceQuery,
			resourceFragment,
			recursive,
			regExp,
			include,
			exclude,
			referencedExports,
			category,
			typePrefix,
			attributes
		} = options;
		if (!regExp || !resource) return callback(null, []);

		/**
		 * @param {string} ctx context
		 * @param {string} directory directory
		 * @param {Set<string>} visited visited
		 * @param {ResolveDependenciesCallback} callback callback
		 */
		const addDirectoryChecked = (ctx, directory, visited, callback) => {
			/** @type {NonNullable<InputFileSystem["realpath"]>} */
			(fs.realpath)(directory, (err, _realPath) => {
				if (err) return callback(err);
				const realPath = /** @type {string} */ (_realPath);
				if (visited.has(realPath)) return callback(null, []);
				/** @type {Set<string> | undefined} */
				let recursionStack;
				addDirectory(
					ctx,
					directory,
					(_, dir, callback) => {
						if (recursionStack === undefined) {
							recursionStack = new Set(visited);
							recursionStack.add(realPath);
						}
						addDirectoryChecked(ctx, dir, recursionStack, callback);
					},
					callback
				);
			});
		};

		/**
		 * @param {string} ctx context
		 * @param {string} directory directory
		 * @param {function(string, string, function(): void): void} addSubDirectory addSubDirectoryFn
		 * @param {ResolveDependenciesCallback} callback callback
		 */
		const addDirectory = (ctx, directory, addSubDirectory, callback) => {
			fs.readdir(directory, (err, files) => {
				if (err) return callback(err);
				const processedFiles = cmf.hooks.contextModuleFiles.call(
					/** @type {string[]} */ (files).map(file => file.normalize("NFC"))
				);
				if (!processedFiles || processedFiles.length === 0)
					return callback(null, []);
				asyncLib.map(
					processedFiles.filter(p => p.indexOf(".") !== 0),
					(segment, callback) => {
						const subResource = join(fs, directory, segment);

						if (!exclude || !subResource.match(exclude)) {
							fs.stat(subResource, (err, _stat) => {
								if (err) {
									if (err.code === "ENOENT") {
										// ENOENT is ok here because the file may have been deleted between
										// the readdir and stat calls.
										return callback();
									}
									return callback(err);
								}

								const stat = /** @type {IStats} */ (_stat);

								if (stat.isDirectory()) {
									if (!recursive) return callback();
									addSubDirectory(ctx, subResource, callback);
								} else if (
									stat.isFile() &&
									(!include || subResource.match(include))
								) {
									/** @type {{ context: string, request: string }} */
									const obj = {
										context: ctx,
										request: `.${subResource.slice(ctx.length).replace(/\\/g, "/")}`
									};

									this.hooks.alternativeRequests.callAsync(
										[obj],
										options,
										(err, alternatives) => {
											if (err) return callback(err);
											callback(
												null,
												/** @type {ContextAlternativeRequest[]} */
												(alternatives)
													.filter(obj =>
														regExp.test(/** @type {string} */ (obj.request))
													)
													.map(obj => {
														const dep = new ContextElementDependency(
															`${obj.request}${resourceQuery}${resourceFragment}`,
															obj.request,
															typePrefix,
															/** @type {string} */
															(category),
															referencedExports,
															/** @type {TODO} */
															(obj.context),
															attributes
														);
														dep.optional = true;
														return dep;
													})
											);
										}
									);
								} else {
									callback();
								}
							});
						} else {
							callback();
						}
					},
					(err, result) => {
						if (err) return callback(err);

						if (!result) return callback(null, []);

						const flattenedResult = [];

						for (const item of result) {
							if (item) flattenedResult.push(...item);
						}

						callback(null, flattenedResult);
					}
				);
			});
		};

		/**
		 * @param {string} ctx context
		 * @param {string} dir dir
		 * @param {ResolveDependenciesCallback} callback callback
		 * @returns {void}
		 */
		const addSubDirectory = (ctx, dir, callback) =>
			addDirectory(ctx, dir, addSubDirectory, callback);

		/**
		 * @param {string} resource resource
		 * @param {ResolveDependenciesCallback} callback callback
		 */
		const visitResource = (resource, callback) => {
			if (typeof fs.realpath === "function") {
				addDirectoryChecked(resource, resource, new Set(), callback);
			} else {
				addDirectory(resource, resource, addSubDirectory, callback);
			}
		};

		if (typeof resource === "string") {
			visitResource(resource, callback);
		} else {
			asyncLib.map(resource, visitResource, (err, _result) => {
				if (err) return callback(err);
				const result = /** @type {ContextElementDependency[][]} */ (_result);

				// result dependencies should have unique userRequest
				// ordered by resolve result
				/** @type {Set<string>} */
				const temp = new Set();
				/** @type {ContextElementDependency[]} */
				const res = [];
				for (let i = 0; i < result.length; i++) {
					const inner = result[i];
					for (const el of inner) {
						if (temp.has(el.userRequest)) continue;
						res.push(el);
						temp.add(el.userRequest);
					}
				}
				callback(null, res);
			});
		}
	}
};
