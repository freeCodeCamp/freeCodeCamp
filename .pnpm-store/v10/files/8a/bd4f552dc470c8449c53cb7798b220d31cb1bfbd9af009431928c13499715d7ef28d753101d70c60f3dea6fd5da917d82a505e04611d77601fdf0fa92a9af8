import {
  Binary,
  type BSONElement,
  BSONError,
  BSONType,
  deserialize,
  type DeserializeOptions,
  getBigInt64LE,
  getFloat64LE,
  getInt32LE,
  ObjectId,
  parseToElementsToArray,
  Timestamp,
  toUTF8
} from '../../../bson';

const BSONElementOffset = {
  type: 0,
  nameOffset: 1,
  nameLength: 2,
  offset: 3,
  length: 4
} as const;

/** @internal */
export type JSTypeOf = {
  [BSONType.null]: null;
  [BSONType.undefined]: null;
  [BSONType.double]: number;
  [BSONType.int]: number;
  [BSONType.long]: bigint;
  [BSONType.timestamp]: Timestamp;
  [BSONType.binData]: Binary;
  [BSONType.bool]: boolean;
  [BSONType.objectId]: ObjectId;
  [BSONType.string]: string;
  [BSONType.date]: Date;
  [BSONType.object]: OnDemandDocument;
  [BSONType.array]: OnDemandDocument;
};

/** @internal */
type CachedBSONElement = { element: BSONElement; value: any | undefined };

/**
 * @internal
 *
 * Options for `OnDemandDocument.toObject()`. Validation is required to ensure
 * that callers provide utf8 validation options. */
export type OnDemandDocumentDeserializeOptions = Omit<DeserializeOptions, 'validation'> &
  Required<Pick<DeserializeOptions, 'validation'>>;

/** @internal */
export class OnDemandDocument {
  /**
   * Maps JS strings to elements and jsValues for speeding up subsequent lookups.
   * - If `false` then name does not exist in the BSON document
   * - If `CachedBSONElement` instance name exists
   * - If `cache[name].value == null` jsValue has not yet been parsed
   *   - Null/Undefined values do not get cached because they are zero-length values.
   */
  private readonly cache: Record<string, CachedBSONElement | false | undefined> =
    Object.create(null);
  /** Caches the index of elements that have been named */
  private readonly indexFound: Record<number, boolean> = Object.create(null);

  /** All bson elements in this document */
  private readonly elements: ReadonlyArray<BSONElement>;
  /** BSON bytes, this document begins at offset */
  protected readonly bson: Uint8Array;
  /** The start of the document */
  private readonly offset: number;
  /** If this is an embedded document, indicates if this was a BSON array */
  public readonly isArray: boolean;

  constructor(
    bson: Uint8Array,
    offset = 0,
    isArray = false,
    /** If elements was already calculated */
    elements?: BSONElement[]
  ) {
    this.bson = bson;
    this.offset = offset;
    this.isArray = isArray;
    this.elements = elements ?? parseToElementsToArray(this.bson, offset);
  }

  /** Only supports basic latin strings */
  private isElementName(name: string, element: BSONElement): boolean {
    const nameLength = element[BSONElementOffset.nameLength];
    const nameOffset = element[BSONElementOffset.nameOffset];

    if (name.length !== nameLength) return false;

    const nameEnd = nameOffset + nameLength;
    for (
      let byteIndex = nameOffset, charIndex = 0;
      charIndex < name.length && byteIndex < nameEnd;
      charIndex++, byteIndex++
    ) {
      if (this.bson[byteIndex] !== name.charCodeAt(charIndex)) return false;
    }

    return true;
  }

