import valueParser from 'postcss-value-parser';

import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import isStandardSyntaxHexColor from '../../utils/isStandardSyntaxHexColor.mjs';
import isValidHex from '../../utils/isValidHex.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'color-no-invalid-hex';

const messages = ruleMessages(ruleName, {
	rejected: (hex) => `Unexpected invalid hex color "${hex}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/color-no-invalid-hex',
};

const CONTAINS_HEX = /#[\da-z]+/i;

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			if (!isStandardSyntaxHexColor(decl.value)) {
				return;
			}

			if (!CONTAINS_HEX.test(decl.value)) {
				return;
			}

			valueParser(decl.value).walk(({ value, type, sourceIndex }) => {
				if (type === 'function' && value.endsWith('url')) return false;

				if (type !== 'word') return;

				const hexMatch = /^#[\da-z]+/i.exec(value);

				if (!hexMatch) return;

				const hexValue = hexMatch[0];

				if (!hexValue || isValidHex(hexValue)) return;

				const index = declarationValueIndex(decl) + sourceIndex;
				const endIndex = index + hexValue.length;

				report({
					message: messages.rejected,
					messageArgs: [hexValue],
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

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
