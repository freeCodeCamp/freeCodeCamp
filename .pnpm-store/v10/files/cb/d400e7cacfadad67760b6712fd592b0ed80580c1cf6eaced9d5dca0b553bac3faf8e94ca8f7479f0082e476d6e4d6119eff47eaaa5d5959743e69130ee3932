// @ts-check

import { addError, addErrorContext } from "../helpers/helpers.cjs";
import { getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD040", "fenced-code-language" ],
  "description": "Fenced code blocks should have a language specified",
  "tags": [ "code", "language" ],
  "parser": "micromark",
  "function": function MD040(params, onError) {
    let allowed = params.config.allowed_languages;
    allowed = Array.isArray(allowed) ? allowed : [];
    const languageOnly = !!params.config.language_only;
    const fencedCodes = filterByTypesCached([ "codeFenced" ]);
    for (const fencedCode of fencedCodes) {
      const openingFence = getDescendantsByType(fencedCode, [ "codeFencedFence" ])[0];
      const { startLine, text } = openingFence;
      const info = getDescendantsByType(openingFence, [ "codeFencedFenceInfo" ])[0]?.text;
      if (!info) {
        addErrorContext(onError, startLine, text);
      } else if ((allowed.length > 0) && !allowed.includes(info)) {
        addError(onError, startLine, `"${info}" is not allowed`);
      }
      if (languageOnly && getDescendantsByType(openingFence, [ "codeFencedFenceMeta" ]).length > 0) {
        addError(onError, startLine, `Info string contains more than language: "${text}"`);
      }
    }
  }
};
