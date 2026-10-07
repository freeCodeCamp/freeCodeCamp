import uniteSets from '../utils/uniteSets.mjs';

/** @type {ReadonlySet<string>} */
const deprecatedMediaFeatureNames = new Set([
	'device-aspect-ratio',
	'device-height',
	'device-width',
]);

/** @type {ReadonlySet<string>} */
export const rangeTypeMediaFeatureNames = uniteSets(deprecatedMediaFeatureNames, [
	'aspect-ratio',
	'color',
	'color-index',
	'height',
	'horizontal-viewport-segments',
	'monochrome',
	'resolution',
	'vertical-viewport-segments',
	'width',
]);

/** @type {ReadonlySet<string>} */
export const rangeTypeMediaFeatureNamesWithMinMaxPrefix = new Set(
	[...rangeTypeMediaFeatureNames].flatMap((name) => {
		return [`min-${name}`, `max-${name}`];
	}),
);

/** @type {ReadonlySet<string>} */
const discreteTypeMediaFeatureNames = new Set([
	'any-hover',
	'any-pointer',
	'color-gamut',
	'display-mode',
	'dynamic-range',
	'environment-blending',
	'forced-colors',
	'grid',
	'hover',
	'inverted-colors',
	'light-level',
	'nav-controls',
	'orientation',
	'overflow-block',
	'overflow-inline',
	'pointer',
	'prefers-color-scheme',
	'prefers-contrast',
	'prefers-reduced-data',
	'prefers-reduced-motion',
	'prefers-reduced-transparency',
	'scan',
	'scripting',
	'update',
	'video-color-gamut',
	'video-dynamic-range',
]);

/** @type {ReadonlySet<string>} */
export const mediaFeatureNames = uniteSets(
	deprecatedMediaFeatureNames,
	rangeTypeMediaFeatureNames,
	rangeTypeMediaFeatureNamesWithMinMaxPrefix,
	discreteTypeMediaFeatureNames,
);

/** @type {ReadonlyMap<string, ReadonlySet<string>>} */
export const mediaFeatureNameAllowedValueKeywords = new Map([
	['any-hover', new Set(['none', 'hover'])],
	['any-pointer', new Set(['none', 'coarse', 'fine'])],
	['color-gamut', new Set(['srgb', 'p3', 'rec2020'])],
	[
		'display-mode',
		new Set(['fullscreen', 'standalone', 'minimal-ui', 'browser', 'picture-in-picture']),
	],
	['dynamic-range', new Set(['standard', 'high'])],
	['environment-blending', new Set(['opaque', 'additive', 'subtractive'])],
	['forced-colors', new Set(['none', 'active'])],
	['hover', new Set(['none', 'hover'])],
	['inverted-colors', new Set(['none', 'inverted'])],
	['nav-controls', new Set(['none', 'back'])],
	['orientation', new Set(['portrait', 'landscape'])],
	['overflow-block', new Set(['none', 'scroll', 'paged'])],
	['overflow-inline', new Set(['none', 'scroll'])],
	['pointer', new Set(['none', 'coarse', 'fine'])],
	['prefers-color-scheme', new Set(['light', 'dark'])],
	['prefers-contrast', new Set(['no-preference', 'less', 'more', 'custom'])],
	['prefers-reduced-data', new Set(['no-preference', 'reduce'])],
	['prefers-reduced-motion', new Set(['no-preference', 'reduce'])],
	['prefers-reduced-transparency', new Set(['no-preference', 'reduce'])],
	['resolution', new Set(['infinite'])],
	['scan', new Set(['interlace', 'progressive'])],
	['scripting', new Set(['none', 'initial-only', 'enabled'])],
	['update', new Set(['none', 'slow', 'fast'])],
	['video-color-gamut', new Set(['srgb', 'p3', 'rec2020'])],
	['video-dynamic-range', new Set(['standard', 'high'])],
]);

/** @type {ReadonlyMap<string, ReadonlySet<string>>} */
export const mediaFeatureNameAllowedValueTypes = new Map([
	['aspect-ratio', new Set(['ratio'])],
	['color', new Set(['integer'])],
	['color-index', new Set(['integer'])],
	['device-aspect-ratio', new Set(['ratio'])],
	['device-height', new Set(['length'])],
	['device-width', new Set(['length'])],
	['grid', new Set(['mq-boolean'])],
	['height', new Set(['length'])],
	['horizontal-viewport-segments', new Set(['integer'])],
	['monochrome', new Set(['integer'])],
	['resolution', new Set(['resolution'])],
	['vertical-viewport-segments', new Set(['integer'])],
	['width', new Set(['length'])],
]);
