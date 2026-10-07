/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra and Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const WebpackError = require("../WebpackError");
const { parseOptions } = require("../container/options");
const ProvideForSharedDependency = require("./ProvideForSharedDependency");
const ProvideSharedDependency = require("./ProvideSharedDependency");
const ProvideSharedModuleFactory = require("./ProvideSharedModuleFactory");

/** @typedef {import("../../declarations/plugins/sharing/ProvideSharedPlugin").ProvideSharedPluginOptions} ProvideSharedPluginOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../NormalModuleFactory").NormalModuleCreateData} NormalModuleCreateData */

/**
 * Defines the provide options type used by this module.
 * @typedef {object} ProvideOptions
 * @property {string} shareKey
 * @property {string} shareScope
 * @property {string | undefined | false} version
 * @property {boolean} eager
 */

/** @typedef {Map<string, { config: ProvideOptions, version: string | undefined | false }>} ResolvedProvideMap */

const PLUGIN_NAME = "ProvideSharedPlugin";

class ProvideSharedPlugin {
	/**
	 * Creates an instance of ProvideSharedPlugin.
	 * @param {ProvideSharedPluginOptions} options options
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
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() => require("../../schemas/plugins/sharing/ProvideSharedPlugin.json"),
				this.options,
				{
					name: "Provide Shared Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/sharing/ProvideSharedPlugin.check")(
						options
					)
			);
		});

		/** @type {[string, ProvideOptions][]} */
		const provides = parseOptions(
			this.options.provides,
			(item) => {
				if (Array.isArray(item)) {
					throw new Error("Unexpected array of provides");
				}
				/** @type {ProvideOptions} */
				const result = {
					shareKey: item,
					version: undefined,
					shareScope: this.options.shareScope || "default",
					eager: false
				};
				return result;
			},
			(item) => ({
				shareKey: /** @type {string} */ (item.shareKey),
				version: item.version,
				shareScope: item.shareScope || this.options.shareScope || "default",
				eager: Boolean(item.eager)
			})
		).sort(([a], [b]) => {
			if (a < b) return -1;
			if (b < a) return 1;
			return 0;
		});

		/** @type {WeakMap<Compilation, ResolvedProvideMap>} */
		const compilationData = new WeakMap();

		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				/** @type {ResolvedProvideMap} */
				const resolvedProvideMap = new Map();
				/** @type {Map<string, ProvideOptions>} */
				const matchProvides = new Map();
				/** @type {Map<string, ProvideOptions>} */
				const prefixMatchProvides = new Map();
				for (const [request, config] of provides) {
					if (/^(?:\/|[A-Z]:\\|\\\\|\.\.?(?:\/|$))/i.test(request)) {
						// relative request
						resolvedProvideMap.set(request, {
							config,
							version: config.version
						});
					} else if (/^(?:\/|[A-Z]:\\|\\\\)/i.test(request)) {
						// absolute path
						resolvedProvideMap.set(request, {
							config,
							version: config.version
						});
					} else if (request.endsWith("/")) {
						// module request prefix
						prefixMatchProvides.set(request, config);
					} else {
						// module request
						matchProvides.set(request, config);
					}
				}
				compilationData.set(compilation, resolvedProvideMap);
				/**
				 * Provide shared module.
				 * @param {string} key key
				 * @param {ProvideOptions} config config
				 * @param {NormalModuleCreateData["resource"]} resource resource
				 * @param {NormalModuleCreateData["resourceResolveData"]} resourceResolveData resource resolve data
				 */
				const provideSharedModule = (
					key,
					config,
					resource,
					resourceResolveData
				) => {
					let version = config.version;
					if (version === undefined) {
						let details = "";
						if (!resourceResolveData) {
							details = "No resolve data provided from resolver.";
						} else {
							const descriptionFileData =
								resourceResolveData.descriptionFileData;
							if (!descriptionFileData) {
								details =
									"No description file (usually package.json) found. Add description file with name and version, or manually specify version in shared config.";
							} else if (!descriptionFileData.version) {
								details = `No version in description file (usually package.json). Add version to description file ${resourceResolveData.descriptionFilePath}, or manually specify version in shared config.`;
							} else {
								version = /** @type {string | false | undefined} */ (
									descriptionFileData.version
								);
							}
						}
						if (!version) {
							const error = new WebpackError(
								`No version specified and unable to automatically determine one. ${details}`
							);
							error.file = `shared module ${key} -> ${resource}`;
							compilation.warnings.push(error);
						}
					}
					resolvedProvideMap.set(resource, {
						config,
						version
					});
				};
				normalModuleFactory.hooks.module.tap(
					PLUGIN_NAME,
					(module, { resource, resourceResolveData }, resolveData) => {
						if (resolvedProvideMap.has(/** @type {string} */ (resource))) {
							return module;
						}
						const { request } = resolveData;
						{
							const config = matchProvides.get(request);
							if (config !== undefined) {
								provideSharedModule(
									request,
									config,
									/** @type {string} */ (resource),
									resourceResolveData
								);
								resolveData.cacheable = false;
							}
						}
						for (const [prefix, config] of prefixMatchProvides) {
							if (request.startsWith(prefix)) {
								const remainder = request.slice(prefix.length);
								provideSharedModule(
									/** @type {string} */ (resource),
									{
										...config,
										shareKey: config.shareKey + remainder
									},
									/** @type {string} */ (resource),
									resourceResolveData
								);
								resolveData.cacheable = false;
							}
						}
						return module;
					}
				);
			}
		);
		compiler.hooks.finishMake.tapPromise(PLUGIN_NAME, (compilation) => {
			const resolvedProvideMap = compilationData.get(compilation);
			if (!resolvedProvideMap) return Promise.resolve();
			return Promise.all(
				Array.from(
					resolvedProvideMap,
					([resource, { config, version }]) =>
						new Promise((resolve, reject) => {
							compilation.addInclude(
								compiler.context,
								new ProvideSharedDependency(
									config.shareScope,
									config.shareKey,
									version || false,
									resource,
									config.eager
								),
								{
									name: undefined
								},
								(err) => {
									if (err) return reject(err);
									resolve(null);
								}
							);
						})
				)
			).then(() => {});
		});

		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					ProvideForSharedDependency,
					normalModuleFactory
				);

				compilation.dependencyFactories.set(
					ProvideSharedDependency,
					new ProvideSharedModuleFactory()
				);
			}
		);
	}
}

module.exports = ProvideSharedPlugin;
