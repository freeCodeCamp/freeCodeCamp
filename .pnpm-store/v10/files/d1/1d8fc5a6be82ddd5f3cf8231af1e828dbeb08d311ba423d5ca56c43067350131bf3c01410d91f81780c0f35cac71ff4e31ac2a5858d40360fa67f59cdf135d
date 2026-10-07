/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra and Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const ExternalModule = require("../ExternalModule");
const ExternalsPlugin = require("../ExternalsPlugin");
const RuntimeGlobals = require("../RuntimeGlobals");
const FallbackDependency = require("./FallbackDependency");
const FallbackItemDependency = require("./FallbackItemDependency");
const FallbackModuleFactory = require("./FallbackModuleFactory");
const RemoteModule = require("./RemoteModule");
const RemoteRuntimeModule = require("./RemoteRuntimeModule");
const RemoteToExternalDependency = require("./RemoteToExternalDependency");
const { parseOptions } = require("./options");

/** @typedef {import("../../declarations/plugins/container/ContainerReferencePlugin").ContainerReferencePluginOptions} ContainerReferencePluginOptions */
/** @typedef {import("../Compiler")} Compiler */

const slashCode = "/".charCodeAt(0);
const PLUGIN_NAME = "ContainerReferencePlugin";

class ContainerReferencePlugin {
	/**
	 * Creates an instance of ContainerReferencePlugin.
	 * @param {ContainerReferencePluginOptions} options options
	 */
	constructor(options) {
		/** @typedef {ContainerReferencePluginOptions} */
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
				() =>
					require("../../schemas/plugins/container/ContainerReferencePlugin.json"),
				this.options,
				{
					name: "Container Reference Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/container/ContainerReferencePlugin.check")(
						options
					)
			);
		});

		const { remoteType } = this.options;
		const remotes = parseOptions(
			this.options.remotes,
			(item) => ({
				external: Array.isArray(item) ? item : [item],
				shareScope: this.options.shareScope || "default"
			}),
			(item) => ({
				external: Array.isArray(item.external)
					? item.external
					: [item.external],
				shareScope: item.shareScope || this.options.shareScope || "default"
			})
		);

		/** @type {Record<string, string>} */
		const remoteExternals = {};
		for (const [key, config] of remotes) {
			let i = 0;
			for (const external of config.external) {
				if (external.startsWith("internal ")) continue;
				remoteExternals[
					`webpack/container/reference/${key}${i ? `/fallback-${i}` : ""}`
				] = external;
				i++;
			}
		}

		new ExternalsPlugin(remoteType, remoteExternals).apply(compiler);

		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					RemoteToExternalDependency,
					normalModuleFactory
				);

				compilation.dependencyFactories.set(
					FallbackItemDependency,
					normalModuleFactory
				);

				compilation.dependencyFactories.set(
					FallbackDependency,
					new FallbackModuleFactory()
				);

				normalModuleFactory.hooks.factorize.tap(PLUGIN_NAME, (data) => {
					if (!data.request.includes("!")) {
						for (const [key, config] of remotes) {
							if (
								data.request.startsWith(`${key}`) &&
								(data.request.length === key.length ||
									data.request.charCodeAt(key.length) === slashCode)
							) {
								return new RemoteModule(
									data.request,
									config.external.map((external, i) =>
										external.startsWith("internal ")
											? external.slice(9)
											: `webpack/container/reference/${key}${
													i ? `/fallback-${i}` : ""
												}`
									),
									`.${data.request.slice(key.length)}`,
									config.shareScope
								);
							}
						}
					}
				});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap(PLUGIN_NAME, (chunk, set) => {
						set.add(RuntimeGlobals.module);
						set.add(RuntimeGlobals.moduleFactoriesAddOnly);
						set.add(RuntimeGlobals.hasOwnProperty);
						set.add(RuntimeGlobals.initializeSharing);
						set.add(RuntimeGlobals.shareScopeMap);
						compilation.addRuntimeModule(chunk, new RemoteRuntimeModule());
					});

				const { chunkCondition } =
					ExternalModule.getCompilationHooks(compilation);

				// External modules issued by remote modules should be placed in entry chunks
				// to ensure they are loaded and initialize first
				chunkCondition.tap(
					PLUGIN_NAME,
					(chunk, compilation) =>
						compilation.chunkGraph.getNumberOfEntryModules(chunk) > 0
				);
			}
		);
	}
}

module.exports = ContainerReferencePlugin;
