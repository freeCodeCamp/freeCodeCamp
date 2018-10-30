import { config } from './config';
import instrument from './instrument';
import {
  noop,
  subscribe,
  FULFILLED,
  REJECTED,
  PENDING,
  invokeCallback
} from './-internal';

export default function then(onFulfillment, onRejection, label) {
  let parent = this;
  let state = parent._state;

  if (state === FULFILLED && !onFulfillment || state === REJECTED && !onRejection) {
    config.instrument && instrument('chained', parent, parent);
    return parent;
  }

  parent._onError = null;

  let child = new parent.constructor(noop, label);
  let result = parent._result;

  config.instrument && instrument('chained', parent, child);

  if (state === PENDING) {
    subscribe(parent, child, onFulfillment, onRejection);
  } else {
    let callback = state === FULFILLED ? onFulfillment : onRejection;
    config.async(() => invokeCallback(state, child, callback, result));
  }

  return child;
}
