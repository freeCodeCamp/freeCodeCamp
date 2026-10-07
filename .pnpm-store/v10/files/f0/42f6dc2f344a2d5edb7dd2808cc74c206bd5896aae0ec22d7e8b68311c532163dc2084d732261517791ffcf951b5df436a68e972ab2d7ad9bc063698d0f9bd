'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _t = require('@babel/types');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var _t__namespace = /*#__PURE__*/_interopNamespace(_t);

function willPathCastToBoolean(path) {
  const maybeWrapped = path;
  const {
    node,
    parentPath
  } = maybeWrapped;
  if (parentPath.isLogicalExpression()) {
    const {
      operator,
      right
    } = parentPath.node;
    if (operator === "&&" || operator === "||" || operator === "??" && node === right) {
      return willPathCastToBoolean(parentPath);
    }
  }
  if (parentPath.isSequenceExpression()) {
    const {
      expressions
    } = parentPath.node;
    if (expressions[expressions.length - 1] === node) {
      return willPathCastToBoolean(parentPath);
    } else {
      return true;
    }
  }
  return parentPath.isConditional({
    test: node
  }) || parentPath.isUnaryExpression({
    operator: "!"
  }) || parentPath.isForStatement({
    test: node
  }) || parentPath.isWhile({
    test: node
  });
}

