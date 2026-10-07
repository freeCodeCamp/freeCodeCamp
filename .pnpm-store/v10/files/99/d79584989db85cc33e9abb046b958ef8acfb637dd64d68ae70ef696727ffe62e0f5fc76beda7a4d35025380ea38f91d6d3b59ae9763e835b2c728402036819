"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogicalExpression = exports.AssignmentExpression = AssignmentExpression;
exports.AssignmentPattern = AssignmentPattern;
exports.AwaitExpression = AwaitExpression;
exports.BinaryExpression = BinaryExpression;
exports.BindExpression = BindExpression;
exports.CallExpression = CallExpression;
exports.ConditionalExpression = ConditionalExpression;
exports.Decorator = Decorator;
exports.DoExpression = DoExpression;
exports.EmptyStatement = EmptyStatement;
exports.ExpressionStatement = ExpressionStatement;
exports.Import = Import;
exports.MemberExpression = MemberExpression;
exports.MetaProperty = MetaProperty;
exports.ModuleExpression = ModuleExpression;
exports.NewExpression = NewExpression;
exports.OptionalCallExpression = OptionalCallExpression;
exports.OptionalMemberExpression = OptionalMemberExpression;
exports.ParenthesizedExpression = ParenthesizedExpression;
exports.PrivateName = PrivateName;
exports.SequenceExpression = SequenceExpression;
exports.Super = Super;
exports.ThisExpression = ThisExpression;
exports.UnaryExpression = UnaryExpression;
exports.UpdateExpression = UpdateExpression;
exports.V8IntrinsicIdentifier = V8IntrinsicIdentifier;
exports.YieldExpression = YieldExpression;
exports._shouldPrintDecoratorsBeforeExport = _shouldPrintDecoratorsBeforeExport;
var _t = require("@babel/types");
var _index = require("../node/index.js");
const {
  isCallExpression,
  isLiteral,
  isMemberExpression,
  isNewExpression,
  isPattern
} = _t;
function UnaryExpression(node) {
  const {
    operator
  } = node;
  const firstChar = operator.charCodeAt(0);
  if (firstChar >= 97 && firstChar <= 122) {
    this.word(operator);
    this.space();
  } else {
    this.tokenChar(firstChar);
  }
  this.print(node.argument);
}
function DoExpression(node) {
  if (node.async) {
    this.word("async", true);
    this.space();
  }
  this.word("do");
  this.space();
  this.print(node.body);
}
function ParenthesizedExpression(node) {
  this.tokenChar(40);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  this.print(node.expression, undefined, true);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.rightParens(node);
}
function UpdateExpression(node) {
  if (node.prefix) {
    this.token(node.operator, false, 0, true);
    this.print(node.argument);
  } else {
    this.print(node.argument, true);
    this.token(node.operator, false, 0, true);
  }
}
function ConditionalExpression(node) {
  this.print(node.test);
  this.space();
  this.tokenChar(63);
  this.space();
  this.print(node.consequent);
  this.space();
  this.tokenChar(58);
  this.space();
  this.print(node.alternate);
}
function NewExpression(node, parent) {
  this.word("new");
  this.space();
  this.print(node.callee);
  if (this.format.minified && node.arguments.length === 0 && !node.optional && !isCallExpression(parent, {
    callee: node
  }) && !isMemberExpression(parent) && !isNewExpression(parent)) {
    return;
  }
  this.print(node.typeArguments);
  this.print(node.typeParameters);
  if (node.optional) {
    this.token("?.");
  }
  if (node.arguments.length === 0 && this.tokenMap && !this.tokenMap.endMatches(node, ")")) {
    return;
  }
  this.tokenChar(40);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  this.printList(node.arguments, this.shouldPrintTrailingComma(")"), undefined, undefined, undefined, true);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.rightParens(node);
}
function SequenceExpression(node) {
  this.printList(node.expressions);
}
function ThisExpression() {
  this.word("this");
}
function Super() {
  this.word("super");
}
function _shouldPrintDecoratorsBeforeExport(node) {
  if (typeof this.format.decoratorsBeforeExport === "boolean") {
    return this.format.decoratorsBeforeExport;
  }
  return typeof node.start === "number" && node.start === node.declaration.start;
}
function Decorator(node) {
  this.tokenChar(64);
  const {
    expression
  } = node;
  this.print(expression);
  this.newline();
}
function OptionalMemberExpression(node) {
  let {
    computed
  } = node;
  const {
    optional,
    property
  } = node;
  this.print(node.object);
  if (!computed && isMemberExpression(property)) {
    throw new TypeError("Got a MemberExpression for MemberExpression property");
  }
  if (isLiteral(property) && typeof property.value === "number") {
    computed = true;
  }
  if (optional) {
    this.token("?.");
  }
  if (computed) {
    this.tokenChar(91);
    this.print(property);
    this.tokenChar(93);
  } else {
    if (!optional) {
      this.tokenChar(46);
    }
    this.print(property);
  }
}
function OptionalCallExpression(node) {
  this.print(node.callee);
  this.print(node.typeParameters);
  if (node.optional) {
    this.token("?.");
  }
  this.print(node.typeArguments);
  this.tokenChar(40);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  this.printList(node.arguments, undefined, undefined, undefined, undefined, true);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.rightParens(node);
}
function CallExpression(node) {
  this.print(node.callee);
  this.print(node.typeArguments);
  this.print(node.typeParameters);
  this.tokenChar(40);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  this.printList(node.arguments, this.shouldPrintTrailingComma(")"), undefined, undefined, undefined, true);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.rightParens(node);
}
function Import() {
  this.word("import");
}
function AwaitExpression(node) {
  this.word("await");
  this.space();
  this.print(node.argument);
}
function YieldExpression(node) {
  if (node.delegate) {
    this.word("yield", true);
    this.tokenChar(42);
    if (node.argument) {
      this.space();
      this.print(node.argument);
    }
  } else if (node.argument) {
    this.word("yield", true);
    this.space();
    this.print(node.argument);
  } else {
    this.word("yield");
  }
}
function EmptyStatement() {
  this.semicolon(true);
}
function ExpressionStatement(node) {
  this.tokenContext |= _index.TokenContext.expressionStatement;
  this.print(node.expression);
  this.semicolon();
}
function AssignmentPattern(node) {
  this.print(node.left);
  if (node.left.type === "Identifier" || isPattern(node.left)) {
    if (node.left.optional) this.tokenChar(63);
    this.print(node.left.typeAnnotation);
  }
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(node.right);
}
function AssignmentExpression(node) {
  this.print(node.left);
  this.space();
  this.token(node.operator, false, 0, true);
  this.space();
  this.print(node.right);
}
function BinaryExpression(node) {
  this.print(node.left);
  this.space();
  const {
    operator
  } = node;
  if (operator.charCodeAt(0) === 105) {
    this.word(operator);
  } else {
    this.token(operator, false, 0, true);
    this.setLastChar(operator.charCodeAt(operator.length - 1));
  }
  this.space();
  this.print(node.right);
}
function BindExpression(node) {
  this.print(node.object);
  this.token("::");
  this.print(node.callee);
}
function MemberExpression(node) {
  this.print(node.object);
  if (!node.computed && isMemberExpression(node.property)) {
    throw new TypeError("Got a MemberExpression for MemberExpression property");
  }
  let computed = node.computed;
  if (isLiteral(node.property) && typeof node.property.value === "number") {
    computed = true;
  }
  if (computed) {
    const oldNoLineTerminatorAfterNode = this.enterDelimited();
    this.tokenChar(91);
    this.print(node.property, undefined, true);
    this.tokenChar(93);
    this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  } else {
    this.tokenChar(46);
    this.print(node.property);
  }
}
function MetaProperty(node) {
  this.print(node.meta);
  this.tokenChar(46);
  this.print(node.property);
}
function PrivateName(node) {
  this.tokenChar(35);
  this.print(node.id);
}
function V8IntrinsicIdentifier(node) {
  this.tokenChar(37);
  this.word(node.name);
}
function ModuleExpression(node) {
  this.word("module", true);
  this.space();
  this.tokenChar(123);
  this.indent();
  const {
    body
  } = node;
  if (body.body.length || body.directives.length) {
    this.newline();
  }
  this.print(body);
  this.dedent();
  this.rightBrace(node);
}

//# sourceMappingURL=expressions.js.map
