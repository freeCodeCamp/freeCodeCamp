/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const NormalModule = require("../NormalModule");
const LazySet = require("../util/LazySet");
const LoaderDependency = require("./LoaderDependency");
const LoaderImportDependency = require("./LoaderImportDependency");

/** @typedef {import("webpack-sources").RawSourceMap} RawSourceMap */
/** @typedef {import("../Compilation").DependencyConstructor} DependencyConstructor */
/** @typedef {import("../Compilation").ExecuteModuleExports} ExecuteModuleExports */
/** @typedef {import("../Compilation").ExecuteModuleResult} ExecuteModuleResult */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").FileSystemDependencies} FileSystemDependencies */

/**
 * Defines the import module callback callback.
 * @callback ImportModuleCallback
 * @param {(Error | null)=} err error object
 * @param {ExecuteModuleExports=} exports exports of the evaluated module
 * @returns {void}
 */

/**
 * Defines the import module options type used by this module.
 * @typedef {object} ImportModuleOptions
 * @property {string=} layer the target layer
 * @property {string=} publicPath the target public path
 * @property {string=} baseUri target base uri
 */

const PLUGIN_NAME = "LoaderPlugin";

class LoaderPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					LoaderDependency,
					normalModuleFactory
				);
				compilation.dependencyFactories.set(
					LoaderImportDependency,
					normalModuleFactory
				);
			}
		);

		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const moduleGraph = compilation.moduleGraph;
			NormalModule.getCompilationHooks(compilation).loader.tap(
				PLUGIN_NAME,
				(loaderContext) => {
					loaderContext.loadModule = (request, callback) => {
						const dep = new LoaderDependency(request);
						dep.loc = {
							name: request
						};
						const factory = compilation.dependencyFactories.get(
							/** @type {DependencyConstructor} */
							(dep.constructor)
						);
						if (factory === undefined) {
							return callback(
								new Error(
									`No module factory available for dependency type: ${dep.constructor.name}`
								)
							);
						}
						const oldFactorizeQueueContext =
							compilation.factorizeQueue.getContext();
						compilation.factorizeQueue.setContext("load-module");
						const oldAddModuleQueueContext =
							compilation.addModuleQueue.getContext();
						compilation.addModuleQueue.setContext("load-module");
						compilation.buildQueue.increaseParallelism();
						compilation.handleModuleCreation(
							{
								factory,
								dependencies: [dep],
								originModule:
									/** @type {NormalModule} */
									(loaderContext._module),
								context: loaderContext.context,
								recursive: false
							},
							(err) => {
								compilation.factorizeQueue.setContext(oldFactorizeQueueContext);
								compilation.addModuleQueue.setContext(oldAddModuleQueueContext);
								compilation.buildQueue.decreaseParallelism();
								if (err) {
									return callback(err);
								}
								const referencedModule = moduleGraph.getModule(dep);
								if (!referencedModule) {
									return callback(new Error("Cannot load the module"));
								}
								if (referencedModule.getNumberOfErrors() > 0) {
									return callback(
										new Error("The loaded module contains errors")
									);
								}
								const moduleSource = referencedModule.originalSource();
								if (!moduleSource) {
									return callback(
										new Error(
											"The module created for a LoaderDependency must have an original source"
										)
									);
								}
								/** @type {null | RawSourceMap} */
								let map;
								/** @type {string | Buffer | undefined} */
								let source;
								if (moduleSource.sourceAndMap) {
									const sourceAndMap = moduleSource.sourceAndMap();
									map = sourceAndMap.map;
									source = sourceAndMap.source;
								} else {
									map = moduleSource.map();
									source = moduleSource.source();
								}
								/** @type {FileSystemDependencies} */
								const fileDependencies = new LazySet();
								/** @type {FileSystemDependencies} */
								const contextDependencies = new LazySet();
								/** @type {FileSystemDependencies} */
								const missingDependencies = new LazySet();
								/** @type {FileSystemDependencies} */
								const buildDependencies = new LazySet();
								referencedModule.addCacheDependencies(
									fileDependencies,
									contextDependencies,
									missingDependencies,
									buildDependencies
								);

								for (const d of fileDependencies) {
									loaderContext.addDependency(d);
								}
								for (const d of contextDependencies) {
									loaderContext.addContextDependency(d);
								}
								for (const d of missingDependencies) {
									loaderContext.addMissingDependency(d);
								}
								for (const d of buildDependencies) {
									loaderContext.addBuildDependency(d);
								}
								return callback(null, source, map, referencedModule);
							}
						);
					};

					/**
					 * Processes the provided request.
					 * @param {string} request the request string to load the module from
					 * @param {ImportModuleOptions} options options
					 * @param {ImportModuleCallback} callback callback returning the exports
					 * @returns {void}
					 */
					const importModule = (request, options, callback) => {
						const dep = new LoaderImportDependency(request);
						dep.loc = {
							name: request
						};
						const factory = compilation.dependencyFactories.get(
							/** @type {DependencyConstructor} */
							(dep.constructor)
						);
						if (factory === undefined) {
							return callback(
								new Error(
									`No module factory available for dependency type: ${dep.constructor.name}`
								)
							);
						}

						const oldFactorizeQueueContext =
							compilation.factorizeQueue.getContext();
						compilation.factorizeQueue.setContext("import-module");
						const oldAddModuleQueueContext =
							compilation.addModuleQueue.getContext();
						compilation.addModuleQueue.setContext("import-module");
						compilation.buildQueue.increaseParallelism();
						compilation.handleModuleCreation(
							{
								factory,
								dependencies: [dep],
								originModule:
									/** @type {NormalModule} */
									(loaderContext._module),
								contextInfo: {
									issuerLayer: options.layer
								},
								context: loaderContext.context,
								connectOrigin: false,
								checkCycle: true
							},
							(err) => {
								compilation.factorizeQueue.setContext(oldFactorizeQueueContext);
								compilation.addModuleQueue.setContext(oldAddModuleQueueContext);
								compilation.buildQueue.decreaseParallelism();
								if (err) {
									return callback(err);
								}
								const referencedModule = moduleGraph.getModule(dep);
								if (!referencedModule) {
									return callback(new Error("Cannot load the module"));
								}
								compilation.buildQueue.increaseParallelism();
								compilation.executeModule(
									referencedModule,
									{
										entryOptions: {
											baseUri: options.baseUri,
											publicPath: options.publicPath
										}
									},
									(err, result) => {
										compilation.buildQueue.decreaseParallelism();
										if (err) return callback(err);
										const {
											fileDependencies,
											contextDependencies,
											missingDependencies,
											buildDependencies,
											cacheable,
											assets,
											exports
										} = /** @type {ExecuteModuleResult} */ (result);
										for (const d of fileDependencies) {
											loaderContext.addDependency(d);
										}
										for (const d of contextDependencies) {
											loaderContext.addContextDependency(d);
										}
										for (const d of missingDependencies) {
											loaderContext.addMissingDependency(d);
										}
										for (const d of buildDependencies) {
											loaderContext.addBuildDependency(d);
										}
										if (cacheable === false) loaderContext.cacheable(false);
										for (const [name, { source, info }] of assets) {
											const buildInfo =
												/** @type {BuildInfo} */
												(
													/** @type {NormalModule} */ (loaderContext._module)
														.buildInfo
												);
											if (!buildInfo.assets) {
												buildInfo.assets = Object.create(null);
												buildInfo.assetsInfo = new Map();
											}
											/** @type {NonNullable<BuildInfo["assets"]>} */
											(buildInfo.assets)[name] = source;
											/** @type {NonNullable<BuildInfo["assetsInfo"]>} */
											(buildInfo.assetsInfo).set(name, info);
										}
										callback(null, exports);
									}
								);
							}
						);
					};

					// @ts-expect-error overloading doesn't work
					loaderContext.importModule = (request, options, callback) => {
						if (!callback) {
							return new Promise((resolve, reject) => {
								importModule(request, options || {}, (err, result) => {
									if (err) reject(err);
									else resolve(result);
								});
							});
						}
						return importModule(request, options || {}, callback);
					};
				}
			);
		});
	}
}

module.exports = LoaderPlugin;
