import { BSONError } from './error';
import type { Int32 } from './int_32';
import { Long } from './long';
import { type InspectFn, defaultInspect } from './parser/utils';

/** @public */
export type TimestampOverrides = '_bsontype' | 'toExtendedJSON' | 'fromExtendedJSON' | 'inspect';
/** @public */
export type LongWithoutOverrides = new (
  low: unknown,
  high?: number | boolean,
  unsigned?: boolean
) => {
  [P in Exclude<keyof Long, TimestampOverrides>]: Long[P];
};
/** @public */
export const LongWithoutOverridesClass: LongWithoutOverrides =
  Long as unknown as LongWithoutOverrides;

/** @public */
export interface TimestampExtended {
  $timestamp: {
    t: number;
    i: number;
  };
}

/**
 * @public
 * @category BSONType
 *
 * A special type for _internal_ MongoDB use and is **not** associated with the regular Date type.
 */
export class Timestamp extends LongWithoutOverridesClass {
  get _bsontype(): 'Timestamp' {
    return 'Timestamp';
  }

  static readonly MAX_VALUE = Long.MAX_UNSIGNED_VALUE;

  /**
   * An incrementing ordinal for operations within a given second.
   */
  get i(): number {
    return this.low >>> 0;
  }

  /**
   * A `time_t` value measuring seconds since the Unix epoch
   */
  get t(): number {
    return this.high >>> 0;
  }

  /**
   * @param int - A 64-bit bigint representing the Timestamp.
   */
  constructor(int: bigint);
  /**
   * @param long - A 64-bit Long representing the Timestamp.
   */
  constructor(long: Long);
  /**
   * @param value - A pair of two values indicating timestamp and increment.
   */
  constructor(value: { t: number; i: number });
  constructor(low?: bigint | Long | { t: number | Int32; i: number | Int32 }) {
    if (low == null) {
      super(0, 0, true);
    } else if (typeof low === 'bigint') {
      super(low, true);
    } else if (Long.isLong(low)) {
      super(low.low, low.high, true);
    } else if (typeof low === 'object' && 't' in low && 'i' in low) {
      if (typeof low.t !== 'number' && (typeof low.t !== 'object' || low.t._bsontype !== 'Int32')) {
        throw new BSONError('Timestamp constructed from { t, i } must provide t as a number');
      }
      if (typeof low.i !== 'number' && (typeof low.i !== 'object' || low.i._bsontype !== 'Int32')) {
        throw new BSONError('Timestamp constructed from { t, i } must provide i as a number');
      }
      const t = Number(low.t);
      const i = Number(low.i);
      if (t < 0 || Number.isNaN(t)) {
        throw new BSONError('Timestamp constructed from { t, i } must provide a positive t');
      }
      if (i < 0 || Number.isNaN(i)) {
        throw new BSONError('Timestamp constructed from { t, i } must provide a positive i');
      }
      if (t > 0xffff_ffff) {
        throw new BSONError(
          'Timestamp constructed from { t, i } must provide t equal or less than uint32 max'
        );
      }
      if (i > 0xffff_ffff) {
        throw new BSONError(
          'Timestamp constructed from { t, i } must provide i equal or less than uint32 max'
        );
      }

      super(i, t, true);
    } else {
      throw new BSONError(
        'A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }'
      );
    }
  }

  toJSON(): { $timestamp: string } {
    return {
      $timestamp: this.toString()
    };
  }

  /** Returns a Timestamp represented by the given (32-bit) integer value. */
  static fromInt(value: number): Timestamp {
    return new Timestamp(Long.fromInt(value, true));
  }

  /** Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned. */
  static fromNumber(value: number): Timestamp {
    return new Timestamp(Long.fromNumber(value, true));
  }

  /**
   * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
   *
   * @param lowBits - the low 32-bits.
   * @param highBits - the high 32-bits.
   */
  static fromBits(lowBits: number, highBits: number): Timestamp {
    return new Timestamp({ i: lowBits, t: highBits });
  }

  /**
   * Returns a Timestamp from the given string, optionally using the given radix.
   *
   * @param str - the textual representation of the Timestamp.
   * @param optRadix - the radix in which the text is written.
   */
  static fromString(str: string, optRadix: number): Timestamp {
    return new Timestamp(Long.fromString(str, true, optRadix));
  }

  /** @internal */
  toExtendedJSON(): TimestampExtended {
    return { $timestamp: { t: this.t, i: this.i } };
  }

  /** @internal */
  static fromExtendedJSON(doc: TimestampExtended): Timestamp {
    // The Long check is necessary because extended JSON has different behavior given the size of the input number
    const i = Long.isLong(doc.$timestamp.i)
      ? doc.$timestamp.i.getLowBitsUnsigned() // Need to fetch the least significant 32 bits
      : doc.$timestamp.i;
    const t = Long.isLong(doc.$timestamp.t)
      ? doc.$timestamp.t.getLowBitsUnsigned() // Need to fetch the least significant 32 bits
      : doc.$timestamp.t;
    return new Timestamp({ t, i });
  }

  inspect(depth?: number, options?: unknown, inspect?: InspectFn): string {
    inspect ??= defaultInspect;
    const t = inspect(this.t, options);
    const i = inspect(this.i, options);
    return `new Timestamp({ t: ${t}, i: ${i} })`;
  }
}
