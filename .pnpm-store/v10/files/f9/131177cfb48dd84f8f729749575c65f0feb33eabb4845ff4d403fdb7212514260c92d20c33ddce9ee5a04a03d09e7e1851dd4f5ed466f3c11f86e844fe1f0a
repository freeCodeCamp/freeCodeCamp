"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.generate = generate;
var _sourceMap = require("./source-map.js");
var _printer = require("./printer.js");
function normalizeOptions(code, opts, ast) {
  var _opts$recordAndTupleS;
  if (opts.experimental_preserveFormat) {
    if (typeof code !== "string") {
      throw new Error("`experimental_preserveFormat` requires the original `code` to be passed to @babel/generator as a string");
    }
    if (!opts.retainLines) {
      throw new Error("`experimental_preserveFormat` requires `retainLines` to be set to `true`");
    }
    if (opts.compact && opts.compact !== "auto") {
      throw new Error("`experimental_preserveFormat` is not compatible with the `compact` option");
    }
    if (opts.minified) {
      throw new Error("`experimental_preserveFormat` is not compatible with the `minified` option");
    }
    if (opts.jsescOption) {
      throw new Error("`experimental_preserveFormat` is not compatible with the `jsescOption` option");
    }
    if (!Array.isArray(ast.tokens)) {
      throw new Error("`experimental_preserveFormat` requires the AST to have attached the token of the input code. Make sure to enable the `tokens: true` parser option.");
    }
  }
  const format = {
    auxiliaryCommentBefore: opts.auxiliaryCommentBefore,
    auxiliaryCommentAfter: opts.auxiliaryCommentAfter,
    shouldPrintComment: opts.shouldPrintComment,
    preserveFormat: opts.experimental_preserveFormat,
    retainLines: opts.retainLines,
    retainFunctionParens: opts.retainFunctionParens,
    comments: opts.comments == null || opts.comments,
    compact: opts.compact,
    minified: opts.minified,
    concise: opts.concise,
    indent: {
      adjustMultilineComment: true,
      style: "  "
    },
    jsescOption: Object.assign({
      quotes: "double",
      wrap: true,
      minimal: false
    }, opts.jsescOption),
    topicToken: opts.topicToken
  };
  format.decoratorsBeforeExport = opts.decoratorsBeforeExport;
  format.jsescOption.json = opts.jsonCompatibleStrings;
  format.recordAndTupleSyntaxType = (_opts$recordAndTupleS = opts.recordAndTupleSyntaxType) != null ? _opts$recordAndTupleS : "hash";
  format.importAttributesKeyword = opts.importAttributesKeyword;
  if (format.minified) {
    format.compact = true;
    format.shouldPrintComment = format.shouldPrintComment || (() => format.comments);
  } else {
    format.shouldPrintComment = format.shouldPrintComment || (value => format.comments || value.includes("@license") || value.includes("@preserve"));
  }
  if (format.compact === "auto") {
    format.compact = typeof code === "string" && code.length > 500000;
    if (format.compact) {
      console.error("[BABEL] Note: The code generator has deoptimised the styling of " + `${opts.filename} as it exceeds the max of ${"500KB"}.`);
    }
  }
  if (format.compact || format.preserveFormat) {
    format.indent.adjustMultilineComment = false;
  }
  const {
    auxiliaryCommentBefore,
    auxiliaryCommentAfter,
    shouldPrintComment
  } = format;
  if (auxiliaryCommentBefore && !shouldPrintComment(auxiliaryCommentBefore)) {
    format.auxiliaryCommentBefore = undefined;
  }
  if (auxiliaryCommentAfter && !shouldPrintComment(auxiliaryCommentAfter)) {
    format.auxiliaryCommentAfter = undefined;
  }
  return format;
}
exports.CodeGenerator = class CodeGenerator {
  constructor(ast, opts = {}, code) {
    this._ast = void 0;
    this._format = void 0;
    this._map = void 0;
    this._ast = ast;
    this._format = normalizeOptions(code, opts, ast);
    this._map = opts.sourceMaps ? new _sourceMap.default(opts, code) : null;
  }
  generate() {
    const printer = new _printer.default(this._format, this._map);
    return printer.generate(this._ast);
  }
};
function generate(ast, opts = {}, code) {
  const format = normalizeOptions(code, opts, ast);
  const map = opts.sourceMaps ? new _sourceMap.default(opts, code) : null;
  const printer = new _printer.default(format, map, ast.tokens, typeof code === "string" ? code : null);
  return printer.generate(ast);
}
var _default = exports.default = generate;

//# sourceMappingURL=index.js.map
