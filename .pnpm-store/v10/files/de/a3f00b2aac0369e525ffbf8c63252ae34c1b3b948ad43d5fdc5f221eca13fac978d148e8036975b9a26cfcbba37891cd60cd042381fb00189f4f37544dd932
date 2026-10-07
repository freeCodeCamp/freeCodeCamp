/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

import assert from "assert";
import { hoist } from "./hoist";
import { Emitter } from "./emit";
import replaceShorthandObjectMethod from "./replaceShorthandObjectMethod";
import * as util from "./util";

exports.getVisitor = ({ types: t }) => ({
  Method(path, state) {
    let node = path.node;

    if (!shouldRegenerate(node, state)) return;

    const container = t.functionExpression(
      null,
      [],
      t.cloneNode(node.body, false),
      node.generator,
      node.async,
    );

    path.get("body").set("body", [
      t.returnStatement(
        t.callExpression(container, []),
      ),
    ]);

    // Regardless of whether or not the wrapped function is a an async method
    // or generator the outer function should not be
    node.async = false;
    node.generator = false;

    // Unwrap the wrapper IIFE's environment so super and this and such still work.
    path
      .get("body.body.0.argument.callee")
      .unwrapFunctionEnvironment();
  },
  Function: {
    exit: util.wrapWithTypes(t, function(path, state) {
      let node = path.node;

      if (!shouldRegenerate(node, state)) return;

      // if this is an ObjectMethod, we need to convert it to an ObjectProperty
      path = replaceShorthandObjectMethod(path);
      node = path.node;

      let contextId = path.scope.generateUidIdentifier("context");
      let argsId = path.scope.generateUidIdentifier("args");

      path.ensureBlock();
      let bodyBlockPath = path.get("body");

      if (node.async) {
        bodyBlockPath.traverse(awaitVisitor);
      }

      bodyBlockPath.traverse(functionSentVisitor, {
        context: contextId
      });

      let outerBody = [];
      let innerBody = [];

      bodyBlockPath.get("body").forEach(function(childPath) {
        let node = childPath.node;
        if (t.isExpressionStatement(node) &&
            t.isStringLiteral(node.expression)) {
          // Babylon represents directives like "use strict" as elements
          // of a bodyBlockPath.node.directives array, but they could just
          // as easily be represented (by other parsers) as traditional
          // string-literal-valued expression statements, so we need to
          // handle that here. (#248)
          outerBody.push(node);
        } else if (node && node._blockHoist != null) {
          outerBody.push(node);
        } else {
          innerBody.push(node);
        }
      });

      if (outerBody.length > 0) {
        // Only replace the inner body if we actually hoisted any statements
        // to the outer body.
        bodyBlockPath.node.body = innerBody;
      }

      let outerFnExpr = getOuterFnExpr(path);
      // Note that getOuterFnExpr has the side-effect of ensuring that the
      // function has a name (so node.id will always be an Identifier), even
      // if a temporary name has to be synthesized.
      t.assertIdentifier(node.id);
      let innerFnId = t.identifier(node.id.name + "$");

      // Turn all declarations into vars, and replace the original
      // declarations with equivalent assignment expressions.
      let vars = hoist(path);

      let context = {
        usesThis: false,
        usesArguments: false,
        getArgsId: () => t.clone(argsId),
      };
      path.traverse(argumentsThisVisitor, context);

      if (context.usesArguments) {
        vars = vars || t.variableDeclaration("var", []);
        vars.declarations.push(t.variableDeclarator(
          t.clone(argsId),
          t.identifier("arguments"),
        ));
      }

      let emitter = new Emitter(contextId);
      emitter.explode(path.get("body"));

      if (vars && vars.declarations.length > 0) {
        outerBody.push(vars);
      }

      let wrapArgs = [emitter.getContextFunction(innerFnId)];
      let tryLocsList = emitter.getTryLocsList();

      if (node.generator) {
        wrapArgs.push(outerFnExpr);
      } else if (context.usesThis || tryLocsList || node.async) {
        // Async functions that are not generators don't care about the
        // outer function because they don't need it to be marked and don't
        // inherit from its .prototype.
        wrapArgs.push(t.nullLiteral());
      }
      if (context.usesThis) {
        wrapArgs.push(t.thisExpression());
      } else if (tryLocsList || node.async) {
        wrapArgs.push(t.nullLiteral());
      }
      if (tryLocsList) {
        wrapArgs.push(tryLocsList);
      } else if (node.async) {
        wrapArgs.push(t.nullLiteral());
      }

      if (node.async) {
        // Rename any locally declared "Promise" variable,
        // to use the global one.
        let currentScope = path.scope;
        do {
          if (currentScope.hasOwnBinding("Promise")) currentScope.rename("Promise");
        } while (currentScope = currentScope.parent);

        wrapArgs.push(t.identifier("Promise"));
      }

      let wrapCall = t.callExpression(
        util.runtimeProperty(node.async ? "async" : "wrap"),
        wrapArgs
      );

      outerBody.push(t.returnStatement(wrapCall));
      node.body = t.blockStatement(outerBody);
      // We injected a few new variable declarations (for every hoisted var),
      // so we need to add them to the scope.
      path.get("body.body").forEach(p => p.scope.registerDeclaration(p));

      const oldDirectives = bodyBlockPath.node.directives;
      if (oldDirectives) {
        // Babylon represents directives like "use strict" as elements of
        // a bodyBlockPath.node.directives array. (#248)
        node.body.directives = oldDirectives;
      }

      let wasGeneratorFunction = node.generator;
      if (wasGeneratorFunction) {
        node.generator = false;
      }

      if (node.async) {
        node.async = false;
      }

      if (wasGeneratorFunction && t.isExpression(node)) {
        util.replaceWithOrRemove(path, t.callExpression(util.runtimeProperty("mark"), [node]))
        path.addComment("leading", "#__PURE__");
      }

      const insertedLocs = emitter.getInsertedLocs();

      path.traverse({
        NumericLiteral(path) {
          if (!insertedLocs.has(path.node)) {
            return;
          }

          path.replaceWith(t.numericLiteral(path.node.value));
        },
      })

      // Generators are processed in 'exit' handlers so that regenerator only has to run on
      // an ES5 AST, but that means traversal will not pick up newly inserted references
      // to things like 'regeneratorRuntime'. To avoid this, we explicitly requeue.
      path.requeue();
    })
  }
});

