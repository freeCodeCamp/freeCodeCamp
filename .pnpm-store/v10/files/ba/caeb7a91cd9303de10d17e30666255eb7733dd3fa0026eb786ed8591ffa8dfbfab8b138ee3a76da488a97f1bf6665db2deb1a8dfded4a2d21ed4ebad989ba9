/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleNotFoundError = require("../ModuleNotFoundError");
const RuntimeGlobals = require("../RuntimeGlobals");
const WebpackError = require("../WebpackError");
const { parseOptions } = require("../container/options");
const LazySet = require("../util/LazySet");
const { parseRange } = require("../util/semver");
const ConsumeSharedFallbackDependency = require("./ConsumeSharedFallbackDependency");
const ConsumeSharedModule = require("./ConsumeSharedModule");
const ConsumeSharedRuntimeModule = require("./ConsumeSharedRuntimeModule");
const ProvideForSharedDependency = require("./ProvideForSharedDependency");
const { resolveMatchedConfigs } = require("./resolveMatchedConfigs");
const {
	getDescriptionFile,
	getRequiredVersionFromDescriptionFile,
	isRequiredVersion
} = require("./utils");

/** @typedef {import("enhanced-resolve").ResolveContext} ResolveContext */
/** @typedef {import("../../declarations/plugins/sharing/ConsumeSharedPlugin").ConsumeSharedPluginOptions} ConsumeSharedPluginOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Compilation").FileSystemDependencies} FileSystemDependencies */
/** @typedef {import("../ResolverFactory").ResolveOptionsWithDependencyType} ResolveOptionsWithDependencyType */
/** @typedef {import("../util/semver").SemVerRange} SemVerRange */
/** @typedef {import("./ConsumeSharedModule").ConsumeOptions} ConsumeOptions */
/** @typedef {import("./utils").DescriptionFile} DescriptionFile */

/** @type {ResolveOptionsWithDependencyType} */
const RESOLVE_OPTIONS = { dependencyType: "esm" };
const PLUGIN_NAME = "ConsumeSharedPlugin";

class ConsumeSharedPlugin {
	/**
	 * Creates an instance of ConsumeSharedPlugin.
	 * @param {ConsumeSharedPluginOptions} options options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		// TODO webpack 6 remove string support
		if (typeof this.options !== "string") {
			compiler.hooks.validate.tap(PLUGIN_NAME, () => {
				compiler.validate(
					() =>
						require("../../schemas/plugins/sharing/ConsumeSharedPlugin.json"),
					this.options,
					{
						name: "Consume Shared Plugin",
						baseDataPath: "options"
					},
					(options) =>
						require("../../schemas/plugins/sharing/ConsumeSharedPlugin.check")(
							options
						)
				);
			});
		}

		/** @type {[string, ConsumeOptions][]} */
		const consumes = parseOptions(
			this.options.consumes,
			(item, key) => {
				if (Array.isArray(item)) throw new Error("Unexpected array in options");
				/** @type {ConsumeOptions} */
				const result =
					item === key || !isRequiredVersion(item)
						? // item is a request/key
							{
								import: key,
								shareScope: this.options.shareScope || "default",
								shareKey: key,
								requiredVersion: undefined,
								packageName: undefined,
								strictVersion: false,
								singleton: false,
								eager: false
							}
						: // key is a request/key
							// item is a version
							{
								import: key,
								shareScope: this.options.shareScope || "default",
								shareKey: key,
								requiredVersion: parseRange(item),
								strictVersion: true,
								packageName: undefined,
								singleton: false,
								eager: false
							};
				return result;
			},
			(item, key) => ({
				import: item.import === false ? undefined : item.import || key,
				shareScope: item.shareScope || this.options.shareScope || "default",
				shareKey: item.shareKey || key,
				requiredVersion:
					typeof item.requiredVersion === "string"
						? parseRange(item.requiredVersion)
						: item.requiredVersion,
				strictVersion:
					typeof item.strictVersion === "boolean"
						? item.strictVersion
						: item.import !== false && !item.singleton,
				packageName: item.packageName,
				singleton: Boolean(item.singleton),
				eager: Boolean(item.eager)
			})
		);

