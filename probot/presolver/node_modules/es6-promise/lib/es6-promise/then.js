import {
  invokeCallback,
  subscribe,
  FULFILLED,
  REJECTED,
  noop,
  makePromise,
  PROMISE_ID
} from './-internal';

import { asap } from './asap';

export default function then(onFulfillment, onRejection) {
  const parent = this;

  const child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  const { _state } = parent;

  if (_state) {
    const callback = arguments[_state - 1];
    asap(() => invokeCallback(_state, child, callback, parent._result));
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}
