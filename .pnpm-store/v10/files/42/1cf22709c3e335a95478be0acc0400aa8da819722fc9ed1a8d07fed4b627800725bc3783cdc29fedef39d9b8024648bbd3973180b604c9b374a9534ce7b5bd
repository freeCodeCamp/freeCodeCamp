import valueParser from 'postcss-value-parser';

import { atRuleRegexes } from '../../utils/regexes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import isVarFunction from '../../utils/isVarFunction.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'no-unknown-custom-properties';

const messages = ruleMessages(ruleName, {
	rejected: (property) => `Unexpected unknown custom property "${property}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/no-unknown-custom-properties',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) return;

		/** @type {Set<string>} */
		const declaredCustomProps = new Set();

		root.walkAtRules(atRuleRegexes.propertyName, ({ params }) => {
			declaredCustomProps.add(params);
		});

		root.walkDecls(/^--/, ({ prop }) => {
			declaredCustomProps.add(prop);
		});

		root.walkDecls((decl) => {
			const { value } = decl;

			const parsedValue = valueParser(value);

			parsedValue.walk((node) => {
				if (!isVarFunction(node)) return;

				const [firstNode, secondNode] = node.nodes;

				if (!firstNode || declaredCustomProps.has(firstNode.value)) return;

				// Second node (div) indicates fallback exists in all cases
				if (secondNode && secondNode.type === 'div') return;

				const startIndex = declarationValueIndex(decl);

				report({
					result,
					ruleName,
					message: messages.rejected,
					messageArgs: [firstNode.value],
					node: decl,
					index: startIndex + firstNode.sourceIndex,
					endIndex: startIndex + firstNode.sourceEndIndex,
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
