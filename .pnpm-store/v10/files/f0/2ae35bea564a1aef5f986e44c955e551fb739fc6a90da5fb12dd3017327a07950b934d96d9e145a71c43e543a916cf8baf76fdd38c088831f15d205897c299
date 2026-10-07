import uniteSets from '../utils/uniteSets.mjs';

/** @type {ReadonlySet<string>} */
export const basicKeywords = new Set(['initial', 'inherit', 'revert', 'revert-layer', 'unset']);

/** @type {ReadonlySet<string>} */
export const systemFontKeywords = uniteSets(basicKeywords, [
	'caption',
	'icon',
	'menu',
	'message-box',
	'small-caption',
	'status-bar',
]);

/** @type {ReadonlySet<string>} */
export const fontFamilyKeywords = uniteSets(basicKeywords, [
	'serif',
	'sans-serif',
	'cursive',
	'fantasy',
	'monospace',
	'system-ui',
	'ui-serif',
	'ui-sans-serif',
	'ui-monospace',
	'ui-rounded',
	'emoji',
	'math',
	'fangsong',
]);

/** @type {ReadonlySet<string>} */
const appleSystemFonts = new Set([
	'-apple-system',
	'-apple-system-headline',
	'-apple-system-body',
	'-apple-system-subheadline',
	'-apple-system-footnote',
	'-apple-system-caption1',
	'-apple-system-caption2',
	'-apple-system-short-headline',
	'-apple-system-short-body',
	'-apple-system-short-subheadline',
	'-apple-system-short-footnote',
	'-apple-system-short-caption1',
	'-apple-system-tall-body',
	'-apple-system-title0',
	'-apple-system-title1',
	'-apple-system-title2',
	'-apple-system-title3',
	'-apple-system-title4',
]);

/** @type {ReadonlySet<string>} */
const mozillaSystemFonts = new Set([
	'-moz-button',
	'-moz-desktop',
	'-moz-dialog',
	'-moz-document',
	'-moz-field',
	'-moz-fixed',
	'-moz-info',
	'-moz-list',
	'-moz-pull-down-menu',
	'-moz-window',
	'-moz-workspace',
]);

/** @type {ReadonlySet<string>} */
const webkitSystemFonts = new Set([
	'-webkit-body',
	'-webkit-control',
	'-webkit-mini-control',
	'-webkit-pictograph',
	'-webkit-small-control',
	'-webkit-standard',
]);

/** @type {ReadonlySet<string>} */
export const prefixedSystemFonts = uniteSets(
	appleSystemFonts,
	mozillaSystemFonts,
	webkitSystemFonts,
);

/** @type {ReadonlySet<string>} */
export const fontWeightRelativeKeywords = new Set(['bolder', 'lighter']);

/** @type {ReadonlySet<string>} */
export const fontWeightAbsoluteKeywords = new Set(['normal', 'bold']);

/** @type {ReadonlySet<string>} */
export const fontWeightNonNumericKeywords = uniteSets(
	fontWeightRelativeKeywords,
	fontWeightAbsoluteKeywords,
);

/** @type {ReadonlySet<string>} */
const fontWeightNumericKeywords = new Set([
	'100',
	'200',
	'300',
	'400',
	'500',
	'600',
	'700',
	'800',
	'900',
]);

/** @type {ReadonlySet<string>} */
export const fontWeightKeywords = uniteSets(
	basicKeywords,
	fontWeightNonNumericKeywords,
	fontWeightNumericKeywords,
);

/** @type {ReadonlySet<string>} */
const fontStyleKeywords = uniteSets(basicKeywords, ['normal', 'italic', 'oblique']);

/** @type {ReadonlySet<string>} */
const fontVariantCSS2Keywords = uniteSets(basicKeywords, ['normal', 'none', 'small-caps']);

/** @type {ReadonlySet<string>} */
const fontStretchKeywords = uniteSets(basicKeywords, [
	'semi-condensed',
	'condensed',
	'extra-condensed',
	'ultra-condensed',
	'semi-expanded',
	'expanded',
	'extra-expanded',
	'ultra-expanded',
]);

/** @type {ReadonlySet<string>} */
export const fontSizeKeywords = uniteSets(basicKeywords, [
	'xx-small',
	'x-small',
	'small',
	'medium',
	'large',
	'x-large',
	'xx-large',
	'xxx-large',
	'larger',
	'smaller',
	'math',
	'-konq-xxx-large',
	'-webkit-xxx-large',
]);

