/**
 * A class representation of the BSON Binary type.
 * @public
 * @category BSONType
 */
export declare class Binary extends BSONValue {
    get _bsontype(): 'Binary';
    /* Excluded from this release type: BSON_BINARY_SUBTYPE_DEFAULT */
    /** Initial buffer default size */
    static readonly BUFFER_SIZE = 256;
    /** Default BSON type */
    static readonly SUBTYPE_DEFAULT = 0;
    /** Function BSON type */
    static readonly SUBTYPE_FUNCTION = 1;
    /** Byte Array BSON type */
    static readonly SUBTYPE_BYTE_ARRAY = 2;
    /** Deprecated UUID BSON type @deprecated Please use SUBTYPE_UUID */
    static readonly SUBTYPE_UUID_OLD = 3;
    /** UUID BSON type */
    static readonly SUBTYPE_UUID = 4;
    /** MD5 BSON type */
    static readonly SUBTYPE_MD5 = 5;
    /** Encrypted BSON type */
    static readonly SUBTYPE_ENCRYPTED = 6;
    /** Column BSON type */
    static readonly SUBTYPE_COLUMN = 7;
    /** Sensitive BSON type */
    static readonly SUBTYPE_SENSITIVE = 8;
    /** Vector BSON type */
    static readonly SUBTYPE_VECTOR = 9;
    /** User BSON type */
    static readonly SUBTYPE_USER_DEFINED = 128;
    /** datatype of a Binary Vector (subtype: 9) */
    static readonly VECTOR_TYPE: Readonly<{
        readonly Int8: 3;
        readonly Float32: 39;
        readonly PackedBit: 16;
    }>;
    /**
     * The bytes of the Binary value.
     *
     * The format of a Binary value in BSON is defined as:
     * ```txt
     * binary	::= int32 subtype (byte*)
     * ```
     *
     * This `buffer` is the "(byte*)" segment.
     *
     * Unless the value is subtype 2, then deserialize will read the first 4 bytes as an int32 and set this to the remaining bytes.
     *
     * ```txt
     * binary	::= int32 unsigned_byte(2) int32 (byte*)
     * ```
     *
     * @see https://bsonspec.org/spec.html
     */
    buffer: Uint8Array;
    /**
     * The binary subtype.
     *
     * Current defined values are:
     *
     * - `unsigned_byte(0)` Generic binary subtype
     * - `unsigned_byte(1)` Function
     * - `unsigned_byte(2)` Binary (Deprecated)
     * - `unsigned_byte(3)` UUID (Deprecated)
     * - `unsigned_byte(4)` UUID
     * - `unsigned_byte(5)` MD5
     * - `unsigned_byte(6)` Encrypted BSON value
     * - `unsigned_byte(7)` Compressed BSON column
     * - `unsigned_byte(8)` Sensitive
     * - `unsigned_byte(9)` Vector
     * - `unsigned_byte(128)` - `unsigned_byte(255)` User defined
     */
    sub_type: number;
    /**
     * The Binary's `buffer` can be larger than the Binary's content.
     * This property is used to determine where the content ends in the buffer.
     */
    position: number;
    /**
     * Create a new Binary instance.
     * @param buffer - a buffer object containing the binary data.
     * @param subType - the option binary type.
     */
    constructor(buffer?: BinarySequence, subType?: number);
    /**
     * Updates this binary with byte_value.
     *
     * @param byteValue - a single byte we wish to write.
     */
    put(byteValue: string | number | Uint8Array | number[]): void;
    /**
     * Writes a buffer to the binary.
     *
     * @param sequence - a string or buffer to be written to the Binary BSON object.
     * @param offset - specify the binary of where to write the content.
     */
    write(sequence: BinarySequence, offset: number): void;
    /**
     * Returns a view of **length** bytes starting at **position**.
     *
     * @param position - read from the given position in the Binary.
     * @param length - the number of bytes to read.
     */
    read(position: number, length: number): Uint8Array;
    /** returns a view of the binary value as a Uint8Array */
    value(): Uint8Array;
    /** the length of the binary sequence */
    length(): number;
    toJSON(): string;
    toString(encoding?: 'hex' | 'base64' | 'utf8' | 'utf-8'): string;
    /* Excluded from this release type: toExtendedJSON */
    toUUID(): UUID;
    /** Creates an Binary instance from a hex digit string */
    static createFromHexString(hex: string, subType?: number): Binary;
    /** Creates an Binary instance from a base64 string */
    static createFromBase64(base64: string, subType?: number): Binary;
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
    /**
     * If this Binary represents a Int8 Vector (`binary.buffer[0] === Binary.VECTOR_TYPE.Int8`),
     * returns a copy of the bytes in a new Int8Array.
     *
     * If the Binary is not a Vector, or the datatype is not Int8, an error is thrown.
     */
    toInt8Array(): Int8Array;
    /**
     * If this Binary represents a Float32 Vector (`binary.buffer[0] === Binary.VECTOR_TYPE.Float32`),
     * returns a copy of the bytes in a new Float32Array.
     *
     * If the Binary is not a Vector, or the datatype is not Float32, an error is thrown.
     */
    toFloat32Array(): Float32Array;
    /**
     * If this Binary represents packed bit Vector (`binary.buffer[0] === Binary.VECTOR_TYPE.PackedBit`),
     * returns a copy of the bytes that are packed bits.
     *
     * Use `toBits` to get the unpacked bits.
     *
     * If the Binary is not a Vector, or the datatype is not PackedBit, an error is thrown.
     */
    toPackedBits(): Uint8Array;
    /**
     * If this Binary represents a Packed bit Vector (`binary.buffer[0] === Binary.VECTOR_TYPE.PackedBit`),
     * returns a copy of the bit unpacked into a new Int8Array.
     *
     * Use `toPackedBits` to get the bits still in packed form.
     *
     * If the Binary is not a Vector, or the datatype is not PackedBit, an error is thrown.
     */
    toBits(): Int8Array;
    /**
     * Constructs a Binary representing an Int8 Vector.
     * @param array - The array to store as a view on the Binary class
     */
    static fromInt8Array(array: Int8Array): Binary;
    /** Constructs a Binary representing an Float32 Vector. */
    static fromFloat32Array(array: Float32Array): Binary;
    /**
     * Constructs a Binary representing a packed bit Vector.
     *
     * Use `fromBits` to pack an array of 1s and 0s.
     */
    static fromPackedBits(array: Uint8Array, padding?: number): Binary;
    /**
     * Constructs a Binary representing an Packed Bit Vector.
     * @param array - The array of 1s and 0s to pack into the Binary instance
     */
    static fromBits(bits: ArrayLike<number>): Binary;
}

