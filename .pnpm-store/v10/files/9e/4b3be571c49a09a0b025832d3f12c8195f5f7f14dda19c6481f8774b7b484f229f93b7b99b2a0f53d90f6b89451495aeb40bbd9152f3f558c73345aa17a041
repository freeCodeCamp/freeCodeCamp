import valueParser from 'postcss-value-parser';

import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import functionArgumentsSearch from '../../utils/functionArgumentsSearch.mjs';
import isStandardSyntaxValue from '../../utils/isStandardSyntaxValue.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'function-linear-gradient-no-nonstandard-direction';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected nonstandard direction',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction',
};

const LINEAR_GRADIENT_FUNCTION = '(?:-webkit-|-moz-|-o-|-ms-)?linear-gradient';
const LINEAR_GRADIENT_FUNCTION_CALL = new RegExp(`${LINEAR_GRADIENT_FUNCTION}\\(`, 'i');
const LINEAR_GRADIENT_FUNCTION_NAME = new RegExp(`^${LINEAR_GRADIENT_FUNCTION}$`, 'i');

const DIRECTION = /top|left|bottom|right/i;
const DIRECTION_WITH_TO = new RegExp(`^to (${DIRECTION.source})(?: (${DIRECTION.source}))?$`, 'i');
const DIRECTION_WITHOUT_TO = new RegExp(`^(${DIRECTION.source})(?: (${DIRECTION.source}))?$`, 'i');

const DIGIT = /[\d.]/;
const ANGLE = /^[\d.]+(?:deg|grad|rad|turn)$/;
const IN_KEYWORD = /\bin\b/i;

/**
 * @param {string} source
 * @param {boolean} withToPrefix
 */
function isStandardDirection(source, withToPrefix) {
	const regexp = withToPrefix ? DIRECTION_WITH_TO : DIRECTION_WITHOUT_TO;

	const matches = source.match(regexp);

	if (!matches) {
		return false;
	}

	if (matches.length === 2) {
		return true;
	}

	// Cannot repeat side-or-corner, e.g. "to top top"
	if (matches.length === 3 && matches[1] !== matches[2]) {
		return true;
	}

	return false;
}

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			if (!LINEAR_GRADIENT_FUNCTION_CALL.test(decl.value)) return;

			valueParser(decl.value).walk((valueNode) => {
				if (valueNode.type !== 'function') {
					return;
				}

				functionArgumentsSearch(
					valueParser.stringify(valueNode).toLowerCase(),
					LINEAR_GRADIENT_FUNCTION_NAME,
					(expression, expressionIndex) => {
						const args = expression.split(',');
						const firstArg = (args[0] || '').trim();

						// If the first arg is not standard, return early
						if (!isStandardSyntaxValue(firstArg)) {
							return;
						}

						// Skip direction validation for CSS variables
						if (firstArg.startsWith('var(')) {
							return;
						}

						// Ignore gradients with modern syntax that have color space interpolation arguments
						if (IN_KEYWORD.test(firstArg)) {
							return;
						}

						// If the first character is a number, we can assume the user intends an angle
						if (DIGIT.test(firstArg.charAt(0))) {
							if (ANGLE.test(firstArg)) {
								return;
							}

							complain();

							return;
						}

						// The first argument may not be a direction: it may be an angle,
						// or a color stop (in which case user gets default direction, "to bottom")
						// cf. https://drafts.csswg.org/css-images-3/#linear-gradient-syntax
						if (!DIRECTION.test(firstArg)) {
							return;
						}

						const withToPrefix = !vendor.prefix(valueNode.value);

						if (!isStandardDirection(firstArg, withToPrefix)) {
							complain();
						}

						function complain() {
							const index = declarationValueIndex(decl) + valueNode.sourceIndex + expressionIndex;
							const endIndex = index + (args[0] || '').trimEnd().length;

							report({
								message: messages.rejected,
								messageArgs: [],
								node: decl,
								index,
								endIndex,
								result,
								ruleName,
							});
						}
					},
				);
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
