import valueParser from 'postcss-value-parser';

import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import hasValidHex from '../../utils/hasValidHex.mjs';
import isHexColor from '../../utils/isHexColor.mjs';
import isUrlFunction from '../../utils/isUrlFunction.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'color-hex-alpha';

const messages = ruleMessages(ruleName, {
	expected: (hex) => `Expected alpha channel in "${hex}"`,
	rejected: (hex) => `Unexpected alpha channel in "${hex}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/color-hex-alpha',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: ['always', 'never'],
		});

		if (!validOptions) return;

		root.walkDecls((decl) => {
			if (!hasValidHex(decl.value)) return;

			const parsedValue = valueParser(decl.value);

			parsedValue.walk((node) => {
				if (isUrlFunction(node)) return false;

				if (!isHexColor(node)) return;

				const { value } = node;

				if (primary === 'always' && hasAlphaChannel(value)) return;

				if (primary === 'never' && !hasAlphaChannel(value)) return;

				const index = declarationValueIndex(decl) + node.sourceIndex;
				const endIndex = index + value.length;

				report({
					message: primary === 'never' ? messages.rejected : messages.expected,
					messageArgs: [value],
					node: decl,
					index,
					endIndex,
					result,
					ruleName,
				});
			});
		});
	};
};

/**
 * @param {string} hex
 */
function hasAlphaChannel(hex) {
	return hex.length === 5 || hex.length === 9;
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
