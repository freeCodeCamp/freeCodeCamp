import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import eachDeclarationBlock from '../../utils/eachDeclarationBlock.mjs';
import isCustomProperty from '../../utils/isCustomProperty.mjs';
import isStandardSyntaxProperty from '../../utils/isStandardSyntaxProperty.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'declaration-block-no-duplicate-custom-properties';

const messages = ruleMessages(ruleName, {
	rejected: (property) => `Unexpected duplicate "${property}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{ actual: primary },
			{
				actual: secondaryOptions,
				possible: {
					ignoreProperties: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		eachDeclarationBlock(root, (eachDecl) => {
			const decls = new Set();

			eachDecl((decl) => {
				const prop = decl.prop;

				if (!isStandardSyntaxProperty(prop)) {
					return;
				}

				if (!isCustomProperty(prop)) {
					return;
				}

				if (optionsMatches(secondaryOptions, 'ignoreProperties', prop)) {
					return;
				}

				const isDuplicate = decls.has(prop);

				if (isDuplicate) {
					report({
						message: messages.rejected,
						messageArgs: [prop],
						node: decl,
						result,
						ruleName,
						word: prop,
					});

					return;
				}

				decls.add(prop);
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
