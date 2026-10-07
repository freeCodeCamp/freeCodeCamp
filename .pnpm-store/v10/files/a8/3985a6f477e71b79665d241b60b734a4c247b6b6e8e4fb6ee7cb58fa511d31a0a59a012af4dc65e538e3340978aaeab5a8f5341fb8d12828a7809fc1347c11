var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/document/public.js
var public_exports = {};
__export(public_exports, {
  builders: () => builders,
  printer: () => printer,
  utils: () => utils
});

// scripts/build/shims/shared.js
var OPTIONAL_OBJECT = 1;
var createMethodShim = (methodName, getImplementation) => (flags, object, ...arguments_) => {
  if (flags | OPTIONAL_OBJECT && (object === void 0 || object === null)) {
    return;
  }
  const implementation = getImplementation.call(object) ?? object[methodName];
  return implementation.apply(object, arguments_);
};

// scripts/build/shims/method-at.js
function stringOrArrayAt(index) {
  return this[index < 0 ? this.length + index : index];
}
var at = createMethodShim("at", function() {
  if (Array.isArray(this) || typeof this === "string") {
    return stringOrArrayAt;
  }
});
var method_at_default = at;

// src/utilities/noop.js
var noop = () => {
};
var noop_default = noop;

// src/document/builders/types.js
var DOC_TYPE_STRING = (
  /** @type {const} */
  "string"
);
var DOC_TYPE_ARRAY = (
  /** @type {const} */
  "array"
);
var DOC_TYPE_CURSOR = (
  /** @type {const} */
  "cursor"
);
var DOC_TYPE_INDENT = (
  /** @type {const} */
  "indent"
);
var DOC_TYPE_ALIGN = (
  /** @type {const} */
  "align"
);
var DOC_TYPE_TRIM = (
  /** @type {const} */
  "trim"
);
var DOC_TYPE_GROUP = (
  /** @type {const} */
  "group"
);
var DOC_TYPE_FILL = (
  /** @type {const} */
  "fill"
);
var DOC_TYPE_IF_BREAK = (
  /** @type {const} */
  "if-break"
);
var DOC_TYPE_INDENT_IF_BREAK = (
  /** @type {const} */
  "indent-if-break"
);
var DOC_TYPE_LINE_SUFFIX = (
  /** @type {const} */
  "line-suffix"
);
var DOC_TYPE_LINE_SUFFIX_BOUNDARY = (
  /** @type {const} */
  "line-suffix-boundary"
);
var DOC_TYPE_LINE = (
  /** @type {const} */
  "line"
);
var DOC_TYPE_LABEL = (
  /** @type {const} */
  "label"
);
var DOC_TYPE_BREAK_PARENT = (
  /** @type {const} */
  "break-parent"
);
var VALID_OBJECT_DOC_TYPES = /* @__PURE__ */ new Set([
  DOC_TYPE_CURSOR,
  DOC_TYPE_INDENT,
  DOC_TYPE_ALIGN,
  DOC_TYPE_TRIM,
  DOC_TYPE_GROUP,
  DOC_TYPE_FILL,
  DOC_TYPE_IF_BREAK,
  DOC_TYPE_INDENT_IF_BREAK,
  DOC_TYPE_LINE_SUFFIX,
  DOC_TYPE_LINE_SUFFIX_BOUNDARY,
  DOC_TYPE_LINE,
  DOC_TYPE_LABEL,
  DOC_TYPE_BREAK_PARENT
]);

// node_modules/trim-newlines/index.js
function trimNewlinesEnd(string) {
  let end = string.length;
  while (end > 0 && (string[end - 1] === "\r" || string[end - 1] === "\n")) {
    end--;
  }
  return end < string.length ? string.slice(0, end) : string;
}

// src/document/utilities/get-doc-type.js
function getDocType(doc) {
  if (typeof doc === "string") {
    return DOC_TYPE_STRING;
  }
  if (Array.isArray(doc)) {
    return DOC_TYPE_ARRAY;
  }
  if (!doc) {
    return;
  }
  const { type } = doc;
  if (VALID_OBJECT_DOC_TYPES.has(type)) {
    return type;
  }
}
var get_doc_type_default = getDocType;

// src/document/utilities/invalid-doc-error.js
var disjunctionListFormat = (list) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(list);
function getDocErrorMessage(doc) {
  const type = doc === null ? "null" : typeof doc;
  if (type !== "string" && type !== "object") {
    return `Unexpected doc '${type}', 
Expected it to be 'string' or 'object'.`;
  }
  if (get_doc_type_default(doc)) {
    throw new Error("doc is valid.");
  }
  const objectType = Object.prototype.toString.call(doc);
  if (objectType !== "[object Object]") {
    return `Unexpected doc '${objectType}'.`;
  }
  const EXPECTED_TYPE_VALUES = disjunctionListFormat(
    [...VALID_OBJECT_DOC_TYPES].map((type2) => `'${type2}'`)
  );
  return `Unexpected doc.type '${doc.type}'.
Expected it to be ${EXPECTED_TYPE_VALUES}.`;
}
var InvalidDocError = class extends Error {
  name = "InvalidDocError";
  constructor(doc) {
    super(getDocErrorMessage(doc));
    this.doc = doc;
  }
};
var invalid_doc_error_default = InvalidDocError;

