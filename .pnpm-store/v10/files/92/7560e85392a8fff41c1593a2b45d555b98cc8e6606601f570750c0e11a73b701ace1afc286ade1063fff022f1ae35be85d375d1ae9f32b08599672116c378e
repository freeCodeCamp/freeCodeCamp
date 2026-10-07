/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * @flow strict-local
 * @format
 */

'use strict';

const ACTOR_IDENTIFIER_FIELD_NAME = 'actor_key';

const {getActorIdentifier} = require('./ActorIdentifier');

import type {ActorIdentifier} from './ActorIdentifier';

function getActorIdentifierFromPayload(payload: mixed): ?ActorIdentifier {
  if (
    payload != null &&
    typeof payload === 'object' &&
    typeof payload[ACTOR_IDENTIFIER_FIELD_NAME] === 'string'
  ) {
    return getActorIdentifier(payload[ACTOR_IDENTIFIER_FIELD_NAME]);
  }
}

module.exports = {
  ACTOR_IDENTIFIER_FIELD_NAME,
  getActorIdentifierFromPayload,
};
