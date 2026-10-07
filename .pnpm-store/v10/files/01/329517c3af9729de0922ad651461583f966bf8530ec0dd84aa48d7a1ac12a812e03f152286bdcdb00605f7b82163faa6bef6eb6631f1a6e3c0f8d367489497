// @ts-check

"use strict";

const micromark = require("./micromark-helpers.cjs");

const { newLineRe, nextLinesRe } = require("./shared.cjs");

module.exports.newLineRe = newLineRe;
module.exports.nextLinesRe = nextLinesRe;

/** @typedef {import("../lib/exports.mjs").RuleOnError} RuleOnError */
/** @typedef {import("../lib/exports.mjs").RuleOnErrorFixInfo} RuleOnErrorFixInfo */
/** @typedef {import("../lib/exports.mjs").MicromarkToken} MicromarkToken */
// eslint-disable-next-line jsdoc/valid-types
/** @typedef {import("micromark-extension-gfm-footnote", { with: { "resolution-mode": "import" } })} */
// eslint-disable-next-line jsdoc/valid-types
/** @typedef {import("../lib/micromark-types.d.mts", { with: { "resolution-mode": "import" } })} */

// Regular expression for matching common front matter (YAML and TOML)
// @ts-ignore
module.exports.frontMatterRe =
  /((^---[^\S\r\n\u2028\u2029]*$[\s\S]+?^---\s*)|(^\+\+\+[^\S\r\n\u2028\u2029]*$[\s\S]+?^(\+\+\+|\.\.\.)\s*)|(^\{[^\S\r\n\u2028\u2029]*$[\s\S]+?^\}\s*))(\r\n|\r|\n|$)/m;

// Regular expression for matching the start of inline disable/enable comments
const inlineCommentStartRe =
  /(<!--\s*markdownlint-(disable|enable|capture|restore|disable-file|enable-file|disable-line|disable-next-line|configure-file))(?:\s|-->)/gi;
module.exports.inlineCommentStartRe = inlineCommentStartRe;