// src/document/utilities/traverse-doc.js
var traverseDocOnExitStackMarker = {};
function traverseDoc(doc, onEnter, onExit, shouldTraverseConditionalGroups) {
  const docsStack = [doc];
  while (docsStack.length > 0) {
    const doc2 = docsStack.pop();
    if (doc2 === traverseDocOnExitStackMarker) {
      onExit(docsStack.pop());
      continue;
    }
    if (onExit) {
      docsStack.push(doc2, traverseDocOnExitStackMarker);
    }
    const docType = get_doc_type_default(doc2);
    if (!docType) {
      throw new invalid_doc_error_default(doc2);
    }
    if (onEnter?.(doc2) === false) {
      continue;
    }
    switch (docType) {
      case DOC_TYPE_ARRAY:
      case DOC_TYPE_FILL: {
        const parts = docType === DOC_TYPE_ARRAY ? doc2 : doc2.parts;
        for (let ic = parts.length, i = ic - 1; i >= 0; --i) {
          docsStack.push(parts[i]);
        }
        break;
      }
      case DOC_TYPE_IF_BREAK:
        docsStack.push(doc2.flatContents, doc2.breakContents);
        break;
      case DOC_TYPE_GROUP:
        if (shouldTraverseConditionalGroups && doc2.expandedStates) {
          for (let ic = doc2.expandedStates.length, i = ic - 1; i >= 0; --i) {
            docsStack.push(doc2.expandedStates[i]);
          }
        } else {
          docsStack.push(doc2.contents);
        }
        break;
      case DOC_TYPE_ALIGN:
      case DOC_TYPE_INDENT:
      case DOC_TYPE_INDENT_IF_BREAK:
      case DOC_TYPE_LABEL:
      case DOC_TYPE_LINE_SUFFIX:
        docsStack.push(doc2.contents);
        break;
      case DOC_TYPE_STRING:
      case DOC_TYPE_CURSOR:
      case DOC_TYPE_TRIM:
      case DOC_TYPE_LINE_SUFFIX_BOUNDARY:
      case DOC_TYPE_LINE:
      case DOC_TYPE_BREAK_PARENT:
        break;
      default:
        throw new invalid_doc_error_default(doc2);
    }
  }
}
var traverse_doc_default = traverseDoc;

