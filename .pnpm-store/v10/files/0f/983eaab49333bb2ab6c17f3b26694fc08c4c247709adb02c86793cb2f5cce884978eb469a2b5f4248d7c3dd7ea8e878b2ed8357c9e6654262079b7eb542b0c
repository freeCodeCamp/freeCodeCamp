import { EOL } from 'node:os';
import { createRequire } from 'node:module';

import { DEFAULT_SEVERITY, RULE_NAME_ALL } from './constants.mjs';
import { DEFAULT_CONFIGURATION_COMMENT } from './utils/configurationComment.mjs';
import assignDisabledRanges from './assignDisabledRanges.mjs';
import { emitDeprecationWarning } from './utils/emitWarning.mjs';
import { fork } from 'css-tree';
import getStylelintRule from './utils/getStylelintRule.mjs';
import mergeSyntaxDefinitions from './utils/mergeSyntaxDefinitions.mjs';
import reportUnknownRuleNames from './reportUnknownRuleNames.mjs';
import rules from './rules/index.mjs';
import timing from './timing.mjs';

/** @todo leverage import attributes once support for Node.js v18.19 is dropped */
const require = createRequire(import.meta.url);
const syntaxPatches = require('@csstools/css-syntax-patches-for-csstree/dist/index.json').next;

/** @import {Config, LinterOptions, PostcssResult} from 'stylelint' */

/**
 * @param {LinterOptions} stylelintOptions
 * @param {PostcssResult} postcssResult
 * @param {Config} config
 * @returns {Promise<any>}
 */
export default async function lintPostcssResult(stylelintOptions, postcssResult, config) {
	postcssResult.stylelint.stylelintError = false;
	postcssResult.stylelint.stylelintWarning = false;
	postcssResult.stylelint.quiet = config.quiet;
	postcssResult.stylelint.quietDeprecationWarnings = stylelintOptions.quietDeprecationWarnings;
	postcssResult.stylelint.config = config;

	const postcssDoc = postcssResult.root;

	if (!('type' in postcssDoc)) {
		throw new Error('Unexpected Postcss root object!');
	}

	const newlineMatch = postcssDoc.source?.input.css.match(/\r?\n/);
	const newline = newlineMatch ? newlineMatch[0] : EOL;
	const configurationComment = config.configurationComment || DEFAULT_CONFIGURATION_COMMENT;
	const ctx = { configurationComment, newline };

	assignDisabledRanges(postcssDoc, postcssResult);

	const postcssRoots = /** @type {import('postcss').Root[]} */ (
		postcssDoc && postcssDoc.constructor.name === 'Document' ? postcssDoc.nodes : [postcssDoc]
	);

	// Promises for the rules. Although the rule code runs synchronously now,
	// the use of Promises makes it compatible with the possibility of async
	// rules down the line.
	/** @type {Array<Promise<any>>} */
	const performRules = [];

	const rulesOrder = Object.keys(rules);
	const ruleNames = config.rules
		? Object.keys(config.rules).sort((a, b) => rulesOrder.indexOf(a) - rulesOrder.indexOf(b))
		: [];

	for (const ruleName of ruleNames) {
		const ruleFunction = await getStylelintRule(ruleName, config);

		if (ruleFunction === undefined) {
			performRules.push(
				Promise.all(
					postcssRoots.map((postcssRoot) =>
						reportUnknownRuleNames(ruleName, postcssRoot, postcssResult),
					),
				),
			);

			continue;
		}

		const ruleSettings = config.rules?.[ruleName];

		if (ruleSettings === null || ruleSettings[0] === null) continue;

		if (ruleFunction.meta?.deprecated && !stylelintOptions.quietDeprecationWarnings) {
			warnDeprecatedRule(postcssResult, ruleName);
		}

		const primaryOption = ruleSettings[0];
		const secondaryOptions = ruleSettings[1];

		// Log the rule's severity in the PostCSS result
		const defaultSeverity = config.defaultSeverity || DEFAULT_SEVERITY;

		postcssResult.stylelint.ruleSeverities[ruleName] =
			(secondaryOptions && secondaryOptions.severity) || defaultSeverity;
		postcssResult.stylelint.customMessages[ruleName] = secondaryOptions && secondaryOptions.message;
		postcssResult.stylelint.customUrls[ruleName] = secondaryOptions && secondaryOptions.url;
		postcssResult.stylelint.ruleMetadata[ruleName] = ruleFunction.meta || {};

		const shouldWarn = ruleFunction.meta?.fixable && !stylelintOptions.quietDeprecationWarnings;
		const disableFix = secondaryOptions?.disableFix === true;
		const fix = !disableFix && config.fix && isFixCompatible(postcssResult, ruleName);
		const lexer = getCachedLexer(config);
		const context = {
			...ctx,
			lexer,
			// context.fix is unlikely to be removed in the foreseeable future
			// due to the sheer number of rules in the wild that rely on it
			get fix() {
				if (shouldWarn) {
					emitDeprecationWarning(
						'`context.fix` is being deprecated.',
						'CONTEXT_FIX',
						`Please pass a \`fix\` callback to the \`report\` utility of "${ruleName}" instead.`,
					);
				}

				return fix;
			},
		};

		const ruleFn = ruleFunction(primaryOption, secondaryOptions, context);

		/**
		 * @param {import('postcss').Root} postcssRoot
		 */
		async function runRule(postcssRoot) {
			if (timing.enabled) {
				return timing.time(ruleName, () => ruleFn(postcssRoot, postcssResult))();
			}

			return ruleFn(postcssRoot, postcssResult);
		}

		performRules.push(Promise.all(postcssRoots.map(runRule)));
	}

	return Promise.all(performRules);
}

/**
 * using context.fix instead of the fix callback has the drawback
 * of not honouring the configuration comments in subtle ways
 * @see file://./../docs/user-guide/options.md#fix for details
 * @param {PostcssResult} postcssResult
 * @param {string} name
 * @returns {boolean}
 */
function isFixCompatible({ stylelint: { disabledRanges } }, name) {
	return !disabledRanges[RULE_NAME_ALL]?.length && !disabledRanges[name];
}

/**
 * @param {PostcssResult} result
 * @param {string} ruleName
 * @returns {void}
 */
function warnDeprecatedRule(result, ruleName) {
	const message = `The "${ruleName}" rule is deprecated.`;

	emitDeprecationWarning(
		message,
		'RULE',
		`Please be aware that the "${ruleName}" rule will soon be either removed or renamed.`,
	);

	result.warn(message, { stylelintType: 'deprecation' });
}

const lexerCache = new Map();

/**
 * @param {Config} config
 * @returns {import('css-tree').Lexer}
 * */
function getCachedLexer(config) {
	const cacheKey = JSON.stringify(config.languageOptions?.syntax || {});

	if (lexerCache.has(cacheKey)) {
		return lexerCache.get(cacheKey);
	}

	const newLexer = fork(
		mergeSyntaxDefinitions(syntaxPatches, {
			...config.languageOptions?.syntax,
			atrules: config.languageOptions?.syntax?.atRules,
		}),
	).lexer;

	lexerCache.set(cacheKey, newLexer);

	return newLexer;
}
