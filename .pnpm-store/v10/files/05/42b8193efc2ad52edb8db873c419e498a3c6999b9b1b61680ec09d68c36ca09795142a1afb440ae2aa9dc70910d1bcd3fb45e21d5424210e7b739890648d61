/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var ITERATOR_KEY = Symbol.iterator;

function hasOverlappingIDs(seenRecords, updatedRecordIDs) {
  // $FlowFixMe: Set is an iterable type, accessing its iterator is allowed.
  var iterator = seenRecords[ITERATOR_KEY]();
  var next = iterator.next();

  while (!next.done) {
    var key = next.value;

    if (updatedRecordIDs.has(key)) {
      return true;
    }

    next = iterator.next();
  }

  return false;
}

module.exports = hasOverlappingIDs;