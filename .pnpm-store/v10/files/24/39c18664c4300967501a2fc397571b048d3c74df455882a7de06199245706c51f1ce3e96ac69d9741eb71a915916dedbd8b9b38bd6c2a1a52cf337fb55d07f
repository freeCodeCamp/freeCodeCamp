import { parseCustomMedia } from '@csstools/media-query-list-parser';

import getAtRuleParams from './getAtRuleParams.mjs';

/**
 * @param {import('postcss').AtRule} atRule
 * @returns {ReturnType<typeof import('@csstools/media-query-list-parser').parseCustomMedia>}
 */
export default function parseCustomMediaQuery(atRule) {
	const mediaQuery = parseCustomMedia(getAtRuleParams(atRule), {
		preserveInvalidMediaQueries: true,
	});

	return mediaQuery;
}
