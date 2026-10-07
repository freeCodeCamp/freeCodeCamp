"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [];

const create = context => {
  const markTypeAsUsed = node => {
    context.markVariableAsUsed(node.id.name);
  };

  const markTypeAsUsedWithGenericType = node => {
    let typeId;
    let scope;
    let variable;

    if (node.id.type === 'Identifier') {
      typeId = node.id;
    } else if (node.id.type === 'QualifiedTypeIdentifier') {
      typeId = node.id;

      do {
        typeId = typeId.qualification;
      } while (typeId.qualification);
    }

    for (scope = context.getScope(); scope; scope = scope.upper) {
      variable = scope.set.get(typeId.name);

      if (variable && variable.defs.length) {
        context.markVariableAsUsed(typeId.name);
        break;
      }
    }
  };

  return {
    DeclareClass: markTypeAsUsed,
    DeclareFunction: markTypeAsUsed,
    DeclareModule: markTypeAsUsed,
    DeclareVariable: markTypeAsUsed,
    GenericTypeAnnotation: markTypeAsUsedWithGenericType,

    TypeParameterDeclaration(node) {
      for (const param of node.params) {
        if (param.default && param.default.typeParameters) {
          if (param.default.type === 'GenericTypeAnnotation') {
            markTypeAsUsedWithGenericType(param.default);
          }

          for (const typeParameterNode of param.default.typeParameters.params) {
            if (typeParameterNode.type === 'GenericTypeAnnotation') {
              markTypeAsUsedWithGenericType(typeParameterNode);
            }
          }
        }
      }
    }

  };
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;