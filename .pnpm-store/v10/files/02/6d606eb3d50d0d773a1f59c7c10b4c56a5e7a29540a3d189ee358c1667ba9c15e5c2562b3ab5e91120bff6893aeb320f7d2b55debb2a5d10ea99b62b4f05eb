/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule partitionArray
 * @typechecks
 * @flow
 */

/**
 * Partitions an array given a predicate. All elements satisfying the predicate
 * are part of the first returned array, and all elements that don't are in the
 * second.
 */
function partitionArray<Tv>(array: Array<Tv>, predicate: (value: Tv, index: number, array: Array<Tv>) => boolean, context?: any): [Array<Tv>, Array<Tv>] {
  var first = [];
  var second = [];
  array.forEach((element, index) => {
    if (predicate.call(context, element, index, array)) {
      first.push(element);
    } else {
      second.push(element);
    }
  });
  return [first, second];
}

module.exports = partitionArray;