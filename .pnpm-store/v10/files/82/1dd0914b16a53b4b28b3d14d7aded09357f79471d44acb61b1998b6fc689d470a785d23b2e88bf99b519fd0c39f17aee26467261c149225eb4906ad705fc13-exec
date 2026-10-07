import { effectTypes } from 'redux-saga/effects';
import { IO } from '@redux-saga/symbols';

const createAsEffectType = type => effect => {
  if (effect && effect[IO] && effect.type === type) {
    return effect.payload;
  }

  return undefined;
};

// eslint-disable-next-line import/prefer-default-export
export const asEffect = {
  take: createAsEffectType(effectTypes.TAKE),
  put: createAsEffectType(effectTypes.PUT),
  all: createAsEffectType(effectTypes.ALL),
  race: createAsEffectType(effectTypes.RACE),
  call: createAsEffectType(effectTypes.CALL),
  cps: createAsEffectType(effectTypes.CPS),
  fork: createAsEffectType(effectTypes.FORK),
  join: createAsEffectType(effectTypes.JOIN),
  cancel: createAsEffectType(effectTypes.CANCEL),
  select: createAsEffectType(effectTypes.SELECT),
  actionChannel: createAsEffectType(effectTypes.ACTION_CHANNEL),
  cancelled: createAsEffectType(effectTypes.CANCELLED),
  flush: createAsEffectType(effectTypes.FLUSH),
  getContext: createAsEffectType(effectTypes.GET_CONTEXT),
  setContext: createAsEffectType(effectTypes.SET_CONTEXT),
};
