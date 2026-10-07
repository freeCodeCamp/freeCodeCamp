/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").RuleSetConditionOrConditions} RuleSetConditionOrConditions */
/** @typedef {import("../../declarations/WebpackOptions").RuleSetRule} RuleSetRule */
/** @typedef {import("./RuleSetCompiler")} RuleSetCompiler */
/** @typedef {import("./RuleSetCompiler").EffectData} EffectData */
/** @typedef {import("./RuleSetCompiler").RuleConditionFunction} RuleConditionFunction */

/**
 * Defines the keys of types type used by this module.
 * @template T
 * @template {T[keyof T]} V
 * @typedef {import("./RuleSetCompiler").KeysOfTypes<T, V>} KeysOfTypes
 */

/** @typedef {KeysOfTypes<RuleSetRule, { [k: string]: RuleSetConditionOrConditions }>} ObjectMatcherRuleKeys */
/** @typedef {keyof EffectData} DataProperty */

const PLUGIN_NAME = "ObjectMatcherRulePlugin";

class ObjectMatcherRulePlugin {
	/**
	 * Creates an instance of ObjectMatcherRulePlugin.
	 * @param {ObjectMatcherRuleKeys} ruleProperty the rule property
	 * @param {DataProperty=} dataProperty the data property
	 * @param {RuleConditionFunction=} additionalConditionFunction need to check
	 */
	constructor(ruleProperty, dataProperty, additionalConditionFunction) {
		/** @type {ObjectMatcherRuleKeys} */
		this.ruleProperty = ruleProperty;
		/** @type {DataProperty | ObjectMatcherRuleKeys} */
		this.dataProperty = dataProperty || ruleProperty;
		/** @type {RuleConditionFunction | undefined} */
		this.additionalConditionFunction = additionalConditionFunction;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {RuleSetCompiler} ruleSetCompiler the rule set compiler
	 * @returns {void}
	 */
	apply(ruleSetCompiler) {
		const { ruleProperty, dataProperty } = this;
		ruleSetCompiler.hooks.rule.tap(
			PLUGIN_NAME,
			(path, rule, unhandledProperties, result) => {
				if (unhandledProperties.has(ruleProperty)) {
					unhandledProperties.delete(ruleProperty);
					const value =
						/** @type {Record<string, RuleSetConditionOrConditions>} */
						(rule[ruleProperty]);
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
