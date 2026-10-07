// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

const listStyleExamples = {
  "one": "1/1/1",
  "ordered": "1/2/3",
  "zero": "0/0/0"
};

/**
 * Gets the column and text of an ordered list item prefix token.
 *
 * @param {import("markdownlint").MicromarkToken} listItemPrefix List item prefix token.
 * @returns {{column: number, value: number}} List item value column and text.
 */
function getOrderedListItemValue(listItemPrefix) {
  const listItemValue = getDescendantsByType(listItemPrefix, [ "listItemValue" ])[0];
  return {
    "column": listItemValue.startColumn,
    "value": Number(listItemValue.text)
  };
}

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD029", "ol-prefix" ],
  "description": "Ordered list item prefix",
  "tags": [ "ol" ],
  "parser": "micromark",
  "function": function MD029(params, onError) {
    const style = String(params.config.style);
    for (const listOrdered of filterByTypesCached([ "listOrdered" ])) {
      const listItemPrefixes = getDescendantsByType(listOrdered, [ "listItemPrefix" ]);
      let expected = 1;
      let incrementing = false;
      // Check for incrementing number pattern 1/2/3 or 0/1/2
      if (listItemPrefixes.length >= 2) {
        const first = getOrderedListItemValue(listItemPrefixes[0]);
        const second = getOrderedListItemValue(listItemPrefixes[1]);
        if ((second.value !== 1) || (first.value === 0)) {
          incrementing = true;
          if (first.value === 0) {
            expected = 0;
          }
        }
      }
      // Determine effective style
      const listStyle = ((style === "one") || (style === "ordered") || (style === "zero")) ?
        style :
        (incrementing ? "ordered" : "one");
      if (listStyle === "zero") {
        expected = 0;
      } else if (listStyle === "one") {
        expected = 1;
      }
      // Validate each list item marker
      for (const listItemPrefix of listItemPrefixes) {
        const orderedListItemValue = getOrderedListItemValue(listItemPrefix);
        const actual = orderedListItemValue.value;
        const fixInfo = {
          "editColumn": orderedListItemValue.column,
          "deleteCount": orderedListItemValue.value.toString().length,
          "insertText": expected.toString()
        };
        addErrorDetailIf(
          onError,
          listItemPrefix.startLine,
          expected,
          actual,
          "Style: " + listStyleExamples[listStyle],
          undefined,
          [ listItemPrefix.startColumn, listItemPrefix.endColumn - listItemPrefix.startColumn ],
          fixInfo
        );
        if (listStyle === "ordered") {
          expected++;
        }
      }
    }
  }
};
