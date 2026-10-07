import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import findFontFamily from '../../utils/findFontFamily.mjs';
import { fontFamilyKeywords } from '../../reference/keywords.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'font-family-no-duplicate-names';

const messages = ruleMessages(ruleName, {
	rejected: (name) => `Unexpected duplicate font-family name ${name}`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/font-family-no-duplicate-names',
};

/**
 * @param {import('postcss-value-parser').Node} node
 */
const isFamilyNameKeyword = (node) =>
	!('quote' in node) && fontFamilyKeywords.has(node.value.toLowerCase());

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{ actual: primary },
			{
				actual: secondaryOptions,
				possible: {
					ignoreFontFamilyNames: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		root.walkDecls(/^font(-family)?$/i, (decl) => {
			const keywords = new Set();
			const familyNames = new Set();

			const fontFamilies = findFontFamily(decl.value);

			if (fontFamilies.length === 0) {
				return;
			}

			for (const fontFamilyNode of fontFamilies) {
				const family = fontFamilyNode.value.trim();

				if (optionsMatches(secondaryOptions, 'ignoreFontFamilyNames', family)) {
					continue;
				}

				const rawFamily =
					'quote' in fontFamilyNode ? fontFamilyNode.quote + family + fontFamilyNode.quote : family;

				if (isFamilyNameKeyword(fontFamilyNode)) {
					if (keywords.has(family.toLowerCase())) {
						complain(
							family,
							declarationValueIndex(decl) + fontFamilyNode.sourceIndex,
							rawFamily.length,
							decl,
						);

						continue;
					}

					keywords.add(family);

					continue;
				}

				if (familyNames.has(family)) {
					complain(
						family,
						declarationValueIndex(decl) + fontFamilyNode.sourceIndex,
						rawFamily.length,
						decl,
					);

					continue;
				}

				familyNames.add(family);
			}
		});

		/**
		 * @param {string} name
		 * @param {number} index
		 * @param {number} length
		 * @param {import('postcss').Declaration} decl
		 */
		function complain(name, index, length, decl) {
			report({
				result,
				ruleName,
				message: messages.rejected,
				messageArgs: [name],
				node: decl,
				index,
				endIndex: index + length,
			});
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
