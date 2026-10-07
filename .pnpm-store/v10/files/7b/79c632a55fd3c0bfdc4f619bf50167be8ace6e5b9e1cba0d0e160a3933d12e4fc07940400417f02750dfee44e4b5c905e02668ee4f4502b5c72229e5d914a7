/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ModuleExternalInitFragment } = require("./ExternalModule");
const ExternalModuleFactoryPlugin = require("./ExternalModuleFactoryPlugin");
const ConcatenatedModule = require("./optimize/ConcatenatedModule");

/** @typedef {import("../declarations/WebpackOptions").ExternalsType} ExternalsType */
/** @typedef {import("../declarations/WebpackOptions").Externals} Externals */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./ExternalModule").Imported} Imported */
/** @typedef {import("./Dependency")} Dependency */

const PLUGIN_NAME = "ExternalsPlugin";

class ExternalsPlugin {
	/**
	 * Creates an instance of ExternalsPlugin.
	 * @param {ExternalsType | ((dependency: Dependency) => ExternalsType)} type default external type
	 * @param {Externals} externals externals config
	 */
	constructor(type, externals) {
		this.type = type;
		this.externals = externals;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compile.tap(PLUGIN_NAME, ({ normalModuleFactory }) => {
			new ExternalModuleFactoryPlugin(this.type, this.externals).apply(
				normalModuleFactory
			);
		});

		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const { concatenatedModuleInfo } =
				ConcatenatedModule.getCompilationHooks(compilation);
			concatenatedModuleInfo.tap(PLUGIN_NAME, (updatedInfo, moduleInfo) => {
				const rawExportMap = updatedInfo.rawExportMap;

				if (!rawExportMap) {
					return;
				}

				const chunkInitFragments = moduleInfo.chunkInitFragments;
				const moduleExternalInitFragments =
					/** @type {ModuleExternalInitFragment[]} */
					(
						chunkInitFragments
							? /** @type {unknown[]} */
								(chunkInitFragments).filter(
									(fragment) => fragment instanceof ModuleExternalInitFragment
								)
							: []
					);

				let initFragmentChanged = false;

				for (const fragment of moduleExternalInitFragments) {
					const imported = fragment.getImported();

					if (Array.isArray(imported)) {
						const newImported =
							/** @type {Imported} */
							(
								imported.map(([specifier, finalName]) => [
									specifier,
									rawExportMap.has(specifier)
										? rawExportMap.get(specifier)
										: finalName
								])
							);
						fragment.setImported(newImported);
						initFragmentChanged = true;
					}
				}

				if (initFragmentChanged) {
					return true;
				}
			});
		});
	}
}

module.exports = ExternalsPlugin;
