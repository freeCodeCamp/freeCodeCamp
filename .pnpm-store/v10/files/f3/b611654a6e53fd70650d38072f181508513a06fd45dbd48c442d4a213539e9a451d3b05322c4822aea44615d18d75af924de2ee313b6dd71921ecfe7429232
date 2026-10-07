/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Naoyuki Kanezawa @nkzawa
*/

"use strict";

const EntryOptionPlugin = require("./EntryOptionPlugin");
const EntryPlugin = require("./EntryPlugin");
const EntryDependency = require("./dependencies/EntryDependency");

/** @typedef {import("../declarations/WebpackOptions").EntryDescriptionNormalized} EntryDescriptionNormalized */
/** @typedef {import("../declarations/WebpackOptions").EntryStatic} EntryStatic */
/** @typedef {import("../declarations/WebpackOptions").EntryStaticNormalized} EntryStaticNormalized */
/** @typedef {import("./Compiler")} Compiler */

const PLUGIN_NAME = "DynamicEntryPlugin";

/** @typedef {() => EntryStatic | Promise<EntryStatic>} RawEntryDynamic */
/** @typedef {() => Promise<EntryStaticNormalized>} EntryDynamic */

class DynamicEntryPlugin {
	/**
	 * Creates an instance of DynamicEntryPlugin.
	 * @param {string} context the context path
	 * @param {EntryDynamic} entry the entry value
	 */
	constructor(context, entry) {
		/** @type {string} */
		this.context = context;
		/** @type {EntryDynamic} */
		this.entry = entry;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					EntryDependency,
					normalModuleFactory
				);
			}
		);

		compiler.hooks.make.tapPromise(PLUGIN_NAME, (compilation) =>
			Promise.resolve(this.entry())
				.then((entry) => {
					/** @type {Promise<void>[]} */
					const promises = [];
					for (const name of Object.keys(entry)) {
						const desc = entry[name];
						const options = EntryOptionPlugin.entryDescriptionToOptions(
							compiler,
							name,
							desc
						);
						for (const entry of /** @type {NonNullable<EntryDescriptionNormalized["import"]>} */ (
							desc.import
						)) {
							promises.push(
								new Promise(
									/**
									 * Handles the callback logic for this hook.
									 * @param {(value?: undefined) => void} resolve resolve
									 * @param {(reason?: Error) => void} reject reject
									 */
									(resolve, reject) => {
										compilation.addEntry(
											this.context,
											EntryPlugin.createDependency(entry, options),
											options,
											(err) => {
												if (err) return reject(err);
												resolve();
											}
										);
									}
								)
							);
						}
					}
					return Promise.all(promises);
				})
				.then(() => {})
		);
	}
}

module.exports = DynamicEntryPlugin;
