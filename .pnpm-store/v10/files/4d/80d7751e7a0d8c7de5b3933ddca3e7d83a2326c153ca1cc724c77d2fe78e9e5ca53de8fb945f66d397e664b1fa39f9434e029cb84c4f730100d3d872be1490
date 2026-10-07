"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassAccessorProperty = ClassAccessorProperty;
exports.ClassBody = ClassBody;
exports.ClassExpression = exports.ClassDeclaration = ClassDeclaration;
exports.ClassMethod = ClassMethod;
exports.ClassPrivateMethod = ClassPrivateMethod;
exports.ClassPrivateProperty = ClassPrivateProperty;
exports.ClassProperty = ClassProperty;
exports.StaticBlock = StaticBlock;
exports._classMethodHead = _classMethodHead;
var _t = require("@babel/types");
var _expressions = require("./expressions.js");
var _typescript = require("./typescript.js");
var _flow = require("./flow.js");
var _methods = require("./methods.js");
const {
  isExportDefaultDeclaration,
  isExportNamedDeclaration
} = _t;
function ClassDeclaration(node, parent) {
  const inExport = isExportDefaultDeclaration(parent) || isExportNamedDeclaration(parent);
  if (!inExport || !_expressions._shouldPrintDecoratorsBeforeExport.call(this, parent)) {
    this.printJoin(node.decorators);
  }
  if (node.declare) {
    this.word("declare");
    this.space();
  }
  if (node.abstract) {
    this.word("abstract");
    this.space();
  }
  this.word("class");
  if (node.id) {
    this.space();
    this.print(node.id);
  }
  this.print(node.typeParameters);
  if (node.superClass) {
    this.space();
    this.word("extends");
    this.space();
    this.print(node.superClass);
    this.print(node.superTypeParameters);
  }
  if (node.implements) {
    this.space();
    this.word("implements");
    this.space();
    this.printList(node.implements);
  }
  this.space();
  this.print(node.body);
}
function ClassBody(node) {
  this.tokenChar(123);
  if (node.body.length === 0) {
    this.tokenChar(125);
  } else {
    const separator = classBodyEmptySemicolonsPrinter(this, node);
    separator == null || separator(-1);
    const oldNoLineTerminatorAfterNode = this.enterDelimited();
    this.printJoin(node.body, true, true, separator, true, true);
    this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
    if (!this.endsWith(10)) this.newline();
    this.rightBrace(node);
  }
}
function classBodyEmptySemicolonsPrinter(printer, node) {
  if (!printer.tokenMap || node.start == null || node.end == null) {
    return null;
  }
  const indexes = printer.tokenMap.getIndexes(node);
  if (!indexes) return null;
  let k = 1;
  let occurrenceCount = 0;
  let nextLocIndex = 0;
  const advanceNextLocIndex = () => {
    while (nextLocIndex < node.body.length && node.body[nextLocIndex].start == null) {
      nextLocIndex++;
    }
  };
  advanceNextLocIndex();
  return i => {
    if (nextLocIndex <= i) {
      nextLocIndex = i + 1;
      advanceNextLocIndex();
    }
    const end = nextLocIndex === node.body.length ? node.end : node.body[nextLocIndex].start;
    let tok;
    while (k < indexes.length && printer.tokenMap.matchesOriginal(tok = printer._tokens[indexes[k]], ";") && tok.start < end) {
      printer.tokenChar(59, occurrenceCount++);
      k++;
    }
  };
}
function ClassProperty(node) {
  this.printJoin(node.decorators);
  if (!node.static && !this.format.preserveFormat) {
    var _node$key$loc;
    const endLine = (_node$key$loc = node.key.loc) == null || (_node$key$loc = _node$key$loc.end) == null ? void 0 : _node$key$loc.line;
    if (endLine) this.catchUp(endLine);
  }
  _typescript._tsPrintClassMemberModifiers.call(this, node);
  if (node.computed) {
    this.tokenChar(91);
    this.print(node.key);
    this.tokenChar(93);
  } else {
    _flow._variance.call(this, node);
    this.print(node.key);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
  if (node.definite) {
    this.tokenChar(33);
  }
  this.print(node.typeAnnotation);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value);
  }
  this.semicolon();
}
function ClassAccessorProperty(node) {
  var _node$key$loc2;
  this.printJoin(node.decorators);
  const endLine = (_node$key$loc2 = node.key.loc) == null || (_node$key$loc2 = _node$key$loc2.end) == null ? void 0 : _node$key$loc2.line;
  if (endLine) this.catchUp(endLine);
  _typescript._tsPrintClassMemberModifiers.call(this, node);
  this.word("accessor", true);
  this.space();
  if (node.computed) {
    this.tokenChar(91);
    this.print(node.key);
    this.tokenChar(93);
  } else {
    _flow._variance.call(this, node);
    this.print(node.key);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
  if (node.definite) {
    this.tokenChar(33);
  }
  this.print(node.typeAnnotation);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value);
  }
  this.semicolon();
}
function ClassPrivateProperty(node) {
  this.printJoin(node.decorators);
  _typescript._tsPrintClassMemberModifiers.call(this, node);
  this.print(node.key);
  if (node.optional) {
    this.tokenChar(63);
  }
  if (node.definite) {
    this.tokenChar(33);
  }
  this.print(node.typeAnnotation);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value);
  }
  this.semicolon();
}
function ClassMethod(node) {
  _classMethodHead.call(this, node);
  this.space();
  this.print(node.body);
}
function ClassPrivateMethod(node) {
  _classMethodHead.call(this, node);
  this.space();
  this.print(node.body);
}
function _classMethodHead(node) {
  this.printJoin(node.decorators);
  if (!this.format.preserveFormat) {
    var _node$key$loc3;
    const endLine = (_node$key$loc3 = node.key.loc) == null || (_node$key$loc3 = _node$key$loc3.end) == null ? void 0 : _node$key$loc3.line;
    if (endLine) this.catchUp(endLine);
  }
  _typescript._tsPrintClassMemberModifiers.call(this, node);
  _methods._methodHead.call(this, node);
}
function StaticBlock(node) {
  this.word("static");
  this.space();
  this.tokenChar(123);
  if (node.body.length === 0) {
    this.tokenChar(125);
  } else {
    this.newline();
    this.printSequence(node.body, true);
    this.rightBrace(node);
  }
}

//# sourceMappingURL=classes.js.map
