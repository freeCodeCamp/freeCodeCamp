/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DllModuleFactory = require("./DllModuleFactory");
const DllEntryDependency = require("./dependencies/DllEntryDependency");
const EntryDependency = require("./dependencies/EntryDependency");

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {string[]} Entries */
/** @typedef {{ name: string, filename: TODO }} Options */

class DllEntryPlugin {
	/**
	 * @param {string} context context
	 * @param {Entries} entries entry names
	 * @param {Options} options options
	 */
	constructor(context, entries, options) {
		this.context = context;
		this.entries = entries;
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			"DllEntryPlugin",
			(compilation, { normalModuleFactory }) => {
				const dllModuleFactory = new DllModuleFactory();
				compilation.dependencyFactories.set(
					DllEntryDependency,
					dllModuleFactory
				);
				compilation.dependencyFactories.set(
					EntryDependency,
					normalModuleFactory
				);
			}
		);
		compiler.hooks.make.tapAsync("DllEntryPlugin", (compilation, callback) => {
			compilation.addEntry(
				this.context,
				new DllEntryDependency(
					this.entries.map((e, idx) => {
						const dep = new EntryDependency(e);
						dep.loc = {
							name: this.options.name,
							index: idx
						};
						return dep;
					}),
					this.options.name
				),
				this.options,
				error => {
					if (error) return callback(error);
					callback();
				}
			);
		});
	}
}

module.exports = DllEntryPlugin;
