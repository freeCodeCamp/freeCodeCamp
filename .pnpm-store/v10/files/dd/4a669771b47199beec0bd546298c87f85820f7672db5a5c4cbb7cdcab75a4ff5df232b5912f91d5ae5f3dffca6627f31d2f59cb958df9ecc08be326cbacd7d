export interface EmptyError extends Error {
}

export interface EmptyErrorCtor {
  new(): EmptyError;
}

const EmptyErrorImpl = (() => {
  function EmptyErrorImpl(this: any) {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
  }

  EmptyErrorImpl.prototype = Object.create(Error.prototype);

  return EmptyErrorImpl;
})();

/**
 * An error thrown when an Observable or a sequence was queried but has no
 * elements.
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link single}
 *
 * @class EmptyError
 */
export const EmptyError: EmptyErrorCtor = EmptyErrorImpl as any;