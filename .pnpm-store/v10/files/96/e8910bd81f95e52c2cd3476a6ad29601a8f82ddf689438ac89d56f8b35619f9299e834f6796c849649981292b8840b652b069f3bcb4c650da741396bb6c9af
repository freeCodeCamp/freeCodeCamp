// @ts-check

import { addErrorContext } from "../helpers/helpers.cjs";
import { getHeadingStyle } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/**
 * Validate heading sequence and whitespace length at start or end.
 *
 * @param {import("markdownlint").RuleOnError} onError Error-reporting callback.
 * @param {import("markdownlint").MicromarkToken} heading ATX heading token.
 * @param {number} delta Direction to scan.
 * @returns {void}
 */
function validateHeadingSpaces(onError, heading, delta) {
  const { children, startLine, text } = heading;
  let index = (delta > 0) ? 0 : (children.length - 1);
  while (
    children[index] &&
    (children[index].type !== "atxHeadingSequence")
  ) {
    index += delta;
  }
  const headingSequence = children[index];
  const whitespace = children[index + delta];
  if (
    (headingSequence?.type === "atxHeadingSequence") &&
    (whitespace?.type === "whitespace") &&
    (whitespace.text.length > 1)
  ) {
    const column = whitespace.startColumn + 1;
    const length = whitespace.endColumn - column;
    addErrorContext(
      onError,
      startLine,
      text.trim(),
      delta > 0,
      delta < 0,
      [ column, length ],
      {
        "editColumn": column,
        "deleteCount": length
      }
    );
  }
}

/** @type {import("markdownlint").Rule[]} */
export default [
  {
    "names": [ "MD019", "no-multiple-space-atx" ],
    "description": "Multiple spaces after hash on atx style heading",
    "tags": [ "headings", "atx", "spaces" ],
    "parser": "micromark",
    "function": function MD019(params, onError) {
      const atxHeadings = filterByTypesCached([ "atxHeading" ])
        .filter((heading) => getHeadingStyle(heading) === "atx");
      for (const atxHeading of atxHeadings) {
        validateHeadingSpaces(onError, atxHeading, 1);
      }
    }
  },
  {
    "names": [ "MD021", "no-multiple-space-closed-atx" ],
    "description": "Multiple spaces inside hashes on closed atx style heading",
    "tags": [ "headings", "atx_closed", "spaces" ],
    "parser": "micromark",
    "function": function MD021(params, onError) {
      const atxClosedHeadings = filterByTypesCached([ "atxHeading" ])
        .filter((heading) => getHeadingStyle(heading) === "atx_closed");
      for (const atxClosedHeading of atxClosedHeadings) {
        validateHeadingSpaces(onError, atxClosedHeading, 1);
        validateHeadingSpaces(onError, atxClosedHeading, -1);
      }
    }
  }
];
