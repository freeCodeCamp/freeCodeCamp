/* eslint-disable @typescript-eslint/no-var-requires */

const dispatchScriptEvent = (eventType: string): void => {
  const injectedScript = document.querySelector(
    'script[src="https://js.stripe.com/v3"]'
  );

  if (!injectedScript) {
    throw new Error('could not find Stripe.js script element');
  }

  injectedScript.dispatchEvent(new Event(eventType));
};

describe('Stripe module loader', () => {
  afterEach(() => {
    const script = document.querySelector(
      'script[src="https://js.stripe.com/v3"], script[src="https://js.stripe.com/v3/"]'
    );
    if (script && script.parentElement) {
      script.parentElement.removeChild(script);
    }
    delete window.Stripe;
    jest.resetModules();
  });

  it('injects the Stripe script as a side effect after a tick', () => {
    require('./index');

    expect(
      document.querySelector('script[src="https://js.stripe.com/v3"]')
    ).toBe(null);

    return Promise.resolve().then(() => {
      expect(
        document.querySelector('script[src="https://js.stripe.com/v3"]')
      ).not.toBe(null);
    });
  });

  it('does not inject the script when Stripe is already loaded', () => {
    require('./index');

    window.Stripe = jest.fn((key) => ({key})) as any;

    return new Promise((resolve) => setTimeout(resolve)).then(() => {
      expect(
        document.querySelector('script[src="https://js.stripe.com/v3"]')
      ).toBe(null);
    });
  });

  describe('does not inject a duplicate script when one is already present', () => {
    test('when the script does not have a trailing slash', () => {
      require('./index');

      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3';
      document.body.appendChild(script);

      return Promise.resolve().then(() => {
        expect(
          document.querySelectorAll(
            'script[src="https://js.stripe.com/v3"], script[src="https://js.stripe.com/v3/"]'
          )
        ).toHaveLength(1);
      });
    });

    test('when the script has a trailing slash', () => {
      require('./index');

      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      document.body.appendChild(script);

      return Promise.resolve().then(() => {
        expect(
          document.querySelectorAll(
            'script[src="https://js.stripe.com/v3"], script[src="https://js.stripe.com/v3/"]'
          )
        ).toHaveLength(1);
      });
    });

    test('ignores non-Stripe.js scripts that start with the v3 url', async () => {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/futureBundle.js';
      document.body.appendChild(script);

      require('./index');

      await Promise.resolve();

      expect(
        document.querySelectorAll('script[src^="https://js.stripe.com/v3"]')
      ).toHaveLength(2);

      expect(
        document.querySelector(
          'script[src="https://js.stripe.com/v3/futureBundle.js"]'
        )
      ).not.toBe(null);

      expect(
        document.querySelector('script[src="https://js.stripe.com/v3"]')
      ).not.toBe(null);
    });
  });

  describe.each(['./index', './pure'])('loadStripe (%s.ts)', (requirePath) => {
    beforeEach(() => {
      jest.restoreAllMocks();
      jest.spyOn(console, 'warn').mockReturnValue();
    });

    it('resolves loadStripe with Stripe object', async () => {
      const {loadStripe} = require(requirePath);
      const stripePromise = loadStripe('pk_test_foo');

      await new Promise((resolve) => setTimeout(resolve));
      window.Stripe = jest.fn((key) => ({key})) as any;
      dispatchScriptEvent('load');

      return expect(stripePromise).resolves.toEqual({key: 'pk_test_foo'});
    });

    it('rejects when the script fails', async () => {
      const {loadStripe} = require(requirePath);
      const stripePromise = loadStripe('pk_test_foo');

      await Promise.resolve();
      dispatchScriptEvent('error');

      await expect(stripePromise).rejects.toEqual(
        new Error('Failed to load Stripe.js')
      );

      expect(console.warn).not.toHaveBeenCalled();
    });

    it('rejects when Stripe is not added to the window for some reason', async () => {
      const {loadStripe} = require(requirePath);
      const stripePromise = loadStripe('pk_test_foo');

      await Promise.resolve();
      dispatchScriptEvent('load');

      return expect(stripePromise).rejects.toEqual(
        new Error('Stripe.js not available')
      );
    });
  });

  describe('loadStripe (index.ts)', () => {
    it('does not cause unhandled rejects when the script fails', async () => {
      require('./index');

      await Promise.resolve();
      dispatchScriptEvent('error');

      // Turn the task loop to make sure the internal promise handler has been invoked
      await new Promise((resolve) => setImmediate(resolve));

      expect(console.warn).toHaveBeenCalledWith(
        new Error('Failed to load Stripe.js')
      );
    });
  });
});
