/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

// flowlint ambiguous-object-type:error

'use strict';

const {getName} = require('./GraphQLASTUtils');

import type {SourceChanges} from './Sources';
import type {StrictMap} from './StrictMap';
import type {ExecutableDefinitionNode} from 'graphql';

function getChangedNodeNames<
  TProjectState: {
    +initialDirty: Set<string>,
    +changes: SourceChanges<ExecutableDefinitionNode>,
    ...
  },
>(
  projectStates: StrictMap<string, TProjectState>,
  projects: $ReadOnlyArray<string>,
): Set<string> {
  const changedNames = new Set();
  for (const projectType of projects) {
    const subConfig = projectStates.get(projectType);
    for (const name of subConfig.initialDirty) {
      changedNames.add(name);
    }
    for (const {ast} of subConfig.changes.added) {
      changedNames.add(getName(ast));
    }

    for (const {ast} of subConfig.changes.removed) {
      changedNames.add(getName(ast));
    }
  }
  return changedNames;
}

module.exports = getChangedNodeNames;