/** @type {ReadonlySet<string>} */
const lineHeightKeywords = uniteSets(basicKeywords, ['normal']);

/** @type {ReadonlySet<string>} */
export const fontShorthandKeywords = uniteSets(
	basicKeywords,
	fontStyleKeywords,
	fontVariantCSS2Keywords,
	fontWeightKeywords,
	fontStretchKeywords,
	fontSizeKeywords,
	lineHeightKeywords,
	fontFamilyKeywords,
);

/** @type {ReadonlySet<string>} */
export const animationNameKeywords = uniteSets(basicKeywords, ['none']);

/** @type {ReadonlySet<string>} */
const animationTimingFunctionKeywords = uniteSets(basicKeywords, [
	'linear',
	'ease',
	'ease-in',
	'ease-in-out',
	'ease-out',
	'step-start',
	'step-end',
	'steps',
	'cubic-bezier',
]);

/** @type {ReadonlySet<string>} */
const animationIterationCountKeywords = new Set(['infinite']);

/** @type {ReadonlySet<string>} */
const animationDirectionKeywords = uniteSets(basicKeywords, [
	'normal',
	'reverse',
	'alternate',
	'alternate-reverse',
]);

/** @type {ReadonlySet<string>} */
const animationFillModeKeywords = new Set(['none', 'forwards', 'backwards', 'both']);

/** @type {ReadonlySet<string>} */
const animationPlayStateKeywords = uniteSets(basicKeywords, ['running', 'paused']);

/**
 * @see https://developer.mozilla.org/docs/Web/CSS/animation
 * @type {ReadonlySet<string>}
 */
export const animationShorthandKeywords = uniteSets(
	basicKeywords,
	animationNameKeywords,
	animationTimingFunctionKeywords,
	animationIterationCountKeywords,
	animationDirectionKeywords,
	animationFillModeKeywords,
	animationPlayStateKeywords,
);

/** @type {ReadonlySet<string>} */
export const gridRowKeywords = uniteSets(basicKeywords, ['auto', 'span']);

/** @type {ReadonlySet<string>} */
export const gridColumnKeywords = uniteSets(basicKeywords, ['auto', 'span']);

/** @type {ReadonlySet<string>} */
export const gridAreaKeywords = uniteSets(basicKeywords, ['auto', 'span']);

/**
 * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
 * @type {ReadonlySet<string>}
 */
export const counterIncrementKeywords = uniteSets(basicKeywords, ['none']);

/** @type {ReadonlySet<string>} */
export const counterResetKeywords = uniteSets(basicKeywords, ['none']);

/**
 * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
 * @type {ReadonlySet<string>}
 */
export const listStyleTypeKeywords = uniteSets(basicKeywords, [
	'none',
	'disc',
	'circle',
	'square',
	'decimal',
	'decimal-leading-zero',
	'cjk-decimal',
	'cjk-earthly-branch',
	'cjk-heavenly-stem',
	'cjk-ideographic',
	'lower-alpha',
	'upper-alpha',
	'lower-armenian',
	'upper-armenian',
	'lower-greek',
	'upper-greek',
	'lower-hexadecimal',
	'upper-hexadecimal',
	'lower-latin',
	'upper-latin',
	'lower-norwegian',
	'upper-norwegian',
	'lower-roman',
	'upper-roman',
	'afar',
	'amharic',
	'amharic-abegede',
	'arabic-indic',
	'armenian',
	'bengali',
	'cambodian',
	'devanagari',
	'ethiopic-abegede',
	'ethiopic-abegede-am-et',
	'ethiopic-abegede-gez',
	'ethiopic-abegede-ti-er',
	'ethiopic-abegede-ti-et',
	'ethiopic-halehame',
	'ethiopic-halehame-aa-er',
	'ethiopic-halehame-aa-et',
	'ethiopic-halehame-am',
	'ethiopic-halehame-am-et',
	'ethiopic-halehame-gez',
	'ethiopic-halehame-om-et',
	'ethiopic-halehame-sid-et',
	'ethiopic-halehame-so-et',
	'ethiopic-halehame-ti-er',
	'ethiopic-halehame-ti-et',
	'ethiopic-halehame-tig',
	'ethiopic-numeric',
	'georgian',
	'gujarati',
	'gurmukhi',
	'hangul',
	'hangul-consonant',
	'hebrew',
	'hiragana',
	'hiragana-iroha',
	'japanese-formal',
	'japanese-informal',
	'kannada',
	'katakana',
	'katakana-iroha',
	'khmer',
	'korean-hangul-formal',
	'korean-hanja-formal',
	'korean-hanja-informal',
	'lao',
	'malayalam',
	'mongolian',
	'myanmar',
	'oriya',
	'oromo',
	'persian',
	'sidama',
	'somali',
	'simp-chinese-formal',
	'simp-chinese-informal',
	'tamil',
	'telugu',
	'thai',
	'tibetan',
	'tigre',
	'tigrinya-er',
	'tigrinya-er-abegede',
	'tigrinya-et',
	'tigrinya-et-abegede',
	'trad-chinese-formal',
	'trad-chinese-informal',
	'urdu',
	'disclosure-open',
	'disclosure-closed',
	'asterisks',
	'binary',
	'footnotes',
	'octal',
]);

