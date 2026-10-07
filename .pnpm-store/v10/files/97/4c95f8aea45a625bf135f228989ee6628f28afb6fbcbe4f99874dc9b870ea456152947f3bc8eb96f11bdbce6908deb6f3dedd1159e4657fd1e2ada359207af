import { BSONValue } from './bson_value';
import { BSONError } from './error';
import { type InspectFn, defaultInspect } from './parser/utils';
import { ByteUtils } from './utils/byte_utils';
import { NumberUtils } from './utils/number_utils';

// Unique sequence for the current process (initialized on first use)
let PROCESS_UNIQUE: Uint8Array | null = null;

/** ObjectId hexString cache @internal */
const __idCache = new WeakMap(); // TODO(NODE-6549): convert this to #__id private field when target updated to ES2022

/** @public */
export interface ObjectIdLike {
  id: string | Uint8Array;
  __id?: string;
  toHexString(): string;
}

/** @public */
export interface ObjectIdExtended {
  $oid: string;
}

/**
 * A class representation of the BSON ObjectId type.
 * @public
 * @category BSONType
 */
export class ObjectId extends BSONValue {
  get _bsontype(): 'ObjectId' {
    return 'ObjectId';
  }

  /** @internal */
  private static index = Math.floor(Math.random() * 0xffffff);

  static cacheHexString: boolean;

  /** ObjectId Bytes @internal */
  private buffer!: Uint8Array;

  /** To generate a new ObjectId, use ObjectId() with no argument. */
  constructor();
  /**
   * Create ObjectId from a 24 character hex string.
   *
   * @param inputId - A 24 character hex string.
   */
  constructor(inputId: string);
  /**
   * Create ObjectId from the BSON ObjectId type.
   *
   * @param inputId - The BSON ObjectId type.
   */
  constructor(inputId: ObjectId);
  /**
   * Create ObjectId from the object type that has the toHexString method.
   *
   * @param inputId - The ObjectIdLike type.
   */
  constructor(inputId: ObjectIdLike);
  /**
   * Create ObjectId from a 12 byte binary Buffer.
   *
   * @param inputId - A 12 byte binary Buffer.
   */
  constructor(inputId: Uint8Array);
  /**
   * Implementation overload.
   *
   * @param inputId - All input types that are used in the constructor implementation.
   */
  constructor(inputId?: string | ObjectId | ObjectIdLike | Uint8Array);
  /**
   * Create a new ObjectId.
   *
   * @param inputId - An input value to create a new ObjectId from.
   */
  constructor(inputId?: string | ObjectId | ObjectIdLike | Uint8Array) {
    super();
    // workingId is set based on type of input and whether valid id exists for the input
    let workingId;
    if (typeof inputId === 'object' && inputId && 'id' in inputId) {
      if (typeof inputId.id !== 'string' && !ArrayBuffer.isView(inputId.id)) {
        throw new BSONError('Argument passed in must have an id that is of type string or Buffer');
      }
      if ('toHexString' in inputId && typeof inputId.toHexString === 'function') {
        workingId = ByteUtils.fromHex(inputId.toHexString());
      } else {
        workingId = inputId.id;
      }
    } else {
      workingId = inputId;
    }

    // The following cases use workingId to construct an ObjectId
    if (workingId == null) {
      // The most common use case (blank id, new objectId instance)
      // Generate a new id
      this.buffer = ObjectId.generate();
    } else if (ArrayBuffer.isView(workingId) && workingId.byteLength === 12) {
      // If instanceof matches we can escape calling ensure buffer in Node.js environments
      this.buffer = ByteUtils.toLocalBufferType(workingId);
    } else if (typeof workingId === 'string') {
      if (ObjectId.validateHexString(workingId)) {
        this.buffer = ByteUtils.fromHex(workingId);
        // If we are caching the hex string
        if (ObjectId.cacheHexString) {
          __idCache.set(this, workingId);
        }
      } else {
        throw new BSONError(
          'input must be a 24 character hex string, 12 byte Uint8Array, or an integer'
        );
      }
    } else {
      throw new BSONError('Argument passed in does not match the accepted types');
    }
  }

