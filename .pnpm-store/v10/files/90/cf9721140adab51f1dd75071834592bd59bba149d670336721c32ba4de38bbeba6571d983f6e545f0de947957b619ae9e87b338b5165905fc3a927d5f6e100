'use strict';

var fs = require('node:fs');
var path = require('node:path');

/**
 * @filedescription Functions to fix up rules to provide missing methods on the `context` object.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------

/** @typedef {import("@eslint/core").Plugin} FixupPluginDefinition */
/** @typedef {import("@eslint/core").RuleDefinition} FixupRuleDefinition */
/** @typedef {FixupRuleDefinition["create"]} FixupLegacyRuleDefinition */
/** @typedef {import("@eslint/core").ConfigObject} FixupConfig */
/** @typedef {Array<FixupConfig>} FixupConfigArray */

//-----------------------------------------------------------------------------
// Data
//-----------------------------------------------------------------------------

/**
 * The removed methods from the `context` object that need to be added back.
 * The keys are the name of the method on the `context` object and the values
 * are the name of the method on the `sourceCode` object.
 * @type {Map<string, string>}
 */
const removedMethodNames = new Map([
	["getSource", "getText"],
	["getSourceLines", "getLines"],
	["getAllComments", "getAllComments"],
	["getDeclaredVariables", "getDeclaredVariables"],
	["getNodeByRangeIndex", "getNodeByRangeIndex"],
	["getCommentsBefore", "getCommentsBefore"],
	["getCommentsAfter", "getCommentsAfter"],
	["getCommentsInside", "getCommentsInside"],
	["getJSDocComment", "getJSDocComment"],
	["getFirstToken", "getFirstToken"],
	["getFirstTokens", "getFirstTokens"],
	["getLastToken", "getLastToken"],
	["getLastTokens", "getLastTokens"],
	["getTokenAfter", "getTokenAfter"],
	["getTokenBefore", "getTokenBefore"],
	["getTokenByRangeStart", "getTokenByRangeStart"],
	["getTokens", "getTokens"],
	["getTokensAfter", "getTokensAfter"],
	["getTokensBefore", "getTokensBefore"],
	["getTokensBetween", "getTokensBetween"],
]);

/**
 * Tracks the original rule definition and the fixed-up rule definition.
 * @type {WeakMap<FixupRuleDefinition|FixupLegacyRuleDefinition,FixupRuleDefinition>}
 */
const fixedUpRuleReplacements = new WeakMap();

/**
 * Tracks all of the fixed up rule definitions so we don't duplicate effort.
 * @type {WeakSet<FixupRuleDefinition>}
 */
const fixedUpRules = new WeakSet();

/**
 * Tracks the original plugin definition and the fixed-up plugin definition.
 * @type {WeakMap<FixupPluginDefinition,FixupPluginDefinition>}
 */
const fixedUpPluginReplacements = new WeakMap();

/**
 * Tracks all of the fixed up plugin definitions so we don't duplicate effort.
 * @type {WeakSet<FixupPluginDefinition>}
 */
const fixedUpPlugins = new WeakSet();

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Takes the given rule and creates a new rule with the `create()` method wrapped
 * to provide the missing methods on the `context` object.
 * @param {FixupRuleDefinition|FixupLegacyRuleDefinition} ruleDefinition The rule to fix up.
 * @returns {FixupRuleDefinition} The fixed-up rule.
 */
