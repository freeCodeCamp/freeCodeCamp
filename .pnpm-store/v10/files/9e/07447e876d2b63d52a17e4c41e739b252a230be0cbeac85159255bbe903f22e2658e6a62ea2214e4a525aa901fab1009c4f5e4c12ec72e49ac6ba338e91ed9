/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

export type WatchmanFile =
  | {
      +exists: true,
      +name: string,
      +'content.sha1hex': string,
      ...
    }
  | {
      +exists: false,
      +name: string,
      ...
    };

export type SavedStateCollection = $ReadOnlyArray<{|
  +file: string,
  +sources: $ReadOnlyArray<string>,
|}>;

export type SavedState<TSubProjectsType> = {
  [TSubProjectsType]: SavedStateCollection,
  ...,
};
