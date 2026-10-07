// @ts-check

import { addError, isBlankLine } from "../helpers/helpers.cjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD047", "single-trailing-newline" ],
  "description": "Files should end with a single newline character",
  "tags": [ "blank_lines" ],
  "parser": "none",
  "function": function MD047(params, onError) {
    const lastLineNumber = params.lines.length;
    const lastLine = params.lines[lastLineNumber - 1];
    if (!isBlankLine(lastLine)) {
      addError(
        onError,
        lastLineNumber,
        undefined,
        undefined,
        [ lastLine.length, 1 ],
        {
          "insertText": "\n",
          "editColumn": lastLine.length + 1
        }
      );
    }
  }
};
