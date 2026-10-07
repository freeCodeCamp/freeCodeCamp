"use strict";

const { splitOnASCIIWhitespace, splitOnCommas } = require("../helpers/strings");
const { reserializeCommaSeparatedTokens, reserializeSpaceSeparatedTokens } = require("../helpers/svg/basic-types");
const SVGStringList = require("../generated/SVGStringList");

class SVGTestsImpl {
  get requiredExtensions() {
    return SVGStringList.createImpl(this._globalObject, [], {
      element: this,
      attribute: "requiredExtensions"
    });
  }

  get systemLanguage() {
    return SVGStringList.createImpl(this._globalObject, [], {
      element: this,
      attribute: "systemLanguage"
    });
  }
}

SVGTestsImpl.attributeRegistry = new Map([
  // https://svgwg.org/svg2-draft/struct.html#RequiredExtensionsAttribute
  [
    "requiredExtensions", {
      getValue: splitOnASCIIWhitespace,
      serialize: reserializeSpaceSeparatedTokens,
      initialValue: undefined
    }
  ],
  // https://svgwg.org/svg2-draft/struct.html#SystemLanguageAttribute
  [
    "systemLanguage", {
      getValue: splitOnCommas,
      serialize: reserializeCommaSeparatedTokens,
      initialValue: undefined
    }
  ]
]);

exports.implementation = SVGTestsImpl;