  /**
   * The ObjectId bytes
   * @readonly
   */
  get id(): Uint8Array {
    return this.buffer;
  }

  set id(value: Uint8Array) {
    this.buffer = value;
    if (ObjectId.cacheHexString) {
      __idCache.set(this, ByteUtils.toHex(value));
    }
  }

  /**
   * @internal
   * Validates the input string is a valid hex representation of an ObjectId.
   */
  private static validateHexString(string: string): boolean {
    if (string?.length !== 24) return false;
    for (let i = 0; i < 24; i++) {
      const char = string.charCodeAt(i);
      if (
        // Check for ASCII 0-9
        (char >= 48 && char <= 57) ||
        // Check for ASCII a-f
        (char >= 97 && char <= 102) ||
        // Check for ASCII A-F
        (char >= 65 && char <= 70)
      ) {
        continue;
      }
      return false;
    }
    return true;
  }

  /** Returns the ObjectId id as a 24 lowercase character hex string representation */
  toHexString(): string {
    if (ObjectId.cacheHexString) {
      const __id = __idCache.get(this);
      if (__id) return __id;
    }

    const hexString = ByteUtils.toHex(this.id);

    if (ObjectId.cacheHexString) {
      __idCache.set(this, hexString);
    }

    return hexString;
  }

  /**
   * Update the ObjectId index
   * @internal
   */
  private static getInc(): number {
    return (ObjectId.index = (ObjectId.index + 1) % 0xffffff);
  }

  /**
   * Generate a 12 byte id buffer used in ObjectId's
   *
   * @param time - pass in a second based timestamp.
   */
  static generate(time?: number): Uint8Array {
    if ('number' !== typeof time) {
      time = Math.floor(Date.now() / 1000);
    }

    const inc = ObjectId.getInc();
    const buffer = ByteUtils.allocateUnsafe(12);

    // 4-byte timestamp
    NumberUtils.setInt32BE(buffer, 0, time);

    // set PROCESS_UNIQUE if yet not initialized
    if (PROCESS_UNIQUE === null) {
      PROCESS_UNIQUE = ByteUtils.randomBytes(5);
    }

    // 5-byte process unique
    buffer[4] = PROCESS_UNIQUE[0];
    buffer[5] = PROCESS_UNIQUE[1];
    buffer[6] = PROCESS_UNIQUE[2];
    buffer[7] = PROCESS_UNIQUE[3];
    buffer[8] = PROCESS_UNIQUE[4];

    // 3-byte counter
    buffer[11] = inc & 0xff;
    buffer[10] = (inc >> 8) & 0xff;
    buffer[9] = (inc >> 16) & 0xff;

    return buffer;
  }

  /**
   * Converts the id into a 24 character hex string for printing, unless encoding is provided.
   * @param encoding - hex or base64
   */
  toString(encoding?: 'hex' | 'base64'): string {
    // Is the id a buffer then use the buffer toString method to return the format
    if (encoding === 'base64') return ByteUtils.toBase64(this.id);
    if (encoding === 'hex') return this.toHexString();
    return this.toHexString();
  }

  /** Converts to its JSON the 24 character hex string representation. */
  toJSON(): string {
    return this.toHexString();
  }

  /** @internal */
  private static is(variable: unknown): variable is ObjectId {
    return (
      variable != null &&
      typeof variable === 'object' &&
      '_bsontype' in variable &&
      variable._bsontype === 'ObjectId'
    );
  }

