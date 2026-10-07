/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { WebpackError } = require("..");
const { getUsedModuleIdsAndModules } = require("./IdHelpers");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../util/fs").IntermediateFileSystem} IntermediateFileSystem */

const plugin = "SyncModuleIdsPlugin";

class SyncModuleIdsPlugin {
	/**
	 * @param {object} options options
	 * @param {string} options.path path to file
	 * @param {string=} options.context context for module names
	 * @param {function(Module): boolean} options.test selector for modules
	 * @param {"read" | "create" | "merge" | "update"=} options.mode operation mode (defaults to merge)
	 */
	constructor({ path, context, test, mode }) {
		this._path = path;
		this._context = context;
		this._test = test || (() => true);
		const readAndWrite = !mode || mode === "merge" || mode === "update";
		this._read = readAndWrite || mode === "read";
		this._write = readAndWrite || mode === "create";
		this._prune = mode === "update";
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		/** @type {Map<string, string | number>} */
		let data;
		let dataChanged = false;
		if (this._read) {
			compiler.hooks.readRecords.tapAsync(plugin, callback => {
				const fs =
					/** @type {IntermediateFileSystem} */
					(compiler.intermediateFileSystem);
				fs.readFile(this._path, (err, buffer) => {
					if (err) {
						if (err.code !== "ENOENT") {
							return callback(err);
						}
						return callback();
					}
					const json = JSON.parse(/** @type {Buffer} */ (buffer).toString());
					data = new Map();
					for (const key of Object.keys(json)) {
						data.set(key, json[key]);
					}
					dataChanged = false;
					return callback();
				});
			});
		}
		if (this._write) {
			compiler.hooks.emitRecords.tapAsync(plugin, callback => {
				if (!data || !dataChanged) return callback();
				/** @type {{[key: string]: string | number}} */
				const json = {};
				const sorted = Array.from(data).sort(([a], [b]) => (a < b ? -1 : 1));
				for (const [key, value] of sorted) {
					json[key] = value;
				}
				const fs =
					/** @type {IntermediateFileSystem} */
					(compiler.intermediateFileSystem);
				fs.writeFile(this._path, JSON.stringify(json), callback);
			});
		}
		compiler.hooks.thisCompilation.tap(plugin, compilation => {
			const associatedObjectForCache = compiler.root;
			const context = this._context || compiler.context;
			if (this._read) {
				compilation.hooks.reviveModules.tap(plugin, (_1, _2) => {
					if (!data) return;
					const { chunkGraph } = compilation;
					const [usedIds, modules] = getUsedModuleIdsAndModules(
						compilation,
						this._test
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
								`SyncModuleIdsPlugin: Unable to restore id '${id}' from '${this._path}' as it's already used.`
							);
							err.module = module;
							compilation.errors.push(err);
						}
						chunkGraph.setModuleId(module, /** @type {string | number} */ (id));
						usedIds.add(idAsString);
					}
				});
			}
			if (this._write) {
				compilation.hooks.recordModules.tap(plugin, modules => {
					const { chunkGraph } = compilation;
					let oldData = data;
					if (!oldData) {
						oldData = data = new Map();
					} else if (this._prune) {
						data = new Map();
					}
					for (const module of modules) {
						if (this._test(module)) {
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
