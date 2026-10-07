// @ts-check

import { addError, hasOverlap } from "../helpers/helpers.cjs";
import { getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

const tabRe = /\t+/g;

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD010", "no-hard-tabs" ],
  "description": "Hard tabs",
  "tags": [ "whitespace", "hard_tab" ],
  "parser": "micromark",
  "function": function MD010(params, onError) {
    const codeBlocks = params.config.code_blocks;
    const includeCode = (codeBlocks === undefined) ? true : !!codeBlocks;
    const ignoreCodeLanguages = new Set(
      (params.config.ignore_code_languages || [])
        .map((/** @type {void} */ language) => String(language).toLowerCase())
    );
    const spacesPerTab = params.config.spaces_per_tab;
    const spaceMultiplier = (spacesPerTab === undefined) ?
      1 :
      Math.max(0, Number(spacesPerTab));
    /** @type {import("markdownlint").MicromarkTokenType[]} */
    const exclusionTypes = [];
    if (includeCode) {
      if (ignoreCodeLanguages.size > 0) {
        exclusionTypes.push("codeFenced");
      }
    } else {
      exclusionTypes.push("codeFenced", "codeIndented", "codeText");
    }
    const codeTokens = filterByTypesCached(exclusionTypes).filter((token) => {
      if ((token.type === "codeFenced") && (ignoreCodeLanguages.size > 0)) {
        const fenceInfos = getDescendantsByType(token, [ "codeFencedFence", "codeFencedFenceInfo" ]);
        return fenceInfos.every((fenceInfo) => ignoreCodeLanguages.has(fenceInfo.text.toLowerCase()));
      }
      return true;
    });
    const codeRanges = codeTokens.map((token) => {
      const { type, startLine, startColumn, endLine, endColumn } = token;
      const codeFenced = (type === "codeFenced");
      return {
        "startLine": startLine + (codeFenced ? 1 : 0),
        "startColumn": codeFenced ? 0 : startColumn,
        "endLine": endLine - (codeFenced ? 1 : 0),
        "endColumn": codeFenced ? Number.MAX_SAFE_INTEGER : endColumn
      };
    });
    for (let lineIndex = 0; lineIndex < params.lines.length; lineIndex++) {
      const line = params.lines[lineIndex];
      let match = null;
      while ((match = tabRe.exec(line)) !== null) {
        const lineNumber = lineIndex + 1;
        const column = match.index + 1;
        const length = match[0].length;
        /** @type {import("../helpers/helpers.cjs").FileRange} */
        const range = { "startLine": lineNumber, "startColumn": column, "endLine": lineNumber, "endColumn": column + length - 1 };
        if (!codeRanges.some((codeRange) => hasOverlap(codeRange, range))) {
          addError(
            onError,
            lineNumber,
            "Column: " + column,
            undefined,
            [ column, length ],
            {
              "editColumn": column,
              "deleteCount": length,
              "insertText": "".padEnd(length * spaceMultiplier)
            }
          );
        }
      }
    }
  }
};
