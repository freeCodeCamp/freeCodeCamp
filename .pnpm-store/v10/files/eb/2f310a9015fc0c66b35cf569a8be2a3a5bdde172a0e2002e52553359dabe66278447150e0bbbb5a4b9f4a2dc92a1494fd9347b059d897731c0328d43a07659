import { atRuleRegexes } from '../../utils/regexes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import getLexer from '../../utils/getLexer.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'at-rule-descriptor-value-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (descriptor, value) =>
		`Unexpected unknown value "${value}" for descriptor "${descriptor}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/at-rule-descriptor-value-no-unknown',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, _, context) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkAtRules(atRuleRegexes.unsupportedNestingNames, (atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) return;

			atRule.walkDecls((decl) => {
				if (!isStandardSyntaxDeclaration(decl)) return;

				const { prop, value } = decl;

				const lexer = getLexer(context);
				const { error } = lexer.matchAtruleDescriptor(atRule.name, prop, value);

				if (!error) return;

				if (error.name !== 'SyntaxMatchError') return;

				const index = declarationValueIndex(decl);
				const endIndex = index + value.length;

				report({
					message: messages.rejected,
					messageArgs: [prop, value],
					node: decl,
					index,
					endIndex,
					ruleName,
					result,
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
