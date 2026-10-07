/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const AsyncDependenciesBlock = require("../AsyncDependenciesBlock");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("../ChunkGroup").ChunkGroupOptions} ChunkGroupOptions */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */

class RequireEnsureDependenciesBlock extends AsyncDependenciesBlock {
	/**
	 * @param {ChunkGroupOptions & { entryOptions?: TODO }} chunkName chunk name
	 * @param {DependencyLocation} loc location info
	 */
	constructor(chunkName, loc) {
		super(chunkName, loc, null);
	}
}

makeSerializable(
	RequireEnsureDependenciesBlock,
	"webpack/lib/dependencies/RequireEnsureDependenciesBlock"
);

module.exports = RequireEnsureDependenciesBlock;
