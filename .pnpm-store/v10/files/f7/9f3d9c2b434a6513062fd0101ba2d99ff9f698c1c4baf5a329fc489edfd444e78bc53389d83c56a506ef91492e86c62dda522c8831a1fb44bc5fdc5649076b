"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = explode;
var _t = require("@babel/types");
const {
  assignmentExpression,
  cloneNode,
  isIdentifier,
  isLiteral,
  isMemberExpression,
  isPrivateName,
  isPureish,
  isSuper,
  memberExpression,
  toComputedKey
} = _t;
function getObjRef(node, nodes, scope) {
  let ref;
  if (isIdentifier(node)) {
    if (scope.hasBinding(node.name)) {
      return node;
    } else {
      ref = node;
    }
  } else if (isMemberExpression(node)) {
    ref = node.object;
    if (isSuper(ref) || isIdentifier(ref) && scope.hasBinding(ref.name)) {
      return ref;
    }
  } else {
    throw new Error(`We can't explode this node type ${node["type"]}`);
  }
  const temp = scope.generateUidIdentifierBasedOnNode(ref);
  scope.push({
    id: temp
  });
  nodes.push(assignmentExpression("=", cloneNode(temp), cloneNode(ref)));
  return temp;
}
function getPropRef(node, nodes, scope) {
  const prop = node.property;
  if (isPrivateName(prop)) {
    throw new Error("We can't generate property ref for private name, please install `@babel/plugin-transform-class-properties`");
  }
  const key = toComputedKey(node, prop);
  if (isLiteral(key) && isPureish(key)) return key;
  const temp = scope.generateUidIdentifierBasedOnNode(prop);
  scope.push({
    id: temp
  });
  nodes.push(assignmentExpression("=", cloneNode(temp), cloneNode(prop)));
  return temp;
}
function explode(node, nodes, scope) {
  const obj = getObjRef(node, nodes, scope);
  let ref, uid;
  if (isIdentifier(node)) {
    ref = cloneNode(node);
    uid = obj;
  } else {
    const prop = getPropRef(node, nodes, scope);
    const computed = node.computed || isLiteral(prop);
    uid = memberExpression(cloneNode(obj), cloneNode(prop), computed);
    ref = memberExpression(cloneNode(obj), cloneNode(prop), computed);
  }
  return {
    uid: uid,
    ref: ref
  };
}

//# sourceMappingURL=explode-assignable-expression.js.map
