// @ts-check

import { addErrorContext, frontMatterHasTitle } from "../helpers/helpers.cjs";
import { getHeadingLevel, getHeadingText, isDocfxTab, isHtmlFlowComment, nonContentTokens } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD025", "single-title", "single-h1" ],
  "description": "Multiple top-level headings in the same document",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD025(params, onError) {
    const level = Number(params.config.level || 1);
    const { tokens } = params.parsers.micromark;
    const matchingHeadings = filterByTypesCached([ "atxHeading", "setextHeading" ])
      .filter((heading) => (level === getHeadingLevel(heading)) && !isDocfxTab(heading));
    if (matchingHeadings.length > 0) {
      const foundFrontMatterTitle =
        frontMatterHasTitle(
          params.frontMatterLines,
          params.config.front_matter_title
        );
      // Front matter title counts as a top-level heading if present
      let hasTopLevelHeading = foundFrontMatterTitle;
      if (!hasTopLevelHeading) {
        // Check if the first matching heading is a top-level heading
        const previousTokens = tokens.slice(0, tokens.indexOf(matchingHeadings[0]));
        hasTopLevelHeading = previousTokens.every(
          (token) => nonContentTokens.has(token.type) || isHtmlFlowComment(token)
        );
      }
      if (hasTopLevelHeading) {
        // All other matching headings are violations
        for (const heading of matchingHeadings.slice(foundFrontMatterTitle ? 0 : 1)) {
          addErrorContext(
            onError,
            heading.startLine,
            getHeadingText(heading)
          );
        }
      }
    }
  }
};
