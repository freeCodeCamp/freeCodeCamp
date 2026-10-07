/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const formatLocation = require("../formatLocation");
const UnsupportedWebAssemblyFeatureError = require("./UnsupportedWebAssemblyFeatureError");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */

class WasmFinalizeExportsPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("WasmFinalizeExportsPlugin", compilation => {
			compilation.hooks.finishModules.tap(
				"WasmFinalizeExportsPlugin",
				modules => {
					for (const module of modules) {
						// 1. if a WebAssembly module
						if (module.type.startsWith("webassembly") === true) {
							const jsIncompatibleExports =
								/** @type {BuildMeta} */
								(module.buildMeta).jsIncompatibleExports;

							if (jsIncompatibleExports === undefined) {
								continue;
							}

							for (const connection of compilation.moduleGraph.getIncomingConnections(
								module
							)) {
								// 2. is active and referenced by a non-WebAssembly module
								if (
									connection.isTargetActive(undefined) &&
									/** @type {Module} */
									(connection.originModule).type.startsWith("webassembly") ===
										false
								) {
									const referencedExports =
										compilation.getDependencyReferencedExports(
											/** @type {Dependency} */ (connection.dependency),
											undefined
										);

									for (const info of referencedExports) {
										const names = Array.isArray(info) ? info : info.name;
										if (names.length === 0) continue;
										const name = names[0];
										if (typeof name === "object") continue;
										// 3. and uses a func with an incompatible JS signature
										if (
											Object.prototype.hasOwnProperty.call(
												jsIncompatibleExports,
												name
											)
										) {
											// 4. error
											const error = new UnsupportedWebAssemblyFeatureError(
												`Export "${name}" with ${jsIncompatibleExports[name]} can only be used for direct wasm to wasm dependencies\n` +
													`It's used from ${
														/** @type {Module} */
														(connection.originModule).readableIdentifier(
															compilation.requestShortener
														)
													} at ${formatLocation(
														/** @type {Dependency} */ (connection.dependency)
															.loc
													)}.`
											);
											error.module = module;
											compilation.errors.push(error);
										}
									}
								}
							}
						}
					}
				}
			);
		});
	}
}

module.exports = WasmFinalizeExportsPlugin;
