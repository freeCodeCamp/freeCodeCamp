// @ts-check

import { addErrorContext } from "../helpers/helpers.cjs";
import { getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD038", "no-space-in-code" ],
  "description": "Spaces inside code span elements",
  "tags": [ "whitespace", "code" ],
  "parser": "micromark",
  "function": function MD038(params, onError) {
    const codeTexts = filterByTypesCached([ "codeText" ]);
    for (const codeText of codeTexts) {
      const datas = getDescendantsByType(codeText, [ "codeTextData" ]);
      if (datas.length > 0) {
        const paddings = getDescendantsByType(codeText, [ "codeTextPadding" ]);
        // Check for extra space at start of code
        const startPadding = paddings[0];
        const startData = datas[0];
        const startMatch = /^(\s+)(\S)/.exec(startData.text) || [ null, "", "" ];
        const startBacktick = (startMatch[2] === "`");
        const startCount = startMatch[1].length - ((startBacktick && !startPadding) ? 1 : 0);
        const startSpaces = startCount > 0;
        // Check for extra space at end of code
        const endPadding = paddings[paddings.length - 1];
        const endData = datas[datas.length - 1];
        const endMatch = /(\S)(\s+)$/.exec(endData.text) || [ null, "", "" ];
        const endBacktick = (endMatch[1] === "`");
        const endCount = endMatch[2].length - ((endBacktick && !endPadding) ? 1 : 0);
        const endSpaces = endCount > 0;
        // Check if safe to remove 1-space padding
        const removePadding = startSpaces && endSpaces && startPadding && endPadding && !startBacktick && !endBacktick;
        const context = codeText.text;
        // If extra space at start, report violation
        if (startSpaces) {
          const startColumn = (removePadding ? startPadding : startData).startColumn;
          const length = startCount + (removePadding ? startPadding.text.length : 0);
          addErrorContext(
            onError,
            startData.startLine,
            context,
            true,
            false,
            [ startColumn, length ],
            {
              "editColumn": startColumn,
              "deleteCount": length
            }
          );
        }
        // If extra space at end, report violation
        if (endSpaces) {
          const endColumn = (removePadding ? endPadding : endData).endColumn;
          const length = endCount + (removePadding ? endPadding.text.length : 0);
          addErrorContext(
            onError,
            endData.endLine,
            context,
            false,
            true,
            [ endColumn - length, length ],
            {
              "editColumn": endColumn - length,
              "deleteCount": length
            }
          );
        }
      }
    }
  }
};