  /**
   * Compares the equality of this ObjectId with `otherID`.
   *
   * @param otherId - ObjectId instance to compare against.
   */
  equals(otherId: string | ObjectId | ObjectIdLike | undefined | null): boolean {
    if (otherId === undefined || otherId === null) {
      return false;
    }

    if (ObjectId.is(otherId)) {
      return (
        this.buffer[11] === otherId.buffer[11] && ByteUtils.equals(this.buffer, otherId.buffer)
      );
    }

    if (typeof otherId === 'string') {
      return otherId.toLowerCase() === this.toHexString();
    }

    if (typeof otherId === 'object' && typeof otherId.toHexString === 'function') {
      const otherIdString = otherId.toHexString();
      const thisIdString = this.toHexString();
      return typeof otherIdString === 'string' && otherIdString.toLowerCase() === thisIdString;
    }

    return false;
  }

  /** Returns the generation date (accurate up to the second) that this ID was generated. */
  getTimestamp(): Date {
    const timestamp = new Date();
    const time = NumberUtils.getUint32BE(this.buffer, 0);
    timestamp.setTime(Math.floor(time) * 1000);
    return timestamp;
  }

  /** @internal */
  static createPk(): ObjectId {
    return new ObjectId();
  }

  /** @internal */
  serializeInto(uint8array: Uint8Array, index: number): 12 {
    uint8array[index] = this.buffer[0];
    uint8array[index + 1] = this.buffer[1];
    uint8array[index + 2] = this.buffer[2];
    uint8array[index + 3] = this.buffer[3];
    uint8array[index + 4] = this.buffer[4];
    uint8array[index + 5] = this.buffer[5];
    uint8array[index + 6] = this.buffer[6];
    uint8array[index + 7] = this.buffer[7];
    uint8array[index + 8] = this.buffer[8];
    uint8array[index + 9] = this.buffer[9];
    uint8array[index + 10] = this.buffer[10];
    uint8array[index + 11] = this.buffer[11];
    return 12;
  }

  /**
   * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
   *
   * @param time - an integer number representing a number of seconds.
   */
  static createFromTime(time: number): ObjectId {
    const buffer = ByteUtils.allocate(12);
    for (let i = 11; i >= 4; i--) buffer[i] = 0;
    // Encode time into first 4 bytes
    NumberUtils.setInt32BE(buffer, 0, time);
    // Return the new objectId
    return new ObjectId(buffer);
  }

  /**
   * Creates an ObjectId from a hex string representation of an ObjectId.
   *
   * @param hexString - create a ObjectId from a passed in 24 character hexstring.
   */
  static createFromHexString(hexString: string): ObjectId {
    if (hexString?.length !== 24) {
      throw new BSONError('hex string must be 24 characters');
    }

    return new ObjectId(ByteUtils.fromHex(hexString));
  }

  /** Creates an ObjectId instance from a base64 string */
  static createFromBase64(base64: string): ObjectId {
    if (base64?.length !== 16) {
      throw new BSONError('base64 string must be 16 characters');
    }

    return new ObjectId(ByteUtils.fromBase64(base64));
  }

  /**
   * Checks if a value can be used to create a valid bson ObjectId
   * @param id - any JS value
   */
  static isValid(id: string | ObjectId | ObjectIdLike | Uint8Array): boolean {
    if (id == null) return false;
    if (typeof id === 'string') return ObjectId.validateHexString(id);

    try {
      new ObjectId(id);
      return true;
    } catch {
      return false;
    }
  }

  /** @internal */
  toExtendedJSON(): ObjectIdExtended {
    if (this.toHexString) return { $oid: this.toHexString() };
    return { $oid: this.toString('hex') };
  }

  /** @internal */
  static fromExtendedJSON(doc: ObjectIdExtended): ObjectId {
    return new ObjectId(doc.$oid);
  }

  /** @internal */
  private isCached(): boolean {
    return ObjectId.cacheHexString && __idCache.has(this);
  }

  /**
   * Converts to a string representation of this Id.
   *
   * @returns return the 24 character hex string representation.
   */
  inspect(depth?: number, options?: unknown, inspect?: InspectFn): string {
    inspect ??= defaultInspect;
    return `new ObjectId(${inspect(this.toHexString(), options)})`;
  }
}
