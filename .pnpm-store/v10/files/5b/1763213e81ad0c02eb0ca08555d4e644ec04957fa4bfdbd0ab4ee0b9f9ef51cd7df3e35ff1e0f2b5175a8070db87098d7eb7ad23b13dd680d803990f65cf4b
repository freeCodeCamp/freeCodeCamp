/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra, Zackary Jackson @ScriptedAlchemy, Marais Rossouw @maraisr
*/

"use strict";

const memoize = require("../util/memoize");
const ContainerEntryDependency = require("./ContainerEntryDependency");
const ContainerEntryModuleFactory = require("./ContainerEntryModuleFactory");
const ContainerExposedDependency = require("./ContainerExposedDependency");
const { parseOptions } = require("./options");

/** @typedef {import("../../declarations/plugins/container/ContainerPlugin").ContainerPluginOptions} ContainerPluginOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("./ContainerEntryModule").ExposesList} ExposesList */

const getModuleFederationPlugin = memoize(() =>
	require("./ModuleFederationPlugin")
);

const PLUGIN_NAME = "ContainerPlugin";

class ContainerPlugin {
	/**
	 * Creates an instance of ContainerPlugin.
	 * @param {ContainerPluginOptions} options options
	 */
	constructor(options) {
		/** @type {ContainerPluginOptions} */
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
				() => require("../../schemas/plugins/container/ContainerPlugin.json"),
				this.options,
				{
					name: "Container Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/container/ContainerPlugin.check")(
						options
					)
			);
		});

		const library = this.options.library || {
			type: "var",
			name: this.options.name
		};

		if (!compiler.options.output.enabledLibraryTypes.includes(library.type)) {
			compiler.options.output.enabledLibraryTypes.push(library.type);
		}

		const exposes = /** @type {ExposesList} */ (
			parseOptions(
				this.options.exposes,
				(item) => ({
					import: Array.isArray(item) ? item : [item],
					name: undefined
				}),
				(item) => ({
					import: Array.isArray(item.import) ? item.import : [item.import],
					name: item.name || undefined
				})
			)
		);

		const shareScope = this.options.shareScope || "default";

		compiler.hooks.make.tapAsync(PLUGIN_NAME, (compilation, callback) => {
			const hooks =
				getModuleFederationPlugin().getCompilationHooks(compilation);
			const dep = new ContainerEntryDependency(
				this.options.name,
				exposes,
				shareScope
			);
			dep.loc = { name: this.options.name };
			compilation.addEntry(
				compilation.options.context,
				dep,
				{
					name: this.options.name,
					filename: this.options.filename,
					runtime: this.options.runtime,
					library
				},
				(error) => {
					if (error) return callback(error);
					hooks.addContainerEntryDependency.call(dep);
					callback();
				}
			);
		});

		compiler.hooks.thisCompilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					ContainerEntryDependency,
					new ContainerEntryModuleFactory()
				);

				compilation.dependencyFactories.set(
					ContainerExposedDependency,
					normalModuleFactory
				);
			}
		);
	}
}

module.exports = ContainerPlugin;
