import selectorParser from 'postcss-selector-parser';
const { isAttribute, isClassName, isIdentifier, isPseudoClass, isTag, isUniversal } =
	selectorParser;

import { assert } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-not-notation';
const messages = ruleMessages(ruleName, {
	expected: (type) => `Expected ${type} :not() pseudo-class notation`,
});
const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-not-notation',
	fixable: true,
};

/** @typedef {import('postcss-selector-parser').Node} Node */
/** @typedef {import('postcss-selector-parser').Selector} Selector */
/** @typedef {import('postcss-selector-parser').Pseudo} Pseudo */
/** @typedef {import('postcss-selector-parser').Root} Root */
/** @typedef {import('postcss').Rule} Rule */
/** @typedef {import('stylelint').Range} Range */

/**
 * @param {Node} node
 * @returns {boolean}
 */
const isSimpleSelector = (node) =>
	isPseudoClass(node) ||
	isAttribute(node) ||
	isClassName(node) ||
	isUniversal(node) ||
	isIdentifier(node) ||
	isTag(node);

/**
 * @param {Node | undefined} node
 * @returns {node is Pseudo}
 */
const isNot = (node) =>
	isPseudoClass(node) && node.value !== undefined && node.value.toLowerCase() === ':not';

/**
 * @param {Selector[]} list
 * @returns {boolean}
 */
const isSimple = (list) => {
	if (list.length > 1) return false;

	assert(list[0], 'list is never empty');
	const [first, second] = list[0].nodes;

	if (!first) return true;

	if (second) return false;

	return isSimpleSelector(first) && !isNot(first);
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: ['simple', 'complex'],
		});

		if (!validOptions) return;

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) return;

			const selector = ruleNode.selector;

			if (!selector.includes(':not(')) return;

			const selectorRoot = parseSelector(getRuleSelector(ruleNode), result, ruleNode);

			if (!selectorRoot) return;

			selectorRoot.walkPseudos((pseudo) => {
				if (!isNot(pseudo)) return;

				const index = pseudo.sourceIndex;
				const endIndex = index + pseudo.toString().trim().length;

				let fix;

				if (primary === 'complex') {
					const prev = pseudo.prev();
					const hasConsecutiveNot = prev && isNot(prev);

					if (!hasConsecutiveNot) return;

					fix = () => fixComplex(prev, ruleNode, selectorRoot);
				} else {
					const selectors = pseudo.nodes;

					if (isSimple(selectors)) return;

					const second = selectors.length > 1 && selectors[1];
					const isFixable =
						second && (!second.nodes.length || selectors.every(({ nodes }) => nodes.length === 1));

					if (isFixable) fix = () => fixSimple(pseudo, ruleNode, selectorRoot);
				}

				report({
					message: messages.expected,
					messageArgs: [primary],
					node: ruleNode,
					result,
					ruleName,
					index,
					endIndex,
					fix: {
						apply: fix,
						node: ruleNode,
					},
				});
			});
		});
	};
};

/**
 * @param {Pseudo} not
 * @returns {Node}
 */
const getLastConsecutiveNot = ({ parent, sourceIndex }) => {
	assert(parent);

	const nodes = parent.nodes;
	const index = nodes.findIndex((node) => node.sourceIndex >= sourceIndex && !isNot(node));
	const node = index === -1 ? nodes[nodes.length - 1] : nodes[index - 1];

	assert(node);

	return node;
};

/**
 * @param {Pseudo} not
 * @param {Rule} ruleNode
 * @param {Root} selectorRoot
 */
function fixSimple(not, ruleNode, selectorRoot) {
	const simpleSelectors = not.nodes
		.filter(({ nodes }) => nodes[0] && isSimpleSelector(nodes[0]))
		.map((s) => {
			assert(s.nodes[0]);
			s.nodes[0].rawSpaceBefore = '';
			s.nodes[0].rawSpaceAfter = '';

			return s;
		});
	const firstSelector = simpleSelectors.shift();

	assert(firstSelector);
	assert(not.parent);

	not.empty();
	not.nodes.push(firstSelector);

	for (const s of simpleSelectors) {
		const last = getLastConsecutiveNot(not);
		const clone = last.clone({ nodes: [s] });

		clone.rawSpaceBefore = '';
		not.parent.insertAfter(last, clone);
	}

	ruleNode.selector = selectorRoot.toString();
}

/**
 * @param {Pseudo} previousNot
 * @param {Rule} ruleNode
 * @param {Root} selectorRoot
 */
function fixComplex(previousNot, ruleNode, selectorRoot) {
	const indentAndTrimRight = (/** @type {Selector[]} */ selectors) => {
		for (const s of selectors) {
			assert(s.nodes[0]);
			s.nodes[0].rawSpaceBefore = ' ';
			s.nodes[0].rawSpaceAfter = '';
		}
	};
	const [head, ...tail] = previousNot.nodes;
	let node = previousNot.next();

	if (head == null || head.nodes.length === 0) return;

	assert(head.nodes[0]);
	head.nodes[0].rawSpaceBefore = '';
	head.nodes[0].rawSpaceAfter = '';
	indentAndTrimRight(tail);

	while (isNot(node)) {
		const selectors = node.nodes;
		const prev = node;

		indentAndTrimRight(selectors);
		previousNot.nodes = previousNot.nodes.concat(selectors);
		node = node.next();
		prev.remove();
	}

	ruleNode.selector = selectorRoot.toString();
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
