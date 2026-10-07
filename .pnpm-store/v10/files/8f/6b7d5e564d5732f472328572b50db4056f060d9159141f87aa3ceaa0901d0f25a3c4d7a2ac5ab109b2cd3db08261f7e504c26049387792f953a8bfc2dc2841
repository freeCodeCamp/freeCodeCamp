/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const PrefetchDependency = require("./dependencies/PrefetchDependency");

/** @typedef {import("./Compiler")} Compiler */

const PLUGIN_NAME = "PrefetchPlugin";

class PrefetchPlugin {
	/**
	 * Creates an instance of PrefetchPlugin.
	 * @param {string} context context or request if context is not set
	 * @param {string=} request request
	 */
	constructor(context, request) {
		if (request) {
			this.context = context;
			this.request = request;
		} else {
			this.context = null;
			this.request = context;
		}
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
					PrefetchDependency,
					normalModuleFactory
				);
			}
		);
		compiler.hooks.make.tapAsync(PLUGIN_NAME, (compilation, callback) => {
			compilation.addModuleChain(
				this.context || compiler.context,
				new PrefetchDependency(this.request),
				(err) => {
					callback(err);
				}
			);
		});
	}
}

module.exports = PrefetchPlugin;
