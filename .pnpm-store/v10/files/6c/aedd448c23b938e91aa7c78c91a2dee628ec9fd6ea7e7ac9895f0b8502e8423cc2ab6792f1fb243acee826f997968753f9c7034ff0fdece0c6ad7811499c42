"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperMemberExpressionToFunctions = require("@babel/helper-member-expression-to-functions");
var _helperOptimiseCallExpression = require("@babel/helper-optimise-call-expression");
var _core = require("@babel/core");
var _traverse = require("@babel/traverse");
const {
  assignmentExpression,
  callExpression,
  cloneNode,
  identifier,
  memberExpression,
  sequenceExpression,
  stringLiteral,
  thisExpression
} = _core.types;
exports.environmentVisitor = _traverse.visitors.environmentVisitor({});
exports.skipAllButComputedKey = function skipAllButComputedKey(path) {
  path.skip();
  if (path.node.computed) {
    path.context.maybeQueue(path.get("key"));
  }
};
const visitor = _traverse.visitors.environmentVisitor({
  Super(path, state) {
    const {
      node,
      parentPath
    } = path;
    if (!parentPath.isMemberExpression({
      object: node
    })) return;
    state.handle(parentPath);
  }
});
const unshadowSuperBindingVisitor = _traverse.visitors.environmentVisitor({
  Scopable(path, {
    refName
  }) {
    const binding = path.scope.getOwnBinding(refName);
    if ((binding == null ? void 0 : binding.identifier.name) === refName) {
      path.scope.rename(refName);
    }
  }
});
const specHandlers = {
  memoise(superMember, count) {
    const {
      scope,
      node
    } = superMember;
    const {
      computed,
      property
    } = node;
    if (!computed) {
      return;
    }
    const memo = scope.maybeGenerateMemoised(property);
    if (!memo) {
      return;
    }
    this.memoiser.set(property, memo, count);
  },
  prop(superMember) {
    const {
      computed,
      property
    } = superMember.node;
    if (this.memoiser.has(property)) {
      return cloneNode(this.memoiser.get(property));
    }
    if (computed) {
      return cloneNode(property);
    }
    return stringLiteral(property.name);
  },
  _getPrototypeOfExpression() {
    const objectRef = cloneNode(this.getObjectRef());
    const targetRef = this.isStatic || this.isPrivateMethod ? objectRef : memberExpression(objectRef, identifier("prototype"));
    return callExpression(this.file.addHelper("getPrototypeOf"), [targetRef]);
  },
  get(superMember) {
    const objectRef = cloneNode(this.getObjectRef());
    return callExpression(this.file.addHelper("superPropGet"), [this.isDerivedConstructor ? sequenceExpression([thisExpression(), objectRef]) : objectRef, this.prop(superMember), thisExpression(), ...(this.isStatic || this.isPrivateMethod ? [] : [_core.types.numericLiteral(1)])]);
  },
  _call(superMember, args, optional) {
    const objectRef = cloneNode(this.getObjectRef());
    let argsNode;
    if (args.length === 1 && _core.types.isSpreadElement(args[0]) && (_core.types.isIdentifier(args[0].argument) || _core.types.isArrayExpression(args[0].argument))) {
      argsNode = args[0].argument;
    } else {
      argsNode = _core.types.arrayExpression(args);
    }
    const call = _core.types.callExpression(this.file.addHelper("superPropGet"), [this.isDerivedConstructor ? sequenceExpression([thisExpression(), objectRef]) : objectRef, this.prop(superMember), thisExpression(), _core.types.numericLiteral(2 | (this.isStatic || this.isPrivateMethod ? 0 : 1))]);
    if (optional) {
      return _core.types.optionalCallExpression(call, [argsNode], true);
    }
    return callExpression(call, [argsNode]);
  },
  set(superMember, value) {
    const objectRef = cloneNode(this.getObjectRef());
    return callExpression(this.file.addHelper("superPropSet"), [this.isDerivedConstructor ? sequenceExpression([thisExpression(), objectRef]) : objectRef, this.prop(superMember), value, thisExpression(), _core.types.numericLiteral(superMember.isInStrictMode() ? 1 : 0), ...(this.isStatic || this.isPrivateMethod ? [] : [_core.types.numericLiteral(1)])]);
  },
  destructureSet(superMember) {
    throw superMember.buildCodeFrameError(`Destructuring to a super field is not supported yet.`);
  },
  call(superMember, args) {
    return this._call(superMember, args, false);
  },
  optionalCall(superMember, args) {
    return this._call(superMember, args, true);
  },
  delete(superMember) {
    if (superMember.node.computed) {
      return sequenceExpression([callExpression(this.file.addHelper("toPropertyKey"), [cloneNode(superMember.node.property)]), _core.template.expression.ast`
          function () { throw new ReferenceError("'delete super[expr]' is invalid"); }()
        `]);
    } else {
      return _core.template.expression.ast`
        function () { throw new ReferenceError("'delete super.prop' is invalid"); }()
      `;
    }
  }
};
const specHandlers_old = {
  memoise(superMember, count) {
    const {
      scope,
      node
    } = superMember;
    const {
      computed,
      property
    } = node;
    if (!computed) {
      return;
    }
    const memo = scope.maybeGenerateMemoised(property);
    if (!memo) {
      return;
    }
    this.memoiser.set(property, memo, count);
  },
  prop(superMember) {
    const {
      computed,
      property
    } = superMember.node;
    if (this.memoiser.has(property)) {
      return cloneNode(this.memoiser.get(property));
    }
    if (computed) {
      return cloneNode(property);
    }
    return stringLiteral(property.name);
  },
  _getPrototypeOfExpression() {
    const objectRef = cloneNode(this.getObjectRef());
    const targetRef = this.isStatic || this.isPrivateMethod ? objectRef : memberExpression(objectRef, identifier("prototype"));
    return callExpression(this.file.addHelper("getPrototypeOf"), [targetRef]);
  },
  get(superMember) {
    return this._get(superMember);
  },
  _get(superMember) {
    const proto = this._getPrototypeOfExpression();
    return callExpression(this.file.addHelper("get"), [this.isDerivedConstructor ? sequenceExpression([thisExpression(), proto]) : proto, this.prop(superMember), thisExpression()]);
  },
  set(superMember, value) {
    const proto = this._getPrototypeOfExpression();
    return callExpression(this.file.addHelper("set"), [this.isDerivedConstructor ? sequenceExpression([thisExpression(), proto]) : proto, this.prop(superMember), value, thisExpression(), _core.types.booleanLiteral(superMember.isInStrictMode())]);
  },
  destructureSet(superMember) {
    throw superMember.buildCodeFrameError(`Destructuring to a super field is not supported yet.`);
  },
  call(superMember, args) {
    return (0, _helperOptimiseCallExpression.default)(this._get(superMember), thisExpression(), args, false);
  },
  optionalCall(superMember, args) {
    return (0, _helperOptimiseCallExpression.default)(this._get(superMember), cloneNode(thisExpression()), args, true);
  },
  delete(superMember) {
    if (superMember.node.computed) {
      return sequenceExpression([callExpression(this.file.addHelper("toPropertyKey"), [cloneNode(superMember.node.property)]), _core.template.expression.ast`
          function () { throw new ReferenceError("'delete super[expr]' is invalid"); }()
        `]);
    } else {
      return _core.template.expression.ast`
        function () { throw new ReferenceError("'delete super.prop' is invalid"); }()
      `;
    }
  }
};
const looseHandlers = Object.assign({}, specHandlers, {
  prop(superMember) {
    const {
      property
    } = superMember.node;
    if (this.memoiser.has(property)) {
      return cloneNode(this.memoiser.get(property));
    }
    return cloneNode(property);
  },
  get(superMember) {
    const {
      isStatic,
      getSuperRef
    } = this;
    const {
      computed
    } = superMember.node;
    const prop = this.prop(superMember);
    let object;
    if (isStatic) {
      var _getSuperRef;
      object = (_getSuperRef = getSuperRef()) != null ? _getSuperRef : memberExpression(identifier("Function"), identifier("prototype"));
    } else {
      var _getSuperRef2;
      object = memberExpression((_getSuperRef2 = getSuperRef()) != null ? _getSuperRef2 : identifier("Object"), identifier("prototype"));
    }
    return memberExpression(object, prop, computed);
  },
  set(superMember, value) {
    const {
      computed
    } = superMember.node;
    const prop = this.prop(superMember);
    return assignmentExpression("=", memberExpression(thisExpression(), prop, computed), value);
  },
  destructureSet(superMember) {
    const {
      computed
    } = superMember.node;
    const prop = this.prop(superMember);
    return memberExpression(thisExpression(), prop, computed);
  },
  call(superMember, args) {
    return (0, _helperOptimiseCallExpression.default)(this.get(superMember), thisExpression(), args, false);
  },
  optionalCall(superMember, args) {
    return (0, _helperOptimiseCallExpression.default)(this.get(superMember), thisExpression(), args, true);
  }
});
class ReplaceSupers {
  constructor(opts) {
    var _opts$constantSuper;
    const path = opts.methodPath;
    this.methodPath = path;
    this.isDerivedConstructor = path.isClassMethod({
      kind: "constructor"
    }) && !!opts.superRef;
    this.isStatic = path.isObjectMethod() || path.node.static || (path.isStaticBlock == null ? void 0 : path.isStaticBlock());
    this.isPrivateMethod = path.isPrivate() && path.isMethod();
    this.file = opts.file;
    this.constantSuper = (_opts$constantSuper = opts.constantSuper) != null ? _opts$constantSuper : opts.isLoose;
    this.opts = opts;
  }
  getObjectRef() {
    return cloneNode(this.opts.objectRef || this.opts.getObjectRef());
  }
  getSuperRef() {
    if (this.opts.superRef) return cloneNode(this.opts.superRef);
    if (this.opts.getSuperRef) {
      return cloneNode(this.opts.getSuperRef());
    }
  }
  replace() {
    const {
      methodPath
    } = this;
    if (this.opts.refToPreserve) {
      methodPath.traverse(unshadowSuperBindingVisitor, {
        refName: this.opts.refToPreserve.name
      });
    }
    const handler = this.constantSuper ? looseHandlers : this.file.availableHelper("superPropSet") ? specHandlers : specHandlers_old;
    visitor.shouldSkip = path => {
      if (path.parentPath === methodPath) {
        if (path.parentKey === "decorators" || path.parentKey === "key") {
          return true;
        }
      }
    };
    (0, _helperMemberExpressionToFunctions.default)(methodPath, visitor, Object.assign({
      file: this.file,
      scope: this.methodPath.scope,
      isDerivedConstructor: this.isDerivedConstructor,
      isStatic: this.isStatic,
      isPrivateMethod: this.isPrivateMethod,
      getObjectRef: this.getObjectRef.bind(this),
      getSuperRef: this.getSuperRef.bind(this),
      boundGet: handler.get
    }, handler));
  }
}
exports.default = ReplaceSupers;

//# sourceMappingURL=index.js.map
