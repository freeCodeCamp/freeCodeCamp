"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;
var _index = require("../../validators/generated/index.js");
function getQualifiedName(node) {
  return (0, _index.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName(node.qualification)}`;
}
function removeTypeDuplicates(nodesIn) {
  const nodes = Array.from(nodesIn);
  const generics = new Map();
  const bases = new Map();
  const typeGroups = new Set();
  const types = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;
    if (types.includes(node)) {
      continue;
    }
    if ((0, _index.isAnyTypeAnnotation)(node)) {
      return [node];
    }
    if ((0, _index.isFlowBaseAnnotation)(node)) {
      bases.set(node.type, node);
      continue;
    }
    if ((0, _index.isUnionTypeAnnotation)(node)) {
      if (!typeGroups.has(node.types)) {
        nodes.push(...node.types);
        typeGroups.add(node.types);
      }
      continue;
    }
    if ((0, _index.isGenericTypeAnnotation)(node)) {
      const name = getQualifiedName(node.id);
      if (generics.has(name)) {
        let existing = generics.get(name);
        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params.push(...node.typeParameters.params);
            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params);
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics.set(name, node);
      }
      continue;
    }
    types.push(node);
  }
  for (const [, baseType] of bases) {
    types.push(baseType);
  }
  for (const [, genericName] of generics) {
    types.push(genericName);
  }
  return types;
}

//# sourceMappingURL=removeTypeDuplicates.js.map
