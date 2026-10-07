/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra and Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const { SyncHook } = require("tapable");
const isValidExternalsType = require("../../schemas/plugins/container/ExternalsType.check.js");
const Compilation = require("../Compilation");
const SharePlugin = require("../sharing/SharePlugin");
const createSchemaValidation = require("../util/create-schema-validation");
const ContainerPlugin = require("./ContainerPlugin");
const ContainerReferencePlugin = require("./ContainerReferencePlugin");
const HoistContainerReferences = require("./HoistContainerReferencesPlugin");

/** @typedef {import("../../declarations/plugins/container/ModuleFederationPlugin").ExternalsType} ExternalsType */
/** @typedef {import("../../declarations/plugins/container/ModuleFederationPlugin").ModuleFederationPluginOptions} ModuleFederationPluginOptions */
/** @typedef {import("../../declarations/plugins/container/ModuleFederationPlugin").Shared} Shared */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency")} Dependency */

/**
 * @typedef {object} CompilationHooks
 * @property {SyncHook<Dependency>} addContainerEntryDependency
 * @property {SyncHook<Dependency>} addFederationRuntimeDependency
 */

const validate = createSchemaValidation(
	require("../../schemas/plugins/container/ModuleFederationPlugin.check.js"),
	() => require("../../schemas/plugins/container/ModuleFederationPlugin.json"),
	{
		name: "Module Federation Plugin",
		baseDataPath: "options"
	}
);

/** @type {WeakMap<Compilation, CompilationHooks>} */
const compilationHooksMap = new WeakMap();

class ModuleFederationPlugin {
	/**
	 * @param {ModuleFederationPluginOptions} options options
	 */
	constructor(options) {
		validate(options);

		this._options = options;
	}

	/**
	 * Get the compilation hooks associated with this plugin.
	 * @param {Compilation} compilation The compilation instance.
	 * @returns {CompilationHooks} The hooks for the compilation.
	 */
	static getCompilationHooks(compilation) {
		if (!(compilation instanceof Compilation)) {
			throw new TypeError(
				"The 'compilation' argument must be an instance of Compilation"
			);
		}
		let hooks = compilationHooksMap.get(compilation);
		if (!hooks) {
			hooks = {
				addContainerEntryDependency: new SyncHook(["dependency"]),
				addFederationRuntimeDependency: new SyncHook(["dependency"])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { _options: options } = this;
		const library = options.library || { type: "var", name: options.name };
		const remoteType =
			options.remoteType ||
			(options.library && isValidExternalsType(options.library.type)
				? /** @type {ExternalsType} */ (options.library.type)
				: "script");
		if (
			library &&
			!compiler.options.output.enabledLibraryTypes.includes(library.type)
		) {
			compiler.options.output.enabledLibraryTypes.push(library.type);
		}
		compiler.hooks.afterPlugins.tap("ModuleFederationPlugin", () => {
			if (
				options.exposes &&
				(Array.isArray(options.exposes)
					? options.exposes.length > 0
					: Object.keys(options.exposes).length > 0)
			) {
				new ContainerPlugin({
					name: /** @type {string} */ (options.name),
					library,
					filename: options.filename,
					runtime: options.runtime,
					shareScope: options.shareScope,
					exposes: options.exposes
				}).apply(compiler);
			}
			if (
				options.remotes &&
				(Array.isArray(options.remotes)
					? options.remotes.length > 0
					: Object.keys(options.remotes).length > 0)
			) {
				new ContainerReferencePlugin({
					remoteType,
					shareScope: options.shareScope,
					remotes: options.remotes
				}).apply(compiler);
			}
			if (options.shared) {
				new SharePlugin({
					shared: options.shared,
					shareScope: options.shareScope
				}).apply(compiler);
			}
			new HoistContainerReferences().apply(compiler);
		});
	}
}

module.exports = ModuleFederationPlugin;
