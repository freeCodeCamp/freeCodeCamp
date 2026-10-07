// @ts-check

import { addErrorContext, frontMatterHasTitle } from "../helpers/helpers.cjs";
import { filterByTypes, getHeadingLevel, getHtmlTagInfo, isHtmlFlowComment, nonContentTokens } from "../helpers/micromark-helpers.cjs";

const headingTagNameRe = /^h[1-6]$/;

/**
 * Gets the HTML tag name of an htmlFlow token.
 *
 * @param {import("markdownlint").MicromarkToken} token Micromark Token.
 * @returns {string | null} Tag name.
 */
function getHtmlFlowTagName(token) {
  const { children, type } = token;
  if (type === "htmlFlow") {
    const htmlTexts = filterByTypes(children, [ "htmlText" ], true);
    const tagInfo = (htmlTexts.length > 0) && getHtmlTagInfo(htmlTexts[0]);
    if (tagInfo) {
      return tagInfo.name.toLowerCase();
    }
  }
  return null;
}

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD041", "first-line-heading", "first-line-h1" ],
  "description": "First line in a file should be a top-level heading",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD041(params, onError) {
    const allowPreamble = !!params.config.allow_preamble;
    const level = Number(params.config.level || 1);
    const { tokens } = params.parsers.micromark;
    if (
      !frontMatterHasTitle(
        params.frontMatterLines,
        params.config.front_matter_title
      )
    ) {
      let errorLineNumber = 0;
      for (const token of tokens) {
        const { startLine, type } = token;
        if (!nonContentTokens.has(type) && !isHtmlFlowComment(token)) {
          let tagName = null;
          if ((type === "atxHeading") || (type === "setextHeading")) {
            // First heading needs to have the expected level
            if (getHeadingLevel(token) !== level) {
              errorLineNumber = startLine;
            }
            break;
          } else if ((tagName = getHtmlFlowTagName(token)) && headingTagNameRe.test(tagName)) {
            // First HTML element needs to have an <h?> with the expected level
            if (tagName !== `h${level}`) {
              errorLineNumber = startLine;
            }
            break;
          } else if (!allowPreamble) {
            // First non-content needs to be a heading with the expected level
            errorLineNumber = startLine;
            break;
          }
        }
      }
      if (errorLineNumber > 0) {
        addErrorContext(onError, errorLineNumber, params.lines[errorLineNumber - 1]);
      }
    }
  }
};
