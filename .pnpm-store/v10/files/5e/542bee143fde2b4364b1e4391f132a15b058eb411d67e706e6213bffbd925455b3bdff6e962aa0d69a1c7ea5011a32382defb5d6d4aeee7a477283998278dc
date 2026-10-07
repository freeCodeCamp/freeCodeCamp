import { BSONOffsetError } from '../../error';
import { NumberUtils } from '../../utils/number_utils';

/**
 * @internal
 *
 * @remarks
 * - This enum is const so the code we produce will inline the numbers
 * - `minKey` is set to 255 so unsigned comparisons succeed
 * - Modify with caution, double check the bundle contains literals
 */
const BSONElementType = {
  double: 1,
  string: 2,
  object: 3,
  array: 4,
  binData: 5,
  undefined: 6,
  objectId: 7,
  bool: 8,
  date: 9,
  null: 10,
  regex: 11,
  dbPointer: 12,
  javascript: 13,
  symbol: 14,
  javascriptWithScope: 15,
  int: 16,
  timestamp: 17,
  long: 18,
  decimal: 19,
  minKey: 255,
  maxKey: 127
} as const;

type BSONElementType = (typeof BSONElementType)[keyof typeof BSONElementType];

/**
 * @public
 * @experimental
 */
export type BSONElement = [
  type: number,
  nameOffset: number,
  nameLength: number,
  offset: number,
  length: number
];

function getSize(source: Uint8Array, offset: number) {
  try {
    return NumberUtils.getNonnegativeInt32LE(source, offset);
  } catch (cause) {
    throw new BSONOffsetError('BSON size cannot be negative', offset, { cause });
  }
}

/**
 * Searches for null terminator of a BSON element's value (Never the document null terminator)
 * **Does not** bounds check since this should **ONLY** be used within parseToElements which has asserted that `bytes` ends with a `0x00`.
 * So this will at most iterate to the document's terminator and error if that is the offset reached.
 */
function findNull(bytes: Uint8Array, offset: number): number {
  let nullTerminatorOffset = offset;

  for (; bytes[nullTerminatorOffset] !== 0x00; nullTerminatorOffset++);

  if (nullTerminatorOffset === bytes.length - 1) {
    // We reached the null terminator of the document, not a value's
    throw new BSONOffsetError('Null terminator not found', offset);
  }

  return nullTerminatorOffset;
}

/**
 * @public
 * @experimental
 */
export function parseToElements(
  bytes: Uint8Array,
  startOffset: number | null = 0
): Iterable<BSONElement> {
  startOffset ??= 0;

  if (bytes.length < 5) {
    throw new BSONOffsetError(
      `Input must be at least 5 bytes, got ${bytes.length} bytes`,
      startOffset
    );
  }

  const documentSize = getSize(bytes, startOffset);

  if (documentSize > bytes.length - startOffset) {
    throw new BSONOffsetError(
      `Parsed documentSize (${documentSize} bytes) does not match input length (${bytes.length} bytes)`,
      startOffset
    );
  }

  if (bytes[startOffset + documentSize - 1] !== 0x00) {
    throw new BSONOffsetError('BSON documents must end in 0x00', startOffset + documentSize);
  }

  const elements: BSONElement[] = [];
  let offset = startOffset + 4;

  while (offset <= documentSize + startOffset) {
    const type = bytes[offset];
    offset += 1;

    if (type === 0) {
      if (offset - startOffset !== documentSize) {
        throw new BSONOffsetError(`Invalid 0x00 type byte`, offset);
      }
      break;
    }

    const nameOffset = offset;
    const nameLength = findNull(bytes, offset) - nameOffset;
    offset += nameLength + 1;

    let length: number;

    if (
      type === BSONElementType.double ||
      type === BSONElementType.long ||
      type === BSONElementType.date ||
      type === BSONElementType.timestamp
    ) {
      length = 8;
    } else if (type === BSONElementType.int) {
      length = 4;
    } else if (type === BSONElementType.objectId) {
      length = 12;
    } else if (type === BSONElementType.decimal) {
      length = 16;
    } else if (type === BSONElementType.bool) {
      length = 1;
    } else if (
      type === BSONElementType.null ||
      type === BSONElementType.undefined ||
      type === BSONElementType.maxKey ||
      type === BSONElementType.minKey
    ) {
      length = 0;
    }
    // Needs a size calculation
    else if (type === BSONElementType.regex) {
      length = findNull(bytes, findNull(bytes, offset) + 1) + 1 - offset;
    } else if (
      type === BSONElementType.object ||
      type === BSONElementType.array ||
      type === BSONElementType.javascriptWithScope
    ) {
      length = getSize(bytes, offset);
    } else if (
      type === BSONElementType.string ||
      type === BSONElementType.binData ||
      type === BSONElementType.dbPointer ||
      type === BSONElementType.javascript ||
      type === BSONElementType.symbol
    ) {
      length = getSize(bytes, offset) + 4;
      if (type === BSONElementType.binData) {
        // binary subtype
        length += 1;
      }
      if (type === BSONElementType.dbPointer) {
        // dbPointer's objectId
        length += 12;
      }
    } else {
      throw new BSONOffsetError(
        `Invalid 0x${type.toString(16).padStart(2, '0')} type byte`,
        offset
      );
    }

    if (length > documentSize) {
      throw new BSONOffsetError('value reports length larger than document', offset);
    }

    elements.push([type, nameOffset, nameLength, offset, length]);
    offset += length;
  }

  return elements;
}
