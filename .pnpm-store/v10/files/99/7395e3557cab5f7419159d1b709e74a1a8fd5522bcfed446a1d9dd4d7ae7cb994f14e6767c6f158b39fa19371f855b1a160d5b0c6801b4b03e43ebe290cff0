"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fuzzyMatches = fuzzyMatches;
exports.getDefaultNormalizer = getDefaultNormalizer;
exports.makeNormalizer = makeNormalizer;
exports.matches = matches;
function assertNotNullOrUndefined(matcher) {
  if (matcher === null || matcher === undefined) {
    throw new Error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
    `It looks like ${matcher} was passed instead of a matcher. Did you do something like getByText(${matcher})?`);
  }
}
function fuzzyMatches(textToMatch, node, matcher, normalizer) {
  if (typeof textToMatch !== 'string') {
    return false;
  }
  assertNotNullOrUndefined(matcher);
  const normalizedText = normalizer(textToMatch);
  if (typeof matcher === 'string' || typeof matcher === 'number') {
    return normalizedText.toLowerCase().includes(matcher.toString().toLowerCase());
  } else if (typeof matcher === 'function') {
    return matcher(normalizedText, node);
  } else {
    return matchRegExp(matcher, normalizedText);
  }
}
function matches(textToMatch, node, matcher, normalizer) {
  if (typeof textToMatch !== 'string') {
    return false;
  }
  assertNotNullOrUndefined(matcher);
  const normalizedText = normalizer(textToMatch);
  if (matcher instanceof Function) {
    return matcher(normalizedText, node);
  } else if (matcher instanceof RegExp) {
    return matchRegExp(matcher, normalizedText);
  } else {
    return normalizedText === String(matcher);
  }
}
function getDefaultNormalizer({
  trim = true,
  collapseWhitespace = true
} = {}) {
  return text => {
    let normalizedText = text;
    normalizedText = trim ? normalizedText.trim() : normalizedText;
    normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, ' ') : normalizedText;
    return normalizedText;
  };
}

/**
 * Constructs a normalizer to pass to functions in matches.js
 * @param {boolean|undefined} trim The user-specified value for `trim`, without
 * any defaulting having been applied
 * @param {boolean|undefined} collapseWhitespace The user-specified value for
 * `collapseWhitespace`, without any defaulting having been applied
 * @param {Function|undefined} normalizer The user-specified normalizer
 * @returns {Function} A normalizer
 */

function makeNormalizer({
  trim,
  collapseWhitespace,
  normalizer
}) {
  if (!normalizer) {
    // No custom normalizer specified. Just use default.
    return getDefaultNormalizer({
      trim,
      collapseWhitespace
    });
  }
  if (typeof trim !== 'undefined' || typeof collapseWhitespace !== 'undefined') {
    // They've also specified a value for trim or collapseWhitespace
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. ' + 'If you want to use the default trim and collapseWhitespace logic in your normalizer, ' + 'use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  }
  return normalizer;
}
function matchRegExp(matcher, text) {
  const match = matcher.test(text);
  if (matcher.global && matcher.lastIndex !== 0) {
    console.warn(`To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.`);
    matcher.lastIndex = 0;
  }
  return match;
}