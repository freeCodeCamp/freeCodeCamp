/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncHook } = require("tapable");

/** @typedef {import("enhanced-resolve").ResolveRequest} ResolveRequest */
/** @typedef {import("../../declarations/WebpackOptions").Falsy} Falsy */
/** @typedef {import("../../declarations/WebpackOptions").RuleSetUseItem} RuleSetUseItem */
/** @typedef {import("../../declarations/WebpackOptions").RuleSetLoaderOptions} RuleSetLoaderOptions */
/** @typedef {import("../../declarations/WebpackOptions").RuleSetRule} RuleSetRule */

/** @typedef {(Falsy | RuleSetRule)[]} RuleSetRules */

/**
 * Defines the rule condition function type used by this module.
 * @typedef {(value: EffectData[keyof EffectData]) => boolean} RuleConditionFunction
 */

/**
 * Defines the rule condition type used by this module.
 * @typedef {object} RuleCondition
 * @property {string | string[]} property
 * @property {boolean} matchWhenEmpty
 * @property {RuleConditionFunction} fn
 */

/**
 * Defines the condition type used by this module.
 * @typedef {object} Condition
 * @property {boolean} matchWhenEmpty
 * @property {RuleConditionFunction} fn
 */

/**
 * Defines the effect data type used by this module.
 * @typedef {object} EffectData
 * @property {string=} resource
 * @property {string=} realResource
 * @property {string=} resourceQuery
 * @property {string=} resourceFragment
 * @property {string=} scheme
 * @property {ImportAttributes=} attributes
 * @property {string=} mimetype
 * @property {string} dependency
 * @property {ResolveRequest["descriptionFileData"]=} descriptionData
 * @property {string=} compiler
 * @property {string} issuer
 * @property {string} issuerLayer
 * @property {string=} phase
 */

/**
 * Defines the compiled rule type used by this module.
 * @typedef {object} CompiledRule
 * @property {RuleCondition[]} conditions
 * @property {(Effect | ((effectData: EffectData) => Effect[]))[]} effects
 * @property {CompiledRule[]=} rules
 * @property {CompiledRule[]=} oneOf
 */

/** @typedef {"use" | "use-pre" | "use-post"} EffectUseType */

/**
 * Defines the effect use type used by this module.
 * @typedef {object} EffectUse
 * @property {EffectUseType} type
 * @property {{ loader: string, options?: string | null | Record<string, EXPECTED_ANY>, ident?: string }} value
 */

/**
 * Defines the effect basic type used by this module.
 * @typedef {object} EffectBasic
 * @property {string} type
 * @property {EXPECTED_ANY} value
 */

/** @typedef {EffectUse | EffectBasic} Effect */

/** @typedef {Map<string, RuleSetLoaderOptions>} References */

/**
 * Defines the rule set type used by this module.
 * @typedef {object} RuleSet
 * @property {References} references map of references in the rule set (may grow over time)
 * @property {(effectData: EffectData) => Effect[]} exec execute the rule set
 */

/**
 * Defines the keys of types type used by this module.
 * @template T
 * @template {T[keyof T]} V
 * @typedef {({ [key in keyof Required<T>]: Required<T>[key] extends V ? key : never })[keyof T]} KeysOfTypes
 */

/** @typedef {Set<string>} UnhandledProperties */

/** @typedef {(data: EffectData) => (RuleSetUseItem | (Falsy | RuleSetUseItem)[])} RuleSetUseFn */
/** @typedef {(value: string) => boolean} RuleSetConditionFn */

/** @typedef {{ apply: (ruleSetCompiler: RuleSetCompiler) => void }} RuleSetPlugin */