/** @public */
export declare interface BinaryExtended {
    $binary: {
        subType: string;
        base64: string;
    };
}

/** @public */
export declare interface BinaryExtendedLegacy {
    $type: string;
    $binary: string;
}

/** @public */
export declare type BinarySequence = Uint8Array | number[];

declare namespace BSON {
    export {
        setInternalBufferSize,
        serialize,
        serializeWithBufferAndIndex,
        deserialize,
        calculateObjectSize,
        deserializeStream,
        UUIDExtended,
        BinaryExtended,
        BinaryExtendedLegacy,
        BinarySequence,
        CodeExtended,
        DBRefLike,
        Decimal128Extended,
        DoubleExtended,
        EJSONOptions,
        Int32Extended,
        LongExtended,
        MaxKeyExtended,
        MinKeyExtended,
        ObjectIdExtended,
        ObjectIdLike,
        BSONRegExpExtended,
        BSONRegExpExtendedLegacy,
        BSONSymbolExtended,
        LongWithoutOverrides,
        TimestampExtended,
        TimestampOverrides,
        LongWithoutOverridesClass,
        SerializeOptions,
        DeserializeOptions,
        Code,
        BSONSymbol,
        DBRef,
        Binary,
        ObjectId,
        UUID,
        Long,
        Timestamp,
        Double,
        Int32,
        MinKey,
        MaxKey,
        BSONRegExp,
        Decimal128,
        BSONValue,
        BSONError,
        BSONVersionError,
        BSONRuntimeError,
        BSONOffsetError,
        BSONType,
        EJSON,
        onDemand,
        OnDemand,
        Document,
        CalculateObjectSizeOptions
    }
}
export { BSON }

/* Excluded from this release type: BSON_MAJOR_VERSION */

/* Excluded from this release type: BSON_VERSION_SYMBOL */

/**
 * @public
 * @experimental
 */
declare type BSONElement = [
type: number,
nameOffset: number,
nameLength: number,
offset: number,
length: number
];

/**
 * @public
 * @category Error
 *
 * `BSONError` objects are thrown when BSON encounters an error.
 *
 * This is the parent class for all the other errors thrown by this library.
 */
export declare class BSONError extends Error {
    /* Excluded from this release type: bsonError */
    get name(): string;
    constructor(message: string, options?: {
        cause?: unknown;
    });
    /**
     * @public
     *
     * All errors thrown from the BSON library inherit from `BSONError`.
     * This method can assist with determining if an error originates from the BSON library
     * even if it does not pass an `instanceof` check against this class' constructor.
     *
     * @param value - any javascript value that needs type checking
     */
    static isBSONError(value: unknown): value is BSONError;
}

/**
 * @public
 * @category Error
 *
 * @experimental
 *
 * An error generated when BSON bytes are invalid.
 * Reports the offset the parser was able to reach before encountering the error.
 */
export declare class BSONOffsetError extends BSONError {
    get name(): 'BSONOffsetError';
    offset: number;
    constructor(message: string, offset: number, options?: {
        cause?: unknown;
    });
}

/**
 * A class representation of the BSON RegExp type.
 * @public
 * @category BSONType
 */
