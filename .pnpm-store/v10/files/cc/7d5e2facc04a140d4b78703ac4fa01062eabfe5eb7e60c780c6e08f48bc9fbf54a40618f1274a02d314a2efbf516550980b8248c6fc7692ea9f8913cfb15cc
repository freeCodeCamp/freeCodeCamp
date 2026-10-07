import { isConfigurationComment } from '../../utils/configurationComment.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'no-empty-source';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected empty source',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/no-empty-source',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, _secondaryOptions, context) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		// after a fix has been applied root.toString() may differ from root.source.input.css
		// i.e. root.source.input.css remains unchanged after a fix
		const rootString = context.fix ? root.toString() : (root.source && root.source.input.css) || '';

		let hasNotableChild =
			Boolean(rootString.trim()) &&
			root.nodes.some((child) => {
				if (isConfigurationComment(child, context.configurationComment)) return false;

				return true;
			});

		if (!hasNotableChild) {
			// Assume a case when a non-standard syntax is used, such as JSX. See #8547.
			if (root.nodes.length === 0 && Boolean(root.raws.after?.trim())) {
				hasNotableChild = true;
			}
		}

		if (hasNotableChild) {
			return;
		}

		report({
			message: messages.rejected,
			messageArgs: [],
			node: root,
			result,
			ruleName,
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
