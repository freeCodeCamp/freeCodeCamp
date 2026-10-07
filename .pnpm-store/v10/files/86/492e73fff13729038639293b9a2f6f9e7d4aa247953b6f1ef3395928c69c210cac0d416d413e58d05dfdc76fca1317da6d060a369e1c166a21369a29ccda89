"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockStatement = BlockStatement;
exports.Directive = Directive;
exports.DirectiveLiteral = DirectiveLiteral;
exports.File = File;
exports.InterpreterDirective = InterpreterDirective;
exports.Placeholder = Placeholder;
exports.Program = Program;
function File(node) {
  if (node.program) {
    this.print(node.program.interpreter);
  }
  this.print(node.program);
}
function Program(node) {
  var _node$directives;
  this.printInnerComments(false);
  const directivesLen = (_node$directives = node.directives) == null ? void 0 : _node$directives.length;
  if (directivesLen) {
    var _node$directives$trai;
    const newline = node.body.length ? 2 : 1;
    this.printSequence(node.directives, undefined, undefined, newline);
    if (!((_node$directives$trai = node.directives[directivesLen - 1].trailingComments) != null && _node$directives$trai.length)) {
      this.newline(newline);
    }
  }
  this.printSequence(node.body);
}
function BlockStatement(node) {
  var _node$directives2;
  this.tokenChar(123);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  const directivesLen = (_node$directives2 = node.directives) == null ? void 0 : _node$directives2.length;
  if (directivesLen) {
    var _node$directives$trai2;
    const newline = node.body.length ? 2 : 1;
    this.printSequence(node.directives, true, true, newline);
    if (!((_node$directives$trai2 = node.directives[directivesLen - 1].trailingComments) != null && _node$directives$trai2.length)) {
      this.newline(newline);
    }
  }
  this.printSequence(node.body, true, true);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.rightBrace(node);
}
function Directive(node) {
  this.print(node.value);
  this.semicolon();
}
const unescapedSingleQuoteRE = /(?:^|[^\\])(?:\\\\)*'/;
const unescapedDoubleQuoteRE = /(?:^|[^\\])(?:\\\\)*"/;
function DirectiveLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.token(raw);
    return;
  }
  const {
    value
  } = node;
  if (!unescapedDoubleQuoteRE.test(value)) {
    this.token(`"${value}"`);
  } else if (!unescapedSingleQuoteRE.test(value)) {
    this.token(`'${value}'`);
  } else {
    throw new Error("Malformed AST: it is not possible to print a directive containing" + " both unescaped single and double quotes.");
  }
}
function InterpreterDirective(node) {
  this.token(`#!${node.value}`);
  this._newline();
}
function Placeholder(node) {
  this.token("%%");
  this.print(node.name);
  this.token("%%");
  if (node.expectedNode === "Statement") {
    this.semicolon();
  }
}

//# sourceMappingURL=base.js.map