export declare class BSONRegExp extends BSONValue {
    get _bsontype(): 'BSONRegExp';
    pattern: string;
    options: string;
    /**
     * @param pattern - The regular expression pattern to match
     * @param options - The regular expression options
     */
    constructor(pattern: string, options?: string);
    static parseOptions(options?: string): string;
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface BSONRegExpExtended {
    $regularExpression: {
        pattern: string;
        options: string;
    };
}

/** @public */
export declare interface BSONRegExpExtendedLegacy {
    $regex: string | BSONRegExp;
    $options: string;
}

/**
 * @public
 * @category Error
 *
 * An error generated when BSON functions encounter an unexpected input
 * or reaches an unexpected/invalid internal state
 *
 */
export declare class BSONRuntimeError extends BSONError {
    get name(): 'BSONRuntimeError';
    constructor(message: string);
}

/**
 * A class representation of the BSON Symbol type.
 * @public
 * @category BSONType
 */
export declare class BSONSymbol extends BSONValue {
    get _bsontype(): 'BSONSymbol';
    value: string;
    /**
     * @param value - the string representing the symbol.
     */
    constructor(value: string);
    /** Access the wrapped string value. */
    valueOf(): string;
    toString(): string;
    toJSON(): string;
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface BSONSymbolExtended {
    $symbol: string;
}

/** @public */
export declare const BSONType: Readonly<{
    readonly double: 1;
    readonly string: 2;
    readonly object: 3;
    readonly array: 4;
    readonly binData: 5;
    readonly undefined: 6;
    readonly objectId: 7;
    readonly bool: 8;
    readonly date: 9;
    readonly null: 10;
    readonly regex: 11;
    readonly dbPointer: 12;
    readonly javascript: 13;
    readonly symbol: 14;
    readonly javascriptWithScope: 15;
    readonly int: 16;
    readonly timestamp: 17;
    readonly long: 18;
    readonly decimal: 19;
    readonly minKey: -1;
    readonly maxKey: 127;
}>;

/** @public */
export declare type BSONType = (typeof BSONType)[keyof typeof BSONType];

/** @public */
export declare abstract class BSONValue {
    /** @public */
    abstract get _bsontype(): string;
    /* Excluded from this release type: [BSON_VERSION_SYMBOL] */
    /**
     * @public
     * Prints a human-readable string of BSON value information
     * If invoked manually without node.js.inspect function, this will default to a modified JSON.stringify
     */
    abstract inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
    /* Excluded from this release type: toExtendedJSON */
}

/**
 * @public
 * @category Error
 */
export declare class BSONVersionError extends BSONError {
    get name(): 'BSONVersionError';
    constructor();
}

/**
 * @public
 * @experimental
 *
 * A collection of functions that help work with data in a Uint8Array.
 * ByteUtils is configured at load time to use Node.js or Web based APIs for the internal implementations.
 */
declare type ByteUtils = {
    /** Transforms the input to an instance of Buffer if running on node, otherwise Uint8Array */
    toLocalBufferType: (buffer: Uint8Array | ArrayBufferView | ArrayBuffer) => Uint8Array;
    /** Create empty space of size */
    allocate: (size: number) => Uint8Array;
    /** Create empty space of size, use pooled memory when available */
    allocateUnsafe: (size: number) => Uint8Array;
    /** Check if two Uint8Arrays are deep equal */
    equals: (a: Uint8Array, b: Uint8Array) => boolean;
    /** Check if two Uint8Arrays are deep equal */
    fromNumberArray: (array: number[]) => Uint8Array;
    /** Create a Uint8Array from a base64 string */
    fromBase64: (base64: string) => Uint8Array;
    /** Create a base64 string from bytes */
    toBase64: (buffer: Uint8Array) => string;
    /** **Legacy** binary strings are an outdated method of data transfer. Do not add public API support for interpreting this format */
    fromISO88591: (codePoints: string) => Uint8Array;
    /** **Legacy** binary strings are an outdated method of data transfer. Do not add public API support for interpreting this format */
    toISO88591: (buffer: Uint8Array) => string;
    /** Create a Uint8Array from a hex string */
    fromHex: (hex: string) => Uint8Array;
    /** Create a lowercase hex string from bytes */
    toHex: (buffer: Uint8Array) => string;
    /** Create a string from utf8 code units, fatal=true will throw an error if UTF-8 bytes are invalid, fatal=false will insert replacement characters */
    toUTF8: (buffer: Uint8Array, start: number, end: number, fatal: boolean) => string;
    /** Get the utf8 code unit count from a string if it were to be transformed to utf8 */
    utf8ByteLength: (input: string) => number;
    /** Encode UTF8 bytes generated from `source` string into `destination` at byteOffset. Returns the number of bytes encoded. */
    encodeUTF8Into: (destination: Uint8Array, source: string, byteOffset: number) => number;
    /** Generate a Uint8Array filled with random bytes with byteLength */
    randomBytes: (byteLength: number) => Uint8Array;
    /** Interprets `buffer` as an array of 32-bit values and swaps the byte order in-place. */
    swap32: (buffer: Uint8Array) => Uint8Array;
};

/* Excluded declaration from this release type: ByteUtils */

/**
 * Calculate the bson size for a passed in Javascript object.
 *
 * @param object - the Javascript object to calculate the BSON byte size for
 * @returns size of BSON object in bytes
 * @public
 */
export declare function calculateObjectSize(object: Document, options?: CalculateObjectSizeOptions): number;

/** @public */
export declare type CalculateObjectSizeOptions = Pick<SerializeOptions, 'serializeFunctions' | 'ignoreUndefined'>;

/**
 * A class representation of the BSON Code type.
 * @public
 * @category BSONType
 */
export declare class Code extends BSONValue {
    get _bsontype(): 'Code';
    code: string;
    scope: Document | null;
    /**
     * @param code - a string or function.
     * @param scope - an optional scope for the function.
     */
    constructor(code: string | Function, scope?: Document | null);
    toJSON(): {
        code: string;
        scope?: Document;
    };
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface CodeExtended {
    $code: string;
    $scope?: Document;
}

/**
 * A class representation of the BSON DBRef type.
 * @public
 * @category BSONType
 */
export declare class DBRef extends BSONValue {
    get _bsontype(): 'DBRef';
    collection: string;
    oid: ObjectId;
    db?: string;
    fields: Document;
    /**
     * @param collection - the collection name.
     * @param oid - the reference ObjectId.
     * @param db - optional db name, if omitted the reference is local to the current db.
     */
    constructor(collection: string, oid: ObjectId, db?: string, fields?: Document);
    /* Excluded from this release type: namespace */
    /* Excluded from this release type: namespace */
    toJSON(): DBRefLike & Document;
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface DBRefLike {
    $ref: string;
    $id: ObjectId;
    $db?: string;
}

/**
 * A class representation of the BSON Decimal128 type.
 * @public
 * @category BSONType
 */
export declare class Decimal128 extends BSONValue {
    get _bsontype(): 'Decimal128';
    readonly bytes: Uint8Array;
    /**
     * @param bytes - a buffer containing the raw Decimal128 bytes in little endian order,
     *                or a string representation as returned by .toString()
     */
    constructor(bytes: Uint8Array | string);
    /**
     * Create a Decimal128 instance from a string representation
     *
     * @param representation - a numeric string representation.
     */
    static fromString(representation: string): Decimal128;
    /**
     * Create a Decimal128 instance from a string representation, allowing for rounding to 34
     * significant digits
     *
     * @example Example of a number that will be rounded
     * ```ts
     * > let d = Decimal128.fromString('37.499999999999999196428571428571375')
     * Uncaught:
     * BSONError: "37.499999999999999196428571428571375" is not a valid Decimal128 string - inexact rounding
     * at invalidErr (/home/wajames/js-bson/lib/bson.cjs:1402:11)
     * at Decimal128.fromStringInternal (/home/wajames/js-bson/lib/bson.cjs:1633:25)
     * at Decimal128.fromString (/home/wajames/js-bson/lib/bson.cjs:1424:27)
     *
     * > d = Decimal128.fromStringWithRounding('37.499999999999999196428571428571375')
     * new Decimal128("37.49999999999999919642857142857138")
     * ```
     * @param representation - a numeric string representation.
     */
    static fromStringWithRounding(representation: string): Decimal128;
    private static _fromString;
    /** Create a string representation of the raw Decimal128 value */
    toString(): string;
    toJSON(): Decimal128Extended;
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface Decimal128Extended {
    $numberDecimal: string;
}

/**
 * Deserialize data as BSON.
 *
 * @param buffer - the buffer containing the serialized set of BSON documents.
 * @returns returns the deserialized Javascript Object.
 * @public
 */
export declare function deserialize(buffer: Uint8Array, options?: DeserializeOptions): Document;

/** @public */
export declare interface DeserializeOptions {
    /**
     * when deserializing a Long return as a BigInt.
     * @defaultValue `false`
     */
    useBigInt64?: boolean;
    /**
     * when deserializing a Long will fit it into a Number if it's smaller than 53 bits.
     * @defaultValue `true`
     */
    promoteLongs?: boolean;
    /**
     * when deserializing a Binary will return it as a node.js Buffer instance.
     * @defaultValue `false`
     */
    promoteBuffers?: boolean;
    /**
     * when deserializing will promote BSON values to their Node.js closest equivalent types.
     * @defaultValue `true`
     */
    promoteValues?: boolean;
    /**
     * allow to specify if there what fields we wish to return as unserialized raw buffer.
     * @defaultValue `null`
     */
    fieldsAsRaw?: Document;
    /**
     * return BSON regular expressions as BSONRegExp instances.
     * @defaultValue `false`
     */
    bsonRegExp?: boolean;
    /**
     * allows the buffer to be larger than the parsed BSON object.
     * @defaultValue `false`
     */
    allowObjectSmallerThanBufferSize?: boolean;
    /**
     * Offset into buffer to begin reading document from
     * @defaultValue `0`
     */
    index?: number;
    raw?: boolean;
    /** Allows for opt-out utf-8 validation for all keys or
     * specified keys. Must be all true or all false.
     *
     * @example
     * ```js
     * // disables validation on all keys
     *  validation: { utf8: false }
     *
     * // enables validation only on specified keys a, b, and c
     *  validation: { utf8: { a: true, b: true, c: true } }
     *
     *  // disables validation only on specified keys a, b
     *  validation: { utf8: { a: false, b: false } }
     * ```
     */
    validation?: {
        utf8: boolean | Record<string, true> | Record<string, false>;
    };
}

/**
 * Deserialize stream data as BSON documents.
 *
 * @param data - the buffer containing the serialized set of BSON documents.
 * @param startIndex - the start index in the data Buffer where the deserialization is to start.
 * @param numberOfDocuments - number of documents to deserialize.
 * @param documents - an array where to store the deserialized documents.
 * @param docStartIndex - the index in the documents array from where to start inserting documents.
 * @param options - additional options used for the deserialization.
 * @returns next index in the buffer after deserialization **x** numbers of documents.
 * @public
 */
export declare function deserializeStream(data: Uint8Array | ArrayBuffer, startIndex: number, numberOfDocuments: number, documents: Document[], docStartIndex: number, options: DeserializeOptions): number;

/** @public */
export declare interface Document {
    [key: string]: any;
}

/**
 * A class representation of the BSON Double type.
 * @public
 * @category BSONType
 */
export declare class Double extends BSONValue {
    get _bsontype(): 'Double';
    value: number;
    /**
     * Create a Double type
     *
     * @param value - the number we want to represent as a double.
     */
    constructor(value: number);
    /**
     * Attempt to create an double type from string.
     *
     * This method will throw a BSONError on any string input that is not representable as a IEEE-754 64-bit double.
     * Notably, this method will also throw on the following string formats:
     * - Strings in non-decimal and non-exponential formats (binary, hex, or octal digits)
     * - Strings with characters other than numeric, floating point, or leading sign characters (Note: 'Infinity', '-Infinity', and 'NaN' input strings are still allowed)
     * - Strings with leading and/or trailing whitespace
     *
     * Strings with leading zeros, however, are also allowed
     *
     * @param value - the string we want to represent as a double.
     */
    static fromString(value: string): Double;
    /**
     * Access the number value.
     *
     * @returns returns the wrapped double number.
     */
    valueOf(): number;
    toJSON(): number;
    toString(radix?: number): string;
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface DoubleExtended {
    $numberDouble: string;
}

/** @public */
export declare const EJSON: {
    parse: typeof parse;
    stringify: typeof stringify;
    serialize: typeof EJSONserialize;
    deserialize: typeof EJSONdeserialize;
};

/**
 * Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types
 *
 * @param ejson - The Extended JSON object to deserialize
 * @param options - Optional settings passed to the parse method
 */
declare function EJSONdeserialize(ejson: Document, options?: EJSONOptions): any;

/** @public */
export declare type EJSONOptions = {
    /**
     * Output using the Extended JSON v1 spec
     * @defaultValue `false`
     */
    legacy?: boolean;
    /**
     * Enable Extended JSON's `relaxed` mode, which attempts to return native JS types where possible, rather than BSON types
     * @defaultValue `false` */
    relaxed?: boolean;
    /**
     * Enable native bigint support
     * @defaultValue `false`
     */
    useBigInt64?: boolean;
};

/**
 * Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.
 *
 * @param value - The object to serialize
 * @param options - Optional settings passed to the `stringify` function
 */
declare function EJSONserialize(value: any, options?: EJSONOptions): Document;

declare type InspectFn = (x: unknown, options?: unknown) => string;

/**
 * A class representation of a BSON Int32 type.
 * @public
 * @category BSONType
 */
export declare class Int32 extends BSONValue {
    get _bsontype(): 'Int32';
    value: number;
    /**
     * Create an Int32 type
     *
     * @param value - the number we want to represent as an int32.
     */
    constructor(value: number | string);
    /**
     * Attempt to create an Int32 type from string.
     *
     * This method will throw a BSONError on any string input that is not representable as an Int32.
     * Notably, this method will also throw on the following string formats:
     * - Strings in non-decimal formats (exponent notation, binary, hex, or octal digits)
     * - Strings non-numeric and non-leading sign characters (ex: '2.0', '24,000')
     * - Strings with leading and/or trailing whitespace
     *
     * Strings with leading zeros, however, are allowed.
     *
     * @param value - the string we want to represent as an int32.
     */
    static fromString(value: string): Int32;
    /**
     * Access the number value.
     *
     * @returns returns the wrapped int32 number.
     */
    valueOf(): number;
    toString(radix?: number): string;
    toJSON(): number;
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface Int32Extended {
    $numberInt: string;
}

/**
 * A class representing a 64-bit integer
 * @public
 * @category BSONType
 * @remarks
 * The internal representation of a long is the two given signed, 32-bit values.
 * We use 32-bit pieces because these are the size of integers on which
 * Javascript performs bit-operations.  For operations like addition and
 * multiplication, we split each number into 16 bit pieces, which can easily be
 * multiplied within Javascript's floating-point representation without overflow
 * or change in sign.
 * In the algorithms below, we frequently reduce the negative case to the
 * positive case by negating the input(s) and then post-processing the result.
 * Note that we must ALWAYS check specially whether those values are MIN_VALUE
 * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
 * a positive number, it overflows back into a negative).  Not handling this
 * case would often result in infinite recursion.
 * Common constant values ZERO, ONE, NEG_ONE, etc. are found as static properties on this class.
 */
export declare class Long extends BSONValue {
    get _bsontype(): 'Long';
    /** An indicator used to reliably determine if an object is a Long or not. */
    get __isLong__(): boolean;
    /**
     * The high 32 bits as a signed value.
     */
    high: number;
    /**
     * The low 32 bits as a signed value.
     */
    low: number;
    /**
     * Whether unsigned or not.
     */
    unsigned: boolean;
    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *
     * @param low - The low (signed) 32 bits of the long
     * @param high - The high (signed) 32 bits of the long
     * @param unsigned - Whether unsigned or not, defaults to signed
     */
    constructor(low: number, high?: number, unsigned?: boolean);
    /**
     * Constructs a 64 bit two's-complement integer, given a bigint representation.
     *
     * @param value - BigInt representation of the long value
     * @param unsigned - Whether unsigned or not, defaults to signed
     */
    constructor(value: bigint, unsigned?: boolean);
    /**
     * Constructs a 64 bit two's-complement integer, given a string representation.
     *
     * @param value - String representation of the long value
     * @param unsigned - Whether unsigned or not, defaults to signed
     */
    constructor(value: string, unsigned?: boolean);
    static TWO_PWR_24: Long;
    /** Maximum unsigned value. */
    static MAX_UNSIGNED_VALUE: Long;
    /** Signed zero */
    static ZERO: Long;
    /** Unsigned zero. */
    static UZERO: Long;
    /** Signed one. */
    static ONE: Long;
    /** Unsigned one. */
    static UONE: Long;
    /** Signed negative one. */
    static NEG_ONE: Long;
    /** Maximum signed value. */
    static MAX_VALUE: Long;
    /** Minimum signed value. */
    static MIN_VALUE: Long;
    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits.
     * Each is assumed to use 32 bits.
     * @param lowBits - The low 32 bits
     * @param highBits - The high 32 bits
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long;
    /**
     * Returns a Long representing the given 32 bit integer value.
     * @param value - The 32 bit integer in question
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromInt(value: number, unsigned?: boolean): Long;
    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @param value - The number in question
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromNumber(value: number, unsigned?: boolean): Long;
    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @param value - The number in question
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromBigInt(value: bigint, unsigned?: boolean): Long;
    /* Excluded from this release type: _fromString */
    /**
     * Returns a signed Long representation of the given string, written using radix 10.
     * Will throw an error if the given text is not exactly representable as a Long.
     * Throws an error if any of the following conditions are true:
     * - the string contains invalid characters for the radix 10
     * - the string contains whitespace
     * - the value the string represents is too large or too small to be a Long
     * Unlike Long.fromString, this method does not coerce '+/-Infinity' and 'NaN' to Long.Zero
     * @param str - The textual representation of the Long
     * @returns The corresponding Long value
     */
    static fromStringStrict(str: string): Long;
    /**
     * Returns a Long representation of the given string, written using the radix 10.
     * Will throw an error if the given parameters are not exactly representable as a Long.
     * Throws an error if any of the following conditions are true:
     * - the string contains invalid characters for the given radix
     * - the string contains whitespace
     * - the value the string represents is too large or too small to be a Long
     * Unlike Long.fromString, this method does not coerce '+/-Infinity' and 'NaN' to Long.Zero
     * @param str - The textual representation of the Long
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromStringStrict(str: string, unsigned?: boolean): Long;
    /**
     * Returns a signed Long representation of the given string, written using the specified radix.
     * Will throw an error if the given parameters are not exactly representable as a Long.
     * Throws an error if any of the following conditions are true:
     * - the string contains invalid characters for the given radix
     * - the string contains whitespace
     * - the value the string represents is too large or too small to be a Long
     * Unlike Long.fromString, this method does not coerce '+/-Infinity' and 'NaN' to Long.Zero
     * @param str - The textual representation of the Long
     * @param radix - The radix in which the text is written (2-36), defaults to 10
     * @returns The corresponding Long value
     */
    static fromStringStrict(str: string, radix?: boolean): Long;
    /**
     * Returns a Long representation of the given string, written using the specified radix.
     * Will throw an error if the given parameters are not exactly representable as a Long.
     * Throws an error if any of the following conditions are true:
     * - the string contains invalid characters for the given radix
     * - the string contains whitespace
     * - the value the string represents is too large or too small to be a Long
     * Unlike Long.fromString, this method does not coerce '+/-Infinity' and 'NaN' to Long.Zero
     * @param str - The textual representation of the Long
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @param radix - The radix in which the text is written (2-36), defaults to 10
     * @returns The corresponding Long value
     */
    static fromStringStrict(str: string, unsigned?: boolean, radix?: number): Long;
    /**
     * Returns a signed Long representation of the given string, written using radix 10.
     *
     * If the input string is empty, this function will throw a BSONError.
     *
     * If input string does not have valid signed 64-bit Long representation, this method will return a coerced value:
     * - inputs that overflow 64-bit signed long will be coerced to Long.MAX_VALUE and Long.MIN_VALUE respectively
     * - 'NaN' or '+/-Infinity' are coerced to Long.ZERO
     * - other invalid characters sequences have variable behavior
     *
     * @param str - The textual representation of the Long
     * @returns The corresponding Long value
     */
    static fromString(str: string): Long;
    /**
     * Returns a signed Long representation of the given string, written using the provided radix.
     *
     * If the input string is empty or a provided radix is not within (2-36), this function will throw a BSONError.
     *
     * If input parameters do not have valid signed 64-bit Long representation, this method will return a coerced value:
     * - inputs that overflow 64-bit signed long will be coerced to Long.MAX_VALUE and Long.MIN_VALUE respectively
     * - if the radix is less than 24, 'NaN' is coerced to Long.ZERO
     * - if the radix is less than 35, '+/-Infinity' inputs are coerced to Long.ZERO
     * - other invalid characters sequences have variable behavior
     * @param str - The textual representation of the Long
     * @param radix - The radix in which the text is written (2-36), defaults to 10
     * @returns The corresponding Long value
     */
    static fromString(str: string, radix?: number): Long;
    /**
     * Returns a Long representation of the given string, written using radix 10.
     *
     * If the input string is empty, this function will throw a BSONError.
     *
     * If input parameters do not have a valid 64-bit Long representation, this method will return a coerced value:
     * - inputs that overflow 64-bit long will be coerced to max or min (if signed) values
     * - if the radix is less than 24, 'NaN' is coerced to Long.ZERO
     * - if the radix is less than 35, '+/-Infinity' inputs are coerced to Long.ZERO
     * - other invalid characters sequences have variable behavior
     * @param str - The textual representation of the Long
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromString(str: string, unsigned?: boolean): Long;
    /**
     * Returns a Long representation of the given string, written using the specified radix.
     *
     * If the input string is empty or a provided radix is not within (2-36), this function will throw a BSONError.
     *
     * If input parameters do not have a valid 64-bit Long representation, this method will return a coerced value:
     * - inputs that overflow 64-bit long will be coerced to max or min (if signed) values
     * - if the radix is less than 24, 'NaN' is coerced to Long.ZERO
     * - if the radix is less than 35, '+/-Infinity' inputs are coerced to Long.ZERO
     * - other invalid characters sequences have variable behavior
     * @param str - The textual representation of the Long
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @param radix - The radix in which the text is written (2-36), defaults to 10
     * @returns The corresponding Long value
     */
    static fromString(str: string, unsigned?: boolean, radix?: number): Long;
    /**
     * Creates a Long from its byte representation.
     * @param bytes - Byte representation
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @param le - Whether little or big endian, defaults to big endian
     * @returns The corresponding Long value
     */
    static fromBytes(bytes: number[], unsigned?: boolean, le?: boolean): Long;
    /**
     * Creates a Long from its little endian byte representation.
     * @param bytes - Little endian byte representation
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromBytesLE(bytes: number[], unsigned?: boolean): Long;
    /**
     * Creates a Long from its big endian byte representation.
     * @param bytes - Big endian byte representation
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromBytesBE(bytes: number[], unsigned?: boolean): Long;
    /**
     * Tests if the specified object is a Long.
     */
    static isLong(value: unknown): value is Long;
    /**
     * Converts the specified value to a Long.
     * @param unsigned - Whether unsigned or not, defaults to signed
     */
    static fromValue(val: number | string | {
        low: number;
        high: number;
        unsigned?: boolean;
    }, unsigned?: boolean): Long;
    /** Returns the sum of this and the specified Long. */
    add(addend: string | number | Long | Timestamp): Long;
    /**
     * Returns the sum of this and the specified Long.
     * @returns Sum
     */
    and(other: string | number | Long | Timestamp): Long;
    /**
     * Compares this Long's value with the specified's.
     * @returns 0 if they are the same, 1 if the this is greater and -1 if the given one is greater
     */
    compare(other: string | number | Long | Timestamp): 0 | 1 | -1;
    /** This is an alias of {@link Long.compare} */
    comp(other: string | number | Long | Timestamp): 0 | 1 | -1;
    /**
     * Returns this Long divided by the specified. The result is signed if this Long is signed or unsigned if this Long is unsigned.
     * @returns Quotient
     */
    divide(divisor: string | number | Long | Timestamp): Long;
    /**This is an alias of {@link Long.divide} */
    div(divisor: string | number | Long | Timestamp): Long;
    /**
     * Tests if this Long's value equals the specified's.
     * @param other - Other value
     */
    equals(other: string | number | Long | Timestamp): boolean;
    /** This is an alias of {@link Long.equals} */
    eq(other: string | number | Long | Timestamp): boolean;
    /** Gets the high 32 bits as a signed integer. */
    getHighBits(): number;
    /** Gets the high 32 bits as an unsigned integer. */
    getHighBitsUnsigned(): number;
    /** Gets the low 32 bits as a signed integer. */
    getLowBits(): number;
    /** Gets the low 32 bits as an unsigned integer. */
    getLowBitsUnsigned(): number;
    /** Gets the number of bits needed to represent the absolute value of this Long. */
    getNumBitsAbs(): number;
    /** Tests if this Long's value is greater than the specified's. */
    greaterThan(other: string | number | Long | Timestamp): boolean;
    /** This is an alias of {@link Long.greaterThan} */
    gt(other: string | number | Long | Timestamp): boolean;
    /** Tests if this Long's value is greater than or equal the specified's. */
    greaterThanOrEqual(other: string | number | Long | Timestamp): boolean;
    /** This is an alias of {@link Long.greaterThanOrEqual} */
    gte(other: string | number | Long | Timestamp): boolean;
    /** This is an alias of {@link Long.greaterThanOrEqual} */
    ge(other: string | number | Long | Timestamp): boolean;
    /** Tests if this Long's value is even. */
    isEven(): boolean;
    /** Tests if this Long's value is negative. */
    isNegative(): boolean;
    /** Tests if this Long's value is odd. */
    isOdd(): boolean;
    /** Tests if this Long's value is positive. */
    isPositive(): boolean;
    /** Tests if this Long's value equals zero. */
    isZero(): boolean;
    /** Tests if this Long's value is less than the specified's. */
    lessThan(other: string | number | Long | Timestamp): boolean;
    /** This is an alias of {@link Long#lessThan}. */
    lt(other: string | number | Long | Timestamp): boolean;
    /** Tests if this Long's value is less than or equal the specified's. */
    lessThanOrEqual(other: string | number | Long | Timestamp): boolean;
    /** This is an alias of {@link Long.lessThanOrEqual} */
    lte(other: string | number | Long | Timestamp): boolean;
    /** Returns this Long modulo the specified. */
    modulo(divisor: string | number | Long | Timestamp): Long;
    /** This is an alias of {@link Long.modulo} */
    mod(divisor: string | number | Long | Timestamp): Long;
    /** This is an alias of {@link Long.modulo} */
    rem(divisor: string | number | Long | Timestamp): Long;
    /**
     * Returns the product of this and the specified Long.
     * @param multiplier - Multiplier
     * @returns Product
     */
    multiply(multiplier: string | number | Long | Timestamp): Long;
    /** This is an alias of {@link Long.multiply} */
    mul(multiplier: string | number | Long | Timestamp): Long;
    /** Returns the Negation of this Long's value. */
    negate(): Long;
    /** This is an alias of {@link Long.negate} */
    neg(): Long;
    /** Returns the bitwise NOT of this Long. */
    not(): Long;
    /** Tests if this Long's value differs from the specified's. */
    notEquals(other: string | number | Long | Timestamp): boolean;
    /** This is an alias of {@link Long.notEquals} */
    neq(other: string | number | Long | Timestamp): boolean;
    /** This is an alias of {@link Long.notEquals} */
    ne(other: string | number | Long | Timestamp): boolean;
    /**
     * Returns the bitwise OR of this Long and the specified.
     */
    or(other: number | string | Long): Long;
    /**
     * Returns this Long with bits shifted to the left by the given amount.
     * @param numBits - Number of bits
     * @returns Shifted Long
     */
    shiftLeft(numBits: number | Long): Long;
    /** This is an alias of {@link Long.shiftLeft} */
    shl(numBits: number | Long): Long;
    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     * @param numBits - Number of bits
     * @returns Shifted Long
     */
    shiftRight(numBits: number | Long): Long;
    /** This is an alias of {@link Long.shiftRight} */
    shr(numBits: number | Long): Long;
    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     * @param numBits - Number of bits
     * @returns Shifted Long
     */
    shiftRightUnsigned(numBits: Long | number): Long;
    /** This is an alias of {@link Long.shiftRightUnsigned} */
    shr_u(numBits: number | Long): Long;
    /** This is an alias of {@link Long.shiftRightUnsigned} */
    shru(numBits: number | Long): Long;
    /**
     * Returns the difference of this and the specified Long.
     * @param subtrahend - Subtrahend
     * @returns Difference
     */
    subtract(subtrahend: string | number | Long | Timestamp): Long;
    /** This is an alias of {@link Long.subtract} */
    sub(subtrahend: string | number | Long | Timestamp): Long;
    /** Converts the Long to a 32 bit integer, assuming it is a 32 bit integer. */
    toInt(): number;
    /** Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa). */
    toNumber(): number;
    /** Converts the Long to a BigInt (arbitrary precision). */
    toBigInt(): bigint;
    /**
     * Converts this Long to its byte representation.
     * @param le - Whether little or big endian, defaults to big endian
     * @returns Byte representation
     */
    toBytes(le?: boolean): number[];
    /**
     * Converts this Long to its little endian byte representation.
     * @returns Little endian byte representation
     */
    toBytesLE(): number[];
    /**
     * Converts this Long to its big endian byte representation.
     * @returns Big endian byte representation
     */
    toBytesBE(): number[];
    /**
     * Converts this Long to signed.
     */
    toSigned(): Long;
    /**
     * Converts the Long to a string written in the specified radix.
     * @param radix - Radix (2-36), defaults to 10
     * @throws RangeError If `radix` is out of range
     */
    toString(radix?: number): string;
    /** Converts this Long to unsigned. */
    toUnsigned(): Long;
    /** Returns the bitwise XOR of this Long and the given one. */
    xor(other: Long | number | string): Long;
    /** This is an alias of {@link Long.isZero} */
    eqz(): boolean;
    /** This is an alias of {@link Long.lessThanOrEqual} */
    le(other: string | number | Long | Timestamp): boolean;
    toExtendedJSON(options?: EJSONOptions): number | LongExtended;
    static fromExtendedJSON(doc: {
        $numberLong: string;
    }, options?: EJSONOptions): number | Long | bigint;
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface LongExtended {
    $numberLong: string;
}

/** @public */
export declare type LongWithoutOverrides = new (low: unknown, high?: number | boolean, unsigned?: boolean) => {
    [P in Exclude<keyof Long, TimestampOverrides>]: Long[P];
};

/** @public */
export declare const LongWithoutOverridesClass: LongWithoutOverrides;

/**
 * A class representation of the BSON MaxKey type.
 * @public
 * @category BSONType
 */
export declare class MaxKey extends BSONValue {
    get _bsontype(): 'MaxKey';
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(): string;
}

/** @public */
export declare interface MaxKeyExtended {
    $maxKey: 1;
}

/**
 * A class representation of the BSON MinKey type.
 * @public
 * @category BSONType
 */
export declare class MinKey extends BSONValue {
    get _bsontype(): 'MinKey';
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(): string;
}

/** @public */
export declare interface MinKeyExtended {
    $minKey: 1;
}

/**
 * @experimental
 * @public
 *
 * A collection of functions that get or set various numeric types and bit widths from a Uint8Array.
 */
declare type NumberUtils = {
    /** Is true if the current system is big endian. */
    isBigEndian: boolean;
    /**
     * Parses a signed int32 at offset. Throws a `RangeError` if value is negative.
     */
    getNonnegativeInt32LE: (source: Uint8Array, offset: number) => number;
    getInt32LE: (source: Uint8Array, offset: number) => number;
    getUint32LE: (source: Uint8Array, offset: number) => number;
    getUint32BE: (source: Uint8Array, offset: number) => number;
    getBigInt64LE: (source: Uint8Array, offset: number) => bigint;
    getFloat64LE: (source: Uint8Array, offset: number) => number;
    setInt32BE: (destination: Uint8Array, offset: number, value: number) => 4;
    setInt32LE: (destination: Uint8Array, offset: number, value: number) => 4;
    setBigInt64LE: (destination: Uint8Array, offset: number, value: bigint) => 8;
    setFloat64LE: (destination: Uint8Array, offset: number, value: number) => 8;
};

/**
 * Number parsing and serializing utilities.
 *
 * @experimental
 * @public
 */
declare const NumberUtils: NumberUtils;

/**
 * A class representation of the BSON ObjectId type.
 * @public
 * @category BSONType
 */
export declare class ObjectId extends BSONValue {
    get _bsontype(): 'ObjectId';
    /* Excluded from this release type: index */
    static cacheHexString: boolean;
    /* Excluded from this release type: buffer */
    /**
     * Create ObjectId from a number.
     *
     * @param inputId - A number.
     * @deprecated Instead, use `static createFromTime()` to set a numeric value for the new ObjectId.
     */
    constructor(inputId: number);
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
    /** To generate a new ObjectId, use ObjectId() with no argument. */
    constructor();
    /**
     * Implementation overload.
     *
     * @param inputId - All input types that are used in the constructor implementation.
     */
    constructor(inputId?: string | number | ObjectId | ObjectIdLike | Uint8Array);
    /**
     * The ObjectId bytes
     * @readonly
     */
    get id(): Uint8Array;
    set id(value: Uint8Array);
    /* Excluded from this release type: validateHexString */
    /** Returns the ObjectId id as a 24 lowercase character hex string representation */
    toHexString(): string;
    /* Excluded from this release type: getInc */
    /**
     * Generate a 12 byte id buffer used in ObjectId's
     *
     * @param time - pass in a second based timestamp.
     */
    static generate(time?: number): Uint8Array;
    /**
     * Converts the id into a 24 character hex string for printing, unless encoding is provided.
     * @param encoding - hex or base64
     */
    toString(encoding?: 'hex' | 'base64'): string;
    /** Converts to its JSON the 24 character hex string representation. */
    toJSON(): string;
    /* Excluded from this release type: is */
    /**
     * Compares the equality of this ObjectId with `otherID`.
     *
     * @param otherId - ObjectId instance to compare against.
     */
    equals(otherId: string | ObjectId | ObjectIdLike | undefined | null): boolean;
    /** Returns the generation date (accurate up to the second) that this ID was generated. */
    getTimestamp(): Date;
    /* Excluded from this release type: createPk */
    /* Excluded from this release type: serializeInto */
    /**
     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
     *
     * @param time - an integer number representing a number of seconds.
     */
    static createFromTime(time: number): ObjectId;
    /**
     * Creates an ObjectId from a hex string representation of an ObjectId.
     *
     * @param hexString - create a ObjectId from a passed in 24 character hexstring.
     */
    static createFromHexString(hexString: string): ObjectId;
    /** Creates an ObjectId instance from a base64 string */
    static createFromBase64(base64: string): ObjectId;
    /**
     * Checks if a value can be used to create a valid bson ObjectId
     * @param id - any JS value
     */
    static isValid(id: string | number | ObjectId | ObjectIdLike | Uint8Array): boolean;
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    /* Excluded from this release type: isCached */
    /**
     * Converts to a string representation of this Id.
     *
     * @returns return the 24 character hex string representation.
     */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface ObjectIdExtended {
    $oid: string;
}

/** @public */
export declare interface ObjectIdLike {
    id: string | Uint8Array;
    __id?: string;
    toHexString(): string;
}

/**
 * @experimental
 * @public
 *
 * A new set of BSON APIs that are currently experimental and not intended for production use.
 */
export declare type OnDemand = {
    parseToElements: (this: void, bytes: Uint8Array, startOffset?: number) => Iterable<BSONElement>;
    BSONElement: BSONElement;
    ByteUtils: ByteUtils;
    NumberUtils: NumberUtils;
};

/**
 * @experimental
 * @public
 */
export declare const onDemand: OnDemand;

/**
 * Parse an Extended JSON string, constructing the JavaScript value or object described by that
 * string.
 *
 * @example
 * ```js
 * const { EJSON } = require('bson');
 * const text = '{ "int32": { "$numberInt": "10" } }';
 *
 * // prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
 * console.log(EJSON.parse(text, { relaxed: false }));
 *
 * // prints { int32: 10 }
 * console.log(EJSON.parse(text));
 * ```
 */
declare function parse(text: string, options?: EJSONOptions): any;

/**
 * Serialize a Javascript object.
 *
 * @param object - the Javascript object to serialize.
 * @returns Buffer object containing the serialized object.
 * @public
 */
export declare function serialize(object: Document, options?: SerializeOptions): Uint8Array;

/** @public */
export declare interface SerializeOptions {
    /**
     * the serializer will check if keys are valid.
     * @defaultValue `false`
     */
    checkKeys?: boolean;
    /**
     * serialize the javascript functions
     * @defaultValue `false`
     */
    serializeFunctions?: boolean;
    /**
     * serialize will not emit undefined fields
     * note that the driver sets this to `false`
     * @defaultValue `true`
     */
    ignoreUndefined?: boolean;
    /* Excluded from this release type: minInternalBufferSize */
    /**
     * the index in the buffer where we wish to start serializing into
     * @defaultValue `0`
     */
    index?: number;
}

/**
 * Serialize a Javascript object using a predefined Buffer and index into the buffer,
 * useful when pre-allocating the space for serialization.
 *
 * @param object - the Javascript object to serialize.
 * @param finalBuffer - the Buffer you pre-allocated to store the serialized BSON object.
 * @returns the index pointing to the last written byte in the buffer.
 * @public
 */
export declare function serializeWithBufferAndIndex(object: Document, finalBuffer: Uint8Array, options?: SerializeOptions): number;

/**
 * Sets the size of the internal serialization buffer.
 *
 * @param size - The desired size for the internal serialization buffer in bytes
 * @public
 */
export declare function setInternalBufferSize(size: number): void;

/**
 * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
 * function is specified or optionally including only the specified properties if a replacer array
 * is specified.
 *
 * @param value - The value to convert to extended JSON
 * @param replacer - A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
 * @param space - A String or Number object that's used to insert white space into the output JSON string for readability purposes.
 * @param options - Optional settings
 *
 * @example
 * ```js
 * const { EJSON } = require('bson');
 * const Int32 = require('mongodb').Int32;
 * const doc = { int32: new Int32(10) };
 *
 * // prints '{"int32":{"$numberInt":"10"}}'
 * console.log(EJSON.stringify(doc, { relaxed: false }));
 *
 * // prints '{"int32":10}'
 * console.log(EJSON.stringify(doc));
 * ```
 */
declare function stringify(value: any, replacer?: (number | string)[] | ((this: any, key: string, value: any) => any) | EJSONOptions, space?: string | number, options?: EJSONOptions): string;

/**
 * @public
 * @category BSONType
 *
 * A special type for _internal_ MongoDB use and is **not** associated with the regular Date type.
 */
export declare class Timestamp extends LongWithoutOverridesClass {
    get _bsontype(): 'Timestamp';
    static readonly MAX_VALUE: Long;
    /**
     * An incrementing ordinal for operations within a given second.
     */
    get i(): number;
    /**
     * A `time_t` value measuring seconds since the Unix epoch
     */
    get t(): number;
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
    constructor(value: {
        t: number;
        i: number;
    });
    toJSON(): {
        $timestamp: string;
    };
    /** Returns a Timestamp represented by the given (32-bit) integer value. */
    static fromInt(value: number): Timestamp;
    /** Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned. */
    static fromNumber(value: number): Timestamp;
    /**
     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
     *
     * @param lowBits - the low 32-bits.
     * @param highBits - the high 32-bits.
     */
    static fromBits(lowBits: number, highBits: number): Timestamp;
    /**
     * Returns a Timestamp from the given string, optionally using the given radix.
     *
     * @param str - the textual representation of the Timestamp.
     * @param optRadix - the radix in which the text is written.
     */
    static fromString(str: string, optRadix: number): Timestamp;
    /* Excluded from this release type: toExtendedJSON */
    /* Excluded from this release type: fromExtendedJSON */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare interface TimestampExtended {
    $timestamp: {
        t: number;
        i: number;
    };
}

/** @public */
export declare type TimestampOverrides = '_bsontype' | 'toExtendedJSON' | 'fromExtendedJSON' | 'inspect';

/**
 * A class representation of the BSON UUID type.
 * @public
 */
export declare class UUID extends Binary {
    /**
     * Create a UUID type
     *
     * When the argument to the constructor is omitted a random v4 UUID will be generated.
     *
     * @param input - Can be a 32 or 36 character hex string (dashes excluded/included) or a 16 byte binary Buffer.
     */
    constructor(input?: string | Uint8Array | UUID);
    /**
     * The UUID bytes
     * @readonly
     */
    get id(): Uint8Array;
    set id(value: Uint8Array);
    /**
     * Returns the UUID id as a 32 or 36 character hex string representation, excluding/including dashes (defaults to 36 character dash separated)
     * @param includeDashes - should the string exclude dash-separators.
     */
    toHexString(includeDashes?: boolean): string;
    /**
     * Converts the id into a 36 character (dashes included) hex string, unless a encoding is specified.
     */
    toString(encoding?: 'hex' | 'base64'): string;
    /**
     * Converts the id into its JSON string representation.
     * A 36 character (dashes included) hex string in the format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    toJSON(): string;
    /**
     * Compares the equality of this UUID with `otherID`.
     *
     * @param otherId - UUID instance to compare against.
     */
    equals(otherId: string | Uint8Array | UUID): boolean;
    /**
     * Creates a Binary instance from the current UUID.
     */
    toBinary(): Binary;
    /**
     * Generates a populated buffer containing a v4 uuid
     */
    static generate(): Uint8Array;
    /**
     * Checks if a value is a valid bson UUID
     * @param input - UUID, string or Buffer to validate.
     */
    static isValid(input: string | Uint8Array | UUID | Binary): boolean;
    /**
     * Creates an UUID from a hex string representation of an UUID.
     * @param hexString - 32 or 36 character hex string (dashes excluded/included).
     */
    static createFromHexString(hexString: string): UUID;
    /** Creates an UUID from a base64 string representation of an UUID. */
    static createFromBase64(base64: string): UUID;
    /* Excluded from this release type: bytesFromString */
    /* Excluded from this release type: isValidUUIDString */
    /**
     * Converts to a string representation of this Id.
     *
     * @returns return the 36 character hex string representation.
     *
     */
    inspect(depth?: number, options?: unknown, inspect?: InspectFn): string;
}

/** @public */
export declare type UUIDExtended = {
    $uuid: string;
};

export { }
