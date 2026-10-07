"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asEffect = void 0;

var _effects = require("redux-saga/effects");

var _symbols = require("@redux-saga/symbols");

const createAsEffectType = type => effect => {
  if (effect && effect[_symbols.IO] && effect.type === type) {
    return effect.payload;
  }

  return undefined;
}; // eslint-disable-next-line import/prefer-default-export


const asEffect = {
  take: createAsEffectType(_effects.effectTypes.TAKE),
  put: createAsEffectType(_effects.effectTypes.PUT),
  all: createAsEffectType(_effects.effectTypes.ALL),
  race: createAsEffectType(_effects.effectTypes.RACE),
  call: createAsEffectType(_effects.effectTypes.CALL),
  cps: createAsEffectType(_effects.effectTypes.CPS),
  fork: createAsEffectType(_effects.effectTypes.FORK),
  join: createAsEffectType(_effects.effectTypes.JOIN),
  cancel: createAsEffectType(_effects.effectTypes.CANCEL),
  select: createAsEffectType(_effects.effectTypes.SELECT),
  actionChannel: createAsEffectType(_effects.effectTypes.ACTION_CHANNEL),
  cancelled: createAsEffectType(_effects.effectTypes.CANCELLED),
  flush: createAsEffectType(_effects.effectTypes.FLUSH),
  getContext: createAsEffectType(_effects.effectTypes.GET_CONTEXT),
  setContext: createAsEffectType(_effects.effectTypes.SET_CONTEXT)
};
exports.asEffect = asEffect;