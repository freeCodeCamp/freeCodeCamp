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

export type CompileResult = 'HAS_CHANGES' | 'NO_CHANGES' | 'ERROR';

export type File =
  | {
      exists: false,
      relPath: string,
      ...
    }
  | {
      exists: true,
      relPath: string,
      hash: string,
      ...
    };
