import { distance } from 'fastest-levenshtein';

import { SEVERITY_ERROR } from './constants.mjs';
import rules from './rules/index.mjs';

const MAX_LEVENSHTEIN_DISTANCE = 6;
const MAX_SUGGESTIONS_COUNT = 3;

/**
 * @param {string} ruleName
 * @returns {string[]}
 */
function extractSuggestions(ruleName) {
	const suggestions = Array.from({ length: MAX_LEVENSHTEIN_DISTANCE });

	for (let i = 0; i < suggestions.length; i++) {
		suggestions[i] = [];
	}

	for (const existRuleName of Object.keys(rules)) {
		const dist = distance(existRuleName, ruleName);

		if (dist <= MAX_LEVENSHTEIN_DISTANCE) {
			suggestions[dist - 1].push(existRuleName);
		}
	}

	/** @type {string[]} */
	let result = [];

	for (const [i, suggestion] of suggestions.entries()) {
		if (suggestion.length > 0) {
			if (i < 3) {
				return suggestion.slice(0, MAX_SUGGESTIONS_COUNT);
			}

			result = result.concat(suggestion);
		}
	}

	return result.slice(0, MAX_SUGGESTIONS_COUNT);
}

/**
 * @param {string} ruleName
 * @param {string[]} [suggestions]
 * @returns {string}
 */
function rejectMessage(ruleName, suggestions = []) {
	return `Unknown rule ${ruleName}.${
		suggestions.length > 0 ? ` Did you mean ${suggestions.join(', ')}?` : ''
	}`;
}

/** @type {Map<string, string[]>} */
const cache = new Map();

/**
 * @param {string} unknownRuleName
 * @param {import('postcss').Root} postcssRoot
 * @param {import('stylelint').PostcssResult} postcssResult
 * @returns {void}
 */
export default function reportUnknownRuleNames(unknownRuleName, postcssRoot, postcssResult) {
	const suggestions = cache.has(unknownRuleName)
		? /** @type {string[]} */ (cache.get(unknownRuleName))
		: extractSuggestions(unknownRuleName);

	cache.set(unknownRuleName, suggestions);
	postcssResult.warn(rejectMessage(unknownRuleName, suggestions), {
		severity: SEVERITY_ERROR,
		rule: unknownRuleName,
		node: postcssRoot,
		index: 0,
	});
}
