import findNodeUpToRoot from './findNodeUpToRoot.mjs';
import { isAtRule } from './typeGuards.mjs';
import { nestingSupportedAtKeywords } from '../reference/atKeywords.mjs';

/** @import { Declaration, Node } from 'postcss' */

/**
 * Check whether a declaration is a descriptor one
 *
 * @param {Declaration} decl
 * @returns {boolean}
 */
export default function isDescriptorDeclaration(decl) {
	return Boolean(findNodeUpToRoot(decl, isAtRuleSupportingDescriptors));
}

/**
 * @param {Node} node
 */
function isAtRuleSupportingDescriptors(node) {
	return isAtRule(node) && !nestingSupportedAtKeywords.has(node.name.toLowerCase());
}
