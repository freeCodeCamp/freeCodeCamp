"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePrecision = void 0;
exports._string = _string;
exports._coercedString = _coercedString;
exports._email = _email;
exports._guid = _guid;
exports._uuid = _uuid;
exports._uuidv4 = _uuidv4;
exports._uuidv6 = _uuidv6;
exports._uuidv7 = _uuidv7;
exports._url = _url;
exports._emoji = _emoji;
exports._nanoid = _nanoid;
exports._cuid = _cuid;
exports._cuid2 = _cuid2;
exports._ulid = _ulid;
exports._xid = _xid;
exports._ksuid = _ksuid;
exports._ipv4 = _ipv4;
exports._ipv6 = _ipv6;
exports._cidrv4 = _cidrv4;
exports._cidrv6 = _cidrv6;
exports._base64 = _base64;
exports._base64url = _base64url;
exports._e164 = _e164;
exports._jwt = _jwt;
exports._isoDateTime = _isoDateTime;
exports._isoDate = _isoDate;
exports._isoTime = _isoTime;
exports._isoDuration = _isoDuration;
exports._number = _number;
exports._coercedNumber = _coercedNumber;
exports._int = _int;
exports._float32 = _float32;
exports._float64 = _float64;
exports._int32 = _int32;
exports._uint32 = _uint32;
exports._boolean = _boolean;
exports._coercedBoolean = _coercedBoolean;
exports._bigint = _bigint;
exports._coercedBigint = _coercedBigint;
exports._int64 = _int64;
exports._uint64 = _uint64;
exports._symbol = _symbol;
exports._undefined = _undefined;
exports._null = _null;
exports._any = _any;
exports._unknown = _unknown;
exports._never = _never;
exports._void = _void;
exports._date = _date;
exports._coercedDate = _coercedDate;
exports._nan = _nan;
exports._lt = _lt;
exports._lte = _lte;
exports._max = _lte;
exports._lte = _lte;
exports._max = _lte;
exports._gt = _gt;
exports._gte = _gte;
exports._min = _gte;
exports._gte = _gte;
exports._min = _gte;
exports._positive = _positive;
exports._negative = _negative;
exports._nonpositive = _nonpositive;
exports._nonnegative = _nonnegative;
exports._multipleOf = _multipleOf;
exports._maxSize = _maxSize;
exports._minSize = _minSize;
exports._size = _size;
exports._maxLength = _maxLength;
exports._minLength = _minLength;
exports._length = _length;
exports._regex = _regex;
exports._lowercase = _lowercase;
exports._uppercase = _uppercase;
exports._includes = _includes;
exports._startsWith = _startsWith;
exports._endsWith = _endsWith;
exports._property = _property;
exports._mime = _mime;
exports._overwrite = _overwrite;
exports._normalize = _normalize;
exports._trim = _trim;
exports._toLowerCase = _toLowerCase;
exports._toUpperCase = _toUpperCase;
exports._array = _array;
exports._union = _union;
exports._discriminatedUnion = _discriminatedUnion;
exports._intersection = _intersection;
exports._tuple = _tuple;
exports._record = _record;
exports._map = _map;
exports._set = _set;
exports._enum = _enum;
exports._nativeEnum = _nativeEnum;
exports._literal = _literal;
exports._file = _file;
exports._transform = _transform;
exports._optional = _optional;
exports._nullable = _nullable;
exports._default = _default;
exports._nonoptional = _nonoptional;
exports._success = _success;
exports._catch = _catch;
exports._pipe = _pipe;
exports._readonly = _readonly;
exports._templateLiteral = _templateLiteral;
exports._lazy = _lazy;
exports._promise = _promise;
exports._custom = _custom;
exports._refine = _refine;
exports._stringbool = _stringbool;
exports._stringFormat = _stringFormat;
const checks = __importStar(require("./checks.cjs"));
const schemas = __importStar(require("./schemas.cjs"));
const util = __importStar(require("./util.cjs"));
function _string(Class, params) {
    return new Class({
        type: "string",
        ...util.normalizeParams(params),
    });
}
function _coercedString(Class, params) {
    return new Class({
        type: "string",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
function _email(Class, params) {
    return new Class({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _guid(Class, params) {
    return new Class({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _uuid(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _uuidv4(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...util.normalizeParams(params),
    });
}
function _uuidv6(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...util.normalizeParams(params),
    });
}
function _uuidv7(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...util.normalizeParams(params),
    });
}
function _url(Class, params) {
    return new Class({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _emoji(Class, params) {
    return new Class({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _nanoid(Class, params) {
    return new Class({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _cuid(Class, params) {
    return new Class({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _cuid2(Class, params) {
    return new Class({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _ulid(Class, params) {
    return new Class({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _xid(Class, params) {
    return new Class({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _ksuid(Class, params) {
    return new Class({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _ipv4(Class, params) {
    return new Class({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _ipv6(Class, params) {
    return new Class({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _cidrv4(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _cidrv6(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _base64(Class, params) {
    return new Class({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _base64url(Class, params) {
    return new Class({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _e164(Class, params) {
    return new Class({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
function _jwt(Class, params) {
    return new Class({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
exports.TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6,
};
function _isoDateTime(Class, params) {
    return new Class({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ...util.normalizeParams(params),
    });
}
function _isoDate(Class, params) {
    return new Class({
        type: "string",
        format: "date",
        check: "string_format",
        ...util.normalizeParams(params),
    });
}
function _isoTime(Class, params) {
    return new Class({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...util.normalizeParams(params),
    });
}
function _isoDuration(Class, params) {
    return new Class({
        type: "string",
        format: "duration",
        check: "string_format",
        ...util.normalizeParams(params),
    });
}
function _number(Class, params) {
    return new Class({
        type: "number",
        checks: [],
        ...util.normalizeParams(params),
    });
}
function _coercedNumber(Class, params) {
    return new Class({
        type: "number",
        coerce: true,
        checks: [],
        ...util.normalizeParams(params),
    });
}
function _int(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...util.normalizeParams(params),
    });
}
function _float32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float32",
        ...util.normalizeParams(params),
    });
}
function _float64(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float64",
        ...util.normalizeParams(params),
    });
}
function _int32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ...util.normalizeParams(params),
    });
}
function _uint32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "uint32",
        ...util.normalizeParams(params),
    });
}
function _boolean(Class, params) {
    return new Class({
        type: "boolean",
        ...util.normalizeParams(params),
    });
}
function _coercedBoolean(Class, params) {
    return new Class({
        type: "boolean",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
function _bigint(Class, params) {
    return new Class({
        type: "bigint",
        ...util.normalizeParams(params),
    });
}
function _coercedBigint(Class, params) {
    return new Class({
        type: "bigint",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
function _int64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "int64",
        ...util.normalizeParams(params),
    });
}
function _uint64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "uint64",
        ...util.normalizeParams(params),
    });
}
function _symbol(Class, params) {
    return new Class({
        type: "symbol",
        ...util.normalizeParams(params),
    });
}
function _undefined(Class, params) {
    return new Class({
        type: "undefined",
        ...util.normalizeParams(params),
    });
}
function _null(Class, params) {
    return new Class({
        type: "null",
        ...util.normalizeParams(params),
    });
}
function _any(Class) {
    return new Class({
        type: "any",
    });
}
function _unknown(Class) {
    return new Class({
        type: "unknown",
    });
}
function _never(Class, params) {
    return new Class({
        type: "never",
        ...util.normalizeParams(params),
    });
}
function _void(Class, params) {
    return new Class({
        type: "void",
        ...util.normalizeParams(params),
    });
}
function _date(Class, params) {
    return new Class({
        type: "date",
        ...util.normalizeParams(params),
    });
}
function _coercedDate(Class, params) {
    return new Class({
        type: "date",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
function _nan(Class, params) {
    return new Class({
        type: "nan",
        ...util.normalizeParams(params),
    });
}
function _lt(value, params) {
    return new checks.$ZodCheckLessThan({
        check: "less_than",
        ...util.normalizeParams(params),
        value,
        inclusive: false,
    });
}
function _lte(value, params) {
    return new checks.$ZodCheckLessThan({
        check: "less_than",
        ...util.normalizeParams(params),
        value,
        inclusive: true,
    });
}
function _gt(value, params) {
    return new checks.$ZodCheckGreaterThan({
        check: "greater_than",
        ...util.normalizeParams(params),
        value,
        inclusive: false,
    });
}
function _gte(value, params) {
    return new checks.$ZodCheckGreaterThan({
        check: "greater_than",
        ...util.normalizeParams(params),
        value,
        inclusive: true,
    });
}
function _positive(params) {
    return _gt(0, params);
}
// negative
function _negative(params) {
    return _lt(0, params);
}
// nonpositive
function _nonpositive(params) {
    return _lte(0, params);
}
// nonnegative
function _nonnegative(params) {
    return _gte(0, params);
}
function _multipleOf(value, params) {
    return new checks.$ZodCheckMultipleOf({
        check: "multiple_of",
        ...util.normalizeParams(params),
        value,
    });
}
function _maxSize(maximum, params) {
    return new checks.$ZodCheckMaxSize({
        check: "max_size",
        ...util.normalizeParams(params),
        maximum,
    });
}
function _minSize(minimum, params) {
    return new checks.$ZodCheckMinSize({
        check: "min_size",
        ...util.normalizeParams(params),
        minimum,
    });
}
function _size(size, params) {
    return new checks.$ZodCheckSizeEquals({
        check: "size_equals",
        ...util.normalizeParams(params),
        size,
    });
}
function _maxLength(maximum, params) {
    const ch = new checks.$ZodCheckMaxLength({
        check: "max_length",
        ...util.normalizeParams(params),
        maximum,
    });
    return ch;
}
function _minLength(minimum, params) {
    return new checks.$ZodCheckMinLength({
        check: "min_length",
        ...util.normalizeParams(params),
        minimum,
    });
}
function _length(length, params) {
    return new checks.$ZodCheckLengthEquals({
        check: "length_equals",
        ...util.normalizeParams(params),
        length,
    });
}
function _regex(pattern, params) {
    return new checks.$ZodCheckRegex({
        check: "string_format",
        format: "regex",
        ...util.normalizeParams(params),
        pattern,
    });
}
function _lowercase(params) {
    return new checks.$ZodCheckLowerCase({
        check: "string_format",
        format: "lowercase",
        ...util.normalizeParams(params),
    });
}
function _uppercase(params) {
    return new checks.$ZodCheckUpperCase({
        check: "string_format",
        format: "uppercase",
        ...util.normalizeParams(params),
    });
}
function _includes(includes, params) {
    return new checks.$ZodCheckIncludes({
        check: "string_format",
        format: "includes",
        ...util.normalizeParams(params),
        includes,
    });
}
function _startsWith(prefix, params) {
    return new checks.$ZodCheckStartsWith({
        check: "string_format",
        format: "starts_with",
        ...util.normalizeParams(params),
        prefix,
    });
}
function _endsWith(suffix, params) {
    return new checks.$ZodCheckEndsWith({
        check: "string_format",
        format: "ends_with",
        ...util.normalizeParams(params),
        suffix,
    });
}
function _property(property, schema, params) {
    return new checks.$ZodCheckProperty({
        check: "property",
        property,
        schema,
        ...util.normalizeParams(params),
    });
}
function _mime(types, params) {
    return new checks.$ZodCheckMimeType({
        check: "mime_type",
        mime: types,
        ...util.normalizeParams(params),
    });
}
function _overwrite(tx) {
    return new checks.$ZodCheckOverwrite({
        check: "overwrite",
        tx,
    });
}
// normalize
function _normalize(form) {
    return _overwrite((input) => input.normalize(form));
}
// trim
function _trim() {
    return _overwrite((input) => input.trim());
}
// toLowerCase
function _toLowerCase() {
    return _overwrite((input) => input.toLowerCase());
}
// toUpperCase
function _toUpperCase() {
    return _overwrite((input) => input.toUpperCase());
}
function _array(Class, element, params) {
    return new Class({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ...util.normalizeParams(params),
    });
}
function _union(Class, options, params) {
    return new Class({
        type: "union",
        options,
        ...util.normalizeParams(params),
    });
}
function _discriminatedUnion(Class, discriminator, options, params) {
    return new Class({
        type: "union",
        options,
        discriminator,
        ...util.normalizeParams(params),
    });
}
function _intersection(Class, left, right) {
    return new Class({
        type: "intersection",
        left,
        right,
    });
}
// export function _tuple(
//   Class: util.SchemaClass<schemas.$ZodTuple>,
//   items: [],
//   params?: string | $ZodTupleParams
// ): schemas.$ZodTuple<[], null>;
function _tuple(Class, items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof schemas.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new Class({
        type: "tuple",
        items,
        rest,
        ...util.normalizeParams(params),
    });
}
function _record(Class, keyType, valueType, params) {
    return new Class({
        type: "record",
        keyType,
        valueType,
        ...util.normalizeParams(params),
    });
}
function _map(Class, keyType, valueType, params) {
    return new Class({
        type: "map",
        keyType,
        valueType,
        ...util.normalizeParams(params),
    });
}
function _set(Class, valueType, params) {
    return new Class({
        type: "set",
        valueType,
        ...util.normalizeParams(params),
    });
}
function _enum(Class, values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    // if (Array.isArray(values)) {
    //   for (const value of values) {
    //     entries[value] = value;
    //   }
    // } else {
    //   Object.assign(entries, values);
    // }
    // const entries: util.EnumLike = {};
    // for (const val of values) {
    //   entries[val] = val;
    // }
    return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
function _nativeEnum(Class, entries, params) {
    return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
function _literal(Class, value, params) {
    return new Class({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...util.normalizeParams(params),
    });
}
function _file(Class, params) {
    return new Class({
        type: "file",
        ...util.normalizeParams(params),
    });
}
function _transform(Class, fn) {
    return new Class({
        type: "transform",
        transform: fn,
    });
}
function _optional(Class, innerType) {
    return new Class({
        type: "optional",
        innerType,
    });
}
function _nullable(Class, innerType) {
    return new Class({
        type: "nullable",
        innerType,
    });
}
function _default(Class, innerType, defaultValue) {
    return new Class({
        type: "default",
        innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        },
    });
}
function _nonoptional(Class, innerType, params) {
    return new Class({
        type: "nonoptional",
        innerType,
        ...util.normalizeParams(params),
    });
}
function _success(Class, innerType) {
    return new Class({
        type: "success",
        innerType,
    });
}
function _catch(Class, innerType, catchValue) {
    return new Class({
        type: "catch",
        innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue),
    });
}
function _pipe(Class, in_, out) {
    return new Class({
        type: "pipe",
        in: in_,
        out,
    });
}
function _readonly(Class, innerType) {
    return new Class({
        type: "readonly",
        innerType,
    });
}
function _templateLiteral(Class, parts, params) {
    return new Class({
        type: "template_literal",
        parts,
        ...util.normalizeParams(params),
    });
}
function _lazy(Class, getter) {
    return new Class({
        type: "lazy",
        getter,
    });
}
function _promise(Class, innerType) {
    return new Class({
        type: "promise",
        innerType,
    });
}
function _custom(Class, fn, _params) {
    const norm = util.normalizeParams(_params);
    norm.abort ?? (norm.abort = true); // default to abort:false
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...norm,
    });
    return schema;
}
// export function _refine<T>(
//   Class: util.SchemaClass<schemas.$ZodCustom>,
//   fn: (arg: NoInfer<T>) => util.MaybeAsync<unknown>,
//   _params: string | $ZodCustomParams = {}
// ): checks.$ZodCheck<T> {
//   return _custom(Class, fn, _params);
// }
// same as _custom but defaults to abort:false
function _refine(Class, fn, _params) {
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...util.normalizeParams(_params),
    });
    return schema;
}
function _stringbool(Classes, _params) {
    const params = util.normalizeParams(_params);
    let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
    let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
    if (params.case !== "sensitive") {
        truthyArray = truthyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
        falsyArray = falsyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
    }
    const truthySet = new Set(truthyArray);
    const falsySet = new Set(falsyArray);
    const _Pipe = Classes.Pipe ?? schemas.$ZodPipe;
    const _Boolean = Classes.Boolean ?? schemas.$ZodBoolean;
    const _String = Classes.String ?? schemas.$ZodString;
    const _Transform = Classes.Transform ?? schemas.$ZodTransform;
    const tx = new _Transform({
        type: "transform",
        transform: (input, payload) => {
            let data = input;
            if (params.case !== "sensitive")
                data = data.toLowerCase();
            if (truthySet.has(data)) {
                return true;
            }
            else if (falsySet.has(data)) {
                return false;
            }
            else {
                payload.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [...truthySet, ...falsySet],
                    input: payload.value,
                    inst: tx,
                });
                return {};
            }
        },
        error: params.error,
    });
    // params.error;
    const innerPipe = new _Pipe({
        type: "pipe",
        in: new _String({ type: "string", error: params.error }),
        out: tx,
        error: params.error,
    });
    const outerPipe = new _Pipe({
        type: "pipe",
        in: innerPipe,
        out: new _Boolean({
            type: "boolean",
            error: params.error,
        }),
        error: params.error,
    });
    return outerPipe;
}
function _stringFormat(Class, format, fnOrRegex, _params = {}) {
    const params = util.normalizeParams(_params);
    const def = {
        ...util.normalizeParams(_params),
        check: "string_format",
        type: "string",
        format,
        fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
        ...params,
    };
    if (fnOrRegex instanceof RegExp) {
        def.pattern = fnOrRegex;
    }
    const inst = new Class(def);
    return inst;
}
