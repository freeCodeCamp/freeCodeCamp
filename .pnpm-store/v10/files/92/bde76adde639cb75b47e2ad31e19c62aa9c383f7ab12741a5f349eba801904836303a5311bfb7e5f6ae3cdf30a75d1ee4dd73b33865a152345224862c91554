/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncHook } = require("tapable");

/** @typedef {import("../../declarations/WebpackOptions").RuleSetRule} RuleSetRule */
/** @typedef {import("../../declarations/WebpackOptions").RuleSetRules} RuleSetRules */

/** @typedef {function(string | EffectData): boolean} RuleConditionFunction */

/**
 * @typedef {object} RuleCondition
 * @property {string | string[]} property
 * @property {boolean} matchWhenEmpty
 * @property {RuleConditionFunction} fn
 */

/**
 * @typedef {object} Condition
 * @property {boolean} matchWhenEmpty
 * @property {RuleConditionFunction} fn
 */

/**
 * @typedef {Record<string, TODO>} EffectData
 */

/**
 * @typedef {object} CompiledRule
 * @property {RuleCondition[]} conditions
 * @property {(Effect|function(EffectData): Effect[])[]} effects
 * @property {CompiledRule[]=} rules
 * @property {CompiledRule[]=} oneOf
 */

/**
 * @typedef {object} Effect
 * @property {string} type
 * @property {any} value
 */

/**
 * @typedef {object} RuleSet
 * @property {Map<string, any>} references map of references in the rule set (may grow over time)
 * @property {function(EffectData): Effect[]} exec execute the rule set
 */

/** @typedef {{ apply: (function(RuleSetCompiler): void) }} RuleSetPlugin */

class RuleSetCompiler {
	/**
	 * @param {RuleSetPlugin[]} plugins plugins
	 */
	constructor(plugins) {
		this.hooks = Object.freeze({
			/** @type {SyncHook<[string, RuleSetRule, Set<string>, CompiledRule, Map<string | undefined, any>]>} */
			rule: new SyncHook([
				"path",
				"rule",
				"unhandledProperties",
				"compiledRule",
				"references"
			])
		});
		if (plugins) {
			for (const plugin of plugins) {
				plugin.apply(this);
			}
		}
	}

	/**
	 * @param {TODO[]} ruleSet raw user provided rules
	 * @returns {RuleSet} compiled RuleSet
	 */
	compile(ruleSet) {
		const refs = new Map();
		const rules = this.compileRules("ruleSet", ruleSet, refs);

		/**
		 * @param {EffectData} data data passed in
		 * @param {CompiledRule} rule the compiled rule
		 * @param {Effect[]} effects an array where effects are pushed to
		 * @returns {boolean} true, if the rule has matched
		 */
		const execRule = (data, rule, effects) => {
			for (const condition of rule.conditions) {
				const p = condition.property;
				if (Array.isArray(p)) {
					/** @type {EffectData | string | undefined} */
					let current = data;
					for (const subProperty of p) {
						if (
							current &&
							typeof current === "object" &&
							Object.prototype.hasOwnProperty.call(current, subProperty)
						) {
							current = current[subProperty];
						} else {
							current = undefined;
							break;
						}
					}
					if (current !== undefined) {
						if (!condition.fn(current)) return false;
						continue;
					}
				} else if (p in data) {
					const value = data[p];
					if (value !== undefined) {
						if (!condition.fn(value)) return false;
						continue;
					}
				}
				if (!condition.matchWhenEmpty) {
					return false;
				}
			}
			for (const effect of rule.effects) {
				if (typeof effect === "function") {
					const returnedEffects = effect(data);
					for (const effect of returnedEffects) {
						effects.push(effect);
					}
				} else {
					effects.push(effect);
				}
			}
			if (rule.rules) {
				for (const childRule of rule.rules) {
					execRule(data, childRule, effects);
				}
			}
			if (rule.oneOf) {
				for (const childRule of rule.oneOf) {
					if (execRule(data, childRule, effects)) {
						break;
					}
				}
			}
			return true;
		};

		return {
			references: refs,
			exec: data => {
				/** @type {Effect[]} */
				const effects = [];
				for (const rule of rules) {
					execRule(data, rule, effects);
				}
				return effects;
			}
		};
	}

	/**
	 * @param {string} path current path
	 * @param {RuleSetRules} rules the raw rules provided by user
	 * @param {Map<string, any>} refs references
	 * @returns {CompiledRule[]} rules
	 */
	compileRules(path, rules, refs) {
		return rules
			.filter(Boolean)
			.map((rule, i) =>
				this.compileRule(
					`${path}[${i}]`,
					/** @type {RuleSetRule} */ (rule),
					refs
				)
			);
	}

