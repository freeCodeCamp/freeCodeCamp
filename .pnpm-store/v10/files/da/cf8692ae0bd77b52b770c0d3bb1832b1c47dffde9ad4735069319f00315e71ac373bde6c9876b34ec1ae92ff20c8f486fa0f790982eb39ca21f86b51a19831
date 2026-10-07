/**
 * @license React
 * react-server-dom-webpack-writer.node.development.server.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var React = require('react');
var util = require('util');

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

function scheduleWork(callback) {
  setImmediate(callback);
}
function flushBuffered(destination) {
  // If we don't have any more data to send right now.
  // Flush whatever is in the buffer to the wire.
  if (typeof destination.flush === 'function') {
    // By convention the Zlib streams provide a flush function for this purpose.
    // For Express, compression middleware adds this method.
    destination.flush();
  }
}
var VIEW_SIZE = 2048;
var currentView = null;
var writtenBytes = 0;
var destinationHasCapacity = true;
function beginWriting(destination) {
  currentView = new Uint8Array(VIEW_SIZE);
  writtenBytes = 0;
  destinationHasCapacity = true;
}

function writeStringChunk(destination, stringChunk) {
  if (stringChunk.length === 0) {
    return;
  } // maximum possible view needed to encode entire string


  if (stringChunk.length * 3 > VIEW_SIZE) {
    if (writtenBytes > 0) {
      writeToDestination(destination, currentView.subarray(0, writtenBytes));
      currentView = new Uint8Array(VIEW_SIZE);
      writtenBytes = 0;
    }

    writeToDestination(destination, textEncoder.encode(stringChunk));
    return;
  }

  var target = currentView;

  if (writtenBytes > 0) {
    target = currentView.subarray(writtenBytes);
  }

  var _textEncoder$encodeIn = textEncoder.encodeInto(stringChunk, target),
      read = _textEncoder$encodeIn.read,
      written = _textEncoder$encodeIn.written;

  writtenBytes += written;

  if (read < stringChunk.length) {
    writeToDestination(destination, currentView);
    currentView = new Uint8Array(VIEW_SIZE);
    writtenBytes = textEncoder.encodeInto(stringChunk.slice(read), currentView).written;
  }

  if (writtenBytes === VIEW_SIZE) {
    writeToDestination(destination, currentView);
    currentView = new Uint8Array(VIEW_SIZE);
    writtenBytes = 0;
  }
}

function writeViewChunk(destination, chunk) {
  if (chunk.byteLength === 0) {
    return;
  }

  if (chunk.byteLength > VIEW_SIZE) {
    // this chunk may overflow a single view which implies it was not
    // one that is cached by the streaming renderer. We will enqueu
    // it directly and expect it is not re-used
    if (writtenBytes > 0) {
      writeToDestination(destination, currentView.subarray(0, writtenBytes));
      currentView = new Uint8Array(VIEW_SIZE);
      writtenBytes = 0;
    }

    writeToDestination(destination, chunk);
    return;
  }

  var bytesToWrite = chunk;
  var allowableBytes = currentView.length - writtenBytes;

  if (allowableBytes < bytesToWrite.byteLength) {
    // this chunk would overflow the current view. We enqueue a full view
    // and start a new view with the remaining chunk
    if (allowableBytes === 0) {
      // the current view is already full, send it
      writeToDestination(destination, currentView);
    } else {
      // fill up the current view and apply the remaining chunk bytes
      // to a new view.
      currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
      writtenBytes += allowableBytes;
      writeToDestination(destination, currentView);
      bytesToWrite = bytesToWrite.subarray(allowableBytes);
    }

    currentView = new Uint8Array(VIEW_SIZE);
    writtenBytes = 0;
  }

  currentView.set(bytesToWrite, writtenBytes);
  writtenBytes += bytesToWrite.byteLength;

  if (writtenBytes === VIEW_SIZE) {
    writeToDestination(destination, currentView);
    currentView = new Uint8Array(VIEW_SIZE);
    writtenBytes = 0;
  }
}

function writeChunk(destination, chunk) {
  if (typeof chunk === 'string') {
    writeStringChunk(destination, chunk);
  } else {
    writeViewChunk(destination, chunk);
  }
}

function writeToDestination(destination, view) {
  var currentHasCapacity = destination.write(view);
  destinationHasCapacity = destinationHasCapacity && currentHasCapacity;
}

function writeChunkAndReturn(destination, chunk) {
  writeChunk(destination, chunk);
  return destinationHasCapacity;
}
function completeWriting(destination) {
  if (currentView && writtenBytes > 0) {
    destination.write(currentView.subarray(0, writtenBytes));
  }

  currentView = null;
  writtenBytes = 0;
  destinationHasCapacity = true;
}
function close(destination) {
  destination.end();
}
var textEncoder = new util.TextEncoder();
function stringToChunk(content) {
  return content;
}
function stringToPrecomputedChunk(content) {
  return textEncoder.encode(content);
}
function closeWithError(destination, error) {
  // $FlowFixMe: This is an Error object or the destination accepts other types.
  destination.destroy(error);
}

// This file is an intermediate layer to translate between Flight
var stringify = JSON.stringify;

function serializeRowHeader(tag, id) {
  return tag + id.toString(16) + ':';
}

function processErrorChunk(request, id, message, stack) {
  var errorInfo = {
    message: message,
    stack: stack
  };
  var row = serializeRowHeader('E', id) + stringify(errorInfo) + '\n';
  return stringToChunk(row);
}
function processModelChunk(request, id, model) {
  var json = stringify(model, request.toJSON);
  var row = serializeRowHeader('J', id) + json + '\n';
  return stringToChunk(row);
}
function processReferenceChunk(request, id, reference) {
  var json = stringify(reference);
  var row = serializeRowHeader('J', id) + json + '\n';
  return stringToChunk(row);
}
function processModuleChunk(request, id, moduleMetaData) {
  var json = stringify(moduleMetaData);
  var row = serializeRowHeader('M', id) + json + '\n';
  return stringToChunk(row);
}
function processProviderChunk(request, id, contextName) {
  var row = serializeRowHeader('P', id) + contextName + '\n';
  return stringToChunk(row);
}
function processSymbolChunk(request, id, name) {
  var json = stringify(name);
  var row = serializeRowHeader('S', id) + json + '\n';
  return stringToChunk(row);
}

// eslint-disable-next-line no-unused-vars
var MODULE_TAG = Symbol.for('react.module.reference');
function getModuleKey(reference) {
  return reference.filepath + '#' + reference.name;
}
function isModuleReference(reference) {
  return reference.$$typeof === MODULE_TAG;
}
function resolveModuleMetaData(config, moduleReference) {
  return config[moduleReference.filepath][moduleReference.name];
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

{
  reservedProps.push('innerText', 'textContent');
}

reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

var startInlineScript = stringToPrecomputedChunk('<script>');
var endInlineScript = stringToPrecomputedChunk('</script>');
var startScriptSrc = stringToPrecomputedChunk('<script src="');
var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
var scriptIntegirty = stringToPrecomputedChunk('" integrity="');
var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');

var textSeparator = stringToPrecomputedChunk('<!-- -->');

var styleAttributeStart = stringToPrecomputedChunk(' style="');
var styleAssign = stringToPrecomputedChunk(':');
var styleSeparator = stringToPrecomputedChunk(';');

var attributeSeparator = stringToPrecomputedChunk(' ');
var attributeAssign = stringToPrecomputedChunk('="');
var attributeEnd = stringToPrecomputedChunk('"');
var attributeEmptyString = stringToPrecomputedChunk('=""');

var endOfStartTag = stringToPrecomputedChunk('>');
var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');

var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');

var leadingNewline = stringToPrecomputedChunk('\n');

var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
var endTag1 = stringToPrecomputedChunk('</');
var endTag2 = stringToPrecomputedChunk('>');
// A placeholder is a node inside a hidden partial tree that can be filled in later, but before
// display. It's never visible to users. We use the template tag because it can be used in every
// type of parent. <script> tags also work in every other tag except <colgroup>.

var placeholder1 = stringToPrecomputedChunk('<template id="');
var placeholder2 = stringToPrecomputedChunk('"></template>');

var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk('<template');
var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk('></template>');
var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
var startSegmentHTML2 = stringToPrecomputedChunk('">');
var endSegmentHTML = stringToPrecomputedChunk('</div>');
var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
var startSegmentSVG2 = stringToPrecomputedChunk('">');
var endSegmentSVG = stringToPrecomputedChunk('</svg>');
var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
var startSegmentMathML2 = stringToPrecomputedChunk('">');
var endSegmentMathML = stringToPrecomputedChunk('</math>');
var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
var startSegmentTable2 = stringToPrecomputedChunk('">');
var endSegmentTable = stringToPrecomputedChunk('</table>');
var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
var startSegmentTableBody2 = stringToPrecomputedChunk('">');
var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
var startSegmentTableRow2 = stringToPrecomputedChunk('">');
var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
var startSegmentColGroup2 = stringToPrecomputedChunk('">');
var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
// The following code is the source scripts that we then minify and inline below,
// with renamed function names that we hope don't collide:
// const COMMENT_NODE = 8;
// const SUSPENSE_START_DATA = '$';
// const SUSPENSE_END_DATA = '/$';
// const SUSPENSE_PENDING_START_DATA = '$?';
// const SUSPENSE_FALLBACK_START_DATA = '$!';
//
// function clientRenderBoundary(suspenseBoundaryID, errorDigest, errorMsg, errorComponentStack) {
//   // Find the fallback's first element.
//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
//   if (!suspenseIdNode) {
//     // The user must have already navigated away from this tree.
//     // E.g. because the parent was hydrated.
//     return;
//   }
//   // Find the boundary around the fallback. This is always the previous node.
//   const suspenseNode = suspenseIdNode.previousSibling;
//   // Tag it to be client rendered.
//   suspenseNode.data = SUSPENSE_FALLBACK_START_DATA;
//   // assign error metadata to first sibling
//   let dataset = suspenseIdNode.dataset;
//   if (errorDigest) dataset.dgst = errorDigest;
//   if (errorMsg) dataset.msg = errorMsg;
//   if (errorComponentStack) dataset.stck = errorComponentStack;
//   // Tell React to retry it if the parent already hydrated.
//   if (suspenseNode._reactRetry) {
//     suspenseNode._reactRetry();
//   }
// }
//
// function completeBoundary(suspenseBoundaryID, contentID) {
//   // Find the fallback's first element.
//   const suspenseIdNode = document.getElementById(suspenseBoundaryID);
//   const contentNode = document.getElementById(contentID);
//   // We'll detach the content node so that regardless of what happens next we don't leave in the tree.
//   // This might also help by not causing recalcing each time we move a child from here to the target.
//   contentNode.parentNode.removeChild(contentNode);
//   if (!suspenseIdNode) {
//     // The user must have already navigated away from this tree.
//     // E.g. because the parent was hydrated. That's fine there's nothing to do
//     // but we have to make sure that we already deleted the container node.
//     return;
//   }
//   // Find the boundary around the fallback. This is always the previous node.
//   const suspenseNode = suspenseIdNode.previousSibling;
//
//   // Clear all the existing children. This is complicated because
//   // there can be embedded Suspense boundaries in the fallback.
//   // This is similar to clearSuspenseBoundary in ReactDOMHostConfig.
//   // TODO: We could avoid this if we never emitted suspense boundaries in fallback trees.
//   // They never hydrate anyway. However, currently we support incrementally loading the fallback.
//   const parentInstance = suspenseNode.parentNode;
//   let node = suspenseNode.nextSibling;
//   let depth = 0;
//   do {
//     if (node && node.nodeType === COMMENT_NODE) {
//       const data = node.data;
//       if (data === SUSPENSE_END_DATA) {
//         if (depth === 0) {
//           break;
//         } else {
//           depth--;
//         }
//       } else if (
//         data === SUSPENSE_START_DATA ||
//         data === SUSPENSE_PENDING_START_DATA ||
//         data === SUSPENSE_FALLBACK_START_DATA
//       ) {
//         depth++;
//       }
//     }
//
//     const nextNode = node.nextSibling;
//     parentInstance.removeChild(node);
//     node = nextNode;
//   } while (node);
//
//   const endOfBoundary = node;
//
//   // Insert all the children from the contentNode between the start and end of suspense boundary.
//   while (contentNode.firstChild) {
//     parentInstance.insertBefore(contentNode.firstChild, endOfBoundary);
//   }
//   suspenseNode.data = SUSPENSE_START_DATA;
//   if (suspenseNode._reactRetry) {
//     suspenseNode._reactRetry();
//   }
// }
//
// function completeSegment(containerID, placeholderID) {
//   const segmentContainer = document.getElementById(containerID);
//   const placeholderNode = document.getElementById(placeholderID);
//   // We always expect both nodes to exist here because, while we might
//   // have navigated away from the main tree, we still expect the detached
//   // tree to exist.
//   segmentContainer.parentNode.removeChild(segmentContainer);
//   while (segmentContainer.firstChild) {
//     placeholderNode.parentNode.insertBefore(
//       segmentContainer.firstChild,
//       placeholderNode,
//     );
//   }
//   placeholderNode.parentNode.removeChild(placeholderNode);
// }

var completeSegmentFunction = 'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}';
var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
var completeSegmentScript2 = stringToPrecomputedChunk('","');
var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
var completeBoundaryScript2 = stringToPrecomputedChunk('","');
var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
var clientRenderScript1A = stringToPrecomputedChunk('"');
var clientRenderScript2 = stringToPrecomputedChunk(')</script>');
var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(',');

var rendererSigil;

{
  // Use this to detect multiple renderers using the same context
  rendererSigil = {};
} // Used to store the parent path of all context overrides in a shared linked list.
// Forming a reverse tree.


var rootContextSnapshot = null; // We assume that this runtime owns the "current" field on all ReactContext instances.
// This global (actually thread local) state represents what state all those "current",
// fields are currently in.

var currentActiveSnapshot = null;

function popNode(prev) {
  {
    prev.context._currentValue = prev.parentValue;
  }
}

function pushNode(next) {
  {
    next.context._currentValue = next.value;
  }
}

function popToNearestCommonAncestor(prev, next) {
  if (prev === next) ; else {
    popNode(prev);
    var parentPrev = prev.parent;
    var parentNext = next.parent;

    if (parentPrev === null) {
      if (parentNext !== null) {
        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
      }
    } else {
      if (parentNext === null) {
        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
      }

      popToNearestCommonAncestor(parentPrev, parentNext); // On the way back, we push the new ones that weren't common.

      pushNode(next);
    }
  }
}

function popAllPrevious(prev) {
  popNode(prev);
  var parentPrev = prev.parent;

  if (parentPrev !== null) {
    popAllPrevious(parentPrev);
  }
}

function pushAllNext(next) {
  var parentNext = next.parent;

  if (parentNext !== null) {
    pushAllNext(parentNext);
  }

  pushNode(next);
}

function popPreviousToCommonLevel(prev, next) {
  popNode(prev);
  var parentPrev = prev.parent;

  if (parentPrev === null) {
    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
  }

  if (parentPrev.depth === next.depth) {
    // We found the same level. Now we just need to find a shared ancestor.
    popToNearestCommonAncestor(parentPrev, next);
  } else {
    // We must still be deeper.
    popPreviousToCommonLevel(parentPrev, next);
  }
}

function popNextToCommonLevel(prev, next) {
  var parentNext = next.parent;

  if (parentNext === null) {
    throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
  }

  if (prev.depth === parentNext.depth) {
    // We found the same level. Now we just need to find a shared ancestor.
    popToNearestCommonAncestor(prev, parentNext);
  } else {
    // We must still be deeper.
    popNextToCommonLevel(prev, parentNext);
  }

  pushNode(next);
} // Perform context switching to the new snapshot.
// To make it cheap to read many contexts, while not suspending, we make the switch eagerly by
// updating all the context's current values. That way reads, always just read the current value.
// At the cost of updating contexts even if they're never read by this subtree.


function switchContext(newSnapshot) {
  // The basic algorithm we need to do is to pop back any contexts that are no longer on the stack.
  // We also need to update any new contexts that are now on the stack with the deepest value.
  // The easiest way to update new contexts is to just reapply them in reverse order from the
  // perspective of the backpointers. To avoid allocating a lot when switching, we use the stack
  // for that. Therefore this algorithm is recursive.
  // 1) First we pop which ever snapshot tree was deepest. Popping old contexts as we go.
  // 2) Then we find the nearest common ancestor from there. Popping old contexts as we go.
  // 3) Then we reapply new contexts on the way back up the stack.
  var prev = currentActiveSnapshot;
  var next = newSnapshot;

  if (prev !== next) {
    if (prev === null) {
      // $FlowFixMe: This has to be non-null since it's not equal to prev.
      pushAllNext(next);
    } else if (next === null) {
      popAllPrevious(prev);
    } else if (prev.depth === next.depth) {
      popToNearestCommonAncestor(prev, next);
    } else if (prev.depth > next.depth) {
      popPreviousToCommonLevel(prev, next);
    } else {
      popNextToCommonLevel(prev, next);
    }

    currentActiveSnapshot = next;
  }
}
function pushProvider(context, nextValue) {
  var prevValue;

  {
    prevValue = context._currentValue;
    context._currentValue = nextValue;

    {
      if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
      }

      context._currentRenderer = rendererSigil;
    }
  }

  var prevNode = currentActiveSnapshot;
  var newNode = {
    parent: prevNode,
    depth: prevNode === null ? 0 : prevNode.depth + 1,
    context: context,
    parentValue: prevValue,
    value: nextValue
  };
  currentActiveSnapshot = newNode;
  return newNode;
}
function popProvider() {
  var prevSnapshot = currentActiveSnapshot;

  if (prevSnapshot === null) {
    throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
  }

  {
    var value = prevSnapshot.parentValue;

    if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
      prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
    } else {
      prevSnapshot.context._currentValue = value;
    }
  }

  return currentActiveSnapshot = prevSnapshot.parent;
}
function getActiveContext() {
  return currentActiveSnapshot;
}
function readContext(context) {
  var value =  context._currentValue ;
  return value;
}

var currentRequest = null;
function prepareToUseHooksForRequest(request) {
  currentRequest = request;
}
function resetHooksForRequest() {
  currentRequest = null;
}

function readContext$1(context) {
  {
    if (context.$$typeof !== REACT_SERVER_CONTEXT_TYPE) {
      error('Only ServerContext is supported in Flight');
    }

    if (currentCache === null) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return readContext(context);
}

var Dispatcher = {
  useMemo: function (nextCreate) {
    return nextCreate();
  },
  useCallback: function (callback) {
    return callback;
  },
  useDebugValue: function () {},
  useDeferredValue: unsupportedHook,
  useTransition: unsupportedHook,
  getCacheForType: function (resourceType) {
    if (!currentCache) {
      throw new Error('Reading the cache is only supported while rendering.');
    }

    var entry = currentCache.get(resourceType);

    if (entry === undefined) {
      entry = resourceType(); // TODO: Warn if undefined?

      currentCache.set(resourceType, entry);
    }

    return entry;
  },
  readContext: readContext$1,
  useContext: readContext$1,
  useReducer: unsupportedHook,
  useRef: unsupportedHook,
  useState: unsupportedHook,
  useInsertionEffect: unsupportedHook,
  useLayoutEffect: unsupportedHook,
  useImperativeHandle: unsupportedHook,
  useEffect: unsupportedHook,
  useId: useId,
  useMutableSource: unsupportedHook,
  useSyncExternalStore: unsupportedHook,
  useCacheRefresh: function () {
    return unsupportedRefresh;
  },
  useMemoCache: function (size) {
    return new Array(size);
  }
};

function unsupportedHook() {
  throw new Error('This Hook is not supported in Server Components.');
}

function unsupportedRefresh() {
  if (!currentCache) {
    throw new Error('Refreshing the cache is not supported in Server Components.');
  }
}

var currentCache = null;
function setCurrentCache(cache) {
  currentCache = cache;
  return currentCache;
}
function getCurrentCache() {
  return currentCache;
}

function useId() {
  if (currentRequest === null) {
    throw new Error('useId can only be used while React is rendering');
  }

  var id = currentRequest.identifierCount++; // use 'S' for Flight components to distinguish from 'R' and 'r' in Fizz/Client

  return ':' + currentRequest.identifierPrefix + 'S' + id.toString(32) + ':';
}

var ContextRegistry = ReactSharedInternals.ContextRegistry;
function getOrCreateServerContext(globalName) {
  if (!ContextRegistry[globalName]) {
    ContextRegistry[globalName] = React.createServerContext(globalName, REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED);
  }

  return ContextRegistry[globalName];
}

var PENDING = 0;
var COMPLETED = 1;
var ABORTED = 3;
var ERRORED = 4;
var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;

function defaultErrorHandler(error) {
  console['error'](error); // Don't transform to our wrapper
}

var OPEN = 0;
var CLOSING = 1;
var CLOSED = 2;
function createRequest(model, bundlerConfig, onError, context, identifierPrefix) {
  var abortSet = new Set();
  var pingedTasks = [];
  var request = {
    status: OPEN,
    fatalError: null,
    destination: null,
    bundlerConfig: bundlerConfig,
    cache: new Map(),
    nextChunkId: 0,
    pendingChunks: 0,
    abortableTasks: abortSet,
    pingedTasks: pingedTasks,
    completedModuleChunks: [],
    completedJSONChunks: [],
    completedErrorChunks: [],
    writtenSymbols: new Map(),
    writtenModules: new Map(),
    writtenProviders: new Map(),
    identifierPrefix: identifierPrefix || '',
    identifierCount: 1,
    onError: onError === undefined ? defaultErrorHandler : onError,
    toJSON: function (key, value) {
      return resolveModelToJSON(request, this, key, value);
    }
  };
  request.pendingChunks++;
  var rootContext = createRootContext(context);
  var rootTask = createTask(request, model, rootContext, abortSet);
  pingedTasks.push(rootTask);
  return request;
}

function createRootContext(reqContext) {
  return importServerContexts(reqContext);
}

var POP = {};

function attemptResolveElement(type, key, ref, props) {
  if (ref !== null && ref !== undefined) {
    // When the ref moves to the regular props object this will implicitly
    // throw for functions. We could probably relax it to a DEV warning for other
    // cases.
    throw new Error('Refs cannot be used in server components, nor passed to client components.');
  }

  if (typeof type === 'function') {
    if (isModuleReference(type)) {
      // This is a reference to a client component.
      return [REACT_ELEMENT_TYPE, type, key, props];
    } // This is a server-side component.


    return type(props);
  } else if (typeof type === 'string') {
    // This is a host element. E.g. HTML.
    return [REACT_ELEMENT_TYPE, type, key, props];
  } else if (typeof type === 'symbol') {
    if (type === REACT_FRAGMENT_TYPE) {
      // For key-less fragments, we add a small optimization to avoid serializing
      // it as a wrapper.
      // TODO: If a key is specified, we should propagate its key to any children.
      // Same as if a server component has a key.
      return props.children;
    } // This might be a built-in React component. We'll let the client decide.
    // Any built-in works as long as its props are serializable.


    return [REACT_ELEMENT_TYPE, type, key, props];
  } else if (type != null && typeof type === 'object') {
    if (isModuleReference(type)) {
      // This is a reference to a client component.
      return [REACT_ELEMENT_TYPE, type, key, props];
    }

    switch (type.$$typeof) {
      case REACT_LAZY_TYPE:
        {
          var payload = type._payload;
          var init = type._init;
          var wrappedType = init(payload);
          return attemptResolveElement(wrappedType, key, ref, props);
        }

      case REACT_FORWARD_REF_TYPE:
        {
          var render = type.render;
          return render(props, undefined);
        }

      case REACT_MEMO_TYPE:
        {
          return attemptResolveElement(type.type, key, ref, props);
        }

      case REACT_PROVIDER_TYPE:
        {
          pushProvider(type._context, props.value);

          {
            var extraKeys = Object.keys(props).filter(function (value) {
              if (value === 'children' || value === 'value') {
                return false;
              }

              return true;
            });

            if (extraKeys.length !== 0) {
              error('ServerContext can only have a value prop and children. Found: %s', JSON.stringify(extraKeys));
            }
          }

          return [REACT_ELEMENT_TYPE, type, key, // Rely on __popProvider being serialized last to pop the provider.
          {
            value: props.value,
            children: props.children,
            __pop: POP
          }];
        }
    }
  }

  throw new Error("Unsupported server component type: " + describeValueForErrorMessage(type));
}

function pingTask(request, task) {
  var pingedTasks = request.pingedTasks;
  pingedTasks.push(task);

  if (pingedTasks.length === 1) {
    scheduleWork(function () {
      return performWork(request);
    });
  }
}

function createTask(request, model, context, abortSet) {
  var id = request.nextChunkId++;
  var task = {
    id: id,
    status: PENDING,
    model: model,
    context: context,
    ping: function () {
      return pingTask(request, task);
    }
  };
  abortSet.add(task);
  return task;
}

function serializeByValueID(id) {
  return '$' + id.toString(16);
}

function serializeByRefID(id) {
  return '@' + id.toString(16);
}

function serializeModuleReference(request, parent, key, moduleReference) {
  var moduleKey = getModuleKey(moduleReference);
  var writtenModules = request.writtenModules;
  var existingId = writtenModules.get(moduleKey);

  if (existingId !== undefined) {
    if (parent[0] === REACT_ELEMENT_TYPE && key === '1') {
      // If we're encoding the "type" of an element, we can refer
      // to that by a lazy reference instead of directly since React
      // knows how to deal with lazy values. This lets us suspend
      // on this component rather than its parent until the code has
      // loaded.
      return serializeByRefID(existingId);
    }

    return serializeByValueID(existingId);
  }

  try {
    var moduleMetaData = resolveModuleMetaData(request.bundlerConfig, moduleReference);
    request.pendingChunks++;
    var moduleId = request.nextChunkId++;
    emitModuleChunk(request, moduleId, moduleMetaData);
    writtenModules.set(moduleKey, moduleId);

    if (parent[0] === REACT_ELEMENT_TYPE && key === '1') {
      // If we're encoding the "type" of an element, we can refer
      // to that by a lazy reference instead of directly since React
      // knows how to deal with lazy values. This lets us suspend
      // on this component rather than its parent until the code has
      // loaded.
      return serializeByRefID(moduleId);
    }

    return serializeByValueID(moduleId);
  } catch (x) {
    request.pendingChunks++;
    var errorId = request.nextChunkId++;
    emitErrorChunk(request, errorId, x);
    return serializeByValueID(errorId);
  }
}

function escapeStringValue(value) {
  if (value[0] === '$' || value[0] === '@') {
    // We need to escape $ or @ prefixed strings since we use those to encode
    // references to IDs and as special symbol values.
    return '$' + value;
  } else {
    return value;
  }
}

function isObjectPrototype(object) {
  if (!object) {
    return false;
  }

  var ObjectPrototype = Object.prototype;

  if (object === ObjectPrototype) {
    return true;
  } // It might be an object from a different Realm which is
  // still just a plain simple object.


  if (Object.getPrototypeOf(object)) {
    return false;
  }

  var names = Object.getOwnPropertyNames(object);

  for (var i = 0; i < names.length; i++) {
    if (!(names[i] in ObjectPrototype)) {
      return false;
    }
  }

  return true;
}

function isSimpleObject(object) {
  if (!isObjectPrototype(Object.getPrototypeOf(object))) {
    return false;
  }

  var names = Object.getOwnPropertyNames(object);

  for (var i = 0; i < names.length; i++) {
    var descriptor = Object.getOwnPropertyDescriptor(object, names[i]);

    if (!descriptor) {
      return false;
    }

    if (!descriptor.enumerable) {
      if ((names[i] === 'key' || names[i] === 'ref') && typeof descriptor.get === 'function') {
        // React adds key and ref getters to props objects to issue warnings.
        // Those getters will not be transferred to the client, but that's ok,
        // so we'll special case them.
        continue;
      }

      return false;
    }
  }

  return true;
}

function objectName(object) {
  var name = Object.prototype.toString.call(object);
  return name.replace(/^\[object (.*)\]$/, function (m, p0) {
    return p0;
  });
}

function describeKeyForErrorMessage(key) {
  var encodedKey = JSON.stringify(key);
  return '"' + key + '"' === encodedKey ? key : encodedKey;
}

function describeValueForErrorMessage(value) {
  switch (typeof value) {
    case 'string':
      {
        return JSON.stringify(value.length <= 10 ? value : value.substr(0, 10) + '...');
      }

    case 'object':
      {
        if (isArray(value)) {
          return '[...]';
        }

        var name = objectName(value);

        if (name === 'Object') {
          return '{...}';
        }

        return name;
      }

    case 'function':
      return 'function';

    default:
      // eslint-disable-next-line react-internal/safe-string-coercion
      return String(value);
  }
}

function describeObjectForErrorMessage(objectOrArray, expandedName) {
  if (isArray(objectOrArray)) {
    var str = '[';
    var array = objectOrArray;

    for (var i = 0; i < array.length; i++) {
      if (i > 0) {
        str += ', ';
      }

      if (i > 6) {
        str += '...';
        break;
      }

      var _value = array[i];

      if ('' + i === expandedName && typeof _value === 'object' && _value !== null) {
        str += describeObjectForErrorMessage(_value);
      } else {
        str += describeValueForErrorMessage(_value);
      }
    }

    str += ']';
    return str;
  } else {
    var _str = '{';
    var object = objectOrArray;
    var names = Object.keys(object);

    for (var _i = 0; _i < names.length; _i++) {
      if (_i > 0) {
        _str += ', ';
      }

      if (_i > 6) {
        _str += '...';
        break;
      }

      var name = names[_i];
      _str += describeKeyForErrorMessage(name) + ': ';
      var _value2 = object[name];

      if (name === expandedName && typeof _value2 === 'object' && _value2 !== null) {
        _str += describeObjectForErrorMessage(_value2);
      } else {
        _str += describeValueForErrorMessage(_value2);
      }
    }

    _str += '}';
    return _str;
  }
}

var insideContextProps = null;
var isInsideContextValue = false;
function resolveModelToJSON(request, parent, key, value) {
  {
    // $FlowFixMe
    var originalValue = parent[key];

    if (typeof originalValue === 'object' && originalValue !== value) {
      error('Only plain objects can be passed to client components from server components. ' + 'Objects with toJSON methods are not supported. Convert it manually ' + 'to a simple value before passing it to props. ' + 'Remove %s from these props: %s', describeKeyForErrorMessage(key), describeObjectForErrorMessage(parent));
    }
  } // Special Symbols


  switch (value) {
    case REACT_ELEMENT_TYPE:
      return '$';
  }

  {
    if (parent[0] === REACT_ELEMENT_TYPE && parent[1] && parent[1].$$typeof === REACT_PROVIDER_TYPE && key === '3') {
      insideContextProps = value;
    } else if (insideContextProps === parent && key === 'value') {
      isInsideContextValue = true;
    } else if (insideContextProps === parent && key === 'children') {
      isInsideContextValue = false;
    }
  } // Resolve server components.


  while (typeof value === 'object' && value !== null && (value.$$typeof === REACT_ELEMENT_TYPE || value.$$typeof === REACT_LAZY_TYPE)) {
    {
      if (isInsideContextValue) {
        error('React elements are not allowed in ServerContext');
      }
    }

    try {
      switch (value.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            // TODO: Concatenate keys of parents onto children.
            var element = value; // Attempt to render the server component.

            value = attemptResolveElement(element.type, element.key, element.ref, element.props);
            break;
          }

        case REACT_LAZY_TYPE:
          {
            var payload = value._payload;
            var init = value._init;
            value = init(payload);
            break;
          }
      }
    } catch (x) {
      if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
        // Something suspended, we'll need to create a new task and resolve it later.
        request.pendingChunks++;
        var newTask = createTask(request, value, getActiveContext(), request.abortableTasks);
        var ping = newTask.ping;
        x.then(ping, ping);
        return serializeByRefID(newTask.id);
      } else {
        logRecoverableError(request, x); // Something errored. We'll still send everything we have up until this point.
        // We'll replace this element with a lazy reference that throws on the client
        // once it gets rendered.

        request.pendingChunks++;
        var errorId = request.nextChunkId++;
        emitErrorChunk(request, errorId, x);
        return serializeByRefID(errorId);
      }
    }
  }

  if (value === null) {
    return null;
  }

  if (typeof value === 'object') {
    if (isModuleReference(value)) {
      return serializeModuleReference(request, parent, key, value);
    } else if (value.$$typeof === REACT_PROVIDER_TYPE) {
      var providerKey = value._context._globalName;
      var writtenProviders = request.writtenProviders;
      var providerId = writtenProviders.get(key);

      if (providerId === undefined) {
        request.pendingChunks++;
        providerId = request.nextChunkId++;
        writtenProviders.set(providerKey, providerId);
        emitProviderChunk(request, providerId, providerKey);
      }

      return serializeByValueID(providerId);
    } else if (value === POP) {
      popProvider();

      {
        insideContextProps = null;
        isInsideContextValue = false;
      }

      return undefined;
    }

    {
      if (value !== null && !isArray(value)) {
        // Verify that this is a simple plain object.
        if (objectName(value) !== 'Object') {
          error('Only plain objects can be passed to client components from server components. ' + 'Built-ins like %s are not supported. ' + 'Remove %s from these props: %s', objectName(value), describeKeyForErrorMessage(key), describeObjectForErrorMessage(parent));
        } else if (!isSimpleObject(value)) {
          error('Only plain objects can be passed to client components from server components. ' + 'Classes or other objects with methods are not supported. ' + 'Remove %s from these props: %s', describeKeyForErrorMessage(key), describeObjectForErrorMessage(parent, key));
        } else if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(value);

          if (symbols.length > 0) {
            error('Only plain objects can be passed to client components from server components. ' + 'Objects with symbol properties like %s are not supported. ' + 'Remove %s from these props: %s', symbols[0].description, describeKeyForErrorMessage(key), describeObjectForErrorMessage(parent, key));
          }
        }
      }
    }

    return value;
  }

  if (typeof value === 'string') {
    return escapeStringValue(value);
  }

  if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'undefined') {
    return value;
  }

  if (typeof value === 'function') {
    if (isModuleReference(value)) {
      return serializeModuleReference(request, parent, key, value);
    }

    if (/^on[A-Z]/.test(key)) {
      throw new Error('Event handlers cannot be passed to client component props. ' + ("Remove " + describeKeyForErrorMessage(key) + " from these props if possible: " + describeObjectForErrorMessage(parent) + "\n") + 'If you need interactivity, consider converting part of this to a client component.');
    } else {
      throw new Error('Functions cannot be passed directly to client components ' + "because they're not serializable. " + ("Remove " + describeKeyForErrorMessage(key) + " (" + (value.displayName || value.name || 'function') + ") from this object, or avoid the entire object: " + describeObjectForErrorMessage(parent)));
    }
  }

  if (typeof value === 'symbol') {
    var writtenSymbols = request.writtenSymbols;
    var existingId = writtenSymbols.get(value);

    if (existingId !== undefined) {
      return serializeByValueID(existingId);
    }

    var name = value.description;

    if (Symbol.for(name) !== value) {
      throw new Error('Only global symbols received from Symbol.for(...) can be passed to client components. ' + ("The symbol Symbol.for(" + value.description + ") cannot be found among global symbols. ") + ("Remove " + describeKeyForErrorMessage(key) + " from this object, or avoid the entire object: " + describeObjectForErrorMessage(parent)));
    }

    request.pendingChunks++;
    var symbolId = request.nextChunkId++;
    emitSymbolChunk(request, symbolId, name);
    writtenSymbols.set(value, symbolId);
    return serializeByValueID(symbolId);
  } // $FlowFixMe: bigint isn't added to Flow yet.


  if (typeof value === 'bigint') {
    throw new Error("BigInt (" + value + ") is not yet supported in client component props. " + ("Remove " + describeKeyForErrorMessage(key) + " from this object or use a plain number instead: " + describeObjectForErrorMessage(parent)));
  }

  throw new Error("Type " + typeof value + " is not supported in client component props. " + ("Remove " + describeKeyForErrorMessage(key) + " from this object, or avoid the entire object: " + describeObjectForErrorMessage(parent)));
}

function logRecoverableError(request, error) {
  var onError = request.onError;
  onError(error);
}

function fatalError(request, error) {
  // This is called outside error handling code such as if an error happens in React internals.
  if (request.destination !== null) {
    request.status = CLOSED;
    closeWithError(request.destination, error);
  } else {
    request.status = CLOSING;
    request.fatalError = error;
  }
}

function emitErrorChunk(request, id, error) {
  // TODO: We should not leak error messages to the client in prod.
  // Give this an error code instead and log on the server.
  // We can serialize the error in DEV as a convenience.
  var message;
  var stack = '';

  try {
    if (error instanceof Error) {
      // eslint-disable-next-line react-internal/safe-string-coercion
      message = String(error.message); // eslint-disable-next-line react-internal/safe-string-coercion

      stack = String(error.stack);
    } else {
      message = 'Error: ' + error;
    }
  } catch (x) {
    message = 'An error occurred but serializing the error message failed.';
  }

  var processedChunk = processErrorChunk(request, id, message, stack);
  request.completedErrorChunks.push(processedChunk);
}

function emitModuleChunk(request, id, moduleMetaData) {
  var processedChunk = processModuleChunk(request, id, moduleMetaData);
  request.completedModuleChunks.push(processedChunk);
}

function emitSymbolChunk(request, id, name) {
  var processedChunk = processSymbolChunk(request, id, name);
  request.completedModuleChunks.push(processedChunk);
}

function emitProviderChunk(request, id, contextName) {
  var processedChunk = processProviderChunk(request, id, contextName);
  request.completedJSONChunks.push(processedChunk);
}

function retryTask(request, task) {
  if (task.status !== PENDING) {
    // We completed this by other means before we had a chance to retry it.
    return;
  }

  switchContext(task.context);

  try {
    var _value3 = task.model;

    while (typeof _value3 === 'object' && _value3 !== null && _value3.$$typeof === REACT_ELEMENT_TYPE) {
      // TODO: Concatenate keys of parents onto children.
      var element = _value3; // Attempt to render the server component.
      // Doing this here lets us reuse this same task if the next component
      // also suspends.

      task.model = _value3;
      _value3 = attemptResolveElement(element.type, element.key, element.ref, element.props);
    }

    var processedChunk = processModelChunk(request, task.id, _value3);
    request.completedJSONChunks.push(processedChunk);
    request.abortableTasks.delete(task);
    task.status = COMPLETED;
  } catch (x) {
    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
      // Something suspended again, let's pick it back up later.
      var ping = task.ping;
      x.then(ping, ping);
      return;
    } else {
      request.abortableTasks.delete(task);
      task.status = ERRORED;
      logRecoverableError(request, x); // This errored, we need to serialize this error to the

      emitErrorChunk(request, task.id, x);
    }
  }
}

function performWork(request) {
  var prevDispatcher = ReactCurrentDispatcher.current;
  var prevCache = getCurrentCache();
  ReactCurrentDispatcher.current = Dispatcher;
  setCurrentCache(request.cache);
  prepareToUseHooksForRequest(request);

  try {
    var pingedTasks = request.pingedTasks;
    request.pingedTasks = [];

    for (var i = 0; i < pingedTasks.length; i++) {
      var task = pingedTasks[i];
      retryTask(request, task);
    }

    if (request.destination !== null) {
      flushCompletedChunks(request, request.destination);
    }
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  } finally {
    ReactCurrentDispatcher.current = prevDispatcher;
    setCurrentCache(prevCache);
    resetHooksForRequest();
  }
}

function abortTask(task, request, errorId) {
  task.status = ABORTED; // Instead of emitting an error per task.id, we emit a model that only
  // has a single value referencing the error.

  var ref = serializeByValueID(errorId);
  var processedChunk = processReferenceChunk(request, task.id, ref);
  request.completedJSONChunks.push(processedChunk);
}

function flushCompletedChunks(request, destination) {
  beginWriting();

  try {
    // We emit module chunks first in the stream so that
    // they can be preloaded as early as possible.
    var moduleChunks = request.completedModuleChunks;
    var i = 0;

    for (; i < moduleChunks.length; i++) {
      request.pendingChunks--;
      var chunk = moduleChunks[i];
      var keepWriting = writeChunkAndReturn(destination, chunk);

      if (!keepWriting) {
        request.destination = null;
        i++;
        break;
      }
    }

    moduleChunks.splice(0, i); // Next comes model data.

    var jsonChunks = request.completedJSONChunks;
    i = 0;

    for (; i < jsonChunks.length; i++) {
      request.pendingChunks--;
      var _chunk = jsonChunks[i];

      var _keepWriting = writeChunkAndReturn(destination, _chunk);

      if (!_keepWriting) {
        request.destination = null;
        i++;
        break;
      }
    }

    jsonChunks.splice(0, i); // Finally, errors are sent. The idea is that it's ok to delay
    // any error messages and prioritize display of other parts of
    // the page.

    var errorChunks = request.completedErrorChunks;
    i = 0;

    for (; i < errorChunks.length; i++) {
      request.pendingChunks--;
      var _chunk2 = errorChunks[i];

      var _keepWriting2 = writeChunkAndReturn(destination, _chunk2);

      if (!_keepWriting2) {
        request.destination = null;
        i++;
        break;
      }
    }

    errorChunks.splice(0, i);
  } finally {
    completeWriting(destination);
  }

  flushBuffered(destination);

  if (request.pendingChunks === 0) {
    // We're done.
    close(destination);
  }
}

function startWork(request) {
  scheduleWork(function () {
    return performWork(request);
  });
}
function startFlowing(request, destination) {
  if (request.status === CLOSING) {
    request.status = CLOSED;
    closeWithError(destination, request.fatalError);
    return;
  }

  if (request.status === CLOSED) {
    return;
  }

  if (request.destination !== null) {
    // We're already flowing.
    return;
  }

  request.destination = destination;

  try {
    flushCompletedChunks(request, destination);
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  }
} // This is called to early terminate a request. It creates an error at all pending tasks.

function abort(request, reason) {
  try {
    var abortableTasks = request.abortableTasks;

    if (abortableTasks.size > 0) {
      // We have tasks to abort. We'll emit one error row and then emit a reference
      // to that row from every row that's still remaining.
      var _error = reason === undefined ? new Error('The render was aborted by the server without a reason.') : reason;

      logRecoverableError(request, _error);
      request.pendingChunks++;
      var errorId = request.nextChunkId++;
      emitErrorChunk(request, errorId, _error);
      abortableTasks.forEach(function (task) {
        return abortTask(task, request, errorId);
      });
      abortableTasks.clear();
    }

    if (request.destination !== null) {
      flushCompletedChunks(request, request.destination);
    }
  } catch (error) {
    logRecoverableError(request, error);
    fatalError(request, error);
  }
}

function importServerContexts(contexts) {
  if (contexts) {
    var prevContext = getActiveContext();
    switchContext(rootContextSnapshot);

    for (var i = 0; i < contexts.length; i++) {
      var _contexts$i = contexts[i],
          name = _contexts$i[0],
          _value4 = _contexts$i[1];
      var context = getOrCreateServerContext(name);
      pushProvider(context, _value4);
    }

    var importedContext = getActiveContext();
    switchContext(prevContext);
    return importedContext;
  }

  return rootContextSnapshot;
}

function createDrainHandler(destination, request) {
  return function () {
    return startFlowing(request, destination);
  };
}

function renderToPipeableStream(model, webpackMap, options) {
  var request = createRequest(model, webpackMap, options ? options.onError : undefined, options ? options.context : undefined, options ? options.identifierPrefix : undefined);
  var hasStartedFlowing = false;
  startWork(request);
  return {
    pipe: function (destination) {
      if (hasStartedFlowing) {
        throw new Error('React currently only supports piping to one writable stream.');
      }

      hasStartedFlowing = true;
      startFlowing(request, destination);
      destination.on('drain', createDrainHandler(destination, request));
      return destination;
    },
    abort: function (reason) {
      abort(request, reason);
    }
  };
}

exports.renderToPipeableStream = renderToPipeableStream;
  })();
}
