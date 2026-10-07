import { NumberType, TokenType } from '@csstools/css-tokenizer';
import { isFunctionNode, isTokenNode, sourceIndices } from '@csstools/css-parser-algorithms';
import {
	isMediaFeature,
	isMediaFeatureValue,
	isMediaQueryInvalid,
	matchesRatioExactly,
} from '@csstools/media-query-list-parser';

import { lengthUnits, resolutionUnits } from '../../reference/units.mjs';
import {
	mediaFeatureNameAllowedValueKeywords,
	mediaFeatureNameAllowedValueTypes,
	mediaFeatureNames,
} from '../../reference/mediaFeatures.mjs';
import { mathFunctions } from '../../reference/functions.mjs';

import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import parseMediaQuery from '../../utils/parseMediaQuery.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'media-feature-name-value-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (name, value) => `Unexpected unknown media feature value "${value}" for name "${name}"`,
});

const HAS_MIN_MAX_PREFIX = /^(?:min|max)-/i;

const meta = {
	url: 'https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown',
};

/** @typedef {{ mediaFeatureName: string, mediaFeatureNameRaw: string }} State */
/** @typedef { (state: State, valuePart: string, start: number, end: number) => void } Reporter */

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		/**
		 * Check that a single token value is valid for a given media feature name.
		 *
		 * @param {State} state
		 * @param {import('@csstools/css-tokenizer').CSSToken} token
		 * @param {Reporter} reporter
		 * @returns {void}
		 */
		function checkSingleToken(state, token, reporter) {
			const [type, raw, start, end, parsed] = token;

			if (type === TokenType.Ident) {
				const supportedKeywords = mediaFeatureNameAllowedValueKeywords.get(state.mediaFeatureName);

				if (supportedKeywords) {
					const keyword = vendor.unprefixed(parsed.value.toLowerCase());

					if (supportedKeywords.has(keyword)) return;
				}

				// An ident that isn't expected for the given media feature name
				reporter(state, raw, start, end);

				return;
			}

			const supportedValueTypes = mediaFeatureNameAllowedValueTypes.get(state.mediaFeatureName);

			if (!supportedValueTypes) {
				// The given media feature name doesn't support any single token values.
				reporter(state, raw, start, end);

				return;
			}

			if (type === TokenType.Number) {
				if (parsed.type === NumberType.Integer) {
					if (
						// Integer values are valid for types "integer" and "ratio".
						supportedValueTypes.has('integer') ||
						supportedValueTypes.has('ratio') ||
						// Integer values of "0" are also valid for "length", "resolution" and "mq-boolean".
						(parsed.value === 0 &&
							(supportedValueTypes.has('length') ||
								supportedValueTypes.has('resolution') ||
								supportedValueTypes.has('mq-boolean'))) ||
						// Integer values of "1" are also valid for "mq-boolean".
						(parsed.value === 1 && supportedValueTypes.has('mq-boolean'))
					) {
						return;
					}

					// An integer when the media feature doesn't support integers.
					reporter(state, raw, start, end);

					return;
				}

				if (
					// Numbers are valid for "ratio".
					supportedValueTypes.has('ratio') ||
					// Numbers with value "0" are also valid for "length".
					(parsed.value === 0 &&
						(supportedValueTypes.has('length') || supportedValueTypes.has('resolution')))
				) {
					return;
				}

				// A number when the media feature doesn't support numbers.
				reporter(state, raw, start, end);

				return;
			}

			if (type === TokenType.Dimension) {
				const unit = parsed.unit.toLowerCase();

				if (supportedValueTypes.has('resolution') && resolutionUnits.has(unit)) return;

				if (supportedValueTypes.has('length') && lengthUnits.has(unit)) return;

				// An unexpected dimension or a media feature that doesn't support dimensions.
				reporter(state, raw, start, end);
			}
		}

		/**
		 * Check that a function node is valid for a given media feature name.
		 *
		 * @param {State} state
		 * @param {import('@csstools/css-parser-algorithms').FunctionNode} functionNode
		 * @param {Reporter} reporter
		 * @returns {void}
		 */
		function checkFunction(state, functionNode, reporter) {
			const functionName = functionNode.getName().toLowerCase();

			// "env()" can represent any value, it is treated as valid for static analysis.
			if (functionName === 'env') return;

			const supportedValueTypes = mediaFeatureNameAllowedValueTypes.get(state.mediaFeatureName);

			if (
				supportedValueTypes &&
				mathFunctions.has(functionName) &&
				(supportedValueTypes.has('integer') ||
					supportedValueTypes.has('length') ||
					supportedValueTypes.has('ratio') ||
					supportedValueTypes.has('resolution'))
			) {
				return;
			}

			// An unexpected function or a media feature that doesn't support types that can be the result of a function.
			reporter(state, functionNode.toString(), ...sourceIndices(functionNode));
		}

		/**
		 * Check that an array of component values is valid for a given media feature name.
		 *
		 * @param {State} state
		 * @param {Array<import('@csstools/css-parser-algorithms').ComponentValue>} componentValues
		 * @param {Reporter} reporter
		 * @returns {void}
		 */
		function checkListOfComponentValues(state, componentValues, reporter) {
			const supportedValueTypes = mediaFeatureNameAllowedValueTypes.get(state.mediaFeatureName);

			if (
				supportedValueTypes &&
				supportedValueTypes.has('ratio') &&
				matchesRatioExactly(componentValues) !== -1
			) {
				return;
			}

			// An invalid aspect ratio or a media feature that doesn't support aspect ratios.
			reporter(
				state,
				componentValues.map((x) => x.toString()).join(''),
				...sourceIndices(componentValues),
			);
		}

		/**
		 * @param {State} state
		 * @param {import('@csstools/media-query-list-parser').MediaFeatureValue} valueNode
		 * @param {Reporter} reporter
		 * @returns {void}
		 */
		function checkMediaFeatureValue(state, valueNode, reporter) {
			if (isTokenNode(valueNode.value)) {
				checkSingleToken(state, valueNode.value.value, reporter);

				return;
			}

			if (isFunctionNode(valueNode.value)) {
				checkFunction(state, valueNode.value, reporter);

				return;
			}

			if (Array.isArray(valueNode.value)) {
				checkListOfComponentValues(state, valueNode.value, reporter);
			}
		}

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			/**
			 * @type {Reporter}
			 */
			const reporter = (state, valuePart, start, end) => {
				const atRuleParamIndexValue = atRuleParamIndex(atRule);

				report({
					message: messages.rejected,
					messageArgs: [state.mediaFeatureNameRaw, valuePart],
					index: atRuleParamIndexValue + start,
					endIndex: atRuleParamIndexValue + end + 1,
					node: atRule,
					ruleName,
					result,
				});
			};

			/** @type {State} */
			const initialState = {
				mediaFeatureName: '',
				mediaFeatureNameRaw: '',
			};

			parseMediaQuery(atRule).forEach((mediaQuery) => {
				if (isMediaQueryInvalid(mediaQuery)) return;

				mediaQuery.walk(({ node, state }) => {
					if (!state) return;

					if (isMediaFeature(node)) {
						const mediaFeatureNameRaw = node.getName();
						let mediaFeatureName = vendor.unprefixed(mediaFeatureNameRaw.toLowerCase());

						// Unknown media feature names are handled by "media-feature-name-no-unknown".
						if (!mediaFeatureNames.has(mediaFeatureName)) return;

						mediaFeatureName = mediaFeatureName.replace(HAS_MIN_MAX_PREFIX, '');

						state.mediaFeatureName = mediaFeatureName;
						state.mediaFeatureNameRaw = mediaFeatureNameRaw;

						return;
					}

					if (!state.mediaFeatureName || !state.mediaFeatureNameRaw) return;

					if (isMediaFeatureValue(node)) {
						checkMediaFeatureValue(state, node, reporter);
					}
				}, initialState);
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
