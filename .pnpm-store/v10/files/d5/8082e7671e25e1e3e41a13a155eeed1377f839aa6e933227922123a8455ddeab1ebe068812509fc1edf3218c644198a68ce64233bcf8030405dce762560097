"use strict";
const cssom = require("rrweb-cssom");
const { CSSStyleDeclaration } = require("cssstyle");
const defaultStyleSheet = require("../../browser/default-stylesheet");
const { getSpecifiedColor, getComputedOrUsedColor } = require("./colors");
const { matchesDontThrow } = require("./selectors");

const { forEach, indexOf } = Array.prototype;

let parsedDefaultStyleSheet;

// Properties for which getResolvedValue is implemented. This is less than
// every supported property.
// https://drafts.csswg.org/indexes/#properties
exports.propertiesWithResolvedValueImplemented = {
  "__proto__": null,

  // https://drafts.csswg.org/css2/visufx.html#visibility
  "visibility": {
    inherited: true,
    initial: "visible",
    computedValue: "as-specified"
  },
  // https://svgwg.org/svg2-draft/interact.html#PointerEventsProperty
  "pointer-events": {
    inherited: true,
    initial: "auto",
    computedValue: "as-specified"
  },
  // https://drafts.csswg.org/css-backgrounds-3/#propdef-background-color
  "background-color": {
    inherited: false,
    initial: "transparent",
    computedValue: "computed-color"
  },
  // https://drafts.csswg.org/css-logical-1/#propdef-border-block-end-color
  "border-block-start-color": {
    inherited: false,
    initial: "currentcolor",
    computedValue: "computed-color"
  },
  "border-block-end-color": {
    inherited: false,
    initial: "currentcolor",
    computedValue: "computed-color"
  },
  "border-inline-start-color": {
    inherited: false,
    initial: "currentcolor",
    computedValue: "computed-color"
  },
  "border-inline-end-color": {
    inherited: false,
    initial: "currentcolor",
    computedValue: "computed-color"
  },
  // https://drafts.csswg.org/css-backgrounds-3/#propdef-border-bottom-color
  "border-top-color": {
    inherited: false,
    initial: "currentcolor",
    computedValue: "computed-color"
  },
  "border-right-color": {
    inherited: false,
    initial: "currentcolor",
    computedValue: "computed-color"
  },
  "border-bottom-color": {
    inherited: false,
    initial: "currentcolor",
    computedValue: "computed-color"
  },
  "border-left-color": {
    inherited: false,
    initial: "currentcolor",
    computedValue: "computed-color"
  },
  // https://drafts.csswg.org/css-ui-4/#propdef-caret-color
  "caret-color": {
    inherited: true,
    initial: "auto",
    computedValue: "computed-color"
  },
  // https://drafts.csswg.org/css-color-4/#propdef-color
  "color": {
    inherited: true,
    initial: "CanvasText",
    computedValue: "computed-color"
  },
  // https://drafts.csswg.org/css-ui-4/#propdef-outline-color
  "outline-color": {
    inherited: false,
    initial: "invert",
    computedValue: "computed-color"
  }
};

function forEachMatchingSheetRuleOfElement(elementImpl, handleRule) {
  function handleSheet(sheet) {
    forEach.call(sheet.cssRules, rule => {
      if (rule.media) {
        if (indexOf.call(rule.media, "screen") !== -1) {
          forEach.call(rule.cssRules, innerRule => {
            if (matches(innerRule, elementImpl)) {
              handleRule(innerRule);
            }
          });
        }
      } else if (matches(rule, elementImpl)) {
        handleRule(rule);
      }
    });
  }

  if (!parsedDefaultStyleSheet) {
    parsedDefaultStyleSheet = cssom.parse(defaultStyleSheet);
  }

  handleSheet(parsedDefaultStyleSheet);
  forEach.call(elementImpl._ownerDocument.styleSheets._list, handleSheet);
}

