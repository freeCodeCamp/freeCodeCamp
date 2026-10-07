import valueParser from 'postcss-value-parser';

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import arrayEqual from '../../utils/arrayEqual.mjs';
import { basicKeywords } from '../../reference/keywords.mjs';
import eachDeclarationBlock from '../../utils/eachDeclarationBlock.mjs';
import { longhandSubPropertiesOfShorthandProperties } from '../../reference/properties.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'declaration-block-no-redundant-longhand-properties';

const messages = ruleMessages(ruleName, {
	expected: (property) => `Expected shorthand property "${property}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties',
	fixable: true,
};

/** @typedef {import('postcss').Declaration} Declaration */

/** @type {Map<string, (decls: Map<string, Declaration>) => (string | undefined)>} */
const customResolvers = new Map([
	[
		'font-synthesis',
		(decls) => {
			const weight = decls.get('font-synthesis-weight')?.value.trim();
			const style = decls.get('font-synthesis-style')?.value.trim();
			const smallCaps = decls.get('font-synthesis-small-caps')?.value.trim();

			/** @type {(s: string | undefined) => boolean} */
			const isValidFontSynthesisValue = (s) => s === 'none' || s === 'auto';

			if (
				!isValidFontSynthesisValue(weight) ||
				!isValidFontSynthesisValue(style) ||
				!isValidFontSynthesisValue(smallCaps)
			) {
				return;
			}

			const autoShorthands = [];

			if (weight === 'auto') {
				autoShorthands.push('weight');
			}

			if (style === 'auto') {
				autoShorthands.push('style');
			}

			if (smallCaps === 'auto') {
				autoShorthands.push('small-caps');
			}

			if (autoShorthands.length === 0) return 'none';

			return autoShorthands.join(' ');
		},
	],
	[
		'grid-column',
		(decls) => {
			const start = decls.get('grid-column-start')?.value.trim();
			const end = decls.get('grid-column-end')?.value.trim();

			if (!start || !end) return;

			return `${start} / ${end}`;
		},
	],
	[
		'grid-row',
		(decls) => {
			const start = decls.get('grid-row-start')?.value.trim();
			const end = decls.get('grid-row-end')?.value.trim();

			if (!start || !end) return;

			return `${start} / ${end}`;
		},
	],
	[
		'grid-template',
		(decls) => {
			const areas = decls.get('grid-template-areas')?.value.trim();
			const columns = decls.get('grid-template-columns')?.value.trim();
			const rows = decls.get('grid-template-rows')?.value.trim();

			if (!(areas && columns && rows)) return;

			// repeat() is not allowed inside track listings for grid-template.
			// related issue: https://github.com/stylelint/stylelint/issues/7228
			// spec ref: https://drafts.csswg.org/css-grid/#explicit-grid-shorthand

			if (columns.includes('repeat(') || rows.includes('repeat(')) return;

			const splitAreas = [...areas.matchAll(/"[^"]+"/g)].map((x) => x[0]);
			const splitRows = rows.split(' ');

			if (splitAreas.length === 0 || splitRows.length === 0) return;

			if (splitAreas.length !== splitRows.length) return;

			const zipped = splitAreas.map((area, i) => `${area} ${splitRows[i]}`).join(' ');

			return `${zipped} / ${columns}`;
		},
	],
	[
		'transition',
		(decls) => {
			/** @type {(input: string | undefined) => string[]} */
			const commaSeparated = (input = '') => {
				let trimmedInput = input.trim();

				if (!trimmedInput) return [];

				if (trimmedInput.indexOf(',') === -1) return [trimmedInput];

				/** @type {import('postcss-value-parser').ParsedValue} */
				let parsedValue = valueParser(trimmedInput);
				/** @type {Array<Array<import('postcss-value-parser').Node>>} */
				let valueParts = [];

				{
					/** @type {Array<import('postcss-value-parser').Node>} */
					let currentListItem = [];

					parsedValue.nodes.forEach((node) => {
						if (node.type === 'div' && node.value === ',') {
							valueParts.push(currentListItem);
							currentListItem = [];

							return;
						}

						currentListItem.push(node);
					});

					valueParts.push(currentListItem);
				}

				return valueParts.map((s) => valueParser.stringify(s).trim()).filter((s) => s.length > 0);
			};

			const delays = commaSeparated(decls.get('transition-delay')?.value);
			const durations = commaSeparated(decls.get('transition-duration')?.value);
			const timingFunctions = commaSeparated(decls.get('transition-timing-function')?.value);
			const properties = commaSeparated(decls.get('transition-property')?.value);

			if (!(delays.length && durations.length && timingFunctions.length && properties.length)) {
				return;
			}

			// transition-property is the canonical list of the number of properties;
			// see spec: https://w3c.github.io/csswg-drafts/css-transitions/#transition-property-property
			// if there are more transition-properties than duration/delay/timings,
			// the other properties are computed cyclically -- ex with %
			// see spec example #3: https://w3c.github.io/csswg-drafts/css-transitions/#example-d94cbd75
			return properties
				.map((property, i) => {
					return [
						property,
						durations[i % durations.length],
						timingFunctions[i % timingFunctions.length],
						delays[i % delays.length],
					]
						.filter(isString)
						.join(' ');
				})
				.join(', ');
		},
	],
]);

const haveConflicts = [
	'border-width',
	'border-style',
	'border-color',
	'border-top',
	'border-right',
	'border-bottom',
	'border-left',
	'grid-column',
	'grid-row',
];

/**
 * @param {string} prefixedShorthandProperty
 * @param {string[]} prefixedShorthandData
 * @param {Map<string, Declaration>} transformedDeclarationNodes
 * @returns {string | undefined}
 */
const resolveShorthandValue = (
	prefixedShorthandProperty,
	prefixedShorthandData,
	transformedDeclarationNodes,
) => {
	const resolver = customResolvers.get(prefixedShorthandProperty);

	if (resolver === undefined) {
		// the "default" resolver: sort the longhand values in the order
		// of their properties
		const values = prefixedShorthandData
			.map((p) => transformedDeclarationNodes.get(p)?.value.trim())
			.filter(Boolean);

		return values.length > 0 ? values.join(' ') : undefined;
	}

	return resolver(transformedDeclarationNodes);
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
					ignoreShorthands: [isString, isRegExp],
					ignoreLonghands: [isString],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		/** @type {Map<string, import('stylelint').ShorthandProperties[]>} */
		const longhandToShorthands = new Map();
		const ignoreLonghands = [secondaryOptions?.ignoreLonghands ?? []].flat();

		for (const [shorthand, longhandProps] of longhandSubPropertiesOfShorthandProperties.entries()) {
			if (optionsMatches(secondaryOptions, 'ignoreShorthands', shorthand)) {
				continue;
			}

			for (const longhand of longhandProps) {
				if (ignoreLonghands.includes(longhand)) continue;

				const shorthands = longhandToShorthands.get(longhand) || [];

				shorthands.push(shorthand);
				longhandToShorthands.set(longhand, shorthands);
			}
		}

		eachDeclarationBlock(root, (eachDecl) => {
			/** @type {Map<string, string[]>} */
			const longhandDeclarations = new Map();
			/** @type {Map<string, Declaration[]>} */
			const longhandDeclarationNodes = new Map();

			eachDecl((decl) => {
				// basic keywords are not allowed in shorthand properties
				if (basicKeywords.has(decl.value)) {
					return;
				}

				const prop = decl.prop.toLowerCase();
				const unprefixedProp = vendor.unprefixed(prop);
				const prefix = vendor.prefix(prop);
				const shorthandProperties = longhandToShorthands.get(unprefixedProp);

				if (!shorthandProperties) {
					return;
				}

				for (const shorthandProperty of shorthandProperties) {
					const prefixedShorthandProperty = prefix + shorthandProperty;
					const longhandDeclaration = longhandDeclarations.get(prefixedShorthandProperty) || [];
					const longhandDeclarationNode =
						longhandDeclarationNodes.get(prefixedShorthandProperty) || [];

					longhandDeclaration.push(prop);
					longhandDeclarations.set(prefixedShorthandProperty, longhandDeclaration);

					longhandDeclarationNode.push(decl);
					longhandDeclarationNodes.set(prefixedShorthandProperty, longhandDeclarationNode);

					const shorthandProps = new Set(
						longhandSubPropertiesOfShorthandProperties.get(shorthandProperty),
					);

					ignoreLonghands.forEach((value) => shorthandProps.delete(value));
					const prefixedShorthandData = Array.from(shorthandProps, (item) => prefix + item);
					const copiedPrefixedShorthandData = [...prefixedShorthandData];

					// TODO use toSorted in the next major that supports it
					if (!arrayEqual(copiedPrefixedShorthandData.sort(), longhandDeclaration.sort())) {
						continue;
					}

					const declNodes = longhandDeclarationNodes.get(prefixedShorthandProperty) || [];

					const importantDeclNodesCount = declNodes.reduce(
						(count, declNode) => (declNode.important ? (count += 1) : count),
						0,
					);

					if (importantDeclNodesCount && importantDeclNodesCount !== declNodes.length) {
						continue;
					}

					const [firstDeclNode] = declNodes;
					let resolvedShorthandValue = undefined;

					if (firstDeclNode) {
						const transformedDeclarationNodes = new Map(
							declNodes.map((d) => [d.prop.toLowerCase(), d]),
						);

						resolvedShorthandValue = resolveShorthandValue(
							prefixedShorthandProperty,
							prefixedShorthandData,
							transformedDeclarationNodes,
						);
					}

					const hasFix = firstDeclNode && resolvedShorthandValue;
					const fix = hasFix
						? () => {
								const newShorthandDeclarationNode = firstDeclNode.clone({
									prop: prefixedShorthandProperty,
									value: resolvedShorthandValue,
								});

								firstDeclNode.replaceWith(newShorthandDeclarationNode);
								declNodes.forEach((node) => node.remove());

								if (haveConflicts.includes(shorthandProperty)) {
									longhandDeclarations.forEach((longhands, shorthand) => {
										longhandDeclarations.set(
											shorthand,
											longhands.filter((longhand) => !longhandDeclaration.includes(longhand)),
										);
									});
								}
							}
						: undefined;

					report({
						ruleName,
						result,
						node: decl,
						word: decl.prop,
						message: messages.expected,
						messageArgs: [prefixedShorthandProperty],
						fix: {
							apply: fix,
							node: decl.parent,
						},
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
