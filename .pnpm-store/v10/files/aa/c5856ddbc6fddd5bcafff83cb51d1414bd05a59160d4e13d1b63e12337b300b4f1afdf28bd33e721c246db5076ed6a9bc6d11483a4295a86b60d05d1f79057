import valueParser from 'postcss-value-parser';

import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import setAtRuleParams from '../../utils/setAtRuleParams.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'import-notation';

const messages = ruleMessages(ruleName, {
	expected: (unfixed, fixed) => `Expected "${unfixed}" to be "${fixed}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/import-notation',
	fixable: true,
};

/** @typedef {import('postcss').AtRule} AtRule */

/**
 * @param {AtRule} node
 * @param {string} fixed
 * @param {number} index
 */
const fixer = (node, fixed, index) => () => {
	const restAtRuleParams = node.params.slice(index);

	setAtRuleParams(node, `${fixed}${restAtRuleParams}`);
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: ['string', 'url'],
		});

		if (!validOptions) return;

		root.walkAtRules(atRuleRegexes.importName, checkAtRuleImportParams);

		/** @param {AtRule} atRule */
		function checkAtRuleImportParams(atRule) {
			const params = getAtRuleParams(atRule);
			const index = atRuleParamIndex(atRule);
			const parsed = valueParser(params);

			for (const node of parsed.nodes) {
				const { sourceEndIndex, type, value } = node;
				const endIndex = index + sourceEndIndex;
				const problem = { node: atRule, index, endIndex, result, ruleName };

				if (primary === 'string') {
					if (type !== 'function' || value.toLowerCase() !== 'url') continue;

					const urlFunctionFull = valueParser.stringify(node);
					const urlFunctionArguments = valueParser.stringify(node.nodes);
					const quotedUrlFunctionFirstArgument =
						node.nodes[0]?.type === 'word' ? `"${urlFunctionArguments}"` : urlFunctionArguments;
					const fix = fixer(atRule, quotedUrlFunctionFirstArgument, sourceEndIndex);
					const message = messages.expected;
					const messageArgs = [urlFunctionFull, quotedUrlFunctionFirstArgument];

					report({ ...problem, message, messageArgs, fix: { apply: fix, node: problem.node } });

					return;
				}

				if (primary === 'url') {
					if (type === 'space') return;

					if (type !== 'word' && type !== 'string') continue;

					const path = valueParser.stringify(node);
					const urlFunctionFull = `url(${path})`;
					const quotedNodeValue =
						type === 'word' ? `"${value}"` : `${node.quote}${value}${node.quote}`;
					const fix = fixer(atRule, urlFunctionFull, sourceEndIndex);
					const message = messages.expected;
					const messageArgs = [quotedNodeValue, urlFunctionFull];

					report({ ...problem, message, messageArgs, fix: { apply: fix, node: problem.node } });

					return;
				}
			}
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