// Check if a node should be transformed by regenerator
function shouldRegenerate(node, state) {
  if (node.generator) {
    if (node.async) {
      // Async generator
      return state.opts.asyncGenerators !== false;
    } else {
      // Plain generator
      return state.opts.generators !== false;
    }
  } else if (node.async) {
    // Async function
    return state.opts.async !== false;
  } else {
    // Not a generator or async function.
    return false;
  }
}

// Given a NodePath for a Function, return an Expression node that can be
// used to refer reliably to the function object from inside the function.
// This expression is essentially a replacement for arguments.callee, with
// the key advantage that it works in strict mode.
function getOuterFnExpr(funPath) {
  const t = util.getTypes();
  let node = funPath.node;
  t.assertFunction(node);

  if (!node.id) {
    // Default-exported function declarations, and function expressions may not
    // have a name to reference, so we explicitly add one.
    node.id = funPath.scope.parent.generateUidIdentifier("callee");
  }

  if (node.generator && // Non-generator functions don't need to be marked.
      t.isFunctionDeclaration(node)) {
    // Return the identifier returned by runtime.mark(<node.id>).
    return getMarkedFunctionId(funPath);
  }

  return t.clone(node.id);
}

const markInfo = new WeakMap();

function getMarkInfo(node) {
  if (!markInfo.has(node)) {
    markInfo.set(node, {});
  }
  return markInfo.get(node);
}

function getMarkedFunctionId(funPath) {
  const t = util.getTypes();
  const node = funPath.node;
  t.assertIdentifier(node.id);

  const blockPath = funPath.findParent(function (path) {
    return path.isProgram() || path.isBlockStatement();
  });

  if (!blockPath) {
    return node.id;
  }

  const block = blockPath.node;
  assert.ok(Array.isArray(block.body));

  const info = getMarkInfo(block);
  if (!info.decl) {
    info.decl = t.variableDeclaration("var", []);
    blockPath.unshiftContainer("body", info.decl);
    info.declPath = blockPath.get("body.0");
  }

  assert.strictEqual(info.declPath.node, info.decl);

  // Get a new unique identifier for our marked variable.
  const markedId = blockPath.scope.generateUidIdentifier("marked");
  const markCallExp = t.callExpression(
    util.runtimeProperty("mark"),
    [t.clone(node.id)]
  );

  const index = info.decl.declarations.push(
    t.variableDeclarator(markedId, markCallExp)
  ) - 1;

  const markCallExpPath =
    info.declPath.get("declarations." + index + ".init");

  assert.strictEqual(markCallExpPath.node, markCallExp);

  markCallExpPath.addComment("leading", "#__PURE__");

  return t.clone(markedId);
}

let argumentsThisVisitor = {
  "FunctionExpression|FunctionDeclaration|Method": function(path) {
    path.skip();
  },

  Identifier: function(path, state) {
    if (path.node.name === "arguments" && util.isReference(path)) {
      util.replaceWithOrRemove(path, state.getArgsId());
      state.usesArguments = true;
    }
  },

  ThisExpression: function(path, state) {
    state.usesThis = true;
  }
};

let functionSentVisitor = {
  MetaProperty(path) {
    let { node } = path;

    if (node.meta.name === "function" &&
        node.property.name === "sent") {
      const t = util.getTypes();
      util.replaceWithOrRemove(
        path,
        t.memberExpression(
          t.clone(this.context),
          t.identifier("_sent")
        )
      );
    }
  }
};

let awaitVisitor = {
  Function: function(path) {
    path.skip(); // Don't descend into nested function scopes.
  },

  AwaitExpression: function(path) {
    const t = util.getTypes();

    // Convert await expressions to yield expressions.
    let argument = path.node.argument;

    // Transforming `await x` to `yield regeneratorRuntime.awrap(x)`
    // causes the argument to be wrapped in such a way that the runtime
    // can distinguish between awaited and merely yielded values.
    util.replaceWithOrRemove(path, t.yieldExpression(
      t.callExpression(
        util.runtimeProperty("awrap"),
        [argument]
      ),
      false
    ));
  }
};
