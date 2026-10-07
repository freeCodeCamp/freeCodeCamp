/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const AsyncDependenciesBlock = require("../AsyncDependenciesBlock");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */

class AMDRequireDependenciesBlock extends AsyncDependenciesBlock {
	/**
	 * @param {DependencyLocation} loc location info
	 * @param {string=} request request
	 */
	constructor(loc, request) {
		super(null, loc, request);
	}
}

makeSerializable(
	AMDRequireDependenciesBlock,
	"webpack/lib/dependencies/AMDRequireDependenciesBlock"
);

module.exports = AMDRequireDependenciesBlock;
