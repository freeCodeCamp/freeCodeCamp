import { ByteUtils } from '../../utils/byte_utils';
import { NumberUtils } from '../../utils/number_utils';
import { type BSONElement, parseToElements } from './parse_to_elements';
/**
 * @experimental
 * @public
 *
 * A new set of BSON APIs that are currently experimental and not intended for production use.
 */
export type OnDemand = {
  parseToElements: (this: void, bytes: Uint8Array, startOffset?: number) => Iterable<BSONElement>;
  // Types
  BSONElement: BSONElement;

  // Utils
  ByteUtils: ByteUtils;
  NumberUtils: NumberUtils;
};

/**
 * @experimental
 * @public
 */
const onDemand: OnDemand = Object.create(null);

onDemand.parseToElements = parseToElements;
onDemand.ByteUtils = ByteUtils;
onDemand.NumberUtils = NumberUtils;

Object.freeze(onDemand);

export { onDemand };
