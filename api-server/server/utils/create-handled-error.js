const _handledError = Symbol('handledError');

export function isHandledError(err) {
  return !!err[_handledError];
}

export function unwrapHandledError(err) {
  return err[_handledError] || {};
}

export function wrapHandledError(
  err,
  { type, message, redirectTo, status = 200 }
) {
  err[_handledError] = { type, message, redirectTo, status };
  return err;
}

// for use with express-validator error formatter
export const createValidatorErrorFormatter = (type, redirectTo) => ({ msg }) =>
  wrapHandledError(new Error(msg), {
    type,
    message: msg,
    redirectTo,
    // we default to 400 as these are malformed requests
    status: 400
  });
