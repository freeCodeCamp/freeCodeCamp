/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module")} Module */

class InvalidDependenciesModuleWarning extends WebpackError {
	/**
	 * @param {Module} module module tied to dependency
	 * @param {Iterable<string>} deps invalid dependencies
	 */
	constructor(module, deps) {
		const orderedDeps = deps ? Array.from(deps).sort() : [];
		const depsList = orderedDeps.map(dep => ` * ${JSON.stringify(dep)}`);
		super(`Invalid dependencies have been reported by plugins or loaders for this module. All reported dependencies need to be absolute paths.
Invalid dependencies may lead to broken watching and caching.
As best effort we try to convert all invalid values to absolute paths and converting globs into context dependencies, but this is deprecated behavior.
Loaders: Pass absolute paths to this.addDependency (existing files), this.addMissingDependency (not existing files), and this.addContextDependency (directories).
Plugins: Pass absolute paths to fileDependencies (existing files), missingDependencies (not existing files), and contextDependencies (directories).
Globs: They are not supported. Pass absolute path to the directory as context dependencies.
The following invalid values have been reported:
${depsList.slice(0, 3).join("\n")}${
			depsList.length > 3 ? "\n * and more ..." : ""
		}`);

		this.name = "InvalidDependenciesModuleWarning";
		this.details = depsList.slice(3).join("\n");
		this.module = module;
	}
}

makeSerializable(
	InvalidDependenciesModuleWarning,
	"webpack/lib/InvalidDependenciesModuleWarning"
);

module.exports = InvalidDependenciesModuleWarning;
