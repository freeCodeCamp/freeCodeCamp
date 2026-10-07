/**
 * @fileoverview Prevent usage of unknown DOM property
 * @author Yannick Croissant
 */

'use strict';

const has = require('hasown');
const docsUrl = require('../util/docsUrl');
const getText = require('../util/eslint').getText;
const testReactVersion = require('../util/version').testReactVersion;
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

const DEFAULTS = {
  ignore: [],
  requireDataLowercase: false,
};

const DOM_ATTRIBUTE_NAMES = {
  'accept-charset': 'acceptCharset',
  class: 'className',
  'http-equiv': 'httpEquiv',
  crossorigin: 'crossOrigin',
  for: 'htmlFor',
  nomodule: 'noModule',
};

const ATTRIBUTE_TAGS_MAP = {
  abbr: ['th', 'td'],
  charset: ['meta'],
  checked: ['input'],
  // image is required for SVG support, all other tags are HTML.
  crossOrigin: ['script', 'img', 'video', 'audio', 'link', 'image'],
  displaystyle: ['math'],
  // https://html.spec.whatwg.org/multipage/links.html#downloading-resources
  download: ['a', 'area'],
  fill: [ // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
    // Fill color
    'altGlyph',
    'circle',
    'ellipse',
    'g',
    'line',
    'marker',
    'mask',
    'path',
    'polygon',
    'polyline',
    'rect',
    'svg',
    'symbol',
    'text',
    'textPath',
    'tref',
    'tspan',
    'use',
    // Animation final state
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'set',
  ],
  focusable: ['svg'],
  imageSizes: ['link'],
  imageSrcSet: ['link'],
  property: ['meta'],
  viewBox: ['marker', 'pattern', 'svg', 'symbol', 'view'],
  as: ['link'],
  align: ['applet', 'caption', 'col', 'colgroup', 'hr', 'iframe', 'img', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr'], // deprecated, but known
  valign: ['tr', 'td', 'th', 'thead', 'tbody', 'tfoot', 'colgroup', 'col'], // deprecated, but known
  noModule: ['script'],
  // Media events allowed only on audio and video tags, see https://github.com/facebook/react/blob/256aefbea1449869620fb26f6ec695536ab453f5/CHANGELOG.md#notable-enhancements
  onAbort: ['audio', 'video'],
  onCancel: ['dialog'],
  onCanPlay: ['audio', 'video'],
  onCanPlayThrough: ['audio', 'video'],
  onClose: ['dialog'],
  onDurationChange: ['audio', 'video'],
  onEmptied: ['audio', 'video'],
  onEncrypted: ['audio', 'video'],
  onEnded: ['audio', 'video'],
  onError: ['audio', 'video', 'img', 'link', 'source', 'script', 'picture', 'iframe'],
  onLoad: ['script', 'img', 'link', 'picture', 'iframe', 'object', 'source'],
  onLoadedData: ['audio', 'video'],
  onLoadedMetadata: ['audio', 'video'],
  onLoadStart: ['audio', 'video'],
  onPause: ['audio', 'video'],
  onPlay: ['audio', 'video'],
  onPlaying: ['audio', 'video'],
  onProgress: ['audio', 'video'],
  onRateChange: ['audio', 'video'],
  onResize: ['audio', 'video'],
  onSeeked: ['audio', 'video'],
  onSeeking: ['audio', 'video'],
  onStalled: ['audio', 'video'],
  onSuspend: ['audio', 'video'],
  onTimeUpdate: ['audio', 'video'],
  onVolumeChange: ['audio', 'video'],
  onWaiting: ['audio', 'video'],
  autoPictureInPicture: ['video'],
  controls: ['audio', 'video'],
  controlsList: ['audio', 'video'],
  disablePictureInPicture: ['video'],
  disableRemotePlayback: ['audio', 'video'],
  loop: ['audio', 'video'],
  muted: ['audio', 'video'],
  playsInline: ['video'],
  allowFullScreen: ['iframe', 'video'],
  webkitAllowFullScreen: ['iframe', 'video'],
  mozAllowFullScreen: ['iframe', 'video'],
  poster: ['video'],
  preload: ['audio', 'video'],
  scrolling: ['iframe'],
  returnValue: ['dialog'],
  webkitDirectory: ['input'],
  shadowrootmode: ['template'],
  shadowrootclonable: ['template'],
  shadowrootdelegatesfocus: ['template'],
  shadowrootserializable: ['template'],
  'transform-origin': ['rect'],
};

const SVGDOM_ATTRIBUTE_NAMES = {
  'accent-height': 'accentHeight',
  'alignment-baseline': 'alignmentBaseline',
  'arabic-form': 'arabicForm',
  'baseline-shift': 'baselineShift',
  'cap-height': 'capHeight',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
  'color-interpolation': 'colorInterpolation',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'color-profile': 'colorProfile',
  'color-rendering': 'colorRendering',
  'dominant-baseline': 'dominantBaseline',
  'enable-background': 'enableBackground',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-size-adjust': 'fontSizeAdjust',
  'font-stretch': 'fontStretch',
  'font-style': 'fontStyle',
  'font-variant': 'fontVariant',
  'font-weight': 'fontWeight',
  'glyph-name': 'glyphName',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  'horiz-adv-x': 'horizAdvX',
  'horiz-origin-x': 'horizOriginX',
  'image-rendering': 'imageRendering',
  'letter-spacing': 'letterSpacing',
  'lighting-color': 'lightingColor',
  'marker-end': 'markerEnd',
  'marker-mid': 'markerMid',
  'marker-start': 'markerStart',
  'overline-position': 'overlinePosition',
  'overline-thickness': 'overlineThickness',
  'paint-order': 'paintOrder',
  'panose-1': 'panose1',
  'pointer-events': 'pointerEvents',
  'rendering-intent': 'renderingIntent',
  'shape-rendering': 'shapeRendering',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'strikethrough-position': 'strikethroughPosition',
  'strikethrough-thickness': 'strikethroughThickness',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'stroke-width': 'strokeWidth',
  'text-anchor': 'textAnchor',
  'text-decoration': 'textDecoration',
  'text-rendering': 'textRendering',
  'underline-position': 'underlinePosition',
  'underline-thickness': 'underlineThickness',
  'unicode-bidi': 'unicodeBidi',
  'unicode-range': 'unicodeRange',
  'units-per-em': 'unitsPerEm',
  'v-alphabetic': 'vAlphabetic',
  'v-hanging': 'vHanging',
  'v-ideographic': 'vIdeographic',
  'v-mathematical': 'vMathematical',
  'vector-effect': 'vectorEffect',
  'vert-adv-y': 'vertAdvY',
  'vert-origin-x': 'vertOriginX',
  'vert-origin-y': 'vertOriginY',
  'word-spacing': 'wordSpacing',
  'writing-mode': 'writingMode',
  'x-height': 'xHeight',
  'xlink:actuate': 'xlinkActuate',
  'xlink:arcrole': 'xlinkArcrole',
  'xlink:href': 'xlinkHref',
  'xlink:role': 'xlinkRole',
  'xlink:show': 'xlinkShow',
  'xlink:title': 'xlinkTitle',
  'xlink:type': 'xlinkType',
  'xml:base': 'xmlBase',
  'xml:lang': 'xmlLang',
  'xml:space': 'xmlSpace',
};

const DOM_PROPERTY_NAMES_ONE_WORD = [
  // Global attributes - can be used on any HTML/DOM element
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
  'dir', 'draggable', 'hidden', 'id', 'lang', 'nonce', 'part', 'slot', 'style', 'title', 'translate', 'inert',
  // Element specific attributes
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes (includes global attributes too)
  // To be considered if these should be added also to ATTRIBUTE_TAGS_MAP
  'accept', 'action', 'allow', 'alt', 'as', 'async', 'buffered', 'capture', 'challenge', 'cite', 'code', 'cols',
  'content', 'coords', 'csp', 'data', 'decoding', 'default', 'defer', 'disabled', 'form',
  'headers', 'height', 'high', 'href', 'icon', 'importance', 'integrity', 'kind', 'label',
  'language', 'loading', 'list', 'loop', 'low', 'manifest', 'max', 'media', 'method', 'min', 'multiple', 'muted',
  'name', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'poster', 'preload', 'profile',
  'rel', 'required', 'reversed', 'role', 'rows', 'sandbox', 'scope', 'seamless', 'selected', 'shape', 'size', 'sizes',
  'span', 'src', 'start', 'step', 'summary', 'target', 'type', 'value', 'width', 'wmode', 'wrap',
  // SVG attributes
  // See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
  'accumulate', 'additive', 'alphabetic', 'amplitude', 'ascent', 'azimuth', 'bbox', 'begin',
  'bias', 'by', 'clip', 'color', 'cursor', 'cx', 'cy', 'd', 'decelerate', 'descent', 'direction',
  'display', 'divisor', 'dur', 'dx', 'dy', 'elevation', 'end', 'exponent', 'fill', 'filter',
  'format', 'from', 'fr', 'fx', 'fy', 'g1', 'g2', 'hanging', 'height', 'hreflang', 'ideographic',
  'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'local', 'mask', 'mode',
  'offset', 'opacity', 'operator', 'order', 'orient', 'orientation', 'origin', 'overflow', 'path',
  'ping', 'points', 'r', 'radius', 'rel', 'restart', 'result', 'rotate', 'rx', 'ry', 'scale',
  'seed', 'slope', 'spacing', 'speed', 'stemh', 'stemv', 'string', 'stroke', 'to', 'transform',
  'u1', 'u2', 'unicode', 'values', 'version', 'visibility', 'widths', 'x', 'x1', 'x2', 'xmlns',
  'y', 'y1', 'y2', 'z',
  // OpenGraph meta tag attributes
  'property',
  // React specific attributes
  'ref', 'key', 'children',
  // Non-standard
  'results', 'security',
  // Video specific
  'controls',
  // popovers
  'popover', 'popovertarget', 'popovertargetaction',
];

const DOM_PROPERTY_NAMES_TWO_WORDS = [
  // Global attributes - can be used on any HTML/DOM element
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
  'accessKey', 'autoCapitalize', 'autoFocus', 'contentEditable', 'enterKeyHint', 'exportParts',
  'inputMode', 'itemID', 'itemRef', 'itemProp', 'itemScope', 'itemType', 'spellCheck', 'tabIndex',
  // Element specific attributes
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes (includes global attributes too)
  // To be considered if these should be added also to ATTRIBUTE_TAGS_MAP
  'acceptCharset', 'autoComplete', 'autoPlay', 'border', 'cellPadding', 'cellSpacing', 'classID', 'codeBase',
  'colSpan', 'contextMenu', 'dateTime', 'encType', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget',
  'frameBorder', 'hrefLang', 'httpEquiv', 'imageSizes', 'imageSrcSet', 'isMap', 'keyParams', 'keyType', 'marginHeight', 'marginWidth',
  'maxLength', 'mediaGroup', 'minLength', 'noValidate', 'onAnimationEnd', 'onAnimationIteration', 'onAnimationStart',
  'onBlur', 'onChange', 'onClick', 'onContextMenu', 'onCopy', 'onCompositionEnd', 'onCompositionStart',
  'onCompositionUpdate', 'onCut', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave',
  'onError', 'onFocus', 'onInput', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoad', 'onWheel', 'onDragOver',
  'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver',
  'onMouseUp', 'onPaste', 'onScroll', 'onSelect', 'onSubmit', 'onBeforeToggle', 'onToggle', 'onTransitionEnd', 'radioGroup',
  'readOnly', 'referrerPolicy', 'rowSpan', 'srcDoc', 'srcLang', 'srcSet', 'useMap', 'fetchPriority',
  // SVG attributes
  // See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
  'crossOrigin', 'accentHeight', 'alignmentBaseline', 'arabicForm', 'attributeName',
  'attributeType', 'baseFrequency', 'baselineShift', 'baseProfile', 'calcMode', 'capHeight',
  'clipPathUnits', 'clipPath', 'clipRule', 'colorInterpolation', 'colorInterpolationFilters',
  'colorProfile', 'colorRendering', 'contentScriptType', 'contentStyleType', 'diffuseConstant',
  'dominantBaseline', 'edgeMode', 'enableBackground', 'fillOpacity', 'fillRule', 'filterRes',
  'filterUnits', 'floodColor', 'floodOpacity', 'fontFamily', 'fontSize', 'fontSizeAdjust',
  'fontStretch', 'fontStyle', 'fontVariant', 'fontWeight', 'glyphName',
  'glyphOrientationHorizontal', 'glyphOrientationVertical', 'glyphRef', 'gradientTransform',
  'gradientUnits', 'horizAdvX', 'horizOriginX', 'imageRendering', 'kernelMatrix',
  'kernelUnitLength', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'letterSpacing',
  'lightingColor', 'limitingConeAngle', 'markerEnd', 'markerMid', 'markerStart', 'markerHeight',
  'markerUnits', 'markerWidth', 'maskContentUnits', 'maskUnits', 'mathematical', 'numOctaves',
  'overlinePosition', 'overlineThickness', 'panose1', 'paintOrder', 'pathLength',
  'patternContentUnits', 'patternTransform', 'patternUnits', 'pointerEvents', 'pointsAtX',
  'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits',
  'referrerPolicy', 'refX', 'refY', 'rendering-intent', 'repeatCount', 'repeatDur',
  'requiredExtensions', 'requiredFeatures', 'shapeRendering', 'specularConstant',
  'specularExponent', 'spreadMethod', 'startOffset', 'stdDeviation', 'stitchTiles', 'stopColor',
  'stopOpacity', 'strikethroughPosition', 'strikethroughThickness', 'strokeDasharray',
  'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity',
  'strokeWidth', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX', 'targetY',
  'textAnchor', 'textDecoration', 'textRendering', 'textLength', 'transformOrigin',
  'underlinePosition', 'underlineThickness', 'unicodeBidi', 'unicodeRange', 'unitsPerEm',
  'vAlphabetic', 'vHanging', 'vIdeographic', 'vMathematical', 'vectorEffect', 'vertAdvY',
  'vertOriginX', 'vertOriginY', 'viewBox', 'viewTarget', 'wordSpacing', 'writingMode', 'xHeight',
  'xChannelSelector', 'xlinkActuate', 'xlinkArcrole', 'xlinkHref', 'xlinkRole', 'xlinkShow',
  'xlinkTitle', 'xlinkType', 'xmlBase', 'xmlLang', 'xmlnsXlink', 'xmlSpace', 'yChannelSelector',
  'zoomAndPan',
  // Safari/Apple specific, no listing available
  'autoCorrect', // https://stackoverflow.com/questions/47985384/html-autocorrect-for-text-input-is-not-working
  'autoSave', // https://stackoverflow.com/questions/25456396/what-is-autosave-attribute-supposed-to-do-how-do-i-use-it
  // React specific attributes https://reactjs.org/docs/dom-elements.html#differences-in-attributes
  'className', 'dangerouslySetInnerHTML', 'defaultValue', 'defaultChecked', 'htmlFor',
  // Events' capture events
  'onBeforeInput', 'onChange',
  'onInvalid', 'onReset', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'suppressContentEditableWarning', 'suppressHydrationWarning',
  'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded',
  'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onResize',
  'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting',
  'onCopyCapture', 'onCutCapture', 'onPasteCapture', 'onCompositionEndCapture', 'onCompositionStartCapture', 'onCompositionUpdateCapture',
  'onFocusCapture', 'onBlurCapture', 'onChangeCapture', 'onBeforeInputCapture', 'onInputCapture', 'onResetCapture', 'onSubmitCapture',
  'onInvalidCapture', 'onLoadCapture', 'onErrorCapture', 'onKeyDownCapture', 'onKeyPressCapture', 'onKeyUpCapture',
  'onAbortCapture', 'onCanPlayCapture', 'onCanPlayThroughCapture', 'onDurationChangeCapture', 'onEmptiedCapture', 'onEncryptedCapture',
  'onEndedCapture', 'onLoadedDataCapture', 'onLoadedMetadataCapture', 'onLoadStartCapture', 'onPauseCapture', 'onPlayCapture',
  'onPlayingCapture', 'onProgressCapture', 'onRateChangeCapture', 'onSeekedCapture', 'onSeekingCapture', 'onStalledCapture', 'onSuspendCapture',
  'onTimeUpdateCapture', 'onVolumeChangeCapture', 'onWaitingCapture', 'onSelectCapture', 'onTouchCancelCapture', 'onTouchEndCapture',
  'onTouchMoveCapture', 'onTouchStartCapture', 'onScrollCapture', 'onWheelCapture', 'onAnimationEndCapture', 'onAnimationIteration',
  'onAnimationStartCapture', 'onTransitionEndCapture',
  'onAuxClick', 'onAuxClickCapture', 'onClickCapture', 'onContextMenuCapture', 'onDoubleClickCapture',
  'onDragCapture', 'onDragEndCapture', 'onDragEnterCapture', 'onDragExitCapture', 'onDragLeaveCapture',
  'onDragOverCapture', 'onDragStartCapture', 'onDropCapture', 'onMouseDown', 'onMouseDownCapture',
  'onMouseMoveCapture', 'onMouseOutCapture', 'onMouseOverCapture', 'onMouseUpCapture',
  // Video specific
  'autoPictureInPicture', 'controlsList', 'disablePictureInPicture', 'disableRemotePlayback',
  // popovers
  'popoverTarget', 'popoverTargetAction',
];

const DOM_PROPERTIES_IGNORE_CASE = ['charset', 'allowFullScreen', 'webkitAllowFullScreen', 'mozAllowFullScreen', 'webkitDirectory', 'popoverTarget', 'popoverTargetAction'];

const ARIA_PROPERTIES = [
  // See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
  // Global attributes
  'aria-atomic', 'aria-braillelabel', 'aria-brailleroledescription', 'aria-busy', 'aria-controls', 'aria-current',
  'aria-describedby', 'aria-description', 'aria-details',
  'aria-disabled', 'aria-dropeffect', 'aria-errormessage', 'aria-flowto', 'aria-grabbed', 'aria-haspopup',
  'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label', 'aria-labelledby', 'aria-live',
  'aria-owns', 'aria-relevant', 'aria-roledescription',
  // Widget attributes
  'aria-autocomplete', 'aria-checked', 'aria-expanded', 'aria-level', 'aria-modal', 'aria-multiline', 'aria-multiselectable',
  'aria-orientation', 'aria-placeholder', 'aria-pressed', 'aria-readonly', 'aria-required', 'aria-selected',
  'aria-sort', 'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext',
  // Relationship attributes
  'aria-activedescendant', 'aria-colcount', 'aria-colindex', 'aria-colindextext', 'aria-colspan',
  'aria-posinset', 'aria-rowcount', 'aria-rowindex', 'aria-rowindextext', 'aria-rowspan', 'aria-setsize',
];

const REACT_ON_PROPS = [
  'onGotPointerCapture',
  'onGotPointerCaptureCapture',
  'onLostPointerCapture',
  'onLostPointerCapture',
  'onLostPointerCaptureCapture',
  'onPointerCancel',
  'onPointerCancelCapture',
  'onPointerDown',
  'onPointerDownCapture',
  'onPointerEnter',
  'onPointerEnterCapture',
  'onPointerLeave',
  'onPointerLeaveCapture',
  'onPointerMove',
  'onPointerMoveCapture',
  'onPointerOut',
  'onPointerOutCapture',
  'onPointerOver',
  'onPointerOverCapture',
  'onPointerUp',
  'onPointerUpCapture',
];

function getDOMPropertyNames(context) {
  return [].concat(
    DOM_PROPERTY_NAMES_TWO_WORDS,
    DOM_PROPERTY_NAMES_ONE_WORD,

    testReactVersion(context, '>= 16.1.0') ? [].concat(
      testReactVersion(context, '>= 16.4.0') ? [].concat(
        // these were added in React v16.4.0, see https://reactjs.org/blog/2018/05/23/react-v-16-4.html and https://github.com/facebook/react/pull/12507
        REACT_ON_PROPS,
        testReactVersion(context, '>= 19') ? [
          // precedence was added in React v19, see https://react.dev/blog/2024/04/25/react-19#support-for-stylesheets
          'precedence',
        ] : []
      ) : []
    ) : [
      // this was removed in React v16.1+, see https://github.com/facebook/react/pull/10823
      'allowTransparency',
    ]
  );
}

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Checks if a node's parent is a JSX tag that is written with lowercase letters,
 * and is not a custom web component. Custom web components have a hyphen in tag name,
 * or have an `is="some-elem"` attribute.
 *
 * Note: does not check if a tag's parent against a list of standard HTML/DOM tags. For example,
 * a `<fake>`'s child would return `true` because "fake" is written only with lowercase letters
 * without a hyphen and does not have a `is="some-elem"` attribute.
 *
 * @param {Object} childNode - JSX element being tested.
 * @returns {boolean} Whether or not the node name match the JSX tag convention.
 */
function isValidHTMLTagInJSX(childNode) {
  const tagConvention = /^[a-z][^-]*$/;
  if (tagConvention.test(childNode.parent.name.name)) {
    return !childNode.parent.attributes.some((attrNode) => (
      attrNode.type === 'JSXAttribute'
        && attrNode.name.type === 'JSXIdentifier'
        && attrNode.name.name === 'is'
        // To learn more about custom web components and `is` attribute,
        // see https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example

    ));
  }
  return false;
}

/**
 * Checks if the attribute name is included in the attributes that are excluded
 * from the camel casing.
 *
 * // returns 'charSet'
 * @example normalizeAttributeCase('charset')
 *
 * Note - these exclusions are not made by React core team, but `eslint-plugin-react` community.
 *
 * @param {string} name - Attribute name to be normalized
 * @returns {string} Result
 */
function normalizeAttributeCase(name) {
  return DOM_PROPERTIES_IGNORE_CASE.find((element) => element.toLowerCase() === name.toLowerCase()) || name;
}

/**
 * Checks if an attribute name is a valid `data-*` attribute:
 * if the name starts with "data-" and has alphanumeric words (browsers require lowercase, but React and TS lowercase them),
 * not start with any casing of "xml", and separated by hyphens (-) (which is also called "kebab case" or "dash case"),
 * then the attribute is a valid data attribute.
 *
 * @param {string} name - Attribute name to be tested
 * @returns {boolean} Result
 */
function isValidDataAttribute(name) {
  return !/^data-xml/i.test(name) && /^data-[^:]*$/.test(name);
}

/**
 * Checks if an attribute name has at least one uppercase characters
 *
 * @param {string} name
 * @returns {boolean} Result
 */
function hasUpperCaseCharacter(name) {
  return name.toLowerCase() !== name;
}

/**
 * Checks if an attribute name is a standard aria attribute by compering it to a list
 * of standard aria property names
 *
 * @param {string} name - Attribute name to be tested
 * @returns {boolean} Result
 */

function isValidAriaAttribute(name) {
  return ARIA_PROPERTIES.some((element) => element === name);
}

/**
 * Extracts the tag name for the JSXAttribute
 * @param {JSXAttribute} node - JSXAttribute being tested.
 * @returns {string | null} tag name
 */
function getTagName(node) {
  if (
    node
    && node.parent
    && node.parent.name
  ) {
    return node.parent.name.name;
  }
  return null;
}

/**
 * Test wether the tag name for the JSXAttribute is
 * something like <Foo.bar />
 * @param {JSXAttribute} node - JSXAttribute being tested.
 * @returns {boolean} result
 */
function tagNameHasDot(node) {
  return !!(
    node.parent
    && node.parent.name
    && node.parent.name.type === 'JSXMemberExpression'
  );
}

/**
 * Get the standard name of the attribute.
 * @param {string} name - Name of the attribute.
 * @param {object} context - eslint context
 * @returns {string | undefined} The standard name of the attribute, or undefined if no standard name was found.
 */
function getStandardName(name, context) {
  if (has(DOM_ATTRIBUTE_NAMES, name)) {
    return DOM_ATTRIBUTE_NAMES[/** @type {keyof DOM_ATTRIBUTE_NAMES} */ (name)];
  }
  if (has(SVGDOM_ATTRIBUTE_NAMES, name)) {
    return SVGDOM_ATTRIBUTE_NAMES[/** @type {keyof SVGDOM_ATTRIBUTE_NAMES} */ (name)];
  }
  const names = getDOMPropertyNames(context);

  // Let's find a possible attribute match with a case-insensitive search.
  return names.find((element) => element.toLowerCase() === name.toLowerCase());
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  invalidPropOnTag: 'Invalid property \'{{name}}\' found on tag \'{{tagName}}\', but it is only allowed on: {{allowedTags}}',
  unknownPropWithStandardName: 'Unknown property \'{{name}}\' found, use \'{{standardName}}\' instead',
  unknownProp: 'Unknown property \'{{name}}\' found',
  dataLowercaseRequired: 'React does not recognize data-* props with uppercase characters on a DOM element. Found \'{{name}}\', use \'{{lowerCaseName}}\' instead',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow usage of unknown DOM property',
      category: 'Possible Errors',
      recommended: true,
      url: docsUrl('no-unknown-property'),
    },
    fixable: 'code',

    messages,

    schema: [{
      type: 'object',
      properties: {
        ignore: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        requireDataLowercase: {
          type: 'boolean',
          default: false,
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    function getIgnoreConfig() {
      return (context.options[0] && context.options[0].ignore) || DEFAULTS.ignore;
    }

    function getRequireDataLowercase() {
      return (context.options[0] && typeof context.options[0].requireDataLowercase !== 'undefined')
        ? !!context.options[0].requireDataLowercase
        : DEFAULTS.requireDataLowercase;
    }

    return {
      JSXAttribute(node) {
        const ignoreNames = getIgnoreConfig();
        const actualName = getText(context, node.name);
        if (ignoreNames.indexOf(actualName) >= 0) {
          return;
        }
        const name = normalizeAttributeCase(actualName);

        // Ignore tags like <Foo.bar />
        if (tagNameHasDot(node)) {
          return;
        }

        if (isValidDataAttribute(name)) {
          if (getRequireDataLowercase() && hasUpperCaseCharacter(name)) {
            report(context, messages.dataLowercaseRequired, 'dataLowercaseRequired', {
              node,
              data: {
                name: actualName,
                lowerCaseName: actualName.toLowerCase(),
              },
            });
          }

          return;
        }

        if (isValidAriaAttribute(name)) { return; }

        const tagName = getTagName(node);

        if (tagName === 'fbt' || tagName === 'fbs') { return; } // fbt/fbs nodes are bonkers, let's not go there

        if (!isValidHTMLTagInJSX(node)) { return; }

        // Let's dive deeper into tags that are HTML/DOM elements (`<button>`), and not React components (`<Button />`)

        // Some attributes are allowed on some tags only
        const allowedTags = has(ATTRIBUTE_TAGS_MAP, name)
          ? ATTRIBUTE_TAGS_MAP[/** @type {keyof ATTRIBUTE_TAGS_MAP} */ (name)]
          : null;
        if (tagName && allowedTags) {
          // Scenario 1A: Allowed attribute found where not supposed to, report it
          if (allowedTags.indexOf(tagName) === -1) {
            report(context, messages.invalidPropOnTag, 'invalidPropOnTag', {
              node,
              data: {
                name: actualName,
                tagName,
                allowedTags: allowedTags.join(', '),
              },
            });
          }
          // Scenario 1B: There are allowed attributes on allowed tags, no need to report it
          return;
        }

        // Let's see if the attribute is a close version to some standard property name
        const standardName = getStandardName(name, context);

        const hasStandardNameButIsNotUsed = standardName && standardName !== name;
        const usesStandardName = standardName && standardName === name;

        if (usesStandardName) {
          // Scenario 2A: The attribute name is the standard name, no need to report it
          return;
        }

        if (hasStandardNameButIsNotUsed) {
          // Scenario 2B: The name of the attribute is close to a standard one, report it with the standard name
          report(context, messages.unknownPropWithStandardName, 'unknownPropWithStandardName', {
            node,
            data: {
              name: actualName,
              standardName,
            },
            fix(fixer) {
              return fixer.replaceText(node.name, standardName);
            },
          });
          return;
        }

        // Scenario 3: We have an attribute that is unknown, report it
        report(context, messages.unknownProp, 'unknownProp', {
          node,
          data: {
            name: actualName,
          },
        });
      },
    };
  },
};
