// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { getDescendantsByType, getParentOfType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

const markerToStyle = (/** @type {string} */ marker) => (marker === "-") ? "dash" : ((marker === "+") ? "plus" : "asterisk");
const styleToMarker = (/** @type {string} */ style) => (style === "dash") ? "-" : ((style === "plus") ? "+" : "*");
const differentItemStyle = (/** @type {string} */ style) => (style === "dash") ? "plus" : ((style === "plus") ? "asterisk" : "dash");
const validStyles = new Set([
  "asterisk",
  "consistent",
  "dash",
  "plus",
  "sublist"
]);

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD004", "ul-style" ],
  "description": "Unordered list style",
  "tags": [ "bullet", "ul" ],
  "parser": "micromark",
  "function": function MD004(params, onError) {
    const style = String(params.config.style || "consistent");
    let expectedStyle = validStyles.has(style) ? style : "dash";
    /** @type {("asterisk"|"dash"|"plus")[]} */
    const nestingStyles = [];
    for (const listUnordered of filterByTypesCached([ "listUnordered" ])) {
      let nesting = 0;
      if (style === "sublist") {
        /** @type {import("markdownlint").MicromarkToken | null} */
        let parent = listUnordered;
        // @ts-ignore
        while ((parent = getParentOfType(parent, [ "listOrdered", "listUnordered" ]))) {
          nesting++;
        }
      }
      const listItemMarkers = getDescendantsByType(listUnordered, [ "listItemPrefix", "listItemMarker" ]);
      for (const listItemMarker of listItemMarkers) {
        const itemStyle = markerToStyle(listItemMarker.text);
        if (style === "sublist") {
          if (!nestingStyles[nesting]) {
            nestingStyles[nesting] =
              (itemStyle === nestingStyles[nesting - 1]) ?
                differentItemStyle(itemStyle) :
                itemStyle;
          }
          expectedStyle = nestingStyles[nesting];
        } else if (expectedStyle === "consistent") {
          expectedStyle = itemStyle;
        }
        const column = listItemMarker.startColumn;
        const length = listItemMarker.endColumn - listItemMarker.startColumn;
        addErrorDetailIf(
          onError,
          listItemMarker.startLine,
          expectedStyle,
          itemStyle,
          undefined,
          undefined,
          [ column, length ],
          {
            "editColumn": column,
            "deleteCount": length,
            "insertText": styleToMarker(expectedStyle)
          }
        );
      }
    }
  }
};
