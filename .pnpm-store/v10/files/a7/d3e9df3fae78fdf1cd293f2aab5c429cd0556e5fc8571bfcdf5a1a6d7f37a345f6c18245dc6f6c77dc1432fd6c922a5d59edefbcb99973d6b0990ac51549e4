// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/**
 * Return the string representation of a fence markup character.
 *
 * @param {string} markup Fence string.
 * @returns {"tilde" | "backtick"} String representation.
 */
function fencedCodeBlockStyleFor(markup) {
  switch (markup[0]) {
    case "~":
      return "tilde";
    default:
      return "backtick";
  }
};

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD048", "code-fence-style" ],
  "description": "Code fence style",
  "tags": [ "code" ],
  "parser": "micromark",
  "function": function MD048(params, onError) {
    const style = String(params.config.style || "consistent");
    let expectedStyle = style;
    const codeFenceds = filterByTypesCached([ "codeFenced" ]);
    for (const codeFenced of codeFenceds) {
      const codeFencedFenceSequence =
        getDescendantsByType(codeFenced, [ "codeFencedFence", "codeFencedFenceSequence" ])[0];
      const { startLine, text } = codeFencedFenceSequence;
      if (expectedStyle === "consistent") {
        expectedStyle = fencedCodeBlockStyleFor(text);
      }
      addErrorDetailIf(
        onError,
        startLine,
        expectedStyle,
        fencedCodeBlockStyleFor(text)
      );
    }
  }
};
