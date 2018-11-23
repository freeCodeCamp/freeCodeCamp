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

export function handle400Error(e, options = { redirectTo: '/welcome' }) {
  const {
    response: { status }
  } = e;
  const { redirectTo } = options;
  let flash = { ...standardErrorMessage };
  switch (status) {
    case 401:
    case 403: {
      flash = { message: 'You are not authorised to continue on this route' };
      break;
    }
    case 404: {
      flash = {
        type: 'info',
        message:
          "We couldn't find what you were looking for. " +
          'Please chack and try again'
      };
      break;
    }
    default: {
      break;
    }
  }
  return wrapHandledError(e, { ...flash, redirectTo });
}

export function handle500Error(e, options = { redirectTo: '/welcome' }) {
  const { redirectTo } = options;
  reportClientSideError(e, 'We just handled a 5** error on the client');
  return wrapHandledError(e, { ...reportedErrorMessage, redirectTo });
}
