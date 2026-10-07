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

export type RecordState = $Keys<typeof RelayRecordState>;

const RelayRecordState = {
  /**
   * Record exists (either fetched from the server or produced by a local,
   * optimistic update).
   */
  EXISTENT: 'EXISTENT',

  /**
   * Record is known not to exist (either as the result of a mutation, or
   * because the server returned `null` when queried for the record).
   */
  NONEXISTENT: 'NONEXISTENT',

  /**
   * Record State is unknown because it has not yet been fetched from the
   * server.
   */
  UNKNOWN: 'UNKNOWN',
};

module.exports = RelayRecordState;
