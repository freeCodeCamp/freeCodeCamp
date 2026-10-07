import valueParser from 'postcss-value-parser';

import hasPrefix from '../../utils/hasPrefix.mjs';
import isAutoprefixable from '../../utils/isAutoprefixable.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import isStandardSyntaxProperty from '../../utils/isStandardSyntaxProperty.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import setDeclarationValue from '../../utils/setDeclarationValue.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

import { isRegExp, isString } from '../../utils/validateTypes.mjs';

const ruleName = 'value-no-vendor-prefix';

const messages = ruleMessages(ruleName, {
	rejected: (value) => `Unexpected vendor-prefixed value "${value}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/value-no-vendor-prefix',
	fixable: true,
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{ actual: primary },
			{
				optional: true,
				actual: secondaryOptions,
				possible: {
					ignoreValues: [isString, isRegExp],
				},
			},
		);

		if (!validOptions) {
			return;
		}

		/**
		 * @typedef {string | RegExp} IgnoreValue
		 * @type {{ raw: IgnoreValue[], unprefixed: IgnoreValue[] }}
		 * @todo use Object.groupBy once Node v20 support is dropped
		 */
		const groups = { raw: [], unprefixed: [] };

		[secondaryOptions?.ignoreValues ?? []].flat().forEach((value) => {
			const useRawValue = isRegExp(value) || (value.startsWith('/') && value.match(/\/i?$/));
			const group = useRawValue ? 'raw' : 'unprefixed';

			groups[group].push(value);
		});

		root.walkDecls((decl) => {
			const { value } = decl;

			if (!hasPrefix(value)) return;

			if (!isStandardSyntaxDeclaration(decl) || !isStandardSyntaxProperty(decl.prop)) {
				return;
			}

			if (optionsMatches(groups, 'raw', value)) {
				return;
			}

			/**
			 * @todo consolidate in the next major
			 * @see stylelint/stylelint#7542
			 */
			if (optionsMatches(groups, 'unprefixed', vendor.unprefixed(value))) {
				return;
			}

			const parsedValue = valueParser(value);

			parsedValue.walk((node) => {
				if (!isAutoprefixable.propertyValue(node.value)) {
					return;
				}

				const index = decl.prop.length + (decl.raws.between || '').length + node.sourceIndex;
				const fix = () => {
					node.value = isAutoprefixable.unprefix(node.value);
					setDeclarationValue(decl, parsedValue.toString());
				};

				report({
					message: messages.rejected,
					messageArgs: [node.value],
					node: decl,
					index,
					endIndex: index + node.value.length,
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

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
