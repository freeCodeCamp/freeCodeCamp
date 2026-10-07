import {validateLoadParams, findScript} from './shared';

describe('validateLoadParams', () => {
  const INVALID_INPUTS: any[] = [
    [undefined],
    [false],
    [null],
    [true],
    [{}],
    [8],
    [{advancedFraud: true}],
    [{advancedFraudSignals: true, someOtherKey: true}],
    [{advancedFraudSignals: 'true'}],
  ];

  test.each(INVALID_INPUTS)('throws on invalid input: %p', (input) => {
    expect(() => validateLoadParams(input)).toThrow('invalid load parameters');
  });

  test('validates valid input', () => {
    expect(validateLoadParams({advancedFraudSignals: true})).toEqual({
      advancedFraudSignals: true,
    });

    expect(validateLoadParams({advancedFraudSignals: false})).toEqual({
      advancedFraudSignals: false,
    });
  });
});

describe('findScript', () => {
  const CASES: Array<[string, boolean]> = [
    ['https://js.stripe.com/v3?advancedFraudSignals=true', true],
    ['https://js.stripe.com/v3', true],
    ['https://js.stripe.com/v3/', true],
    ['https://js.stripe.com/v3?advancedFraudSignals=false', true],
    ['https://js.stripe.com/v3?ab=cd', true],
    ['https://js.stripe.com/v3/something.js', false],
    ['https://js.stripe.com/v3/something.js?advancedFraudSignals=false', false],
    ['https://js.stripe.com/v3/something.js?ab=cd', false],
  ];

  afterEach(() => {
    for (const [url] of CASES) {
      const script = document.querySelector(`script[src="${url}"]`);

      if (script && script.parentElement) {
        script.parentElement.removeChild(script);
      }
    }

    delete window.Stripe;
  });

  test.each(CASES)(
    'findScript with <script src="%s"></script>',
    (url, shouldBeFound) => {
      const script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);

      expect(!!findScript()).toBe(shouldBeFound);
    }
  );
});
