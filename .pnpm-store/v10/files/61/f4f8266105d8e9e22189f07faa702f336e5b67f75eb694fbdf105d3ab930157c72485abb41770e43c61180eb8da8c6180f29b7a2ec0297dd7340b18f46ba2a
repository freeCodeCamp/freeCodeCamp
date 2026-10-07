import { Binary } from '../binary';
import type { Document } from '../bson';
import { BSONError, BSONVersionError } from '../error';
import * as constants from '../constants';
import { ByteUtils } from '../utils/byte_utils';
import { isAnyArrayBuffer, isDate, isRegExp } from './utils';

export function internalCalculateObjectSize(
  object: Document,
  serializeFunctions?: boolean,
  ignoreUndefined?: boolean
): number {
  let totalLength = 4 + 1;

  if (Array.isArray(object)) {
    for (let i = 0; i < object.length; i++) {
      totalLength += calculateElement(
        i.toString(),
        object[i],
        serializeFunctions,
        true,
        ignoreUndefined
      );
    }
  } else {
    // If we have toBSON defined, override the current object

    if (typeof object?.toBSON === 'function') {
      object = object.toBSON();
    }

    // Calculate size
    for (const key of Object.keys(object)) {
      totalLength += calculateElement(key, object[key], serializeFunctions, false, ignoreUndefined);
    }
  }

  return totalLength;
}

/** @internal */
function calculateElement(
  name: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  serializeFunctions = false,
  isArray = false,
  ignoreUndefined = false
) {
  // If we have toBSON defined, override the current object
  if (typeof value?.toBSON === 'function') {
    value = value.toBSON();
  }

  switch (typeof value) {
    case 'string':
      return 1 + ByteUtils.utf8ByteLength(name) + 1 + 4 + ByteUtils.utf8ByteLength(value) + 1;
    case 'number':
      if (
        Math.floor(value) === value &&
        value >= constants.JS_INT_MIN &&
        value <= constants.JS_INT_MAX
      ) {
        if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
          // 32 bit
          return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (4 + 1);
        } else {
          return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
        }
      } else {
        // 64 bit
        return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
      }
    case 'undefined':
      if (isArray || !ignoreUndefined)
        return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + 1;
      return 0;
    case 'boolean':
      return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (1 + 1);
    case 'object':
      if (
        value != null &&
        typeof value._bsontype === 'string' &&
        value[constants.BSON_VERSION_SYMBOL] !== constants.BSON_MAJOR_VERSION
      ) {
        throw new BSONVersionError();
      } else if (value == null || value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
        return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + 1;
      } else if (value._bsontype === 'ObjectId') {
        return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (12 + 1);
      } else if (value instanceof Date || isDate(value)) {
        return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
      } else if (
        ArrayBuffer.isView(value) ||
        value instanceof ArrayBuffer ||
        isAnyArrayBuffer(value)
      ) {
        return (
          (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (1 + 4 + 1) + value.byteLength
        );
      } else if (
        value._bsontype === 'Long' ||
        value._bsontype === 'Double' ||
        value._bsontype === 'Timestamp'
      ) {
        return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
      } else if (value._bsontype === 'Decimal128') {
        return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (16 + 1);
      } else if (value._bsontype === 'Code') {
        // Calculate size depending on the availability of a scope
        if (value.scope != null && Object.keys(value.scope).length > 0) {
          return (
            (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
            1 +
            4 +
            4 +
            ByteUtils.utf8ByteLength(value.code.toString()) +
            1 +
            internalCalculateObjectSize(value.scope, serializeFunctions, ignoreUndefined)
          );
        } else {
          return (
            (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
            1 +
            4 +
            ByteUtils.utf8ByteLength(value.code.toString()) +
            1
          );
        }
      } else if (value._bsontype === 'Binary') {
        const binary: Binary = value;
        // Check what kind of subtype we have
        if (binary.sub_type === Binary.SUBTYPE_BYTE_ARRAY) {
          return (
            (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
            (binary.position + 1 + 4 + 1 + 4)
          );
        } else {
          return (
            (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (binary.position + 1 + 4 + 1)
          );
        }
      } else if (value._bsontype === 'Symbol') {
        return (
          (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
          ByteUtils.utf8ByteLength(value.value) +
          4 +
          1 +
          1
        );
      } else if (value._bsontype === 'DBRef') {
        // Set up correct object for serialization
        const ordered_values = Object.assign(
          {
            $ref: value.collection,
            $id: value.oid
          },
          value.fields
        );

        // Add db reference if it exists
        if (value.db != null) {
          ordered_values['$db'] = value.db;
        }

        return (
          (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
          1 +
          internalCalculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined)
        );
      } else if (value instanceof RegExp || isRegExp(value)) {
        return (
          (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
          1 +
          ByteUtils.utf8ByteLength(value.source) +
          1 +
          (value.global ? 1 : 0) +
          (value.ignoreCase ? 1 : 0) +
          (value.multiline ? 1 : 0) +
          1
        );
      } else if (value._bsontype === 'BSONRegExp') {
        return (
          (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
          1 +
          ByteUtils.utf8ByteLength(value.pattern) +
          1 +
          ByteUtils.utf8ByteLength(value.options) +
          1
        );
      } else {
        return (
          (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
          internalCalculateObjectSize(value, serializeFunctions, ignoreUndefined) +
          1
        );
      }
    case 'function':
      if (serializeFunctions) {
        return (
          (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
          1 +
          4 +
          ByteUtils.utf8ByteLength(value.toString()) +
          1
        );
      }
      return 0;
    case 'bigint':
      return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
    case 'symbol':
      return 0;
    default:
      throw new BSONError(`Unrecognized JS type: ${typeof value}`);
  }

  return 0;
}
