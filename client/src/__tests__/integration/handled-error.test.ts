import {
  wrapHandledError,
  unwrapHandledError,
  ErrorData
} from '../../utils/handled-error';

describe('handled-error integration', () => {
  const handledA: ErrorData = {
    type: 'info',
    message: 'something helpful',
    redirectTo: '/a-path-we-choose'
  };
  const handledB: ErrorData = {
    type: 'danger',
    message: 'Oh noes!',
    redirectTo: '/whoops'
  };
  const handledC: ErrorData = {
    type: 'success',
    message: 'great news!',
    redirectTo: '/awesome'
  };
  const handledD: ErrorData = {};

  it('can wrap and unwrap handled errors', () => {
    const wrappedA = wrapHandledError(new Error(), handledA);
    const wrappedB = wrapHandledError(new Error(), handledB);
    const wrappedC = wrapHandledError(new Error(), handledC);
    const wrappedD = wrapHandledError(new Error(), handledD);

    const unwrappedA = unwrapHandledError(wrappedA);
    const unwrappedB = unwrapHandledError(wrappedB);
    const unwrappedC = unwrapHandledError(wrappedC);
    const unwrappedD = unwrapHandledError(wrappedD);

    expect(unwrappedA).toEqual(handledA);
    expect(unwrappedB).toEqual(handledB);
    expect(unwrappedC).toEqual(handledC);
    expect(unwrappedD).toEqual(handledD);
  });
});
