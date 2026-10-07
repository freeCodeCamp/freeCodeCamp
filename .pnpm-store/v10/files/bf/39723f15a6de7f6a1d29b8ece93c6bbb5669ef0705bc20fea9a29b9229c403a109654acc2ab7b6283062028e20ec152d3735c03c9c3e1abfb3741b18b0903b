// @ts-check

import { addErrorDetailIf, frontMatterHasTitle } from "../helpers/helpers.cjs";
import { getHeadingLevel } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD001", "heading-increment" ],
  "description": "Heading levels should only increment by one level at a time",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD001(params, onError) {
    const hasTitle = frontMatterHasTitle(
      params.frontMatterLines,
      params.config.front_matter_title
    );
    let prevLevel = hasTitle ? 1 : Number.MAX_SAFE_INTEGER;
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      const level = getHeadingLevel(heading);
      if (level > prevLevel) {
        addErrorDetailIf(
          onError,
          heading.startLine,
          `h${prevLevel + 1}`,
          `h${level}`
        );
      }
      prevLevel = level;
    }
  }
};
