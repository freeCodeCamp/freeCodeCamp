/* eslint-disable @typescript-eslint/no-var-requires */

const SCRIPT_SELECTOR = 'script[src^="https://js.stripe.com/v3"]';

describe('pure module', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockReturnValue();
  });

  afterEach(() => {
    const scripts = Array.from(document.querySelectorAll(SCRIPT_SELECTOR));

    for (const script of scripts) {
      if (script.parentElement) {
        script.parentElement.removeChild(script);
      }
    }

    delete window.Stripe;

    jest.resetModules();
    jest.restoreAllMocks();
  });

  test('does not inject the script if loadStripe is not called', async () => {
    require('./pure');

    expect(document.querySelector(SCRIPT_SELECTOR)).toBe(null);
  });

  test('it injects the script if loadStripe is called', async () => {
    const {loadStripe} = require('./pure');
    loadStripe('pk_test_foo');

    expect(document.querySelector(SCRIPT_SELECTOR)).not.toBe(null);
  });

  test('it can load the script with advanced fraud signals disabled', () => {
    const {loadStripe} = require('./pure');

    loadStripe.setLoadParameters({advancedFraudSignals: false});
    loadStripe('pk_test_foo');

    expect(
      document.querySelector(
        'script[src^="https://js.stripe.com/v3?advancedFraudSignals=false"]'
      )
    ).not.toBe(null);
  });

  test('it should throw when setting invalid load parameters', () => {
    const {loadStripe} = require('./pure');

    expect(() => {
      loadStripe.setLoadParameters({howdy: true});
    }).toThrow('invalid load parameters');
  });

  test('it should warn when calling loadStripe if a script already exists when parameters are set', () => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3';
    document.body.appendChild(script);

    const {loadStripe} = require('./pure');
    loadStripe.setLoadParameters({advancedFraudSignals: true});
    loadStripe('pk_test_123');

    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used'
    );
  });

  test('it should warn when calling loadStripe if a script is added after parameters are set', () => {
    const {loadStripe} = require('./pure');
    loadStripe.setLoadParameters({advancedFraudSignals: true});

    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3';
    document.body.appendChild(script);

    loadStripe('pk_test_123');

    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used'
    );
  });

  test('it should warn when window.Stripe already exists if parameters are set', () => {
    window.Stripe = jest.fn((key) => ({key})) as any;

    const {loadStripe} = require('./pure');
    loadStripe.setLoadParameters({advancedFraudSignals: true});
    loadStripe('pk_test_123');

    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used'
    );
  });

  test('it should not warn when a script already exists if parameters are not set', () => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3';
    document.body.appendChild(script);

    const {loadStripe} = require('./pure');
    loadStripe('pk_test_123');

    expect(console.warn).toHaveBeenCalledTimes(0);
  });

  test('it should not warn when window.Stripe already exists if parameters are not set', () => {
    window.Stripe = jest.fn((key) => ({key})) as any;

    const {loadStripe} = require('./pure');
    loadStripe('pk_test_123');

    expect(console.warn).toHaveBeenCalledTimes(0);
  });

  test('throws an error if calling setLoadParameters after loadStripe', () => {
    const {loadStripe} = require('./pure');

    loadStripe.setLoadParameters({advancedFraudSignals: false});
    loadStripe('pk_foo');

    expect(() => {
      loadStripe.setLoadParameters({advancedFraudSignals: true});
    }).toThrow('cannot change load parameters');
  });

  test('does not throw an error if calling setLoadParameters after loadStripe but the parameters are the same', () => {
    const {loadStripe} = require('./pure');

    loadStripe.setLoadParameters({advancedFraudSignals: false});
    loadStripe('pk_foo');

    expect(() => {
      loadStripe.setLoadParameters({advancedFraudSignals: false});
    }).not.toThrow('cannot change load parameters');
  });
});
