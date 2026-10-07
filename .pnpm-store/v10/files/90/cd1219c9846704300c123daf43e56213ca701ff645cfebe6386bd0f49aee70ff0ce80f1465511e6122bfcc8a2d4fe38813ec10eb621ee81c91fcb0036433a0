/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const IRTransformer = require('../core/IRTransformer');

import type CompilerContext from '../core/CompilerContext';
import type {Directive} from '../core/IR';

const COMPILE_TIME_DIRECTIVES = new Set(['required']);

/**
 * A transform that removes any directives that are only interpreted by the Relay compiler.
 */
function filterDirectivesTransform(context: CompilerContext): CompilerContext {
  return IRTransformer.transform(context, {
    Directive: (directive: Directive): ?Directive => {
      return COMPILE_TIME_DIRECTIVES.has(directive.name) ? null : directive;
    },
  });
}

module.exports = {
  transform: filterDirectivesTransform,
};
