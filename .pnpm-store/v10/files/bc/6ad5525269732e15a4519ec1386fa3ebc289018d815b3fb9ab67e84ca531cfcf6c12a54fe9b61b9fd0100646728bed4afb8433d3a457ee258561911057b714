// @ts-check

"use strict";

const { flatTokensSymbol, htmlFlowSymbol, newLineRe } = require("./shared.cjs");

// eslint-disable-next-line jsdoc/valid-types
/** @typedef {import("micromark-util-types", { with: { "resolution-mode": "import" } }).TokenType} TokenType */
/** @typedef {import("../lib/exports.mjs").MicromarkToken} Token */
// eslint-disable-next-line jsdoc/valid-types
/** @typedef {import("../lib/micromark-types.d.mts", { with: { "resolution-mode": "import" } })} */

/**
 * Determines if a Micromark token is within an htmlFlow type.
 *
 * @param {Token} token Micromark token.
 * @returns {boolean} True iff the token is within an htmlFlow type.
 */
function inHtmlFlow(token) {
  // @ts-ignore
  return Boolean(token[htmlFlowSymbol]);
}

/**
 * Returns whether a token is an htmlFlow type containing an HTML comment.
 *
 * @param {Token} token Micromark token.
 * @returns {boolean} True iff token is htmlFlow containing a comment.
 */
function isHtmlFlowComment(token) {
  const { text, type } = token;
  if (
    (type === "htmlFlow") &&
    text.startsWith("<!--") &&
    text.endsWith("-->")
  ) {
    const comment = text.slice(4, -3);
    return (
      !comment.startsWith(">") &&
      !comment.startsWith("->") &&
      !comment.endsWith("-")
      // The following condition from the CommonMark specification is commented
      // to avoid parsing HTML comments that include "--" because that is NOT a
      // condition of the HTML specification.
      // https://spec.commonmark.org/0.30/#raw-html
      // https://html.spec.whatwg.org/multipage/syntax.html#comments
      // && !comment.includes("--")
    );
  }
  return false;
}

/**
 * Adds a range of numbers to a set.
 *
 * @param {Set<number>} set Set of numbers.
 * @param {number} start Starting number.
 * @param {number} end Ending number.
 * @returns {void}
 */
function addRangeToSet(set, start, end) {
  for (let i = start; i <= end; i++) {
    set.add(i);
  }
}

/**
 * @callback AllowedPredicate
 * @param {Token} token Micromark token.
 * @returns {boolean} True iff allowed.
 */

/**
 * @callback TransformPredicate
 * @param {Token} token Micromark token.
 * @returns {Token[]} Child tokens.
 */

/**
 * Filter a list of Micromark tokens by predicate.
 *
 * @param {Token[]} tokens Micromark tokens.
 * @param {AllowedPredicate} allowed Allowed token predicate.
 * @param {TransformPredicate} [transformChildren] Transform predicate.
 * @returns {Token[]} Filtered tokens.
 */
function filterByPredicate(tokens, allowed, transformChildren) {
  const result = [];
  const queue = [
    {
      "array": tokens,
      "index": 0
    }
  ];
  while (queue.length > 0) {
    const current = queue[queue.length - 1];
    const { array, index } = current;
    if (index < array.length) {
      const token = array[current.index++];
      if (allowed(token)) {
        result.push(token);
      }
      const { children } = token;
      if (children.length > 0) {
        const transformed =
          transformChildren ? transformChildren(token) : children;
        queue.push(
          {
            "array": transformed,
            "index": 0
          }
        );
      }
    } else {
      queue.pop();
    }
  }
  return result;
}

/**
 * Filter a list of Micromark tokens by type.
 *
 * @param {Token[]} tokens Micromark tokens.
 * @param {TokenType[]} types Types to allow.
 * @param {boolean} [htmlFlow] Whether to include htmlFlow content.
 * @returns {Token[]} Filtered tokens.
 */
function filterByTypes(tokens, types, htmlFlow) {
  const predicate = (/** @type {Token} */ token) => types.includes(token.type) && (htmlFlow || !inHtmlFlow(token));
  /** @type {Token[]} */
  const flatTokens =
    // @ts-ignore
    tokens[flatTokensSymbol];
  if (flatTokens) {
    return flatTokens.filter(predicate);
  }
  return filterByPredicate(tokens, predicate);
}

/**
 * Gets the blockquote prefix text (if any) for the specified line number.
 *
 * @param {Token[]} tokens Micromark tokens.
 * @param {number} lineNumber Line number to examine.
 * @param {number} [count] Number of times to repeat.
 * @returns {string} Blockquote prefix text.
 */
function getBlockQuotePrefixText(tokens, lineNumber, count = 1) {
  return filterByTypes(tokens, [ "blockQuotePrefix", "linePrefix" ])
    .filter((prefix) => prefix.startLine === lineNumber)
    .map((prefix) => prefix.text)
    .join("")
    .trimEnd()
    // eslint-disable-next-line unicorn/prefer-spread
    .concat("\n")
    .repeat(count);
};

