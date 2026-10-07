"use strict";

var util = _interopRequireWildcard(require("./util"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasOwn = Object.prototype.hasOwnProperty;

// The hoist function takes a FunctionExpression or FunctionDeclaration
// and replaces any Declaration nodes in its body with assignments, then
// returns a VariableDeclaration containing just the names of the removed
// declarations.
exports.hoist = function (funPath) {
  var t = util.getTypes();
  t.assertFunction(funPath.node);
  var vars = {};
  function varDeclToExpr(_ref, includeIdentifiers) {
    var vdec = _ref.node,
      scope = _ref.scope;
    t.assertVariableDeclaration(vdec);
    // TODO assert.equal(vdec.kind, "var");
    var exprs = [];
    vdec.declarations.forEach(function (dec) {
      // Note: We duplicate 'dec.id' here to ensure that the variable declaration IDs don't
      // have the same 'loc' value, since that can make sourcemaps and retainLines behave poorly.
      vars[dec.id.name] = t.identifier(dec.id.name);

      // Remove the binding, to avoid "duplicate declaration" errors when it will
      // be injected again.
      scope.removeBinding(dec.id.name);
      if (dec.init) {
        exprs.push(t.assignmentExpression("=", dec.id, dec.init));
      } else if (includeIdentifiers) {
        exprs.push(dec.id);
      }
    });
    if (exprs.length === 0) return null;
    if (exprs.length === 1) return exprs[0];
    return t.sequenceExpression(exprs);
  }
  funPath.get("body").traverse({
    VariableDeclaration: {
      exit: function exit(path) {
        var expr = varDeclToExpr(path, false);
        if (expr === null) {
          path.remove();
        } else {
          // We don't need to traverse this expression any further because
          // there can't be any new declarations inside an expression.
          util.replaceWithOrRemove(path, t.expressionStatement(expr));
        }

        // Since the original node has been either removed or replaced,
        // avoid traversing it any further.
        path.skip();
      }
    },
    ForStatement: function ForStatement(path) {
      var init = path.get("init");
      if (init.isVariableDeclaration()) {
        util.replaceWithOrRemove(init, varDeclToExpr(init, false));
      }
    },
    ForXStatement: function ForXStatement(path) {
      var left = path.get("left");
      if (left.isVariableDeclaration()) {
        util.replaceWithOrRemove(left, varDeclToExpr(left, true));
      }
    },
    FunctionDeclaration: function FunctionDeclaration(path) {
      var node = path.node;
      vars[node.id.name] = node.id;
      var assignment = t.expressionStatement(t.assignmentExpression("=", t.clone(node.id), t.functionExpression(path.scope.generateUidIdentifierBasedOnNode(node), node.params, node.body, node.generator, node.expression)));
      if (path.parentPath.isBlockStatement()) {
        // Insert the assignment form before the first statement in the
        // enclosing block.
        path.parentPath.unshiftContainer("body", assignment);

        // Remove the function declaration now that we've inserted the
        // equivalent assignment form at the beginning of the block.
        path.remove();
      } else {
        // If the parent node is not a block statement, then we can just
        // replace the declaration with the equivalent assignment form
        // without worrying about hoisting it.
        util.replaceWithOrRemove(path, assignment);
      }

      // Remove the binding, to avoid "duplicate declaration" errors when it will
      // be injected again.
      path.scope.removeBinding(node.id.name);

      // Don't hoist variables out of inner functions.
      path.skip();
    },
    FunctionExpression: function FunctionExpression(path) {
      // Don't descend into nested function expressions.
      path.skip();
    },
    ArrowFunctionExpression: function ArrowFunctionExpression(path) {
      // Don't descend into nested function expressions.
      path.skip();
    }
  });
  var paramNames = {};
  funPath.get("params").forEach(function (paramPath) {
    var param = paramPath.node;
    if (t.isIdentifier(param)) {
      paramNames[param.name] = param;
    } else {
      // Variables declared by destructuring parameter patterns will be
      // harmlessly re-declared.
    }
  });
  var declarations = [];
  Object.keys(vars).forEach(function (name) {
    if (!hasOwn.call(paramNames, name)) {
      declarations.push(t.variableDeclarator(vars[name], null));
    }
  });
  if (declarations.length === 0) {
    return null; // Be sure to handle this case!
  }

  return t.variableDeclaration("var", declarations);
};