/** @type {ReadonlySet<string>} */
export const listStylePositionKeywords = uniteSets(basicKeywords, ['inside', 'outside']);

/** @type {ReadonlySet<string>} */
export const listStyleImageKeywords = uniteSets(basicKeywords, ['none']);

/** @type {ReadonlySet<string>} */
export const listStyleShorthandKeywords = uniteSets(
	basicKeywords,
	listStyleTypeKeywords,
	listStylePositionKeywords,
	listStyleImageKeywords,
);

/** @type {ReadonlySet<string>} */
export const camelCaseKeywords = new Set([
	'optimizeSpeed',
	'optimizeQuality',
	'optimizeLegibility',
	'geometricPrecision',
	'currentColor',
	'crispEdges',
	'visiblePainted',
	'visibleFill',
	'visibleStroke',
	'sRGB',
	'linearRGB',
]);

/** @type {ReadonlySet<string>} */
export const keyframeSelectorKeywords = new Set(['from', 'to']);

/**
 * @see https://drafts.csswg.org/scroll-animations-1/#view-progress-timelines
 * @type {ReadonlySet<string>}
 */
export const namedTimelineRangeKeywords = new Set([
	'contain',
	'cover',
	'entry',
	'entry-crossing',
	'exit',
	'exit-crossing',
]);

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Mozilla_Extensions#color_keywords
 * @type {ReadonlySet<string>}
 */
const prefixedSystemColorKeywords = new Set([
	'-moz-buttondefault',
	'-moz-buttonhoverface',
	'-moz-buttonhovertext',
	'-moz-cellhighlight',
	'-moz-cellhighlighttext',
	'-moz-combobox',
	'-moz-comboboxtext',
	'-moz-dialog',
	'-moz-dialogtext',
	'-moz-dragtargetzone',
	'-moz-eventreerow',
	'-moz-field',
	'-moz-fieldtext',
	'-moz-html-cellhighlight',
	'-moz-html-cellhighlighttext',
	'-moz-mac-accentdarkestshadow',
	'-moz-mac-accentdarkshadow',
	'-moz-mac-accentface',
	'-moz-mac-accentlightesthighlight',
	'-moz-mac-accentlightshadow',
	'-moz-mac-accentregularhighlight',
	'-moz-mac-accentregularshadow',
	'-moz-mac-chrome-active',
	'-moz-mac-chrome-inactive',
	'-moz-mac-focusring',
	'-moz-mac-menuselect',
	'-moz-mac-menushadow',
	'-moz-mac-menutextselect',
	'-moz-menubarhovertext',
	'-moz-menubartext',
	'-moz-menuhover',
	'-moz-menuhovertext',
	'-moz-nativehyperlinktext',
	'-moz-oddtreerow',
	'-moz-win-accentcolor',
	'-moz-win-accentcolortext',
	'-moz-win-communicationstext',
	'-moz-win-mediatext',
	'-ms-hotlight',
]);

