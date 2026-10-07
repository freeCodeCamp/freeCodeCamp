import {Stripe, StripeConstructor} from '../types';

export type LoadStripe = (
  ...args: Parameters<StripeConstructor>
) => Promise<Stripe | null>;

export interface LoadParams {
  advancedFraudSignals: boolean;
}

// `_VERSION` will be rewritten by `@rollup/plugin-replace` as a string literal
// containing the package.json version
declare const _VERSION: string;

const V3_URL = 'https://js.stripe.com/v3';
const V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
const EXISTING_SCRIPT_MESSAGE =
  'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';

export const findScript = (): HTMLScriptElement | null => {
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    `script[src^="${V3_URL}"]`
  );

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

const injectScript = (params: null | LoadParams): HTMLScriptElement => {
  const queryString =
    params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  const script = document.createElement('script');
  script.src = `${V3_URL}${queryString}`;

  const headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error(
      'Expected document.body not to be null. Stripe.js requires a <body> element.'
    );
  }

  headOrBody.appendChild(script);

  return script;
};

const registerWrapper = (stripe: any, startTime: number): void => {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({name: 'stripe-js', version: _VERSION, startTime});
};

let stripePromise: Promise<StripeConstructor | null> | null = null;

export const loadScript = (
  params: null | LoadParams
): Promise<StripeConstructor | null> => {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      let script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', () => {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });

      script.addEventListener('error', () => {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });

  return stripePromise;
};

export const initStripe = (
  maybeStripe: StripeConstructor | null,
  args: Parameters<StripeConstructor>,
  startTime: number
): Stripe | null => {
  if (maybeStripe === null) {
    return null;
  }

  const stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validateLoadParams = (params: any): LoadParams => {
  const errorMessage = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    ${JSON.stringify(params)}
`;

  if (params === null || typeof params !== 'object') {
    throw new Error(errorMessage);
  }

  if (
    Object.keys(params).length === 1 &&
    typeof params.advancedFraudSignals === 'boolean'
  ) {
    return params;
  }

  throw new Error(errorMessage);
};
