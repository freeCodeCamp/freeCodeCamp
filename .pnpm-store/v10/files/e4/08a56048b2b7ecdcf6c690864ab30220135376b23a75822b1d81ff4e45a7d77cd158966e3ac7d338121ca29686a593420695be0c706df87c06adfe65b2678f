// @ts-check

import { addError, getHtmlAttributeRe, nextLinesRe } from "../helpers/helpers.cjs";
import { getHtmlTagInfo, getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

const altRe = getHtmlAttributeRe("alt");
const ariaHiddenRe = getHtmlAttributeRe("aria-hidden");

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD045", "no-alt-text" ],
  "description": "Images should have alternate text (alt text)",
  "tags": [ "accessibility", "images" ],
  "parser": "micromark",
  "function": function MD045(params, onError) {
    // Process Markdown images
    const images = filterByTypesCached([ "image" ]);
    for (const image of images) {
      const labelTexts = getDescendantsByType(image, [ "label", "labelText" ]);
      if (labelTexts.some((labelText) => labelText.text.length === 0)) {
        const range = (image.startLine === image.endLine) ?
          [ image.startColumn, image.endColumn - image.startColumn ] :
          undefined;
        addError(
          onError,
          image.startLine,
          undefined,
          undefined,
          range
        );
      }
    }

    // Process HTML images
    const htmlTexts = filterByTypesCached([ "htmlText" ], true);
    for (const htmlText of htmlTexts) {
      const { startColumn, startLine, text } = htmlText;
      const htmlTagInfo = getHtmlTagInfo(htmlText);
      if (
        htmlTagInfo &&
        !htmlTagInfo.close &&
        (htmlTagInfo.name.toLowerCase() === "img") &&
        !altRe.test(text) &&
        (ariaHiddenRe.exec(text)?.[1].toLowerCase() !== "true")
      ) {
        const range = [
          startColumn,
          text.replace(nextLinesRe, "").length
        ];
        addError(
          onError,
          startLine,
          undefined,
          undefined,
          range
        );
      }
    }
  }
};
