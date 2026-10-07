/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const PrefetchDependency = require("./dependencies/PrefetchDependency");

/** @typedef {import("./Compiler")} Compiler */

class PrefetchPlugin {
	/**
	 * @param {string} context context or request if context is not set
	 * @param {string} [request] request
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
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			"PrefetchPlugin",
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					PrefetchDependency,
					normalModuleFactory
				);
			}
		);
		compiler.hooks.make.tapAsync("PrefetchPlugin", (compilation, callback) => {
			compilation.addModuleChain(
				this.context || compiler.context,
				new PrefetchDependency(this.request),
				err => {
					callback(err);
				}
			);
		});
	}
}

module.exports = PrefetchPlugin;