const {
  LOGICAL_OPERATORS,
  arrowFunctionExpression,
  assignmentExpression,
  binaryExpression,
  booleanLiteral,
  callExpression,
  cloneNode,
  conditionalExpression,
  identifier,
  isMemberExpression,
  isOptionalCallExpression,
  isOptionalMemberExpression,
  isUpdateExpression,
  logicalExpression,
  memberExpression,
  nullLiteral,
  optionalCallExpression,
  optionalMemberExpression,
  sequenceExpression,
  updateExpression
} = _t__namespace;
class AssignmentMemoiser {
  constructor() {
    this._map = void 0;
    this._map = new WeakMap();
  }
  has(key) {
    return this._map.has(key);
  }
  get(key) {
    if (!this.has(key)) return;
    const record = this._map.get(key);
    const {
      value
    } = record;
    record.count--;
    if (record.count === 0) {
      return assignmentExpression("=", value, key);
    }
    return value;
  }
  set(key, value, count) {
    return this._map.set(key, {
      count,
      value
    });
  }
}
function toNonOptional(path, base) {
  const {
    node
  } = path;
  if (isOptionalMemberExpression(node)) {
    return memberExpression(base, node.property, node.computed);
  }
  if (path.isOptionalCallExpression()) {
    const callee = path.get("callee");
    if (path.node.optional && callee.isOptionalMemberExpression()) {
      const object = callee.node.object;
      const context = path.scope.maybeGenerateMemoised(object);
      callee.get("object").replaceWith(assignmentExpression("=", context, object));
      return callExpression(memberExpression(base, identifier("call")), [context, ...path.node.arguments]);
    }
    return callExpression(base, path.node.arguments);
  }
  return path.node;
}
function isInDetachedTree(path) {
  while (path) {
    if (path.isProgram()) break;
    const {
      parentPath,
      container,
      listKey
    } = path;
    const parentNode = parentPath.node;
    if (listKey) {
      if (container !== parentNode[listKey]) {
        return true;
      }
    } else {
      if (container !== parentNode) return true;
    }
    path = parentPath;
  }
  return false;
}
const handle = {
  memoise() {},
  handle(member, noDocumentAll) {
    const {
      node,
      parent,
      parentPath,
      scope
    } = member;
    if (member.isOptionalMemberExpression()) {
      if (isInDetachedTree(member)) return;
      const endPath = member.find(({
        node,
        parent
      }) => {
        if (isOptionalMemberExpression(parent)) {
          return parent.optional || parent.object !== node;
        }
        if (isOptionalCallExpression(parent)) {
          return (node !== member.node && parent.optional || parent.callee !== node
          );
        }
        return true;
      });
      if (scope.path.isPattern()) {
        endPath.replaceWith(callExpression(arrowFunctionExpression([], endPath.node), []));
        return;
      }
      const willEndPathCastToBoolean = willPathCastToBoolean(endPath);
      const rootParentPath = endPath.parentPath;
      if (rootParentPath.isUpdateExpression({
        argument: node
      })) {
        throw member.buildCodeFrameError(`can't handle update expression`);
      }
      const isAssignment = rootParentPath.isAssignmentExpression({
        left: endPath.node
      });
      const isDeleteOperation = rootParentPath.isUnaryExpression({
        operator: "delete"
      });
      if (isDeleteOperation && endPath.isOptionalMemberExpression() && endPath.get("property").isPrivateName()) {
        throw member.buildCodeFrameError(`can't delete a private class element`);
      }
      let startingOptional = member;
      for (;;) {
        if (startingOptional.isOptionalMemberExpression()) {
          if (startingOptional.node.optional) break;
          startingOptional = startingOptional.get("object");
          continue;
        } else if (startingOptional.isOptionalCallExpression()) {
          if (startingOptional.node.optional) break;
          startingOptional = startingOptional.get("callee");
          continue;
        }
        throw new Error(`Internal error: unexpected ${startingOptional.node.type}`);
      }
      const startingNode = startingOptional.isOptionalMemberExpression() ? startingOptional.node.object : startingOptional.node.callee;
      const baseNeedsMemoised = scope.maybeGenerateMemoised(startingNode);
      const baseRef = baseNeedsMemoised != null ? baseNeedsMemoised : startingNode;
      const parentIsOptionalCall = parentPath.isOptionalCallExpression({
        callee: node
      });
      const isOptionalCall = parent => parentIsOptionalCall;
      const parentIsCall = parentPath.isCallExpression({
        callee: node
      });
      startingOptional.replaceWith(toNonOptional(startingOptional, baseRef));
      if (isOptionalCall()) {
        if (parent.optional) {
          parentPath.replaceWith(this.optionalCall(member, parent.arguments));
        } else {
          parentPath.replaceWith(this.call(member, parent.arguments));
        }
      } else if (parentIsCall) {
        member.replaceWith(this.boundGet(member));
      } else if (this.delete && parentPath.isUnaryExpression({
        operator: "delete"
      })) {
        parentPath.replaceWith(this.delete(member));
      } else if (parentPath.isAssignmentExpression()) {
        handleAssignment(this, member, parentPath);
      } else {
        member.replaceWith(this.get(member));
      }
      let regular = member.node;
      for (let current = member; current !== endPath;) {
        const parentPath = current.parentPath;
        if (parentPath === endPath && isOptionalCall() && parent.optional) {
          regular = parentPath.node;
          break;
        }
        regular = toNonOptional(parentPath, regular);
        current = parentPath;
      }
      let context;
      const endParentPath = endPath.parentPath;
      if (isMemberExpression(regular) && endParentPath.isOptionalCallExpression({
        callee: endPath.node,
        optional: true
      })) {
        const {
          object
        } = regular;
        context = member.scope.maybeGenerateMemoised(object);
        if (context) {
          regular.object = assignmentExpression("=", context, object);
        }
      }
      let replacementPath = endPath;
      if (isDeleteOperation || isAssignment) {
        replacementPath = endParentPath;
        regular = endParentPath.node;
      }
      const baseMemoised = baseNeedsMemoised ? assignmentExpression("=", cloneNode(baseRef), cloneNode(startingNode)) : cloneNode(baseRef);
      if (willEndPathCastToBoolean) {
        let nonNullishCheck;
        if (noDocumentAll) {
          nonNullishCheck = binaryExpression("!=", baseMemoised, nullLiteral());
        } else {
          nonNullishCheck = logicalExpression("&&", binaryExpression("!==", baseMemoised, nullLiteral()), binaryExpression("!==", cloneNode(baseRef), scope.buildUndefinedNode()));
        }
        replacementPath.replaceWith(logicalExpression("&&", nonNullishCheck, regular));
      } else {
        let nullishCheck;
        if (noDocumentAll) {
          nullishCheck = binaryExpression("==", baseMemoised, nullLiteral());
        } else {
          nullishCheck = logicalExpression("||", binaryExpression("===", baseMemoised, nullLiteral()), binaryExpression("===", cloneNode(baseRef), scope.buildUndefinedNode()));
        }
        replacementPath.replaceWith(conditionalExpression(nullishCheck, isDeleteOperation ? booleanLiteral(true) : scope.buildUndefinedNode(), regular));
      }
      if (context) {
        const endParent = endParentPath.node;
        endParentPath.replaceWith(optionalCallExpression(optionalMemberExpression(endParent.callee, identifier("call"), false, true), [cloneNode(context), ...endParent.arguments], false));
      }
      return;
    }
    if (isUpdateExpression(parent, {
      argument: node
    })) {
      if (this.simpleSet) {
        member.replaceWith(this.simpleSet(member));
        return;
      }
      const {
        operator,
        prefix
      } = parent;
      this.memoise(member, 2);
      const ref = scope.generateUidIdentifierBasedOnNode(node);
      scope.push({
        id: ref
      });
      const seq = [assignmentExpression("=", cloneNode(ref), this.get(member))];
      if (prefix) {
        seq.push(updateExpression(operator, cloneNode(ref), prefix));
        const value = sequenceExpression(seq);
        parentPath.replaceWith(this.set(member, value));
        return;
      } else {
        const ref2 = scope.generateUidIdentifierBasedOnNode(node);
        scope.push({
          id: ref2
        });
        seq.push(assignmentExpression("=", cloneNode(ref2), updateExpression(operator, cloneNode(ref), prefix)), cloneNode(ref));
        const value = sequenceExpression(seq);
        parentPath.replaceWith(sequenceExpression([this.set(member, value), cloneNode(ref2)]));
        return;
      }
    }
    if (parentPath.isAssignmentExpression({
      left: node
    })) {
      handleAssignment(this, member, parentPath);
      return;
    }
    if (parentPath.isCallExpression({
      callee: node
    })) {
      parentPath.replaceWith(this.call(member, parentPath.node.arguments));
      return;
    }
    if (parentPath.isOptionalCallExpression({
      callee: node
    })) {
      if (scope.path.isPattern()) {
        parentPath.replaceWith(callExpression(arrowFunctionExpression([], parentPath.node), []));
        return;
      }
      parentPath.replaceWith(this.optionalCall(member, parentPath.node.arguments));
      return;
    }
    if (this.delete && parentPath.isUnaryExpression({
      operator: "delete"
    })) {
      parentPath.replaceWith(this.delete(member));
      return;
    }
    if (parentPath.isForXStatement({
      left: node
    }) || parentPath.isObjectProperty({
      value: node
    }) && parentPath.parentPath.isObjectPattern() || parentPath.isAssignmentPattern({
      left: node
    }) && parentPath.parentPath.isObjectProperty({
      value: parent
    }) && parentPath.parentPath.parentPath.isObjectPattern() || parentPath.isArrayPattern() || parentPath.isAssignmentPattern({
      left: node
    }) && parentPath.parentPath.isArrayPattern() || parentPath.isRestElement()) {
      member.replaceWith(this.destructureSet(member));
      return;
    }
    if (parentPath.isTaggedTemplateExpression()) {
      member.replaceWith(this.boundGet(member));
    } else {
      member.replaceWith(this.get(member));
    }
  }
};
function handleAssignment(state, member, parentPath) {
  if (state.simpleSet) {
    member.replaceWith(state.simpleSet(member));
    return;
  }
  const {
    operator,
    right: value
  } = parentPath.node;
  if (operator === "=") {
    parentPath.replaceWith(state.set(member, value));
  } else {
    const operatorTrunc = operator.slice(0, -1);
    if (LOGICAL_OPERATORS.includes(operatorTrunc)) {
      state.memoise(member, 1);
      parentPath.replaceWith(logicalExpression(operatorTrunc, state.get(member), state.set(member, value)));
    } else {
      state.memoise(member, 2);
      parentPath.replaceWith(state.set(member, binaryExpression(operatorTrunc, state.get(member), value)));
    }
  }
}
function memberExpressionToFunctions(path, visitor, state) {
  path.traverse(visitor, Object.assign({}, handle, state, {
    memoiser: new AssignmentMemoiser()
  }));
}

exports.default = memberExpressionToFunctions;
//# sourceMappingURL=index.js.map
