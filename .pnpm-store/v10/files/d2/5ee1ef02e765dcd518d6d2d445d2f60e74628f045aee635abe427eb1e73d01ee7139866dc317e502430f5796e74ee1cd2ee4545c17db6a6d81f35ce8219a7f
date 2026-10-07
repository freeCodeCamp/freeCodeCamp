// @ts-check

import { addErrorContext, isBlankLine } from "../helpers/helpers.cjs";
import { getParentOfType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

const codeFencePrefixRe = /^(.*?)[`~]/;

/** @typedef {readonly string[]} ReadonlyStringArray */

/**
 * Adds an error for the top or bottom of a code fence.
 *
 * @param {import("markdownlint").RuleOnError} onError Error-reporting callback.
 * @param {ReadonlyStringArray} lines Lines of Markdown content.
 * @param {number} lineNumber Line number.
 * @param {boolean} top True iff top fence.
 * @returns {void}
 */
function addError(onError, lines, lineNumber, top) {
  const line = lines[lineNumber - 1];
  const [ , prefix ] = line.match(codeFencePrefixRe) || [];
  const fixInfo = (prefix === undefined) ?
    undefined :
    {
      "lineNumber": lineNumber + (top ? 0 : 1),
      "insertText": `${prefix.replace(/[^>]/g, " ").trim()}\n`
    };
  addErrorContext(
    onError,
    lineNumber,
    line.trim(),
    undefined,
    undefined,
    undefined,
    fixInfo
  );
}

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD031", "blanks-around-fences" ],
  "description": "Fenced code blocks should be surrounded by blank lines",
  "tags": [ "code", "blank_lines" ],
  "parser": "micromark",
  "function": function MD031(params, onError) {
    const listItems = params.config.list_items;
    const includeListItems = (listItems === undefined) ? true : !!listItems;
    const { lines } = params;
    for (const codeBlock of filterByTypesCached([ "codeFenced" ])) {
      if (includeListItems || !(getParentOfType(codeBlock, [ "listOrdered", "listUnordered" ]))) {
        if (!isBlankLine(lines[codeBlock.startLine - 2])) {
          addError(onError, lines, codeBlock.startLine, true);
        }
        if (!isBlankLine(lines[codeBlock.endLine]) && !isBlankLine(lines[codeBlock.endLine - 1])) {
          addError(onError, lines, codeBlock.endLine, false);
        }
      }
    }
  }
};
