// @ts-check

import { addErrorContext, isBlankLine } from "../helpers/helpers.cjs";
import { getBlockQuotePrefixText } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @typedef {import("micromark-extension-gfm-table")} */

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD058", "blanks-around-tables" ],
  "description": "Tables should be surrounded by blank lines",
  "tags": [ "table" ],
  "parser": "micromark",
  "function": function MD058(params, onError) {
    const { lines } = params;
    const blockQuotePrefixes = filterByTypesCached([ "blockQuotePrefix", "linePrefix" ]);

    // For every table...
    const tables = filterByTypesCached([ "table" ]);
    for (const table of tables) {

      // Look for a blank line above the table
      const firstLineNumber = table.startLine;
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

      // Look for a blank line below the table
      const lastLineNumber = table.endLine;
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