		compiler.hooks.thisCompilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					ConsumeSharedFallbackDependency,
					normalModuleFactory
				);

				/** @typedef {Map<string, ConsumeOptions>} Consumes */

				/** @type {Consumes} */
				let unresolvedConsumes;
				/** @type {Consumes} */
				let resolvedConsumes;
				/** @type {Consumes} */
				let prefixedConsumes;
				const promise = resolveMatchedConfigs(compilation, consumes).then(
					({ resolved, unresolved, prefixed }) => {
						resolvedConsumes = resolved;
						unresolvedConsumes = unresolved;
						prefixedConsumes = prefixed;
					}
				);

				const resolver = compilation.resolverFactory.get(
					"normal",
					RESOLVE_OPTIONS
				);

				/**
				 * Creates a consume shared module.
				 * @param {string} context issuer directory
				 * @param {string} request request
				 * @param {ConsumeOptions} config options
				 * @returns {Promise<ConsumeSharedModule>} create module
				 */
				const createConsumeSharedModule = (context, request, config) => {
					/**
					 * Required version warning.
					 * @param {string} details details
					 */
					const requiredVersionWarning = (details) => {
						const error = new WebpackError(
							`No required version specified and unable to automatically determine one. ${details}`
						);
						error.file = `shared module ${request}`;
						compilation.warnings.push(error);
					};
					const directFallback =
						config.import &&
						/^(?:\.\.?(?:\/|$)|\/|[A-Z]:|\\\\)/i.test(config.import);
					return Promise.all([
						new Promise(
							/**
							 * Handles the callback logic for this hook.
							 * @param {(value?: string) => void} resolve resolve
							 */
							(resolve) => {
								if (!config.import) {
									resolve();
									return;
								}
								/** @type {ResolveContext & { fileDependencies: FileSystemDependencies, contextDependencies: FileSystemDependencies, missingDependencies: FileSystemDependencies }} */
								const resolveContext = {
									fileDependencies: new LazySet(),
									contextDependencies: new LazySet(),
									missingDependencies: new LazySet()
								};
								resolver.resolve(
									{},
									directFallback ? compiler.context : context,
									config.import,
									resolveContext,
									(err, result) => {
										compilation.contextDependencies.addAll(
											resolveContext.contextDependencies
										);
										compilation.fileDependencies.addAll(
											resolveContext.fileDependencies
										);
										compilation.missingDependencies.addAll(
											resolveContext.missingDependencies
										);
										if (err) {
											compilation.errors.push(
												new ModuleNotFoundError(null, err, {
													name: `resolving fallback for shared module ${request}`
												})
											);
											return resolve();
										}
										resolve(/** @type {string} */ (result));
									}
								);
							}
						),
						new Promise(
							/**
							 * Handles the name callback for this hook.
							 * @param {(value?: SemVerRange) => void} resolve resolve
							 */
							(resolve) => {
								if (config.requiredVersion !== undefined) {
									resolve(/** @type {SemVerRange} */ (config.requiredVersion));
									return;
								}
								let packageName = config.packageName;
								if (packageName === undefined) {
									if (/^(?:\/|[A-Z]:|\\\\)/i.test(request)) {
										// For relative or absolute requests we don't automatically use a packageName.
										// If wished one can specify one with the packageName option.
										resolve();
										return;
									}
									const match = /^(?:@[^\\/]+[\\/])?[^\\/]+/.exec(request);
									if (!match) {
										requiredVersionWarning(
											"Unable to extract the package name from request."
										);
										resolve();
										return;
									}
									packageName = match[0];
								}

								getDescriptionFile(
									compilation.inputFileSystem,
									context,
									["package.json"],
									(err, result, checkedDescriptionFilePaths) => {
										if (err) {
											requiredVersionWarning(
												`Unable to read description file: ${err}`
											);
											return resolve();
										}
										const { data } =
											/** @type {DescriptionFile} */
											(result || {});
										if (!data) {
											if (checkedDescriptionFilePaths) {
												requiredVersionWarning(
													[
														`Unable to find required version for "${packageName}" in description file/s`,
														checkedDescriptionFilePaths.join("\n"),
														"It need to be in dependencies, devDependencies or peerDependencies."
													].join("\n")
												);
											} else {
												requiredVersionWarning(
													`Unable to find description file in ${context}.`
												);
											}

											return resolve();
										}
										if (data.name === packageName) {
											// Package self-referencing
											return resolve();
										}
										const requiredVersion =
											getRequiredVersionFromDescriptionFile(data, packageName);

										if (requiredVersion) {
											return resolve(parseRange(requiredVersion));
										}

										resolve();
									},
									(result) => {
										if (!result) return false;
										const maybeRequiredVersion =
											getRequiredVersionFromDescriptionFile(
												result.data,
												packageName
											);
										return (
											result.data.name === packageName ||
											typeof maybeRequiredVersion === "string"
										);
									}
								);
							}
						)
					]).then(
						([importResolved, requiredVersion]) =>
							new ConsumeSharedModule(
								directFallback ? compiler.context : context,
								{
									...config,
									importResolved,
									import: importResolved ? config.import : undefined,
									requiredVersion
								}
							)
					);
				};

				normalModuleFactory.hooks.factorize.tapPromise(
					PLUGIN_NAME,
					({ context, request, dependencies }) =>
						// wait for resolving to be complete
						promise.then(() => {
							if (
								dependencies[0] instanceof ConsumeSharedFallbackDependency ||
								dependencies[0] instanceof ProvideForSharedDependency
							) {
								return;
							}
							const match = unresolvedConsumes.get(request);
							if (match !== undefined) {
								return createConsumeSharedModule(context, request, match);
							}
							for (const [prefix, options] of prefixedConsumes) {
								if (request.startsWith(prefix)) {
									const remainder = request.slice(prefix.length);
									return createConsumeSharedModule(context, request, {
										...options,
										import: options.import
											? options.import + remainder
											: undefined,
										shareKey: options.shareKey + remainder
									});
								}
							}
						})
				);
				normalModuleFactory.hooks.createModule.tapPromise(
					PLUGIN_NAME,
					({ resource }, { context, dependencies }) => {
						if (
							dependencies[0] instanceof ConsumeSharedFallbackDependency ||
							dependencies[0] instanceof ProvideForSharedDependency
						) {
							return Promise.resolve();
						}
						const options = resolvedConsumes.get(
							/** @type {string} */ (resource)
						);
						if (options !== undefined) {
							return createConsumeSharedModule(
								context,
								/** @type {string} */ (resource),
								options
							);
						}
						return Promise.resolve();
					}
				);
				compilation.hooks.additionalTreeRuntimeRequirements.tap(
					PLUGIN_NAME,
					(chunk, set) => {
						set.add(RuntimeGlobals.module);
						set.add(RuntimeGlobals.moduleCache);
						set.add(RuntimeGlobals.moduleFactoriesAddOnly);
						set.add(RuntimeGlobals.shareScopeMap);
						set.add(RuntimeGlobals.initializeSharing);
						set.add(RuntimeGlobals.hasOwnProperty);
						compilation.addRuntimeModule(
							chunk,
							new ConsumeSharedRuntimeModule(set)
						);
					}
				);
			}
		);
	}
}

module.exports = ConsumeSharedPlugin;
