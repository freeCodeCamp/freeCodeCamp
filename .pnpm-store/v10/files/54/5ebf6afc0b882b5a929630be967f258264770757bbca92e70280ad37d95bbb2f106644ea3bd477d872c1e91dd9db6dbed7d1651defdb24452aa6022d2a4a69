"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (identifierNode, context) => {
  if (_lodash.default.has(identifierNode, 'name')) {
    return identifierNode.name;
  }

  if (_lodash.default.has(identifierNode, 'left.name')) {
    return identifierNode.left.name;
  }

  if (_lodash.default.has(identifierNode, 'key.name')) {
    return identifierNode.key.name;
  }

  if (identifierNode.type === 'RestElement') {
    return identifierNode.argument.name;
  }

  if (identifierNode.type === 'ObjectTypeProperty') {
    let tokenIndex;
    tokenIndex = 0;

    if (identifierNode.static) {
      tokenIndex++;
    }

    if (identifierNode.variance) {
      tokenIndex++;
    }

    if (identifierNode.kind === 'set' || identifierNode.kind === 'get') {
      tokenIndex++;
    }

    return context.getSourceCode().getFirstToken(identifierNode, tokenIndex).value;
  }

  if (identifierNode.type === 'ObjectTypeIndexer') {
    let tokenIndex;
    tokenIndex = 0;

    if (identifierNode.static) {
      tokenIndex++;
    }

    if (identifierNode.variance) {
      tokenIndex++;
    }

    tokenIndex++;
    const id = context.getSourceCode().getFirstToken(identifierNode, tokenIndex);
    const colonOrBrace = context.getSourceCode().getTokenAfter(id);

    if (colonOrBrace.value === ':') {
      return id.value;
    } else {
      return null;
    }
  }

  if (identifierNode.type === 'FunctionTypeParam') {
    return context.getSourceCode().getFirstToken(identifierNode).value;
  }

  if (identifierNode.type === 'ObjectPattern' || identifierNode.type === 'ArrayPattern') {
    const text = context.getSourceCode().getText(identifierNode);

    if (identifierNode.typeAnnotation) {
      return text.replace(context.getSourceCode().getText(identifierNode.typeAnnotation), '').trim();
    } else {
      return text;
    }
  }

  if (_lodash.default.get(identifierNode, 'left.type') === 'ObjectPattern') {
    return context.getSourceCode().getText(identifierNode.left);
  }

  return null;
};

exports.default = _default;
module.exports = exports.default;