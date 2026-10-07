// @ts-check

import { addErrorDetailIf } from "../helpers/helpers.cjs";
import { getHeadingLevel, getHeadingStyle } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD003", "heading-style" ],
  "description": "Heading style",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD003(params, onError) {
    let style = String(params.config.style || "consistent");
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      const styleForToken = getHeadingStyle(heading);
      if (style === "consistent") {
        style = styleForToken;
      }
      if (styleForToken !== style) {
        const h12 = getHeadingLevel(heading) <= 2;
        const setextWithAtx =
          (style === "setext_with_atx") &&
            ((h12 && (styleForToken === "setext")) ||
            (!h12 && (styleForToken === "atx")));
        const setextWithAtxClosed =
          (style === "setext_with_atx_closed") &&
            ((h12 && (styleForToken === "setext")) ||
            (!h12 && (styleForToken === "atx_closed")));
        if (!setextWithAtx && !setextWithAtxClosed) {
          let expected = style;
          if (style === "setext_with_atx") {
            expected = h12 ? "setext" : "atx";
          } else if (style === "setext_with_atx_closed") {
            expected = h12 ? "setext" : "atx_closed";
          }
          addErrorDetailIf(
            onError,
            heading.startLine,
            expected,
            styleForToken
          );
        }
      }
    }
  }
};
