import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'declaration-property-value-allowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (property, value) => `Unexpected value "${value}" for property "${property}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [validateObjectWithArrayProps(isString, isRegExp)],
		});

		if (!validOptions) {
			return;
		}

		const propKeys = Object.keys(primary);

		root.walkDecls((decl) => {
			const { prop, value } = decl;

			const unprefixedProp = vendor.unprefixed(prop);
			const propPatterns = propKeys.filter((key) => matchesStringOrRegExp(unprefixedProp, key));

			if (propPatterns.length === 0) {
				return;
			}

			if (propPatterns.some((pattern) => optionsMatches(primary, pattern, value))) {
				return;
			}

			const index = declarationValueIndex(decl);
			const endIndex = index + decl.value.length;

			report({
				message: messages.rejected,
				messageArgs: [prop, value],
				node: decl,
				index,
				endIndex,
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
