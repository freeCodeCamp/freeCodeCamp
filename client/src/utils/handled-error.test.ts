import { isObject } from 'lodash-es';

import {
  isHandledError,
  unwrapHandledError,
  handledErrorSymbol
} from './handled-error';
import type { HandledError } from './handled-error';

describe('client/src utilities', () => {
  describe('handled-error.js', () => {
    const mockHandledErrorData = {
      type: 'info',
      message: 'something helpful',
      redirectTo: '/a-path-we-choose'
    };

    describe('isHandledError', () => {
      it('returns a boolean', () => {
        expect(typeof isHandledError({} as Error)).toEqual('boolean');
      });

      it('returns false for an unhandled error', () => {
        expect(isHandledError(new Error())).toEqual(false);
      });

      it('returns true for a handled error', () => {
        const handledError = new Error() as HandledError;
        handledError[handledErrorSymbol] = {};

        expect(isHandledError(handledError)).toEqual(true);
      });
    });

    describe('unwrapHandledError', () => {
      // this is testing implementation details 👎
      // we need to make these tests more robust 💪
      it('returns an object by default', () => {
        const error = new Error() as HandledError;
        const unwrappedError = unwrapHandledError(error);
        expect(isObject(unwrappedError)).toBe(true);
      });

      it('returns the data that was wrapped in the error', () => {
        const handledError = new Error() as HandledError;
        handledError[handledErrorSymbol] = mockHandledErrorData;
        const unwrapped = unwrapHandledError(handledError);
        expect(unwrapped).toEqual(mockHandledErrorData);
      });
    });
  });
});
