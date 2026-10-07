/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../Compiler")} Compiler */

/** @type {WeakMap<Compiler, Set<LibraryType>>} */
const enabledTypes = new WeakMap();

/**
 * @param {Compiler} compiler the compiler instance
 * @returns {Set<LibraryType>} enabled types
 */
const getEnabledTypes = compiler => {
	let set = enabledTypes.get(compiler);
	if (set === undefined) {
		set = new Set();
		enabledTypes.set(compiler, set);
	}
	return set;
};

class EnableLibraryPlugin {
	/**
	 * @param {LibraryType} type library type that should be available
	 */
	constructor(type) {
		this.type = type;
	}

	/**
	 * @param {Compiler} compiler the compiler instance
	 * @param {LibraryType} type type of library
	 * @returns {void}
	 */
	static setEnabled(compiler, type) {
		getEnabledTypes(compiler).add(type);
	}

	/**
	 * @param {Compiler} compiler the compiler instance
	 * @param {LibraryType} type type of library
	 * @returns {void}
	 */
	static checkEnabled(compiler, type) {
		if (!getEnabledTypes(compiler).has(type)) {
			throw new Error(
				`Library type "${type}" is not enabled. ` +
					"EnableLibraryPlugin need to be used to enable this type of library. " +
					'This usually happens through the "output.enabledLibraryTypes" option. ' +
					'If you are using a function as entry which sets "library", you need to add all potential library types to "output.enabledLibraryTypes". ' +
					`These types are enabled: ${Array.from(
						getEnabledTypes(compiler)
					).join(", ")}`
			);
		}
	}

	/**
	 * Apply the plugin
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
			const enableExportProperty = () => {
				const ExportPropertyTemplatePlugin = require("./ExportPropertyLibraryPlugin");
				new ExportPropertyTemplatePlugin({
					type,
					nsObjectUsed: !["module", "modern-module"].includes(type),
					runtimeExportsUsed: type !== "modern-module"
				}).apply(compiler);
			};
			switch (type) {
				case "var": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: [],
						declare: "var",
						unnamed: "error"
					}).apply(compiler);
					break;
				}
				case "assign-properties": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: [],
						declare: false,
						unnamed: "error",
						named: "copy"
					}).apply(compiler);
					break;
				}
				case "assign": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: [],
						declare: false,
						unnamed: "error"
					}).apply(compiler);
					break;
				}
				case "this": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: ["this"],
						declare: false,
						unnamed: "copy"
					}).apply(compiler);
					break;
				}
				case "window": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: ["window"],
						declare: false,
						unnamed: "copy"
					}).apply(compiler);
					break;
				}
				case "self": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: ["self"],
						declare: false,
						unnamed: "copy"
					}).apply(compiler);
					break;
				}
				case "global": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: "global",
						declare: false,
						unnamed: "copy"
					}).apply(compiler);
					break;
				}
				case "commonjs": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: ["exports"],
						declare: false,
						unnamed: "copy"
					}).apply(compiler);
					break;
				}
				case "commonjs-static": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: ["exports"],
						declare: false,
						unnamed: "static"
					}).apply(compiler);
					break;
				}
				case "commonjs2":
				case "commonjs-module": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const AssignLibraryPlugin = require("./AssignLibraryPlugin");
					new AssignLibraryPlugin({
						type,
						prefix: ["module", "exports"],
						declare: false,
						unnamed: "assign"
					}).apply(compiler);
					break;
				}
				case "amd":
				case "amd-require": {
					enableExportProperty();
					const AmdLibraryPlugin = require("./AmdLibraryPlugin");
					new AmdLibraryPlugin({
						type,
						requireAsWrapper: type === "amd-require"
					}).apply(compiler);
					break;
				}
				case "umd":
				case "umd2": {
					if (compiler.options.output.iife === false) {
						compiler.options.output.iife = true;

						class WarnFalseIifeUmdPlugin {
							apply(compiler) {
								compiler.hooks.thisCompilation.tap(
									"WarnFalseIifeUmdPlugin",
									compilation => {
										const FalseIIFEUmdWarning = require("../FalseIIFEUmdWarning");
										compilation.warnings.push(new FalseIIFEUmdWarning());
									}
								);
							}
						}

						new WarnFalseIifeUmdPlugin().apply(compiler);
					}
					enableExportProperty();
					const UmdLibraryPlugin = require("./UmdLibraryPlugin");
					new UmdLibraryPlugin({
						type,
						optionalAmdExternalAsGlobal: type === "umd2"
					}).apply(compiler);
					break;
				}
				case "system": {
					enableExportProperty();
					const SystemLibraryPlugin = require("./SystemLibraryPlugin");
					new SystemLibraryPlugin({
						type
					}).apply(compiler);
					break;
				}
				case "jsonp": {
					enableExportProperty();
					const JsonpLibraryPlugin = require("./JsonpLibraryPlugin");
					new JsonpLibraryPlugin({
						type
					}).apply(compiler);
					break;
				}
				case "module": {
					enableExportProperty();
					const ModuleLibraryPlugin = require("./ModuleLibraryPlugin");
					new ModuleLibraryPlugin({
						type
					}).apply(compiler);
					break;
				}
				case "modern-module": {
					enableExportProperty();
					const ModernModuleLibraryPlugin = require("./ModernModuleLibraryPlugin");
					new ModernModuleLibraryPlugin({
						type
					}).apply(compiler);
					break;
				}
				default:
					throw new Error(`Unsupported library type ${type}.
Plugins which provide custom library types must call EnableLibraryPlugin.setEnabled(compiler, type) to disable this error.`);
			}
		} else {
			// TODO support plugin instances here
			// apply them to the compiler
		}
	}
}

module.exports = EnableLibraryPlugin;
