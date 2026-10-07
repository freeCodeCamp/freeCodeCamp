// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD035", "hr-style" ],
  "description": "Horizontal rule style",
  "tags": [ "hr" ],
  "parser": "micromark",
  "function": function MD035(params, onError) {
    let style = String(params.config.style || "consistent").trim();
    const thematicBreaks = filterByTypesCached([ "thematicBreak" ]);
    for (const token of thematicBreaks) {
      const { startLine, text } = token;
      if (style === "consistent") {
        style = text;
      }
      addErrorDetailIf(onError, startLine, style, text);
    }
  }
};
