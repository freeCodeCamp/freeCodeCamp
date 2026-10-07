/* eslint-disable no-cond-assign */
// @flow
import * as is from '@redux-saga/is';
import {
  ACTION_CHANNEL,
  ALL,
  CALL,
  CANCEL,
  CANCELLED,
  CPS,
  FLUSH,
  FORK,
  GET_CONTEXT,
  JOIN,
  NONE,
  PUT,
  RACE,
  SELECT,
  SET_CONTEXT,
  TAKE,
} from '../shared/keys';

import { mapValues } from '../utils/object';
import { asEffect } from '../utils/asEffect';

const createEffectWithNestedEffects = type => (effect, extra) => ({
  type,
  effect,
  ...extra,
  mapEffects: Array.isArray(effect)
    ? f => effect.map(f)
    : f => mapValues(effect, f),
});

const createAll = createEffectWithNestedEffects(ALL);
const createRace = createEffectWithNestedEffects(RACE);

export default function parseEffect(effect: Object): Object {
  let parsedEffect;

  switch (true) {
    case is.notUndef((parsedEffect = asEffect.take(effect))):
      return {
        type: TAKE,
        effect: parsedEffect,
        providerKey: 'take',
      };

    case is.notUndef((parsedEffect = asEffect.put(effect))):
      return {
        type: PUT,
        effect: parsedEffect,
        providerKey: 'put',
      };

    case is.notUndef((parsedEffect = asEffect.race(effect))):
      return createRace(parsedEffect, { providerKey: 'race' });

    case is.notUndef((parsedEffect = asEffect.call(effect))):
      return {
        type: CALL,
        effect: parsedEffect,
        providerKey: 'call',
      };

    case is.notUndef((parsedEffect = asEffect.cancel(effect))):
      return {
        type: CANCEL,
        effect: parsedEffect,
        providerKey: 'cancel',
      };

    case is.notUndef((parsedEffect = asEffect.cancelled(effect))):
      return {
        type: CANCELLED,
        effect: parsedEffect,
        providerKey: 'cancelled',
      };

    case is.notUndef((parsedEffect = asEffect.cps(effect))):
      return {
        type: CPS,
        effect: parsedEffect,
        providerKey: 'cps',
      };

    case is.notUndef((parsedEffect = asEffect.flush(effect))):
      return {
        type: FLUSH,
        effect: parsedEffect,
        providerKey: 'flush',
      };

    case is.notUndef((parsedEffect = asEffect.fork(effect))):
      return {
        type: FORK,
        effect: parsedEffect,
        providerKey: parsedEffect.detached ? 'spawn' : 'fork',
      };

    case is.notUndef((parsedEffect = asEffect.getContext(effect))):
      return {
        type: GET_CONTEXT,
        effect: parsedEffect,
        providerKey: 'getContext',
      };

    case is.notUndef((parsedEffect = asEffect.join(effect))):
      return {
        type: JOIN,
        effect: parsedEffect,
        providerKey: 'join',
      };

    case is.notUndef((parsedEffect = asEffect.select(effect))):
      return {
        type: SELECT,
        effect: parsedEffect,
        providerKey: 'select',
      };

    case is.notUndef((parsedEffect = asEffect.setContext(effect))):
      return {
        type: SET_CONTEXT,
        effect: parsedEffect,
        providerKey: 'setContext',
      };

    case is.notUndef((parsedEffect = asEffect.actionChannel(effect))):
      return {
        type: ACTION_CHANNEL,
        effect: parsedEffect,
        providerKey: 'actionChannel',
      };

    case is.notUndef((parsedEffect = asEffect.all(effect))):
      return createAll(parsedEffect);

    default:
      return { type: NONE };
  }
}
