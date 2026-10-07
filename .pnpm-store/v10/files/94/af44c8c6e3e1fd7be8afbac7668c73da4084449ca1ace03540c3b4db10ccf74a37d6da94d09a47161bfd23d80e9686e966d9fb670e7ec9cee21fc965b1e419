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

const RelayModernRecord = require('./RelayModernRecord');
const RelayRecordSource = require('./RelayRecordSource');
const RelayResponseNormalizer = require('./RelayResponseNormalizer');

const {ROOT_TYPE} = require('./RelayStoreUtils');

import type {PayloadData, PayloadError} from '../network/RelayNetworkTypes';
import type {NormalizationOptions} from './RelayResponseNormalizer';
import type {
  RelayResponsePayload,
  NormalizationSelector,
} from './RelayStoreTypes';

function normalizeRelayPayload(
  selector: NormalizationSelector,
  payload: PayloadData,
  errors: ?Array<PayloadError>,
  options: NormalizationOptions,
): RelayResponsePayload {
  const source = RelayRecordSource.create();
  source.set(
    selector.dataID,
    RelayModernRecord.create(selector.dataID, ROOT_TYPE),
  );
  const relayPayload = RelayResponseNormalizer.normalize(
    source,
    selector,
    payload,
    options,
  );
  return {
    ...relayPayload,
    errors,
  };
}

module.exports = normalizeRelayPayload;