class RuleSetCompiler {
	/**
	 * Creates an instance of RuleSetCompiler.
	 * @param {RuleSetPlugin[]} plugins plugins
	 */
	constructor(plugins) {
		this.hooks = Object.freeze({
			/** @type {SyncHook<[string, RuleSetRule, UnhandledProperties, CompiledRule, References]>} */
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
	 * Returns compiled RuleSet.
	 * @param {RuleSetRules} ruleSet raw user provided rules
	 * @returns {RuleSet} compiled RuleSet
	 */
	compile(ruleSet) {
		/** @type {References} */
		const refs = new Map();
		const rules = this.compileRules("ruleSet", ruleSet, refs);

		/**
		 * Returns true, if the rule has matched.
		 * @param {EffectData} data data passed in
		 * @param {CompiledRule} rule the compiled rule
		 * @param {Effect[]} effects an array where effects are pushed to
		 * @returns {boolean} true, if the rule has matched
		 */
		const execRule = (data, rule, effects) => {
			for (const condition of rule.conditions) {
				const p = condition.property;
				if (Array.isArray(p)) {
					/** @type {EXPECTED_ANY} */
					let current = data;
					for (const subProperty of p) {
						if (
							current &&
							typeof current === "object" &&
							Object.prototype.hasOwnProperty.call(current, subProperty)
						) {
							current = current[/** @type {keyof EffectData} */ (subProperty)];
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
					const value = data[/** @type {keyof EffectData} */ (p)];
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
			exec: (data) => {
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
	 * Returns rules.
	 * @param {string} path current path
	 * @param {RuleSetRules} rules the raw rules provided by user
	 * @param {References} refs references
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
	 * Returns normalized and compiled rule for processing.
	 * @param {string} path current path
	 * @param {RuleSetRule} rule the raw rule provided by user
	 * @param {References} refs references
	 * @returns {CompiledRule} normalized and compiled rule for processing
	 */
	compileRule(path, rule, refs) {
		/** @type {UnhandledProperties} */
		const unhandledProperties = new Set(
			Object.keys(rule).filter(
				(key) => rule[/** @type {keyof RuleSetRule} */ (key)] !== undefined
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
			if (!Array.isArray(rules)) {
				throw this.error(path, rules, "Rule.rules must be an array of rules");
			}
			compiledRule.rules = this.compileRules(`${path}.rules`, rules, refs);
		}

		if (unhandledProperties.has("oneOf")) {
			unhandledProperties.delete("oneOf");
			const oneOf = rule.oneOf;
			if (!Array.isArray(oneOf)) {
				throw this.error(path, oneOf, "Rule.oneOf must be an array of rules");
			}
			compiledRule.oneOf = this.compileRules(`${path}.oneOf`, oneOf, refs);
		}

		if (unhandledProperties.size > 0) {
			throw this.error(
				path,
				rule,
				`Properties ${[...unhandledProperties].join(", ")} are unknown`
			);
		}

		return compiledRule;
	}

	/**
	 * Returns compiled condition.
	 * @param {string} path current path
	 * @param {RuleSetLoaderOptions} condition user provided condition value
	 * @returns {Condition} compiled condition
	 */
	compileCondition(path, condition) {
		if (condition === "") {
			return {
				matchWhenEmpty: true,
				fn: (str) => str === ""
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
				fn: (str) => typeof str === "string" && str.startsWith(condition)
			};
		}
		if (typeof condition === "function") {
			try {
				return {
					matchWhenEmpty: condition(""),
					fn: /** @type {RuleConditionFunction} */ (condition)
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
				fn: (v) => typeof v === "string" && condition.test(v)
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

		/** @type {Condition[]} */
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
							fn: /** @type {RuleConditionFunction} */ ((v) => !fn(v))
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
	 * Combine conditions or.
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
			matchWhenEmpty: conditions.some((c) => c.matchWhenEmpty),
			fn: (v) => conditions.some((c) => c.fn(v))
		};
	}

	/**
	 * Combine conditions and.
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
			matchWhenEmpty: conditions.every((c) => c.matchWhenEmpty),
			fn: (v) => conditions.every((c) => c.fn(v))
		};
	}

	/**
	 * Returns an error object.
	 * @param {string} path current path
	 * @param {EXPECTED_ANY} value value at the error location
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
