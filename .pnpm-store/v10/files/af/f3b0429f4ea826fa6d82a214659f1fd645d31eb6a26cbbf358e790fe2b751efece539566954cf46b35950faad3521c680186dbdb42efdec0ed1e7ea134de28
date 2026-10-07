import valueParser from 'postcss-value-parser';

import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import isHexColor from '../../utils/isHexColor.mjs';
import isUrlFunction from '../../utils/isUrlFunction.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import setDeclarationValue from '../../utils/setDeclarationValue.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'color-hex-length';

const messages = ruleMessages(ruleName, {
	expected: (actual, expected) => `Expected "${actual}" to be "${expected}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/color-hex-length',
	fixable: true,
};

const CONTAINS_HEX = /#[\da-z]+/i;

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: ['short', 'long'],
		});

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			if (!CONTAINS_HEX.test(decl.value)) return;

			const parsedValue = valueParser(getDeclarationValue(decl));

			parsedValue.walk((node) => {
				const { value: hexValue } = node;

				if (isUrlFunction(node)) return false;

				if (!isHexColor(node)) return;

				if (primary === 'long' && hexValue.length !== 4 && hexValue.length !== 5) {
					return;
				}

				if (primary === 'short' && (hexValue.length < 6 || !canShrink(hexValue))) {
					return;
				}

				const variant = primary === 'long' ? longer : shorter;
				const expectedHex = variant(hexValue);

				const fix = () => {
					node.value = expectedHex;
					setDeclarationValue(decl, parsedValue.toString());
				};

				const index = declarationValueIndex(decl) + node.sourceIndex;
				const endIndex = index + node.value.length;

				report({
					message: messages.expected,
					messageArgs: [hexValue, expectedHex],
					node: decl,
					index,
					endIndex,
					result,
					ruleName,
					fix: {
						apply: fix,
						node: decl,
					},
				});
			});
		});
	};
};

/**
 * @param {string} hex
 */
function canShrink(hex) {
	hex = hex.toLowerCase();

	return (
		hex[1] === hex[2] &&
		hex[3] === hex[4] &&
		hex[5] === hex[6] &&
		(hex.length === 7 || (hex.length === 9 && hex[7] === hex[8]))
	);
}

/**
 * @param {string} hex
 */
function shorter(hex) {
	let hexVariant = '#';

	for (let i = 1; i < hex.length; i += 2) {
		hexVariant += hex[i];
	}

	return hexVariant;
}

/**
 * @param {string} hex
 */
function longer(hex) {
	let hexVariant = '#';

	for (let i = 1; i < hex.length; i++) {
		hexVariant += hex.charAt(i).repeat(2);
	}

	return hexVariant;
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
