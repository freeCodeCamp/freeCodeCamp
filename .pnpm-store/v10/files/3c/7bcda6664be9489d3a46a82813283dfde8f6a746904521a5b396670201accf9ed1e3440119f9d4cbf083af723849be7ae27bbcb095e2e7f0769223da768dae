"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.findParent = findParent;
exports.getAncestry = getAncestry;
exports.getDeepestCommonAncestorFrom = getDeepestCommonAncestorFrom;
exports.getEarliestCommonAncestorFrom = getEarliestCommonAncestorFrom;
exports.getFunctionParent = getFunctionParent;
exports.getStatementParent = getStatementParent;
exports.inType = inType;
exports.isAncestor = isAncestor;
exports.isDescendant = isDescendant;
var _t = require("@babel/types");
const {
  VISITOR_KEYS
} = _t;
function findParent(callback) {
  let path = this;
  while (path = path.parentPath) {
    if (callback(path)) return path;
  }
  return null;
}
function find(callback) {
  let path = this;
  do {
    if (callback(path)) return path;
  } while (path = path.parentPath);
  return null;
}
function getFunctionParent() {
  return this.findParent(p => p.isFunction());
}
function getStatementParent() {
  let path = this;
  do {
    if (!path.parentPath || Array.isArray(path.container) && path.isStatement()) {
      break;
    } else {
      path = path.parentPath;
    }
  } while (path);
  if (path && (path.isProgram() || path.isFile())) {
    throw new Error("File/Program node, we can't possibly find a statement parent to this");
  }
  return path;
}
function getEarliestCommonAncestorFrom(paths) {
  return this.getDeepestCommonAncestorFrom(paths, function (deepest, i, ancestries) {
    let earliest;
    const keys = VISITOR_KEYS[deepest.type];
    for (const ancestry of ancestries) {
      const path = ancestry[i + 1];
      if (!earliest) {
        earliest = path;
        continue;
      }
      if (path.listKey && earliest.listKey === path.listKey) {
        if (path.key < earliest.key) {
          earliest = path;
          continue;
        }
      }
      const earliestKeyIndex = keys.indexOf(earliest.parentKey);
      const currentKeyIndex = keys.indexOf(path.parentKey);
      if (earliestKeyIndex > currentKeyIndex) {
        earliest = path;
      }
    }
    return earliest;
  });
}
function getDeepestCommonAncestorFrom(paths, filter) {
  if (!paths.length) {
    return this;
  }
  if (paths.length === 1) {
    return paths[0];
  }
  let minDepth = Infinity;
  let lastCommonIndex, lastCommon;
  const ancestries = paths.map(path => {
    const ancestry = [];
    do {
      ancestry.unshift(path);
    } while ((path = path.parentPath) && path !== this);
    if (ancestry.length < minDepth) {
      minDepth = ancestry.length;
    }
    return ancestry;
  });
  const first = ancestries[0];
  depthLoop: for (let i = 0; i < minDepth; i++) {
    const shouldMatch = first[i];
    for (const ancestry of ancestries) {
      if (ancestry[i] !== shouldMatch) {
        break depthLoop;
      }
    }
    lastCommonIndex = i;
    lastCommon = shouldMatch;
  }
  if (lastCommon) {
    if (filter) {
      return filter(lastCommon, lastCommonIndex, ancestries);
    } else {
      return lastCommon;
    }
  } else {
    throw new Error("Couldn't find intersection");
  }
}
function getAncestry() {
  let path = this;
  const paths = [];
  do {
    paths.push(path);
  } while (path = path.parentPath);
  return paths;
}
function isAncestor(maybeDescendant) {
  return maybeDescendant.isDescendant(this);
}
function isDescendant(maybeAncestor) {
  return !!this.findParent(parent => parent === maybeAncestor);
}
function inType(...candidateTypes) {
  let path = this;
  while (path) {
    if (candidateTypes.includes(path.node.type)) return true;
    path = path.parentPath;
  }
  return false;
}

//# sourceMappingURL=ancestry.js.map
