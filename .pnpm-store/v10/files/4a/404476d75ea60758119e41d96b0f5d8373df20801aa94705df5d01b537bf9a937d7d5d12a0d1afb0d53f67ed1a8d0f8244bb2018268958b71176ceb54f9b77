/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {ReaderArgument, NormalizationArgument} from 'relay-runtime';

function argumentContainsVariables(
  arg: ?(ReaderArgument | NormalizationArgument),
): boolean {
  if (arg == null) {
    return false;
  }
  switch (arg.kind) {
    case 'Variable':
      return true;
    case 'Literal':
      return false;
    case 'ListValue':
      return arg.items.some(argumentContainsVariables);
    case 'ObjectValue':
      return arg.fields.some(argumentContainsVariables);
    default:
      (arg.kind: empty);
      return false;
  }
}

module.exports = argumentContainsVariables;
