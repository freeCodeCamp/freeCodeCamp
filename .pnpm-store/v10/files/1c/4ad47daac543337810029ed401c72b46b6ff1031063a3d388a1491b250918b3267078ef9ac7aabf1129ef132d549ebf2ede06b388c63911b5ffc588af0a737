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

import type {
  ArgumentDefinition,
  Fragment,
  FragmentSpread,
  LocalArgumentDefinition,
} from '../../core/IR';

function buildFragmentSpread(fragment: Fragment): FragmentSpread {
  const args = [];
  for (const argDef of fragment.argumentDefinitions) {
    if (argDef.kind !== 'LocalArgumentDefinition') {
      continue;
    }
    args.push({
      kind: 'Argument',
      loc: {kind: 'Derived', source: argDef.loc},
      name: argDef.name,
      type: argDef.type,
      value: {
        kind: 'Variable',
        loc: {kind: 'Derived', source: argDef.loc},
        variableName: argDef.name,
        type: argDef.type,
      },
    });
  }
  return {
    args,
    directives: [],
    kind: 'FragmentSpread',
    loc: {kind: 'Derived', source: fragment.loc},
    metadata: null,
    name: fragment.name,
  };
}

function buildOperationArgumentDefinitions(
  argumentDefinitions: $ReadOnlyArray<ArgumentDefinition>,
): $ReadOnlyArray<LocalArgumentDefinition> {
  const localArgumentDefinitions = argumentDefinitions.map(argDef => {
    if (argDef.kind === 'LocalArgumentDefinition') {
      return argDef;
    } else {
      return {
        kind: 'LocalArgumentDefinition',
        name: argDef.name,
        type: argDef.type,
        defaultValue: null,
        loc: argDef.loc,
      };
    }
  });
  localArgumentDefinitions.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  return localArgumentDefinitions;
}

module.exports = {
  buildFragmentSpread,
  buildOperationArgumentDefinitions,
};
