import { parse } from '@csstools/media-query-list-parser';

import getAtRuleParams from './getAtRuleParams.mjs';

/**
 * @param {import('postcss').AtRule} atRule
 * @returns {ReturnType<typeof import('@csstools/media-query-list-parser').parse>}
 */
export default function parseMediaQuery(atRule) {
	const mediaQueries = parse(getAtRuleParams(atRule), {
		preserveInvalidMediaQueries: true,
	});

	return mediaQueries;
}
