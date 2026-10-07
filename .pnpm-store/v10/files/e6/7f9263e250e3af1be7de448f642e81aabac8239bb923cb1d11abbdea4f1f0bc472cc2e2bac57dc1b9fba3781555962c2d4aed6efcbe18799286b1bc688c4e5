import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import functionArgumentsSearch from '../../utils/functionArgumentsSearch.mjs';
import getSchemeFromUrl from '../../utils/getSchemeFromUrl.mjs';
import isStandardSyntaxUrl from '../../utils/isStandardSyntaxUrl.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'function-url-scheme-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (scheme) => `Unexpected URL scheme "${scheme}:"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isString, isRegExp],
		});

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			functionArgumentsSearch(decl.toString().toLowerCase(), 'url', (args, index) => {
				const unspacedUrlString = args.trim();

				if (!isStandardSyntaxUrl(unspacedUrlString)) {
					return;
				}

				const urlString = unspacedUrlString.replace(/^['"]+|['"]+$/g, '');
				const scheme = getSchemeFromUrl(urlString);

				if (scheme === null) {
					return;
				}

				if (!matchesStringOrRegExp(scheme, primary)) {
					return;
				}

				report({
					message: messages.rejected,
					messageArgs: [scheme],
					node: decl,
					index,
					endIndex: index + args.length,
					result,
					ruleName,
				});
			});
		});
	};
};

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
