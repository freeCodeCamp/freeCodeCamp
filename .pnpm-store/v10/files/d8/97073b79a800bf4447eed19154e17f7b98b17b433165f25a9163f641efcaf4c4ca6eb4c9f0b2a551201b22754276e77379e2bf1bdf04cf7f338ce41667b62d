/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").RuleSetRule} RuleSetRule */
/** @typedef {import("./RuleSetCompiler")} RuleSetCompiler */
/** @typedef {import("./RuleSetCompiler").RuleCondition} RuleCondition */
/** @typedef {import("./RuleSetCompiler").RuleConditionFunction} RuleConditionFunction */

class ObjectMatcherRulePlugin {
	/**
	 * @param {string} ruleProperty the rule property
	 * @param {string=} dataProperty the data property
	 * @param {RuleConditionFunction=} additionalConditionFunction need to check
	 */
	constructor(ruleProperty, dataProperty, additionalConditionFunction) {
		this.ruleProperty = ruleProperty;
		this.dataProperty = dataProperty || ruleProperty;
		this.additionalConditionFunction = additionalConditionFunction;
	}

	/**
	 * @param {RuleSetCompiler} ruleSetCompiler the rule set compiler
	 * @returns {void}
	 */
	apply(ruleSetCompiler) {
		const { ruleProperty, dataProperty } = this;
		ruleSetCompiler.hooks.rule.tap(
			"ObjectMatcherRulePlugin",
			(path, rule, unhandledProperties, result) => {
				if (unhandledProperties.has(ruleProperty)) {
					unhandledProperties.delete(ruleProperty);
					const value =
						/** @type {Record<string, any>} */
						(rule[/** @type {keyof RuleSetRule} */ (ruleProperty)]);
					for (const property of Object.keys(value)) {
						const nestedDataProperties = property.split(".");
						const condition = ruleSetCompiler.compileCondition(
							`${path}.${ruleProperty}.${property}`,
							value[property]
						);
						if (this.additionalConditionFunction) {
							result.conditions.push({
								property: [dataProperty],
								matchWhenEmpty: condition.matchWhenEmpty,
								fn: this.additionalConditionFunction
							});
						}
						result.conditions.push({
							property: [dataProperty, ...nestedDataProperties],
							matchWhenEmpty: condition.matchWhenEmpty,
							fn: condition.fn
						});
					}
				}
			}
		);
	}
}

module.exports = ObjectMatcherRulePlugin;
