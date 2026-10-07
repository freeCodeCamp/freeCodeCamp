/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = function(babel) {
  var t = babel.types;

  var SEEN_SYMBOL = Symbol();

  var DEV_EXPRESSION = t.binaryExpression(
    '!==',
    t.memberExpression(
      t.memberExpression(
        t.identifier('process'),
        t.identifier('env'),
        false
      ),
      t.identifier('NODE_ENV'),
      false
    ),
    t.stringLiteral('production')
  );

  return {
    visitor: {
      Identifier: {
        enter: function(path) {
          // Do nothing when testing
          if (process.env.NODE_ENV === 'test') {
            return;
          }
          // replace __DEV__ with process.env.NODE_ENV !== 'production'
          if (path.isIdentifier({name: '__DEV__'})) {
            path.replaceWith(DEV_EXPRESSION);
          }
        },
      },
      CallExpression: {
        exit: function(path) {
          var node = path.node;
          // Do nothing when testing
          if (process.env.NODE_ENV === 'test') {
            return;
          }
          // Ignore if it's already been processed
          if (node[SEEN_SYMBOL]) {
            return;
          }
          if (path.get('callee').isIdentifier({name: 'invariant'})) {
            // Turns this code:
            //
            // invariant(condition, argument, argument);
            //
            // into this:
            //
            // if (!condition) {
            //   if ("production" !== process.env.NODE_ENV) {
            //     invariant(false, argument, argument);
            //   } else {
            //     invariant(false);
            //   }
            // }
            //
            // Specifically this does 2 things:
            // 1. Checks the condition first, preventing an extra function call.
            // 2. Adds an environment check so that verbose error messages aren't
            //    shipped to production.
            // The generated code is longer than the original code but will dead
            // code removal in a minifier will strip that out.
            var condition = node.arguments[0];
            var devInvariant = t.callExpression(
              node.callee,
              [t.booleanLiteral(false)].concat(node.arguments.slice(1))
            );
            devInvariant[SEEN_SYMBOL] = true;
            var prodInvariant = t.callExpression(
              node.callee,
              [t.booleanLiteral(false)]
            );
            prodInvariant[SEEN_SYMBOL] = true;
            path.replaceWith(t.ifStatement(
              t.unaryExpression('!', condition),
              t.blockStatement([
                t.ifStatement(
                  DEV_EXPRESSION,
                  t.blockStatement([
                    t.expressionStatement(devInvariant),
                  ]),
                  t.blockStatement([
                    t.expressionStatement(prodInvariant),
                  ])
                ),
              ])
            ));
          } else if (path.get('callee').isIdentifier({name: 'warning'})) {
            // Turns this code:
            //
            // warning(condition, argument, argument);
            //
            // into this:
            //
            // if ("production" !== process.env.NODE_ENV) {
            //   warning(condition, argument, argument);
            // }
            //
            // The goal is to strip out warning calls entirely in production. We
            // don't need the same optimizations for conditions that we use for
            // invariant because we don't care about an extra call in __DEV__

            node[SEEN_SYMBOL] = true;
            path.replaceWith(t.ifStatement(
              DEV_EXPRESSION,
              t.blockStatement([
                t.expressionStatement(
                  node
                ),
              ])
            ));
          }
        },
      },
    },
  };
};
