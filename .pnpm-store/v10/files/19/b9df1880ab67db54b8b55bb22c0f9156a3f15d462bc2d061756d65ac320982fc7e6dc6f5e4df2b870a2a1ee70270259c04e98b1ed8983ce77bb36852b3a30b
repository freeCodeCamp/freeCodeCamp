// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @typedef {import("markdownlint").MicromarkTokenType} MicromarkTokenType */

const tokenTypeToStyle = (/** @type {MicromarkTokenType} */ tokenType) => (tokenType === "codeFenced") ? "fenced" : "indented";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD046", "code-block-style" ],
  "description": "Code block style",
  "tags": [ "code" ],
  "parser": "micromark",
  "function": function MD046(params, onError) {
    let expectedStyle = String(params.config.style || "consistent");
    for (const token of filterByTypesCached([ "codeFenced", "codeIndented" ])) {
      const { startLine, type } = token;
      if (expectedStyle === "consistent") {
        expectedStyle = tokenTypeToStyle(type);
      }
      addErrorDetailIf(
        onError,
        startLine,
        expectedStyle,
        tokenTypeToStyle(type)
      );
    }
  }
};
