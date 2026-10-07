/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
'use strict';
/**
 * A unique identifier of the current actor.
 */

var invariant = require('invariant');

var INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE = 'INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE';

function assertInternalActorIndentifier(actorIdentifier) {
  !(actorIdentifier === INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Expected to use only internal version of the `actorIdentifier`. "%s" was provided.', actorIdentifier) : invariant(false) : void 0;
}

module.exports = {
  assertInternalActorIndentifier: assertInternalActorIndentifier,
  getActorIdentifier: function getActorIdentifier(actorID) {
    return actorID;
  },
  getDefaultActorIdentifier: function getDefaultActorIdentifier() {
    throw new Error('Not Implemented');
  },
  INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE: INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE
};