exports.invalidateStyleCache = elementImpl => {
  if (elementImpl._attached) {
    elementImpl._ownerDocument._styleCache = null;
  }
};

exports.getDeclarationForElement = elementImpl => {
  let styleCache = elementImpl._ownerDocument._styleCache;
  if (!styleCache) {
    styleCache = elementImpl._ownerDocument._styleCache = new WeakMap();
  }

  const cachedDeclaration = styleCache.get(elementImpl);
  if (cachedDeclaration) {
    return cachedDeclaration;
  }

  const declaration = new CSSStyleDeclaration();

  function handleProperty(style, property) {
    const value = style.getPropertyValue(property);
    // https://drafts.csswg.org/css-cascade-4/#valdef-all-unset
    if (value === "unset") {
      declaration.removeProperty(property);
    } else {
      declaration.setProperty(
        property,
        value,
        style.getPropertyPriority(property)
      );
    }
  }

  forEachMatchingSheetRuleOfElement(elementImpl, rule => {
    forEach.call(rule.style, property => {
      handleProperty(rule.style, property);
    });
  });

  forEach.call(elementImpl.style, property => {
    handleProperty(elementImpl.style, property);
  });

  styleCache.set(elementImpl, declaration);

  return declaration;
};

function matches(rule, element) {
  return matchesDontThrow(element, rule.selectorText);
}

// Naive implementation of https://drafts.csswg.org/css-cascade-4/#cascading
// based on the previous jsdom implementation of getComputedStyle.
// Does not implement https://drafts.csswg.org/css-cascade-4/#cascade-specificity,
// or rather specificity is only implemented by the order in which the matching
// rules appear. The last rule is the most specific while the first rule is
// the least specific.
function getCascadedPropertyValue(element, property) {
  return exports.getDeclarationForElement(element).getPropertyValue(property);
}

// https://drafts.csswg.org/css-cascade-4/#specified-value
function getSpecifiedValue(element, property) {
  const { initial, inherited, computedValue } = exports.propertiesWithResolvedValueImplemented[property];
  const cascade = getCascadedPropertyValue(element, property);

  if (cascade !== "") {
    if (computedValue === "computed-color") {
      return getSpecifiedColor(cascade);
    }

    return cascade;
  }

  // Defaulting
  if (inherited && element.parentElement !== null) {
    return getComputedValue(element.parentElement, property);
  }

  // root element without parent element or inherited property
  return initial;
}

// https://drafts.csswg.org/css-cascade-4/#computed-value
function getComputedValue(element, property) {
  const { computedValue, initial } = exports.propertiesWithResolvedValueImplemented[property];
  if (computedValue === "as-specified") {
    return getSpecifiedValue(element, property);
  } else if (computedValue === "computed-color") {
    const specifiedValue = getSpecifiedValue(element, property);

    // https://drafts.csswg.org/css-color-4/#resolving-other-colors
    if (specifiedValue === "currentcolor") {
      if (property === "color") {
        if (element.parentElement !== null) {
          return getComputedValue(element.parentElement, "color");
        }
        return initial;
      }

      return getComputedValue(element, "color");
    }

    return getComputedOrUsedColor(specifiedValue);
  }

  throw new TypeError(`Internal error: unrecognized computed value instruction '${computedValue}'`);
}

// https://drafts.csswg.org/cssom/#resolved-value
// Only implements the properties that are defined in propertiesWithResolvedValueImplemented.
exports.getResolvedValue = (element, property) => {
  // We can always use the computed value with the current set of propertiesWithResolvedValueImplemented:
  // * Color properties end up with the used value, but we don't implement any actual differences between used and
  //   computed that https://drafts.csswg.org/css-cascade-5/#used-value gestures at.
  // * The other properties fall back to the "any other property: The resolved value is the computed value." case.
  return getComputedValue(element, property);
};

exports.SHADOW_DOM_PSEUDO_REGEXP = /^::(?:part|slotted)\(/i;
