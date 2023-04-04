import { unwrapHandledError } from '../utils/create-handled-error';

export default function setStatusCode() {
  return function (err, _req, res, next) {
    const handled = unwrapHandledError(err);

    // respect handled error status, with sensible fallbacks - only fall back to
    // 500 when something has gone wrong with the error handling
    const statusCode =
      (handled.status || err.statusCode || res.statusCode) ?? 500;

    res.status(statusCode);
    next(err);
  };
}
