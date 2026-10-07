"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;
var _index = require("../../validators/generated/index.js");
function getQualifiedName(node) {
  return (0, _index.isIdentifier)(node) ? node.name : (0, _index.isThisExpression)(node) ? "this" : `${node.right.name}.${getQualifiedName(node.left)}`;
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
    if ((0, _index.isTSAnyKeyword)(node)) {
      return [node];
    }
    if ((0, _index.isTSBaseType)(node)) {
      bases.set(node.type, node);
      continue;
    }
    if ((0, _index.isTSUnionType)(node)) {
      if (!typeGroups.has(node.types)) {
        nodes.push(...node.types);
        typeGroups.add(node.types);
      }
      continue;
    }
    const typeArgumentsKey = "typeParameters";
    if ((0, _index.isTSTypeReference)(node) && node[typeArgumentsKey]) {
      const typeArguments = node[typeArgumentsKey];
      const name = getQualifiedName(node.typeName);
      if (generics.has(name)) {
        let existing = generics.get(name);
        const existingTypeArguments = existing[typeArgumentsKey];
        if (existingTypeArguments) {
          existingTypeArguments.params.push(...typeArguments.params);
          existingTypeArguments.params = removeTypeDuplicates(existingTypeArguments.params);
        } else {
          existing = typeArguments;
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
