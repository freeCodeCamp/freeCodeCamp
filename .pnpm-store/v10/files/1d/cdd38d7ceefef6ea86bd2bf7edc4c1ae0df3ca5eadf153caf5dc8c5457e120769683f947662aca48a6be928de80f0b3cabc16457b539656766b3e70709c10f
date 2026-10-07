// @ts-check

import { addError, nextLinesRe } from "../helpers/helpers.cjs";
import { getHtmlTagInfo, getParentOfType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @typedef {import("micromark-extension-gfm-table")} */

// eslint-disable-next-line jsdoc/reject-any-type
const toLowerCaseStringArray = (/** @type {any} */ arr) => Array.isArray(arr) ? arr.map((elm) => String(elm).toLowerCase()) : [];

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD033", "no-inline-html" ],
  "description": "Inline HTML",
  "tags": [ "html" ],
  "parser": "micromark",
  "function": function MD033(params, onError) {
    const allowedElements = toLowerCaseStringArray(params.config.allowed_elements);
    // If not defined, use allowedElements for backward compatibility
    const tableAllowedElements = toLowerCaseStringArray(params.config.table_allowed_elements || params.config.allowed_elements);
    for (const token of filterByTypesCached([ "htmlText" ], true)) {
      const htmlTagInfo = getHtmlTagInfo(token);
      if (htmlTagInfo && !htmlTagInfo.close) {
        const elementName = htmlTagInfo?.name.toLowerCase();
        const inTable = !!getParentOfType(token, [ "table" ]);
        if (
          (inTable || !allowedElements.includes(elementName)) &&
          (!inTable || !tableAllowedElements.includes(elementName))
        ) {
          const range = [
            token.startColumn,
            token.text.replace(nextLinesRe, "").length
          ];
          addError(
            onError,
            token.startLine,
            "Element: " + htmlTagInfo.name,
            undefined,
            range
          );
        }
      }
    }
  }
};
