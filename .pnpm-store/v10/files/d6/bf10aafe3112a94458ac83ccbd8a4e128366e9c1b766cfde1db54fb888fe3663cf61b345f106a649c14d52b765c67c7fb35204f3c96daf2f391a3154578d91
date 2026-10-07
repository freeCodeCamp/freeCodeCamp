/**
 * @param {import('postcss').Rule} ruleNode
 * @returns {string}
 */
export default function getRuleSelector(ruleNode) {
	const raws = ruleNode.raws;

	return (raws.selector && raws.selector.raw) || ruleNode.selector;
}
