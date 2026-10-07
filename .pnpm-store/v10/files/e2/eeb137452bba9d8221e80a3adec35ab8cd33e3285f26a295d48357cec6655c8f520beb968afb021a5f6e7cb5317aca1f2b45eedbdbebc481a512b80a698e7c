import { atRuleRegexes } from '../../utils/regexes.mjs';
import isAutoprefixable from '../../utils/isAutoprefixable.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'media-feature-name-no-vendor-prefix';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected vendor-prefix',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix',
	fixable: true,
};

const FEATURES = [
	'-webkit-device-pixel-ratio',
	'-webkit-min-device-pixel-ratio',
	'-webkit-max-device-pixel-ratio',
	'-o-device-pixel-ratio',
	'-o-min-device-pixel-ratio',
	'-o-max-device-pixel-ratio',
	'-moz-device-pixel-ratio',
	'min--moz-device-pixel-ratio',
	'max--moz-device-pixel-ratio',
];

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			const params = atRule.params;

			if (!isAutoprefixable.mediaFeatureName(params)) {
				return;
			}

			const matches = atRule.toString().match(new RegExp(`${FEATURES.join('|')}`, 'gi'));

			if (!matches) {
				return;
			}

			for (const match of matches) {
				const fix = () => {
					atRule.params = atRule.params.replace(/-moz-|-o-|-webkit-/i, '');
				};

				report({
					message: messages.rejected,
					messageArgs: [],
					node: atRule,
					word: match,
					result,
					ruleName,
					fix: {
						apply: fix,
						node: atRule,
					},
				});
			}
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
