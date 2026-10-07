"use strict";
const { SVG_NS } = require("../namespaces");

// https://svgwg.org/svg2-draft/render.html#TermNeverRenderedElement
const neverRenderedElements = new Set([
  "clipPath",
  "defs",
  "desc",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "pattern",
  "radialGradient",
  "script",
  "style",
  "title",
  "symbol"
]);

// https://svgwg.org/svg2-draft/render.html#Rendered-vs-NonRendered
exports.isRenderedElement = elImpl => {
  if (neverRenderedElements.has(elImpl._localName)) {
    return false;
  }

  // This does not check for elements excluded because of conditional processing attributes or ‘switch’ structures,
  // because conditional processing is not implemented.
  // https://svgwg.org/svg2-draft/struct.html#ConditionalProcessing

  // This does not check for computed style of display being none, since that is not yet implemented for HTML
  // focusability either (and there are no tests yet).

  if (!elImpl.isConnected) {
    return false;
  }

  // The spec is unclear about how to deal with non-SVG parents, so we only perform this check for SVG-namespace
  // parents.
  if (elImpl.parentElement && elImpl.parentElement._namespaceURI === SVG_NS &&
                              !exports.isRenderedElement(elImpl.parentNode)) {
    return false;
  }

  return true;
};
