/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").RuleSetRule} RuleSetRule */
/** @typedef {import("./RuleSetCompiler")} RuleSetCompiler */
/** @typedef {import("./RuleSetCompiler").RuleCondition} RuleCondition */

class BasicMatcherRulePlugin {
	/**
	 * @param {string} ruleProperty the rule property
	 * @param {string=} dataProperty the data property
	 * @param {boolean=} invert if true, inverts the condition
	 */
	constructor(ruleProperty, dataProperty, invert) {
		this.ruleProperty = ruleProperty;
		this.dataProperty = dataProperty || ruleProperty;
		this.invert = invert || false;
	}

	/**
	 * @param {RuleSetCompiler} ruleSetCompiler the rule set compiler
	 * @returns {void}
	 */
	apply(ruleSetCompiler) {
		ruleSetCompiler.hooks.rule.tap(
			"BasicMatcherRulePlugin",
			(path, rule, unhandledProperties, result) => {
				if (unhandledProperties.has(this.ruleProperty)) {
					unhandledProperties.delete(this.ruleProperty);
					const value =
						rule[/** @type {keyof RuleSetRule} */ (this.ruleProperty)];
					const condition = ruleSetCompiler.compileCondition(
						`${path}.${this.ruleProperty}`,
						value
					);
					const fn = condition.fn;
					result.conditions.push({
						property: this.dataProperty,
						matchWhenEmpty: this.invert
							? !condition.matchWhenEmpty
							: condition.matchWhenEmpty,
						fn: this.invert ? v => !fn(v) : fn
					});
				}
			}
		);
	}
}

module.exports = BasicMatcherRulePlugin;
