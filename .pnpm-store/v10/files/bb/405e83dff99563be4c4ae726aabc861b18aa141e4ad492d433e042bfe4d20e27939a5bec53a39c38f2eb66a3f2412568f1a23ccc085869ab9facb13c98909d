import * as core from "../core/index.js";
import { util } from "../core/index.js";
import * as parse from "./parse.js";
export const ZodMiniType = /*@__PURE__*/ core.$constructor("ZodMiniType", (inst, def) => {
    if (!inst._zod)
        throw new Error("Uninitialized schema in ZodMiniType.");
    core.$ZodType.init(inst, def);
    inst.def = def;
    inst.parse = (data, params) => parse.parse(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => parse.safeParse(inst, data, params);
    inst.parseAsync = async (data, params) => parse.parseAsync(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => parse.safeParseAsync(inst, data, params);
    inst.check = (...checks) => {
        return inst.clone({
            ...def,
            checks: [
                ...(def.checks ?? []),
                ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch),
            ],
        }
        // { parent: true }
        );
    };
    inst.clone = (_def, params) => core.clone(inst, _def, params);
    inst.brand = () => inst;
    inst.register = ((reg, meta) => {
        reg.add(inst, meta);
        return inst;
    });
});
export const ZodMiniString = /*@__PURE__*/ core.$constructor("ZodMiniString", (inst, def) => {
    core.$ZodString.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function string(params) {
    return core._string(ZodMiniString, params);
}
export const ZodMiniStringFormat = /*@__PURE__*/ core.$constructor("ZodMiniStringFormat", (inst, def) => {
    core.$ZodStringFormat.init(inst, def);
    ZodMiniString.init(inst, def);
});
export const ZodMiniEmail = /*@__PURE__*/ core.$constructor("ZodMiniEmail", (inst, def) => {
    core.$ZodEmail.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function email(params) {
    return core._email(ZodMiniEmail, params);
}
export const ZodMiniGUID = /*@__PURE__*/ core.$constructor("ZodMiniGUID", (inst, def) => {
    core.$ZodGUID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function guid(params) {
    return core._guid(ZodMiniGUID, params);
}
export const ZodMiniUUID = /*@__PURE__*/ core.$constructor("ZodMiniUUID", (inst, def) => {
    core.$ZodUUID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function uuid(params) {
    return core._uuid(ZodMiniUUID, params);
}
export function uuidv4(params) {
    return core._uuidv4(ZodMiniUUID, params);
}
// ZodMiniUUIDv6
export function uuidv6(params) {
    return core._uuidv6(ZodMiniUUID, params);
}
// ZodMiniUUIDv7
export function uuidv7(params) {
    return core._uuidv7(ZodMiniUUID, params);
}
export const ZodMiniURL = /*@__PURE__*/ core.$constructor("ZodMiniURL", (inst, def) => {
    core.$ZodURL.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function url(params) {
    return core._url(ZodMiniURL, params);
}
export const ZodMiniEmoji = /*@__PURE__*/ core.$constructor("ZodMiniEmoji", (inst, def) => {
    core.$ZodEmoji.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function emoji(params) {
    return core._emoji(ZodMiniEmoji, params);
}
export const ZodMiniNanoID = /*@__PURE__*/ core.$constructor("ZodMiniNanoID", (inst, def) => {
    core.$ZodNanoID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function nanoid(params) {
    return core._nanoid(ZodMiniNanoID, params);
}
export const ZodMiniCUID = /*@__PURE__*/ core.$constructor("ZodMiniCUID", (inst, def) => {
    core.$ZodCUID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function cuid(params) {
    return core._cuid(ZodMiniCUID, params);
}
export const ZodMiniCUID2 = /*@__PURE__*/ core.$constructor("ZodMiniCUID2", (inst, def) => {
    core.$ZodCUID2.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function cuid2(params) {
    return core._cuid2(ZodMiniCUID2, params);
}
export const ZodMiniULID = /*@__PURE__*/ core.$constructor("ZodMiniULID", (inst, def) => {
    core.$ZodULID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function ulid(params) {
    return core._ulid(ZodMiniULID, params);
}
export const ZodMiniXID = /*@__PURE__*/ core.$constructor("ZodMiniXID", (inst, def) => {
    core.$ZodXID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function xid(params) {
    return core._xid(ZodMiniXID, params);
}
export const ZodMiniKSUID = /*@__PURE__*/ core.$constructor("ZodMiniKSUID", (inst, def) => {
    core.$ZodKSUID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function ksuid(params) {
    return core._ksuid(ZodMiniKSUID, params);
}
export const ZodMiniIPv4 = /*@__PURE__*/ core.$constructor("ZodMiniIPv4", (inst, def) => {
    core.$ZodIPv4.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function ipv4(params) {
    return core._ipv4(ZodMiniIPv4, params);
}
export const ZodMiniIPv6 = /*@__PURE__*/ core.$constructor("ZodMiniIPv6", (inst, def) => {
    core.$ZodIPv6.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function ipv6(params) {
    return core._ipv6(ZodMiniIPv6, params);
}
export const ZodMiniCIDRv4 = /*@__PURE__*/ core.$constructor("ZodMiniCIDRv4", (inst, def) => {
    core.$ZodCIDRv4.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function cidrv4(params) {
    return core._cidrv4(ZodMiniCIDRv4, params);
}
export const ZodMiniCIDRv6 = /*@__PURE__*/ core.$constructor("ZodMiniCIDRv6", (inst, def) => {
    core.$ZodCIDRv6.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function cidrv6(params) {
    return core._cidrv6(ZodMiniCIDRv6, params);
}
export const ZodMiniBase64 = /*@__PURE__*/ core.$constructor("ZodMiniBase64", (inst, def) => {
    core.$ZodBase64.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function base64(params) {
    return core._base64(ZodMiniBase64, params);
}
export const ZodMiniBase64URL = /*@__PURE__*/ core.$constructor("ZodMiniBase64URL", (inst, def) => {
    core.$ZodBase64URL.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function base64url(params) {
    return core._base64url(ZodMiniBase64URL, params);
}
export const ZodMiniE164 = /*@__PURE__*/ core.$constructor("ZodMiniE164", (inst, def) => {
    core.$ZodE164.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function e164(params) {
    return core._e164(ZodMiniE164, params);
}
export const ZodMiniJWT = /*@__PURE__*/ core.$constructor("ZodMiniJWT", (inst, def) => {
    core.$ZodJWT.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function jwt(params) {
    return core._jwt(ZodMiniJWT, params);
}
export const ZodMiniCustomStringFormat = /*@__PURE__*/ core.$constructor("ZodMiniCustomStringFormat", (inst, def) => {
    core.$ZodCustomStringFormat.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
});
export function stringFormat(format, fnOrRegex, _params = {}) {
    return core._stringFormat(ZodMiniCustomStringFormat, format, fnOrRegex, _params);
}
export const ZodMiniNumber = /*@__PURE__*/ core.$constructor("ZodMiniNumber", (inst, def) => {
    core.$ZodNumber.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function number(params) {
    return core._number(ZodMiniNumber, params);
}
export const ZodMiniNumberFormat = /*@__PURE__*/ core.$constructor("ZodMiniNumberFormat", (inst, def) => {
    core.$ZodNumberFormat.init(inst, def);
    ZodMiniNumber.init(inst, def);
});
// int
export function int(params) {
    return core._int(ZodMiniNumberFormat, params);
}
// float32
export function float32(params) {
    return core._float32(ZodMiniNumberFormat, params);
}
// float64
export function float64(params) {
    return core._float64(ZodMiniNumberFormat, params);
}
// int32
export function int32(params) {
    return core._int32(ZodMiniNumberFormat, params);
}
// uint32
export function uint32(params) {
    return core._uint32(ZodMiniNumberFormat, params);
}
export const ZodMiniBoolean = /*@__PURE__*/ core.$constructor("ZodMiniBoolean", (inst, def) => {
    core.$ZodBoolean.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function boolean(params) {
    return core._boolean(ZodMiniBoolean, params);
}
export const ZodMiniBigInt = /*@__PURE__*/ core.$constructor("ZodMiniBigInt", (inst, def) => {
    core.$ZodBigInt.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function bigint(params) {
    return core._bigint(ZodMiniBigInt, params);
}
export const ZodMiniBigIntFormat = /*@__PURE__*/ core.$constructor("ZodMiniBigIntFormat", (inst, def) => {
    core.$ZodBigIntFormat.init(inst, def);
    ZodMiniBigInt.init(inst, def);
});
// int64
export function int64(params) {
    return core._int64(ZodMiniBigIntFormat, params);
}
// uint64
export function uint64(params) {
    return core._uint64(ZodMiniBigIntFormat, params);
}
export const ZodMiniSymbol = /*@__PURE__*/ core.$constructor("ZodMiniSymbol", (inst, def) => {
    core.$ZodSymbol.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function symbol(params) {
    return core._symbol(ZodMiniSymbol, params);
}
export const ZodMiniUndefined = /*@__PURE__*/ core.$constructor("ZodMiniUndefined", (inst, def) => {
    core.$ZodUndefined.init(inst, def);
    ZodMiniType.init(inst, def);
});
function _undefined(params) {
    return core._undefined(ZodMiniUndefined, params);
}
export { _undefined as undefined };
export const ZodMiniNull = /*@__PURE__*/ core.$constructor("ZodMiniNull", (inst, def) => {
    core.$ZodNull.init(inst, def);
    ZodMiniType.init(inst, def);
});
function _null(params) {
    return core._null(ZodMiniNull, params);
}
export { _null as null };
export const ZodMiniAny = /*@__PURE__*/ core.$constructor("ZodMiniAny", (inst, def) => {
    core.$ZodAny.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function any() {
    return core._any(ZodMiniAny);
}
export const ZodMiniUnknown = /*@__PURE__*/ core.$constructor("ZodMiniUnknown", (inst, def) => {
    core.$ZodUnknown.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function unknown() {
    return core._unknown(ZodMiniUnknown);
}
export const ZodMiniNever = /*@__PURE__*/ core.$constructor("ZodMiniNever", (inst, def) => {
    core.$ZodNever.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function never(params) {
    return core._never(ZodMiniNever, params);
}
export const ZodMiniVoid = /*@__PURE__*/ core.$constructor("ZodMiniVoid", (inst, def) => {
    core.$ZodVoid.init(inst, def);
    ZodMiniType.init(inst, def);
});
function _void(params) {
    return core._void(ZodMiniVoid, params);
}
export { _void as void };
export const ZodMiniDate = /*@__PURE__*/ core.$constructor("ZodMiniDate", (inst, def) => {
    core.$ZodDate.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function date(params) {
    return core._date(ZodMiniDate, params);
}
export const ZodMiniArray = /*@__PURE__*/ core.$constructor("ZodMiniArray", (inst, def) => {
    core.$ZodArray.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function array(element, params) {
    return new ZodMiniArray({
        type: "array",
        element: element,
        ...util.normalizeParams(params),
    });
}
// .keyof
export function keyof(schema) {
    const shape = schema._zod.def.shape;
    return literal(Object.keys(shape));
}
export const ZodMiniObject = /*@__PURE__*/ core.$constructor("ZodMiniObject", (inst, def) => {
    core.$ZodObject.init(inst, def);
    ZodMiniType.init(inst, def);
    util.defineLazy(inst, "shape", () => def.shape);
});
export function object(shape, params) {
    const def = {
        type: "object",
        get shape() {
            util.assignProp(this, "shape", { ...shape });
            return this.shape;
        },
        ...util.normalizeParams(params),
    };
    return new ZodMiniObject(def);
}
// strictObject
export function strictObject(shape, params) {
    return new ZodMiniObject({
        type: "object",
        // shape: shape as core.$ZodLooseShape,
        get shape() {
            util.assignProp(this, "shape", { ...shape });
            return this.shape;
        },
        catchall: never(),
        ...util.normalizeParams(params),
    });
}
// looseObject
export function looseObject(shape, params) {
    return new ZodMiniObject({
        type: "object",
        // shape: shape as core.$ZodLooseShape,
        get shape() {
            util.assignProp(this, "shape", { ...shape });
            return this.shape;
        },
        // get optional() {
        //   return util.optionalKeys(shape);
        // },
        catchall: unknown(),
        ...util.normalizeParams(params),
    });
}
// object methods
export function extend(schema, shape) {
    return util.extend(schema, shape);
}
export function merge(schema, shape) {
    return util.extend(schema, shape);
}
export function pick(schema, mask) {
    return util.pick(schema, mask);
}
// .omit
export function omit(schema, mask) {
    return util.omit(schema, mask);
}
export function partial(schema, mask) {
    return util.partial(ZodMiniOptional, schema, mask);
}
export function required(schema, mask) {
    return util.required(ZodMiniNonOptional, schema, mask);
}
export function catchall(inst, catchall) {
    return inst.clone({ ...inst._zod.def, catchall: catchall });
}
export const ZodMiniUnion = /*@__PURE__*/ core.$constructor("ZodMiniUnion", (inst, def) => {
    core.$ZodUnion.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function union(options, params) {
    return new ZodMiniUnion({
        type: "union",
        options: options,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniDiscriminatedUnion = /*@__PURE__*/ core.$constructor("ZodMiniDiscriminatedUnion", (inst, def) => {
    core.$ZodDiscriminatedUnion.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function discriminatedUnion(discriminator, options, params) {
    return new ZodMiniDiscriminatedUnion({
        type: "union",
        options,
        discriminator,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniIntersection = /*@__PURE__*/ core.$constructor("ZodMiniIntersection", (inst, def) => {
    core.$ZodIntersection.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function intersection(left, right) {
    return new ZodMiniIntersection({
        type: "intersection",
        left: left,
        right: right,
    });
}
export const ZodMiniTuple = /*@__PURE__*/ core.$constructor("ZodMiniTuple", (inst, def) => {
    core.$ZodTuple.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof core.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new ZodMiniTuple({
        type: "tuple",
        items: items,
        rest,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniRecord = /*@__PURE__*/ core.$constructor("ZodMiniRecord", (inst, def) => {
    core.$ZodRecord.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function record(keyType, valueType, params) {
    return new ZodMiniRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
export function partialRecord(keyType, valueType, params) {
    return new ZodMiniRecord({
        type: "record",
        keyType: union([keyType, never()]),
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniMap = /*@__PURE__*/ core.$constructor("ZodMiniMap", (inst, def) => {
    core.$ZodMap.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function map(keyType, valueType, params) {
    return new ZodMiniMap({
        type: "map",
        keyType: keyType,
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniSet = /*@__PURE__*/ core.$constructor("ZodMiniSet", (inst, def) => {
    core.$ZodSet.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function set(valueType, params) {
    return new ZodMiniSet({
        type: "set",
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniEnum = /*@__PURE__*/ core.$constructor("ZodMiniEnum", (inst, def) => {
    core.$ZodEnum.init(inst, def);
    ZodMiniType.init(inst, def);
});
function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new ZodMiniEnum({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
export { _enum as enum };
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
export function nativeEnum(entries, params) {
    return new ZodMiniEnum({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniLiteral = /*@__PURE__*/ core.$constructor("ZodMiniLiteral", (inst, def) => {
    core.$ZodLiteral.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function literal(value, params) {
    return new ZodMiniLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...util.normalizeParams(params),
    });
}
export const ZodMiniFile = /*@__PURE__*/ core.$constructor("ZodMiniFile", (inst, def) => {
    core.$ZodFile.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function file(params) {
    return core._file(ZodMiniFile, params);
}
export const ZodMiniTransform = /*@__PURE__*/ core.$constructor("ZodMiniTransform", (inst, def) => {
    core.$ZodTransform.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function transform(fn) {
    return new ZodMiniTransform({
        type: "transform",
        transform: fn,
    });
}
export const ZodMiniOptional = /*@__PURE__*/ core.$constructor("ZodMiniOptional", (inst, def) => {
    core.$ZodOptional.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function optional(innerType) {
    return new ZodMiniOptional({
        type: "optional",
        innerType: innerType,
    });
}
export const ZodMiniNullable = /*@__PURE__*/ core.$constructor("ZodMiniNullable", (inst, def) => {
    core.$ZodNullable.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function nullable(innerType) {
    return new ZodMiniNullable({
        type: "nullable",
        innerType: innerType,
    });
}
// nullish
export function nullish(innerType) {
    return optional(nullable(innerType));
}
export const ZodMiniDefault = /*@__PURE__*/ core.$constructor("ZodMiniDefault", (inst, def) => {
    core.$ZodDefault.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function _default(innerType, defaultValue) {
    return new ZodMiniDefault({
        type: "default",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        },
    });
}
export const ZodMiniPrefault = /*@__PURE__*/ core.$constructor("ZodMiniPrefault", (inst, def) => {
    core.$ZodPrefault.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function prefault(innerType, defaultValue) {
    return new ZodMiniPrefault({
        type: "prefault",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        },
    });
}
export const ZodMiniNonOptional = /*@__PURE__*/ core.$constructor("ZodMiniNonOptional", (inst, def) => {
    core.$ZodNonOptional.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function nonoptional(innerType, params) {
    return new ZodMiniNonOptional({
        type: "nonoptional",
        innerType: innerType,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniSuccess = /*@__PURE__*/ core.$constructor("ZodMiniSuccess", (inst, def) => {
    core.$ZodSuccess.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function success(innerType) {
    return new ZodMiniSuccess({
        type: "success",
        innerType: innerType,
    });
}
export const ZodMiniCatch = /*@__PURE__*/ core.$constructor("ZodMiniCatch", (inst, def) => {
    core.$ZodCatch.init(inst, def);
    ZodMiniType.init(inst, def);
});
function _catch(innerType, catchValue) {
    return new ZodMiniCatch({
        type: "catch",
        innerType: innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue),
    });
}
export { _catch as catch };
export const ZodMiniNaN = /*@__PURE__*/ core.$constructor("ZodMiniNaN", (inst, def) => {
    core.$ZodNaN.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function nan(params) {
    return core._nan(ZodMiniNaN, params);
}
export const ZodMiniPipe = /*@__PURE__*/ core.$constructor("ZodMiniPipe", (inst, def) => {
    core.$ZodPipe.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function pipe(in_, out) {
    return new ZodMiniPipe({
        type: "pipe",
        in: in_,
        out: out,
    });
}
export const ZodMiniReadonly = /*@__PURE__*/ core.$constructor("ZodMiniReadonly", (inst, def) => {
    core.$ZodReadonly.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function readonly(innerType) {
    return new ZodMiniReadonly({
        type: "readonly",
        innerType: innerType,
    });
}
export const ZodMiniTemplateLiteral = /*@__PURE__*/ core.$constructor("ZodMiniTemplateLiteral", (inst, def) => {
    core.$ZodTemplateLiteral.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function templateLiteral(parts, params) {
    return new ZodMiniTemplateLiteral({
        type: "template_literal",
        parts,
        ...util.normalizeParams(params),
    });
}
export const ZodMiniLazy = /*@__PURE__*/ core.$constructor("ZodMiniLazy", (inst, def) => {
    core.$ZodLazy.init(inst, def);
    ZodMiniType.init(inst, def);
});
// export function lazy<T extends object>(getter: () => T): T {
//   return util.createTransparentProxy<T>(getter);
// }
function _lazy(getter) {
    return new ZodMiniLazy({
        type: "lazy",
        getter: getter,
    });
}
export { _lazy as lazy };
export const ZodMiniPromise = /*@__PURE__*/ core.$constructor("ZodMiniPromise", (inst, def) => {
    core.$ZodPromise.init(inst, def);
    ZodMiniType.init(inst, def);
});
export function promise(innerType) {
    return new ZodMiniPromise({
        type: "promise",
        innerType: innerType,
    });
}
export const ZodMiniCustom = /*@__PURE__*/ core.$constructor("ZodMiniCustom", (inst, def) => {
    core.$ZodCustom.init(inst, def);
    ZodMiniType.init(inst, def);
});
// custom checks
export function check(fn, params) {
    const ch = new core.$ZodCheck({
        check: "custom",
        ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
// ZodCustom
// custom schema
export function custom(fn, _params) {
    return core._custom(ZodMiniCustom, fn ?? (() => true), _params);
}
// refine
export function refine(fn, _params = {}) {
    return core._refine(ZodMiniCustom, fn, _params);
}
// instanceof
class Class {
    constructor(..._args) { }
}
function _instanceof(cls, params = {
    error: `Input not instance of ${cls.name}`,
}) {
    const inst = custom((data) => data instanceof cls, params);
    inst._zod.bag.Class = cls;
    return inst;
}
export { _instanceof as instanceof };
// stringbool
export const stringbool = (...args) => core._stringbool({
    Pipe: ZodMiniPipe,
    Boolean: ZodMiniBoolean,
    String: ZodMiniString,
    Transform: ZodMiniTransform,
}, ...args);
export function json() {
    const jsonSchema = _lazy(() => {
        return union([string(), number(), boolean(), _null(), array(jsonSchema), record(string(), jsonSchema)]);
    });
    return jsonSchema;
}
