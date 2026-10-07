import { BSON_MAJOR_VERSION } from './constants';
import { type InspectFn } from './parser/utils';
import { BSON_VERSION_SYMBOL } from './constants';

/** @public */
export abstract class BSONValue {
  /** @public */
  public abstract get _bsontype(): string;

  /** @internal */
  get [BSON_VERSION_SYMBOL](): typeof BSON_MAJOR_VERSION {
    return BSON_MAJOR_VERSION;
  }

  [Symbol.for('nodejs.util.inspect.custom')](
    depth?: number,
    options?: unknown,
    inspect?: InspectFn
  ): string {
    return this.inspect(depth, options, inspect);
  }

  /**
   * @public
   * Prints a human-readable string of BSON value information
   * If invoked manually without node.js.inspect function, this will default to a modified JSON.stringify
   */
  public abstract inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;

  /** @internal */
  abstract toExtendedJSON(): unknown;
}
