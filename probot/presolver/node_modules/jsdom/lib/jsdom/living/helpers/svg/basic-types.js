"use strict";

// https://svgwg.org/svg2-draft/types.html#TermDetach
function detach(value) {
  if (typeof value === "string") {
    return;
  }

  throw new TypeError(`jsdom internal error: detaching object of wrong type ${value}`);
}
exports.detach = detach;

// https://svgwg.org/svg2-draft/types.html#TermAttach
// listObject corresponds to the parameter taken by the algorithm in the spec, but is currently unused because only
// DOMString type is supported by jsdom (and this function) right now.
// eslint-disable-next-line no-unused-vars
function attach(value, listObject) {
  if (typeof value === "string") {
    return;
  }

  throw new TypeError(`jsdom internal error: attaching object of wrong type ${value}`);
}
exports.attach = attach;

// https://svgwg.org/svg2-draft/types.html#TermReserialize for DOMString.
function reserializeSpaceSeparatedTokens(elements) {
  return elements.join(" ");
}
exports.reserializeSpaceSeparatedTokens = reserializeSpaceSeparatedTokens;

// Used for systemLanguage attribute, whose value is a set of comma-separated tokens:
// https://svgwg.org/svg2-draft/struct.html#SystemLanguageAttribute
// SVG 2 spec (https://svgwg.org/svg2-draft/types.html#TermReserialize) says any SVGStringList should reserialize the
// same way, as space-separated tokens, but doing so for systemLanguage is illogical and contradicts the Firefox
// behavior.
// I cannot find a description of reserialization of SVGStringList in the SVG 1.1 spec.
function reserializeCommaSeparatedTokens(elements) {
  return elements.join(", ");
}
exports.reserializeCommaSeparatedTokens = reserializeCommaSeparatedTokens;
