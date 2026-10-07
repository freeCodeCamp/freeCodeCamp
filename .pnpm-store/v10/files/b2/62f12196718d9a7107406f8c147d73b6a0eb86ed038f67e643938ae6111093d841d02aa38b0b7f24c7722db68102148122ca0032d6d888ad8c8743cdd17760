import getPreviousNonSharedLineCommentNode from './getPreviousNonSharedLineCommentNode.mjs';
import isCustomProperty from './isCustomProperty.mjs';
import { isDeclaration } from './typeGuards.mjs';
import isStandardSyntaxDeclaration from './isStandardSyntaxDeclaration.mjs';

/**
 * @param {import('postcss').Node} node
 * @returns {boolean}
 */
export default function isAfterStandardPropertyDeclaration(node) {
	const prevNode = getPreviousNonSharedLineCommentNode(node);

	return (
		prevNode !== undefined &&
		isDeclaration(prevNode) &&
		isStandardSyntaxDeclaration(prevNode) &&
		!isCustomProperty(prevNode.prop || '')
	);
}
