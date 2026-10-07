// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { getParentOfType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("micromark-util-types").TokenType[]} */
const unorderedListTypes =
  [ "blockQuotePrefix", "listItemPrefix", "listUnordered" ];
/** @type {import("micromark-util-types").TokenType[]} */
const unorderedParentTypes =
  [ "blockQuote", "listOrdered", "listUnordered" ];

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD007", "ul-indent" ],
  "description": "Unordered list indentation",
  "tags": [ "bullet", "ul", "indentation" ],
  "parser": "micromark",
  "function": function MD007(params, onError) {
    const indent = Number(params.config.indent || 2);
    const startIndented = !!params.config.start_indented;
    const startIndent = Number(params.config.start_indent || indent);
    const unorderedListNesting = new Map();
    let lastBlockQuotePrefix = null;
    const tokens = filterByTypesCached(unorderedListTypes);
    for (const token of tokens) {
      const { endColumn, parent, startColumn, startLine, type } = token;
      if (type === "blockQuotePrefix") {
        lastBlockQuotePrefix = token;
      } else if (type === "listUnordered") {
        let nesting = 0;
        /** @type {import("markdownlint").MicromarkToken | null} */
        let current = token;
        while (
          // @ts-ignore
          (current = getParentOfType(current, unorderedParentTypes))
        ) {
          if (current.type === "listUnordered") {
            nesting++;
            // eslint-disable-next-line no-continue
            continue;
          } else if (current.type === "listOrdered") {
            nesting = -1;
          }
          break;
        }
        if (nesting >= 0) {
          unorderedListNesting.set(token, nesting);
        }
      } else {
        // listItemPrefix
        const nesting = unorderedListNesting.get(parent);
        if (nesting !== undefined) {
          // listItemPrefix for listUnordered
          const baseIndent = (getParentOfType(token, [ "gfmFootnoteDefinition" ])) ? 4 : 0;
          const expectedIndent =
            baseIndent + (startIndented ? startIndent : 0) + (nesting * indent);
          const blockQuoteAdjustment =
            (lastBlockQuotePrefix?.endLine === startLine) ?
              (lastBlockQuotePrefix.endColumn - 1) :
              0;
          const actualIndent = startColumn - 1 - blockQuoteAdjustment;
          const range = [ 1, endColumn - 1 ];
          const fixInfo = {
            "editColumn": startColumn - actualIndent,
            "deleteCount": Math.max(actualIndent - expectedIndent, 0),
            "insertText": "".padEnd(Math.max(expectedIndent - actualIndent, 0))
          };
          addErrorDetailIf(
            onError,
            startLine,
            expectedIndent,
            actualIndent,
            undefined,
            undefined,
            range,
            fixInfo
          );
        }
      }
    }
  }
};
