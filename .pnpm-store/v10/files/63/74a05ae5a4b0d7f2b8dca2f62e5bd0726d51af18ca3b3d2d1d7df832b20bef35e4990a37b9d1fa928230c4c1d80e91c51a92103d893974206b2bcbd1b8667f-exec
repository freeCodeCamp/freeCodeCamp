"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeMaybe = exports.take = exports.spawn = exports.setContext = exports.select = exports.race = exports.putResolve = exports.put = exports.join = exports.fork = exports.getContext = exports.flush = exports.cps = exports.cancelled = exports.cancel = exports.call = exports.apply = exports.actionChannel = void 0;

var effects = _interopRequireWildcard(require("redux-saga/effects"));

var _helpers = require("./helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const actionChannel = (0, _helpers.wrapEffectCreator)(effects.actionChannel);
exports.actionChannel = actionChannel;
const apply = (0, _helpers.wrapEffectCreator)(effects.apply);
exports.apply = apply;
const call = (0, _helpers.wrapEffectCreator)(effects.call);
exports.call = call;
const cancel = (0, _helpers.wrapEffectCreator)(effects.cancel);
exports.cancel = cancel;
const cancelled = (0, _helpers.wrapEffectCreator)(effects.cancelled);
exports.cancelled = cancelled;
const cps = (0, _helpers.wrapEffectCreator)(effects.cps);
exports.cps = cps;
const flush = (0, _helpers.wrapEffectCreator)(effects.flush);
exports.flush = flush;
const getContext = (0, _helpers.wrapEffectCreator)(effects.getContext);
exports.getContext = getContext;
const fork = (0, _helpers.wrapEffectCreator)(effects.fork);
exports.fork = fork;
const join = (0, _helpers.wrapEffectCreator)(effects.join);
exports.join = join;
const put = (0, _helpers.wrapEffectCreator)(effects.put);
exports.put = put;
const putResolve = (0, _helpers.wrapEffectCreator)(effects.putResolve);
exports.putResolve = putResolve;
const race = (0, _helpers.wrapEffectCreator)(effects.race);
exports.race = race;
const select = (0, _helpers.wrapEffectCreator)(effects.select);
exports.select = select;
const setContext = (0, _helpers.wrapEffectCreator)(effects.setContext);
exports.setContext = setContext;
const spawn = (0, _helpers.wrapEffectCreator)(effects.spawn);
exports.spawn = spawn;
const take = (0, _helpers.wrapEffectCreator)(effects.take);
exports.take = take;
const takeMaybe = (0, _helpers.wrapEffectCreator)(effects.takeMaybe);
exports.takeMaybe = takeMaybe;
actionChannel.like = (0, _helpers.like)('actionChannel');

actionChannel.pattern = pattern => actionChannel.like({
  pattern
});

apply.like = (0, _helpers.like)('call');

apply.fn = fn => apply.like({
  fn
});

call.like = (0, _helpers.like)('call');

call.fn = fn => call.like({
  fn
});

cps.like = (0, _helpers.like)('cps');

cps.fn = fn => cps.like({
  fn
});

fork.like = (0, _helpers.like)('fork');

fork.fn = fn => fork.like({
  fn
});

put.like = (0, _helpers.like)('put');

put.actionType = type => put.like({
  action: {
    type
  }
});

putResolve.like = (0, _helpers.like)('put', {
  resolve: true
});

putResolve.actionType = type => putResolve.like({
  action: {
    type
  }
});

select.like = (0, _helpers.like)('select');

select.selector = selector => select.like({
  selector
});

spawn.like = (0, _helpers.like)('spawn', {
  detached: true
});

spawn.fn = fn => spawn.like({
  fn
});