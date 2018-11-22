import { has } from 'lodash';

export const handledErrorSymbol = Symbol('handledError');

export function isHandledError(err) {
  return has(err, handledErrorSymbol);
}

export function unwrapHandledError(err) {
  return handledErrorSymbol in err ? err[handledErrorSymbol] : {};
}

export function wrapHandledError(err, { type, message, redirectTo }) {
  err[handledErrorSymbol] = { type, message, redirectTo };
  return err;
}