function fixupRule(ruleDefinition) {
	// first check if we've already fixed up this rule
	if (fixedUpRuleReplacements.has(ruleDefinition)) {
		return fixedUpRuleReplacements.get(ruleDefinition);
	}

	const isLegacyRule = typeof ruleDefinition === "function";

	// check to see if this rule definition has already been fixed up
	if (!isLegacyRule && fixedUpRules.has(ruleDefinition)) {
		return ruleDefinition;
	}

	const originalCreate = isLegacyRule
		? ruleDefinition
		: ruleDefinition.create.bind(ruleDefinition);

	function ruleCreate(context) {
		// if getScope is already there then no need to create old methods
		if ("getScope" in context) {
			return originalCreate(context);
		}

		const sourceCode = context.sourceCode;
		let currentNode = sourceCode.ast;

		const newContext = Object.assign(Object.create(context), {
			parserServices: sourceCode.parserServices,

			/*
			 * The following methods rely on the current node in the traversal,
			 * so we need to add them manually.
			 */
			getScope() {
				return sourceCode.getScope(currentNode);
			},

			getAncestors() {
				return sourceCode.getAncestors(currentNode);
			},

			markVariableAsUsed(variable) {
				sourceCode.markVariableAsUsed(variable, currentNode);
			},
		});

		// add passthrough methods
		for (const [
			contextMethodName,
			sourceCodeMethodName,
		] of removedMethodNames) {
			newContext[contextMethodName] =
				sourceCode[sourceCodeMethodName].bind(sourceCode);
		}

		// freeze just like the original context
		Object.freeze(newContext);

		/*
		 * Create the visitor object using the original create() method.
		 * This is necessary to ensure that the visitor object is created
		 * with the correct context.
		 */
		const visitor = originalCreate(newContext);

		/*
		 * Wrap each method in the visitor object to update the currentNode
		 * before calling the original method. This is necessary because the
		 * methods like `getScope()` need to know the current node.
		 */
		for (const [methodName, method] of Object.entries(visitor)) {
			/*
			 * Node is the second argument to most code path methods,
			 * and the third argument for onCodePathSegmentLoop.
			 */
			if (methodName.startsWith("on")) {
				// eslint-disable-next-line no-loop-func -- intentionally updating shared `currentNode` variable
				visitor[methodName] = (...args) => {
					currentNode =
						args[methodName === "onCodePathSegmentLoop" ? 2 : 1];

					return method.call(visitor, ...args);
				};

				continue;
			}

			// eslint-disable-next-line no-loop-func -- intentionally updating shared `currentNode` variable
			visitor[methodName] = (...args) => {
				currentNode = args[0];

				return method.call(visitor, ...args);
			};
		}

		return visitor;
	}

	const newRuleDefinition = {
		...(isLegacyRule ? undefined : ruleDefinition),
		create: ruleCreate,
	};

	// copy `schema` property of function-style rule or top-level `schema` property of object-style rule into `meta` object
	// @ts-ignore -- top-level `schema` property was not offically supported for object-style rules so it doesn't exist in types
	const { schema } = ruleDefinition;
	if (schema) {
		if (!newRuleDefinition.meta) {
			newRuleDefinition.meta = { schema };
		} else {
			newRuleDefinition.meta = {
				...newRuleDefinition.meta,
				// top-level `schema` had precedence over `meta.schema` so it's okay to overwrite `meta.schema` if it exists
				schema,
			};
		}
	}

	// cache the fixed up rule
	fixedUpRuleReplacements.set(ruleDefinition, newRuleDefinition);
	fixedUpRules.add(newRuleDefinition);

	return newRuleDefinition;
}

/**
 * Takes the given plugin and creates a new plugin with all of the rules wrapped
 * to provide the missing methods on the `context` object.
 * @param {FixupPluginDefinition} plugin The plugin to fix up.
 * @returns {FixupPluginDefinition} The fixed-up plugin.
 */
function fixupPluginRules(plugin) {
	// first check if we've already fixed up this plugin
	if (fixedUpPluginReplacements.has(plugin)) {
		return fixedUpPluginReplacements.get(plugin);
	}

	/*
	 * If the plugin has already been fixed up, or if the plugin
	 * doesn't have any rules, we can just return it.
	 */
	if (fixedUpPlugins.has(plugin) || !plugin.rules) {
		return plugin;
	}

	const newPlugin = {
		...plugin,
		rules: Object.fromEntries(
			Object.entries(plugin.rules).map(([ruleId, ruleDefinition]) => [
				ruleId,
				fixupRule(ruleDefinition),
			]),
		),
	};

	// cache the fixed up plugin
	fixedUpPluginReplacements.set(plugin, newPlugin);
	fixedUpPlugins.add(newPlugin);

	return newPlugin;
}

