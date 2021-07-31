import { isObject } from 'lodash-es';
import type { AxiosError } from 'axios';

import {
  isHandledError,
  wrapHandledError,
  unwrapHandledError,
  handledErrorSymbol,
  handleAPIError
} from './handled-error';
import type { HandledError } from './handled-error';

import reportedErrorMessage from './reported-error-message';

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

    describe('wrapHandledError', () => {
      // this is testing implementation details 👎
      // we need to make these tests more robust 💪
      it('returns an error with a handledError property', () => {
        const handledError = wrapHandledError(
          new Error() as HandledError,
          mockHandledErrorData
        );
        expect(handledErrorSymbol in handledError).toEqual(true);
      });
      it('assigns error handling details to the handledError property', () => {
        const handledError = wrapHandledError(
          new Error() as HandledError,
          mockHandledErrorData
        );
        expect(handledError[handledErrorSymbol]).toEqual(mockHandledErrorData);
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

    describe('handleAPIError', () => {
      let reportMock: () => void;
      beforeEach(() => {
        reportMock = jest.fn();
      });

      it('returns handled error data', () => {
        expect.assertions(3);
        const axiosErrorMock = {
          response: {
            status: 400
          }
        } as AxiosError;
        const result = handleAPIError(
          axiosErrorMock,
          { redirectTo: '/' },
          reportMock
        );
        expect(result).toHaveProperty('type');
        expect(result).toHaveProperty('message');
        expect(result).toHaveProperty('redirectTo');
      });

      it('does not report 4** errors', () => {
        expect.assertions(1);
        for (let i = 400; i < 500; i++) {
          const axiosErrorMock = {
            response: {
              status: i
            }
          } as AxiosError;
          handleAPIError(axiosErrorMock, { redirectTo: '/' }, reportMock);
        }
        expect(reportMock).not.toHaveBeenCalled();
      });

      it('reports on 5** errors', () => {
        const axiosErrorMock = {
          response: {
            status: 502
          }
        } as AxiosError;
        handleAPIError(axiosErrorMock, { redirectTo: '/' }, reportMock);
        expect(reportMock).toHaveBeenCalledTimes(1);
      });

      it('returns a `reportedErrorMessage` for a 5** error', () => {
        const axiosErrorMock = {
          response: {
            status: 502
          }
        } as AxiosError;
        const result = handleAPIError(
          axiosErrorMock,
          { redirectTo: '/' },
          reportMock
        );
        expect(result).toEqual({ ...reportedErrorMessage, redirectTo: '/' });
      });

      it('respects a `null` redirectTo', () => {
        const axiosErrorMock = {
          response: {
            status: 400
          }
        } as AxiosError;
        const result = handleAPIError(
          axiosErrorMock,
          { redirectTo: null },
          reportMock
        );
        expect(result.redirectTo).toBe(null);
      });
    });
  });
});
