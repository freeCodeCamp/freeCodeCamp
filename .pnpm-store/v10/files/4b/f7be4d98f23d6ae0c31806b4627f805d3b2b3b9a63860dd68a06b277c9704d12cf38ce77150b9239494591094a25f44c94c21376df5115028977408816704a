import valueParser from 'postcss-value-parser';

import { atRuleRegexes } from '../../utils/regexes.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import isUrlFunction from '../../utils/isUrlFunction.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'no-duplicate-at-import-rules';

const messages = ruleMessages(ruleName, {
	rejected: (atImport) => `Unexpected duplicate @import rule ${atImport}`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		/** @type {Record<string, string[]>} */
		const imports = {};

		root.walkAtRules(atRuleRegexes.importName, (atRule) => {
			const [firstParam, ...restParams] = valueParser(getAtRuleParams(atRule)).nodes;

			if (!firstParam) {
				return;
			}

			// extract uri from url() if exists
			const uri =
				isUrlFunction(firstParam) && firstParam.nodes[0]
					? firstParam.nodes[0].value
					: firstParam.value;

			const media = listImportConditions(restParams);

			let importedUris = imports[uri];
			const isDuplicate = media.length
				? media.some((q) => importedUris && importedUris.includes(q))
				: importedUris;

			if (isDuplicate) {
				report({
					message: messages.rejected,
					messageArgs: [uri],
					node: atRule,
					result,
					ruleName,
					word: atRule.toString(),
				});

				return;
			}

			if (!importedUris) {
				importedUris = imports[uri] = [];
			}

			importedUris.push(...media);
		});
	};
};

/** @typedef { import('postcss-value-parser').Node } Node */

/**
 * @param {Node | Array<Node>} node
 * @returns {string}
 */
function stringifyCondition(node) {
	// remove whitespace to get a more consistent key
	return valueParser.stringify(node).replace(/\s/g, '');
}

/**
 * List the import conditions found in the prelude of an `@import` rule
 *
 * @param {Node[]} params
 * @returns {Array<string>}
 */
function listImportConditions(params) {
	if (!params.length) return [];

	const separator = ' ';
	/** @type {Array<string>} */
	const sharedConditions = [];
	/** @type {Array<string>} */
	const media = [];
	/** @type {Array<Node>} */
	let lastMediaQuery = [];

	for (const param of params) {
		// remove top level whitespace and comments to get a more consistent key
		if (param.type === 'space' || param.type === 'comment') {
			continue;
		}

		// layer and supports conditions must precede media query conditions
		if (!media.length) {
			// @import url(...) layer(base) supports(display: flex)
			if (param.type === 'function' && (param.value === 'supports' || param.value === 'layer')) {
				sharedConditions.push(stringifyCondition(param));
				continue;
			}

			// @import url(...) layer
			if (param.type === 'word' && param.value === 'layer') {
				sharedConditions.push(stringifyCondition(param));
				continue;
			}
		}

		if (param.type === 'div' && param.value === ',') {
			media.push(stringifyCondition(lastMediaQuery));
			lastMediaQuery = [];
			continue;
		}

		lastMediaQuery.push(param);
	}

	if (lastMediaQuery.length) {
		media.push(stringifyCondition(lastMediaQuery));
	}

	// Only media query conditions
	if (media.length && !sharedConditions.length) {
		return media;
	}

	// Only layer and supports conditions
	if (!media.length && sharedConditions.length) {
		return [sharedConditions.join(separator)];
	}

	const sharedConditionsString = sharedConditions.join(separator);

	return media.map((m) => {
		return sharedConditionsString + separator + m;
	});
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
