"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provideValue = provideValue;
exports.handlers = exports.next = exports.NEXT = void 0;

var _parseEffect = _interopRequireDefault(require("./parseEffect"));

var _keys = require("../shared/keys");

var _asEffect = require("../utils/asEffect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NEXT = Object.create(null);
exports.NEXT = NEXT;

const next = () => NEXT;

exports.next = next;
const handlers = {
  [_keys.ACTION_CHANNEL]: 'actionChannel',

  [_keys.ALL](providers, value) {
    if (providers.all) {
      return providers.all(value, next);
    }

    return NEXT;
  },

  [_keys.CALL]: 'call',
  [_keys.CANCEL]: 'cancel',
  [_keys.CANCELLED]: 'cancelled',
  [_keys.CPS]: 'cps',
  [_keys.FLUSH]: 'flush',

  [_keys.FORK](providers, value) {
    const effect = _asEffect.asEffect.fork(value);

    if (providers.fork && !effect.detached) {
      return providers.fork(effect, next);
    }

    if (providers.spawn && effect.detached) {
      return providers.spawn(effect, next);
    }

    return NEXT;
  },

  [_keys.GET_CONTEXT]: 'getContext',
  [_keys.JOIN]: 'join',
  [_keys.PUT]: 'put',
  [_keys.RACE]: 'race',
  [_keys.SELECT]: 'select',
  [_keys.SET_CONTEXT]: 'setContext',
  [_keys.TAKE]: 'take'
};
exports.handlers = handlers;

function provideValue(providers, value) {
  if (providers) {
    const effectType = (0, _parseEffect.default)(value).type;
    const handler = handlers[effectType];

    if (typeof handler === 'string' && handler in providers) {
      const effect = _asEffect.asEffect[handler](value);

      return providers[handler](effect, next);
    }

    if (typeof handler === 'function') {
      return handler(providers, value);
    }
  }

  return NEXT;
}