import { has } from 'lodash';

import standardErrorMessage from './standardErrorMessage';
import reportedErrorMessage from './reportedErrorMessage';

import { reportClientSideError } from './report-error';

export const handledErrorSymbol = Symbol('handledError');

export function isHandledError(err) {
  return has(err, handledErrorSymbol);
}

export function unwrapHandledError(err) {
  return handledErrorSymbol in err ? err[handledErrorSymbol] : {};
}

export function wrapHandledError(err, { type, message, redirectTo }) {
  err[handledErrorSymbol] = { type, message, redirectTo };
  return err;
}

export function handle400Error(e, options = { redirectTo: '/' }) {
  const {
    response: { status }
  } = e;
  let { redirectTo } = options;
  let flash = { ...standardErrorMessage, redirectTo };

  switch (status) {
    case 401:
    case 403: {
      return {
        ...flash,
        type: 'warn',
        message: 'You are not authorised to continue on this route'
      };
    }
    case 404: {
      return {
        ...flash,
        type: 'info',
        message:
          "We couldn't find what you were looking for. " +
          'Please check and try again'
      };
    }
    default: {
      return flash;
    }
  }
}

export function handle500Error(
  e,
  options = {
    redirectTo: '/'
  },
  _reportClientSideError = reportClientSideError
) {
  const { redirectTo } = options;
  _reportClientSideError(e, 'We just handled a 5** error on the client');
  return { ...reportedErrorMessage, redirectTo };
}

export function handleAPIError(
  e,
  options,
  _reportClientSideError = reportClientSideError
) {
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
