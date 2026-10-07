import {Stripe} from '@stripe/stripe-js';

export const isUnknownObject = (
  raw: unknown
): raw is {[key in PropertyKey]: unknown} => {
  return raw !== null && typeof raw === 'object';
};

export const isPromise = (raw: unknown): raw is PromiseLike<unknown> => {
  return isUnknownObject(raw) && typeof raw.then === 'function';
};

// We are using types to enforce the `stripe` prop in this lib,
// but in an untyped integration `stripe` could be anything, so we need
// to do some sanity validation to prevent type errors.
export const isStripe = (raw: unknown): raw is Stripe => {
  return (
    isUnknownObject(raw) &&
    typeof raw.elements === 'function' &&
    typeof raw.createToken === 'function' &&
    typeof raw.createPaymentMethod === 'function' &&
    typeof raw.confirmCardPayment === 'function'
  );
};