/** @type {ReadonlySet<string>} */
export const deprecatedSystemColorKeywords = new Set([
	'activeborder',
	'activecaption',
	'appworkspace',
	'background',
	'buttonhighlight',
	'buttonshadow',
	'captiontext',
	'inactiveborder',
	'inactivecaption',
	'inactivecaptiontext',
	'infobackground',
	'infotext',
	'menu',
	'menutext',
	'scrollbar',
	'threeddarkshadow',
	'threedface',
	'threedhighlight',
	'threedlightshadow',
	'threedshadow',
	'window',
	'windowframe',
	'windowtext',
]);

/** @type {ReadonlySet<string>} */
export const systemColorsKeywords = uniteSets(
	prefixedSystemColorKeywords,
	deprecatedSystemColorKeywords,
	[
		// https://www.w3.org/TR/css-color-4/#css-system-colors
		'accentcolor',
		'accentcolortext',
		'activetext',
		'buttonborder',
		'buttonface',
		'buttontext',
		'canvas',
		'canvastext',
		'field',
		'fieldtext',
		'graytext',
		'highlight',
		'highlighttext',
		'linktext',
		'mark',
		'marktext',
		'selecteditem',
		'selecteditemtext',
		'visitedtext',
	],
);

/**
 * @see https://www.w3.org/TR/css-color-4/#named-colors
 * @type {ReadonlySet<string>}
 */
export const namedColorsKeywords = new Set([
	'aliceblue',
	'antiquewhite',
	'aqua',
	'aquamarine',
	'azure',
	'beige',
	'bisque',
	'black',
	'blanchedalmond',
	'blue',
	'blueviolet',
	'brown',
	'burlywood',
	'cadetblue',
	'chartreuse',
	'chocolate',
	'coral',
	'cornflowerblue',
	'cornsilk',
	'crimson',
	'cyan',
	'darkblue',
	'darkcyan',
	'darkgoldenrod',
	'darkgray',
	'darkgreen',
	'darkgrey',
	'darkkhaki',
	'darkmagenta',
	'darkolivegreen',
	'darkorange',
	'darkorchid',
	'darkred',
	'darksalmon',
	'darkseagreen',
	'darkslateblue',
	'darkslategray',
	'darkslategrey',
	'darkturquoise',
	'darkviolet',
	'deeppink',
	'deepskyblue',
	'dimgray',
	'dimgrey',
	'dodgerblue',
	'firebrick',
	'floralwhite',
	'forestgreen',
	'fuchsia',
	'gainsboro',
	'ghostwhite',
	'gold',
	'goldenrod',
	'gray',
	'green',
	'greenyellow',
	'grey',
	'honeydew',
	'hotpink',
	'indianred',
	'indigo',
	'ivory',
	'khaki',
	'lavender',
	'lavenderblush',
	'lawngreen',
	'lemonchiffon',
	'lightblue',
	'lightcoral',
	'lightcyan',
	'lightgoldenrodyellow',
	'lightgray',
	'lightgreen',
	'lightgrey',
	'lightpink',
	'lightsalmon',
	'lightseagreen',
	'lightskyblue',
	'lightslategray',
	'lightslategrey',
	'lightsteelblue',
	'lightyellow',
	'lime',
	'limegreen',
	'linen',
	'magenta',
	'maroon',
	'mediumaquamarine',
	'mediumblue',
	'mediumorchid',
	'mediumpurple',
	'mediumseagreen',
	'mediumslateblue',
	'mediumspringgreen',
	'mediumturquoise',
	'mediumvioletred',
	'midnightblue',
	'mintcream',
	'mistyrose',
	'moccasin',
	'navajowhite',
	'navy',
	'oldlace',
	'olive',
	'olivedrab',
	'orange',
	'orangered',
	'orchid',
	'palegoldenrod',
	'palegreen',
	'paleturquoise',
	'palevioletred',
	'papayawhip',
	'peachpuff',
	'peru',
	'pink',
	'plum',
	'powderblue',
	'purple',
	'rebeccapurple',
	'red',
	'rosybrown',
	'royalblue',
	'saddlebrown',
	'salmon',
	'sandybrown',
	'seagreen',
	'seashell',
	'sienna',
	'silver',
	'skyblue',
	'slateblue',
	'slategray',
	'slategrey',
	'snow',
	'springgreen',
	'steelblue',
	'tan',
	'teal',
	'thistle',
	'tomato',
	'turquoise',
	'violet',
	'wheat',
	'white',
	'whitesmoke',
	'yellow',
	'yellowgreen',
]);
