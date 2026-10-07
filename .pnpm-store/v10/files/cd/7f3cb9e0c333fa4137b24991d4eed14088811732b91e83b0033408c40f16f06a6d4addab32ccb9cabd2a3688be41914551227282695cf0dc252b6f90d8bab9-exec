// @flow
import parseEffect from './parseEffect';

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
  PUT,
  RACE,
  SELECT,
  SET_CONTEXT,
  TAKE,
} from '../shared/keys';

import { asEffect } from '../utils/asEffect';

export const NEXT = Object.create(null);
export const next = () => NEXT;

export const handlers = {
  [ACTION_CHANNEL]: 'actionChannel',
  [ALL](providers, value) {
    if (providers.all) {
      return providers.all(value, next);
    }

    return NEXT;
  },
  [CALL]: 'call',
  [CANCEL]: 'cancel',
  [CANCELLED]: 'cancelled',
  [CPS]: 'cps',
  [FLUSH]: 'flush',
  [FORK](providers, value) {
    const effect = asEffect.fork(value);

    if (providers.fork && !effect.detached) {
      return providers.fork(effect, next);
    }

    if (providers.spawn && effect.detached) {
      return providers.spawn(effect, next);
    }

    return NEXT;
  },
  [GET_CONTEXT]: 'getContext',
  [JOIN]: 'join',
  [PUT]: 'put',
  [RACE]: 'race',
  [SELECT]: 'select',
  [SET_CONTEXT]: 'setContext',
  [TAKE]: 'take',
};

export function provideValue(providers: Providers, value: Object) {
  if (providers) {
    const effectType = parseEffect(value).type;
    const handler = handlers[effectType];

    if (typeof handler === 'string' && handler in providers) {
      const effect = asEffect[handler](value);
      return providers[handler](effect, next);
    }

    if (typeof handler === 'function') {
      return handler(providers, value);
    }
  }

  return NEXT;
}
