import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import isStandardSyntaxKeyframesName from '../../utils/isStandardSyntaxKeyframesName.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'keyframes-name-pattern';

const messages = ruleMessages(ruleName, {
	expected: (keyframeName, pattern) => `Expected "${keyframeName}" to match pattern "${pattern}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/keyframes-name-pattern',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isRegExp, isString],
		});

		if (!validOptions) {
			return;
		}

		const regex = isString(primary) ? new RegExp(primary) : primary;

		root.walkAtRules(atRuleRegexes.keyframesName, (keyframesNode) => {
			const value = keyframesNode.params;

			if (!isStandardSyntaxKeyframesName(value)) {
				return;
			}

			if (regex.test(value)) {
				return;
			}

			const index = atRuleParamIndex(keyframesNode);
			const endIndex = index + value.length;

			report({
				index,
				endIndex,
				message: messages.expected,
				messageArgs: [value, primary],
				node: keyframesNode,
				ruleName,
				result,
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
