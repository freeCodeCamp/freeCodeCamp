"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneNode;
var _index = require("../definitions/index.js");
var _index2 = require("../validators/generated/index.js");
const {
  hasOwn
} = {
  hasOwn: Function.call.bind(Object.prototype.hasOwnProperty)
};
function cloneIfNode(obj, deep, withoutLoc, commentsCache) {
  if (obj && typeof obj.type === "string") {
    return cloneNodeInternal(obj, deep, withoutLoc, commentsCache);
  }
  return obj;
}
function cloneIfNodeOrArray(obj, deep, withoutLoc, commentsCache) {
  if (Array.isArray(obj)) {
    return obj.map(node => cloneIfNode(node, deep, withoutLoc, commentsCache));
  }
  return cloneIfNode(obj, deep, withoutLoc, commentsCache);
}
function cloneNode(node, deep = true, withoutLoc = false) {
  return cloneNodeInternal(node, deep, withoutLoc, new Map());
}
function cloneNodeInternal(node, deep = true, withoutLoc = false, commentsCache) {
  if (!node) return node;
  const {
    type
  } = node;
  const newNode = {
    type: node.type
  };
  if ((0, _index2.isIdentifier)(node)) {
    newNode.name = node.name;
    if (hasOwn(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }
    if (hasOwn(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc, commentsCache) : node.typeAnnotation;
    }
    if (hasOwn(node, "decorators")) {
      newNode.decorators = deep ? cloneIfNodeOrArray(node.decorators, true, withoutLoc, commentsCache) : node.decorators;
    }
  } else if (!hasOwn(_index.NODE_FIELDS, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(_index.NODE_FIELDS[type])) {
      if (hasOwn(node, field)) {
        if (deep) {
          newNode[field] = (0, _index2.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc, commentsCache) : cloneIfNodeOrArray(node[field], true, withoutLoc, commentsCache);
        } else {
          newNode[field] = node[field];
        }
      }
    }
  }
  if (hasOwn(node, "loc")) {
    if (withoutLoc) {
      newNode.loc = null;
    } else {
      newNode.loc = node.loc;
    }
  }
  if (hasOwn(node, "leadingComments")) {
    newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "innerComments")) {
    newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "trailingComments")) {
    newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }
  return newNode;
}
function maybeCloneComments(comments, deep, withoutLoc, commentsCache) {
  if (!comments || !deep) {
    return comments;
  }
  return comments.map(comment => {
    const cache = commentsCache.get(comment);
    if (cache) return cache;
    const {
      type,
      value,
      loc
    } = comment;
    const ret = {
      type,
      value,
      loc
    };
    if (withoutLoc) {
      ret.loc = null;
    }
    commentsCache.set(comment, ret);
    return ret;
  });
}

//# sourceMappingURL=cloneNode.js.map
