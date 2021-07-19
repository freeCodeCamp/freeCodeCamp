import { has } from 'lodash-es';
import type { AxiosError, AxiosResponse } from 'axios';

import standardErrorMessage from './standard-error-message';
import reportedErrorMessage from './reported-error-message';

import { reportClientSideError } from './report-error';

interface ErrorData {
  type?: string;
  message?: string;
  redirectTo?: string | null;
}

export const handledErrorSymbol = Symbol('handledError');

export type HandledError = Error & {
  [handledErrorSymbol]: ErrorData;
};

export function isHandledError(err: unknown): err is HandledError {
  return has(err, handledErrorSymbol);
}

export function unwrapHandledError(
  err: HandledError
): ErrorData | Record<string, never> {
  return handledErrorSymbol in err ? err[handledErrorSymbol] : {};
}

export function wrapHandledError(
  err: Error,
  { type, message, redirectTo }: ErrorData
): HandledError {
  (err as HandledError)[handledErrorSymbol] = {
    type,
    message,
    redirectTo
  };
  return err as HandledError;
}

export function handle400Error(
  e: AxiosError,
  options: ErrorData = { redirectTo: '/' }
): ErrorData {
  const { status } = e.response as AxiosResponse;
  const { redirectTo } = options;
  const flash = { ...standardErrorMessage, redirectTo };

  switch (status) {
    case 401:
    case 403: {
      return {
        ...flash,
        type: 'warn',
        message: 'flash.not-authorized'
      };
    }
    case 404: {
      return {
        ...flash,
        type: 'info',
        message: 'flash.could-not-find'
      };
    }
    default: {
      return flash;
    }
  }
}

export function handle500Error(
  e: AxiosError,
  options: ErrorData = {
    redirectTo: '/'
  },
  _reportClientSideError: (
    e: Error,
    message: string
  ) => void = reportClientSideError
): ErrorData {
  const { redirectTo } = options;
  _reportClientSideError(e, 'We just handled a 5** error on the client');
  return { ...reportedErrorMessage, redirectTo };
}

export function handleAPIError(
  e: AxiosError,
  options: ErrorData,
  _reportClientSideError: (
    e: Error,
    message: string
  ) => void = reportClientSideError
): ErrorData {
  const { response: { status = 0 } = {} } = e;
  if (status >= 400 && status < 500) {
    return handle400Error(e, options);
  }
  if (status >= 500) {
    return handle500Error(e, options, _reportClientSideError);
  }
  const { redirectTo } = options;
  _reportClientSideError(
    e,
    'We just handled an api error on the client without an error status code'
  );
  return { ...reportedErrorMessage, redirectTo };
}