/**
 * Takes the given configuration and creates a new configuration with all of the
 * rules wrapped to provide the missing methods on the `context` object.
 * @param {FixupConfigArray|FixupConfig} config The configuration to fix up.
 * @returns {FixupConfigArray} The fixed-up configuration.
 */
function fixupConfigRules(config) {
	const configs = Array.isArray(config) ? config : [config];

	return configs.map(configItem => {
		if (!configItem.plugins) {
			return configItem;
		}

		const newPlugins = Object.fromEntries(
			Object.entries(configItem.plugins).map(([pluginName, plugin]) => [
				pluginName,
				fixupPluginRules(plugin),
			]),
		);

		return {
			...configItem,
			plugins: newPlugins,
		};
	});
}

/**
 * @fileoverview Ignore file utilities for the compat package.
 * @author Nicholas C. Zakas
 */


//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------

/** @typedef {import("@eslint/core").ConfigObject} FlatConfig */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Converts an ESLint ignore pattern to a minimatch pattern.
 * @param {string} pattern The .eslintignore or .gitignore pattern to convert.
 * @returns {string} The converted pattern.
 */
function convertIgnorePatternToMinimatch(pattern) {
	const isNegated = pattern.startsWith("!");
	const negatedPrefix = isNegated ? "!" : "";
	const patternToTest = (isNegated ? pattern.slice(1) : pattern).trimEnd();

	// special cases
	if (["", "**", "/**", "**/"].includes(patternToTest)) {
		return `${negatedPrefix}${patternToTest}`;
	}

	const firstIndexOfSlash = patternToTest.indexOf("/");

	const matchEverywherePrefix =
		firstIndexOfSlash < 0 || firstIndexOfSlash === patternToTest.length - 1
			? "**/"
			: "";

	const patternWithoutLeadingSlash =
		firstIndexOfSlash === 0 ? patternToTest.slice(1) : patternToTest;

	/*
	 * Escape `{` and `(` because in gitignore patterns they are just
	 * literal characters without any specific syntactic meaning,
	 * while in minimatch patterns they can form brace expansion or extglob syntax.
	 *
	 * For example, gitignore pattern `src/{a,b}.js` ignores file `src/{a,b}.js`.
	 * But, the same minimatch pattern `src/{a,b}.js` ignores files `src/a.js` and `src/b.js`.
	 * Minimatch pattern `src/\{a,b}.js` is equivalent to gitignore pattern `src/{a,b}.js`.
	 */
	const escapedPatternWithoutLeadingSlash =
		patternWithoutLeadingSlash.replaceAll(
			// eslint-disable-next-line regexp/no-empty-lookarounds-assertion -- False positive
			/(?=((?:\\.|[^{(])*))\1([{(])/guy,
			"$1\\$2",
		);

	const matchInsideSuffix = patternToTest.endsWith("/**") ? "/*" : "";

	return `${negatedPrefix}${matchEverywherePrefix}${escapedPatternWithoutLeadingSlash}${matchInsideSuffix}`;
}

/**
 * Reads an ignore file and returns an object with the ignore patterns.
 * @param {string} ignoreFilePath The absolute path to the ignore file.
 * @param {string} [name] The name of the ignore file config.
 * @returns {FlatConfig} An object with an `ignores` property that is an array of ignore patterns.
 * @throws {Error} If the ignore file path is not an absolute path.
 */
function includeIgnoreFile(ignoreFilePath, name) {
	if (!path.isAbsolute(ignoreFilePath)) {
		throw new Error("The ignore file location must be an absolute path.");
	}

	const ignoreFile = fs.readFileSync(ignoreFilePath, "utf8");
	const lines = ignoreFile.split(/\r?\n/u);

	return {
		name: name || "Imported .gitignore patterns",
		ignores: lines
			.map(line => line.trim())
			.filter(line => line && !line.startsWith("#"))
			.map(convertIgnorePatternToMinimatch),
	};
}

exports.convertIgnorePatternToMinimatch = convertIgnorePatternToMinimatch;
exports.fixupConfigRules = fixupConfigRules;
exports.fixupPluginRules = fixupPluginRules;
exports.fixupRule = fixupRule;
exports.includeIgnoreFile = includeIgnoreFile;
