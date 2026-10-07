/**
 * @public
 */
export interface AsyncDisposable {
  /**
   * @beta
   * @experimental
   */
  [Symbol.asyncDispose](): Promise<void>;

  /**
   * @internal
   *
   * A method that wraps disposal semantics for a given resource in the class.
   */
  asyncDispose(): Promise<void>;
}

/** @internal */
export function configureResourceManagement(target: AsyncDisposable) {
  Symbol.asyncDispose &&
    Object.defineProperty(target, Symbol.asyncDispose, {
      value: async function asyncDispose(this: AsyncDisposable) {
        await this.asyncDispose();
      },
      enumerable: false,
      configurable: true,
      writable: true
    });
}

/**
 * @beta
 * @experimental
 *
 * Attaches `Symbol.asyncDispose` methods to the MongoClient, Cursors, sessions and change streams
 * if Symbol.asyncDispose is defined.
 *
 * It's usually not necessary to call this method - the driver attempts to attach these methods
 * itself when its loaded.  However, sometimes the driver may be loaded before `Symbol.asyncDispose`
 * is defined, in which case it is necessary to call this method directly.  This can happen if the
 * application is polyfilling `Symbol.asyncDispose`.
 *
 * Example:
 *
 * ```typescript
 * import { configureExplicitResourceManagement, MongoClient } from 'mongodb/lib/beta';
 *
 * Symbol.asyncDispose ??= Symbol('dispose');
 * load();
 *
 * await using client = new MongoClient(...);
 * ```
 */
export function configureExplicitResourceManagement() {
  // We must import lazily here, because there's a circular dependency between the resource management
  // file and each resources' file.  We could move `configureResourceManagement` to a separate
  // function, but keeping all resource-management related code together seemed preferable and I chose
  // lazy requiring of resources instead.

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { MongoClient } = require('./mongo_client');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { ClientSession } = require('./sessions');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { AbstractCursor } = require('./cursor/abstract_cursor');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { ChangeStream } = require('./change_stream');

  configureResourceManagement(MongoClient.prototype);
  configureResourceManagement(ClientSession.prototype);
  configureResourceManagement(AbstractCursor.prototype);
  configureResourceManagement(ChangeStream.prototype);
}
