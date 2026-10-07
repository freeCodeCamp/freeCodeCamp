/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = function(babel) {
  const t = babel.types;

  // We can't construct an identifier with a type annotation all in 1 fell swoop
  // so we have to create & mutate, then pass along.
  const DEV_IDENTIFIER = t.identifier('__DEV__');
  DEV_IDENTIFIER.typeAnnotation = t.typeAnnotation(t.booleanTypeAnnotation());
  const DEV_DECLARATION = t.declareVariable(
    DEV_IDENTIFIER
  );

  return {
    pre() {
      this.usesDEV = false;
    },

    visitor: {
      Identifier: {
        enter(path, file) {
          this.usesDEV = this.usesDEV || path.isIdentifier({name: '__DEV__'});
        },
      },

      Program: {
        exit(path, file) {
          if (!this.usesDEV) {
            return;
          }

          // Add the declaration at the front of the body if we've used __DEV__.
          path.node.body.unshift(DEV_DECLARATION);
        },
      },
    },
  };
};
