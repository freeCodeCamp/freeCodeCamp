// @ts-check

import { getReferenceLinkImageData as helpersGetReferenceLinkImageData } from "../helpers/helpers.cjs";
import { filterByTypes } from "../helpers/micromark-helpers.cjs";

/** @typedef {import("markdownlint").RuleParams} RuleParams */
/** @typedef {import("markdownlint").MicromarkToken} MicromarkToken */
/** @typedef {import("markdownlint").MicromarkTokenType} MicromarkTokenType */
/** @typedef {import("../helpers/helpers.cjs").GetReferenceLinkImageDataResult} GetReferenceLinkImageDataResult */

/** @type {Map<string, object>} */
const map = new Map();
/** @type {RuleParams | undefined} */
let params = undefined;

/**
 * Initializes (resets) the cache.
 *
 * @param {RuleParams} [p] Rule parameters object.
 * @returns {void}
 */
export function initialize(p) {
  map.clear();
  params = p;
}

/**
 * Gets the cached Micromark token array (for testing).
 *
 * @returns {MicromarkToken[]} Micromark tokens.
 */
export function micromarkTokens() {
  return params?.parsers.micromark.tokens || [];
}

/**
 * Gets a cached object value - computes it and caches it.
 *
 * @param {string} name Cache object name.
 * @param {() => Object} getValue Getter for object value.
 * @returns {Object} Object value.
 */
function getCached(name, getValue) {
  if (map.has(name)) {
    // @ts-ignore
    return map.get(name);
  }
  const value = getValue();
  map.set(name, value);
  return value;
}

/**
 * Filters a list of Micromark tokens by type and caches the result.
 *
 * @param {MicromarkTokenType[]} types Types to allow.
 * @param {boolean} [htmlFlow] Whether to include htmlFlow content.
 * @returns {MicromarkToken[]} Filtered tokens.
 */
export function filterByTypesCached(types, htmlFlow) {
  // @ts-ignore
  return getCached(
    // eslint-disable-next-line prefer-rest-params
    JSON.stringify(arguments),
    () => filterByTypes(micromarkTokens(), types, htmlFlow)
  );
}

/**
 * Gets a reference link and image data object.
 *
 * @returns {GetReferenceLinkImageDataResult} Reference link and image data object.
 */
export function getReferenceLinkImageData() {
  // @ts-ignore
  return getCached(
    getReferenceLinkImageData.name,
    () => helpersGetReferenceLinkImageData(micromarkTokens())
  );
}
