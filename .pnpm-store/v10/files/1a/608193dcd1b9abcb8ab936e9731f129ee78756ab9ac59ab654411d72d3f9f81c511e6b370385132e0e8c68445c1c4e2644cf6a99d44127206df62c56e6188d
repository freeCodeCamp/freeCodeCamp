/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { fileURLToPath } = require("url");
const { NormalModule } = require("..");

/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "FileUriPlugin";

class FileUriPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				normalModuleFactory.hooks.resolveForScheme
					.for("file")
					.tap(PLUGIN_NAME, (resourceData) => {
						const url = new URL(resourceData.resource);
						const path = fileURLToPath(url);
						const query = url.search;
						const fragment = url.hash;
						resourceData.path = path;
						resourceData.query = query;
						resourceData.fragment = fragment;
						resourceData.resource = path + query + fragment;
						return true;
					});
				const hooks = NormalModule.getCompilationHooks(compilation);
				hooks.readResource
					.for(undefined)
					.tapAsync(PLUGIN_NAME, (loaderContext, callback) => {
						const { resourcePath } = loaderContext;
						loaderContext.fs.readFile(resourcePath, (err, result) => {
							if (err) return callback(err);
							loaderContext.addDependency(resourcePath);
							callback(null, result);
						});
					});
			}
		);
	}
}

module.exports = FileUriPlugin;
