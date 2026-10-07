import { Binary } from './binary';
import type { Document } from './bson';
import { Code } from './code';
import {
  BSON_INT32_MAX,
  BSON_INT32_MIN,
  BSON_INT64_MAX,
  BSON_INT64_MIN,
  BSON_MAJOR_VERSION,
  BSON_VERSION_SYMBOL
} from './constants';
import { DBRef, isDBRefLike } from './db_ref';
import { Decimal128 } from './decimal128';
import { Double } from './double';
import { BSONError, BSONRuntimeError, BSONVersionError } from './error';
import { Int32 } from './int_32';
import { Long } from './long';
import { MaxKey } from './max_key';
import { MinKey } from './min_key';
import { ObjectId } from './objectid';
import { isDate, isRegExp, isMap } from './parser/utils';
import { BSONRegExp } from './regexp';
import { BSONSymbol } from './symbol';
import { Timestamp } from './timestamp';

/** @public */
export type EJSONOptionsBase = {
  /**
   * Output using the Extended JSON v1 spec
   * @defaultValue `false`
   */
  legacy?: boolean;
  /**
   * Enable Extended JSON's `relaxed` mode, which attempts to return native JS types where possible, rather than BSON types
   * @defaultValue `false`
   */
  relaxed?: boolean;
};

/** @public */
export type EJSONSerializeOptions = EJSONOptionsBase & {
  /**
   * Omits undefined values from the output instead of converting them to null
   * @defaultValue `false`
   */
  ignoreUndefined?: boolean;
};

/** @public */
export type EJSONParseOptions = EJSONOptionsBase & {
  /**
   * Enable native bigint support
   * @defaultValue `false`
   */
  useBigInt64?: boolean;
};

/** @public */
export type EJSONOptions = EJSONSerializeOptions & EJSONParseOptions;

/** @internal */
type BSONType =
  | Binary
  | Code
  | DBRef
  | Decimal128
  | Double
  | Int32
  | Long
  | MaxKey
  | MinKey
  | ObjectId
  | BSONRegExp
  | BSONSymbol
  | Timestamp;

function isBSONType(value: unknown): value is BSONType {
  return (
    value != null &&
    typeof value === 'object' &&
    '_bsontype' in value &&
    typeof value._bsontype === 'string'
  );
}

