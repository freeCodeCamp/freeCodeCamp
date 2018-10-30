"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _weakSet = require("babel-runtime/core-js/weak-set");

var _weakSet2 = _interopRequireDefault(_weakSet);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

var _findLast = require("lodash/findLast");

var _findLast2 = _interopRequireDefault(_findLast);

var _isInteger = require("lodash/isInteger");

var _isInteger2 = _interopRequireDefault(_isInteger);

var _repeat = require("lodash/repeat");

var _repeat2 = _interopRequireDefault(_repeat);

var _buffer = require("./buffer");

var _buffer2 = _interopRequireDefault(_buffer);

var _node = require("./node");

var n = _interopRequireWildcard(_node);

var _whitespace = require("./whitespace");

var _whitespace2 = _interopRequireDefault(_whitespace);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCIENTIFIC_NOTATION = /e/i;
var ZERO_DECIMAL_INTEGER = /\.0+$/;
var NON_DECIMAL_LITERAL = /^0[box]/;

var Printer = function () {
  function Printer(format, map, tokens) {
    (0, _classCallCheck3.default)(this, Printer);
    this.inForStatementInitCounter = 0;
    this._printStack = [];
    this._indent = 0;
    this._insideAux = false;
    this._printedCommentStarts = {};
    this._parenPushNewlineState = null;
    this._printAuxAfterOnNextUserNode = false;
    this._printedComments = new _weakSet2.default();
    this._endsWithInteger = false;
    this._endsWithWord = false;

    this.format = format || {};
    this._buf = new _buffer2.default(map);
    this._whitespace = tokens.length > 0 ? new _whitespace2.default(tokens) : null;
  }

  Printer.prototype.generate = function generate(ast) {
    this.print(ast);
    this._maybeAddAuxComment();

    return this._buf.get();
  };

  Printer.prototype.indent = function indent() {
    if (this.format.compact || this.format.concise) return;

    this._indent++;
  };

  Printer.prototype.dedent = function dedent() {
    if (this.format.compact || this.format.concise) return;

    this._indent--;
  };

  Printer.prototype.semicolon = function semicolon() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this._maybeAddAuxComment();
    this._append(";", !force);
  };

  Printer.prototype.rightBrace = function rightBrace() {
    if (this.format.minified) {
      this._buf.removeLastSemicolon();
    }
    this.token("}");
  };

  Printer.prototype.space = function space() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (this.format.compact) return;

    if (this._buf.hasContent() && !this.endsWith(" ") && !this.endsWith("\n") || force) {
      this._space();
    }
  };

  Printer.prototype.word = function word(str) {
    if (this._endsWithWord) this._space();

    this._maybeAddAuxComment();
    this._append(str);

    this._endsWithWord = true;
  };

  Printer.prototype.number = function number(str) {
    this.word(str);

    this._endsWithInteger = (0, _isInteger2.default)(+str) && !NON_DECIMAL_LITERAL.test(str) && !SCIENTIFIC_NOTATION.test(str) && !ZERO_DECIMAL_INTEGER.test(str) && str[str.length - 1] !== ".";
  };

  Printer.prototype.token = function token(str) {
    if (str === "--" && this.endsWith("!") || str[0] === "+" && this.endsWith("+") || str[0] === "-" && this.endsWith("-") || str[0] === "." && this._endsWithInteger) {
      this._space();
    }

    this._maybeAddAuxComment();
    this._append(str);
  };

  Printer.prototype.newline = function newline(i) {
    if (this.format.retainLines || this.format.compact) return;

    if (this.format.concise) {
      this.space();
      return;
    }

    if (this.endsWith("\n\n")) return;

    if (typeof i !== "number") i = 1;

    i = Math.min(2, i);
    if (this.endsWith("{\n") || this.endsWith(":\n")) i--;
    if (i <= 0) return;

    for (var j = 0; j < i; j++) {
      this._newline();
    }
  };

  Printer.prototype.endsWith = function endsWith(str) {
    return this._buf.endsWith(str);
  };

  Printer.prototype.removeTrailingNewline = function removeTrailingNewline() {
    this._buf.removeTrailingNewline();
  };

  Printer.prototype.source = function source(prop, loc) {
    this._catchUp(prop, loc);

    this._buf.source(prop, loc);
  };

  Printer.prototype.withSource = function withSource(prop, loc, cb) {
    this._catchUp(prop, loc);

    this._buf.withSource(prop, loc, cb);
  };

  Printer.prototype._space = function _space() {
    this._append(" ", true);
  };

  Printer.prototype._newline = function _newline() {
    this._append("\n", true);
  };

  Printer.prototype._append = function _append(str) {
    var queue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    this._maybeAddParen(str);
    this._maybeIndent(str);

    if (queue) this._buf.queue(str);else this._buf.append(str);

    this._endsWithWord = false;
    this._endsWithInteger = false;
  };

  Printer.prototype._maybeIndent = function _maybeIndent(str) {
    if (this._indent && this.endsWith("\n") && str[0] !== "\n") {
      this._buf.queue(this._getIndent());
    }
  };

  Printer.prototype._maybeAddParen = function _maybeAddParen(str) {
    var parenPushNewlineState = this._parenPushNewlineState;
    if (!parenPushNewlineState) return;
    this._parenPushNewlineState = null;

    var i = void 0;
    for (i = 0; i < str.length && str[i] === " "; i++) {
      continue;
    }if (i === str.length) return;

    var cha = str[i];
    if (cha === "\n" || cha === "/") {
      this.token("(");
      this.indent();
      parenPushNewlineState.printed = true;
    }
  };

  Printer.prototype._catchUp = function _catchUp(prop, loc) {
    if (!this.format.retainLines) return;

    var pos = loc ? loc[prop] : null;
    if (pos && pos.line !== null) {
      var count = pos.line - this._buf.getCurrentLine();

      for (var i = 0; i < count; i++) {
        this._newline();
      }
    }
  };

  Printer.prototype._getIndent = function _getIndent() {
    return (0, _repeat2.default)(this.format.indent.style, this._indent);
  };

  Printer.prototype.startTerminatorless = function startTerminatorless() {
    return this._parenPushNewlineState = {
      printed: false
    };
  };

  Printer.prototype.endTerminatorless = function endTerminatorless(state) {
    if (state.printed) {
      this.dedent();
      this.newline();
      this.token(")");
    }
  };

  Printer.prototype.print = function print(node, parent) {
    var _this = this;

    if (!node) return;

    var oldConcise = this.format.concise;
    if (node._compact) {
      this.format.concise = true;
    }

    var printMethod = this[node.type];
    if (!printMethod) {
      throw new ReferenceError("unknown node of type " + (0, _stringify2.default)(node.type) + " with constructor " + (0, _stringify2.default)(node && node.constructor.name));
    }

    this._printStack.push(node);

    var oldInAux = this._insideAux;
    this._insideAux = !node.loc;
    this._maybeAddAuxComment(this._insideAux && !oldInAux);

    var needsParens = n.needsParens(node, parent, this._printStack);
    if (this.format.retainFunctionParens && node.type === "FunctionExpression" && node.extra && node.extra.parenthesized) {
      needsParens = true;
    }
    if (needsParens) this.token("(");

    this._printLeadingComments(node, parent);

    var loc = t.isProgram(node) || t.isFile(node) ? null : node.loc;
    this.withSource("start", loc, function () {
      _this[node.type](node, parent);
    });

    this._printTrailingComments(node, parent);

    if (needsParens) this.token(")");

    this._printStack.pop();

    this.format.concise = oldConcise;
    this._insideAux = oldInAux;
  };

  Printer.prototype._maybeAddAuxComment = function _maybeAddAuxComment(enteredPositionlessNode) {
    if (enteredPositionlessNode) this._printAuxBeforeComment();
    if (!this._insideAux) this._printAuxAfterComment();
  };

  Printer.prototype._printAuxBeforeComment = function _printAuxBeforeComment() {
    if (this._printAuxAfterOnNextUserNode) return;
    this._printAuxAfterOnNextUserNode = true;

    var comment = this.format.auxiliaryCommentBefore;
    if (comment) {
      this._printComment({
        type: "CommentBlock",
        value: comment
      });
    }
  };

  Printer.prototype._printAuxAfterComment = function _printAuxAfterComment() {
    if (!this._printAuxAfterOnNextUserNode) return;
    this._printAuxAfterOnNextUserNode = false;

    var comment = this.format.auxiliaryCommentAfter;
    if (comment) {
      this._printComment({
        type: "CommentBlock",
        value: comment
      });
    }
  };

  Printer.prototype.getPossibleRaw = function getPossibleRaw(node) {
    var extra = node.extra;
    if (extra && extra.raw != null && extra.rawValue != null && node.value === extra.rawValue) {
      return extra.raw;
    }
  };

  Printer.prototype.printJoin = function printJoin(nodes, parent) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!nodes || !nodes.length) return;

    if (opts.indent) this.indent();

    var newlineOpts = {
      addNewlines: opts.addNewlines
    };

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!node) continue;

      if (opts.statement) this._printNewline(true, node, parent, newlineOpts);

      this.print(node, parent);

      if (opts.iterator) {
        opts.iterator(node, i);
      }

      if (opts.separator && i < nodes.length - 1) {
        opts.separator.call(this);
      }

      if (opts.statement) this._printNewline(false, node, parent, newlineOpts);
    }

    if (opts.indent) this.dedent();
  };

  Printer.prototype.printAndIndentOnComments = function printAndIndentOnComments(node, parent) {
    var indent = !!node.leadingComments;
    if (indent) this.indent();
    this.print(node, parent);
    if (indent) this.dedent();
  };

  Printer.prototype.printBlock = function printBlock(parent) {
    var node = parent.body;

    if (!t.isEmptyStatement(node)) {
      this.space();
    }

    this.print(node, parent);
  };

  Printer.prototype._printTrailingComments = function _printTrailingComments(node, parent) {
    this._printComments(this._getComments(false, node, parent));
  };

  Printer.prototype._printLeadingComments = function _printLeadingComments(node, parent) {
    this._printComments(this._getComments(true, node, parent));
  };

  Printer.prototype.printInnerComments = function printInnerComments(node) {
    var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (!node.innerComments) return;
    if (indent) this.indent();
    this._printComments(node.innerComments);
    if (indent) this.dedent();
  };

  Printer.prototype.printSequence = function printSequence(nodes, parent) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    opts.statement = true;
    return this.printJoin(nodes, parent, opts);
  };

  Printer.prototype.printList = function printList(items, parent) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (opts.separator == null) {
      opts.separator = commaSeparator;
    }

    return this.printJoin(items, parent, opts);
  };

  Printer.prototype._printNewline = function _printNewline(leading, node, parent, opts) {
    var _this2 = this;

    if (this.format.retainLines || this.format.compact) return;

    if (this.format.concise) {
      this.space();
      return;
    }

    var lines = 0;

    if (node.start != null && !node._ignoreUserWhitespace && this._whitespace) {
      if (leading) {
        var _comments = node.leadingComments;
        var _comment = _comments && (0, _find2.default)(_comments, function (comment) {
          return !!comment.loc && _this2.format.shouldPrintComment(comment.value);
        });

        lines = this._whitespace.getNewlinesBefore(_comment || node);
      } else {
        var _comments2 = node.trailingComments;
        var _comment2 = _comments2 && (0, _findLast2.default)(_comments2, function (comment) {
          return !!comment.loc && _this2.format.shouldPrintComment(comment.value);
        });

        lines = this._whitespace.getNewlinesAfter(_comment2 || node);
      }
    } else {
      if (!leading) lines++;
      if (opts.addNewlines) lines += opts.addNewlines(leading, node) || 0;

      var needs = n.needsWhitespaceAfter;
      if (leading) needs = n.needsWhitespaceBefore;
      if (needs(node, parent)) lines++;

      if (!this._buf.hasContent()) lines = 0;
    }

    this.newline(lines);
  };

  Printer.prototype._getComments = function _getComments(leading, node) {
    return node && (leading ? node.leadingComments : node.trailingComments) || [];
  };

  Printer.prototype._printComment = function _printComment(comment) {
    var _this3 = this;

    if (!this.format.shouldPrintComment(comment.value)) return;

    if (comment.ignore) return;

    if (this._printedComments.has(comment)) return;
    this._printedComments.add(comment);

    if (comment.start != null) {
      if (this._printedCommentStarts[comment.start]) return;
      this._printedCommentStarts[comment.start] = true;
    }

    this.newline(this._whitespace ? this._whitespace.getNewlinesBefore(comment) : 0);

    if (!this.endsWith("[") && !this.endsWith("{")) this.space();

    var val = comment.type === "CommentLine" ? "//" + comment.value + "\n" : "/*" + comment.value + "*/";

    if (comment.type === "CommentBlock" && this.format.indent.adjustMultilineComment) {
      var offset = comment.loc && comment.loc.start.column;
      if (offset) {
        var newlineRegex = new RegExp("\\n\\s{1," + offset + "}", "g");
        val = val.replace(newlineRegex, "\n");
      }

      var indentSize = Math.max(this._getIndent().length, this._buf.getCurrentColumn());
      val = val.replace(/\n(?!$)/g, "\n" + (0, _repeat2.default)(" ", indentSize));
    }

    this.withSource("start", comment.loc, function () {
      _this3._append(val);
    });

    this.newline((this._whitespace ? this._whitespace.getNewlinesAfter(comment) : 0) + (comment.type === "CommentLine" ? -1 : 0));
  };

  Printer.prototype._printComments = function _printComments(comments) {
    if (!comments || !comments.length) return;

    for (var _iterator = comments, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var _comment3 = _ref;

      this._printComment(_comment3);
    }
  };

  return Printer;
}();

exports.default = Printer;


function commaSeparator() {
  this.token(",");
  this.space();
}

var _arr = [require("./generators/template-literals"), require("./generators/expressions"), require("./generators/statements"), require("./generators/classes"), require("./generators/methods"), require("./generators/modules"), require("./generators/types"), require("./generators/flow"), require("./generators/base"), require("./generators/jsx")];
for (var _i2 = 0; _i2 < _arr.length; _i2++) {
  var generator = _arr[_i2];
  (0, _assign2.default)(Printer.prototype, generator);
}
module.exports = exports["default"];