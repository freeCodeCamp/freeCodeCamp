import { BSONValue } from './bson_value';

/** @public */
export interface MinKeyExtended {
  $minKey: 1;
}

/**
 * A class representation of the BSON MinKey type.
 * @public
 * @category BSONType
 */
export class MinKey extends BSONValue {
  get _bsontype(): 'MinKey' {
    return 'MinKey';
  }

  /** @internal */
  toExtendedJSON(): MinKeyExtended {
    return { $minKey: 1 };
  }

  /** @internal */
  static fromExtendedJSON(): MinKey {
    return new MinKey();
  }

  inspect(): string {
    return 'new MinKey()';
  }
}