// Regular expression for identifying an HTML entity at the end of a line
module.exports.endOfLineHtmlEntityRe =
  /&(?:#\d+|#[xX][\da-fA-F]+|[a-zA-Z]{2,31}|blk\d{2}|emsp1[34]|frac\d{2}|sup\d|there4);$/;

// Regular expression for identifying a GitHub emoji code at the end of a line
module.exports.endOfLineGemojiCodeRe =
  /:(?:[abmovx]|[-+]1|100|1234|(?:1st|2nd|3rd)_place_medal|8ball|clock\d{1,4}|e-mail|non-potable_water|o2|t-rex|u5272|u5408|u55b6|u6307|u6708|u6709|u6e80|u7121|u7533|u7981|u7a7a|[a-z]{2,15}2?|[a-z]{1,14}(?:_[a-z\d]{1,16})+):$/;

// All punctuation characters (normal and full-width)
const allPunctuation = ".,;:!?。，；：！？";
module.exports.allPunctuation = allPunctuation;

// All punctuation characters without question mark (normal and full-width)
module.exports.allPunctuationNoQuestion = allPunctuation.replace(/[?？]/gu, "");

/**
 * Returns true iff the input is a Number.
 *
 * @param {Object} obj Object of unknown type.
 * @returns {boolean} True iff obj is a Number.
 */
function isNumber(obj) {
  return typeof obj === "number";
}
module.exports.isNumber = isNumber;

/**
 * Returns true iff the input is a String.
 *
 * @param {Object} obj Object of unknown type.
 * @returns {boolean} True iff obj is a String.
 */
function isString(obj) {
  return typeof obj === "string";
}
module.exports.isString = isString;

/**
 * Returns true iff the input String is empty.
 *
 * @param {string} str String of unknown length.
 * @returns {boolean} True iff the input String is empty.
 */
function isEmptyString(str) {
  return str.length === 0;
}
module.exports.isEmptyString = isEmptyString;

/**
 * Returns true iff the input is an Object.
 *
 * @param {Object} obj Object of unknown type.
 * @returns {boolean} True iff obj is an Object.
 */
function isObject(obj) {
  return !!obj && (typeof obj === "object") && !Array.isArray(obj);
}
module.exports.isObject = isObject;

/**
 * Returns true iff the input is a URL.
 *
 * @param {Object} obj Object of unknown type.
 * @returns {boolean} True iff obj is a URL.
 */
function isUrl(obj) {
  return !!obj && (Object.getPrototypeOf(obj) === URL.prototype);
}
module.exports.isUrl = isUrl;

/**
 * Clones the input if it is an Array.
 *
 * @param {Object} arr Object of unknown type.
 * @returns {Object} Clone of obj iff obj is an Array.
 */
function cloneIfArray(arr) {
  return Array.isArray(arr) ? [ ...arr ] : arr;
}
module.exports.cloneIfArray = cloneIfArray;

/**
 * Clones the input if it is a URL.
 *
 * @param {Object | undefined} url Object of unknown type.
 * @returns {Object} Clone of obj iff obj is a URL.
 */
function cloneIfUrl(url) {
  // @ts-ignore
  return isUrl(url) ? new URL(url) : url;
}
module.exports.cloneIfUrl = cloneIfUrl;

/**
 * Gets a Regular Expression for matching the specified HTML attribute.
 *
 * @param {string} name HTML attribute name.
 * @returns {RegExp} Regular Expression for matching.
 */
module.exports.getHtmlAttributeRe = function getHtmlAttributeRe(name) {
  return new RegExp(`\\s${name}\\s*=\\s*['"]?([^'"\\s>]*)`, "iu");
};

/**
 * Returns true iff the input line is blank (contains nothing, whitespace, or
 * comments (unclosed start/end comments allowed)).
 *
 * @param {string} line Input line.
 * @returns {boolean} True iff line is blank.
 */
function isBlankLine(line) {
  const startComment = "<!--";
  const endComment = "-->";
  const removeComments = (/** @type {string} */ s) => {
    while (true) {
      const start = s.indexOf(startComment);
      const end = s.indexOf(endComment);
      if ((end !== -1) && ((start === -1) || (end < start))) {
        // Unmatched end comment is first
        s = s.slice(end + endComment.length);
      } else if ((start !== -1) && (end !== -1)) {
        // Start comment is before end comment
        s = s.slice(0, start) + s.slice(end + endComment.length);
      } else if ((start !== -1) && (end === -1)) {
        // Unmatched start comment is last
        s = s.slice(0, start);
      } else {
        // No more comments to remove
        return s;
      }
    }
  };
  return (
    !line ||
    !line.trim() ||
    !removeComments(line).replace(/>/g, "").trim()
  );
}
module.exports.isBlankLine = isBlankLine;

// Replaces the content of properly-formatted CommonMark comments with "."
// This preserves the line/column information for the rest of the document
// https://spec.commonmark.org/0.29/#html-blocks
// https://spec.commonmark.org/0.29/#html-comment
const htmlCommentBegin = "<!--";
const htmlCommentEnd = "-->";
const safeCommentCharacter = ".";
const startsWithPipeRe = /^ *\|/;
const notCrLfRe = /[^\r\n]/g;
const notSpaceCrLfRe = /[^ \r\n]/g;
const trailingSpaceRe = / +[\r\n]/g;
const replaceTrailingSpace = (/** @type {string} */ s) => s.replace(notCrLfRe, safeCommentCharacter);
module.exports.clearHtmlCommentText = function clearHtmlCommentText(/** @type {string} */ text) {
  let i = 0;
  while ((i = text.indexOf(htmlCommentBegin, i)) !== -1) {
    const j = text.indexOf(htmlCommentEnd, i + 2);
    if (j === -1) {
      // Un-terminated comments are treated as text
      break;
    }
    // If the comment has content...
    if (j > i + htmlCommentBegin.length) {
      const content = text.slice(i + htmlCommentBegin.length, j);
      const lastLf = text.lastIndexOf("\n", i) + 1;
      const preText = text.slice(lastLf, i);
      const isBlock = preText.trim().length === 0;
      const couldBeTable = startsWithPipeRe.test(preText);
      const spansTableCells = couldBeTable && content.includes("\n");
      const isValid =
        isBlock ||
        !(
          spansTableCells ||
          content.startsWith(">") ||
          content.startsWith("->") ||
          content.endsWith("-") ||
          content.includes("--")
        );
      // If a valid block/inline comment...
      if (isValid) {
        const clearedContent = content
          .replace(notSpaceCrLfRe, safeCommentCharacter)
          .replace(trailingSpaceRe, replaceTrailingSpace);
        text =
          text.slice(0, i + htmlCommentBegin.length) +
          clearedContent +
          text.slice(j);
      }
    }
    i = j + htmlCommentEnd.length;
  }
  return text;
};

// Escapes a string for use in a RegExp
module.exports.escapeForRegExp = function escapeForRegExp(/** @type {string} */ str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};

/**
 * Adds ellipsis to the left/right/middle of the specified text.
 *
 * @param {string} text Text to ellipsify.
 * @param {boolean} [start] True iff the start of the text is important.
 * @param {boolean} [end] True iff the end of the text is important.
 * @returns {string} Ellipsified text.
 */
function ellipsify(text, start, end) {
  if (text.length <= 30) {
    // Nothing to do
  } else if (start && end) {
    text = text.slice(0, 15) + "..." + text.slice(-15);
  } else if (end) {
    text = "..." + text.slice(-30);
  } else {
    text = text.slice(0, 30) + "...";
  }
  return text;
}
module.exports.ellipsify = ellipsify;

/**
 * Adds a generic error object via the onError callback.
 *
 * @param {RuleOnError} onError RuleOnError instance.
 * @param {number} lineNumber Line number.
 * @param {string} [detail] Error details.
 * @param {string} [context] Error context.
 * @param {number[]} [range] Column and length of error.
 * @param {RuleOnErrorFixInfo} [fixInfo] RuleOnErrorFixInfo instance.
 * @returns {void}
 */
function addError(onError, lineNumber, detail, context, range, fixInfo) {
  onError({
    lineNumber,
    detail,
    context,
    range,
    fixInfo
  });
}
module.exports.addError = addError;

/**
 * Adds an error object with details conditionally via the onError callback.
 *
 * @param {RuleOnError} onError RuleOnError instance.
 * @param {number} lineNumber Line number.
 * @param {Object} expected Expected value.
 * @param {Object} actual Actual value.
 * @param {string} [detail] Error details.
 * @param {string} [context] Error context.
 * @param {number[]} [range] Column and length of error.
 * @param {RuleOnErrorFixInfo} [fixInfo] RuleOnErrorFixInfo instance.
 * @returns {void}
 */
function addErrorDetailIf(
  onError, lineNumber, expected, actual, detail, context, range, fixInfo) {
  if (expected !== actual) {
    addError(
      onError,
      lineNumber,
      "Expected: " + expected + "; Actual: " + actual +
        (detail ? "; " + detail : ""),
      context,
      range,
      fixInfo);
  }
}
module.exports.addErrorDetailIf = addErrorDetailIf;

/**
 * Adds an error object with context via the onError callback.
 *
 * @param {RuleOnError} onError RuleOnError instance.
 * @param {number} lineNumber Line number.
 * @param {string} context Error context.
 * @param {boolean} [start] True iff the start of the text is important.
 * @param {boolean} [end] True iff the end of the text is important.
 * @param {number[]} [range] Column and length of error.
 * @param {RuleOnErrorFixInfo} [fixInfo] RuleOnErrorFixInfo instance.
 * @returns {void}
 */
function addErrorContext(onError, lineNumber, context, start, end, range, fixInfo) {
  // Normalize new line characters so Linux and Windows trim consistently
  context = ellipsify(context.replace(newLineRe, "\n"), start, end);
  addError(onError, lineNumber, undefined, context, range, fixInfo);
}
module.exports.addErrorContext = addErrorContext;

/**
 * Defines a range within a file (start line/column to end line/column, subset of MicromarkToken).
 *
 * @typedef {Object} FileRange
 * @property {number} startLine Start line (1-based).
 * @property {number} startColumn Start column (1-based).
 * @property {number} endLine End line (1-based).
 * @property {number} endColumn End column (1-based).
 */

/**
 * Returns whether line/column A is less than or equal to line/column B.
 *
 * @param {number} lineA Line A.
 * @param {number} columnA Column A.
 * @param {number} lineB Line B.
 * @param {number} columnB Column B.
 * @returns {boolean} True iff A is less than or equal to B.
 */
const positionLessThanOrEqual = (lineA, columnA, lineB, columnB) => (
  (lineA < lineB) ||
  ((lineA === lineB) && (columnA <= columnB))
);

/**
 * Returns whether two ranges (or MicromarkTokens) overlap anywhere.
 *
 * @param {FileRange|MicromarkToken} rangeA Range A.
 * @param {FileRange|MicromarkToken} rangeB Range B.
 * @returns {boolean} True iff the two ranges overlap.
 */
module.exports.hasOverlap = function hasOverlap(rangeA, rangeB) {
  const lte = positionLessThanOrEqual(rangeA.startLine, rangeA.startColumn, rangeB.startLine, rangeB.startColumn);
  const first = lte ? rangeA : rangeB;
  const second = lte ? rangeB : rangeA;
  return positionLessThanOrEqual(second.startLine, second.startColumn, first.endLine, first.endColumn);
};

// Determines if the front matter includes a title
module.exports.frontMatterHasTitle =
  function frontMatterHasTitle(/** @type {readonly string[]} */ frontMatterLines, /** @type {string} */ frontMatterTitlePattern) {
    const ignoreFrontMatter =
      (frontMatterTitlePattern !== undefined) && !frontMatterTitlePattern;
    const frontMatterTitleRe =
      new RegExp(
        String(frontMatterTitlePattern || "^\\s*\"?title\"?\\s*[:=]"),
        "i"
      );
    return !ignoreFrontMatter &&
      frontMatterLines.some((line) => frontMatterTitleRe.test(line));
  };

/**
 * Result object for getReferenceLinkImageData.
 *
 * @typedef {Object} GetReferenceLinkImageDataResult
 * @property {Map<string, number[][]>} references References.
 * @property {Map<string, number[][]>} shortcuts Shortcuts.
 * @property {Map<string, [number, string]>} definitions Definitions.
 * @property {[string, number][]} duplicateDefinitions Duplicate definitions.
 * @property {number[]} definitionLineIndices Definition line indices.
 */

/**
 * Returns an object with information about reference links and images.
 *
 * @param {MicromarkToken[]} tokens Micromark tokens.
 * @returns {GetReferenceLinkImageDataResult} Reference link/image data.
 */
function getReferenceLinkImageData(tokens) {
  const normalizeReference = (/** @type {string} */ s) => s.toLowerCase().trim().replace(/\s+/g, " ");
  const getText = (/** @type {MicromarkToken} */ t) => t?.children.filter((c) => c.type !== "blockQuotePrefix").map((c) => c.text).join("");
  /** @type {Map<string, number[][]>} */
  const references = new Map();
  /** @type {Map<string, number[][]>} */
  const shortcuts = new Map();
  const addReferenceToDictionary = (/** @type {MicromarkToken} */ token, /** @type {string} */ label, /** @type {boolean} */ isShortcut) => {
    const referenceDatum = [
      token.startLine - 1,
      token.startColumn - 1,
      token.text.length
    ];
    const reference = normalizeReference(label);
    const dictionary = isShortcut ? shortcuts : references;
    const referenceData = dictionary.get(reference) || [];
    referenceData.push(referenceDatum);
    dictionary.set(reference, referenceData);
  };
  /** @type {Map<string, [number, string]>} */
  const definitions = new Map();
  /** @type {number[]} */
  const definitionLineIndices = [];
  /** @type {[string, number][]} */
  const duplicateDefinitions = [];
  const filteredTokens =
    micromark.filterByTypes(
      tokens,
      [
        // definitionLineIndices
        "definition", "gfmFootnoteDefinition",
        // definitions and definitionLineIndices
        "definitionLabelString", "gfmFootnoteDefinitionLabelString",
        // references and shortcuts
        "gfmFootnoteCall", "image", "link",
        // undefined link labels
        "undefinedReferenceCollapsed", "undefinedReferenceFull", "undefinedReferenceShortcut"
      ]
    );
  for (const token of filteredTokens) {
    let labelPrefix = "";
    // eslint-disable-next-line default-case
    switch (token.type) {
      case "definition":
      case "gfmFootnoteDefinition":
        // definitionLineIndices
        for (let i = token.startLine; i <= token.endLine; i++) {
          definitionLineIndices.push(i - 1);
        }
        break;
      case "gfmFootnoteDefinitionLabelString":
        labelPrefix = "^";
      case "definitionLabelString": // eslint-disable-line no-fallthrough
        {
          // definitions and definitionLineIndices
          const reference = normalizeReference(`${labelPrefix}${token.text}`);
          if (definitions.has(reference)) {
            duplicateDefinitions.push([ reference, token.startLine - 1 ]);
          } else {
            const parent =
              micromark.getParentOfType(token, [ "definition" ]);
            const destinationString = parent &&
              micromark.getDescendantsByType(parent, [ "definitionDestination", "definitionDestinationRaw", "definitionDestinationString" ])[0]?.text;
            definitions.set(
              reference,
              [ token.startLine - 1, destinationString || "" ]
            );
          }
        }
        break;
      case "gfmFootnoteCall":
      case "image":
      case "link":
        {
          // Identify if shortcut or full/collapsed
          let isShortcut = (token.children.length === 1);
          const isFullOrCollapsed = (token.children.length === 2) && !token.children.some((t) => t.type === "resource");
          const [ labelText ] = micromark.getDescendantsByType(token, [ "label", "labelText" ]);
          const [ referenceString ] = micromark.getDescendantsByType(token, [ "reference", "referenceString" ]);
          let label = getText(labelText);
          // Identify if footnote
          if (!isShortcut && !isFullOrCollapsed) {
            const [ footnoteCallMarker, footnoteCallString ] = token.children.filter(
              (t) => [ "gfmFootnoteCallMarker", "gfmFootnoteCallString" ].includes(t.type)
            );
            if (footnoteCallMarker && footnoteCallString) {
              label = `${footnoteCallMarker.text}${footnoteCallString.text}`;
              isShortcut = true;
            }
          }
          // Track link (handle shortcuts separately due to ambiguity in "text [text] text")
          if (isShortcut || isFullOrCollapsed) {
            addReferenceToDictionary(token, getText(referenceString) || label, isShortcut);
          }
        }
        break;
      case "undefinedReferenceCollapsed":
      case "undefinedReferenceFull":
      case "undefinedReferenceShortcut":
        {
          const undefinedReference = micromark.getDescendantsByType(token, [ "undefinedReference" ])[0];
          const label = undefinedReference.children.map((t) => t.text).join("");
          const isShortcut = (token.type === "undefinedReferenceShortcut");
          addReferenceToDictionary(token, label, isShortcut);
        }
        break;
    }
  }
  return {
    references,
    shortcuts,
    definitions,
    duplicateDefinitions,
    definitionLineIndices
  };
}
module.exports.getReferenceLinkImageData = getReferenceLinkImageData;

/**
 * Gets the most common line ending, falling back to the platform default.
 *
 * @param {string} input Markdown content to analyze.
 * @param {{EOL: string}} [os] Node.js "os" module.
 * @returns {string} Preferred line ending.
 */
function getPreferredLineEnding(input, os) {
  let cr = 0;
  let lf = 0;
  let crlf = 0;
  const endings = input.match(newLineRe) || [];
  for (const ending of endings) {
    // eslint-disable-next-line default-case
    switch (ending) {
      case "\r":
        cr++;
        break;
      case "\n":
        lf++;
        break;
      case "\r\n":
        crlf++;
        break;
    }
  }
  let preferredLineEnding = null;
  if (!cr && !lf && !crlf) {
    preferredLineEnding = (os && os.EOL) || "\n";
  } else if ((lf >= crlf) && (lf >= cr)) {
    preferredLineEnding = "\n";
  } else if (crlf >= cr) {
    preferredLineEnding = "\r\n";
  } else {
    preferredLineEnding = "\r";
  }
  return preferredLineEnding;
}
module.exports.getPreferredLineEnding = getPreferredLineEnding;

/**
 * Expands a path with a tilde to an absolute path.
 *
 * @param {string} file Path that may begin with a tilde.
 * @param {{homedir: () => string}} os Node.js "os" module.
 * @returns {string} Absolute path (or original path).
 */
function expandTildePath(file, os) {
  const homedir = os && os.homedir && os.homedir();
  return homedir ? file.replace(/^~($|\/|\\)/, `${homedir}$1`) : file;
}
module.exports.expandTildePath = expandTildePath;

/** @typedef {import("../lib/markdownlint.mjs").LintError[]} LintErrors */
/** @typedef {import("../lib/markdownlint.mjs").LintResults} LintResults */

/**
 * Converts lint errors from resultVersion 3 to 2.
 *
 * @param {LintErrors} errors Lint errors (v3).
 * @returns {LintErrors} Lint errors (v2).
 */
function convertLintErrorsVersion3To2(errors) {
  const noPrevious = {
    "ruleNames": [],
    "lineNumber": -1
  };
  return errors.filter((error, index, array) => {
    // @ts-ignore
    delete error.fixInfo;
    // @ts-ignore
    delete error.severity;
    const previous = array[index - 1] || noPrevious;
    return (
      (error.ruleNames[0] !== previous.ruleNames[0]) ||
      (error.lineNumber !== previous.lineNumber)
    );
  });
}

/**
 * Converts lint errors from resultVersion 2 to 1.
 *
 * @param {LintErrors} errors Lint errors (v2).
 * @returns {LintErrors} Lint errors (v1).
 */
function convertLintErrorsVersion2To1(errors) {
  for (const error of errors) {
    // @ts-ignore
    error.ruleName = error.ruleNames[0];
    // @ts-ignore
    error.ruleAlias = error.ruleNames[1] || error.ruleName;
    // @ts-ignore
    delete error.ruleNames;
  }
  return errors;
}

/**
 * Converts lint errors from resultVersion 2 to 0.
 *
 * @param {LintErrors} errors Lint errors (v2).
 * @returns {LintErrors} Lint errors (v0).
 */
function convertLintErrorsVersion2To0(errors) {
  /** @type {Object.<string, number[]>} */
  const dictionary = {};
  for (const error of errors) {
    const ruleName = error.ruleNames[0];
    const ruleLines = dictionary[ruleName] || [];
    ruleLines.push(error.lineNumber);
    dictionary[ruleName] = ruleLines;
  }
  // @ts-ignore
  return dictionary;
}

/**
 * Copies and transforms lint results from resultVersion 3 to ?.
 *
 * @param {LintResults} results Lint results (v3).
 * @param {(errors: LintErrors) => LintErrors} transform Lint errors (v?).
 * @returns {LintResults} Lint results (v?).
 */
function copyAndTransformResults(results, transform) {
  /** @type {Object.<string, LintErrors>} */
  const newResults = {};
  Object.defineProperty(newResults, "toString", { "value": results.toString });
  for (const key of Object.keys(results)) {
    const arr = results[key].map((r) => ({ ...r }));
    newResults[key] = transform(arr);
  }
  // @ts-ignore
  return newResults;
}

/**
 * Converts lint results from resultVersion 3 to 0.
 *
 * @param {LintResults} results Lint results (v3).
 * @returns {LintResults} Lint results (v0).
 */
module.exports.convertToResultVersion0 = function convertToResultVersion0(results) {
  return copyAndTransformResults(results, (r) => convertLintErrorsVersion2To0(convertLintErrorsVersion3To2(r)));
};

/**
 * Converts lint results from resultVersion 3 to 1.
 *
 * @param {LintResults} results Lint results (v3).
 * @returns {LintResults} Lint results (v1).
 */
module.exports.convertToResultVersion1 = function convertToResultVersion1(results) {
  return copyAndTransformResults(results, (r) => convertLintErrorsVersion2To1(convertLintErrorsVersion3To2(r)));
};

/**
 * Converts lint results from resultVersion 3 to 2.
 *
 * @param {LintResults} results Lint results (v3).
 * @returns {LintResults} Lint results (v2).
 */
module.exports.convertToResultVersion2 = function convertToResultVersion2(results) {
  return copyAndTransformResults(results, convertLintErrorsVersion3To2);
};

/**
 * Formats lint results to an array of strings.
 *
 * @param {LintResults|undefined} lintResults Lint results.
 * @returns {string[]} Lint error strings.
 */
module.exports.formatLintResults = function formatLintResults(lintResults) {
  const results = [];
  const entries = Object.entries(lintResults || {});
  entries.sort((a, b) => a[0].localeCompare(b[0]));
  for (const [ source, lintErrors ] of entries) {
    for (const lintError of lintErrors) {
      const { lineNumber, ruleNames, ruleDescription, errorDetail, errorContext, errorRange, severity } = lintError;
      const rule = ruleNames.join("/");
      const line = `:${lineNumber}`;
      const rangeStart = (errorRange && errorRange[0]) || 0;
      const column = rangeStart ? `:${rangeStart}` : "";
      const description = ruleDescription;
      const detail = (errorDetail ? ` [${errorDetail}]` : "");
      const context = (errorContext ? ` [Context: "${errorContext}"]` : "");
      results.push(`${source}${line}${column} ${severity} ${rule} ${description}${detail}${context}`);
    }
  }
  return results;
};
