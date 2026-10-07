/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Mikola Lysenko @mikolalysenko
*/

"use strict";

/* cspell:disable-next-line */
// Refactor: Peter Somogyvari @petermetz

/** @typedef {">=" | "<=" | "<" | ">" | "-" } BinarySearchPredicate */
/** @typedef {"GE" | "GT" | "LT" | "LE" | "EQ" } SearchPredicateSuffix */

/**
 * Helper function for compiling binary search functions.
 *
 * The generated code uses a while loop to repeatedly divide the search interval
 * in half until the desired element is found, or the search interval is empty.
 *
 * The following is an example of a generated function for calling `compileSearch("P", "c(x,y)<=0", true, ["y", "c"], false)`:
 *
 * ```js
 * function P(a,l,h,y,c){var i=l-1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(c(x,y)<=0){i=m;l=m+1}else{h=m-1}}return i};
 * ```
 * @param {string} funcName The name of the function to be compiled.
 * @param {string} predicate The predicate / comparison operator to be used in the binary search.
 * @param {boolean} reversed Whether the search should be reversed.
 * @param {string[]} extraArgs Extra arguments to be passed to the function.
 * @param {boolean=} earlyOut Whether the search should return as soon as a match is found.
 * @returns {string} The compiled binary search function.
 */
const compileSearch = (funcName, predicate, reversed, extraArgs, earlyOut) => {
	const code = [
		"function ",
		funcName,
		"(a,l,h,",
		extraArgs.join(","),
		"){",
		earlyOut ? "" : "var i=",
		reversed ? "l-1" : "h+1",
		";while(l<=h){var m=(l+h)>>>1,x=a[m]"
	];

	if (earlyOut) {
		if (!predicate.includes("c")) {
			code.push(";if(x===y){return m}else if(x<=y){");
		} else {
			code.push(";var p=c(x,y);if(p===0){return m}else if(p<=0){");
		}
	} else {
		code.push(";if(", predicate, "){i=m;");
	}
	if (reversed) {
		code.push("l=m+1}else{h=m-1}");
	} else {
		code.push("h=m-1}else{l=m+1}");
	}
	code.push("}");
	if (earlyOut) {
		code.push("return -1};");
	} else {
		code.push("return i};");
	}
	return code.join("");
};

/**
 * This helper functions generate code for two binary search functions:
 * A(): Performs a binary search on an array using the comparison operator specified.
 * P(): Performs a binary search on an array using a _custom comparison function_
 * `c(x,y)` **and** comparison operator specified by `predicate`.
 * @param {BinarySearchPredicate} predicate The predicate / comparison operator to be used in the binary search.
 * @param {boolean} reversed Whether the search should be reversed.
 * @param {SearchPredicateSuffix} suffix The suffix to be used in the function name.
 * @param {boolean=} earlyOut Whether the search should return as soon as a match is found.
 * @returns {Function} The compiled binary search function.
 */
const compileBoundsSearch = (predicate, reversed, suffix, earlyOut) => {
	const arg1 = compileSearch("A", `x${predicate}y`, reversed, ["y"], earlyOut);

	const arg2 = compileSearch(
		"P",
		`c(x,y)${predicate}0`,
		reversed,
		["y", "c"],
		earlyOut
	);

	const fnHeader = "function dispatchBinarySearch";

	const fnBody =
		// eslint-disable-next-line no-multi-str
		"(a,y,c,l,h){\
if(typeof(c)==='function'){\
return P(a,(l===void 0)?0:l|0,(h===void 0)?a.length-1:h|0,y,c)\
}else{\
return A(a,(c===void 0)?0:c|0,(l===void 0)?a.length-1:l|0,y)\
}}\
return dispatchBinarySearch";

	const fnArgList = [arg1, arg2, fnHeader, suffix, fnBody, suffix];
	const fnSource = fnArgList.join("");
	// eslint-disable-next-line no-new-func
	const result = new Function(fnSource);
	return result();
};

/**
 * These functions are used to perform binary searches on arrays.
 * @example
 * ```js
 * const { gt, le} = require("./binarySearchBounds");
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 *
 * // Find the index of the first element greater than 5
 * const index1 = gt(arr, 5); // index1 === 3
 *
 * // Find the index of the first element less than or equal to 5
 * const index2 = le(arr, 5); // index2 === 4
 * ```
 */
module.exports = {
	ge: compileBoundsSearch(">=", false, "GE"),
	gt: compileBoundsSearch(">", false, "GT"),
	lt: compileBoundsSearch("<", true, "LT"),
	le: compileBoundsSearch("<=", true, "LE"),
	eq: compileBoundsSearch("-", true, "EQ", true)
};
