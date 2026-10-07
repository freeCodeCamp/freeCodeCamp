// @ts-check

import { addError } from "../helpers/helpers.cjs";
import { addRangeToSet } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD009", "no-trailing-spaces" ],
  "description": "Trailing spaces",
  "tags": [ "whitespace" ],
  "parser": "micromark",
  "function": function MD009(params, onError) {
    let brSpaces = params.config.br_spaces;
    brSpaces = Number((brSpaces === undefined) ? 2 : brSpaces);
    const codeBlocks = params.config.code_blocks;
    const includeCode = (codeBlocks === undefined) ? false : !!codeBlocks;
    const listItemEmptyLines = !!params.config.list_item_empty_lines;
    const strict = !!params.config.strict;
    const codeBlockLineNumbers = new Set();
    if (!includeCode) {
      for (const codeBlock of filterByTypesCached([ "codeFenced" ])) {
        addRangeToSet(codeBlockLineNumbers, codeBlock.startLine + 1, codeBlock.endLine - 1);
      }
      for (const codeBlock of filterByTypesCached([ "codeIndented" ])) {
        addRangeToSet(codeBlockLineNumbers, codeBlock.startLine, codeBlock.endLine);
      }
    }
    const listItemLineNumbers = new Set();
    if (listItemEmptyLines) {
      for (const listBlock of filterByTypesCached([ "listOrdered", "listUnordered" ])) {
        addRangeToSet(listItemLineNumbers, listBlock.startLine, listBlock.endLine);
        let trailingIndent = true;
        for (let i = listBlock.children.length - 1; i >= 0; i--) {
          const child = listBlock.children[i];
          switch (child.type) {
            case "content":
              trailingIndent = false;
              break;
            case "listItemIndent":
              if (trailingIndent) {
                listItemLineNumbers.delete(child.startLine);
              }
              break;
            case "listItemPrefix":
              trailingIndent = true;
              break;
            default:
              break;
          }
        }
      }
    }
    const paragraphLineNumbers = new Set();
    const codeInlineLineNumbers = new Set();
    if (strict) {
      for (const paragraph of filterByTypesCached([ "paragraph" ])) {
        addRangeToSet(paragraphLineNumbers, paragraph.startLine, paragraph.endLine - 1);
      }
      for (const codeText of filterByTypesCached([ "codeText" ])) {
        addRangeToSet(codeInlineLineNumbers, codeText.startLine, codeText.endLine - 1);
      }
    }
    const expected = (brSpaces < 2) ? 0 : brSpaces;
    for (let lineIndex = 0; lineIndex < params.lines.length; lineIndex++) {
      const line = params.lines[lineIndex];
      const lineNumber = lineIndex + 1;
      const trailingSpaces = line.length - line.trimEnd().length;
      if (
        trailingSpaces &&
        !codeBlockLineNumbers.has(lineNumber) &&
        !listItemLineNumbers.has(lineNumber) &&
        (
          (expected !== trailingSpaces) ||
          (strict &&
            (!paragraphLineNumbers.has(lineNumber) ||
             codeInlineLineNumbers.has(lineNumber)))
        )
      ) {
        const column = line.length - trailingSpaces + 1;
        addError(
          onError,
          lineNumber,
          "Expected: " + (expected === 0 ? "" : "0 or ") +
            expected + "; Actual: " + trailingSpaces,
          undefined,
          [ column, trailingSpaces ],
          {
            "editColumn": column,
            "deleteCount": trailingSpaces
          }
        );
      }
    }
  }
};