/**
 * Gets a list of nested Micromark token descendants by type path.
 *
 * @param {Token|Token[]} parent Micromark token parent or parents.
 * @param {(TokenType|TokenType[])[]} typePath Micromark token type path.
 * @returns {Token[]} Micromark token descendants.
 */
function getDescendantsByType(parent, typePath) {
  let tokens = Array.isArray(parent) ? parent : [ parent ];
  for (const type of typePath) {
    const predicate = (/** @type {Token} */ token) => Array.isArray(type) ? type.includes(token.type) : (type === token.type);
    tokens = tokens.flatMap((t) => t.children.filter(predicate));
  }
  return tokens;
}

/**
 * Gets the heading level of a Micromark heading tokan.
 *
 * @param {Token} heading Micromark heading token.
 * @returns {number} Heading level.
 */
function getHeadingLevel(heading) {
  let level = 1;
  const headingSequence = heading.children.find(
    (child) => [ "atxHeadingSequence", "setextHeadingLine" ].includes(child.type)
  );
  // @ts-ignore
  const { text } = headingSequence;
  if (text[0] === "#") {
    level = Math.min(text.length, 6);
  } else if (text[0] === "-") {
    level = 2;
  }
  return level;
}

/**
 * Gets the heading style of a Micromark heading tokan.
 *
 * @param {Token} heading Micromark heading token.
 * @returns {"atx" | "atx_closed" | "setext"} Heading style.
 */
function getHeadingStyle(heading) {
  if (heading.type === "setextHeading") {
    return "setext";
  }
  const atxHeadingSequenceLength = heading.children.filter(
    (child) => child.type === "atxHeadingSequence"
  ).length;
  if (atxHeadingSequenceLength === 1) {
    return "atx";
  }
  return "atx_closed";
}

/**
 * Gets the heading text of a Micromark heading token.
 *
 * @param {Token} heading Micromark heading token.
 * @returns {string} Heading text.
 */
function getHeadingText(heading) {
  return getDescendantsByType(heading, [ [ "atxHeadingText", "setextHeadingText" ] ])
    .flatMap((descendant) => descendant.children.filter((child) => child.type !== "htmlText"))
    .map((data) => data.text)
    .join("")
    .replace(newLineRe, " ");
}

/**
 * HTML tag information.
 *
 * @typedef {Object} HtmlTagInfo
 * @property {boolean} close True iff close tag.
 * @property {string} name Tag name.
 */

/**
 * Gets information about the tag in an HTML token.
 *
 * @param {Token} token Micromark token.
 * @returns {HtmlTagInfo | null} HTML tag information.
 */
function getHtmlTagInfo(token) {
  const htmlTagNameRe = /^<([^!>][^/\s>]*)/;
  if (token.type === "htmlText") {
    const match = htmlTagNameRe.exec(token.text);
    if (match) {
      const name = match[1];
      const close = name.startsWith("/");
      return {
        close,
        "name": close ? name.slice(1) : name
      };
    }
  }
  return null;
}

/**
 * Gets the nearest parent of the specified type for a Micromark token.
 *
 * @param {Token} token Micromark token.
 * @param {TokenType[]} types Types to allow.
 * @returns {Token | null} Parent token.
 */
function getParentOfType(token, types) {
  /** @type {Token | null} */
  let current = token;
  while ((current = current.parent) && !types.includes(current.type)) {
    // Empty
  }
  return current;
}

const docfxTabSyntaxRe = /^#tab\//;

/**
 * Returns whether the specified Micromark token looks like a Docfx tab.
 *
 * @param {Token | null} heading Micromark token.
 * @returns {boolean} True iff the token looks like a Docfx tab.
 */
function isDocfxTab(heading) {
  // See https://dotnet.github.io/docfx/docs/markdown.html?tabs=linux%2Cdotnet#tabs
  if (heading?.type === "atxHeading") {
    const headingTexts = getDescendantsByType(heading, [ "atxHeadingText" ]);
    if ((headingTexts.length === 1) && (headingTexts[0].children.length === 1) && (headingTexts[0].children[0].type === "link")) {
      const resourceDestinationStrings = filterByTypes(headingTexts[0].children[0].children, [ "resourceDestinationString" ]);
      return (resourceDestinationStrings.length === 1) && docfxTabSyntaxRe.test(resourceDestinationStrings[0].text);
    }
  }
  return false;
}

/**
 * Set containing token types that do not contain content.
 *
 * @type {Set<TokenType>}
 */
const nonContentTokens = new Set([
  "blockQuoteMarker",
  "blockQuotePrefix",
  "blockQuotePrefixWhitespace",
  "gfmFootnoteDefinitionIndent",
  "lineEnding",
  "lineEndingBlank",
  "linePrefix",
  "listItemIndent",
  "undefinedReference",
  "undefinedReferenceCollapsed",
  "undefinedReferenceFull",
  "undefinedReferenceShortcut"
]);

module.exports = {
  addRangeToSet,
  filterByPredicate,
  filterByTypes,
  getBlockQuotePrefixText,
  getDescendantsByType,
  getHeadingLevel,
  getHeadingStyle,
  getHeadingText,
  getHtmlTagInfo,
  getParentOfType,
  inHtmlFlow,
  isDocfxTab,
  isHtmlFlowComment,
  nonContentTokens
};
