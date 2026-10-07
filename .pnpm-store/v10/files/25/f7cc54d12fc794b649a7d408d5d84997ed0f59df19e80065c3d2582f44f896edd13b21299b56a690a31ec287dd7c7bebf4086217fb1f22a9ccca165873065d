export interface UnsubscriptionError extends Error {
  readonly errors: any[];
}

export interface UnsubscriptionErrorCtor {
  new(errors: any[]): UnsubscriptionError;
}

const UnsubscriptionErrorImpl = (() => {
  function UnsubscriptionErrorImpl(this: any, errors: any[]) {
    Error.call(this);
    this.message = errors ?
      `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
  }

  UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);

  return UnsubscriptionErrorImpl;
})();

/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
export const UnsubscriptionError: UnsubscriptionErrorCtor = UnsubscriptionErrorImpl as any;