'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.typeFromAST = typeFromAST;

var _kinds = require('../language/kinds.js');

var _definition = require('../type/definition.js');

function typeFromAST(schema, typeNode) {
  switch (typeNode.kind) {
    case _kinds.Kind.LIST_TYPE: {
      const innerType = typeFromAST(schema, typeNode.type);
      return innerType && new _definition.GraphQLList(innerType);
    }

    case _kinds.Kind.NON_NULL_TYPE: {
      const innerType = typeFromAST(schema, typeNode.type);
      return innerType && new _definition.GraphQLNonNull(innerType);
    }

    case _kinds.Kind.NAMED_TYPE:
      return schema.getType(typeNode.name.value);
  }
}