  /**
   * Seeks into the elements array for an element matching the given name.
   *
   * @remarks
   * Caching:
   * - Caches the existence of a property making subsequent look ups for non-existent properties return immediately
   * - Caches names mapped to elements to avoid reiterating the array and comparing the name again
   * - Caches the index at which an element has been found to prevent rechecking against elements already determined to belong to another name
   *
   * @param name - a basic latin string name of a BSON element
   * @returns
   */
  private getElement(name: string | number): CachedBSONElement | null {
    const cachedElement = this.cache[name];
    if (cachedElement === false) return null;

    if (cachedElement != null) {
      return cachedElement;
    }

    if (typeof name === 'number') {
      if (this.isArray) {
        if (name < this.elements.length) {
          const element = this.elements[name];
          const cachedElement = { element, value: undefined };
          this.cache[name] = cachedElement;
          this.indexFound[name] = true;
          return cachedElement;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }

    for (let index = 0; index < this.elements.length; index++) {
      const element = this.elements[index];

      // skip this element if it has already been associated with a name
      if (!(index in this.indexFound) && this.isElementName(name, element)) {
        const cachedElement = { element, value: undefined };
        this.cache[name] = cachedElement;
        this.indexFound[index] = true;
        return cachedElement;
      }
    }

    this.cache[name] = false;
    return null;
  }

  /**
   * Translates BSON bytes into a javascript value. Checking `as` against the BSON element's type
   * this methods returns the small subset of BSON types that the driver needs to function.
   *
   * @remarks
   * - BSONType.null and BSONType.undefined always return null
   * - If the type requested does not match this returns null
   *
   * @param element - The element to revive to a javascript value
   * @param as - A type byte expected to be returned
   */
  private toJSValue<T extends keyof JSTypeOf>(element: BSONElement, as: T): JSTypeOf[T];
  private toJSValue(element: BSONElement, as: keyof JSTypeOf): any {
    const type = element[BSONElementOffset.type];
    const offset = element[BSONElementOffset.offset];
    const length = element[BSONElementOffset.length];

    if (as !== type) {
      return null;
    }

    switch (as) {
      case BSONType.null:
      case BSONType.undefined:
        return null;
      case BSONType.double:
        return getFloat64LE(this.bson, offset);
      case BSONType.int:
        return getInt32LE(this.bson, offset);
      case BSONType.long:
        return getBigInt64LE(this.bson, offset);
      case BSONType.bool:
        return Boolean(this.bson[offset]);
      case BSONType.objectId:
        return new ObjectId(this.bson.subarray(offset, offset + 12));
      case BSONType.timestamp:
        return new Timestamp(getBigInt64LE(this.bson, offset));
      case BSONType.string:
        return toUTF8(this.bson, offset + 4, offset + length - 1, false);
      case BSONType.binData: {
        const totalBinarySize = getInt32LE(this.bson, offset);
        const subType = this.bson[offset + 4];

        if (subType === 2) {
          const subType2BinarySize = getInt32LE(this.bson, offset + 1 + 4);
          if (subType2BinarySize < 0)
            throw new BSONError('Negative binary type element size found for subtype 0x02');
          if (subType2BinarySize > totalBinarySize - 4)
            throw new BSONError('Binary type with subtype 0x02 contains too long binary size');
          if (subType2BinarySize < totalBinarySize - 4)
            throw new BSONError('Binary type with subtype 0x02 contains too short binary size');
          return new Binary(
            this.bson.subarray(offset + 1 + 4 + 4, offset + 1 + 4 + 4 + subType2BinarySize),
            2
          );
        }

        return new Binary(
          this.bson.subarray(offset + 1 + 4, offset + 1 + 4 + totalBinarySize),
          subType
        );
      }
      case BSONType.date:
        // Pretend this is correct.
        return new Date(Number(getBigInt64LE(this.bson, offset)));

      case BSONType.object:
        return new OnDemandDocument(this.bson, offset);
      case BSONType.array:
        return new OnDemandDocument(this.bson, offset, true);

      default:
        throw new BSONError(`Unsupported BSON type: ${as}`);
    }
  }

  /**
   * Returns the number of elements in this BSON document
   */
  public size() {
    return this.elements.length;
  }

  /**
   * Checks for the existence of an element by name.
   *
   * @remarks
   * Uses `getElement` with the expectation that will populate caches such that a `has` call
   * followed by a `getElement` call will not repeat the cost paid by the first look up.
   *
   * @param name - element name
   */
  public has(name: string): boolean {
    const cachedElement = this.cache[name];
    if (cachedElement === false) return false;
    if (cachedElement != null) return true;
    return this.getElement(name) != null;
  }

  /**
   * Turns BSON element with `name` into a javascript value.
   *
   * @typeParam T - must be one of the supported BSON types determined by `JSTypeOf` this will determine the return type of this function.
   * @param name - the element name
   * @param as - the bson type expected
   * @param required - whether or not the element is expected to exist, if true this function will throw if it is not present
   */
  public get<const T extends keyof JSTypeOf>(
    name: string | number,
    as: T,
    required?: boolean
  ): JSTypeOf[T] | null;

  /** `required` will make `get` throw if name does not exist or is null/undefined */
  public get<const T extends keyof JSTypeOf>(
    name: string | number,
    as: T,
    required: true
  ): JSTypeOf[T];

  public get<const T extends keyof JSTypeOf>(
    name: string | number,
    as: T,
    required?: boolean
  ): JSTypeOf[T] | null {
    const element = this.getElement(name);
    if (element == null) {
      if (required === true) {
        throw new BSONError(`BSON element "${name}" is missing`);
      } else {
        return null;
      }
    }

    if (element.value == null) {
      const value = this.toJSValue(element.element, as);
      if (value == null) {
        if (required === true) {
          throw new BSONError(`BSON element "${name}" is missing`);
        } else {
          return null;
        }
      }
      // It is important to never store null
      element.value = value;
    }

    return element.value;
  }

  /**
   * Supports returning int, double, long, and bool as javascript numbers
   *
   * @remarks
   * **NOTE:**
   * - Use this _only_ when you believe the potential precision loss of an int64 is acceptable
   * - This method does not cache the result as Longs or booleans would be stored incorrectly
   *
   * @param name - element name
   * @param required - throws if name does not exist
   */
  public getNumber<const Req extends boolean = false>(
    name: string,
    required?: Req
  ): Req extends true ? number : number | null;
  public getNumber(name: string, required: boolean): number | null {
    const maybeBool = this.get(name, BSONType.bool);
    const bool = maybeBool == null ? null : maybeBool ? 1 : 0;

    const maybeLong = this.get(name, BSONType.long);
    const long = maybeLong == null ? null : Number(maybeLong);

    const result = bool ?? long ?? this.get(name, BSONType.int) ?? this.get(name, BSONType.double);

    if (required === true && result == null) {
      throw new BSONError(`BSON element "${name}" is missing`);
    }

    return result;
  }

  /**
   * Deserialize this object, DOES NOT cache result so avoid multiple invocations
   * @param options - BSON deserialization options
   */
  public toObject(options?: OnDemandDocumentDeserializeOptions): Record<string, any> {
    return deserialize(this.bson, {
      ...options,
      index: this.offset,
      allowObjectSmallerThanBufferSize: true
    });
  }

  /** Returns this document's bytes only */
  toBytes() {
    const size = getInt32LE(this.bson, this.offset);
    return this.bson.subarray(this.offset, this.offset + size);
  }
}
