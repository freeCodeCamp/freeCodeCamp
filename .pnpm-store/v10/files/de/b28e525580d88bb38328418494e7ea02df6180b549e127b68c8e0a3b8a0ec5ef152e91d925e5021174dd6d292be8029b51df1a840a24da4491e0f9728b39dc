import selectorParser from 'postcss-selector-parser';
import valueParser from 'postcss-value-parser';

const { isAttribute, isComment } = selectorParser;

import {
	atRuleAfterIndex,
	atRuleAfterNameIndex,
	atRuleBetweenIndex,
	atRuleParamIndex,
	declarationBetweenIndex,
	declarationValueIndex,
	ruleAfterIndex,
	ruleBetweenIndex,
} from '../../utils/nodeFieldIndices.mjs';

import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'no-irregular-whitespace';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected irregular whitespace',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/no-irregular-whitespace',
};

const IRREGULAR_WHITESPACES = [
	'\u000B', // Line Tabulation (\v) - <VT>
	'\u000C', // Form Feed (\f) - <FF>
	'\u00A0', // No-Break Space - <NBSP>
	'\u0085', // Next Line
	'\u1680', // Ogham Space Mark
	'\u180E', // Mongolian Vowel Separator - <MVS>
	'\uFEFF', // Zero Width No-Break Space - <BOM>
	'\u2000', // En Quad
	'\u2001', // Em Quad
	'\u2002', // En Space - <ENSP>
	'\u2003', // Em Space - <EMSP>
	'\u2004', // Tree-Per-Em
	'\u2005', // Four-Per-Em
	'\u2006', // Six-Per-Em
	'\u2007', // Figure Space
	'\u2008', // Punctuation Space - <PUNCSP>
	'\u2009', // Thin Space
	'\u200A', // Hair Space
	'\u200B', // Zero Width Space - <ZWSP>
	'\u2028', // Line Separator
	'\u2029', // Paragraph Separator
	'\u202F', // Narrow No-Break Space
	'\u205F', // Medium Mathematical Space
	'\u3000', // Ideographic Space
];

const irregularWhitespacesChars = IRREGULAR_WHITESPACES.join('');

const IRREGULAR_WHITESPACE_PATTERN = new RegExp(`[${irregularWhitespacesChars}]`);
const IRREGULAR_WHITESPACES_PATTERN = new RegExp(`[${irregularWhitespacesChars}]+`, 'g');

// Properties whose string values are intentionally ignored by validation logic
const IGNORED_STRING_PROPS = ['grid', 'grid-template', 'grid-template-areas'];

const IGNORED_STRING_PROPS_PATTERN = new RegExp(`^(?:${IGNORED_STRING_PROPS.join('|')})$`, 'i');

/**
 * @param {string} str
 * @returns {Array<{index: number, length: number}>}
 */
const findIrregularWhitespace = (str) => {
	return Array.from(str.matchAll(IRREGULAR_WHITESPACES_PATTERN)).map((match) => {
		return {
			index: match.index,
			length: match[0].length,
		};
	});
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		/**
		 * @template {import('postcss').Node} T
		 * @param {T} node
		 * @param {string | undefined} value
		 * @param {(node: T) => number} getIndex
		 */
		const validate = (node, value, getIndex) => {
			if (!value) return;

			const issues = findIrregularWhitespace(value);

			if (!issues.length) return;

			const startIndex = getIndex(node);

			issues.forEach(({ index, length }) => {
				report({
					ruleName,
					result,
					message: messages.rejected,
					messageArgs: [],
					node,
					index: startIndex + index,
					endIndex: startIndex + index + length,
				});
			});
		};

		root.walkAtRules((atRule) => {
			validate(atRule, atRule.raws.before, zeroIndex);
			validate(atRule, atRule.name, oneIndex);
			validate(atRule, atRule.raws.afterName, atRuleAfterNameIndex);
			validate(atRule, normalizeAtRule(getAtRuleParams(atRule)), atRuleParamIndex);
			validate(atRule, atRule.raws.between, atRuleBetweenIndex);
			validate(atRule, atRule.raws.after, atRuleAfterIndex);
		});

		root.walkRules((ruleNode) => {
			validate(ruleNode, ruleNode.raws.before, zeroIndex);
			validate(ruleNode, normalizeSelector(getRuleSelector(ruleNode)), zeroIndex);
			validate(ruleNode, ruleNode.raws.between, ruleBetweenIndex);
			validate(ruleNode, ruleNode.raws.after, ruleAfterIndex);
		});

		root.walkDecls((decl) => {
			validate(decl, decl.raws.before, zeroIndex);
			validate(decl, normalizeDecl(decl.prop), zeroIndex);
			validate(decl, normalizeDecl(decl.raws.between), declarationBetweenIndex);
			validate(decl, normalizeDecl(getDeclarationValue(decl), decl.prop), declarationValueIndex);
		});
	};
};

function zeroIndex() {
	return 0;
}

function oneIndex() {
	return 1;
}

/**
 * @param {string} str
 * @returns {string}
 */
function replaceIrregularWhitespaces(str) {
	return str.replace(IRREGULAR_WHITESPACES_PATTERN, ' ');
}

/**
 * @param {string} value
 * @param {(node: import('postcss-value-parser').Node) => boolean} shouldNormalizeNode
 * @returns {string}
 */
function normalizeValue(value, shouldNormalizeNode) {
	if (!IRREGULAR_WHITESPACE_PATTERN.test(value)) {
		return value;
	}

	const parsed = valueParser(value);

	parsed.walk((node) => {
		if (shouldNormalizeNode(node)) {
			node.value = replaceIrregularWhitespaces(node.value);
		}
	});

	return parsed.toString();
}

/**.
 * @param {string} value
 * @returns {string}
 */
function normalizeAtRule(value) {
	return normalizeValue(value, (node) => node.type === 'string');
}

/**.
 * @param {string|undefined} value
 * @param {string=} prop
 * @returns {string|undefined}
 */
function normalizeDecl(value, prop) {
	if (!value) return;

	const shouldIgnore = prop ? IGNORED_STRING_PROPS_PATTERN.test(prop.toLowerCase()) : false;

	return normalizeValue(
		value,
		(node) => (node.type === 'string' && !shouldIgnore) || node.type === 'comment',
	);
}

/**
 * @param {string} selector
 * @returns {string}
 */
function normalizeSelector(selector) {
	if (!IRREGULAR_WHITESPACE_PATTERN.test(selector)) {
		return selector;
	}

	const processor = selectorParser((selectors) => {
		selectors.walk((node) => {
			if (!node.value) return;

			if (isAttribute(node) || isComment(node)) {
				node.value = replaceIrregularWhitespaces(node.value);
			}
		});
	});

	return processor.processSync(selector);
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
