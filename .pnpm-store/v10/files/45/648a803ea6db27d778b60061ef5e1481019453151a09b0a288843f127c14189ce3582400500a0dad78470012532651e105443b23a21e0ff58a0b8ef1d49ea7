import { assertString } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'no-invalid-double-slash-comments';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected double-slash CSS comment',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, _, context) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			if (decl.prop.startsWith('//')) {
				report({
					message: messages.rejected,
					messageArgs: [],
					node: decl,
					result,
					ruleName,
				});
			}
		});

		root.walkRules((ruleNode) => {
			const selectors = getRuleSelector(ruleNode).split(',');

			let ruleStringified;
			let index = 0;

			for (const value of selectors) {
				const selector = value.trimStart();

				if (selector.startsWith('//')) {
					ruleStringified ??= ruleNode.toString();
					assertString(context.newline);

					const offset = value.length - selector.length;
					const i = index + offset;
					const lines = ruleStringified.slice(i).split(context.newline);
					const comment = lines[0] ?? '';
					const endIndex = i + comment.length;

					report({
						message: messages.rejected,
						messageArgs: [],
						node: ruleNode,
						result,
						ruleName,
						index: i,
						endIndex,
					});
				}

				index += value.length + 1;
			}
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
