// @ts-check

import { directive } from "micromark-extension-directive";
import { gfmAutolinkLiteral } from "micromark-extension-gfm-autolink-literal";
import { gfmFootnote } from "micromark-extension-gfm-footnote";
import { gfmTable } from "micromark-extension-gfm-table";
import { math } from "micromark-extension-math";
import { parse as micromarkParse, postprocess as micromarkPostprocess, preprocess as micromarkPreprocess } from "micromark";
// micromark-core-commonmark must exactly match what's used by micromark for the shim below to work correctly
// Unfortunately, omitting this dependency from package.json breaks strict dependency resolution (e.g., pnpm)
import { labelEnd } from "micromark-core-commonmark";
import { isHtmlFlowComment } from "../helpers/micromark-helpers.cjs";
import { flatTokensSymbol, htmlFlowSymbol, newLineRe } from "../helpers/shared.cjs";

/** @typedef {import("micromark-util-types").Event} Event */
/** @typedef {import("micromark-util-types").ParseOptions} MicromarkParseOptions */
/** @typedef {import("micromark-util-types").State} State */
/** @typedef {import("micromark-util-types").Token} Token */
/** @typedef {import("micromark-util-types").Tokenizer} Tokenizer */
/** @typedef {import("markdownlint").MicromarkToken} MicromarkToken */
/** @typedef {import("./micromark-types.d.mts")} */

/**
 * Gets the Markdown text for a Micromark token.
 *
 * @param {string} markdown Markdown content.
 * @param {Token} token Micromark token.
 * @returns {string} Token text.
 */
function getText(markdown, token) {
  return markdown.slice(token.start.offset, token.end.offset);
}

/**
 * Parse options.
 *
 * @typedef {Object} ParseOptions
 * @property {boolean} [freezeTokens] Whether to freeze output Tokens.
 */

/**
 * Parses a Markdown document and returns Micromark events.
 *
 * @param {string} markdown Markdown document.
 * @param {MicromarkParseOptions} [micromarkParseOptions] Options for micromark.
 * @returns {Event[]} Micromark events.
 */
export function getEvents(
  markdown,
  micromarkParseOptions = {}
) {
  // Customize extensions list to add useful extensions
  const extensions = [
    directive(),
    gfmAutolinkLiteral(),
    gfmFootnote(),
    gfmTable(),
    math(),
    ...(micromarkParseOptions.extensions || [])
  ];

  // // Shim labelEnd to identify undefined link labels
  /** @type {Event[][]} */
  const artificialEventLists = [];
  const tokenizeOriginal = labelEnd.tokenize;

  /** @type {Tokenizer} */
  function tokenizeShim(effects, okOriginal, nokOriginal) {
    // eslint-disable-next-line consistent-this, unicorn/no-this-assignment, no-invalid-this
    const tokenizeContext = this;
    const events = tokenizeContext.events;

    /** @type {State} */
    const nokShim = (code) => {
      // Find start of label (image or link)
      let indexStart = events.length;
      while (--indexStart >= 0) {
        const event = events[indexStart];
        const [ kind, token ] = event;
        if (kind === "enter") {
          const { type } = token;
          if ((type === "labelImage") || (type === "labelLink")) {
            // Found it
            break;
          }
        }
      }

      // If found...
      if (indexStart >= 0) {
        // Create artificial enter/exit events and replicate all data/lineEnding events within
        const eventStart = events[indexStart];
        const [ , eventStartToken ] = eventStart;
        const eventEnd = events[events.length - 1];
        const [ , eventEndToken ] = eventEnd;
        /** @type {Token} */
        const undefinedReferenceType = {
          "type": "undefinedReferenceShortcut",
          "start": eventStartToken.start,
          "end": eventEndToken.end
        };
        /** @type {Token} */
        const undefinedReference = {
          "type": "undefinedReference",
          "start": eventStartToken.start,
          "end": eventEndToken.end
        };
        const eventsToReplicate = events
          .slice(indexStart)
          .filter((event) => {
            const [ , eventToken ] = event;
            const { type } = eventToken;
            return (type === "data") || (type === "lineEnding");
          });

        // Determine the type of the undefined reference
        const previousUndefinedEvent = (artificialEventLists.length > 0) && artificialEventLists[artificialEventLists.length - 1][0];
        const previousUndefinedToken = previousUndefinedEvent && previousUndefinedEvent[1];
        if (
          previousUndefinedToken &&
          (previousUndefinedToken.end.line === undefinedReferenceType.start.line) &&
          (previousUndefinedToken.end.column === undefinedReferenceType.start.column)
        ) {
          // Previous undefined reference event is immediately before this one
          if (eventsToReplicate.length === 0) {
            // The pair represent a collapsed reference (ex: [...][])
            previousUndefinedToken.type = "undefinedReferenceCollapsed";
            previousUndefinedToken.end = eventEndToken.end;
          } else {
            // The pair represent a full reference (ex: [...][...])
            undefinedReferenceType.type = "undefinedReferenceFull";
            undefinedReferenceType.start = previousUndefinedToken.start;
            artificialEventLists.pop();
          }
        }

        // Create artificial event list and replicate content
        const text = eventsToReplicate
          .filter((event) => event[0] === "enter")
          .map((event) => getText(markdown, event[1]))
          .join("")
          .trim();
        if ((text.length > 0) && !text.includes("]")) {
          /** @type {Event[]} */
          const artificialEvents = [
            [ "enter", undefinedReferenceType, tokenizeContext ],
            [ "enter", undefinedReference, tokenizeContext ]
          ];
          for (const event of eventsToReplicate) {
            const [ kind, token ] = event;
            // Copy token because the current object will get modified by the parser
            artificialEvents.push([ kind, { ...token }, tokenizeContext ]);
          }
          artificialEvents.push(
            [ "exit", undefinedReference, tokenizeContext ],
            [ "exit", undefinedReferenceType, tokenizeContext ]
          );
          artificialEventLists.push(artificialEvents);
        }
      }

      // Continue with original behavior
      return nokOriginal(code);
    };

    // Shim nok handler of labelEnd's tokenize
    return tokenizeOriginal.call(tokenizeContext, effects, okOriginal, nokShim);
  }

  try {
    // Shim labelEnd behavior to detect undefined references
    labelEnd.tokenize = tokenizeShim;

    // Use micromark to parse document into Events
    const encoding = undefined;
    const eol = true;
    const parseContext = micromarkParse({ ...micromarkParseOptions, extensions });
    const chunks = micromarkPreprocess()(markdown, encoding, eol);
    const events = micromarkPostprocess(parseContext.document().write(chunks));

    // Append artificial events and return all events
    // eslint-disable-next-line unicorn/prefer-spread
    return events.concat(...artificialEventLists);
  } finally {
    // Restore shimmed labelEnd behavior
    labelEnd.tokenize = tokenizeOriginal;
  }
}

