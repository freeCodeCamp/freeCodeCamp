/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const IRTransformer = require('../core/IRTransformer');

import type CompilerContext from '../core/CompilerContext';
import type {Directive} from '../core/IR';

/**
 * A transform that removes any directives that were not present in the
 * server schema.
 */
function filterDirectivesTransform(context: CompilerContext): CompilerContext {
  const schemaDirectives = new Set(
    context
      .getSchema()
      .getDirectives()
      .filter(directive => !directive.isClient)
      .map(schemaDirective => schemaDirective.name),
  );
  const visitDirective = (directive: Directive): ?Directive => {
    if (schemaDirectives.has(directive.name)) {
      return directive;
    }
    return null;
  };
  return IRTransformer.transform(context, {
    Directive: visitDirective,
  });
}

module.exports = {
  transform: filterDirectivesTransform,
};
