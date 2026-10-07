// @ts-check

import { addErrorContext } from "../helpers/helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

const dollarCommandRe = /^(\s*)(\$\s+)/;

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD014", "commands-show-output" ],
  "description": "Dollar signs used before commands without showing output",
  "tags": [ "code" ],
  "parser": "micromark",
  "function": function MD014(params, onError) {
    for (const codeBlock of filterByTypesCached([ "codeFenced", "codeIndented" ])) {
      const codeFlowValues = codeBlock.children.filter((child) => child.type === "codeFlowValue");
      const dollarMatches = codeFlowValues
        .map((codeFlowValue) => ({
          "result": codeFlowValue.text.match(dollarCommandRe),
          "startColumn": codeFlowValue.startColumn,
          "startLine": codeFlowValue.startLine,
          "text": codeFlowValue.text
        }))
        .filter((dollarMatch) => dollarMatch.result);
      if (dollarMatches.length === codeFlowValues.length) {
        for (const dollarMatch of dollarMatches) {
          // @ts-ignore
          const column = dollarMatch.startColumn + dollarMatch.result[1].length;
          // @ts-ignore
          const length = dollarMatch.result[2].length;
          addErrorContext(
            onError,
            dollarMatch.startLine,
            dollarMatch.text,
            undefined,
            undefined,
            [ column, length ],
            {
              "editColumn": column,
              "deleteCount": length
            }
          );
        }
      }
    }
  }
};
