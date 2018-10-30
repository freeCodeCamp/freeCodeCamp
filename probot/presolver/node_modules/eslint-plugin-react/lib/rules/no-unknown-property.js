/**
 * @fileoverview Prevent usage of unknown DOM property
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = {
  ignore: []
};

var UNKNOWN_MESSAGE = 'Unknown property \'{{name}}\' found, use \'{{standardName}}\' instead';

var DOM_ATTRIBUTE_NAMES = {
  'accept-charset': 'acceptCharset',
  class: 'className',
  for: 'htmlFor',
  'http-equiv': 'httpEquiv'
};

var SVGDOM_ATTRIBUTE_NAMES = {
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
  'xml:space': 'xmlSpace'
};

var DOM_PROPERTY_NAMES = [
  // Standard
  'acceptCharset', 'accessKey', 'allowFullScreen', 'allowTransparency', 'autoComplete', 'autoFocus', 'autoPlay',
  'cellPadding', 'cellSpacing', 'charSet', 'classID', 'className', 'colSpan', 'contentEditable', 'contextMenu',
  'crossOrigin', 'dateTime', 'encType', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget',
  'frameBorder', 'hrefLang', 'htmlFor', 'httpEquiv', 'inputMode', 'keyParams', 'keyType', 'marginHeight', 'marginWidth',
  'maxLength', 'mediaGroup', 'minLength', 'noValidate', 'onAnimationEnd', 'onAnimationIteration', 'onAnimationStart',
  'onBlur', 'onChange', 'onClick', 'onContextMenu', 'onCopy', 'onCompositionEnd', 'onCompositionStart',
  'onCompositionUpdate', 'onCut', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave',
  'onError', 'onFocus', 'onInput', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoad', 'onWheel', 'onDragOver',
  'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver',
  'onMouseUp', 'onPaste', 'onScroll', 'onSelect', 'onSubmit', 'onTransitionEnd', 'radioGroup', 'readOnly', 'rowSpan',
  'spellCheck', 'srcDoc', 'srcLang', 'srcSet', 'tabIndex', 'useMap',
  // Non standard
  'autoCapitalize', 'autoCorrect',
  'autoSave',
  'itemProp', 'itemScope', 'itemType', 'itemRef', 'itemID'
];

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Checks if a node matches the JSX tag convention.
 * @param {Object} node - JSX element being tested.
 * @returns {boolean} Whether or not the node name match the JSX tag convention.
 */
var tagConvention = /^[a-z][^-]*$/;
function isTagName(node) {
  if (tagConvention.test(node.parent.name.name)) {
    // http://www.w3.org/TR/custom-elements/#type-extension-semantics
    return !node.parent.attributes.some(function(attrNode) {
      return (
        attrNode.type === 'JSXAttribute' &&
        attrNode.name.type === 'JSXIdentifier' &&
        attrNode.name.name === 'is'
      );
    });
  }
  return false;
}

/**
 * Get the standard name of the attribute.
 * @param {String} name - Name of the attribute.
 * @returns {String} The standard name of the attribute.
 */
function getStandardName(name) {
  if (DOM_ATTRIBUTE_NAMES[name]) {
    return DOM_ATTRIBUTE_NAMES[name];
  }
  if (SVGDOM_ATTRIBUTE_NAMES[name]) {
    return SVGDOM_ATTRIBUTE_NAMES[name];
  }
  var i;
  var found = DOM_PROPERTY_NAMES.some(function(element, index) {
    i = index;
    return element.toLowerCase() === name;
  });
  return found ? DOM_PROPERTY_NAMES[i] : null;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of unknown DOM property',
      category: 'Possible Errors',
      recommended: true
    },
    fixable: 'code',

    schema: [{
      type: 'object',
      properties: {
        ignore: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    function getIgnoreConfig() {
      return context.options[0] && context.options[0].ignore || DEFAULTS.ignore;
    }

    var sourceCode = context.getSourceCode();

    return {

      JSXAttribute: function(node) {
        var ignoreNames = getIgnoreConfig();
        var name = sourceCode.getText(node.name);
        var standardName = getStandardName(name);
        if (!isTagName(node) || !standardName || ignoreNames.indexOf(name) >= 0) {
          return;
        }
        context.report({
          node: node,
          message: UNKNOWN_MESSAGE,
          data: {
            name: name,
            standardName: standardName
          },
          fix: function(fixer) {
            return fixer.replaceText(node.name, standardName);
          }
        });
      }
    };

  }
};
