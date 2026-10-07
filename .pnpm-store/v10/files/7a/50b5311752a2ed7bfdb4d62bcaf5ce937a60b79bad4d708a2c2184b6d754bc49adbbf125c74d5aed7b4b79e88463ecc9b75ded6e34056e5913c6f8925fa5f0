/** @internal */
export const BSON_MAJOR_VERSION = 6;

/** @internal */
export const BSON_VERSION_SYMBOL = Symbol.for('@@mdb.bson.version');

/** @internal */
export const BSON_INT32_MAX = 0x7fffffff;
/** @internal */
export const BSON_INT32_MIN = -0x80000000;
/** @internal */
export const BSON_INT64_MAX = Math.pow(2, 63) - 1;
/** @internal */
export const BSON_INT64_MIN = -Math.pow(2, 63);

/**
 * Any integer up to 2^53 can be precisely represented by a double.
 * @internal
 */
export const JS_INT_MAX = Math.pow(2, 53);

/**
 * Any integer down to -2^53 can be precisely represented by a double.
 * @internal
 */
export const JS_INT_MIN = -Math.pow(2, 53);

/** Number BSON Type @internal */
export const BSON_DATA_NUMBER = 1;

/** String BSON Type @internal */
export const BSON_DATA_STRING = 2;

/** Object BSON Type @internal */
export const BSON_DATA_OBJECT = 3;

/** Array BSON Type @internal */
export const BSON_DATA_ARRAY = 4;

/** Binary BSON Type @internal */
export const BSON_DATA_BINARY = 5;

/** Binary BSON Type @internal */
export const BSON_DATA_UNDEFINED = 6;

/** ObjectId BSON Type @internal */
export const BSON_DATA_OID = 7;

/** Boolean BSON Type @internal */
export const BSON_DATA_BOOLEAN = 8;

/** Date BSON Type @internal */
export const BSON_DATA_DATE = 9;

/** null BSON Type @internal */
export const BSON_DATA_NULL = 10;

/** RegExp BSON Type @internal */
export const BSON_DATA_REGEXP = 11;

/** Code BSON Type @internal */
export const BSON_DATA_DBPOINTER = 12;

/** Code BSON Type @internal */
export const BSON_DATA_CODE = 13;

/** Symbol BSON Type @internal */
export const BSON_DATA_SYMBOL = 14;

/** Code with Scope BSON Type @internal */
export const BSON_DATA_CODE_W_SCOPE = 15;

/** 32 bit Integer BSON Type @internal */
export const BSON_DATA_INT = 16;

/** Timestamp BSON Type @internal */
export const BSON_DATA_TIMESTAMP = 17;

/** Long BSON Type @internal */
export const BSON_DATA_LONG = 18;

/** Decimal128 BSON Type @internal */
export const BSON_DATA_DECIMAL128 = 19;

/** MinKey BSON Type @internal */
export const BSON_DATA_MIN_KEY = 0xff;

/** MaxKey BSON Type @internal */
export const BSON_DATA_MAX_KEY = 0x7f;

/** Binary Default Type @internal */
export const BSON_BINARY_SUBTYPE_DEFAULT = 0;

/** Binary Function Type @internal */
export const BSON_BINARY_SUBTYPE_FUNCTION = 1;

/** Binary Byte Array Type @internal */
export const BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2;

/** Binary Deprecated UUID Type @deprecated Please use BSON_BINARY_SUBTYPE_UUID_NEW @internal */
export const BSON_BINARY_SUBTYPE_UUID = 3;

/** Binary UUID Type @internal */
export const BSON_BINARY_SUBTYPE_UUID_NEW = 4;

/** Binary MD5 Type @internal */
export const BSON_BINARY_SUBTYPE_MD5 = 5;

/** Encrypted BSON type @internal */
export const BSON_BINARY_SUBTYPE_ENCRYPTED = 6;

/** Column BSON type @internal */
export const BSON_BINARY_SUBTYPE_COLUMN = 7;

/** Sensitive BSON type @internal */
export const BSON_BINARY_SUBTYPE_SENSITIVE = 8;

/** Binary User Defined Type @internal */
export const BSON_BINARY_SUBTYPE_USER_DEFINED = 128;

/** @public */
export const BSONType = Object.freeze({
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
  minKey: -1,
  maxKey: 127
} as const);

/** @public */
export type BSONType = (typeof BSONType)[keyof typeof BSONType];
