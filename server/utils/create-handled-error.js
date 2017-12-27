const _handledError = Symbol('handledError');

export function isHandledError(err) {
  return !!err[_handledError];
}

export function unwrapHandledError(err) {
  return err[_handledError] || {};
}

export function wrapHandledError(err, {
  type,
  message,
  redirectTo
}) {
  err[_handledError] = { type, message, redirectTo };
  return err;
}

export const createValidatorErrorFormatter = (type, redirectTo) =>
  ({ msg }) => wrapHandledError(
    new Error(msg),
    {
      type,
      message: msg,
      redirectTo
    }
  );
