/* global describe it expect */
import { isObject } from 'lodash';
import {
  isHandledError,
  wrapHandledError,
  unwrapHandledError,
  handledErrorSymbol
} from './handled-error';

describe('client/src utilities', () => {
  describe('handled-error.js', () => {
    const mockHandledErrorData = {
      type: 'info',
      message: 'something helpful',
      redirectTo: '/a-path-we-choose'
    };
    describe('isHandledError', () => {
      it('returns a boolean', () => {
        expect(typeof isHandledError({})).toEqual('boolean');
      });

      it('returns false for an unhandled error', () => {
        expect(isHandledError(new Error())).toEqual(false);
      });

      it('returns true for a handled error', () => {
        const handledError = new Error();
        handledError[handledErrorSymbol] = {};

        expect(isHandledError(handledError)).toEqual(true);
      });
    });

    describe('wrapHandledError', () => {
      // this is testing implementation details 👎
      // we need to make these tests more robust 💪
      it('returns an error with a handledError property', () => {
        const handledError = wrapHandledError(
          new Error(),
          mockHandledErrorData
        );
        expect(handledErrorSymbol in handledError).toEqual(true);
      });
      it('assigns error handling details to the handledError property', () => {
        const handledError = wrapHandledError(
          new Error(),
          mockHandledErrorData
        );
        expect(handledError[handledErrorSymbol]).toEqual(mockHandledErrorData);
      });
    });

    describe('unwrapHandledError', () => {
      // this is testing implementation details 👎
      // we need to make these tests more robust 💪
      it('returns an object by default', () => {
        const error = new Error();
        const unwrappedError = unwrapHandledError(error);
        expect(isObject(unwrappedError)).toBe(true);
      });

      it('returns the data that was wrapped in the error', () => {
        const handledError = new Error();
        handledError[handledErrorSymbol] = mockHandledErrorData;
        const unwrapped = unwrapHandledError(handledError);
        expect(unwrapped).toEqual(mockHandledErrorData);
      });
    });
  });
});
