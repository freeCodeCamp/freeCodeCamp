import { isTokenURL, tokenize } from '@csstools/css-tokenizer';

import { atRuleParamIndex, declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import functionArgumentsSearch from '../../utils/functionArgumentsSearch.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import isStandardSyntaxUrl from '../../utils/isStandardSyntaxUrl.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'function-url-quotes';

const messages = ruleMessages(ruleName, {
	expected: (functionName) => `Expected quotes around "${functionName}" function argument`,
	rejected: (functionName) => `Unexpected quotes around "${functionName}" function argument`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/function-url-quotes',
	fixable: true,
};

const URL_FUNC_REGEX = /url\(/i;

/** @import { Problem, CoreRules } from 'stylelint' */
/** @import { FunctionNode, ParsedValue } from 'postcss-value-parser' */
/** @import { AtRule, Declaration } from 'postcss' */

/** @type {CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: ['always', 'never'],
			},
			{
				actual: secondaryOptions,
				possible: {
					except: ['empty'],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const exceptEmpty = optionsMatches(secondaryOptions, 'except', 'empty');
		const emptyArgumentPatterns = new Set(['', "''", '""']);

		root.walkAtRules(checkAtRuleParams);
		root.walkDecls(checkDeclParams);

		/**
		 * @param {Declaration|AtRule} node
		 * @param {FunctionNode} fn
		 * @param {keyof messages} messageType
		 * @param {ParsedValue} parsedValue
		 */
		function getFix(node, fn, messageType, parsedValue) {
			return () => {
				switch (messageType) {
					case 'expected':
						addQuotes(fn);
						break;
					case 'rejected':
						removeQuotes(fn);
						break;
				}

				switch (node.type) {
					case 'decl':
						node.value = parsedValue.toString();
						break;
					case 'atrule':
						node.params = parsedValue.toString();
						break;
				}
			};
		}

		/**
		 * @param {AtRule|Declaration} node
		 * @param {string} source
		 * @param {number} startIndex
		 */
		function complain(node, source, startIndex) {
			functionArgumentsSearch(source, /^url$/i, (args, index, funcNode, parsedValue) => {
				const object = checkArgs(args, startIndex + index);

				if (object) {
					const { messageType, ...rest } = object;
					const message = messages[messageType];
					const messageArgs = [funcNode.value.toLowerCase()];
					const fix = getFix(node, funcNode, messageType, parsedValue);

					report({
						...rest,
						node,
						fix: { apply: fix, node },
						message,
						messageArgs,
						result,
						ruleName,
					});
				}
			});
		}

		/** @param {Declaration} decl */
		function checkDeclParams(decl) {
			if (!URL_FUNC_REGEX.test(decl.value)) return;

			if (!isStandardSyntaxDeclaration(decl)) return;

			const value = getDeclarationValue(decl);
			const startIndex = declarationValueIndex(decl);

			complain(decl, value, startIndex);
		}

		/** @param {AtRule} atRule */
		function checkAtRuleParams(atRule) {
			const params = getAtRuleParams(atRule);
			const startIndex = atRuleParamIndex(atRule);

			complain(atRule, params, startIndex);
		}

		/** @param {FunctionNode} funcNode */
		function addQuotes(funcNode) {
			for (const argNode of funcNode.nodes) {
				if (argNode.type === 'word') {
					argNode.value = `"${argNode.value}"`;
				}
			}
		}

		/** @param {FunctionNode} funcNode */
		function removeQuotes(funcNode) {
			for (const argNode of funcNode.nodes) {
				if (argNode.type === 'string') {
					// NOTE: We can ignore this error because the test passes.
					// @ts-expect-error -- TS2322: Type '"word"' is not assignable to type '"string"'.
					argNode.type = 'word';
				}
			}
		}

		/**
		 * Check if a URL requires quotes for valid CSS
		 *
		 * This function determines if a URL needs to be quoted when used in a CSS url() function.
		 * It tokenizes the URL and checks if it would be parsed as a bad-url token, which indicates
		 * that quotes are necessary for valid CSS.
		 *
		 * @param {string} url - The URL value, either quoted or unquoted
		 * @returns {boolean} True if the URL requires quotes to be valid CSS, false otherwise
		 */
		function requiresQuotes(url) {
			// Extract the URL content (remove quotes if present)
			let urlContent = url;

			const quote = url[0] ?? '';
			const endQuoteIndex = url.lastIndexOf(quote);

			if (endQuoteIndex > 0) {
				urlContent = url.slice(1, endQuoteIndex);
			}

			const tokens = tokenize({ css: `url(${urlContent})` });

			// there is always an EOF token, so we expect 2 tokens for a valid URL
			if (tokens.length !== 2) return true;

			const urlToken = tokens[0];

			if (!isTokenURL(urlToken)) return true;

			return false;
		}

		/**
		 * @param {string} args
		 * @param {number} index
		 * @returns {Pick<Problem, 'index' | 'endIndex'> & { messageType: keyof messages } | undefined}
		 */
		function checkArgs(args, index) {
			const leftTrimmedArgs = args.trimStart();

			if (!isStandardSyntaxUrl(leftTrimmedArgs)) return;

			let expectQuotes = primary === 'always';

			if (exceptEmpty && emptyArgumentPatterns.has(args.trim())) {
				expectQuotes = !expectQuotes;
			}

			const hasQuotes = leftTrimmedArgs.startsWith("'") || leftTrimmedArgs.startsWith('"');

			// If quotes are required, don't complain about them being present
			if (hasQuotes && requiresQuotes(leftTrimmedArgs)) return;

			if (expectQuotes && hasQuotes) return;

			if (!expectQuotes && !hasQuotes) return;

			const messageType = expectQuotes ? 'expected' : 'rejected';
			const reportIndex = index + args.length - leftTrimmedArgs.length;
			const reportEndIndex = index + args.length;

			return {
				messageType,
				index: reportIndex,
				endIndex: reportEndIndex,
			};
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
