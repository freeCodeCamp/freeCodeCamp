// @ts-check

import { addError } from "../helpers/helpers.cjs";
import { filterByPredicate, inHtmlFlow } from "../helpers/micromark-helpers.cjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD037", "no-space-in-emphasis" ],
  "description": "Spaces inside emphasis markers",
  "tags": [ "whitespace", "emphasis" ],
  "parser": "micromark",
  "function": function MD037(params, onError) {

    // Initialize variables
    const { lines, parsers } = params;
    const emphasisTokensByMarker = new Map();
    for (const marker of [ "_", "__", "___", "*", "**", "***" ]) {
      emphasisTokensByMarker.set(marker, []);
    }
    const tokens = filterByPredicate(
      parsers.micromark.tokens,
      (token) => token.children.some((child) => child.type === "data")
    );
    for (const token of tokens) {

      // Build lists of bare tokens for each emphasis marker type
      for (const emphasisTokens of emphasisTokensByMarker.values()) {
        emphasisTokens.length = 0;
      }
      for (const child of token.children) {
        const { text, type } = child;
        if ((type === "data") && (text.length <= 3)) {
          const emphasisTokens = emphasisTokensByMarker.get(text);
          if (emphasisTokens && !inHtmlFlow(child)) {
            emphasisTokens.push(child);
          }
        }
      }

      // Process bare tokens for each emphasis marker type
      for (const entry of emphasisTokensByMarker.entries()) {
        const [ marker, emphasisTokens ] = entry;
        for (let i = 0; i + 1 < emphasisTokens.length; i += 2) {

          // Process start token of start/end pair
          const startToken = emphasisTokens[i];
          const startLine = lines[startToken.startLine - 1];
          const startSlice = startLine.slice(startToken.endColumn - 1);
          const startMatch = startSlice.match(/^\s+\S/);
          if (startMatch) {
            const [ startSpaceCharacter ] = startMatch;
            const startContext = `${marker}${startSpaceCharacter}`;
            const column = startToken.endColumn;
            const count = startSpaceCharacter.length - 1;
            addError(
              onError,
              startToken.startLine,
              undefined,
              startContext,
              [ column, count ],
              {
                "editColumn": column,
                "deleteCount": count
              }
            );
          }

          // Process end token of start/end pair
          const endToken = emphasisTokens[i + 1];
          const endLine = lines[endToken.startLine - 1];
          const endSlice = endLine.slice(0, endToken.startColumn - 1);
          const endMatch = endSlice.match(/\S\s+$/);
          if (endMatch) {
            const [ endSpaceCharacter ] = endMatch;
            const endContext = `${endSpaceCharacter}${marker}`;
            const column = endToken.startColumn - (endSpaceCharacter.length - 1);
            const count = endSpaceCharacter.length - 1;
            addError(
              onError,
              endToken.startLine,
              undefined,
              endContext,
              [ column, count ],
              {
                "editColumn": column,
                "deleteCount": count
              }
            );
          }
        }
      }
    }
  }
};