	/**
	 * @param {string} path current path
	 * @param {RuleSetRule} rule the raw rule provided by user
	 * @param {Map<string, any>} refs references
	 * @returns {CompiledRule} normalized and compiled rule for processing
	 */
	compileRule(path, rule, refs) {
		const unhandledProperties = new Set(
			Object.keys(rule).filter(
				key => rule[/** @type {keyof RuleSetRule} */ (key)] !== undefined
			)
		);

		/** @type {CompiledRule} */
		const compiledRule = {
			conditions: [],
			effects: [],
			rules: undefined,
			oneOf: undefined
		};

		this.hooks.rule.call(path, rule, unhandledProperties, compiledRule, refs);

		if (unhandledProperties.has("rules")) {
			unhandledProperties.delete("rules");
			const rules = rule.rules;
			if (!Array.isArray(rules))
				throw this.error(path, rules, "Rule.rules must be an array of rules");
			compiledRule.rules = this.compileRules(`${path}.rules`, rules, refs);
		}

		if (unhandledProperties.has("oneOf")) {
			unhandledProperties.delete("oneOf");
			const oneOf = rule.oneOf;
			if (!Array.isArray(oneOf))
				throw this.error(path, oneOf, "Rule.oneOf must be an array of rules");
			compiledRule.oneOf = this.compileRules(`${path}.oneOf`, oneOf, refs);
		}

		if (unhandledProperties.size > 0) {
			throw this.error(
				path,
				rule,
				`Properties ${Array.from(unhandledProperties).join(", ")} are unknown`
			);
		}

		return compiledRule;
	}

	/**
	 * @param {string} path current path
	 * @param {any} condition user provided condition value
	 * @returns {Condition} compiled condition
	 */
	compileCondition(path, condition) {
		if (condition === "") {
			return {
				matchWhenEmpty: true,
				fn: str => str === ""
			};
		}
		if (!condition) {
			throw this.error(
				path,
				condition,
				"Expected condition but got falsy value"
			);
		}
		if (typeof condition === "string") {
			return {
				matchWhenEmpty: condition.length === 0,
				fn: str => typeof str === "string" && str.startsWith(condition)
			};
		}
		if (typeof condition === "function") {
			try {
				return {
					matchWhenEmpty: condition(""),
					fn: condition
				};
			} catch (_err) {
				throw this.error(
					path,
					condition,
					"Evaluation of condition function threw error"
				);
			}
		}
		if (condition instanceof RegExp) {
			return {
				matchWhenEmpty: condition.test(""),
				fn: v => typeof v === "string" && condition.test(v)
			};
		}
		if (Array.isArray(condition)) {
			const items = condition.map((c, i) =>
				this.compileCondition(`${path}[${i}]`, c)
			);
			return this.combineConditionsOr(items);
		}

		if (typeof condition !== "object") {
			throw this.error(
				path,
				condition,
				`Unexpected ${typeof condition} when condition was expected`
			);
		}

		const conditions = [];
		for (const key of Object.keys(condition)) {
			const value = condition[key];
			switch (key) {
				case "or":
					if (value) {
						if (!Array.isArray(value)) {
							throw this.error(
								`${path}.or`,
								condition.or,
								"Expected array of conditions"
							);
						}
						conditions.push(this.compileCondition(`${path}.or`, value));
					}
					break;
				case "and":
					if (value) {
						if (!Array.isArray(value)) {
							throw this.error(
								`${path}.and`,
								condition.and,
								"Expected array of conditions"
							);
						}
						let i = 0;
						for (const item of value) {
							conditions.push(this.compileCondition(`${path}.and[${i}]`, item));
							i++;
						}
					}
					break;
				case "not":
					if (value) {
						const matcher = this.compileCondition(`${path}.not`, value);
						const fn = matcher.fn;
						conditions.push({
							matchWhenEmpty: !matcher.matchWhenEmpty,
							fn: /** @type {RuleConditionFunction} */ (v => !fn(v))
						});
					}
					break;
				default:
					throw this.error(
						`${path}.${key}`,
						condition[key],
						`Unexpected property ${key} in condition`
					);
			}
		}
		if (conditions.length === 0) {
			throw this.error(
				path,
				condition,
				"Expected condition, but got empty thing"
			);
		}
		return this.combineConditionsAnd(conditions);
	}

	/**
	 * @param {Condition[]} conditions some conditions
	 * @returns {Condition} merged condition
	 */
	combineConditionsOr(conditions) {
		if (conditions.length === 0) {
			return {
				matchWhenEmpty: false,
				fn: () => false
			};
		} else if (conditions.length === 1) {
			return conditions[0];
		}
		return {
			matchWhenEmpty: conditions.some(c => c.matchWhenEmpty),
			fn: v => conditions.some(c => c.fn(v))
		};
	}

	/**
	 * @param {Condition[]} conditions some conditions
	 * @returns {Condition} merged condition
	 */
	combineConditionsAnd(conditions) {
		if (conditions.length === 0) {
			return {
				matchWhenEmpty: false,
				fn: () => false
			};
		} else if (conditions.length === 1) {
			return conditions[0];
		}
		return {
			matchWhenEmpty: conditions.every(c => c.matchWhenEmpty),
			fn: v => conditions.every(c => c.fn(v))
		};
	}

	/**
	 * @param {string} path current path
	 * @param {any} value value at the error location
	 * @param {string} message message explaining the problem
	 * @returns {Error} an error object
	 */
	error(path, value, message) {
		return new Error(
			`Compiling RuleSet failed: ${message} (at ${path}: ${value})`
		);
	}
}

module.exports = RuleSetCompiler;
