// @ts-check

import { addErrorContext } from "../helpers/helpers.cjs";
import { addRangeToSet } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD020", "no-missing-space-closed-atx" ],
  "description": "No space inside hashes on closed atx style heading",
  "tags": [ "headings", "atx_closed", "spaces" ],
  "parser": "micromark",
  "function": function MD020(params, onError) {
    const { lines } = params;
    const ignoreBlockLineNumbers = new Set();
    for (const ignoreBlock of filterByTypesCached([ "codeFenced", "codeIndented", "htmlFlow" ])) {
      addRangeToSet(ignoreBlockLineNumbers, ignoreBlock.startLine, ignoreBlock.endLine);
    }
    for (const [ lineIndex, line ] of lines.entries()) {
      if (!ignoreBlockLineNumbers.has(lineIndex + 1)) {
        const match =
          /^(#+)([ \t]*)([^# \t\\]|[^# \t][^#]*?[^# \t\\])([ \t]*)((?:\\#)?)(#+)(\s*)$/.exec(line);
        if (match) {
          const [
            ,
            leftHash,
            { "length": leftSpaceLength },
            content,
            { "length": rightSpaceLength },
            rightEscape,
            rightHash,
            { "length": trailSpaceLength }
          ] = match;
          const leftHashLength = leftHash.length;
          const rightHashLength = rightHash.length;
          const left = !leftSpaceLength;
          const right = !rightSpaceLength || !!rightEscape;
          const rightEscapeReplacement = rightEscape ? `${rightEscape} ` : "";
          if (left || right) {
            const range = left ?
              [
                1,
                leftHashLength + 1
              ] :
              [
                line.length - trailSpaceLength - rightHashLength,
                rightHashLength + 1
              ];
            addErrorContext(
              onError,
              lineIndex + 1,
              line.trim(),
              left,
              right,
              range,
              {
                "editColumn": 1,
                "deleteCount": line.length,
                "insertText":
                  `${leftHash} ${content} ${rightEscapeReplacement}${rightHash}`
              }
            );
          }
        }
      }
    }
  }
};
