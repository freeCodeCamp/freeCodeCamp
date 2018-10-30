"use strict";
const cssom = require("cssom");
const cssstyle = require("cssstyle");

// http://dev.w3.org/csswg/cssom/#stylesheetlist
// TODO: implement using webidl2js
function StyleSheetList() {}

Object.setPrototypeOf(StyleSheetList.prototype, Array.prototype);

StyleSheetList.prototype.item = function item(i) {
  return Object.prototype.hasOwnProperty.call(this, i) ? this[i] : null;
};

exports.StyleSheetList = StyleSheetList;

exports.addToCore = core => {
  // What works now:
  // - Accessing the rules defined in individual stylesheets
  // - Modifications to style content attribute are reflected in style property
  // - Modifications to style property are reflected in style content attribute
  // TODO
  // - Modifications to style element's textContent are reflected in sheet property.
  // - Modifications to style element's sheet property are reflected in textContent.
  // - Modifications to link.href property are reflected in sheet property.
  // - Less-used features of link: disabled
  // - Less-used features of style: disabled, scoped, title
  // - CSSOM-View
  //   - getComputedStyle(): requires default stylesheet, cascading, inheritance,
  //     filtering by @media (screen? print?), layout for widths/heights
  // - Load events are not in the specs, but apparently some browsers
  //   implement something. Should onload only fire after all @imports have been
  //   loaded, or only the primary sheet?

  core.StyleSheet = cssom.StyleSheet;
  core.MediaList = cssom.MediaList;
  core.CSSStyleSheet = cssom.CSSStyleSheet;
  core.CSSRule = cssom.CSSRule;
  core.CSSStyleRule = cssom.CSSStyleRule;
  core.CSSMediaRule = cssom.CSSMediaRule;
  core.CSSImportRule = cssom.CSSImportRule;
  core.CSSStyleDeclaration = cssstyle.CSSStyleDeclaration;
  core.StyleSheetList = StyleSheetList;

  // Relavant specs
  // http://www.w3.org/TR/DOM-Level-2-Style (2000)
  // http://www.w3.org/TR/cssom-view/ (2008)
  // http://dev.w3.org/csswg/cssom/ (2010) Meant to replace DOM Level 2 Style
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/ HTML5, of course
  // http://dev.w3.org/csswg/css-style-attr/  not sure what's new here

  // Objects that aren't in cssom library but should be:
  //   CSSRuleList  (cssom just uses array)
  //   CSSFontFaceRule
  //   CSSPageRule

  // These rules don't really make sense to implement, so CSSOM draft makes them
  // obsolete.
  //   CSSCharsetRule
  //   CSSUnknownRule

  // These objects are considered obsolete by CSSOM draft, although modern
  // browsers implement them.
  //   CSSValue
  //   CSSPrimitiveValue
  //   CSSValueList
  //   RGBColor
  //   Rect
  //   Counter
};
