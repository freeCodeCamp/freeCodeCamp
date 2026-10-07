import React, {StrictMode} from 'react';
import {render, act} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';

import {
  Elements,
  useElements,
  useStripe,
  ElementsConsumer,
  useCartElement,
  useCartElementState,
} from './Elements';
import * as mocks from '../../test/mocks';

describe('Elements', () => {
  let mockStripe: any;
  let mockStripePromise: any;
  let mockElements: any;
  let consoleError: any;
  let consoleWarn: any;

  beforeEach(() => {
    mockStripe = mocks.mockStripe();
    mockStripePromise = Promise.resolve(mockStripe);
    mockElements = mocks.mockElements();
    mockStripe.elements.mockReturnValue(mockElements);

    jest.spyOn(console, 'error');
    jest.spyOn(console, 'warn');
    consoleError = console.error;
    consoleWarn = console.warn;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('injects elements with the useElements hook', () => {
    const wrapper = ({children}: any) => (
      <Elements stripe={mockStripe}>{children}</Elements>
    );

    const {result} = renderHook(() => useElements(), {wrapper});

    expect(result.current).toBe(mockElements);
  });

  test('only creates elements once', () => {
    const TestComponent = () => {
      const _ = useElements();
      return <div />;
    };

    render(
      <Elements stripe={mockStripe}>
        <TestComponent />
      </Elements>
    );

    expect(mockStripe.elements).toHaveBeenCalledTimes(1);
  });

  test('injects stripe with the useStripe hook', () => {
    const wrapper = ({children}: any) => (
      <Elements stripe={mockStripe}>{children}</Elements>
    );

    const {result} = renderHook(() => useStripe(), {wrapper});

    expect(result.current).toBe(mockStripe);
  });

  test('provides elements and stripe with the ElementsConsumer component', () => {
    expect.assertions(2);

    render(
      <Elements stripe={mockStripe}>
        <ElementsConsumer>
          {(ctx) => {
            expect(ctx.elements).toBe(mockElements);
            expect(ctx.stripe).toBe(mockStripe);

            return null;
          }}
        </ElementsConsumer>
      </Elements>
    );
  });

  test('provides given stripe instance on mount', () => {
    const TestComponent = () => {
      const stripe = useStripe();

      if (!stripe) {
        throw new Error('Stripe instance is null');
      }

      return null;
    };

    expect(() => {
      render(
        <Elements stripe={mockStripe}>
          <TestComponent />
        </Elements>
      );
    }).not.toThrow('Stripe instance is null');
  });

  test('allows a transition from null to a valid Stripe object', () => {
    let stripeProp: any = null;
    const wrapper = ({children}: any) => (
      <Elements stripe={stripeProp}>{children}</Elements>
    );

    const {result, rerender} = renderHook(() => useElements(), {wrapper});
    expect(result.current).toBe(null);

    stripeProp = mockStripe;
    rerender();
    expect(result.current).toBe(mockElements);
  });

  test('works with a Promise resolving to a valid Stripe object', async () => {
    const wrapper = ({children}: any) => (
      <Elements stripe={mockStripePromise}>{children}</Elements>
    );

    const {result, waitForNextUpdate} = renderHook(() => useElements(), {
      wrapper,
    });

    expect(result.current).toBe(null);

    await waitForNextUpdate();

    expect(result.current).toBe(mockElements);
  });

  test('allows a transition from null to a valid Promise', async () => {
    let stripeProp: any = null;
    const wrapper = ({children}: any) => (
      <Elements stripe={stripeProp}>{children}</Elements>
    );

    const {result, rerender, waitForNextUpdate} = renderHook(
      () => useElements(),
      {wrapper}
    );
    expect(result.current).toBe(null);

    stripeProp = mockStripePromise;
    rerender();
    expect(result.current).toBe(null);

    await waitForNextUpdate();

    expect(result.current).toBe(mockElements);
  });

  test('does not set context if Promise resolves after Elements is unmounted', async () => {
    // Silence console output so test output is less noisy
    consoleError.mockImplementation(() => {});

    const {unmount} = render(
      <Elements stripe={mockStripePromise}>{null}</Elements>
    );

    unmount();
    await act(() => mockStripePromise);

    expect(consoleError).not.toHaveBeenCalled();
  });

  test('works with a Promise resolving to null for SSR safety', async () => {
    const nullPromise = Promise.resolve(null);
    const TestComponent = () => {
      const elements = useElements();
      return elements ? <div>not empty</div> : null;
    };

    const {container} = render(
      <Elements stripe={nullPromise}>
        <TestComponent />
      </Elements>
    );

    expect(container).toBeEmptyDOMElement();

    await act(() => nullPromise.then(() => undefined));
    expect(container).toBeEmptyDOMElement();
  });

  test('errors when props.stripe is `undefined`', () => {
    // Silence console output so test output is less noisy
    consoleError.mockImplementation(() => {});

    expect(() => render(<Elements stripe={undefined as any} />)).toThrow(
      'Invalid prop `stripe` supplied to `Elements`.'
    );
  });

  test('errors when props.stripe is `false`', () => {
    // Silence console output so test output is less noisy
    consoleError.mockImplementation(() => {});

    expect(() => render(<Elements stripe={false as any} />)).toThrow(
      'Invalid prop `stripe` supplied to `Elements`.'
    );
  });

  test('errors when props.stripe is a string', () => {
    // Silence console output so test output is less noisy
    consoleError.mockImplementation(() => {});

    expect(() => render(<Elements stripe={'wat' as any} />)).toThrow(
      'Invalid prop `stripe` supplied to `Elements`.'
    );
  });

  test('errors when props.stripe is a some other object', () => {
    // Silence console output so test output is less noisy
    consoleError.mockImplementation(() => {});

    expect(() => render(<Elements stripe={{wat: 2} as any} />)).toThrow(
      'Invalid prop `stripe` supplied to `Elements`.'
    );
  });

  test('does not allow changes to a set Stripe object', () => {
    // Silence console output so test output is less noisy
    consoleWarn.mockImplementation(() => {});

    const {rerender} = render(<Elements stripe={mockStripe} />);

    const mockStripe2: any = mocks.mockStripe();
    rerender(<Elements stripe={mockStripe2} />);

    expect(mockStripe.elements.mock.calls).toHaveLength(1);
    expect(mockStripe2.elements.mock.calls).toHaveLength(0);
    expect(consoleWarn).toHaveBeenCalledWith(
      'Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.'
    );
  });

  test('allows changes to options via elements.update after setting the Stripe object', () => {
    const {rerender} = render(
      <Elements stripe={mockStripe} options={{foo: 'foo'} as any} />
    );

    rerender(<Elements stripe={mockStripe} options={{bar: 'bar'} as any} />);

    expect(mockStripe.elements).toHaveBeenCalledWith({foo: 'foo'});
    expect(mockStripe.elements).toHaveBeenCalledTimes(1);

    expect(mockElements.update).toHaveBeenCalledWith({bar: 'bar'});
    expect(mockStripe.elements).toHaveBeenCalledTimes(1);
  });

  test('allows options changes before setting the Stripe object', () => {
    const {rerender} = render(
      <Elements stripe={null} options={{foo: 'foo'} as any} />
    );

    rerender(<Elements stripe={mockStripe} options={{bar: 'bar'} as any} />);

    expect(console.warn).not.toHaveBeenCalled();

    rerender(<Elements stripe={mockStripe} options={{bar: 'bar'} as any} />);

    expect(mockStripe.elements).toHaveBeenCalledWith({bar: 'bar'});
  });

  test('throws when trying to call useElements outside of Elements context', () => {
    const {result} = renderHook(() => useElements());

    expect(result.error && result.error.message).toBe(
      'Could not find Elements context; You need to wrap the part of your app that calls useElements() in an <Elements> provider.'
    );
  });

  test('throws when trying to call useStripe outside of Elements context', () => {
    const {result} = renderHook(() => useStripe());

    expect(result.error && result.error.message).toBe(
      'Could not find Elements context; You need to wrap the part of your app that calls useStripe() in an <Elements> provider.'
    );
  });

  test('throws when trying to mount an <ElementsConsumer> outside of Elements context', () => {
    // Silence console output so test output is less noisy
    consoleError.mockImplementation(() => {});

    const TestComponent = () => {
      return <ElementsConsumer>{() => null}</ElementsConsumer>;
    };

    expect(() => render(<TestComponent />)).toThrow(
      'Could not find Elements context; You need to wrap the part of your app that mounts <ElementsConsumer> in an <Elements> provider.'
    );
  });

  test('throws when trying to call useCartElement outside of Elements context', () => {
    const {result} = renderHook(() => useCartElement());

    expect(result.error && result.error.message).toBe(
      'Could not find Elements context; You need to wrap the part of your app that calls useCartElement() in an <Elements> provider.'
    );
  });

  test('throws when trying to call useCartElementState outside of Elements context', () => {
    const {result} = renderHook(() => useCartElementState());

    expect(result.error && result.error.message).toBe(
      'Could not find Elements context; You need to wrap the part of your app that calls useCartElementState() in an <Elements> provider.'
    );
  });

  describe('React.StrictMode', () => {
    test('creates elements twice in StrictMode', () => {
      const TestComponent = () => {
        const _ = useElements();
        return <div />;
      };

      render(
        <StrictMode>
          <Elements stripe={mockStripe}>
            <TestComponent />
          </Elements>
        </StrictMode>
      );

      expect(mockStripe.elements).toHaveBeenCalledTimes(2);
    });

    test('allows changes to options via elements.update after setting the Stripe object in StrictMode', () => {
      const TestComponent = () => {
        const [options, setOptions] = React.useState({foo: 'foo'} as any);

        React.useEffect(() => {
          setOptions({bar: 'bar'} as any);
        }, []);

        return (
          <StrictMode>
            <Elements stripe={mockStripe} options={options as any} />
          </StrictMode>
        );
      };

      render(<TestComponent />);

      expect(mockStripe.elements).toHaveBeenCalledWith({foo: 'foo'});
      expect(mockStripe.elements).toHaveBeenCalledTimes(2);

      expect(mockElements.update).toHaveBeenCalledWith({bar: 'bar'});
      expect(mockStripe.elements).toHaveBeenCalledTimes(2);
    });

    test('creates only one elements instance when updated while resolving Stripe promise', async () => {
      let updateResolver: any = () => {};
      const updateResult = new Promise<void>((resolve) => {
        updateResolver = resolve;
      });

      let stripePromiseResolve: any = () => {};
      const stripePromise = new Promise<any>((resolve) => {
        stripePromiseResolve = resolve;
      });

      // Only resolve stripe once the options have been updated
      updateResult.then(() => {
        stripePromiseResolve(mockStripePromise);
      });

      const TestComponent = () => {
        const [_, forceRerender] = React.useState(0);

        React.useEffect(() => {
          setTimeout(() => {
            forceRerender((val) => val + 1);
            setTimeout(() => {
              updateResolver();
            });
          });
        }, []);

        return (
          <Elements
            stripe={stripePromise}
            options={{appearance: {theme: 'flat'}}}
          />
        );
      };

      render(<TestComponent />);

      await act(async () => await updateResult);

      await act(async () => await stripePromise);

      expect(mockStripe.elements).toHaveBeenCalledWith({
        appearance: {theme: 'flat'},
      });
      expect(mockStripe.elements).toHaveBeenCalledTimes(1);
    });

    test('creates only one elements instance when updated while resolving Stripe promise in StrictMode', async () => {
      let updateResolver: any = () => {};
      const updateResult = new Promise<void>((resolve) => {
        updateResolver = resolve;
      });

      let stripePromiseResolve: any = () => {};
      const stripePromise = new Promise<any>((resolve) => {
        stripePromiseResolve = resolve;
      });

      // Only resolve stripe once the options have been updated
      updateResult.then(() => {
        stripePromiseResolve(mockStripePromise);
      });

      const TestComponent = () => {
        const [_, forceRerender] = React.useState(0);

        React.useEffect(() => {
          setTimeout(() => {
            forceRerender((val) => val + 1);
            setTimeout(() => {
              updateResolver();
            });
          });
        }, []);

        return (
          <StrictMode>
            <Elements
              stripe={stripePromise}
              options={{appearance: {theme: 'flat'}}}
            />
          </StrictMode>
        );
      };

      render(<TestComponent />);

      await act(async () => await updateResult);
      await act(async () => await stripePromise);

      expect(mockStripe.elements).toHaveBeenCalledWith({
        appearance: {theme: 'flat'},
      });
      expect(mockStripe.elements).toHaveBeenCalledTimes(1);
    });
  });
});
