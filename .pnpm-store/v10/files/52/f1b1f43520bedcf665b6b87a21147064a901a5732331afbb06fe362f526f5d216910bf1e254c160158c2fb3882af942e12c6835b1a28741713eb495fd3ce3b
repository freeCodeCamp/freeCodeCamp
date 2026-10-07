import getPreviousNonSharedLineCommentNode from './getPreviousNonSharedLineCommentNode.mjs';
import hasBlock from './hasBlock.mjs';
import { isAtRule } from './typeGuards.mjs';

/**
 * @param {import('postcss').AtRule} atRule
 * @returns {boolean}
 */
export default function isBlocklessAtRuleAfterBlocklessAtRule(atRule) {
	if (atRule.type !== 'atrule') {
		return false;
	}

	const previousNode = getPreviousNonSharedLineCommentNode(atRule);

	if (previousNode === undefined) {
		return false;
	}

	return isAtRule(previousNode) && !hasBlock(previousNode) && !hasBlock(atRule);
}
