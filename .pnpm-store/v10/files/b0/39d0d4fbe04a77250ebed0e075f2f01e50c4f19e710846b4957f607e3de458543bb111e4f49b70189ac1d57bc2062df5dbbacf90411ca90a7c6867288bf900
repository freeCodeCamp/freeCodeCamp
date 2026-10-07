import valueParser from 'postcss-value-parser';

import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import getDimension from '../../utils/getDimension.mjs';
import { isString } from '../../utils/validateTypes.mjs';
import isUrlFunction from '../../utils/isUrlFunction.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'declaration-property-unit-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (property, unit) => `Unexpected unit "${unit}" for property "${property}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [validateObjectWithArrayProps(isString)],
		});

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			const prop = decl.prop;
			const value = decl.value;

			const unprefixedProp = vendor.unprefixed(prop);

			const propKey = Object.keys(primary).find((propIdentifier) =>
				matchesStringOrRegExp(unprefixedProp, propIdentifier),
			);

			if (!propKey) {
				return;
			}

			const propValue = primary[propKey];

			if (!propValue) {
				return;
			}

			const propList = new Set([propValue].flat());

			valueParser(value).walk((node) => {
				// Ignore wrong units within `url` function
				if (isUrlFunction(node)) {
					return false;
				}

				if (node.type === 'string') {
					return;
				}

				const { unit } = getDimension(node);

				if (!unit || !propList.has(unit.toLowerCase())) {
					return;
				}

				const index = declarationValueIndex(decl) + node.sourceIndex;
				const endIndex = index + node.value.length;

				report({
					message: messages.rejected,
					messageArgs: [prop, unit],
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
