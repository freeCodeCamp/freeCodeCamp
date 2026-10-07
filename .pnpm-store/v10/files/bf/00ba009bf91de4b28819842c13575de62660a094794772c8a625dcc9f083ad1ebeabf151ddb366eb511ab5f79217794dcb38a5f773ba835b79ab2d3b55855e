import getStylelintRule from './utils/getStylelintRule.mjs';
import normalizeRuleSettings from './normalizeRuleSettings.mjs';

/** @import {Config as StylelintConfig} from 'stylelint' */

/**
 * @param {StylelintConfig} config
 * @returns {Promise<StylelintConfig>}
 */
export default async function normalizeAllRuleSettings(config) {
	if (!config.rules) return config;

	/** @type {StylelintConfig['rules']} */
	const normalizedRules = {};

	for (const [ruleName, rawRuleSettings] of Object.entries(config.rules)) {
		const rule = await getStylelintRule(ruleName, config);

		if (rule) {
			normalizedRules[ruleName] = normalizeRuleSettings(rawRuleSettings, rule);
		} else {
			normalizedRules[ruleName] = [];
		}
	}

	config.rules = normalizedRules;

	return config;
}