// src/document/utilities/index.js
function mapDoc(doc, cb) {
  if (typeof doc === "string") {
    return cb(doc);
  }
  const mapped = /* @__PURE__ */ new Map();
  return rec(doc);
  function rec(doc2) {
    if (mapped.has(doc2)) {
      return mapped.get(doc2);
    }
    const result = process2(doc2);
    mapped.set(doc2, result);
    return result;
  }
  function process2(doc2) {
    switch (get_doc_type_default(doc2)) {
      case DOC_TYPE_ARRAY:
        return cb(doc2.map(rec));
      case DOC_TYPE_FILL:
        return cb({
          ...doc2,
          parts: doc2.parts.map(rec)
        });
      case DOC_TYPE_IF_BREAK:
        return cb({
          ...doc2,
          breakContents: rec(doc2.breakContents),
          flatContents: rec(doc2.flatContents)
        });
      case DOC_TYPE_GROUP: {
        let {
          expandedStates,
          contents
        } = doc2;
        if (expandedStates) {
          expandedStates = expandedStates.map(rec);
          contents = expandedStates[0];
        } else {
          contents = rec(contents);
        }
        return cb({
          ...doc2,
          contents,
          expandedStates
        });
      }
      case DOC_TYPE_ALIGN:
      case DOC_TYPE_INDENT:
      case DOC_TYPE_INDENT_IF_BREAK:
      case DOC_TYPE_LABEL:
      case DOC_TYPE_LINE_SUFFIX:
        return cb({
          ...doc2,
          contents: rec(doc2.contents)
        });
      case DOC_TYPE_STRING:
      case DOC_TYPE_CURSOR:
      case DOC_TYPE_TRIM:
      case DOC_TYPE_LINE_SUFFIX_BOUNDARY:
      case DOC_TYPE_LINE:
      case DOC_TYPE_BREAK_PARENT:
        return cb(doc2);
      default:
        throw new invalid_doc_error_default(doc2);
    }
  }
}
function findInDoc(doc, fn, defaultValue) {
  let result = defaultValue;
  let shouldSkipFurtherProcessing = false;
  function findInDocOnEnterFn(doc2) {
    if (shouldSkipFurtherProcessing) {
      return false;
    }
    const maybeResult = fn(doc2);
    if (maybeResult !== void 0) {
      shouldSkipFurtherProcessing = true;
      result = maybeResult;
    }
  }
  traverse_doc_default(doc, findInDocOnEnterFn);
  return result;
}
function willBreakFn(doc) {
  if (doc.type === DOC_TYPE_GROUP && doc.break) {
    return true;
  }
  if (doc.type === DOC_TYPE_LINE && doc.hard) {
    return true;
  }
  if (doc.type === DOC_TYPE_BREAK_PARENT) {
    return true;
  }
}
function willBreak(doc) {
  return findInDoc(doc, willBreakFn, false);
}
function breakParentGroup(groupStack) {
  if (groupStack.length > 0) {
    const parentGroup = method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      groupStack,
      -1
    );
    if (!parentGroup.expandedStates && !parentGroup.break) {
      parentGroup.break = "propagated";
    }
  }
  return null;
}
function propagateBreaks(doc) {
  const alreadyVisitedSet = /* @__PURE__ */ new Set();
  const groupStack = [];
  function propagateBreaksOnEnterFn(doc2) {
    if (doc2.type === DOC_TYPE_BREAK_PARENT) {
      breakParentGroup(groupStack);
    }
    if (doc2.type === DOC_TYPE_GROUP) {
      groupStack.push(doc2);
      if (alreadyVisitedSet.has(doc2)) {
        return false;
      }
      alreadyVisitedSet.add(doc2);
    }
  }
  function propagateBreaksOnExitFn(doc2) {
    if (doc2.type === DOC_TYPE_GROUP) {
      const group2 = groupStack.pop();
      if (group2.break) {
        breakParentGroup(groupStack);
      }
    }
  }
  traverse_doc_default(
    doc,
    propagateBreaksOnEnterFn,
    propagateBreaksOnExitFn,
    /* shouldTraverseConditionalGroups */
    true
  );
}
function removeLinesFn(doc) {
  if (doc.type === DOC_TYPE_LINE && !doc.hard) {
    return doc.soft ? "" : " ";
  }
  if (doc.type === DOC_TYPE_IF_BREAK) {
    return doc.flatContents;
  }
  return doc;
}
function removeLines(doc) {
  return mapDoc(doc, removeLinesFn);
}
function stripTrailingHardlineFromParts(parts) {
  parts = [...parts];
  while (parts.length >= 2 && method_at_default(
    /* OPTIONAL_OBJECT: false */
    0,
    parts,
    -2
  ).type === DOC_TYPE_LINE && method_at_default(
    /* OPTIONAL_OBJECT: false */
    0,
    parts,
    -1
  ).type === DOC_TYPE_BREAK_PARENT) {
    parts.length -= 2;
  }
  if (parts.length > 0) {
    const lastPart = stripTrailingHardlineFromDoc(method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      parts,
      -1
    ));
    parts[parts.length - 1] = lastPart;
  }
  return parts;
}
function stripTrailingHardlineFromDoc(doc) {
  switch (get_doc_type_default(doc)) {
    case DOC_TYPE_INDENT:
    case DOC_TYPE_INDENT_IF_BREAK:
    case DOC_TYPE_GROUP:
    case DOC_TYPE_LINE_SUFFIX:
    case DOC_TYPE_LABEL: {
      const contents = stripTrailingHardlineFromDoc(doc.contents);
      return {
        ...doc,
        contents
      };
    }
    case DOC_TYPE_IF_BREAK:
      return {
        ...doc,
        breakContents: stripTrailingHardlineFromDoc(doc.breakContents),
        flatContents: stripTrailingHardlineFromDoc(doc.flatContents)
      };
    case DOC_TYPE_FILL:
      return {
        ...doc,
        parts: stripTrailingHardlineFromParts(doc.parts)
      };
    case DOC_TYPE_ARRAY:
      return stripTrailingHardlineFromParts(doc);
    case DOC_TYPE_STRING:
      return trimNewlinesEnd(doc);
    case DOC_TYPE_ALIGN:
    case DOC_TYPE_CURSOR:
    case DOC_TYPE_TRIM:
    case DOC_TYPE_LINE_SUFFIX_BOUNDARY:
    case DOC_TYPE_LINE:
    case DOC_TYPE_BREAK_PARENT:
      break;
    default:
      throw new invalid_doc_error_default(doc);
  }
  return doc;
}
function stripTrailingHardline(doc) {
  return stripTrailingHardlineFromDoc(cleanDoc(doc));
}
function cleanDocFn(doc) {
  switch (get_doc_type_default(doc)) {
    case DOC_TYPE_FILL:
      if (doc.parts.every((part) => part === "")) {
        return "";
      }
      break;
    case DOC_TYPE_GROUP:
      if (!doc.contents && !doc.id && !doc.break && !doc.expandedStates) {
        return "";
      }
      if (doc.contents.type === DOC_TYPE_GROUP && doc.contents.id === doc.id && doc.contents.break === doc.break && doc.contents.expandedStates === doc.expandedStates) {
        return doc.contents;
      }
      break;
    case DOC_TYPE_ALIGN:
    case DOC_TYPE_INDENT:
    case DOC_TYPE_INDENT_IF_BREAK:
    case DOC_TYPE_LINE_SUFFIX:
      if (!doc.contents) {
        return "";
      }
      break;
    case DOC_TYPE_IF_BREAK:
      if (!doc.flatContents && !doc.breakContents) {
        return "";
      }
      break;
    case DOC_TYPE_ARRAY: {
      const parts = [];
      for (const part of doc) {
        if (!part) {
          continue;
        }
        const [currentPart, ...restParts] = Array.isArray(part) ? part : [part];
        if (typeof currentPart === "string" && typeof method_at_default(
          /* OPTIONAL_OBJECT: false */
          0,
          parts,
          -1
        ) === "string") {
          parts[parts.length - 1] += currentPart;
        } else {
          parts.push(currentPart);
        }
        parts.push(...restParts);
      }
      if (parts.length === 0) {
        return "";
      }
      if (parts.length === 1) {
        return parts[0];
      }
      return parts;
    }
    case DOC_TYPE_STRING:
    case DOC_TYPE_CURSOR:
    case DOC_TYPE_TRIM:
    case DOC_TYPE_LINE_SUFFIX_BOUNDARY:
    case DOC_TYPE_LINE:
    case DOC_TYPE_LABEL:
    case DOC_TYPE_BREAK_PARENT:
      break;
    default:
      throw new invalid_doc_error_default(doc);
  }
  return doc;
}
function cleanDoc(doc) {
  return mapDoc(doc, (currentDoc) => cleanDocFn(currentDoc));
}
function replaceEndOfLine(doc, replacement = literalline) {
  return mapDoc(doc, (currentDoc) => typeof currentDoc === "string" ? join(replacement, currentDoc.split("\n")) : currentDoc);
}
function canBreakFn(doc) {
  if (doc.type === DOC_TYPE_LINE) {
    return true;
  }
}
function canBreak(doc) {
  return findInDoc(doc, canBreakFn, false);
}

