import { hasSource, isComment, isDocument, isRoot } from './typeGuards.mjs';

/**
 * @param {import('postcss').Node} statement
 * @returns {boolean}
 */
export default function isFirstNested(statement) {
	const parentNode = statement.parent;

	if (parentNode === undefined) {
		return false;
	}

	if (isRoot(parentNode) && !isInDocument(parentNode)) {
		return false;
	}

	if (statement === parentNode.first) {
		return true;
	}

	/*
	 * Search for the statement in the parent's nodes, ignoring comment
	 * nodes on the same line as the parent's opening brace.
	 */

	const parentNodes = parentNode.nodes;

	if (!parentNodes) {
		return false;
	}

	const firstNode = parentNodes[0];

	if (!firstNode) {
		return false;
	}

	if (
		!isComment(firstNode) ||
		(typeof firstNode.raws.before === 'string' && firstNode.raws.before.includes('\n'))
	) {
		return false;
	}

	if (!hasSource(firstNode) || !firstNode.source.start) {
		return false;
	}

	const openingBraceLine = firstNode.source.start.line;

	if (!firstNode.source.end || openingBraceLine !== firstNode.source.end.line) {
		return false;
	}

	for (const [index, node] of parentNodes.entries()) {
		if (index === 0) {
			continue;
		}

		if (node === statement) {
			return true;
		}

		if (
			!isComment(node) ||
			(hasSource(node) && node.source.end && node.source.end.line !== openingBraceLine)
		) {
			return false;
		}
	}

	/* istanbul ignore next: Should always return in the loop */
	return false;
}

/**
 * @param {import('postcss').Node} node
 * @returns {boolean}
 */
function isInDocument({ parent }) {
	return Boolean(parent && isDocument(parent));
}
