import Promise from './rsvp/promise';
import EventTarget from './rsvp/events';
import denodeify from './rsvp/node';
import all from './rsvp/all';
import allSettled from './rsvp/all-settled';
import race from './rsvp/race';
import hash from './rsvp/hash';
import hashSettled from './rsvp/hash-settled';
import rethrow from './rsvp/rethrow';
import defer from './rsvp/defer';
import {
  config,
  configure
} from './rsvp/config';
import map from './rsvp/map';
import resolve from './rsvp/resolve';
import reject from './rsvp/reject';
import filter from './rsvp/filter';
import asap from './rsvp/asap';

// defaults
config.async = asap;
config.after = cb => setTimeout(cb, 0);
const cast = resolve;

const async = (callback, arg) => config.async(callback, arg);

function on() {
  config['on'].apply(config, arguments);
}

function off() {
  config['off'].apply(config, arguments);
}

// Set up instrumentation through `window.__PROMISE_INTRUMENTATION__`
if (typeof window !== 'undefined' && typeof window['__PROMISE_INSTRUMENTATION__'] === 'object') {
  let callbacks = window['__PROMISE_INSTRUMENTATION__'];
  configure('instrument', true);
  for (let eventName in callbacks) {
    if (callbacks.hasOwnProperty(eventName)) {
      on(eventName, callbacks[eventName]);
    }
  }
}

import platform from './rsvp/platform';
// the default export here is for backwards compat:
//   https://github.com/tildeio/rsvp.js/issues/434
export default {
  asap,
  cast,
  Promise,
  EventTarget,
  all,
  allSettled,
  race,
  hash,
  hashSettled,
  rethrow,
  defer,
  denodeify,
  configure,
  on,
  off,
  resolve,
  reject,
  map,
  ['async']: async, // babel seems to error if async isn't a computed prop here...
  filter
};

export {
  asap,
  cast,
  Promise,
  EventTarget,
  all,
  allSettled,
  race,
  hash,
  hashSettled,
  rethrow,
  defer,
  denodeify,
  configure,
  on,
  off,
  resolve,
  reject,
  map,
  async,
  filter
};
