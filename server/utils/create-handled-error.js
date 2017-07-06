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
