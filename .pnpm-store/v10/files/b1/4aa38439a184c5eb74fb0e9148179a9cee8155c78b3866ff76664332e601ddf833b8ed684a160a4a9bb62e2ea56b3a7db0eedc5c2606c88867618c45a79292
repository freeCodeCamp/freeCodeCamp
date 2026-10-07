"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getTypeAnnotation = _getTypeAnnotation;
exports.baseTypeStrictlyMatches = baseTypeStrictlyMatches;
exports.couldBeBaseType = couldBeBaseType;
exports.getTypeAnnotation = getTypeAnnotation;
exports.isBaseType = isBaseType;
exports.isGenericType = isGenericType;
var inferers = require("./inferers.js");
var _t = require("@babel/types");
const {
  anyTypeAnnotation,
  isAnyTypeAnnotation,
  isArrayTypeAnnotation,
  isBooleanTypeAnnotation,
  isEmptyTypeAnnotation,
  isFlowBaseAnnotation,
  isGenericTypeAnnotation,
  isIdentifier,
  isMixedTypeAnnotation,
  isNumberTypeAnnotation,
  isStringTypeAnnotation,
  isTSArrayType,
  isTSTypeAnnotation,
  isTSTypeReference,
  isTupleTypeAnnotation,
  isTypeAnnotation,
  isUnionTypeAnnotation,
  isVoidTypeAnnotation,
  stringTypeAnnotation,
  voidTypeAnnotation
} = _t;
function getTypeAnnotation() {
  let type = this.getData("typeAnnotation");
  if (type != null) {
    return type;
  }
  type = _getTypeAnnotation.call(this) || anyTypeAnnotation();
  if (isTypeAnnotation(type) || isTSTypeAnnotation(type)) {
    type = type.typeAnnotation;
  }
  this.setData("typeAnnotation", type);
  return type;
}
const typeAnnotationInferringNodes = new WeakSet();
function _getTypeAnnotation() {
  const node = this.node;
  if (!node) {
    if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
      const declar = this.parentPath.parentPath;
      const declarParent = declar.parentPath;
      if (declar.key === "left" && declarParent.isForInStatement()) {
        return stringTypeAnnotation();
      }
      if (declar.key === "left" && declarParent.isForOfStatement()) {
        return anyTypeAnnotation();
      }
      return voidTypeAnnotation();
    } else {
      return;
    }
  }
  if (node.typeAnnotation) {
    return node.typeAnnotation;
  }
  if (typeAnnotationInferringNodes.has(node)) {
    return;
  }
  typeAnnotationInferringNodes.add(node);
  try {
    var _inferer;
    let inferer = inferers[node.type];
    if (inferer) {
      return inferer.call(this, node);
    }
    inferer = inferers[this.parentPath.type];
    if ((_inferer = inferer) != null && _inferer.validParent) {
      return this.parentPath.getTypeAnnotation();
    }
  } finally {
    typeAnnotationInferringNodes.delete(node);
  }
}
function isBaseType(baseName, soft) {
  return _isBaseType(baseName, this.getTypeAnnotation(), soft);
}
function _isBaseType(baseName, type, soft) {
  if (baseName === "string") {
    return isStringTypeAnnotation(type);
  } else if (baseName === "number") {
    return isNumberTypeAnnotation(type);
  } else if (baseName === "boolean") {
    return isBooleanTypeAnnotation(type);
  } else if (baseName === "any") {
    return isAnyTypeAnnotation(type);
  } else if (baseName === "mixed") {
    return isMixedTypeAnnotation(type);
  } else if (baseName === "empty") {
    return isEmptyTypeAnnotation(type);
  } else if (baseName === "void") {
    return isVoidTypeAnnotation(type);
  } else {
    if (soft) {
      return false;
    } else {
      throw new Error(`Unknown base type ${baseName}`);
    }
  }
}
function couldBeBaseType(name) {
  const type = this.getTypeAnnotation();
  if (isAnyTypeAnnotation(type)) return true;
  if (isUnionTypeAnnotation(type)) {
    for (const type2 of type.types) {
      if (isAnyTypeAnnotation(type2) || _isBaseType(name, type2, true)) {
        return true;
      }
    }
    return false;
  } else {
    return _isBaseType(name, type, true);
  }
}
function baseTypeStrictlyMatches(rightArg) {
  const left = this.getTypeAnnotation();
  const right = rightArg.getTypeAnnotation();
  if (!isAnyTypeAnnotation(left) && isFlowBaseAnnotation(left)) {
    return right.type === left.type;
  }
  return false;
}
function isGenericType(genericName) {
  const type = this.getTypeAnnotation();
  if (genericName === "Array") {
    if (isTSArrayType(type) || isArrayTypeAnnotation(type) || isTupleTypeAnnotation(type)) {
      return true;
    }
  }
  return isGenericTypeAnnotation(type) && isIdentifier(type.id, {
    name: genericName
  }) || isTSTypeReference(type) && isIdentifier(type.typeName, {
    name: genericName
  });
}

//# sourceMappingURL=index.js.map
