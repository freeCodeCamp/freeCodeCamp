import functionArgumentsSearch from '../../utils/functionArgumentsSearch.mjs';
import isStandardSyntaxUrl from '../../utils/isStandardSyntaxUrl.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'function-url-no-scheme-relative';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected scheme-relative url',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/function-url-no-scheme-relative',
};

/**
 * Reports scheme-relative URLs.
 *
 * @param {import('postcss').Node} node - The PostCSS node containing the URL.
 * @param {string} rawInput - The raw string to search (e.g., decl or params).
 * @param {import('stylelint').PostcssResult} result - The Stylelint result object.
 */
const reportSchemeRelativeUrl = (node, rawInput, result) => {
	functionArgumentsSearch(rawInput.toLowerCase(), 'url', (args, index) => {
		const url = args.trim().replace(/^['"]+|['"]+$/g, '');

		if (!isStandardSyntaxUrl(url) || !url.startsWith('//')) {
			return;
		}

		report({
			message: messages.rejected,
			messageArgs: [],
			node,
			index,
			endIndex: index + args.length,
			result,
			ruleName,
		});
	});
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			reportSchemeRelativeUrl(decl, decl.toString(), result);
		});

		root.walkAtRules('import', (atRule) => {
			reportSchemeRelativeUrl(atRule, atRule.toString(), result);
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
