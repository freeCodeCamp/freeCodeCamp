// @ts-check

import { addError } from "../helpers/helpers.cjs";
import { filterByPredicate, getDescendantsByType } from "../helpers/micromark-helpers.cjs";

const intrawordRe = /^\w$/;

/**
 * Return the string representation of a emphasis or strong markup character.
 *
 * @param {string} markup Emphasis or strong string.
 * @returns {"asterisk" | "underscore"} String representation.
 */
function emphasisOrStrongStyleFor(markup) {
  switch (markup[0]) {
    case "*":
      return "asterisk";
    default:
      return "underscore";
  }
};

/**
 * @param {import("markdownlint").RuleParams} params Rule parameters.
 * @param {import("markdownlint").RuleOnError} onError Error-reporting callback.
 * @param {import("micromark-util-types").TokenType} type Token type.
 * @param {import("micromark-util-types").TokenType} typeSequence Token sequence type.
 * @param {"*" | "**"} asterisk Asterisk kind.
 * @param {"_" | "__"} underline Underline kind.
 * @param {"asterisk" | "consistent" | "underscore"} style Style string.
 */
const impl =
  (params, onError, type, typeSequence, asterisk, underline, style = "consistent") => {
    const { lines, parsers } = params;
    const emphasisTokens = filterByPredicate(
      parsers.micromark.tokens,
      (token) => token.type === type,
      (token) => ((token.type === "htmlFlow") ? [] : token.children)
    );
    for (const token of emphasisTokens) {
      const sequences = getDescendantsByType(token, [ typeSequence ]);
      const startSequence = sequences[0];
      const endSequence = sequences[sequences.length - 1];
      if (startSequence && endSequence) {
        const markupStyle = emphasisOrStrongStyleFor(startSequence.text);
        if (style === "consistent") {
          style = markupStyle;
        }
        if (style !== markupStyle) {
          const underscoreIntraword = (style === "underscore") && (
            intrawordRe.test(
              lines[startSequence.startLine - 1][startSequence.startColumn - 2]
            ) ||
            intrawordRe.test(
              lines[endSequence.endLine - 1][endSequence.endColumn - 1]
            )
          );
          if (!underscoreIntraword) {
            for (const sequence of [ startSequence, endSequence ]) {
              addError(
                onError,
                sequence.startLine,
                `Expected: ${style}; Actual: ${markupStyle}`,
                undefined,
                [ sequence.startColumn, sequence.text.length ],
                {
                  "editColumn": sequence.startColumn,
                  "deleteCount": sequence.text.length,
                  "insertText": (style === "asterisk") ? asterisk : underline
                }
              );
            }
          }
        }
      }
    }
  };

/** @type {import("markdownlint").Rule[]} */
export default [
  {
    "names": [ "MD049", "emphasis-style" ],
    "description": "Emphasis style",
    "tags": [ "emphasis" ],
    "parser": "micromark",
    "function": function MD049(params, onError) {
      return impl(
        params,
        onError,
        "emphasis",
        "emphasisSequence",
        "*",
        "_",
        params.config.style || undefined
      );
    }
  },
  {
    "names": [ "MD050", "strong-style" ],
    "description": "Strong style",
    "tags": [ "emphasis" ],
    "parser": "micromark",
    "function": function MD050(params, onError) {
      return impl(
        params,
        onError,
        "strong",
        "strongSequence",
        "**",
        "__",
        params.config.style || undefined
      );
    }
  }
];
