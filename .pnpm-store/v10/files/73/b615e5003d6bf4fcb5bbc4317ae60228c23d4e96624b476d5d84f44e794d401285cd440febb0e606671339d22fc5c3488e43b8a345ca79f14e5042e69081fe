import valueParser from 'postcss-value-parser';

import { assertNumber } from '../../utils/validateTypes.mjs';
import isNonNegativeInteger from '../../utils/isNonNegativeInteger.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithProps from '../../utils/validateObjectWithProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'declaration-property-max-values';

const messages = ruleMessages(ruleName, {
	expected: (property, max) =>
		`Expected "${property}" to have no more than ${max} ${max === 1 ? 'value' : 'values'}`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/declaration-property-max-values',
};

/**
 * @param {valueParser.Node} node
 */
const isValueNode = (node) => {
	return node.type === 'word' || node.type === 'function' || node.type === 'string';
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [validateObjectWithProps(isNonNegativeInteger)],
		});

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			const { prop, value } = decl;
			const propLength = valueParser(value).nodes.filter(isValueNode).length;

			const unprefixedProp = vendor.unprefixed(prop);
			const propKey = Object.keys(primary).find((propIdentifier) =>
				matchesStringOrRegExp(unprefixedProp, propIdentifier),
			);

			if (!propKey) {
				return;
			}

			const max = primary[propKey];

			assertNumber(max);

			if (propLength <= max) {
				return;
			}

			report({
				message: messages.expected,
				messageArgs: [prop, max],
				node: decl,
				result,
				ruleName,
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
