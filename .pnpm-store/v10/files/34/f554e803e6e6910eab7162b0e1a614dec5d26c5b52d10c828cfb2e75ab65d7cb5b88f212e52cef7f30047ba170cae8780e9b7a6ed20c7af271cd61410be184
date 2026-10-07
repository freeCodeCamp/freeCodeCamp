import uniteSets from '../utils/uniteSets.mjs';

/** @type {ReadonlySet<string>} */
export const deprecatedAtKeywords = new Set(['document', 'nest', 'viewport']);

/**
 * @see https://www.w3.org/TR/css-nesting-1/#conditionals
 * @type {ReadonlySet<string>}
 */
export const nestingSupportedAtKeywords = new Set([
	'apply',
	'container',
	'layer',
	'media',
	'scope',
	'starting-style',
	'supports',
]);

/**
 * @see https://www.w3.org/TR/css-page-3/#syntax-page-selector
 * @type {ReadonlySet<string>}
 */
export const pageMarginAtKeywords = new Set([
	'top-left-corner',
	'top-left',
	'top-center',
	'top-right',
	'top-right-corner',
	'bottom-left-corner',
	'bottom-left',
	'bottom-center',
	'bottom-right',
	'bottom-right-corner',
	'left-top',
	'left-middle',
	'left-bottom',
	'right-top',
	'right-middle',
	'right-bottom',
]);

/**
 * @see https://www.w3.org/TR/css-fonts-4/#font-feature-values-font-feature-value-type
 * @type {ReadonlySet<string>}
 */
const fontFeatureValueTypes = new Set([
	'annotation',
	'character-variant',
	'historical-forms',
	'ornaments',
	'styleset',
	'stylistic',
	'swash',
]);

/**
 * @see https://developer.mozilla.org/en/docs/Web/CSS/At-rule
 * @type {ReadonlySet<string>}
 */
export const atKeywords = uniteSets(
	deprecatedAtKeywords,
	nestingSupportedAtKeywords,
	pageMarginAtKeywords,
	fontFeatureValueTypes,
	[
		'counter-style',
		'custom-media',
		'custom-selector',
		'font-face',
		'font-feature-values',
		'font-palette-values',
		'function',
		'import',
		'keyframes',
		'namespace',
		'page',
		'position-try',
		'property',
		'scroll-timeline',
		'view-transition',
	],
);
