import { assert } from '../../utils/validateTypes.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import getImportantPosition from '../../utils/getImportantPosition.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'keyframe-declaration-no-important';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected !important',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/keyframe-declaration-no-important',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkAtRules(atRuleRegexes.keyframesName, (atRuleKeyframes) => {
			atRuleKeyframes.walkDecls((decl) => {
				if (!decl.important) {
					return;
				}

				const pos = getImportantPosition(decl.toString());

				assert(pos);

				report({
					message: messages.rejected,
					messageArgs: [],
					node: decl,
					index: pos.index,
					endIndex: pos.endIndex,
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
