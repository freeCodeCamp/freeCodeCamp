/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("estree").ArrowFunctionExpression} ArrowFunctionExpression */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").FunctionExpression} FunctionExpression */
/** @typedef {import("estree").SpreadElement} SpreadElement */

/**
 * @param {Expression | SpreadElement} expr expressions
 * @returns {{fn: FunctionExpression | ArrowFunctionExpression, expressions: (Expression | SpreadElement)[], needThis: boolean | undefined } | undefined} function expression with additional information
 */
module.exports = expr => {
	// <FunctionExpression>
	if (
		expr.type === "FunctionExpression" ||
		expr.type === "ArrowFunctionExpression"
	) {
		return {
			fn: expr,
			expressions: [],
			needThis: false
		};
	}

	// <FunctionExpression>.bind(<Expression>)
	if (
		expr.type === "CallExpression" &&
		expr.callee.type === "MemberExpression" &&
		expr.callee.object.type === "FunctionExpression" &&
		expr.callee.property.type === "Identifier" &&
		expr.callee.property.name === "bind" &&
		expr.arguments.length === 1
	) {
		return {
			fn: expr.callee.object,
			expressions: [expr.arguments[0]],
			needThis: undefined
		};
	}
	// (function(_this) {return <FunctionExpression>})(this) (Coffeescript)
	if (
		expr.type === "CallExpression" &&
		expr.callee.type === "FunctionExpression" &&
		expr.callee.body.type === "BlockStatement" &&
		expr.arguments.length === 1 &&
		expr.arguments[0].type === "ThisExpression" &&
		expr.callee.body.body &&
		expr.callee.body.body.length === 1 &&
		expr.callee.body.body[0].type === "ReturnStatement" &&
		expr.callee.body.body[0].argument &&
		expr.callee.body.body[0].argument.type === "FunctionExpression"
	) {
		return {
			fn: expr.callee.body.body[0].argument,
			expressions: [],
			needThis: true
		};
	}
};
