/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { WebpackError } = require("..");
const { getUsedModuleIdsAndModules } = require("./IdHelpers");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").ModuleId} ModuleId */
/** @typedef {import("../util/fs").IntermediateFileSystem} IntermediateFileSystem */

/** @typedef {{ [key: string]: ModuleId }} JSONContent */

const plugin = "SyncModuleIdsPlugin";

/**
 * Represents the sync module ids plugin runtime component.
 * @typedef {object} SyncModuleIdsPluginOptions
 * @property {string} path path to file
 * @property {string=} context context for module names
 * @property {((module: Module) => boolean)=} test selector for modules
 * @property {"read" | "create" | "merge" | "update"=} mode operation mode (defaults to merge)
 */

class SyncModuleIdsPlugin {
	/**
	 * Creates an instance of SyncModuleIdsPlugin.
	 * @param {SyncModuleIdsPluginOptions} options options
	 */
	constructor(options) {
		/** @type {SyncModuleIdsPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		/** @type {Map<string, ModuleId>} */
		let data;
		let dataChanged = false;

		const readAndWrite =
			!this.options.mode ||
			this.options.mode === "merge" ||
			this.options.mode === "update";

		const needRead = readAndWrite || this.options.mode === "read";
		const needWrite = readAndWrite || this.options.mode === "create";
		const needPrune = this.options.mode === "update";

		if (needRead) {
			compiler.hooks.readRecords.tapAsync(plugin, (callback) => {
				const fs =
					/** @type {IntermediateFileSystem} */
					(compiler.intermediateFileSystem);
				fs.readFile(this.options.path, (err, buffer) => {
					if (err) {
						if (err.code !== "ENOENT") {
							return callback(err);
						}
						return callback();
					}
					/** @type {JSONContent} */
					const json = JSON.parse(/** @type {Buffer} */ (buffer).toString());
					/** @type {Map<string, string | number | null>} */
					data = new Map();
					for (const key of Object.keys(json)) {
						data.set(key, json[key]);
					}
					dataChanged = false;
					return callback();
				});
			});
		}
		if (needWrite) {
			compiler.hooks.emitRecords.tapAsync(plugin, (callback) => {
				if (!data || !dataChanged) return callback();
				/** @type {JSONContent} */
				const json = {};
				const sorted = [...data].sort(([a], [b]) => (a < b ? -1 : 1));
				for (const [key, value] of sorted) {
					json[key] = value;
				}
				const fs =
					/** @type {IntermediateFileSystem} */
					(compiler.intermediateFileSystem);
				fs.writeFile(this.options.path, JSON.stringify(json), callback);
			});
		}
		compiler.hooks.thisCompilation.tap(plugin, (compilation) => {
			const associatedObjectForCache = compiler.root;
			const context = this.options.context || compiler.context;
			const test = this.options.test || (() => true);
			if (needRead) {
				compilation.hooks.reviveModules.tap(plugin, (_1, _2) => {
					if (!data) return;
					const { chunkGraph } = compilation;
					const [usedIds, modules] = getUsedModuleIdsAndModules(
						compilation,
						test
					);
					for (const module of modules) {
						const name = module.libIdent({
							context,
							associatedObjectForCache
						});
						if (!name) continue;
						const id = data.get(name);
						const idAsString = `${id}`;
						if (usedIds.has(idAsString)) {
							const err = new WebpackError(
								`SyncModuleIdsPlugin: Unable to restore id '${id}' from '${this.options.path}' as it's already used.`
							);
							err.module = module;
							compilation.errors.push(err);
						}
						chunkGraph.setModuleId(module, /** @type {ModuleId} */ (id));
						usedIds.add(idAsString);
					}
				});
			}
			if (needWrite) {
				compilation.hooks.recordModules.tap(plugin, (modules) => {
					const { chunkGraph } = compilation;
					let oldData = data;
					if (!oldData) {
						oldData = data = new Map();
					} else if (needPrune) {
						data = new Map();
					}
					for (const module of modules) {
						if (test(module)) {
							const name = module.libIdent({
								context,
								associatedObjectForCache
							});
							if (!name) continue;
							const id = chunkGraph.getModuleId(module);
							if (id === null) continue;
							const oldId = oldData.get(name);
							if (oldId !== id) {
								dataChanged = true;
							} else if (data === oldData) {
								continue;
							}
							data.set(name, id);
						}
					}
					if (data.size !== oldData.size) dataChanged = true;
				});
			}
		});
	}
}

module.exports = SyncModuleIdsPlugin;
