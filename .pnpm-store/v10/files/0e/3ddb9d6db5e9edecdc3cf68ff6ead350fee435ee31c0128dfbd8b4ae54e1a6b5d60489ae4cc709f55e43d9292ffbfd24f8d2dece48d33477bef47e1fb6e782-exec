// @flow
import { warn } from './logging';

export default function deprecate(fn: Function, message: string): Function {
  let printed = false;

  return (...args) => {
    if (!printed) {
      warn(message);
      printed = true;
    }

    return fn(...args);
  };
}
