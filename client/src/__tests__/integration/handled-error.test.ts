import {
  wrapHandledError,
  unwrapHandledError,
  HandledError,
  ErrorData
} from '../../utils/handled-error';

type handledType = {
  type?: string;
  message?: string;
  redirectTo?: string;
};

describe('handled-error integration', () => {
  const handledA: handledType = {
    type: 'info',
    message: 'something helpful',
    redirectTo: '/a-path-we-choose'
  };
  const handledB: handledType = {
    type: 'danger',
    message: 'Oh noes!',
    redirectTo: '/whoops'
  };
  const handledC: handledType = {
    type: 'success',
    message: 'great news!',
    redirectTo: '/awesome'
  };
  const handledD: handledType = {};

  it('can wrap and unwrap handled errors', () => {
    expect.assertions(4);
    const wrappedA: HandledError = wrapHandledError(new Error(), handledA);
    const wrappedB: HandledError = wrapHandledError(new Error(), handledB);
    const wrappedC: HandledError = wrapHandledError(new Error(), handledC);
    const wrappedD: HandledError = wrapHandledError(new Error(), handledD);

    const unwrappedA: ErrorData | Record<string, never> =
      unwrapHandledError(wrappedA);
    const unwrappedB: ErrorData | Record<string, never> =
      unwrapHandledError(wrappedB);
    const unwrappedC: ErrorData | Record<string, never> =
      unwrapHandledError(wrappedC);
    const unwrappedD: ErrorData | Record<string, never> =
      unwrapHandledError(wrappedD);

    expect(unwrappedA).toEqual(handledA);
    expect(unwrappedB).toEqual(handledB);
    expect(unwrappedC).toEqual(handledC);
    expect(unwrappedD).toEqual(handledD);
  });
});
