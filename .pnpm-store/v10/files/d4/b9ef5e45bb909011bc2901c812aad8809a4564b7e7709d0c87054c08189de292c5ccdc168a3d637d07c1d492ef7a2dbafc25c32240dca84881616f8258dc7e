/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").WasmLoadingType} WasmLoadingType */
/** @typedef {import("../Compiler")} Compiler */

/** @typedef {Set<WasmLoadingType>} WasmLoadingTypes */

/** @type {WeakMap<Compiler, Set<WasmLoadingType>>} */
const enabledTypes = new WeakMap();

/**
 * Returns the set of wasm loading backends that have already been enabled for
 * the compiler.
 * @param {Compiler} compiler compiler instance
 * @returns {WasmLoadingTypes} enabled types
 */
const getEnabledTypes = (compiler) => {
	let set = enabledTypes.get(compiler);
	if (set === undefined) {
		/** @type {WasmLoadingTypes} */
		set = new Set();
		enabledTypes.set(compiler, set);
	}
	return set;
};

/**
 * Validates and enables named wasm loading backends by applying the plugin
 * implementations that provide their runtime support.
 */
class EnableWasmLoadingPlugin {
	/**
	 * Stores the wasm loading backend name that should be enabled for the
	 * compiler.
	 * @param {WasmLoadingType} type library type that should be available
	 */
	constructor(type) {
		/** @type {WasmLoadingType} */
		this.type = type;
	}

	/**
	 * Marks a custom or built-in wasm loading type as enabled for the compiler
	 * without applying additional built-in behavior.
	 * @param {Compiler} compiler the compiler instance
	 * @param {WasmLoadingType} type type of library
	 * @returns {void}
	 */
	static setEnabled(compiler, type) {
		getEnabledTypes(compiler).add(type);
	}

	/**
	 * Verifies that a wasm loading type has been enabled before code generation
	 * attempts to use it.
	 * @param {Compiler} compiler the compiler instance
	 * @param {WasmLoadingType} type type of library
	 * @returns {void}
	 */
	static checkEnabled(compiler, type) {
		if (!getEnabledTypes(compiler).has(type)) {
			throw new Error(
				`Library type "${type}" is not enabled. ` +
					"EnableWasmLoadingPlugin need to be used to enable this type of wasm loading. " +
					'This usually happens through the "output.enabledWasmLoadingTypes" option. ' +
					'If you are using a function as entry which sets "wasmLoading", you need to add all potential library types to "output.enabledWasmLoadingTypes". ' +
					`These types are enabled: ${[...getEnabledTypes(compiler)].join(", ")}`
			);
		}
	}

	/**
	 * Enables the requested wasm loading backend once and applies the
	 * environment-specific plugins that provide its parser, generator, and
	 * runtime support.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { type } = this;

		// Only enable once
		const enabled = getEnabledTypes(compiler);
		if (enabled.has(type)) return;
		enabled.add(type);

		if (typeof type === "string") {
			switch (type) {
				case "fetch": {
					if (compiler.options.experiments.syncWebAssembly) {
						const FetchCompileWasmPlugin = require("../web/FetchCompileWasmPlugin");

						new FetchCompileWasmPlugin({
							mangleImports: compiler.options.optimization.mangleWasmImports
						}).apply(compiler);
					}

					if (compiler.options.experiments.asyncWebAssembly) {
						const FetchCompileAsyncWasmPlugin = require("../web/FetchCompileAsyncWasmPlugin");

						new FetchCompileAsyncWasmPlugin().apply(compiler);
					}

					break;
				}
				case "async-node": {
					if (compiler.options.experiments.syncWebAssembly) {
						const ReadFileCompileWasmPlugin = require("../node/ReadFileCompileWasmPlugin");

						new ReadFileCompileWasmPlugin({
							mangleImports: compiler.options.optimization.mangleWasmImports,
							import:
								compiler.options.output.module &&
								compiler.options.output.environment.dynamicImport
						}).apply(compiler);
					}

					if (compiler.options.experiments.asyncWebAssembly) {
						const ReadFileCompileAsyncWasmPlugin = require("../node/ReadFileCompileAsyncWasmPlugin");

						new ReadFileCompileAsyncWasmPlugin({
							import:
								compiler.options.output.module &&
								compiler.options.output.environment.dynamicImport
						}).apply(compiler);
					}

					break;
				}
				case "universal": {
					if (compiler.options.experiments.syncWebAssembly) {
						throw new Error(
							"Universal wasm loading type is only supported by asynchronous web assembly."
						);
					}

					if (compiler.options.experiments.asyncWebAssembly) {
						const UniversalCompileAsyncWasmPlugin = require("../wasm-async/UniversalCompileAsyncWasmPlugin");

						new UniversalCompileAsyncWasmPlugin().apply(compiler);
					}
					break;
				}
				default:
					throw new Error(`Unsupported wasm loading type ${type}.
Plugins which provide custom wasm loading types must call EnableWasmLoadingPlugin.setEnabled(compiler, type) to disable this error.`);
			}
		} else {
			// TODO support plugin instances here
			// apply them to the compiler
		}
	}
}

module.exports = EnableWasmLoadingPlugin;
