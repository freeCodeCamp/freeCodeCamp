"use strict";

exports.__esModule = true;
exports.ThrowStatement = exports.BreakStatement = exports.ReturnStatement = exports.ContinueStatement = exports.ForAwaitStatement = exports.ForOfStatement = exports.ForInStatement = undefined;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.WithStatement = WithStatement;
exports.IfStatement = IfStatement;
exports.ForStatement = ForStatement;
exports.WhileStatement = WhileStatement;
exports.DoWhileStatement = DoWhileStatement;
exports.LabeledStatement = LabeledStatement;
exports.TryStatement = TryStatement;
exports.CatchClause = CatchClause;
exports.SwitchStatement = SwitchStatement;
exports.SwitchCase = SwitchCase;
exports.DebuggerStatement = DebuggerStatement;
exports.VariableDeclaration = VariableDeclaration;
exports.VariableDeclarator = VariableDeclarator;

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WithStatement(node) {
  this.word("with");
  this.space();
  this.token("(");
  this.print(node.object, node);
  this.token(")");
  this.printBlock(node);
}

function IfStatement(node) {
  this.word("if");
  this.space();
  this.token("(");
  this.print(node.test, node);
  this.token(")");
  this.space();

  var needsBlock = node.alternate && t.isIfStatement(getLastStatement(node.consequent));
  if (needsBlock) {
    this.token("{");
    this.newline();
    this.indent();
  }

  this.printAndIndentOnComments(node.consequent, node);

  if (needsBlock) {
    this.dedent();
    this.newline();
    this.token("}");
  }

  if (node.alternate) {
    if (this.endsWith("}")) this.space();
    this.word("else");
    this.space();
    this.printAndIndentOnComments(node.alternate, node);
  }
}

function getLastStatement(statement) {
  if (!t.isStatement(statement.body)) return statement;
  return getLastStatement(statement.body);
}

function ForStatement(node) {
  this.word("for");
  this.space();
  this.token("(");

  this.inForStatementInitCounter++;
  this.print(node.init, node);
  this.inForStatementInitCounter--;
  this.token(";");

  if (node.test) {
    this.space();
    this.print(node.test, node);
  }
  this.token(";");

  if (node.update) {
    this.space();
    this.print(node.update, node);
  }

  this.token(")");
  this.printBlock(node);
}

function WhileStatement(node) {
  this.word("while");
  this.space();
  this.token("(");
  this.print(node.test, node);
  this.token(")");
  this.printBlock(node);
}

var buildForXStatement = function buildForXStatement(op) {
  return function (node) {
    this.word("for");
    this.space();
    if (op === "await") {
      this.word("await");
      this.space();
    }
    this.token("(");

    this.print(node.left, node);
    this.space();
    this.word(op === "await" ? "of" : op);
    this.space();
    this.print(node.right, node);
    this.token(")");
    this.printBlock(node);
  };
};

var ForInStatement = exports.ForInStatement = buildForXStatement("in");
var ForOfStatement = exports.ForOfStatement = buildForXStatement("of");
var ForAwaitStatement = exports.ForAwaitStatement = buildForXStatement("await");

function DoWhileStatement(node) {
  this.word("do");
  this.space();
  this.print(node.body, node);
  this.space();
  this.word("while");
  this.space();
  this.token("(");
  this.print(node.test, node);
  this.token(")");
  this.semicolon();
}

function buildLabelStatement(prefix) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "label";

  return function (node) {
    this.word(prefix);

    var label = node[key];
    if (label) {
      this.space();

      var terminatorState = this.startTerminatorless();
      this.print(label, node);
      this.endTerminatorless(terminatorState);
    }

    this.semicolon();
  };
}

var ContinueStatement = exports.ContinueStatement = buildLabelStatement("continue");
var ReturnStatement = exports.ReturnStatement = buildLabelStatement("return", "argument");
var BreakStatement = exports.BreakStatement = buildLabelStatement("break");
var ThrowStatement = exports.ThrowStatement = buildLabelStatement("throw", "argument");

function LabeledStatement(node) {
  this.print(node.label, node);
  this.token(":");
  this.space();
  this.print(node.body, node);
}

function TryStatement(node) {
  this.word("try");
  this.space();
  this.print(node.block, node);
  this.space();

  if (node.handlers) {
    this.print(node.handlers[0], node);
  } else {
    this.print(node.handler, node);
  }

  if (node.finalizer) {
    this.space();
    this.word("finally");
    this.space();
    this.print(node.finalizer, node);
  }
}

function CatchClause(node) {
  this.word("catch");
  this.space();
  this.token("(");
  this.print(node.param, node);
  this.token(")");
  this.space();
  this.print(node.body, node);
}

function SwitchStatement(node) {
  this.word("switch");
  this.space();
  this.token("(");
  this.print(node.discriminant, node);
  this.token(")");
  this.space();
  this.token("{");

  this.printSequence(node.cases, node, {
    indent: true,
    addNewlines: function addNewlines(leading, cas) {
      if (!leading && node.cases[node.cases.length - 1] === cas) return -1;
    }
  });

  this.token("}");
}

function SwitchCase(node) {
  if (node.test) {
    this.word("case");
    this.space();
    this.print(node.test, node);
    this.token(":");
  } else {
    this.word("default");
    this.token(":");
  }

  if (node.consequent.length) {
    this.newline();
    this.printSequence(node.consequent, node, { indent: true });
  }
}

function DebuggerStatement() {
  this.word("debugger");
  this.semicolon();
}

function variableDeclarationIdent() {
  this.token(",");
  this.newline();
  if (this.endsWith("\n")) for (var i = 0; i < 4; i++) {
    this.space(true);
  }
}

function constDeclarationIdent() {
  this.token(",");
  this.newline();
  if (this.endsWith("\n")) for (var i = 0; i < 6; i++) {
    this.space(true);
  }
}

function VariableDeclaration(node, parent) {
  this.word(node.kind);
  this.space();

  var hasInits = false;

  if (!t.isFor(parent)) {
    for (var _iterator = node.declarations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var declar = _ref;

      if (declar.init) {
        hasInits = true;
      }
    }
  }

  var separator = void 0;
  if (hasInits) {
    separator = node.kind === "const" ? constDeclarationIdent : variableDeclarationIdent;
  }

  this.printList(node.declarations, node, { separator: separator });

  if (t.isFor(parent)) {
    if (parent.left === node || parent.init === node) return;
  }

  this.semicolon();
}

function VariableDeclarator(node) {
  this.print(node.id, node);
  this.print(node.id.typeAnnotation, node);
  if (node.init) {
    this.space();
    this.token("=");
    this.space();
    this.print(node.init, node);
  }
}