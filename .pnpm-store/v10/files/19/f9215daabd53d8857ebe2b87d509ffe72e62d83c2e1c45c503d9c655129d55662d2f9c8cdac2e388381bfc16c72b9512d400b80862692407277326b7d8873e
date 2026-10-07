// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @typedef {import("markdownlint").MicromarkToken} MicromarkToken */
/** @typedef {import("micromark-extension-gfm-table")} */

const whitespaceTypes = new Set([ "linePrefix", "whitespace" ]);
const ignoreWhitespace = (/** @type {MicromarkToken[]} */ tokens) => tokens.filter(
  (token) => !whitespaceTypes.has(token.type)
);
const firstOrNothing = (/** @type {MicromarkToken[]} */ items) => items[0];
const lastOrNothing = (/** @type {MicromarkToken[]} */ items) => items[items.length - 1];
const makeRange = (/** @type {number} */ start, /** @type {number} */ end) => [ start, end - start + 1 ];

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD055", "table-pipe-style" ],
  "description": "Table pipe style",
  "tags": [ "table" ],
  "parser": "micromark",
  "function": function MD055(params, onError) {
    const style = String(params.config.style || "consistent");
    let expectedStyle = style;
    let expectedLeadingPipe =
      ((expectedStyle !== "no_leading_or_trailing") && (expectedStyle !== "trailing_only"));
    let expectedTrailingPipe =
      ((expectedStyle !== "no_leading_or_trailing") && (expectedStyle !== "leading_only"));
    const rows = filterByTypesCached([ "tableDelimiterRow", "tableRow" ]);
    for (const row of rows) {
      // The following uses of first/lastOrNothing lack fallback handling
      // because it seems not to be possible (i.e., 0% coverage)
      const firstCell = firstOrNothing(row.children);
      const leadingToken = firstOrNothing(ignoreWhitespace(firstCell.children));
      const actualLeadingPipe = (leadingToken.type === "tableCellDivider");
      const lastCell = lastOrNothing(row.children);
      const trailingToken = lastOrNothing(ignoreWhitespace(lastCell.children));
      const actualTrailingPipe = (trailingToken.type === "tableCellDivider");
      const actualStyle = actualLeadingPipe ?
        (actualTrailingPipe ? "leading_and_trailing" : "leading_only") :
        (actualTrailingPipe ? "trailing_only" : "no_leading_or_trailing");
      if (expectedStyle === "consistent") {
        expectedStyle = actualStyle;
        expectedLeadingPipe = actualLeadingPipe;
        expectedTrailingPipe = actualTrailingPipe;
      }
      if (actualLeadingPipe !== expectedLeadingPipe) {
        addErrorDetailIf(
          onError,
          firstCell.startLine,
          expectedStyle,
          actualStyle,
          `${expectedLeadingPipe ? "Missing" : "Unexpected"} leading pipe`,
          undefined,
          makeRange(row.startColumn, firstCell.startColumn)
        );
      }
      if (actualTrailingPipe !== expectedTrailingPipe) {
        addErrorDetailIf(
          onError,
          lastCell.endLine,
          expectedStyle,
          actualStyle,
          `${expectedTrailingPipe ? "Missing" : "Unexpected"} trailing pipe`,
          undefined,
          makeRange(lastCell.endColumn - 1, row.endColumn - 1)
        );
      }
    }
  }
};
