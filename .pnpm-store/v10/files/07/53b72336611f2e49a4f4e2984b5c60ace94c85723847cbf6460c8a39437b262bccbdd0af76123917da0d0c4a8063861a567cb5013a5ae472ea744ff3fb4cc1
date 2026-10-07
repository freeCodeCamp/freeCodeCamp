export * from './api';
export * from './stripe-js';

import {StripeConstructor, StripeConstructorOptions, Stripe} from './stripe-js';

export const loadStripe: (
  publishableKey: string,
  options?: StripeConstructorOptions | undefined
) => Promise<Stripe | null>;

declare global {
  interface Window {
    // Stripe.js must be loaded directly from https://js.stripe.com/v3, which
    // places a `Stripe` object on the window
    Stripe?: StripeConstructor;
  }
}
