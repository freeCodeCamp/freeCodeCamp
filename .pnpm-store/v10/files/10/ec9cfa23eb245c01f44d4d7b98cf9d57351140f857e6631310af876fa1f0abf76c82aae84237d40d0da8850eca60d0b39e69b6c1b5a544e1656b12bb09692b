import valueParser from 'postcss-value-parser';

import { atRuleRegexes, functionRegexes } from '../../utils/regexes.mjs';
import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'layer-name-pattern';

const messages = ruleMessages(ruleName, {
	expected: (name, pattern) => `Expected "${name}" to match pattern "${pattern}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/layer-name-pattern',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isRegExp, isString],
		});

		if (!validOptions) return;

		const pattern = isString(primary) ? new RegExp(primary) : primary;

		root.walkAtRules(atRuleRegexes.layerName, (atRule) => {
			const { params } = atRule;

			if (!params) return;

			const parsedParams = valueParser(params);

			parsedParams.walk((node) => {
				check(node.type, node.value, node.sourceIndex, atRule);
			});
		});

		root.walkAtRules(atRuleRegexes.importName, (atRule) => {
			const { params } = atRule;

			if (!functionRegexes.layer.test(params)) return;

			const parsedParams = valueParser(atRule.params);

			parsedParams.walk((node) => {
				if (node.type !== 'function' || node.value.toLowerCase() !== 'layer') return;

				for (const child of node.nodes) {
					check(child.type, child.value, child.sourceIndex, atRule);
				}
			});
		});

		/**
		 * @param {string} type
		 * @param {string} value
		 * @param {number} sourceIndex
		 * @param {import('postcss').AtRule} atRule
		 */
		function check(type, value, sourceIndex, atRule) {
			if (type !== 'word') return;

			if (pattern.test(value)) return;

			const index = atRuleParamIndex(atRule) + sourceIndex;
			const endIndex = index + value.length;

			report({
				message: messages.expected,
				messageArgs: [value, primary],
				node: atRule,
				index,
				endIndex,
				ruleName,
				result,
			});
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;

export default rule;
