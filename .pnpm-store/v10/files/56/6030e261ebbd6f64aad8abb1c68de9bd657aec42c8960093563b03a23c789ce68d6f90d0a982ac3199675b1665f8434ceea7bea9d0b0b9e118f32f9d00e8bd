/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").RuleSetRule} RuleSetRule */
/** @typedef {import("./RuleSetCompiler")} RuleSetCompiler */

/**
 * Defines the keys of types type used by this module.
 * @template T
 * @template {T[keyof T]} V
 * @typedef {import("./RuleSetCompiler").KeysOfTypes<T, V>} KeysOfTypes
 */

/** @typedef {KeysOfTypes<RuleSetRule, string | boolean | { [k: string]: EXPECTED_ANY }>} BasicEffectRuleKeys */

const PLUGIN_NAME = "BasicEffectRulePlugin";

class BasicEffectRulePlugin {
	/**
	 * Creates an instance of BasicEffectRulePlugin.
	 * @param {BasicEffectRuleKeys} ruleProperty the rule property
	 * @param {string=} effectType the effect type
	 */
	constructor(ruleProperty, effectType) {
		/** @type {BasicEffectRuleKeys} */
		this.ruleProperty = ruleProperty;
		/** @type {string | BasicEffectRuleKeys} */
		this.effectType = effectType || ruleProperty;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {RuleSetCompiler} ruleSetCompiler the rule set compiler
	 * @returns {void}
	 */
	apply(ruleSetCompiler) {
		ruleSetCompiler.hooks.rule.tap(
			PLUGIN_NAME,
			(path, rule, unhandledProperties, result) => {
				if (unhandledProperties.has(this.ruleProperty)) {
					unhandledProperties.delete(this.ruleProperty);

					const value = rule[this.ruleProperty];

					result.effects.push({
						type: this.effectType,
						value
					});
				}
			}
		);
	}
}

module.exports = BasicEffectRulePlugin;