// src/document/utilities/assert-doc.js
var assertDoc = true ? noop_default : (
  /**
  @param {Doc} doc
  */
  function(doc) {
    traverse_doc_default(doc, (doc2) => {
      if (typeof doc2 === "string" || checked.has(doc2)) {
        return false;
      }
      checked.add(doc2);
    });
  }
);
var assertDocArray = true ? noop_default : (
  /**
  @param {readonly Doc[]} docs
  @param {boolean} [optional = false]
  */
  function(docs, optional = false) {
    if (optional && !docs) {
      return;
    }
    if (!Array.isArray(docs)) {
      throw new TypeError("Unexpected doc array.");
    }
    for (const doc of docs) {
      assertDoc(doc);
    }
  }
);
var assertDocFillParts = true ? noop_default : (
  /**
  @param {readonly Doc[]} parts
  */
  function(parts) {
    assertDocArray(parts);
    if (parts.length > 1 && isEmptyDoc(method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      parts,
      -1
    ))) {
      parts = parts.slice(0, -1);
    }
    for (const [i, doc] of parts.entries()) {
      if (i % 2 === 1 && !isValidSeparator(doc)) {
        const type = get_doc_type_default(doc);
        throw new Error(`Unexpected non-line-break doc at ${i}. Doc type is ${type}.`);
      }
    }
  }
);
var assertAlignType = true ? noop_default : function(alignType) {
  if (!(typeof alignType === "number" || typeof alignType === "string" || alignType?.type === "root")) {
    throw new TypeError(`Invalid alignType '${alignType}'.`);
  }
};

// src/document/builders/indent.js
function indent(contents) {
  assertDoc(contents);
  return { type: DOC_TYPE_INDENT, contents };
}

// src/document/builders/align.js
function align(alignType, contents) {
  assertAlignType(alignType);
  assertDoc(contents);
  return { type: DOC_TYPE_ALIGN, contents, n: alignType };
}
function dedentToRoot(contents) {
  return align(Number.NEGATIVE_INFINITY, contents);
}
function markAsRoot(contents) {
  return align({ type: "root" }, contents);
}
function dedent(contents) {
  return align(-1, contents);
}
function addAlignmentToDoc(doc, size, tabWidth) {
  assertDoc(doc);
  let aligned = doc;
  if (size > 0) {
    for (let level = 0; level < Math.floor(size / tabWidth); ++level) {
      aligned = indent(aligned);
    }
    aligned = align(size % tabWidth, aligned);
    aligned = align(Number.NEGATIVE_INFINITY, aligned);
  }
  return aligned;
}

// src/document/builders/break-parent.js
var breakParent = { type: DOC_TYPE_BREAK_PARENT };

// src/document/builders/cursor.js
var cursor = { type: DOC_TYPE_CURSOR };

// src/document/builders/fill.js
function fill(parts) {
  assertDocFillParts(parts);
  return { type: DOC_TYPE_FILL, parts };
}

// src/document/builders/group.js
function group(contents, options = {}) {
  assertDoc(contents);
  assertDocArray(
    options.expandedStates,
    /* optional */
    true
  );
  return {
    type: DOC_TYPE_GROUP,
    id: options.id,
    contents,
    break: Boolean(options.shouldBreak),
    expandedStates: options.expandedStates
  };
}
function conditionalGroup(states, options) {
  return group(states[0], { ...options, expandedStates: states });
}

// src/document/builders/if-break.js
function ifBreak(breakContents, flatContents = "", options = {}) {
  assertDoc(breakContents);
  if (flatContents !== "") {
    assertDoc(flatContents);
  }
  return {
    type: DOC_TYPE_IF_BREAK,
    breakContents,
    flatContents,
    groupId: options.groupId
  };
}

// src/document/builders/indent-if-break.js
function indentIfBreak(contents, options) {
  assertDoc(contents);
  return {
    type: DOC_TYPE_INDENT_IF_BREAK,
    contents,
    groupId: options.groupId,
    negate: options.negate
  };
}

// src/document/builders/join.js
function join(separator, docs) {
  assertDoc(separator);
  assertDocArray(docs);
  const parts = [];
  for (let i = 0; i < docs.length; i++) {
    if (i !== 0) {
      parts.push(separator);
    }
    parts.push(docs[i]);
  }
  return parts;
}

// src/document/builders/label.js
function label(label2, contents) {
  assertDoc(contents);
  return label2 ? { type: DOC_TYPE_LABEL, label: label2, contents } : contents;
}

// src/document/builders/line.js
var line = { type: DOC_TYPE_LINE };
var softline = { type: DOC_TYPE_LINE, soft: true };
var hardlineWithoutBreakParent = { type: DOC_TYPE_LINE, hard: true };
var hardline = [hardlineWithoutBreakParent, breakParent];
var literallineWithoutBreakParent = {
  type: DOC_TYPE_LINE,
  hard: true,
  literal: true
};
var literalline = [literallineWithoutBreakParent, breakParent];

// src/document/builders/line-suffix.js
function lineSuffix(contents) {
  assertDoc(contents);
  return { type: DOC_TYPE_LINE_SUFFIX, contents };
}

// src/document/builders/line-suffix-boundary.js
var lineSuffixBoundary = { type: DOC_TYPE_LINE_SUFFIX_BOUNDARY };

// src/document/builders/trim.js
var trim = { type: DOC_TYPE_TRIM };

// scripts/build/shims/method-replace-all.js
var stringReplaceAll = String.prototype.replaceAll ?? function(pattern, replacement) {
  if (pattern.global) {
    return this.replace(pattern, replacement);
  }
  return this.split(pattern).join(replacement);
};
var replaceAll = createMethodShim("replaceAll", function() {
  if (typeof this === "string") {
    return stringReplaceAll;
  }
});
var method_replace_all_default = replaceAll;

// src/common/end-of-line.js
var OPTION_CR = "cr";
var OPTION_CRLF = "crlf";
var CHARACTER_CR = "\r";
var CHARACTER_CRLF = "\r\n";
var CHARACTER_LF = "\n";
var DEFAULT_EOL = CHARACTER_LF;
function convertEndOfLineOptionToCharacter(endOfLineOption) {
  return endOfLineOption === OPTION_CR ? CHARACTER_CR : endOfLineOption === OPTION_CRLF ? CHARACTER_CRLF : DEFAULT_EOL;
}

