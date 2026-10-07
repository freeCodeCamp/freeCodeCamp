// @ts-check

import { addError, getHtmlAttributeRe } from "../helpers/helpers.cjs";
import { filterByPredicate, filterByTypes, getHtmlTagInfo, isDocfxTab } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

// Regular expression for identifying HTML anchor names
const idRe = getHtmlAttributeRe("id");
const nameRe = getHtmlAttributeRe("name");
const anchorRe = /\{(#[a-z\d]+(?:[-_][a-z\d]+)*)\}/gu;
const lineFragmentRe = /^#(?:L\d+(?:C\d+)?-L\d+(?:C\d+)?|L\d+)$/;

// Sets for filtering heading tokens during conversion
const childrenExclude = new Set([ "image", "reference", "resource" ]);
const tokensInclude = new Set(
  [ "characterEscapeValue", "codeTextData", "data", "mathTextData" ]
);

/**
 * Converts a Markdown heading into an HTML fragment according to the rules
 * used by GitHub.
 *
 * @param {import("markdownlint").MicromarkToken} headingText Heading text token.
 * @returns {string} Fragment string for heading.
 */
function convertHeadingToHTMLFragment(headingText) {
  const inlineText =
    filterByPredicate(
      headingText.children,
      (token) => tokensInclude.has(token.type),
      (token) => (childrenExclude.has(token.type) ? [] : token.children)
    )
      .map((token) => token.text)
      .join("");
  return "#" + encodeURIComponent(
    inlineText
      .toLowerCase()
      // RegExp source with Ruby's \p{Word} expanded into its General Categories
      // https://github.com/gjtorikian/html-pipeline/blob/main/lib/html/pipeline/toc_filter.rb
      // https://ruby-doc.org/core-3.0.2/Regexp.html
      .replace(
        /[^\p{Letter}\p{Mark}\p{Number}\p{Connector_Punctuation}\- ]/gu,
        ""
      )
      .replace(/ /gu, "-")
  );
}

/**
 * Unescapes the text of a String-type micromark Token.
 *
 * @param {import("markdownlint").MicromarkToken} token String-type micromark Token.
 * @returns {string} Unescaped token text.
 */
function unescapeStringTokenText(token) {
  return filterByTypes(token.children, [ "characterEscapeValue", "data" ])
    .map((child) => child.text)
    .join("");
}

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD051", "link-fragments" ],
  "description": "Link fragments should be valid",
  "tags": [ "links" ],
  "parser": "micromark",
  "function": function MD051(params, onError) {
    const ignoreCase = params.config.ignore_case || false;
    const ignoredPattern = params.config.ignored_pattern || "";
    const ignoredPatternRe = new RegExp(ignoredPattern || "^$");
    /** @type {Map<string, number>} */
    const fragments = new Map([ [ "#top", 0 ] ]);

    // Process headings
    const headingTexts = filterByTypesCached([ "atxHeadingText", "setextHeadingText" ]);
    for (const headingText of headingTexts) {
      const fragment = convertHeadingToHTMLFragment(headingText);
      if (fragment !== "#") {
        const count = fragments.get(fragment) || 0;
        if (count) {
          fragments.set(`${fragment}-${count}`, 0);
        }
        fragments.set(fragment, count + 1);
        let match = null;
        while ((match = anchorRe.exec(headingText.text)) !== null) {
          const [ , anchor ] = match;
          if (!fragments.has(anchor)) {
            fragments.set(anchor, 1);
          }
        }
      }
    }

    // Process HTML anchors
    for (const token of filterByTypesCached([ "htmlText" ], true)) {
      const htmlTagInfo = getHtmlTagInfo(token);
      if (htmlTagInfo && !htmlTagInfo.close) {
        const anchorMatch = idRe.exec(token.text) ||
          (htmlTagInfo.name.toLowerCase() === "a" && nameRe.exec(token.text));
        if (anchorMatch && anchorMatch.length > 0) {
          fragments.set(`#${anchorMatch[1]}`, 0);
        }
      }
    }

    // Process link and definition fragments
    /** @type {import("markdownlint").MicromarkTokenType[][]} */
    const parentChilds = [
      [ "link", "resourceDestinationString" ],
      [ "definition", "definitionDestinationString" ]
    ];
    for (const [ parentType, definitionType ] of parentChilds) {
      const links = filterByTypesCached([ parentType ])
        .filter(
          (link) => !((link.parent?.type === "atxHeadingText") && isDocfxTab(link.parent.parent))
        );
      for (const link of links) {
        const definitions = filterByTypes(link.children, [ definitionType ]);
        for (const definition of definitions) {
          const { endColumn, startColumn } = definition;
          const text = unescapeStringTokenText(definition);
          const textSliceOne = text.slice(1);
          const encodedText = `#${encodeURIComponent(textSliceOne)}`;
          if (
            (text.length > 1) &&
            text.startsWith("#") &&
            !fragments.has(encodedText) &&
            !lineFragmentRe.test(encodedText) &&
            !ignoredPatternRe.test(textSliceOne)
          ) {
            let context = undefined;
            let range = undefined;
            let fixInfo = undefined;
            if (link.startLine === link.endLine) {
              context = link.text;
              range = [ link.startColumn, link.endColumn - link.startColumn ];
              fixInfo = {
                "editColumn": startColumn,
                "deleteCount": endColumn - startColumn
              };
            }
            const textLower = text.toLowerCase();
            const mixedCaseKey = [ ...fragments.keys() ]
              .find((key) => textLower === key.toLowerCase());
            if (mixedCaseKey) {
              // @ts-ignore
              (fixInfo || {}).insertText = mixedCaseKey;
              if (!ignoreCase && (mixedCaseKey !== text)) {
                addError(
                  onError,
                  link.startLine,
                  `Expected: ${mixedCaseKey}; Actual: ${text}`,
                  context,
                  range,
                  fixInfo
                );
              }
            } else {
              addError(
                onError,
                link.startLine,
                undefined,
                context,
                range
              );
            }
          }
        }
      }
    }
  }
};
