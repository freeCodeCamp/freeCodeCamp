/**
 * @fileoverview Main package entrypoint.
 * @author Nicholas C. Zakas
 */

"use strict";

const { name, version } = require("../package.json");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		name,
		version,
	},
	configs: {
		all: require("./configs/eslint-all"),
		recommended: require("./configs/eslint-recommended"),
	},
};