// node_modules/emoji-regex/index.mjs
var emoji_regex_default = () => {
  return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
};

// node_modules/get-east-asian-width/lookup.js
function isFullWidth(x) {
  return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
}
function isWide(x) {
  return x >= 4352 && x <= 4447 || x === 8986 || x === 8987 || x === 9001 || x === 9002 || x >= 9193 && x <= 9196 || x === 9200 || x === 9203 || x === 9725 || x === 9726 || x === 9748 || x === 9749 || x >= 9776 && x <= 9783 || x >= 9800 && x <= 9811 || x === 9855 || x >= 9866 && x <= 9871 || x === 9875 || x === 9889 || x === 9898 || x === 9899 || x === 9917 || x === 9918 || x === 9924 || x === 9925 || x === 9934 || x === 9940 || x === 9962 || x === 9970 || x === 9971 || x === 9973 || x === 9978 || x === 9981 || x === 9989 || x === 9994 || x === 9995 || x === 10024 || x === 10060 || x === 10062 || x >= 10067 && x <= 10069 || x === 10071 || x >= 10133 && x <= 10135 || x === 10160 || x === 10175 || x === 11035 || x === 11036 || x === 11088 || x === 11093 || x >= 11904 && x <= 11929 || x >= 11931 && x <= 12019 || x >= 12032 && x <= 12245 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12353 && x <= 12438 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12773 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 42124 || x >= 42128 && x <= 42182 || x >= 43360 && x <= 43388 || x >= 44032 && x <= 55203 || x >= 63744 && x <= 64255 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 94176 && x <= 94180 || x >= 94192 && x <= 94198 || x >= 94208 && x <= 101589 || x >= 101631 && x <= 101662 || x >= 101760 && x <= 101874 || x >= 110576 && x <= 110579 || x >= 110581 && x <= 110587 || x === 110589 || x === 110590 || x >= 110592 && x <= 110882 || x === 110898 || x >= 110928 && x <= 110930 || x === 110933 || x >= 110948 && x <= 110951 || x >= 110960 && x <= 111355 || x >= 119552 && x <= 119638 || x >= 119648 && x <= 119670 || x === 126980 || x === 127183 || x === 127374 || x >= 127377 && x <= 127386 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x === 127568 || x === 127569 || x >= 127584 && x <= 127589 || x >= 127744 && x <= 127776 || x >= 127789 && x <= 127797 || x >= 127799 && x <= 127868 || x >= 127870 && x <= 127891 || x >= 127904 && x <= 127946 || x >= 127951 && x <= 127955 || x >= 127968 && x <= 127984 || x === 127988 || x >= 127992 && x <= 128062 || x === 128064 || x >= 128066 && x <= 128252 || x >= 128255 && x <= 128317 || x >= 128331 && x <= 128334 || x >= 128336 && x <= 128359 || x === 128378 || x === 128405 || x === 128406 || x === 128420 || x >= 128507 && x <= 128591 || x >= 128640 && x <= 128709 || x === 128716 || x >= 128720 && x <= 128722 || x >= 128725 && x <= 128728 || x >= 128732 && x <= 128735 || x === 128747 || x === 128748 || x >= 128756 && x <= 128764 || x >= 128992 && x <= 129003 || x === 129008 || x >= 129292 && x <= 129338 || x >= 129340 && x <= 129349 || x >= 129351 && x <= 129535 || x >= 129648 && x <= 129660 || x >= 129664 && x <= 129674 || x >= 129678 && x <= 129734 || x === 129736 || x >= 129741 && x <= 129756 || x >= 129759 && x <= 129770 || x >= 129775 && x <= 129784 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
}

// src/utilities/narrow-emojis.evaluate.js
var narrow_emojis_evaluate_default = "\xA9\xAE\u203C\u2049\u2122\u2139\u2194\u2195\u2196\u2197\u2198\u2199\u21A9\u21AA\u2328\u23CF\u23F1\u23F2\u23F8\u23F9\u23FA\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600\u2601\u2602\u2603\u2604\u260E\u2611\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694\u2695\u2696\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F1\u26F7\u26F8\u26F9\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05\u2B06\u2B07";

// src/utilities/get-string-width.js
var notAsciiRegex = /[^\x20-\x7F]/u;
var narrowEmojisSet = new Set(narrow_emojis_evaluate_default);
function getStringWidth(text) {
  if (!text) {
    return 0;
  }
  if (!notAsciiRegex.test(text)) {
    return text.length;
  }
  text = text.replace(
    emoji_regex_default(),
    (match) => narrowEmojisSet.has(match) ? " " : "  "
  );
  let width = 0;
  for (const character of text) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    width += isFullWidth(codePoint) || isWide(codePoint) ? 2 : 1;
  }
  return width;
}
var get_string_width_default = getStringWidth;

