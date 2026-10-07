import { isComment, isRoot } from './typeGuards.mjs';
import getNextNonSharedLineCommentNode from './getNextNonSharedLineCommentNode.mjs';
import getPreviousNonSharedLineCommentNode from './getPreviousNonSharedLineCommentNode.mjs';

/** @typedef {import('postcss').Node} PostcssNode */

/**
 * @param {PostcssNode | void} a
 * @param {PostcssNode | void} b
 */
function nodesShareLines(a, b) {
	const endLine = a && a.source && a.source.end && a.source.end.line;
	const startLine = b && b.source && b.source.start && b.source.start.line;

	return endLine === startLine;
}

/**
 * @param {PostcssNode} node
 * @returns {boolean}
 */
export default function isSharedLineComment(node) {
	if (!isComment(node)) {
		return false;
	}

	const previousNonSharedLineCommentNode = getPreviousNonSharedLineCommentNode(node);

	if (nodesShareLines(previousNonSharedLineCommentNode, node)) {
		return true;
	}

	const nextNonSharedLineCommentNode = getNextNonSharedLineCommentNode(node);

	if (nextNonSharedLineCommentNode && nodesShareLines(node, nextNonSharedLineCommentNode)) {
		return true;
	}

	const parentNode = node.parent;

	// It's a first child and located on the same line as block start
	if (
		parentNode !== undefined &&
		!isRoot(parentNode) &&
		parentNode.index(node) === 0 &&
		node.raws.before !== undefined &&
		!node.raws.before.includes('\n')
	) {
		return true;
	}

	return false;
}
