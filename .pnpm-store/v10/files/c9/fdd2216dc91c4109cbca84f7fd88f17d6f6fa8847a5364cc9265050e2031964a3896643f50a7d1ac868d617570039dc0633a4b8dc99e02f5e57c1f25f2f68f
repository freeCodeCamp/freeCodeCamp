/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");

/** @typedef {import("../../declarations/WebpackOptions").RuleSetLoader} RuleSetLoader */
/** @typedef {import("../../declarations/WebpackOptions").RuleSetLoaderOptions} RuleSetLoaderOptions */
/** @typedef {import("../../declarations/WebpackOptions").RuleSetRule} RuleSetRule */
/** @typedef {import("./RuleSetCompiler")} RuleSetCompiler */
/** @typedef {import("./RuleSetCompiler").Effect} Effect */

class UseEffectRulePlugin {
	/**
	 * @param {RuleSetCompiler} ruleSetCompiler the rule set compiler
	 * @returns {void}
	 */
	apply(ruleSetCompiler) {
		ruleSetCompiler.hooks.rule.tap(
			"UseEffectRulePlugin",
			(path, rule, unhandledProperties, result, references) => {
				/**
				 * @param {keyof RuleSetRule} property property
				 * @param {string} correctProperty correct property
				 */
				const conflictWith = (property, correctProperty) => {
					if (unhandledProperties.has(property)) {
						throw ruleSetCompiler.error(
							`${path}.${property}`,
							rule[property],
							`A Rule must not have a '${property}' property when it has a '${correctProperty}' property`
						);
					}
				};

				if (unhandledProperties.has("use")) {
					unhandledProperties.delete("use");
					unhandledProperties.delete("enforce");

					conflictWith("loader", "use");
					conflictWith("options", "use");

					const use = rule.use;
					const enforce = rule.enforce;

					const type = enforce ? `use-${enforce}` : "use";

					/**
					 * @param {string} path options path
					 * @param {string} defaultIdent default ident when none is provided
					 * @param {object} item user provided use value
					 * @returns {Effect|function(any): Effect[]} effect
					 */
					const useToEffect = (path, defaultIdent, item) => {
						if (typeof item === "function") {
							return data => useToEffectsWithoutIdent(path, item(data));
						}
						return useToEffectRaw(path, defaultIdent, item);
					};

					/**
					 * @param {string} path options path
					 * @param {string} defaultIdent default ident when none is provided
					 * @param {{ ident?: string, loader?: RuleSetLoader, options?: RuleSetLoaderOptions }} item user provided use value
					 * @returns {Effect} effect
					 */
					const useToEffectRaw = (path, defaultIdent, item) => {
						if (typeof item === "string") {
							return {
								type,
								value: {
									loader: item,
									options: undefined,
									ident: undefined
								}
							};
						}
						const loader = item.loader;
						const options = item.options;
						let ident = item.ident;
						if (options && typeof options === "object") {
							if (!ident) ident = defaultIdent;
							references.set(ident, options);
						}
						if (typeof options === "string") {
							util.deprecate(
								() => {},
								`Using a string as loader options is deprecated (${path}.options)`,
								"DEP_WEBPACK_RULE_LOADER_OPTIONS_STRING"
							)();
						}
						return {
							type: enforce ? `use-${enforce}` : "use",
							value: {
								loader,
								options,
								ident
							}
						};
					};

					/**
					 * @param {string} path options path
					 * @param {any} items user provided use value
					 * @returns {Effect[]} effects
					 */
					const useToEffectsWithoutIdent = (path, items) => {
						if (Array.isArray(items)) {
							return items
								.filter(Boolean)
								.map((item, idx) =>
									useToEffectRaw(`${path}[${idx}]`, "[[missing ident]]", item)
								);
						}
						return [useToEffectRaw(path, "[[missing ident]]", items)];
					};

					/**
					 * @param {string} path current path
					 * @param {any} items user provided use value
					 * @returns {(Effect|function(any): Effect[])[]} effects
					 */
					const useToEffects = (path, items) => {
						if (Array.isArray(items)) {
							return items.filter(Boolean).map((item, idx) => {
								const subPath = `${path}[${idx}]`;
								return useToEffect(subPath, subPath, item);
							});
						}
						return [useToEffect(path, path, items)];
					};

					if (typeof use === "function") {
						result.effects.push(data =>
							useToEffectsWithoutIdent(
								`${path}.use`,
								use(/** @type {TODO} */ (data))
							)
						);
					} else {
						for (const effect of useToEffects(`${path}.use`, use)) {
							result.effects.push(effect);
						}
					}
				}

				if (unhandledProperties.has("loader")) {
					unhandledProperties.delete("loader");
					unhandledProperties.delete("options");
					unhandledProperties.delete("enforce");

					const loader = /** @type {RuleSetLoader} */ (rule.loader);
					const options = rule.options;
					const enforce = rule.enforce;

					if (loader.includes("!")) {
						throw ruleSetCompiler.error(
							`${path}.loader`,
							loader,
							"Exclamation mark separated loader lists has been removed in favor of the 'use' property with arrays"
						);
					}

					if (loader.includes("?")) {
						throw ruleSetCompiler.error(
							`${path}.loader`,
							loader,
							"Query arguments on 'loader' has been removed in favor of the 'options' property"
						);
					}

					if (typeof options === "string") {
						util.deprecate(
							() => {},
							`Using a string as loader options is deprecated (${path}.options)`,
							"DEP_WEBPACK_RULE_LOADER_OPTIONS_STRING"
						)();
					}

					const ident =
						options && typeof options === "object" ? path : undefined;
					references.set(ident, options);
					result.effects.push({
						type: enforce ? `use-${enforce}` : "use",
						value: {
							loader,
							options,
							ident
						}
					});
				}
			}
		);
	}
}

module.exports = UseEffectRulePlugin;
