"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _buffer = require("./buffer.js");
var _index = require("./node/index.js");
var _nodes = require("./nodes.js");
var _t = require("@babel/types");
var _tokenMap = require("./token-map.js");
var _types2 = require("./generators/types.js");
const {
  isExpression,
  isFunction,
  isStatement,
  isClassBody,
  isTSInterfaceBody,
  isTSEnumMember
} = _t;
const SCIENTIFIC_NOTATION = /e/i;
const ZERO_DECIMAL_INTEGER = /\.0+$/;
const HAS_NEWLINE = /[\n\r\u2028\u2029]/;
const HAS_NEWLINE_OR_BlOCK_COMMENT_END = /[\n\r\u2028\u2029]|\*\//;
function commentIsNewline(c) {
  return c.type === "CommentLine" || HAS_NEWLINE.test(c.value);
}
class Printer {
  constructor(format, map, tokens = null, originalCode = null) {
    this.tokenContext = _index.TokenContext.normal;
    this._tokens = null;
    this._originalCode = null;
    this._currentNode = null;
    this._currentTypeId = null;
    this._indent = 0;
    this._indentRepeat = 0;
    this._insideAux = false;
    this._noLineTerminator = false;
    this._noLineTerminatorAfterNode = null;
    this._printAuxAfterOnNextUserNode = false;
    this._printedComments = new Set();
    this._lastCommentLine = 0;
    this._innerCommentsState = 0;
    this._flags = 0;
    this.tokenMap = null;
    this._boundGetRawIdentifier = null;
    this._printSemicolonBeforeNextNode = -1;
    this._printSemicolonBeforeNextToken = -1;
    this.format = format;
    this._tokens = tokens;
    this._originalCode = originalCode;
    this._indentRepeat = format.indent.style.length;
    this._inputMap = (map == null ? void 0 : map._inputMap) || null;
    this._buf = new _buffer.default(map, format.indent.style[0]);
    const {
      preserveFormat,
      compact,
      concise,
      retainLines,
      retainFunctionParens
    } = format;
    if (preserveFormat) {
      this._flags |= 1;
    }
    if (compact) {
      this._flags |= 2;
    }
    if (concise) {
      this._flags |= 4;
    }
    if (retainLines) {
      this._flags |= 8;
    }
    if (retainFunctionParens) {
      this._flags |= 16;
    }
    if (format.auxiliaryCommentBefore || format.auxiliaryCommentAfter) {
      this._flags |= 32;
    }
  }
  enterDelimited() {
    const oldNoLineTerminatorAfterNode = this._noLineTerminatorAfterNode;
    if (oldNoLineTerminatorAfterNode !== null) {
      this._noLineTerminatorAfterNode = null;
    }
    return oldNoLineTerminatorAfterNode;
  }
  generate(ast) {
    if (this.format.preserveFormat) {
      this.tokenMap = new _tokenMap.TokenMap(ast, this._tokens, this._originalCode);
      this._boundGetRawIdentifier = _types2._getRawIdentifier.bind(this);
    }
    this.print(ast);
    this._maybeAddAuxComment();
    return this._buf.get();
  }
  indent(flags = this._flags) {
    if (flags & (1 | 2 | 4)) {
      return;
    }
    this._indent += this._indentRepeat;
  }
  dedent(flags = this._flags) {
    if (flags & (1 | 2 | 4)) {
      return;
    }
    this._indent -= this._indentRepeat;
  }
  semicolon(force = false) {
    const flags = this._flags;
    if (flags & 32) {
      this._maybeAddAuxComment();
    }
    if (flags & 1) {
      const node = this._currentNode;
      if (node.start != null && node.end != null) {
        if (!this.tokenMap.endMatches(node, ";")) {
          this._printSemicolonBeforeNextNode = this._buf.getCurrentLine();
          return;
        }
        const indexes = this.tokenMap.getIndexes(this._currentNode);
        this._catchUpTo(this._tokens[indexes[indexes.length - 1]].loc.start);
      }
    }
    if (force) {
      this._appendChar(59);
    } else {
      this._queue(59);
    }
    this._noLineTerminator = false;
  }
  rightBrace(node) {
    if (this.format.minified) {
      this._buf.removeLastSemicolon();
    }
    this.sourceWithOffset("end", node.loc, -1);
    this.tokenChar(125);
  }
  rightParens(node) {
    this.sourceWithOffset("end", node.loc, -1);
    this.tokenChar(41);
  }
  space(force = false) {
    if (this._flags & (1 | 2)) {
      return;
    }
    if (force) {
      this._space();
    } else {
      const lastCp = this.getLastChar(true);
      if (lastCp !== 0 && lastCp !== 32 && lastCp !== 10) {
        this._space();
      }
    }
  }
  word(str, noLineTerminatorAfter = false) {
    this.tokenContext &= _index.TokenContext.forInOrInitHeadAccumulatePassThroughMask;
    this._maybePrintInnerComments(str);
    const flags = this._flags;
    if (flags & 32) {
      this._maybeAddAuxComment();
    }
    if (flags & 1) this._catchUpToCurrentToken(str);
    const lastChar = this.getLastChar();
    if (lastChar === -2 || lastChar === -3 || lastChar === 47 && str.charCodeAt(0) === 47) {
      this._space();
    }
    this._append(str, false);
    this.setLastChar(-3);
    this._noLineTerminator = noLineTerminatorAfter;
  }
  number(str, number) {
    function isNonDecimalLiteral(str) {
      if (str.length > 2 && str.charCodeAt(0) === 48) {
        const secondChar = str.charCodeAt(1);
        return secondChar === 98 || secondChar === 111 || secondChar === 120;
      }
      return false;
    }
    this.word(str);
    if (Number.isInteger(number) && !isNonDecimalLiteral(str) && !SCIENTIFIC_NOTATION.test(str) && !ZERO_DECIMAL_INTEGER.test(str) && str.charCodeAt(str.length - 1) !== 46) {
      this.setLastChar(-2);
    }
  }
  token(str, maybeNewline = false, occurrenceCount = 0, mayNeedSpace = false) {
    this.tokenContext &= _index.TokenContext.forInOrInitHeadAccumulatePassThroughMask;
    this._maybePrintInnerComments(str, occurrenceCount);
    const flags = this._flags;
    if (flags & 32) {
      this._maybeAddAuxComment();
    }
    if (flags & 1) {
      this._catchUpToCurrentToken(str, occurrenceCount);
    }
    if (mayNeedSpace) {
      const strFirst = str.charCodeAt(0);
      if ((strFirst === 45 && str === "--" || strFirst === 61) && this.getLastChar() === 33 || strFirst === 43 && this.getLastChar() === 43 || strFirst === 45 && this.getLastChar() === 45 || strFirst === 46 && this.getLastChar() === -2) {
        this._space();
      }
    }
    this._append(str, maybeNewline);
    this._noLineTerminator = false;
  }
  tokenChar(char, occurrenceCount = 0) {
    this.tokenContext &= _index.TokenContext.forInOrInitHeadAccumulatePassThroughMask;
    this._maybePrintInnerComments(char, occurrenceCount);
    const flags = this._flags;
    if (flags & 32) {
      this._maybeAddAuxComment();
    }
    if (flags & 1) {
      this._catchUpToCurrentToken(char, occurrenceCount);
    }
    if (char === 43 && this.getLastChar() === 43 || char === 45 && this.getLastChar() === 45 || char === 46 && this.getLastChar() === -2) {
      this._space();
    }
    this._appendChar(char);
    this._noLineTerminator = false;
  }
  newline(i = 1, flags = this._flags) {
    if (i <= 0) return;
    if (flags & (8 | 2)) {
      return;
    }
    if (flags & 4) {
      this.space();
      return;
    }
    if (i > 2) i = 2;
    i -= this._buf.getNewlineCount();
    for (let j = 0; j < i; j++) {
      this._newline();
    }
  }
  endsWith(char) {
    return this.getLastChar(true) === char;
  }
  getLastChar(checkQueue) {
    return this._buf.getLastChar(checkQueue);
  }
  setLastChar(char) {
    this._buf._last = char;
  }
  exactSource(loc, cb) {
    if (!loc) {
      cb();
      return;
    }
    this._catchUp("start", loc);
    this._buf.exactSource(loc, cb);
  }
  source(prop, loc) {
    if (!loc) return;
    this._catchUp(prop, loc);
    this._buf.source(prop, loc);
  }
  sourceWithOffset(prop, loc, columnOffset) {
    if (!loc || this.format.preserveFormat) return;
    this._catchUp(prop, loc);
    this._buf.sourceWithOffset(prop, loc, columnOffset);
  }
  sourceIdentifierName(identifierName, pos) {
    if (!this._buf._canMarkIdName) return;
    const sourcePosition = this._buf._sourcePosition;
    sourcePosition.identifierNamePos = pos;
    sourcePosition.identifierName = identifierName;
  }
  _space() {
    this._queue(32);
  }
  _newline() {
    if (this._buf._queuedChar === 32) this._buf._queuedChar = 0;
    this._appendChar(10, true);
  }
  _catchUpToCurrentToken(str, occurrenceCount = 0) {
    const token = this.tokenMap.findMatching(this._currentNode, str, occurrenceCount);
    if (token) this._catchUpTo(token.loc.start);
    if (this._printSemicolonBeforeNextToken !== -1 && this._printSemicolonBeforeNextToken === this._buf.getCurrentLine()) {
      this._appendChar(59, true);
    }
    this._printSemicolonBeforeNextToken = -1;
    this._printSemicolonBeforeNextNode = -1;
  }
  _append(str, maybeNewline) {
    this._maybeIndent();
    this._buf.append(str, maybeNewline);
  }
  _appendChar(char, noIndent) {
    if (!noIndent) {
      this._maybeIndent();
    }
    this._buf.appendChar(char);
  }
  _queue(char) {
    this._buf.queue(char);
    this.setLastChar(-1);
  }
  _maybeIndent() {
    const indent = this._shouldIndent();
    if (indent > 0) {
      this._buf._appendChar(-1, indent, false);
    }
  }
  _shouldIndent() {
    return this.endsWith(10) ? this._indent : 0;
  }
  catchUp(line) {
    if (!this.format.retainLines) return;
    const count = line - this._buf.getCurrentLine();
    for (let i = 0; i < count; i++) {
      this._newline();
    }
  }
  _catchUp(prop, loc) {
    const flags = this._flags;
    if ((flags & 1) === 0) {
      if (flags & 8 && loc != null && loc[prop]) {
        this.catchUp(loc[prop].line);
      }
      return;
    }
    const pos = loc == null ? void 0 : loc[prop];
    if (pos != null) this._catchUpTo(pos);
  }
  _catchUpTo({
    line,
    column,
    index
  }) {
    const count = line - this._buf.getCurrentLine();
    if (count > 0 && this._noLineTerminator) {
      return;
    }
    for (let i = 0; i < count; i++) {
      this._newline();
    }
    const spacesCount = count > 0 ? column : column - this._buf.getCurrentColumn();
    if (spacesCount > 0) {
      const spaces = this._originalCode ? this._originalCode.slice(index - spacesCount, index).replace(/[^\t\x0B\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]/gu, " ") : " ".repeat(spacesCount);
      this._append(spaces, false);
      this.setLastChar(32);
    }
  }
  printTerminatorless(node) {
    this._noLineTerminator = true;
    this.print(node);
  }
  print(node, noLineTerminatorAfter = false, resetTokenContext = false, trailingCommentsLineOffset) {
    var _node$leadingComments, _node$leadingComments2;
    if (!node) return;
    this._innerCommentsState = 0;
    const {
      type,
      loc,
      extra
    } = node;
    const flags = this._flags;
    let changedFlags = false;
    if (node._compact) {
      this._flags |= 4;
      changedFlags = true;
    }
    const nodeInfo = _nodes.generatorInfosMap.get(type);
    if (nodeInfo === undefined) {
      throw new ReferenceError(`unknown node of type ${JSON.stringify(type)} with constructor ${JSON.stringify(node.constructor.name)}`);
    }
    const [printMethod, nodeId, needsParens] = nodeInfo;
    const parent = this._currentNode;
    const parentId = this._currentTypeId;
    this._currentNode = node;
    this._currentTypeId = nodeId;
    if (flags & 1) {
      this._printSemicolonBeforeNextToken = this._printSemicolonBeforeNextNode;
    }
    let oldInAux;
    if (flags & 32) {
      oldInAux = this._insideAux;
      this._insideAux = loc == null;
      this._maybeAddAuxComment(this._insideAux && !oldInAux);
    }
    let oldTokenContext = 0;
    if (resetTokenContext) {
      oldTokenContext = this.tokenContext;
      if (oldTokenContext & _index.TokenContext.forInOrInitHeadAccumulate) {
        this.tokenContext = 0;
      } else {
        oldTokenContext = 0;
      }
    }
    const parenthesized = extra != null && extra.parenthesized;
    let shouldPrintParens = parenthesized && flags & 1 || parenthesized && flags & 16 && nodeId === 71 || parent && ((0, _index.parentNeedsParens)(node, parent, parentId) || needsParens != null && needsParens(node, parent, parentId, this.tokenContext, flags & 1 ? this._boundGetRawIdentifier : undefined));
    if (!shouldPrintParens && parenthesized && (_node$leadingComments = node.leadingComments) != null && _node$leadingComments.length && node.leadingComments[0].type === "CommentBlock") {
      switch (parentId) {
        case 65:
        case 243:
        case 6:
        case 143:
          break;
        case 17:
        case 130:
        case 112:
          if (parent.callee !== node) break;
        default:
          shouldPrintParens = true;
      }
    }
    let indentParenthesized = false;
    if (!shouldPrintParens && this._noLineTerminator && ((_node$leadingComments2 = node.leadingComments) != null && _node$leadingComments2.some(commentIsNewline) || flags & 8 && loc && loc.start.line > this._buf.getCurrentLine())) {
      shouldPrintParens = true;
      indentParenthesized = true;
    }
    let oldNoLineTerminatorAfterNode;
    if (!shouldPrintParens) {
      noLineTerminatorAfter || (noLineTerminatorAfter = !!parent && this._noLineTerminatorAfterNode === parent && (0, _index.isLastChild)(parent, node));
      if (noLineTerminatorAfter) {
        var _node$trailingComment;
        if ((_node$trailingComment = node.trailingComments) != null && _node$trailingComment.some(commentIsNewline)) {
          if (isExpression(node)) shouldPrintParens = true;
        } else {
          oldNoLineTerminatorAfterNode = this._noLineTerminatorAfterNode;
          this._noLineTerminatorAfterNode = node;
        }
      }
    }
    if (shouldPrintParens) {
      this.tokenChar(40);
      if (indentParenthesized) this.indent();
      this._innerCommentsState = 0;
      if (!resetTokenContext) {
        oldTokenContext = this.tokenContext;
      }
      if (oldTokenContext & _index.TokenContext.forInOrInitHeadAccumulate) {
        this.tokenContext = 0;
      }
      oldNoLineTerminatorAfterNode = this._noLineTerminatorAfterNode;
      this._noLineTerminatorAfterNode = null;
    }
    this._printLeadingComments(node, parent);
    this.exactSource(nodeId === 139 || nodeId === 66 ? null : loc, printMethod.bind(this, node, parent));
    if (shouldPrintParens) {
      this._printTrailingComments(node, parent);
      if (indentParenthesized) {
        this.dedent();
        this.newline();
      }
      this.tokenChar(41);
      this._noLineTerminator = noLineTerminatorAfter;
    } else if (noLineTerminatorAfter && !this._noLineTerminator) {
      this._noLineTerminator = true;
      this._printTrailingComments(node, parent);
    } else {
      this._printTrailingComments(node, parent, trailingCommentsLineOffset);
    }
    if (oldTokenContext) this.tokenContext = oldTokenContext;
    this._currentNode = parent;
    this._currentTypeId = parentId;
    if (changedFlags) {
      this._flags = flags;
    }
    if (flags & 32) {
      this._insideAux = oldInAux;
    }
    if (oldNoLineTerminatorAfterNode != null) {
      this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
    }
    this._innerCommentsState = 0;
  }
  _maybeAddAuxComment(enteredPositionlessNode) {
    if (enteredPositionlessNode) this._printAuxBeforeComment();
    if (!this._insideAux) this._printAuxAfterComment();
  }
  _printAuxBeforeComment() {
    if (this._printAuxAfterOnNextUserNode) return;
    this._printAuxAfterOnNextUserNode = true;
    const comment = this.format.auxiliaryCommentBefore;
    if (comment) {
      this._printComment({
        type: "CommentBlock",
        value: comment
      }, 0);
    }
  }
  _printAuxAfterComment() {
    if (!this._printAuxAfterOnNextUserNode) return;
    this._printAuxAfterOnNextUserNode = false;
    const comment = this.format.auxiliaryCommentAfter;
    if (comment) {
      this._printComment({
        type: "CommentBlock",
        value: comment
      }, 0);
    }
  }
  getPossibleRaw(node) {
    const extra = node.extra;
    if ((extra == null ? void 0 : extra.raw) != null && extra.rawValue != null && node.value === extra.rawValue) {
      return extra.raw;
    }
  }
  printJoin(nodes, statement, indent, separator, printTrailingSeparator, resetTokenContext, trailingCommentsLineOffset) {
    if (!(nodes != null && nodes.length)) return;
    const flags = this._flags;
    if (indent == null && flags & 8) {
      var _nodes$0$loc;
      const startLine = (_nodes$0$loc = nodes[0].loc) == null ? void 0 : _nodes$0$loc.start.line;
      if (startLine != null && startLine !== this._buf.getCurrentLine()) {
        indent = true;
      }
    }
    if (indent) this.indent(flags);
    const len = nodes.length;
    for (let i = 0; i < len; i++) {
      const node = nodes[i];
      if (!node) continue;
      if (statement && i === 0 && this._buf.hasContent()) {
        this.newline(1, flags);
      }
      this.print(node, false, resetTokenContext, trailingCommentsLineOffset || 0);
      if (separator != null) {
        if (i < len - 1) separator.call(this, i, false);else if (printTrailingSeparator) separator.call(this, i, true);
      }
      if (statement) {
        if (i + 1 === len) {
          this.newline(1, flags);
        } else {
          const lastCommentLine = this._lastCommentLine;
          if (lastCommentLine > 0) {
            var _nodes$loc;
            const offset = (((_nodes$loc = nodes[i + 1].loc) == null ? void 0 : _nodes$loc.start.line) || 0) - lastCommentLine;
            if (offset >= 0) {
              this.newline(offset || 1, flags);
              continue;
            }
          }
          this.newline(1, flags);
        }
      }
    }
    if (indent) this.dedent(flags);
  }
  printAndIndentOnComments(node) {
    const indent = node.leadingComments && node.leadingComments.length > 0;
    if (indent) this.indent();
    this.print(node);
    if (indent) this.dedent();
  }
  printBlock(body) {
    if (body.type !== "EmptyStatement") {
      this.space();
    }
    this.print(body);
  }
  _printTrailingComments(node, parent, lineOffset) {
    const {
      innerComments,
      trailingComments
    } = node;
    if (innerComments != null && innerComments.length) {
      this._printComments(2, innerComments, node, parent, lineOffset);
    }
    if (trailingComments != null && trailingComments.length) {
      this._printComments(2, trailingComments, node, parent, lineOffset);
    } else {
      this._lastCommentLine = 0;
    }
  }
  _printLeadingComments(node, parent) {
    const comments = node.leadingComments;
    if (!(comments != null && comments.length)) return;
    this._printComments(0, comments, node, parent);
  }
  _maybePrintInnerComments(nextTokenStr, nextTokenOccurrenceCount) {
    var _this$tokenMap;
    const state = this._innerCommentsState;
    switch (state & 3) {
      case 0:
        this._innerCommentsState = 1 | 4;
        return;
      case 1:
        this.printInnerComments((state & 4) > 0, (_this$tokenMap = this.tokenMap) == null ? void 0 : _this$tokenMap.findMatching(this._currentNode, nextTokenStr, nextTokenOccurrenceCount));
    }
  }
  printInnerComments(indent = true, nextToken) {
    const node = this._currentNode;
    const comments = node.innerComments;
    if (!(comments != null && comments.length)) {
      this._innerCommentsState = 2;
      return;
    }
    const hasSpace = this.endsWith(32);
    if (indent) this.indent();
    switch (this._printComments(1, comments, node, undefined, undefined, nextToken)) {
      case 2:
        this._innerCommentsState = 2;
      case 1:
        if (hasSpace) this.space();
    }
    if (indent) this.dedent();
  }
  noIndentInnerCommentsHere() {
    this._innerCommentsState &= ~4;
  }
  printSequence(nodes, indent, resetTokenContext, trailingCommentsLineOffset) {
    this.printJoin(nodes, true, indent != null ? indent : false, undefined, undefined, resetTokenContext, trailingCommentsLineOffset);
  }
  printList(items, printTrailingSeparator, statement, indent, separator, resetTokenContext) {
    this.printJoin(items, statement, indent, separator != null ? separator : commaSeparator, printTrailingSeparator, resetTokenContext);
  }
  shouldPrintTrailingComma(listEnd) {
    if (!this.tokenMap) return null;
    const listEndIndex = this.tokenMap.findLastIndex(this._currentNode, token => this.tokenMap.matchesOriginal(token, typeof listEnd === "number" ? String.fromCharCode(listEnd) : listEnd));
    if (listEndIndex <= 0) return null;
    return this.tokenMap.matchesOriginal(this._tokens[listEndIndex - 1], ",");
  }
  _shouldPrintComment(comment, nextToken) {
    if (comment.ignore) return 0;
    if (this._printedComments.has(comment)) return 0;
    if (this._noLineTerminator && HAS_NEWLINE_OR_BlOCK_COMMENT_END.test(comment.value)) {
      return 2;
    }
    if (nextToken && this.tokenMap) {
      const commentTok = this.tokenMap.find(this._currentNode, token => token.value === comment.value);
      if (commentTok && commentTok.start > nextToken.start) {
        return 2;
      }
    }
    this._printedComments.add(comment);
    if (!this.format.shouldPrintComment(comment.value)) {
      return 0;
    }
    return 1;
  }
  _printComment(comment, skipNewLines) {
    const noLineTerminator = this._noLineTerminator;
    const isBlockComment = comment.type === "CommentBlock";
    const printNewLines = isBlockComment && skipNewLines !== 1 && !noLineTerminator;
    if (printNewLines && this._buf.hasContent() && skipNewLines !== 2) {
      this.newline(1);
    }
    switch (this.getLastChar(true)) {
      case 47:
        this._space();
      case 91:
      case 123:
      case 40:
        break;
      default:
        this.space();
    }
    let val;
    if (isBlockComment) {
      val = `/*${comment.value}*/`;
      if (this.format.indent.adjustMultilineComment) {
        var _comment$loc;
        const offset = (_comment$loc = comment.loc) == null ? void 0 : _comment$loc.start.column;
        if (offset) {
          const newlineRegex = new RegExp("\\n\\s{1," + offset + "}", "g");
          val = val.replace(newlineRegex, "\n");
        }
        if (this._flags & 4) {
          val = val.replace(/\n(?!$)/g, `\n`);
        } else {
          let indentSize = this.format.retainLines ? 0 : this._buf.getCurrentColumn();
          if (this._shouldIndent() || this.format.retainLines) {
            indentSize += this._indent;
          }
          val = val.replace(/\n(?!$)/g, `\n${" ".repeat(indentSize)}`);
        }
      }
    } else if (!noLineTerminator) {
      val = `//${comment.value}`;
    } else {
      val = `/*${comment.value}*/`;
    }
    this.source("start", comment.loc);
    this._append(val, isBlockComment);
    if (!isBlockComment && !noLineTerminator) {
      this._newline();
    }
    if (printNewLines && skipNewLines !== 3) {
      this.newline(1);
    }
  }
  _printComments(type, comments, node, parent, lineOffset = 0, nextToken) {
    const nodeLoc = node.loc;
    const len = comments.length;
    let hasLoc = !!nodeLoc;
    const nodeStartLine = hasLoc ? nodeLoc.start.line : 0;
    const nodeEndLine = hasLoc ? nodeLoc.end.line : 0;
    let lastLine = 0;
    let leadingCommentNewline = 0;
    const {
      _noLineTerminator,
      _flags
    } = this;
    for (let i = 0; i < len; i++) {
      const comment = comments[i];
      const shouldPrint = this._shouldPrintComment(comment, nextToken);
      if (shouldPrint === 2) {
        return i === 0 ? 0 : 1;
      }
      if (hasLoc && comment.loc && shouldPrint === 1) {
        const commentStartLine = comment.loc.start.line;
        const commentEndLine = comment.loc.end.line;
        if (type === 0) {
          let offset = 0;
          if (i === 0) {
            if (this._buf.hasContent() && (comment.type === "CommentLine" || commentStartLine !== commentEndLine)) {
              offset = leadingCommentNewline = 1;
            }
          } else {
            offset = commentStartLine - lastLine;
          }
          lastLine = commentEndLine;
          if (offset > 0 && !_noLineTerminator) {
            this.newline(offset, _flags);
          }
          this._printComment(comment, 1);
          if (i + 1 === len) {
            const count = Math.max(nodeStartLine - lastLine, leadingCommentNewline);
            if (count > 0 && !_noLineTerminator) {
              this.newline(count, _flags);
            }
            lastLine = nodeStartLine;
          }
        } else if (type === 1) {
          const offset = commentStartLine - (i === 0 ? nodeStartLine : lastLine);
          lastLine = commentEndLine;
          if (offset > 0 && !_noLineTerminator) {
            this.newline(offset, _flags);
          }
          this._printComment(comment, 1);
          if (i + 1 === len) {
            const count = Math.min(1, nodeEndLine - lastLine);
            if (count > 0 && !_noLineTerminator) {
              this.newline(count, _flags);
            }
            lastLine = nodeEndLine;
          }
        } else {
          const offset = commentStartLine - (i === 0 ? nodeEndLine - lineOffset : lastLine);
          lastLine = commentEndLine;
          if (offset > 0 && !_noLineTerminator) {
            this.newline(offset, _flags);
          }
          this._printComment(comment, 1);
        }
      } else {
        hasLoc = false;
        if (shouldPrint !== 1) {
          continue;
        }
        if (len === 1) {
          const singleLine = comment.loc ? comment.loc.start.line === comment.loc.end.line : !HAS_NEWLINE.test(comment.value);
          const shouldSkipNewline = singleLine && !isStatement(node) && !isClassBody(parent) && !isTSInterfaceBody(parent) && !isTSEnumMember(node);
          if (type === 0) {
            this._printComment(comment, shouldSkipNewline && node.type !== "ObjectExpression" || singleLine && isFunction(parent) && parent.body === node ? 1 : 0);
          } else if (shouldSkipNewline && type === 2) {
            this._printComment(comment, 1);
          } else {
            this._printComment(comment, 0);
          }
        } else if (type === 1 && !(node.type === "ObjectExpression" && node.properties.length > 1) && node.type !== "ClassBody" && node.type !== "TSInterfaceBody") {
          this._printComment(comment, i === 0 ? 2 : i === len - 1 ? 3 : 0);
        } else {
          this._printComment(comment, 0);
        }
      }
    }
    if (type === 2 && hasLoc && lastLine) {
      this._lastCommentLine = lastLine;
    }
    return 2;
  }
}
var _default = exports.default = Printer;
function commaSeparator(occurrenceCount, last) {
  this.tokenChar(44, occurrenceCount);
  if (!last) this.space();
}

//# sourceMappingURL=printer.js.map
