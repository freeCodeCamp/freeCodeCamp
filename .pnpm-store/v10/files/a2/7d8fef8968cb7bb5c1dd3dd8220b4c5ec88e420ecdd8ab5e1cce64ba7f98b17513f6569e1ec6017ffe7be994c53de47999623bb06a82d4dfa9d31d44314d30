/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

// regexp to match at least one "magic comment"
module.exports.webpackCommentRegExp = new RegExp(
	/(^|\W)webpack[A-Z]{1,}[A-Za-z]{1,}:/
);

// regexp to match at least one "magic comment"
/**
 * @returns {import("vm").Context} magic comment context
 */
module.exports.createMagicCommentContext = () =>
	require("vm").createContext(undefined, {
		name: "Webpack Magic Comment Parser",
		codeGeneration: { strings: false, wasm: false }
	});
