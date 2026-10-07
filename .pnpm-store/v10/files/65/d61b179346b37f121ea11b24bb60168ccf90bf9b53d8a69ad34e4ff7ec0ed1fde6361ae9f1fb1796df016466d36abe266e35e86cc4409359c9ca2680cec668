// @ts-check

"use strict";

const { newLineRe } = require("../helpers");

// @ts-expect-error https://github.com/microsoft/TypeScript/issues/52529
/** @typedef {import("markdownlint").MarkdownIt} MarkdownIt */
/** @typedef {import("markdownlint").MarkdownItToken} MarkdownItToken */
/** @typedef {import("markdownlint").Plugin} Plugin */

/**
 * @callback InlineCodeSpanCallback
 * @param {string} code Code content.
 * @param {number} lineIndex Line index (0-based).
 * @param {number} columnIndex Column index (0-based).
 * @param {number} ticks Count of backticks.
 * @returns {void}
 */

/**
 * Calls the provided function for each inline code span's content.
 *
 * @param {string} input Markdown content.
 * @param {InlineCodeSpanCallback} handler Callback function taking (code,
 * lineIndex, columnIndex, ticks).
 * @returns {void}
 */
function forEachInlineCodeSpan(input, handler) {
  const backtickRe = /`+/g;
  let match = null;
  const backticksLengthAndIndex = [];
  while ((match = backtickRe.exec(input)) !== null) {
    backticksLengthAndIndex.push([ match[0].length, match.index ]);
  }
  const newLinesIndex = [];
  while ((match = newLineRe.exec(input)) !== null) {
    newLinesIndex.push(match.index);
  }
  let lineIndex = 0;
  let lineStartIndex = 0;
  let k = 0;
  for (let i = 0; i < backticksLengthAndIndex.length - 1; i++) {
    const [ startLength, startIndex ] = backticksLengthAndIndex[i];
    if ((startIndex === 0) || (input[startIndex - 1] !== "\\")) {
      for (let j = i + 1; j < backticksLengthAndIndex.length; j++) {
        const [ endLength, endIndex ] = backticksLengthAndIndex[j];
        if (startLength === endLength) {
          for (; k < newLinesIndex.length; k++) {
            const newLineIndex = newLinesIndex[k];
            if (startIndex < newLineIndex) {
              break;
            }
            lineIndex++;
            lineStartIndex = newLineIndex + 1;
          }
          const columnIndex = startIndex - lineStartIndex + startLength;
          handler(
            input.slice(startIndex + startLength, endIndex),
            lineIndex,
            columnIndex,
            startLength
          );
          i = j;
          break;
        }
      }
    }
  }
}

/**
 * Freeze all freeze-able members of a token and its children.
 *
 * @param {MarkdownItToken} token A markdown-it token.
 * @returns {void}
 */
function freezeToken(token) {
  if (token.attrs) {
    for (const attr of token.attrs) {
      Object.freeze(attr);
    }
    Object.freeze(token.attrs);
  }
  if (token.children) {
    for (const child of token.children) {
      freezeToken(child);
    }
    Object.freeze(token.children);
  }
  if (token.map) {
    Object.freeze(token.map);
  }
  Object.freeze(token);
}

/**
 * Annotate tokens with line/lineNumber and freeze them.
 *
 * @param {import("markdown-it").Token[]} tokens Array of markdown-it tokens.
 * @param {string[]} lines Lines of Markdown content.
 * @returns {void}
 */
function annotateAndFreezeTokens(tokens, lines) {
  let trMap = null;
  /** @type {MarkdownItToken[]} */
  // @ts-ignore
  const markdownItTokens = tokens;
  for (const token of markdownItTokens) {
    // Provide missing maps for table content
    if (token.type === "tr_open") {
      trMap = token.map;
    } else if (token.type === "tr_close") {
      trMap = null;
    }
    if (!token.map && trMap) {
      token.map = [ ...trMap ];
    }
    // Update token metadata
    if (token.map) {
      token.line = lines[token.map[0]];
      token.lineNumber = token.map[0] + 1;
      // Trim bottom of token to exclude whitespace lines
      while (token.map[1] && !((lines[token.map[1] - 1] || "").trim())) {
        token.map[1]--;
      }
    }
    // Annotate children with lineNumber
    if (token.children) {
      /** @type {number[]} */
      const codeSpanExtraLines = [];
      if (token.children.some((child) => child.type === "code_inline")) {
        forEachInlineCodeSpan(token.content, (code) => {
          codeSpanExtraLines.push(code.split(newLineRe).length - 1);
        });
      }
      let lineNumber = token.lineNumber;
      for (const child of token.children) {
        child.lineNumber = lineNumber;
        child.line = lines[lineNumber - 1];
        if ((child.type === "softbreak") || (child.type === "hardbreak")) {
          lineNumber++;
        } else if (child.type === "code_inline") {
          lineNumber += codeSpanExtraLines.shift() || 0;
        }
      }
    }
    freezeToken(token);
  }
  Object.freeze(tokens);
}

/**
 * Gets an array of markdown-it tokens for the input.
 *
 * @param {MarkdownIt} markdownIt Instance of the markdown-it parser.
 * @param {string} content Markdown content.
 * @param {string[]} lines Lines of Markdown content.
 * @returns {MarkdownItToken[]} Array of markdown-it tokens.
 */
function getMarkdownItTokens(markdownIt, content, lines) {
  const tokens = markdownIt.parse(content, {});
  annotateAndFreezeTokens(tokens, lines);
  return tokens;
};

module.exports = {
  forEachInlineCodeSpan,
  getMarkdownItTokens
};
