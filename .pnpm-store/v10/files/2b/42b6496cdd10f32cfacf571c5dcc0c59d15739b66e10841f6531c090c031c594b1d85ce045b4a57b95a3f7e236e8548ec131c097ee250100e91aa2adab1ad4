import { animationNameKeywords } from '../../reference/keywords.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import findAnimationName from '../../utils/findAnimationName.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'no-unknown-animations';

const messages = ruleMessages(ruleName, {
	rejected: (animationName) => `Unexpected unknown animation name "${animationName}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/no-unknown-animations',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		const declaredAnimations = new Set();

		root.walkAtRules(atRuleRegexes.keyframesName, (atRule) => {
			declaredAnimations.add(atRule.params);
		});

		root.walkDecls((decl) => {
			if (decl.prop.toLowerCase() === 'animation' || decl.prop.toLowerCase() === 'animation-name') {
				const animationNames = findAnimationName(decl.value);

				if (animationNames.length === 0) {
					return;
				}

				for (const animationNameNode of animationNames) {
					if (animationNameKeywords.has(animationNameNode.value.toLowerCase())) {
						continue;
					}

					if (declaredAnimations.has(animationNameNode.value)) {
						continue;
					}

					const begin = declarationValueIndex(decl);

					report({
						result,
						ruleName,
						message: messages.rejected,
						messageArgs: [animationNameNode.value],
						node: decl,
						index: begin + animationNameNode.sourceIndex,
						endIndex: begin + animationNameNode.sourceEndIndex,
					});
				}
			}
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
