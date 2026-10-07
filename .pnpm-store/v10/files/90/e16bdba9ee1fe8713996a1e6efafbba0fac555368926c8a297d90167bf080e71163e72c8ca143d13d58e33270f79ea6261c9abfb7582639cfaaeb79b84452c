import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import isStandardSyntaxProperty from '../../utils/isStandardSyntaxProperty.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'property-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (property) => `Unexpected property "${property}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/property-disallowed-list',
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
			const prop = decl.prop;

			if (!isStandardSyntaxProperty(prop)) {
				return;
			}

			// either the prefix or unprefixed version is in the list
			if (!matchesStringOrRegExp([prop, vendor.unprefixed(prop)], primary)) {
				return;
			}

			report({
				message: messages.rejected,
				messageArgs: [prop],
				word: prop,
				node: decl,
				result,
				ruleName,
			});
		});
	};
};

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
