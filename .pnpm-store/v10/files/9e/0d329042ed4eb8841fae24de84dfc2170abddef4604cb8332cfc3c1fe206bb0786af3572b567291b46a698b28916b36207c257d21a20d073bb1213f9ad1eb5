// @ts-check

import { addErrorDetailIf, escapeForRegExp, hasOverlap } from "../helpers/helpers.cjs";
import { filterByPredicate, filterByTypes } from "../helpers/micromark-helpers.cjs";
import { parse } from "./micromark-parse.mjs";

const ignoredChildTypes = new Set(
  [ "codeFencedFence", "definition", "reference", "resource" ]
);

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD044", "proper-names" ],
  "description": "Proper names should have the correct capitalization",
  "tags": [ "spelling" ],
  "parser": "micromark",
  "function": function MD044(params, onError) {
    let names = params.config.names;
    names = Array.isArray(names) ? names : [];
    names.sort((/** @type {string} */ a, /** @type {string} */ b) => (b.length - a.length) || a.localeCompare(b));
    if (names.length === 0) {
      // Nothing to check; avoid doing any work
      return;
    }
    const codeBlocks = params.config.code_blocks;
    const includeCodeBlocks =
      (codeBlocks === undefined) ? true : !!codeBlocks;
    const htmlElements = params.config.html_elements;
    const includeHtmlElements =
      (htmlElements === undefined) ? true : !!htmlElements;
    const scannedTypes = new Set([ "data" ]);
    if (includeCodeBlocks) {
      scannedTypes.add("codeFlowValue");
      scannedTypes.add("codeTextData");
    }
    if (includeHtmlElements) {
      scannedTypes.add("htmlFlowData");
      scannedTypes.add("htmlTextData");
    }
    const contentTokens =
      filterByPredicate(
        params.parsers.micromark.tokens,
        (token) => scannedTypes.has(token.type),
        (token) => (
          token.children.filter((t) => !ignoredChildTypes.has(t.type))
        )
      );
    /** @type {import("../helpers/helpers.cjs").FileRange[]} */
    const exclusions = [];
    const scannedTokens = new Set();
    for (const name of names) {
      const escapedName = escapeForRegExp(name);
      const startNamePattern = /^\W/.test(name) ? "" : "\\b_*";
      const endNamePattern = /\W$/.test(name) ? "" : "_*\\b";
      const namePattern = `(${startNamePattern})(${escapedName})${endNamePattern}`;
      const nameRe = new RegExp(namePattern, "gi");
      for (const token of contentTokens) {
        let match = null;
        while ((match = nameRe.exec(token.text)) !== null) {
          const [ , leftMatch, nameMatch ] = match;
          const column = token.startColumn + match.index + leftMatch.length;
          const length = nameMatch.length;
          const lineNumber = token.startLine;
          /** @type {import("../helpers/helpers.cjs").FileRange} */
          const nameRange = {
            "startLine": lineNumber,
            "startColumn": column,
            "endLine": lineNumber,
            "endColumn": column + length - 1
          };
          if (
            !names.includes(nameMatch) &&
            !exclusions.some((exclusion) => hasOverlap(exclusion, nameRange))
          ) {
            /** @type {import("../helpers/helpers.cjs").FileRange[]} */
            let autolinkRanges = [];
            if (!scannedTokens.has(token)) {
              autolinkRanges = filterByTypes(parse(token.text), [ "literalAutolink" ])
                .map((tok) => ({
                  "startLine": lineNumber,
                  "startColumn": token.startColumn + tok.startColumn - 1,
                  "endLine": lineNumber,
                  "endColumn": token.endColumn + tok.endColumn - 1
                }));
              exclusions.push(...autolinkRanges);
              scannedTokens.add(token);
            }
            if (!autolinkRanges.some((autolinkRange) => hasOverlap(autolinkRange, nameRange))) {
              addErrorDetailIf(
                onError,
                token.startLine,
                name,
                nameMatch,
                undefined,
                undefined,
                [ column, length ],
                {
                  "editColumn": column,
                  "deleteCount": length,
                  "insertText": name
                }
              );
            }
          }
          exclusions.push(nameRange);
        }
      }
    }
  }
};
