"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUTF8 = exports.getBigInt64LE = exports.getFloat64LE = exports.getInt32LE = exports.UUID = exports.Timestamp = exports.serialize = exports.ObjectId = exports.MinKey = exports.MaxKey = exports.Long = exports.Int32 = exports.EJSON = exports.Double = exports.deserialize = exports.Decimal128 = exports.DBRef = exports.Code = exports.calculateObjectSize = exports.BSONType = exports.BSONSymbol = exports.BSONRegExp = exports.BSONError = exports.BSON = exports.Binary = void 0;
exports.parseToElementsToArray = parseToElementsToArray;
exports.pluckBSONSerializeOptions = pluckBSONSerializeOptions;
exports.resolveBSONOptions = resolveBSONOptions;
exports.parseUtf8ValidationOption = parseUtf8ValidationOption;
/* eslint-disable no-restricted-imports */
const bson_1 = require("bson");
var bson_2 = require("bson");
Object.defineProperty(exports, "Binary", { enumerable: true, get: function () { return bson_2.Binary; } });
Object.defineProperty(exports, "BSON", { enumerable: true, get: function () { return bson_2.BSON; } });
Object.defineProperty(exports, "BSONError", { enumerable: true, get: function () { return bson_2.BSONError; } });
Object.defineProperty(exports, "BSONRegExp", { enumerable: true, get: function () { return bson_2.BSONRegExp; } });
Object.defineProperty(exports, "BSONSymbol", { enumerable: true, get: function () { return bson_2.BSONSymbol; } });
Object.defineProperty(exports, "BSONType", { enumerable: true, get: function () { return bson_2.BSONType; } });
Object.defineProperty(exports, "calculateObjectSize", { enumerable: true, get: function () { return bson_2.calculateObjectSize; } });
Object.defineProperty(exports, "Code", { enumerable: true, get: function () { return bson_2.Code; } });
Object.defineProperty(exports, "DBRef", { enumerable: true, get: function () { return bson_2.DBRef; } });
Object.defineProperty(exports, "Decimal128", { enumerable: true, get: function () { return bson_2.Decimal128; } });
Object.defineProperty(exports, "deserialize", { enumerable: true, get: function () { return bson_2.deserialize; } });
Object.defineProperty(exports, "Double", { enumerable: true, get: function () { return bson_2.Double; } });
Object.defineProperty(exports, "EJSON", { enumerable: true, get: function () { return bson_2.EJSON; } });
Object.defineProperty(exports, "Int32", { enumerable: true, get: function () { return bson_2.Int32; } });
Object.defineProperty(exports, "Long", { enumerable: true, get: function () { return bson_2.Long; } });
Object.defineProperty(exports, "MaxKey", { enumerable: true, get: function () { return bson_2.MaxKey; } });
Object.defineProperty(exports, "MinKey", { enumerable: true, get: function () { return bson_2.MinKey; } });
Object.defineProperty(exports, "ObjectId", { enumerable: true, get: function () { return bson_2.ObjectId; } });
Object.defineProperty(exports, "serialize", { enumerable: true, get: function () { return bson_2.serialize; } });
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return bson_2.Timestamp; } });
Object.defineProperty(exports, "UUID", { enumerable: true, get: function () { return bson_2.UUID; } });
function parseToElementsToArray(bytes, offset) {
    const res = bson_1.BSON.onDemand.parseToElements(bytes, offset);
    return Array.isArray(res) ? res : [...res];
}
exports.getInt32LE = bson_1.BSON.onDemand.NumberUtils.getInt32LE;
exports.getFloat64LE = bson_1.BSON.onDemand.NumberUtils.getFloat64LE;
exports.getBigInt64LE = bson_1.BSON.onDemand.NumberUtils.getBigInt64LE;
exports.toUTF8 = bson_1.BSON.onDemand.ByteUtils.toUTF8;
function pluckBSONSerializeOptions(options) {
    const { fieldsAsRaw, useBigInt64, promoteValues, promoteBuffers, promoteLongs, serializeFunctions, ignoreUndefined, bsonRegExp, raw, enableUtf8Validation } = options;
    return {
        fieldsAsRaw,
        useBigInt64,
        promoteValues,
        promoteBuffers,
        promoteLongs,
        serializeFunctions,
        ignoreUndefined,
        bsonRegExp,
        raw,
        enableUtf8Validation
    };
}
/**
 * Merge the given BSONSerializeOptions, preferring options over the parent's options, and
 * substituting defaults for values not set.
 *
 * @internal
 */
function resolveBSONOptions(options, parent) {
    const parentOptions = parent?.bsonOptions;
    return {
        raw: options?.raw ?? parentOptions?.raw ?? false,
        useBigInt64: options?.useBigInt64 ?? parentOptions?.useBigInt64 ?? false,
        promoteLongs: options?.promoteLongs ?? parentOptions?.promoteLongs ?? true,
        promoteValues: options?.promoteValues ?? parentOptions?.promoteValues ?? true,
        promoteBuffers: options?.promoteBuffers ?? parentOptions?.promoteBuffers ?? false,
        ignoreUndefined: options?.ignoreUndefined ?? parentOptions?.ignoreUndefined ?? false,
        bsonRegExp: options?.bsonRegExp ?? parentOptions?.bsonRegExp ?? false,
        serializeFunctions: options?.serializeFunctions ?? parentOptions?.serializeFunctions ?? false,
        fieldsAsRaw: options?.fieldsAsRaw ?? parentOptions?.fieldsAsRaw ?? {},
        enableUtf8Validation: options?.enableUtf8Validation ?? parentOptions?.enableUtf8Validation ?? true
    };
}
/** @internal */
function parseUtf8ValidationOption(options) {
    const enableUtf8Validation = options?.enableUtf8Validation;
    if (enableUtf8Validation === false) {
        return { utf8: false };
    }
    return { utf8: { writeErrors: false } };
}
//# sourceMappingURL=bson.js.map