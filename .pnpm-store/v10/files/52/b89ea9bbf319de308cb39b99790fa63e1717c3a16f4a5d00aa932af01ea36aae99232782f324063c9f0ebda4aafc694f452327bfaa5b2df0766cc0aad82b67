// @ts-check

import { addErrorContext } from "../helpers/helpers.cjs";
import { getHeadingLevel, getHeadingText } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD024", "no-duplicate-heading" ],
  "description": "Multiple headings with the same content",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD024(params, onError) {
    const siblingsOnly = !!params.config.siblings_only || false;
    const knownContents = [ null, [] ];
    let lastLevel = 1;
    let knownContent = knownContents[lastLevel];
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      const headingText = getHeadingText(heading);
      if (siblingsOnly) {
        const newLevel = getHeadingLevel(heading);
        while (lastLevel < newLevel) {
          lastLevel++;
          knownContents[lastLevel] = [];
        }
        while (lastLevel > newLevel) {
          knownContents[lastLevel] = [];
          lastLevel--;
        }
        knownContent = knownContents[newLevel];
      }
      // @ts-ignore
      if (knownContent.includes(headingText)) {
        addErrorContext(
          onError,
          heading.startLine,
          headingText.trim()
        );
      } else {
        // @ts-ignore
        knownContent.push(headingText);
      }
    }
  }
};
