/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra, Zackary Jackson @ScriptedAlchemy, Marais Rossouw @maraisr
*/

"use strict";

const createSchemaValidation = require("../util/create-schema-validation");
const memoize = require("../util/memoize");
const ContainerEntryDependency = require("./ContainerEntryDependency");
const ContainerEntryModuleFactory = require("./ContainerEntryModuleFactory");
const ContainerExposedDependency = require("./ContainerExposedDependency");
const { parseOptions } = require("./options");

/** @typedef {import("../../declarations/plugins/container/ContainerPlugin").ContainerPluginOptions} ContainerPluginOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("./ContainerEntryModule").ExposeOptions} ExposeOptions */
/** @typedef {import("./ContainerEntryModule").ExposesList} ExposesList */

const getModuleFederationPlugin = memoize(() =>
	require("./ModuleFederationPlugin")
);

const validate = createSchemaValidation(
	require("../../schemas/plugins/container/ContainerPlugin.check.js"),
	() => require("../../schemas/plugins/container/ContainerPlugin.json"),
	{
		name: "Container Plugin",
		baseDataPath: "options"
	}
);

const PLUGIN_NAME = "ContainerPlugin";

class ContainerPlugin {
	/**
	 * @param {ContainerPluginOptions} options options
	 */
	constructor(options) {
		validate(options);

		this._options = {
			name: options.name,
			shareScope: options.shareScope || "default",
			library: options.library || {
				type: "var",
				name: options.name
			},
			runtime: options.runtime,
			filename: options.filename || undefined,
			exposes: /** @type {ExposesList} */ (
				parseOptions(
					options.exposes,
					item => ({
						import: Array.isArray(item) ? item : [item],
						name: undefined
					}),
					item => ({
						import: Array.isArray(item.import) ? item.import : [item.import],
						name: item.name || undefined
					})
				)
			)
		};
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { name, exposes, shareScope, filename, library, runtime } =
			this._options;

		if (!compiler.options.output.enabledLibraryTypes.includes(library.type)) {
			compiler.options.output.enabledLibraryTypes.push(library.type);
		}

		compiler.hooks.make.tapAsync(PLUGIN_NAME, (compilation, callback) => {
			const hooks =
				getModuleFederationPlugin().getCompilationHooks(compilation);
			const dep = new ContainerEntryDependency(name, exposes, shareScope);
			dep.loc = { name };
			compilation.addEntry(
				/** @type {string} */ (compilation.options.context),
				dep,
				{
					name,
					filename,
					runtime,
					library
				},
				error => {
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