// src/document/printer/indent.js
var INDENT_COMMAND_TYPE_INDENT = 0;
var INDENT_COMMAND_TYPE_DEDENT = 1;
var INDENT_COMMAND_TYPE_WIDTH = 2;
var INDENT_COMMAND_TYPE_STRING = 3;
var INDENT_COMMAND_INDENT = { type: INDENT_COMMAND_TYPE_INDENT };
var INDENT_COMMAND_DEDENT = { type: INDENT_COMMAND_TYPE_DEDENT };
var ROOT_INDENT = {
  value: "",
  length: 0,
  queue: [],
  get root() {
    return ROOT_INDENT;
  }
};
function generateIndent(indent2, command, options) {
  const queue = command.type === INDENT_COMMAND_TYPE_DEDENT ? indent2.queue.slice(0, -1) : [...indent2.queue, command];
  let value = "";
  let length = 0;
  let lastTabs = 0;
  let lastSpaces = 0;
  for (const command2 of queue) {
    switch (command2.type) {
      case INDENT_COMMAND_TYPE_INDENT:
        flush();
        if (options.useTabs) {
          addTabs(1);
        } else {
          addSpaces(options.tabWidth);
        }
        break;
      case INDENT_COMMAND_TYPE_STRING: {
        const { string } = command2;
        flush();
        value += string;
        length += string.length;
        break;
      }
      case INDENT_COMMAND_TYPE_WIDTH: {
        const { width } = command2;
        lastTabs += 1;
        lastSpaces += width;
        break;
      }
      default:
        throw new Error(`Unexpected indent comment '${command2.type}'.`);
    }
  }
  flushSpaces();
  return { ...indent2, value, length, queue };
  function addTabs(count) {
    value += "	".repeat(count);
    length += options.tabWidth * count;
  }
  function addSpaces(count) {
    value += " ".repeat(count);
    length += count;
  }
  function flush() {
    if (options.useTabs) {
      flushTabs();
    } else {
      flushSpaces();
    }
  }
  function flushTabs() {
    if (lastTabs > 0) {
      addTabs(lastTabs);
    }
    resetLast();
  }
  function flushSpaces() {
    if (lastSpaces > 0) {
      addSpaces(lastSpaces);
    }
    resetLast();
  }
  function resetLast() {
    lastTabs = 0;
    lastSpaces = 0;
  }
}
function makeAlign(indent2, indentOptions, options) {
  if (!indentOptions) {
    return indent2;
  }
  if (indentOptions.type === "root") {
    return { ...indent2, root: indent2 };
  }
  if (indentOptions === Number.NEGATIVE_INFINITY) {
    return indent2.root;
  }
  let command;
  if (typeof indentOptions === "number") {
    if (indentOptions < 0) {
      command = INDENT_COMMAND_DEDENT;
    } else {
      command = { type: INDENT_COMMAND_TYPE_WIDTH, width: indentOptions };
    }
  } else {
    command = { type: INDENT_COMMAND_TYPE_STRING, string: indentOptions };
  }
  return generateIndent(indent2, command, options);
}
function makeIndent(indent2, options) {
  return generateIndent(indent2, INDENT_COMMAND_INDENT, options);
}

// src/document/printer/trim-indentation.js
function getTrailingIndentionLength(text) {
  let length = 0;
  for (let index = text.length - 1; index >= 0; index--) {
    const character = text[index];
    if (character === " " || character === "	") {
      length++;
    } else {
      break;
    }
  }
  return length;
}
function trimIndentation(text) {
  const length = getTrailingIndentionLength(text);
  const trimmed = length === 0 ? text : text.slice(0, text.length - length);
  return { text: trimmed, count: length };
}

