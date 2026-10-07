import eachDeclarationBlock from '../../utils/eachDeclarationBlock.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import uniteSets from '../../utils/uniteSets.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

import {
	longhandSubPropertiesOfShorthandProperties,
	shorthandToResetToInitialProperty,
} from '../../reference/properties.mjs';

const ruleName = 'declaration-block-no-shorthand-property-overrides';

const messages = ruleMessages(ruleName, {
	rejected: (shorthand, original) => `Unexpected shorthand "${shorthand}" after "${original}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		eachDeclarationBlock(root, (eachDecl) => {
			/** @type {Map<string, string>} */
			const declarations = new Map();

			eachDecl((decl) => {
				const prop = decl.prop;
				const unprefixedProp = vendor.unprefixed(prop).toLowerCase();
				const prefix = vendor.prefix(prop).toLowerCase();
				const subProperties = /** @type {Map<string, Set<string>>} */ (
					longhandSubPropertiesOfShorthandProperties
				).get(unprefixedProp);
				const resettables = shorthandToResetToInitialProperty.get(unprefixedProp);
				const union = uniteSets(subProperties ?? [], resettables ?? []);

				declarations.set(prop.toLowerCase(), prop);

				if (union.size === 0) return;

				for (const property of union) {
					const declaration = declarations.get(prefix + property);

					if (!declaration) {
						continue;
					}

					report({
						ruleName,
						result,
						node: decl,
						message: messages.rejected,
						messageArgs: [prop, declaration || ''],
						word: prop,
					});
				}
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