// all the types where we don't need to do any special processing and can just pass the EJSON
//straight to type.fromExtendedJSON
const keysToCodecs = {
  $oid: ObjectId,
  $binary: Binary,
  $uuid: Binary,
  $symbol: BSONSymbol,
  $numberInt: Int32,
  $numberDecimal: Decimal128,
  $numberDouble: Double,
  $numberLong: Long,
  $minKey: MinKey,
  $maxKey: MaxKey,
  $regex: BSONRegExp,
  $regularExpression: BSONRegExp,
  $timestamp: Timestamp
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deserializeValue(value: any, options: EJSONOptions = {}) {
  if (typeof value === 'number') {
    // TODO(NODE-4377): EJSON js number handling diverges from BSON
    const in32BitRange = value <= BSON_INT32_MAX && value >= BSON_INT32_MIN;
    const in64BitRange = value <= BSON_INT64_MAX && value >= BSON_INT64_MIN;

    if (options.relaxed || options.legacy) {
      return value;
    }

    if (Number.isInteger(value) && !Object.is(value, -0)) {
      // interpret as being of the smallest BSON integer type that can represent the number exactly
      if (in32BitRange) {
        return new Int32(value);
      }
      if (in64BitRange) {
        if (options.useBigInt64) {
          return BigInt(value);
        }
        return Long.fromNumber(value);
      }
    }

    // If the number is a non-integer or out of integer range, should interpret as BSON Double.
    return new Double(value);
  }

  // from here on out we're looking for bson types, so bail if its not an object
  if (value == null || typeof value !== 'object') return value;

  // upgrade deprecated undefined to null
  if (value.$undefined) return null;

  const keys = Object.keys(value).filter(
    k => k.startsWith('$') && value[k] != null
  ) as (keyof typeof keysToCodecs)[];
  for (let i = 0; i < keys.length; i++) {
    const c = keysToCodecs[keys[i]];
    if (c) return c.fromExtendedJSON(value, options);
  }

  if (value.$date != null) {
    const d = value.$date;
    const date = new Date();

    if (options.legacy) {
      if (typeof d === 'number') date.setTime(d);
      else if (typeof d === 'string') date.setTime(Date.parse(d));
      else if (typeof d === 'bigint') date.setTime(Number(d));
      else throw new BSONRuntimeError(`Unrecognized type for EJSON date: ${typeof d}`);
    } else {
      if (typeof d === 'string') date.setTime(Date.parse(d));
      else if (Long.isLong(d)) date.setTime(d.toNumber());
      else if (typeof d === 'number' && options.relaxed) date.setTime(d);
      else if (typeof d === 'bigint') date.setTime(Number(d));
      else throw new BSONRuntimeError(`Unrecognized type for EJSON date: ${typeof d}`);
    }
    return date;
  }

  if (value.$code != null) {
    const copy = Object.assign({}, value);
    if (value.$scope) {
      copy.$scope = deserializeValue(value.$scope);
    }

    return Code.fromExtendedJSON(value);
  }

  if (isDBRefLike(value) || value.$dbPointer) {
    const v = value.$ref ? value : value.$dbPointer;

    // we run into this in a "degenerate EJSON" case (with $id and $ref order flipped)
    // because of the order JSON.parse goes through the document
    if (v instanceof DBRef) return v;

    const dollarKeys = Object.keys(v).filter(k => k.startsWith('$'));
    let valid = true;
    dollarKeys.forEach(k => {
      if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
    });

    // only make DBRef if $ keys are all valid
    if (valid) return DBRef.fromExtendedJSON(v);
  }

  return value;
}

type EJSONSerializeInternalOptions = EJSONSerializeOptions & {
  seenObjects: { obj: unknown; propertyName: string }[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeArray(array: any[], options: EJSONSerializeInternalOptions): any[] {
  return array.map((v: unknown, index: number) => {
    options.seenObjects.push({ propertyName: `index ${index}`, obj: null });
    try {
      return serializeValue(v, options);
    } finally {
      options.seenObjects.pop();
    }
  });
}

function getISOString(date: Date) {
  const isoStr = date.toISOString();
  // we should only show milliseconds in timestamp if they're non-zero
  return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + 'Z';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeValue(value: any, options: EJSONSerializeInternalOptions): any {
  if (value instanceof Map || isMap(value)) {
    const obj: Record<string, unknown> = Object.create(null);
    for (const [k, v] of value) {
      if (typeof k !== 'string') {
        throw new BSONError('Can only serialize maps with string keys');
      }
      obj[k] = v;
    }

    return serializeValue(obj, options);
  }

  if ((typeof value === 'object' || typeof value === 'function') && value !== null) {
    const index = options.seenObjects.findIndex(entry => entry.obj === value);
    if (index !== -1) {
      const props = options.seenObjects.map(entry => entry.propertyName);
      const leadingPart = props
        .slice(0, index)
        .map(prop => `${prop} -> `)
        .join('');
      const alreadySeen = props[index];
      const circularPart =
        ' -> ' +
        props
          .slice(index + 1, props.length - 1)
          .map(prop => `${prop} -> `)
          .join('');
      const current = props[props.length - 1];
      const leadingSpace = ' '.repeat(leadingPart.length + alreadySeen.length / 2);
      const dashes = '-'.repeat(
        circularPart.length + (alreadySeen.length + current.length) / 2 - 1
      );

      throw new BSONError(
        'Converting circular structure to EJSON:\n' +
          `    ${leadingPart}${alreadySeen}${circularPart}${current}\n` +
          `    ${leadingSpace}\\${dashes}/`
      );
    }
    options.seenObjects[options.seenObjects.length - 1].obj = value;
  }

  if (Array.isArray(value)) return serializeArray(value, options);

  if (value === undefined) return options.ignoreUndefined ? undefined : null;

  if (value instanceof Date || isDate(value)) {
    const dateNum = value.getTime(),
      // is it in year range 1970-9999?
      inRange = dateNum > -1 && dateNum < 253402318800000;

    if (options.legacy) {
      return options.relaxed && inRange
        ? { $date: value.getTime() }
        : { $date: getISOString(value) };
    }
    return options.relaxed && inRange
      ? { $date: getISOString(value) }
      : { $date: { $numberLong: value.getTime().toString() } };
  }

  if (typeof value === 'number' && (!options.relaxed || !isFinite(value))) {
    if (Number.isInteger(value) && !Object.is(value, -0)) {
      // interpret as being of the smallest BSON integer type that can represent the number exactly
      if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) {
        return { $numberInt: value.toString() };
      }
      if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX) {
        // TODO(NODE-4377): EJSON js number handling diverges from BSON
        return { $numberLong: value.toString() };
      }
    }
    return { $numberDouble: Object.is(value, -0) ? '-0.0' : value.toString() };
  }

  if (typeof value === 'bigint') {
    if (!options.relaxed) {
      return { $numberLong: BigInt.asIntN(64, value).toString() };
    }
    return Number(BigInt.asIntN(64, value));
  }

  if (value instanceof RegExp || isRegExp(value)) {
    let flags = value.flags;
    if (flags === undefined) {
      const match = value.toString().match(/[gimuy]*$/);
      if (match) {
        flags = match[0];
      }
    }

    const rx = new BSONRegExp(value.source, flags);
    return rx.toExtendedJSON(options);
  }

  if (value != null && typeof value === 'object') return serializeDocument(value, options);
  return value;
}

const BSON_TYPE_MAPPINGS = {
  Binary: (o: Binary) => new Binary(o.value(), o.sub_type),
  Code: (o: Code) => new Code(o.code, o.scope),
  DBRef: (o: DBRef) => new DBRef(o.collection || o.namespace, o.oid, o.db, o.fields), // "namespace" for 1.x library backwards compat
  Decimal128: (o: Decimal128) => new Decimal128(o.bytes),
  Double: (o: Double) => new Double(o.value),
  Int32: (o: Int32) => new Int32(o.value),
  Long: (
    o: Long & {
      low_: number;
      high_: number;
      unsigned_: boolean | undefined;
    }
  ) =>
    Long.fromBits(
      // underscore variants for 1.x backwards compatibility
      o.low != null ? o.low : o.low_,
      o.low != null ? o.high : o.high_,
      o.low != null ? o.unsigned : o.unsigned_
    ),
  MaxKey: () => new MaxKey(),
  MinKey: () => new MinKey(),
  ObjectId: (o: ObjectId) => new ObjectId(o),
  BSONRegExp: (o: BSONRegExp) => new BSONRegExp(o.pattern, o.options),
  BSONSymbol: (o: BSONSymbol) => new BSONSymbol(o.value),
  Timestamp: (o: Timestamp) => Timestamp.fromBits(o.low, o.high)
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeDocument(doc: any, options: EJSONSerializeInternalOptions) {
  if (doc == null || typeof doc !== 'object') throw new BSONError('not an object instance');

  const bsontype: BSONType['_bsontype'] = doc._bsontype;
  if (typeof bsontype === 'undefined') {
    // It's a regular object. Recursively serialize its property values.
    const _doc: Document = {};
    for (const name of Object.keys(doc)) {
      options.seenObjects.push({ propertyName: name, obj: null });
      try {
        const value = serializeValue(doc[name], options);
        if (name === '__proto__') {
          Object.defineProperty(_doc, name, {
            value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        } else {
          _doc[name] = value;
        }
      } finally {
        options.seenObjects.pop();
      }
    }
    return _doc;
  } else if (
    doc != null &&
    typeof doc === 'object' &&
    typeof doc._bsontype === 'string' &&
    doc[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION
  ) {
    throw new BSONVersionError();
  } else if (isBSONType(doc)) {
    // the "document" is really just a BSON type object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let outDoc: any = doc;
    if (typeof outDoc.toExtendedJSON !== 'function') {
      // There's no EJSON serialization function on the object. It's probably an
      // object created by a previous version of this library (or another library)
      // that's duck-typing objects to look like they were generated by this library).
      // Copy the object into this library's version of that type.
      const mapper = BSON_TYPE_MAPPINGS[doc._bsontype];
      if (!mapper) {
        throw new BSONError('Unrecognized or invalid _bsontype: ' + doc._bsontype);
      }
      outDoc = mapper(outDoc);
    }

    // Two BSON types may have nested objects that may need to be serialized too
    if (bsontype === 'Code' && outDoc.scope) {
      outDoc = new Code(outDoc.code, serializeValue(outDoc.scope, options));
    } else if (bsontype === 'DBRef' && outDoc.oid) {
      outDoc = new DBRef(
        serializeValue(outDoc.collection, options),
        serializeValue(outDoc.oid, options),
        serializeValue(outDoc.db, options),
        serializeValue(outDoc.fields, options)
      );
    }

    return outDoc.toExtendedJSON(options);
  } else {
    throw new BSONError('_bsontype must be a string, but was: ' + typeof bsontype);
  }
}

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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parse(text: string, options?: EJSONParseOptions): any {
  const ejsonOptions = {
    useBigInt64: options?.useBigInt64 ?? false,
    relaxed: options?.relaxed ?? true,
    legacy: options?.legacy ?? false
  };
  return JSON.parse(text, (key, value) => {
    if (key.indexOf('\x00') !== -1) {
      throw new BSONError(
        `BSON Document field names cannot contain null bytes, found: ${JSON.stringify(key)}`
      );
    }
    return deserializeValue(value, ejsonOptions);
  });
}

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
function stringify(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  replacer?:
    | (number | string)[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ((this: any, key: string, value: any) => any)
    | EJSONSerializeOptions,
  space?: string | number,
  options?: EJSONSerializeOptions
): string {
  if (space != null && typeof space === 'object') {
    options = space;
    space = 0;
  }
  if (replacer != null && typeof replacer === 'object' && !Array.isArray(replacer)) {
    options = replacer;
    replacer = undefined;
    space = 0;
  }
  const serializeOptions = Object.assign({ relaxed: true, legacy: false }, options, {
    seenObjects: [{ propertyName: '(root)', obj: null }]
  });

  const doc = serializeValue(value, serializeOptions);
  return JSON.stringify(doc, replacer as Parameters<JSON['stringify']>[1], space);
}

/**
 * Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.
 *
 * @param value - The object to serialize
 * @param options - Optional settings passed to the `stringify` function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function EJSONserialize(value: any, options?: EJSONSerializeOptions): Document {
  options = options || {};
  return JSON.parse(stringify(value, options));
}

/**
 * Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types
 *
 * @param ejson - The Extended JSON object to deserialize
 * @param options - Optional settings passed to the parse method
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function EJSONdeserialize(ejson: Document, options?: EJSONParseOptions): any {
  options = options || {};
  return parse(JSON.stringify(ejson), options);
}

/** @public */
const EJSON: {
  parse: typeof parse;
  stringify: typeof stringify;
  serialize: typeof EJSONserialize;
  deserialize: typeof EJSONdeserialize;
} = Object.create(null);
EJSON.parse = parse;
EJSON.stringify = stringify;
EJSON.serialize = EJSONserialize;
EJSON.deserialize = EJSONdeserialize;
Object.freeze(EJSON);
export { EJSON };
