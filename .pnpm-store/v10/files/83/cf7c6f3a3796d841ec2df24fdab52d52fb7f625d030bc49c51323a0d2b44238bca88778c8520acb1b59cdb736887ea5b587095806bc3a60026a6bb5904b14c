// @ts-check

import { addErrorContext } from "../helpers/helpers.cjs";
import { getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @typedef {import("markdownlint").MicromarkTokenType} MicromarkTokenType */
/** @type {Set<MicromarkTokenType>} */
const allowedChildrenTypes = new Set([
  "codeText",
  "htmlText"
]);
const defaultProhibitedTexts = [
  "click here",
  "here",
  "link",
  "more"
];

/**
 * Normalizes a string by removing extra whitespaces and punctuation.
 *
 * @param {string} str String to normalize.
 * @returns {string} Normalized string.
 */
function normalize(str) {
  return str
    .replace(/[\W_]+/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD059", "descriptive-link-text" ],
  "description": "Link text should be descriptive",
  "tags": [ "accessibility", "links" ],
  "parser": "micromark",
  "function": function MD059(params, onError) {
    const prohibitedTexts = new Set(
      (params.config.prohibited_texts || defaultProhibitedTexts).map(normalize)
    );
    if (prohibitedTexts.size > 0) {
      const links = filterByTypesCached([ "link" ]);
      for (const link of links) {
        const labelTexts = getDescendantsByType(link, [ "label", "labelText" ]);
        for (const labelText of labelTexts) {
          const { children, endColumn, endLine, parent, startColumn, startLine, text } = labelText;
          if (
            !children.some((child) => allowedChildrenTypes.has(child.type)) &&
            prohibitedTexts.has(normalize(text))
          ) {
            const range = (startLine === endLine) ?
              [ startColumn, endColumn - startColumn ] :
              undefined;
            addErrorContext(
              onError,
              startLine,
              // @ts-ignore
              parent.text,
              undefined,
              undefined,
              range
            );
          }
        }
      }
    }
  }
};
