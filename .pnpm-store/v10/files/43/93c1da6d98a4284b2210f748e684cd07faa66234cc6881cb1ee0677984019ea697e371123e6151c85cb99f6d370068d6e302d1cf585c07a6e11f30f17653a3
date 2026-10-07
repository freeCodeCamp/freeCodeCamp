"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;
exports.normalizeReplacements = normalizeReplacements;
exports.validate = validate;
const _excluded = ["placeholderWhitelist", "placeholderPattern", "preserveComments", "syntacticPlaceholders"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function merge(a, b) {
  const {
    placeholderWhitelist = a.placeholderWhitelist,
    placeholderPattern = a.placeholderPattern,
    preserveComments = a.preserveComments,
    syntacticPlaceholders = a.syntacticPlaceholders
  } = b;
  return {
    parser: Object.assign({}, a.parser, b.parser),
    placeholderWhitelist,
    placeholderPattern,
    preserveComments,
    syntacticPlaceholders
  };
}
function validate(opts) {
  if (opts != null && typeof opts !== "object") {
    throw new Error("Unknown template options.");
  }
  const _ref = opts || {},
    {
      placeholderWhitelist,
      placeholderPattern,
      preserveComments,
      syntacticPlaceholders
    } = _ref,
    parser = _objectWithoutPropertiesLoose(_ref, _excluded);
  if (placeholderWhitelist != null && !(placeholderWhitelist instanceof Set)) {
    throw new Error("'.placeholderWhitelist' must be a Set, null, or undefined");
  }
  if (placeholderPattern != null && !(placeholderPattern instanceof RegExp) && placeholderPattern !== false) {
    throw new Error("'.placeholderPattern' must be a RegExp, false, null, or undefined");
  }
  if (preserveComments != null && typeof preserveComments !== "boolean") {
    throw new Error("'.preserveComments' must be a boolean, null, or undefined");
  }
  if (syntacticPlaceholders != null && typeof syntacticPlaceholders !== "boolean") {
    throw new Error("'.syntacticPlaceholders' must be a boolean, null, or undefined");
  }
  if (syntacticPlaceholders === true && (placeholderWhitelist != null || placeholderPattern != null)) {
    throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible" + " with '.syntacticPlaceholders: true'");
  }
  return {
    parser,
    placeholderWhitelist: placeholderWhitelist || undefined,
    placeholderPattern: placeholderPattern == null ? undefined : placeholderPattern,
    preserveComments: preserveComments == null ? undefined : preserveComments,
    syntacticPlaceholders: syntacticPlaceholders == null ? undefined : syntacticPlaceholders
  };
}
function normalizeReplacements(replacements) {
  if (Array.isArray(replacements)) {
    return replacements.reduce((acc, replacement, i) => {
      acc["$" + i] = replacement;
      return acc;
    }, {});
  } else if (typeof replacements === "object" || replacements == null) {
    return replacements || undefined;
  }
  throw new Error("Template replacements must be an array, object, null, or undefined");
}

//# sourceMappingURL=options.js.map
