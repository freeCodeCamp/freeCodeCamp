import getPreviousNonSharedLineCommentNode from './getPreviousNonSharedLineCommentNode.mjs';
import { isAtRule } from './typeGuards.mjs';
import isBlocklessAtRuleAfterBlocklessAtRule from './isBlocklessAtRuleAfterBlocklessAtRule.mjs';

/**
 * @param {import('postcss').AtRule} atRule
 * @returns {boolean}
 */
export default function isBlocklessAtRuleAfterSameNameBlocklessAtRule(atRule) {
	if (!isBlocklessAtRuleAfterBlocklessAtRule(atRule)) {
		return false;
	}

	const previousNode = getPreviousNonSharedLineCommentNode(atRule);

	if (previousNode && isAtRule(previousNode)) {
		return previousNode.name === atRule.name;
	}

	return false;
}