/**
 * Parses a Markdown document and returns micromark tokens (internal).
 *
 * @param {string} markdown Markdown document.
 * @param {ParseOptions} [parseOptions] Options.
 * @param {MicromarkParseOptions} [micromarkParseOptions] Options for micromark.
 * @param {number} [lineDelta] Offset for start/end line.
 * @param {MicromarkToken} [ancestor] Parent of top-most tokens.
 * @returns {MicromarkToken[]} Micromark tokens.
 */
function parseInternal(
  markdown,
  parseOptions = {},
  micromarkParseOptions = {},
  lineDelta = 0,
  ancestor = undefined
) {
  // Get options
  const freezeTokens = Boolean(parseOptions.freezeTokens);

  // Use micromark to parse document into Events
  const events = getEvents(markdown, micromarkParseOptions);

  // Create Token objects
  /** @type {MicromarkToken[]} */
  const document = [];
  /** @type {MicromarkToken[]} */
  let flatTokens = [];
  /** @type {MicromarkToken} */
  const root = {
    "type": "data",
    "startLine": -1,
    "startColumn": -1,
    "endLine": -1,
    "endColumn": -1,
    "text": "ROOT",
    "children": document,
    "parent": null
  };
  const history = [ root ];
  let current = root;
  /** @type {MicromarkParseOptions | null} */
  let reparseOptions = null;
  let lines = null;
  let skipHtmlFlowChildren = false;
  for (const event of events) {
    const [ kind, token ] = event;
    const { type, start, end } = token;
    const { "column": startColumn, "line": startLine } = start;
    const { "column": endColumn, "line": endLine } = end;
    const text = getText(markdown, token);
    if ((kind === "enter") && !skipHtmlFlowChildren) {
      const previous = current;
      history.push(previous);
      current = {
        type,
        "startLine": startLine + lineDelta,
        startColumn,
        "endLine": endLine + lineDelta,
        endColumn,
        text,
        "children": [],
        "parent": ((previous === root) ? (ancestor || null) : previous)
      };
      if (ancestor) {
        Object.defineProperty(current, htmlFlowSymbol, { "value": true });
      }
      previous.children.push(current);
      flatTokens.push(current);
      if ((current.type === "htmlFlow") && !isHtmlFlowComment(current)) {
        skipHtmlFlowChildren = true;
        if (!reparseOptions || !lines) {
          reparseOptions = {
            ...micromarkParseOptions,
            "extensions": [
              {
                "disable": {
                  "null": [ "codeIndented", "htmlFlow" ]
                }
              }
            ]
          };
          lines = markdown.split(newLineRe);
        }
        const reparseMarkdown = lines
          .slice(current.startLine - 1, current.endLine)
          .join("\n");
        const tokens = parseInternal(
          reparseMarkdown,
          parseOptions,
          reparseOptions,
          current.startLine - 1,
          current
        );
        current.children = tokens;
        // Avoid stack overflow of Array.push(...spread)
        // @ts-ignore
        // eslint-disable-next-line unicorn/prefer-spread
        flatTokens = flatTokens.concat(tokens[flatTokensSymbol]);
      }
    } else if (kind === "exit") {
      if (type === "htmlFlow") {
        skipHtmlFlowChildren = false;
      }
      if (!skipHtmlFlowChildren) {
        if (freezeTokens) {
          Object.freeze(current.children);
          Object.freeze(current);
        }
        // @ts-ignore
        current = history.pop();
      }
    }
  }

  // Return document
  Object.defineProperty(document, flatTokensSymbol, { "value": flatTokens });
  if (freezeTokens) {
    Object.freeze(document);
  }
  return document;
}

/**
 * Parses a Markdown document and returns micromark tokens.
 *
 * @param {string} markdown Markdown document.
 * @param {ParseOptions} [parseOptions] Options.
 * @returns {MicromarkToken[]} Micromark tokens.
 */
export function parse(markdown, parseOptions) {
  return parseInternal(markdown, parseOptions);
}
