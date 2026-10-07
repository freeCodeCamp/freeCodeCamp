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

/**
 * Partitions an array given a predicate. All elements satisfying the predicate
 * are part of the first returned array, and all elements that don't are in the
 * second.
 */
function partitionArray<Tv>(
  array: $ReadOnlyArray<Tv>,
  predicate: (value: Tv) => boolean,
): [$ReadOnlyArray<Tv>, $ReadOnlyArray<Tv>] {
  const first = [];
  const second = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (predicate(item)) {
      first.push(item);
    } else {
      second.push(item);
    }
  }
  return [first, second];
}

module.exports = partitionArray;
