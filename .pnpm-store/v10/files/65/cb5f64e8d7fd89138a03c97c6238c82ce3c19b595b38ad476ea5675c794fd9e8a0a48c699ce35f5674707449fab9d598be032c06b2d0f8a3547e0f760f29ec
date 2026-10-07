/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {Argument} from './IR';

// Copy of Variables type from '../../../react-relay/classic/tools/RelayTypes'
// Duplicating here rather than importing it since we can't take on a dependency
// outside of relay-compiler.
type Variables = {[name: string]: mixed, ...};

function getLiteralArgumentValues(args: $ReadOnlyArray<Argument>): Variables {
  const values = {};
  args.forEach(arg => {
    if (arg.value.kind === 'Literal') {
      values[arg.name] = arg.value.value;
    }
  });
  return values;
}

module.exports = getLiteralArgumentValues;
