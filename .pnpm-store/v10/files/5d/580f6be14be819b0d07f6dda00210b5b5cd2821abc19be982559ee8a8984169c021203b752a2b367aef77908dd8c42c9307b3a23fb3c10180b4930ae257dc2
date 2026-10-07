/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const memoize = require("./memoize");

const getVm = memoize(() => require("vm"));

// regexp to match at least one "magic comment"
module.exports.createMagicCommentContext = () =>
	getVm().createContext(undefined, {
		name: "Webpack Magic Comment Parser",
		codeGeneration: { strings: false, wasm: false }
	});
module.exports.webpackCommentRegExp = new RegExp(
	/(^|\W)webpack[A-Z][A-Za-z]+:/
);

// regexp to match at least one "magic comment"
/**
 * Returns magic comment context.
 * @returns {import("vm").Context} magic comment context
 */
