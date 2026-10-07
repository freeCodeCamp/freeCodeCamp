/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const UnsupportedFeatureWarning = require("../UnsupportedFeatureWarning");
const ConstDependency = require("../dependencies/ConstDependency");
const BasicEvaluatedExpression = require("./BasicEvaluatedExpression");

/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").Node} Node */
/** @typedef {import("estree").SourceLocation} SourceLocation */
/** @typedef {import("./JavascriptParser")} JavascriptParser */
/** @typedef {import("./JavascriptParser").Range} Range */

/**
 * @param {JavascriptParser} parser the parser
 * @param {string} value the const value
 * @param {(string[] | null)=} runtimeRequirements runtime requirements
 * @returns {function(Expression): true} plugin function
 */
module.exports.toConstantDependency = (parser, value, runtimeRequirements) =>
	function constDependency(expr) {
		const dep = new ConstDependency(
			value,
			/** @type {Range} */ (expr.range),
			runtimeRequirements
		);
		dep.loc = /** @type {SourceLocation} */ (expr.loc);
		parser.state.module.addPresentationalDependency(dep);
		return true;
	};

/**
 * @param {string} value the string value
 * @returns {function(Expression): BasicEvaluatedExpression} plugin function
 */
module.exports.evaluateToString = value =>
	function stringExpression(expr) {
		return new BasicEvaluatedExpression()
			.setString(value)
			.setRange(/** @type {Range} */ (expr.range));
	};

/**
 * @param {number} value the number value
 * @returns {function(Expression): BasicEvaluatedExpression} plugin function
 */
module.exports.evaluateToNumber = value =>
	function stringExpression(expr) {
		return new BasicEvaluatedExpression()
			.setNumber(value)
			.setRange(/** @type {Range} */ (expr.range));
	};

/**
 * @param {boolean} value the boolean value
 * @returns {function(Expression): BasicEvaluatedExpression} plugin function
 */
module.exports.evaluateToBoolean = value =>
	function booleanExpression(expr) {
		return new BasicEvaluatedExpression()
			.setBoolean(value)
			.setRange(/** @type {Range} */ (expr.range));
	};

/**
 * @param {string} identifier identifier
 * @param {string} rootInfo rootInfo
 * @param {function(): string[]} getMembers getMembers
 * @param {boolean|null=} truthy is truthy, null if nullish
 * @returns {function(Expression): BasicEvaluatedExpression} callback
 */
module.exports.evaluateToIdentifier = (
	identifier,
	rootInfo,
	getMembers,
	truthy
) =>
	function identifierExpression(expr) {
		const evaluatedExpression = new BasicEvaluatedExpression()
			.setIdentifier(identifier, rootInfo, getMembers)
			.setSideEffects(false)
			.setRange(/** @type {Range} */ (expr.range));
		switch (truthy) {
			case true:
				evaluatedExpression.setTruthy();
				break;
			case null:
				evaluatedExpression.setNullish(true);
				break;
			case false:
				evaluatedExpression.setFalsy();
				break;
		}

		return evaluatedExpression;
	};

/**
 * @param {JavascriptParser} parser the parser
 * @param {string} message the message
 * @returns {function(Expression): boolean | undefined} callback to handle unsupported expression
 */
module.exports.expressionIsUnsupported = (parser, message) =>
	function unsupportedExpression(expr) {
		const dep = new ConstDependency(
			"(void 0)",
			/** @type {Range} */ (expr.range),
			null
		);
		dep.loc = /** @type {SourceLocation} */ (expr.loc);
		parser.state.module.addPresentationalDependency(dep);
		if (!parser.state.module) return;
		parser.state.module.addWarning(
			new UnsupportedFeatureWarning(
				message,
				/** @type {SourceLocation} */ (expr.loc)
			)
		);
		return true;
	};

module.exports.skipTraversal = () => true;

module.exports.approve = () => true;
