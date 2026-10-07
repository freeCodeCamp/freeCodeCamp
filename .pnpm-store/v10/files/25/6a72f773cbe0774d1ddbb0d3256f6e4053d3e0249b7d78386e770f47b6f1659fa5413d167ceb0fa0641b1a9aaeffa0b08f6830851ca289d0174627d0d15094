/** @typedef {import('postcss').AtRule} AtRule */

/**
 * @param {AtRule} atRule
 * @param {string} params
 * @returns {AtRule} The atRulearation that was passed in.
 */
export default function setAtRuleParams(atRule, params) {
	const raws = atRule.raws;

	if (raws.params) {
		raws.params.raw = params;
	} else {
		atRule.params = params;
	}

	return atRule;
}
