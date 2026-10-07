// @ts-check

import { addError, addErrorDetailIf } from "../helpers/helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD005", "list-indent" ],
  "description": "Inconsistent indentation for list items at the same level",
  "tags": [ "bullet", "ul", "indentation" ],
  "parser": "micromark",
  "function": function MD005(params, onError) {
    for (const list of filterByTypesCached([ "listOrdered", "listUnordered" ])) {
      const expectedIndent = list.startColumn - 1;
      let expectedEnd = 0;
      let endMatching = false;
      const listItemPrefixes =
        list.children.filter((token) => (token.type === "listItemPrefix"));
      for (const listItemPrefix of listItemPrefixes) {
        const lineNumber = listItemPrefix.startLine;
        const actualIndent = listItemPrefix.startColumn - 1;
        const range = [ 1, listItemPrefix.endColumn - 1 ];
        if (list.type === "listUnordered") {
          addErrorDetailIf(
            onError,
            lineNumber,
            expectedIndent,
            actualIndent,
            undefined,
            undefined,
            range
            // No fixInfo; MD007 handles this scenario better
          );
        } else {
          const markerLength = listItemPrefix.text.trim().length;
          const actualEnd = listItemPrefix.startColumn + markerLength - 1;
          expectedEnd = expectedEnd || actualEnd;
          if ((expectedIndent !== actualIndent) || endMatching) {
            if (expectedEnd === actualEnd) {
              endMatching = true;
            } else {
              const detail = endMatching ?
                `Expected: (${expectedEnd}); Actual: (${actualEnd})` :
                `Expected: ${expectedIndent}; Actual: ${actualIndent}`;
              const expected = endMatching ?
                expectedEnd - markerLength :
                expectedIndent;
              const actual = endMatching ?
                actualEnd - markerLength :
                actualIndent;
              addError(
                onError,
                lineNumber,
                detail,
                undefined,
                range,
                {
                  "editColumn": Math.min(actual, expected) + 1,
                  "deleteCount": Math.max(actual - expected, 0),
                  "insertText": "".padEnd(Math.max(expected - actual, 0))
                }
              );
            }
          }
        }
      }
    }
  }
};
