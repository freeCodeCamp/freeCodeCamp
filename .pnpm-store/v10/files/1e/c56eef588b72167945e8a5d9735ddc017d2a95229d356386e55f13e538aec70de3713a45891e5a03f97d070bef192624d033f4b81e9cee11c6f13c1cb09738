// @ts-check

import { addErrorContext, isBlankLine } from "../helpers/helpers.cjs";
import { filterByPredicate, getBlockQuotePrefixText, nonContentTokens } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @typedef {import("markdownlint").MicromarkToken} MicromarkToken */

const isList = (/** @type {MicromarkToken} */ token) => (
  (token.type === "listOrdered") || (token.type === "listUnordered")
);

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD032", "blanks-around-lists" ],
  "description": "Lists should be surrounded by blank lines",
  "tags": [ "bullet", "ul", "ol", "blank_lines" ],
  "parser": "micromark",
  "function": function MD032(params, onError) {
    const { lines, parsers } = params;
    const blockQuotePrefixes = filterByTypesCached([ "blockQuotePrefix", "linePrefix" ]);

    // For every top-level list...
    const topLevelLists = filterByPredicate(
      parsers.micromark.tokens,
      isList,
      (token) => (
        (isList(token) || (token.type === "htmlFlow")) ? [] : token.children
      )
    );
    for (const list of topLevelLists) {

      // Look for a blank line above the list
      const firstLineNumber = list.startLine;
      if (!isBlankLine(lines[firstLineNumber - 2])) {
        addErrorContext(
          onError,
          firstLineNumber,
          lines[firstLineNumber - 1].trim(),
          undefined,
          undefined,
          undefined,
          {
            "insertText": getBlockQuotePrefixText(blockQuotePrefixes, firstLineNumber)
          }
        );
      }

      // Find the "visual" end of the list
      const flattenedChildren = filterByPredicate(
        list.children,
        (token) => !nonContentTokens.has(token.type),
        (token) => nonContentTokens.has(token.type) ? [] : token.children
      );
      let endLine = list.endLine;
      if (flattenedChildren.length > 0) {
        endLine = flattenedChildren[flattenedChildren.length - 1].endLine;
      }

      // Look for a blank line below the list
      const lastLineNumber = endLine;
      if (!isBlankLine(lines[lastLineNumber])) {
        addErrorContext(
          onError,
          lastLineNumber,
          lines[lastLineNumber - 1].trim(),
          undefined,
          undefined,
          undefined,
          {
            "lineNumber": lastLineNumber + 1,
            "insertText": getBlockQuotePrefixText(blockQuotePrefixes, lastLineNumber)
          }
        );
      }
    }
  }
};
