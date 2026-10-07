import * as checks from "./checks.js";
import * as schemas from "./schemas.js";
import * as util from "./util.js";
export function _string(Class, params) {
    return new Class({
        type: "string",
        ...util.normalizeParams(params),
    });
}
export function _coercedString(Class, params) {
    return new Class({
        type: "string",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
export function _email(Class, params) {
    return new Class({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _guid(Class, params) {
    return new Class({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _uuid(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _uuidv4(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...util.normalizeParams(params),
    });
}
export function _uuidv6(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...util.normalizeParams(params),
    });
}
export function _uuidv7(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...util.normalizeParams(params),
    });
}
export function _url(Class, params) {
    return new Class({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _emoji(Class, params) {
    return new Class({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _nanoid(Class, params) {
    return new Class({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _cuid(Class, params) {
    return new Class({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _cuid2(Class, params) {
    return new Class({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _ulid(Class, params) {
    return new Class({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _xid(Class, params) {
    return new Class({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _ksuid(Class, params) {
    return new Class({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _ipv4(Class, params) {
    return new Class({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _ipv6(Class, params) {
    return new Class({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _cidrv4(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _cidrv6(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _base64(Class, params) {
    return new Class({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _base64url(Class, params) {
    return new Class({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _e164(Class, params) {
    return new Class({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export function _jwt(Class, params) {
    return new Class({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params),
    });
}
export const TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6,
};
export function _isoDateTime(Class, params) {
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
export function _isoDate(Class, params) {
    return new Class({
        type: "string",
        format: "date",
        check: "string_format",
        ...util.normalizeParams(params),
    });
}
export function _isoTime(Class, params) {
    return new Class({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...util.normalizeParams(params),
    });
}
export function _isoDuration(Class, params) {
    return new Class({
        type: "string",
        format: "duration",
        check: "string_format",
        ...util.normalizeParams(params),
    });
}
export function _number(Class, params) {
    return new Class({
        type: "number",
        checks: [],
        ...util.normalizeParams(params),
    });
}
export function _coercedNumber(Class, params) {
    return new Class({
        type: "number",
        coerce: true,
        checks: [],
        ...util.normalizeParams(params),
    });
}
export function _int(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...util.normalizeParams(params),
    });
}
export function _float32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float32",
        ...util.normalizeParams(params),
    });
}
export function _float64(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float64",
        ...util.normalizeParams(params),
    });
}
export function _int32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ...util.normalizeParams(params),
    });
}
export function _uint32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "uint32",
        ...util.normalizeParams(params),
    });
}
export function _boolean(Class, params) {
    return new Class({
        type: "boolean",
        ...util.normalizeParams(params),
    });
}
export function _coercedBoolean(Class, params) {
    return new Class({
        type: "boolean",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
export function _bigint(Class, params) {
    return new Class({
        type: "bigint",
        ...util.normalizeParams(params),
    });
}
export function _coercedBigint(Class, params) {
    return new Class({
        type: "bigint",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
export function _int64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "int64",
        ...util.normalizeParams(params),
    });
}
export function _uint64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "uint64",
        ...util.normalizeParams(params),
    });
}
export function _symbol(Class, params) {
    return new Class({
        type: "symbol",
        ...util.normalizeParams(params),
    });
}
export function _undefined(Class, params) {
    return new Class({
        type: "undefined",
        ...util.normalizeParams(params),
    });
}
export function _null(Class, params) {
    return new Class({
        type: "null",
        ...util.normalizeParams(params),
    });
}
export function _any(Class) {
    return new Class({
        type: "any",
    });
}
export function _unknown(Class) {
    return new Class({
        type: "unknown",
    });
}
export function _never(Class, params) {
    return new Class({
        type: "never",
        ...util.normalizeParams(params),
    });
}
export function _void(Class, params) {
    return new Class({
        type: "void",
        ...util.normalizeParams(params),
    });
}
export function _date(Class, params) {
    return new Class({
        type: "date",
        ...util.normalizeParams(params),
    });
}
export function _coercedDate(Class, params) {
    return new Class({
        type: "date",
        coerce: true,
        ...util.normalizeParams(params),
    });
}
export function _nan(Class, params) {
    return new Class({
        type: "nan",
        ...util.normalizeParams(params),
    });
}
export function _lt(value, params) {
    return new checks.$ZodCheckLessThan({
        check: "less_than",
        ...util.normalizeParams(params),
        value,
        inclusive: false,
    });
}
export function _lte(value, params) {
    return new checks.$ZodCheckLessThan({
        check: "less_than",
        ...util.normalizeParams(params),
        value,
        inclusive: true,
    });
}
export { 
/** @deprecated Use `z.lte()` instead. */
_lte as _max, };
export function _gt(value, params) {
    return new checks.$ZodCheckGreaterThan({
        check: "greater_than",
        ...util.normalizeParams(params),
        value,
        inclusive: false,
    });
}
export function _gte(value, params) {
    return new checks.$ZodCheckGreaterThan({
        check: "greater_than",
        ...util.normalizeParams(params),
        value,
        inclusive: true,
    });
}
export { 
/** @deprecated Use `z.gte()` instead. */
_gte as _min, };
export function _positive(params) {
    return _gt(0, params);
}
// negative
export function _negative(params) {
    return _lt(0, params);
}
// nonpositive
export function _nonpositive(params) {
    return _lte(0, params);
}
// nonnegative
export function _nonnegative(params) {
    return _gte(0, params);
}
export function _multipleOf(value, params) {
    return new checks.$ZodCheckMultipleOf({
        check: "multiple_of",
        ...util.normalizeParams(params),
        value,
    });
}
export function _maxSize(maximum, params) {
    return new checks.$ZodCheckMaxSize({
        check: "max_size",
        ...util.normalizeParams(params),
        maximum,
    });
}
export function _minSize(minimum, params) {
    return new checks.$ZodCheckMinSize({
        check: "min_size",
        ...util.normalizeParams(params),
        minimum,
    });
}
export function _size(size, params) {
    return new checks.$ZodCheckSizeEquals({
        check: "size_equals",
        ...util.normalizeParams(params),
        size,
    });
}
export function _maxLength(maximum, params) {
    const ch = new checks.$ZodCheckMaxLength({
        check: "max_length",
        ...util.normalizeParams(params),
        maximum,
    });
    return ch;
}
export function _minLength(minimum, params) {
    return new checks.$ZodCheckMinLength({
        check: "min_length",
        ...util.normalizeParams(params),
        minimum,
    });
}
export function _length(length, params) {
    return new checks.$ZodCheckLengthEquals({
        check: "length_equals",
        ...util.normalizeParams(params),
        length,
    });
}
export function _regex(pattern, params) {
    return new checks.$ZodCheckRegex({
        check: "string_format",
        format: "regex",
        ...util.normalizeParams(params),
        pattern,
    });
}
export function _lowercase(params) {
    return new checks.$ZodCheckLowerCase({
        check: "string_format",
        format: "lowercase",
        ...util.normalizeParams(params),
    });
}
export function _uppercase(params) {
    return new checks.$ZodCheckUpperCase({
        check: "string_format",
        format: "uppercase",
        ...util.normalizeParams(params),
    });
}
export function _includes(includes, params) {
    return new checks.$ZodCheckIncludes({
        check: "string_format",
        format: "includes",
        ...util.normalizeParams(params),
        includes,
    });
}
export function _startsWith(prefix, params) {
    return new checks.$ZodCheckStartsWith({
        check: "string_format",
        format: "starts_with",
        ...util.normalizeParams(params),
        prefix,
    });
}
export function _endsWith(suffix, params) {
    return new checks.$ZodCheckEndsWith({
        check: "string_format",
        format: "ends_with",
        ...util.normalizeParams(params),
        suffix,
    });
}
export function _property(property, schema, params) {
    return new checks.$ZodCheckProperty({
        check: "property",
        property,
        schema,
        ...util.normalizeParams(params),
    });
}
export function _mime(types, params) {
    return new checks.$ZodCheckMimeType({
        check: "mime_type",
        mime: types,
        ...util.normalizeParams(params),
    });
}
export function _overwrite(tx) {
    return new checks.$ZodCheckOverwrite({
        check: "overwrite",
        tx,
    });
}
// normalize
export function _normalize(form) {
    return _overwrite((input) => input.normalize(form));
}
// trim
export function _trim() {
    return _overwrite((input) => input.trim());
}
// toLowerCase
export function _toLowerCase() {
    return _overwrite((input) => input.toLowerCase());
}
// toUpperCase
export function _toUpperCase() {
    return _overwrite((input) => input.toUpperCase());
}
export function _array(Class, element, params) {
    return new Class({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ...util.normalizeParams(params),
    });
}
export function _union(Class, options, params) {
    return new Class({
        type: "union",
        options,
        ...util.normalizeParams(params),
    });
}
export function _discriminatedUnion(Class, discriminator, options, params) {
    return new Class({
        type: "union",
        options,
        discriminator,
        ...util.normalizeParams(params),
    });
}
export function _intersection(Class, left, right) {
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
export function _tuple(Class, items, _paramsOrRest, _params) {
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
export function _record(Class, keyType, valueType, params) {
    return new Class({
        type: "record",
        keyType,
        valueType,
        ...util.normalizeParams(params),
    });
}
export function _map(Class, keyType, valueType, params) {
    return new Class({
        type: "map",
        keyType,
        valueType,
        ...util.normalizeParams(params),
    });
}
export function _set(Class, valueType, params) {
    return new Class({
        type: "set",
        valueType,
        ...util.normalizeParams(params),
    });
}
export function _enum(Class, values, params) {
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
export function _nativeEnum(Class, entries, params) {
    return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
export function _literal(Class, value, params) {
    return new Class({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...util.normalizeParams(params),
    });
}
export function _file(Class, params) {
    return new Class({
        type: "file",
        ...util.normalizeParams(params),
    });
}
export function _transform(Class, fn) {
    return new Class({
        type: "transform",
        transform: fn,
    });
}
export function _optional(Class, innerType) {
    return new Class({
        type: "optional",
        innerType,
    });
}
export function _nullable(Class, innerType) {
    return new Class({
        type: "nullable",
        innerType,
    });
}
export function _default(Class, innerType, defaultValue) {
    return new Class({
        type: "default",
        innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        },
    });
}
export function _nonoptional(Class, innerType, params) {
    return new Class({
        type: "nonoptional",
        innerType,
        ...util.normalizeParams(params),
    });
}
export function _success(Class, innerType) {
    return new Class({
        type: "success",
        innerType,
    });
}
export function _catch(Class, innerType, catchValue) {
    return new Class({
        type: "catch",
        innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue),
    });
}
export function _pipe(Class, in_, out) {
    return new Class({
        type: "pipe",
        in: in_,
        out,
    });
}
export function _readonly(Class, innerType) {
    return new Class({
        type: "readonly",
        innerType,
    });
}
export function _templateLiteral(Class, parts, params) {
    return new Class({
        type: "template_literal",
        parts,
        ...util.normalizeParams(params),
    });
}
export function _lazy(Class, getter) {
    return new Class({
        type: "lazy",
        getter,
    });
}
export function _promise(Class, innerType) {
    return new Class({
        type: "promise",
        innerType,
    });
}
export function _custom(Class, fn, _params) {
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
export function _refine(Class, fn, _params) {
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...util.normalizeParams(_params),
    });
    return schema;
}
export function _stringbool(Classes, _params) {
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
export function _stringFormat(Class, format, fnOrRegex, _params = {}) {
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
