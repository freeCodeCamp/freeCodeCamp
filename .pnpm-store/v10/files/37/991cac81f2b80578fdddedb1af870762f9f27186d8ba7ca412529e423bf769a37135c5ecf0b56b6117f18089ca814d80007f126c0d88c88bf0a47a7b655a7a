// @ts-check

import { addError } from "../helpers/helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

const ignoreTypes = new Set([ "lineEnding", "listItemIndent", "linePrefix" ]);

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD028", "no-blanks-blockquote" ],
  "description": "Blank line inside blockquote",
  "tags": [ "blockquote", "whitespace" ],
  "parser": "micromark",
  "function": function MD028(params, onError) {
    for (const token of filterByTypesCached([ "blockQuote" ])) {
      const errorLineNumbers = [];
      const siblings = token.parent?.children || params.parsers.micromark.tokens;
      for (let i = siblings.indexOf(token) + 1; i < siblings.length; i++) {
        const sibling = siblings[i];
        const { startLine, type } = sibling;
        if (type === "lineEndingBlank") {
          // Possible blank between blockquotes
          errorLineNumbers.push(startLine);
        } else if (ignoreTypes.has(type)) {
          // Ignore invisible formatting
        } else if (type === "blockQuote") {
          // Blockquote followed by blockquote
          for (const lineNumber of errorLineNumbers) {
            addError(onError, lineNumber);
          }
          break;
        } else {
          // Blockquote not followed by blockquote
          break;
        }
      }
    }
  }
};