// src/document/printer/printer.js
var MODE_BREAK = Symbol("MODE_BREAK");
var MODE_FLAT = Symbol("MODE_FLAT");
var DOC_FILL_PRINTED_LENGTH = Symbol("DOC_FILL_PRINTED_LENGTH");
function fits(next, restCommands, remainingWidth, hasLineSuffix, groupModeMap, mustBeFlat) {
  if (remainingWidth === Number.POSITIVE_INFINITY) {
    return true;
  }
  let restCommandsIndex = restCommands.length;
  let hasPendingSpace = false;
  const commands = [next];
  let output = "";
  while (remainingWidth >= 0) {
    if (commands.length === 0) {
      if (restCommandsIndex === 0) {
        return true;
      }
      commands.push(restCommands[--restCommandsIndex]);
      continue;
    }
    const {
      mode,
      doc
    } = commands.pop();
    const docType = get_doc_type_default(doc);
    switch (docType) {
      case DOC_TYPE_STRING:
        if (doc) {
          if (hasPendingSpace) {
            output += " ";
            remainingWidth -= 1;
            hasPendingSpace = false;
          }
          output += doc;
          remainingWidth -= get_string_width_default(doc);
        }
        break;
      case DOC_TYPE_ARRAY:
      case DOC_TYPE_FILL: {
        const parts = docType === DOC_TYPE_ARRAY ? doc : doc.parts;
        const end = doc[DOC_FILL_PRINTED_LENGTH] ?? 0;
        for (let index = parts.length - 1; index >= end; index--) {
          commands.push({
            mode,
            doc: parts[index]
          });
        }
        break;
      }
      case DOC_TYPE_INDENT:
      case DOC_TYPE_ALIGN:
      case DOC_TYPE_INDENT_IF_BREAK:
      case DOC_TYPE_LABEL:
        commands.push({
          mode,
          doc: doc.contents
        });
        break;
      case DOC_TYPE_TRIM: {
        const {
          text,
          count
        } = trimIndentation(output);
        output = text;
        remainingWidth += count;
        break;
      }
      case DOC_TYPE_GROUP: {
        if (mustBeFlat && doc.break) {
          return false;
        }
        const groupMode = doc.break ? MODE_BREAK : mode;
        const contents = doc.expandedStates && groupMode === MODE_BREAK ? method_at_default(
          /* OPTIONAL_OBJECT: false */
          0,
          doc.expandedStates,
          -1
        ) : doc.contents;
        commands.push({
          mode: groupMode,
          doc: contents
        });
        break;
      }
      case DOC_TYPE_IF_BREAK: {
        const groupMode = doc.groupId ? groupModeMap[doc.groupId] || MODE_FLAT : mode;
        const contents = groupMode === MODE_BREAK ? doc.breakContents : doc.flatContents;
        if (contents) {
          commands.push({
            mode,
            doc: contents
          });
        }
        break;
      }
      case DOC_TYPE_LINE:
        if (mode === MODE_BREAK || doc.hard) {
          return true;
        }
        if (!doc.soft) {
          hasPendingSpace = true;
        }
        break;
      case DOC_TYPE_LINE_SUFFIX:
        hasLineSuffix = true;
        break;
      case DOC_TYPE_LINE_SUFFIX_BOUNDARY:
        if (hasLineSuffix) {
          return false;
        }
        break;
    }
  }
  return false;
}
function printDocToString(doc, options) {
  const groupModeMap = /* @__PURE__ */ Object.create(null);
  const width = options.printWidth;
  const newLine = convertEndOfLineOptionToCharacter(options.endOfLine);
  let position = 0;
  const commands = [{
    indent: ROOT_INDENT,
    mode: MODE_BREAK,
    doc
  }];
  let output = "";
  let shouldRemeasure = false;
  const lineSuffix2 = [];
  const cursorPositions = [];
  const settledOutput = [];
  const settledCursorPositions = [];
  let settledTextLength = 0;
  propagateBreaks(doc);
  while (commands.length > 0) {
    const {
      indent: indent2,
      mode,
      doc: doc2
    } = commands.pop();
    switch (get_doc_type_default(doc2)) {
      case DOC_TYPE_STRING: {
        const formatted2 = newLine !== "\n" ? method_replace_all_default(
          /* OPTIONAL_OBJECT: false */
          0,
          doc2,
          "\n",
          newLine
        ) : doc2;
        if (formatted2) {
          output += formatted2;
          if (commands.length > 0) {
            position += get_string_width_default(formatted2);
          }
        }
        break;
      }
      case DOC_TYPE_ARRAY:
        for (let index = doc2.length - 1; index >= 0; index--) {
          commands.push({
            indent: indent2,
            mode,
            doc: doc2[index]
          });
        }
        break;
      case DOC_TYPE_CURSOR:
        if (cursorPositions.length >= 2) {
          throw new Error("There are too many 'cursor' in doc.");
        }
        cursorPositions.push(settledTextLength + output.length);
        break;
      case DOC_TYPE_INDENT:
        commands.push({
          indent: makeIndent(indent2, options),
          mode,
          doc: doc2.contents
        });
        break;
      case DOC_TYPE_ALIGN:
        commands.push({
          indent: makeAlign(indent2, doc2.n, options),
          mode,
          doc: doc2.contents
        });
        break;
      case DOC_TYPE_TRIM:
        trim2();
        break;
      case DOC_TYPE_GROUP:
        switch (mode) {
          case MODE_FLAT:
            if (!shouldRemeasure) {
              commands.push({
                indent: indent2,
                mode: doc2.break ? MODE_BREAK : MODE_FLAT,
                doc: doc2.contents
              });
              break;
            }
          // fallthrough
          case MODE_BREAK: {
            shouldRemeasure = false;
            const next = {
              indent: indent2,
              mode: MODE_FLAT,
              doc: doc2.contents
            };
            const remainingWidth = width - position;
            const hasLineSuffix = lineSuffix2.length > 0;
            if (!doc2.break && fits(next, commands, remainingWidth, hasLineSuffix, groupModeMap)) {
              commands.push(next);
            } else {
              if (doc2.expandedStates) {
                const mostExpanded = method_at_default(
                  /* OPTIONAL_OBJECT: false */
                  0,
                  doc2.expandedStates,
                  -1
                );
                if (doc2.break) {
                  commands.push({
                    indent: indent2,
                    mode: MODE_BREAK,
                    doc: mostExpanded
                  });
                  break;
                } else {
                  for (let index = 1; index < doc2.expandedStates.length + 1; index++) {
                    if (index >= doc2.expandedStates.length) {
                      commands.push({
                        indent: indent2,
                        mode: MODE_BREAK,
                        doc: mostExpanded
                      });
                      break;
                    } else {
                      const state = doc2.expandedStates[index];
                      const cmd = {
                        indent: indent2,
                        mode: MODE_FLAT,
                        doc: state
                      };
                      if (fits(cmd, commands, remainingWidth, hasLineSuffix, groupModeMap)) {
                        commands.push(cmd);
                        break;
                      }
                    }
                  }
                }
              } else {
                commands.push({
                  indent: indent2,
                  mode: MODE_BREAK,
                  doc: doc2.contents
                });
              }
            }
            break;
          }
        }
        if (doc2.id) {
          groupModeMap[doc2.id] = method_at_default(
            /* OPTIONAL_OBJECT: false */
            0,
            commands,
            -1
          ).mode;
        }
        break;
      // Fills each line with as much code as possible before moving to a new
      // line with the same indentation.
      //
      // Expects doc.parts to be an array of alternating content and
      // whitespace. The whitespace contains the linebreaks.
      //
      // For example:
      //   ["I", line, "love", line, "monkeys"]
      // or
      //   [{ type: group, ... }, softline, { type: group, ... }]
      //
      // It uses this parts structure to handle three main layout cases:
      // * The first two content items fit on the same line without
      //   breaking
      //   -> output the first content item and the whitespace "flat".
      // * Only the first content item fits on the line without breaking
      //   -> output the first content item "flat" and the whitespace with
      //   "break".
      // * Neither content item fits on the line without breaking
      //   -> output the first content item and the whitespace with "break".
      case DOC_TYPE_FILL: {
        const remainingWidth = width - position;
        const offset = doc2[DOC_FILL_PRINTED_LENGTH] ?? 0;
        const {
          parts
        } = doc2;
        const length = parts.length - offset;
        if (length === 0) {
          break;
        }
        const content = parts[offset + 0];
        const whitespace = parts[offset + 1];
        const contentFlatCommand = {
          indent: indent2,
          mode: MODE_FLAT,
          doc: content
        };
        const contentBreakCommand = {
          indent: indent2,
          mode: MODE_BREAK,
          doc: content
        };
        const contentFits = fits(contentFlatCommand, [], remainingWidth, lineSuffix2.length > 0, groupModeMap, true);
        if (length === 1) {
          if (contentFits) {
            commands.push(contentFlatCommand);
          } else {
            commands.push(contentBreakCommand);
          }
          break;
        }
        const whitespaceFlatCommand = {
          indent: indent2,
          mode: MODE_FLAT,
          doc: whitespace
        };
        const whitespaceBreakCommand = {
          indent: indent2,
          mode: MODE_BREAK,
          doc: whitespace
        };
        if (length === 2) {
          if (contentFits) {
            commands.push(whitespaceFlatCommand, contentFlatCommand);
          } else {
            commands.push(whitespaceBreakCommand, contentBreakCommand);
          }
          break;
        }
        const secondContent = parts[offset + 2];
        const remainingCommand = {
          indent: indent2,
          mode,
          doc: {
            ...doc2,
            [DOC_FILL_PRINTED_LENGTH]: offset + 2
          }
        };
        const firstAndSecondContentFlatCommand = {
          indent: indent2,
          mode: MODE_FLAT,
          doc: [content, whitespace, secondContent]
        };
        const firstAndSecondContentFits = fits(firstAndSecondContentFlatCommand, [], remainingWidth, lineSuffix2.length > 0, groupModeMap, true);
        commands.push(remainingCommand);
        if (firstAndSecondContentFits) {
          commands.push(whitespaceFlatCommand, contentFlatCommand);
        } else if (contentFits) {
          commands.push(whitespaceBreakCommand, contentFlatCommand);
        } else {
          commands.push(whitespaceBreakCommand, contentBreakCommand);
        }
        break;
      }
      case DOC_TYPE_IF_BREAK:
      case DOC_TYPE_INDENT_IF_BREAK: {
        const groupMode = doc2.groupId ? groupModeMap[doc2.groupId] : mode;
        if (groupMode === MODE_BREAK) {
          const breakContents = doc2.type === DOC_TYPE_IF_BREAK ? doc2.breakContents : doc2.negate ? doc2.contents : indent(doc2.contents);
          if (breakContents) {
            commands.push({
              indent: indent2,
              mode,
              doc: breakContents
            });
          }
        }
        if (groupMode === MODE_FLAT) {
          const flatContents = doc2.type === DOC_TYPE_IF_BREAK ? doc2.flatContents : doc2.negate ? indent(doc2.contents) : doc2.contents;
          if (flatContents) {
            commands.push({
              indent: indent2,
              mode,
              doc: flatContents
            });
          }
        }
        break;
      }
      case DOC_TYPE_LINE_SUFFIX:
        lineSuffix2.push({
          indent: indent2,
          mode,
          doc: doc2.contents
        });
        break;
      case DOC_TYPE_LINE_SUFFIX_BOUNDARY:
        if (lineSuffix2.length > 0) {
          commands.push({
            indent: indent2,
            mode,
            doc: hardlineWithoutBreakParent
          });
        }
        break;
      case DOC_TYPE_LINE:
        switch (mode) {
          case MODE_FLAT:
            if (!doc2.hard) {
              if (!doc2.soft) {
                output += " ";
                position += 1;
              }
              break;
            } else {
              shouldRemeasure = true;
            }
          // fallthrough
          case MODE_BREAK:
            if (lineSuffix2.length > 0) {
              commands.push({
                indent: indent2,
                mode,
                doc: doc2
              }, ...lineSuffix2.reverse());
              lineSuffix2.length = 0;
              break;
            }
            if (doc2.literal) {
              output += newLine;
              position = 0;
              if (indent2.root) {
                if (indent2.root.value) {
                  output += indent2.root.value;
                }
                position = indent2.root.length;
              }
            } else {
              trim2();
              output += newLine + indent2.value;
              position = indent2.length;
            }
            break;
        }
        break;
      case DOC_TYPE_LABEL:
        commands.push({
          indent: indent2,
          mode,
          doc: doc2.contents
        });
        break;
      case DOC_TYPE_BREAK_PARENT:
        break;
      default:
        throw new invalid_doc_error_default(doc2);
    }
    if (commands.length === 0 && lineSuffix2.length > 0) {
      commands.push(...lineSuffix2.reverse());
      lineSuffix2.length = 0;
    }
  }
  const formatted = settledOutput.join("") + output;
  const finalCursorPositions = [...settledCursorPositions, ...cursorPositions];
  if (finalCursorPositions.length !== 2) {
    return {
      formatted
    };
  }
  const cursorNodeStart = finalCursorPositions[0];
  return {
    formatted,
    cursorNodeStart,
    cursorNodeText: formatted.slice(cursorNodeStart, method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      finalCursorPositions,
      -1
    ))
  };
  function trim2() {
    const {
      text: trimmed,
      count
    } = trimIndentation(output);
    if (trimmed) {
      settledOutput.push(trimmed);
      settledTextLength += trimmed.length;
    }
    output = "";
    position -= count;
    if (cursorPositions.length > 0) {
      settledCursorPositions.push(...cursorPositions.map((position2) => Math.min(position2, settledTextLength)));
      cursorPositions.length = 0;
    }
  }
}

// src/document/public.js
var builders = {
  join,
  line,
  softline,
  hardline,
  literalline,
  group,
  conditionalGroup,
  fill,
  lineSuffix,
  lineSuffixBoundary,
  cursor,
  breakParent,
  ifBreak,
  trim,
  indent,
  indentIfBreak,
  align,
  addAlignmentToDoc,
  markAsRoot,
  dedentToRoot,
  dedent,
  hardlineWithoutBreakParent,
  literallineWithoutBreakParent,
  label,
  // TODO: Remove this in v4
  concat: (parts) => parts
};
var printer = { printDocToString };
var utils = {
  willBreak,
  traverseDoc: traverse_doc_default,
  findInDoc,
  mapDoc,
  removeLines,
  stripTrailingHardline,
  replaceEndOfLine,
  canBreak
};
export {
  builders,
  public_exports as default,
  printer,
  utils
};
