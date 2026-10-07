/**
 * Throws an error on another job so that it's picked up by the runtime's
 * uncaught error handling mechanism.
 * @param err the error to throw
 */
export function hostReportError(err: any) {
  setTimeout(() => { throw err; }, 0);
}