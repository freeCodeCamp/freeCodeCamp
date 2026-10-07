// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { getParentOfType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

const makeRange = (/** @type {number} */ start, /** @type {number} */ end) => [ start, end - start + 1 ];

/** @typedef {import("micromark-extension-gfm-table")} */

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD056", "table-column-count" ],
  "description": "Table column count",
  "tags": [ "table" ],
  "parser": "micromark",
  "function": function MD056(params, onError) {
    const rows = filterByTypesCached([ "tableDelimiterRow", "tableRow" ]);
    let expectedCount = 0;
    let currentTable = null;
    for (const row of rows) {
      const table = getParentOfType(row, [ "table" ]);
      if (currentTable !== table) {
        expectedCount = 0;
        currentTable = table;
      }
      const cells = row.children.filter((child) => [ "tableData", "tableDelimiter", "tableHeader" ].includes(child.type));
      const actualCount = cells.length;
      expectedCount ||= actualCount;
      let detail = undefined;
      let range = undefined;
      if (actualCount < expectedCount) {
        detail = "Too few cells, row will be missing data";
        range = [ row.endColumn - 1, 1 ];
      } else if (expectedCount < actualCount) {
        detail = "Too many cells, extra data will be missing";
        range = makeRange(cells[expectedCount].startColumn, row.endColumn - 1);
      }
      addErrorDetailIf(
        onError,
        row.endLine,
        expectedCount,
        actualCount,
        detail,
        undefined,
        range
      );
    }
  }
};
