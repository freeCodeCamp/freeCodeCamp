import * as core from "../core/index.js";
import { util } from "../core/index.js";
import * as checks from "./checks.js";
import * as iso from "./iso.js";
import * as parse from "./parse.js";
export const ZodType = /*@__PURE__*/ core.$constructor("ZodType", (inst, def) => {
    core.$ZodType.init(inst, def);
    inst.def = def;
    Object.defineProperty(inst, "_def", { value: def });
    // base methods
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
    inst.clone = (def, params) => core.clone(inst, def, params);
    inst.brand = () => inst;
    inst.register = ((reg, meta) => {
        reg.add(inst, meta);
        return inst;
    });
    // parsing
    inst.parse = (data, params) => parse.parse(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => parse.safeParse(inst, data, params);
    inst.parseAsync = async (data, params) => parse.parseAsync(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => parse.safeParseAsync(inst, data, params);
    inst.spa = inst.safeParseAsync;
    // refinements
    inst.refine = (check, params) => inst.check(refine(check, params));
    inst.superRefine = (refinement) => inst.check(superRefine(refinement));
    inst.overwrite = (fn) => inst.check(checks.overwrite(fn));
    // wrappers
    inst.optional = () => optional(inst);
    inst.nullable = () => nullable(inst);
    inst.nullish = () => optional(nullable(inst));
    inst.nonoptional = (params) => nonoptional(inst, params);
    inst.array = () => array(inst);
    inst.or = (arg) => union([inst, arg]);
    inst.and = (arg) => intersection(inst, arg);
    inst.transform = (tx) => pipe(inst, transform(tx));
    inst.default = (def) => _default(inst, def);
    inst.prefault = (def) => prefault(inst, def);
    // inst.coalesce = (def, params) => coalesce(inst, def, params);
    inst.catch = (params) => _catch(inst, params);
    inst.pipe = (target) => pipe(inst, target);
    inst.readonly = () => readonly(inst);
    // meta
    inst.describe = (description) => {
        const cl = inst.clone();
        core.globalRegistry.add(cl, { description });
        return cl;
    };
    Object.defineProperty(inst, "description", {
        get() {
            return core.globalRegistry.get(inst)?.description;
        },
        configurable: true,
    });
    inst.meta = (...args) => {
        if (args.length === 0) {
            return core.globalRegistry.get(inst);
        }
        const cl = inst.clone();
        core.globalRegistry.add(cl, args[0]);
        return cl;
    };
    // helpers
    inst.isOptional = () => inst.safeParse(undefined).success;
    inst.isNullable = () => inst.safeParse(null).success;
    return inst;
});
/** @internal */
export const _ZodString = /*@__PURE__*/ core.$constructor("_ZodString", (inst, def) => {
    core.$ZodString.init(inst, def);
    ZodType.init(inst, def);
    const bag = inst._zod.bag;
    inst.format = bag.format ?? null;
    inst.minLength = bag.minimum ?? null;
    inst.maxLength = bag.maximum ?? null;
    // validations
    inst.regex = (...args) => inst.check(checks.regex(...args));
    inst.includes = (...args) => inst.check(checks.includes(...args));
    inst.startsWith = (...args) => inst.check(checks.startsWith(...args));
    inst.endsWith = (...args) => inst.check(checks.endsWith(...args));
    inst.min = (...args) => inst.check(checks.minLength(...args));
    inst.max = (...args) => inst.check(checks.maxLength(...args));
    inst.length = (...args) => inst.check(checks.length(...args));
    inst.nonempty = (...args) => inst.check(checks.minLength(1, ...args));
    inst.lowercase = (params) => inst.check(checks.lowercase(params));
    inst.uppercase = (params) => inst.check(checks.uppercase(params));
    // transforms
    inst.trim = () => inst.check(checks.trim());
    inst.normalize = (...args) => inst.check(checks.normalize(...args));
    inst.toLowerCase = () => inst.check(checks.toLowerCase());
    inst.toUpperCase = () => inst.check(checks.toUpperCase());
});
export const ZodString = /*@__PURE__*/ core.$constructor("ZodString", (inst, def) => {
    core.$ZodString.init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params) => inst.check(core._email(ZodEmail, params));
    inst.url = (params) => inst.check(core._url(ZodURL, params));
    inst.jwt = (params) => inst.check(core._jwt(ZodJWT, params));
    inst.emoji = (params) => inst.check(core._emoji(ZodEmoji, params));
    inst.guid = (params) => inst.check(core._guid(ZodGUID, params));
    inst.uuid = (params) => inst.check(core._uuid(ZodUUID, params));
    inst.uuidv4 = (params) => inst.check(core._uuidv4(ZodUUID, params));
    inst.uuidv6 = (params) => inst.check(core._uuidv6(ZodUUID, params));
    inst.uuidv7 = (params) => inst.check(core._uuidv7(ZodUUID, params));
    inst.nanoid = (params) => inst.check(core._nanoid(ZodNanoID, params));
    inst.guid = (params) => inst.check(core._guid(ZodGUID, params));
    inst.cuid = (params) => inst.check(core._cuid(ZodCUID, params));
    inst.cuid2 = (params) => inst.check(core._cuid2(ZodCUID2, params));
    inst.ulid = (params) => inst.check(core._ulid(ZodULID, params));
    inst.base64 = (params) => inst.check(core._base64(ZodBase64, params));
    inst.base64url = (params) => inst.check(core._base64url(ZodBase64URL, params));
    inst.xid = (params) => inst.check(core._xid(ZodXID, params));
    inst.ksuid = (params) => inst.check(core._ksuid(ZodKSUID, params));
    inst.ipv4 = (params) => inst.check(core._ipv4(ZodIPv4, params));
    inst.ipv6 = (params) => inst.check(core._ipv6(ZodIPv6, params));
    inst.cidrv4 = (params) => inst.check(core._cidrv4(ZodCIDRv4, params));
    inst.cidrv6 = (params) => inst.check(core._cidrv6(ZodCIDRv6, params));
    inst.e164 = (params) => inst.check(core._e164(ZodE164, params));
    // iso
    inst.datetime = (params) => inst.check(iso.datetime(params));
    inst.date = (params) => inst.check(iso.date(params));
    inst.time = (params) => inst.check(iso.time(params));
    inst.duration = (params) => inst.check(iso.duration(params));
});
export function string(params) {
    return core._string(ZodString, params);
}
export const ZodStringFormat = /*@__PURE__*/ core.$constructor("ZodStringFormat", (inst, def) => {
    core.$ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
});
export const ZodEmail = /*@__PURE__*/ core.$constructor("ZodEmail", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function email(params) {
    return core._email(ZodEmail, params);
}
export const ZodGUID = /*@__PURE__*/ core.$constructor("ZodGUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function guid(params) {
    return core._guid(ZodGUID, params);
}
export const ZodUUID = /*@__PURE__*/ core.$constructor("ZodUUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function uuid(params) {
    return core._uuid(ZodUUID, params);
}
export function uuidv4(params) {
    return core._uuidv4(ZodUUID, params);
}
// ZodUUIDv6
export function uuidv6(params) {
    return core._uuidv6(ZodUUID, params);
}
// ZodUUIDv7
export function uuidv7(params) {
    return core._uuidv7(ZodUUID, params);
}
export const ZodURL = /*@__PURE__*/ core.$constructor("ZodURL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function url(params) {
    return core._url(ZodURL, params);
}
export const ZodEmoji = /*@__PURE__*/ core.$constructor("ZodEmoji", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function emoji(params) {
    return core._emoji(ZodEmoji, params);
}
export const ZodNanoID = /*@__PURE__*/ core.$constructor("ZodNanoID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function nanoid(params) {
    return core._nanoid(ZodNanoID, params);
}
export const ZodCUID = /*@__PURE__*/ core.$constructor("ZodCUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function cuid(params) {
    return core._cuid(ZodCUID, params);
}
export const ZodCUID2 = /*@__PURE__*/ core.$constructor("ZodCUID2", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function cuid2(params) {
    return core._cuid2(ZodCUID2, params);
}
export const ZodULID = /*@__PURE__*/ core.$constructor("ZodULID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function ulid(params) {
    return core._ulid(ZodULID, params);
}
export const ZodXID = /*@__PURE__*/ core.$constructor("ZodXID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function xid(params) {
    return core._xid(ZodXID, params);
}
export const ZodKSUID = /*@__PURE__*/ core.$constructor("ZodKSUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function ksuid(params) {
    return core._ksuid(ZodKSUID, params);
}
export const ZodIPv4 = /*@__PURE__*/ core.$constructor("ZodIPv4", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function ipv4(params) {
    return core._ipv4(ZodIPv4, params);
}
export const ZodIPv6 = /*@__PURE__*/ core.$constructor("ZodIPv6", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function ipv6(params) {
    return core._ipv6(ZodIPv6, params);
}
export const ZodCIDRv4 = /*@__PURE__*/ core.$constructor("ZodCIDRv4", (inst, def) => {
    core.$ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function cidrv4(params) {
    return core._cidrv4(ZodCIDRv4, params);
}
export const ZodCIDRv6 = /*@__PURE__*/ core.$constructor("ZodCIDRv6", (inst, def) => {
    core.$ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function cidrv6(params) {
    return core._cidrv6(ZodCIDRv6, params);
}
export const ZodBase64 = /*@__PURE__*/ core.$constructor("ZodBase64", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function base64(params) {
    return core._base64(ZodBase64, params);
}
export const ZodBase64URL = /*@__PURE__*/ core.$constructor("ZodBase64URL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function base64url(params) {
    return core._base64url(ZodBase64URL, params);
}
export const ZodE164 = /*@__PURE__*/ core.$constructor("ZodE164", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function e164(params) {
    return core._e164(ZodE164, params);
}
export const ZodJWT = /*@__PURE__*/ core.$constructor("ZodJWT", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function jwt(params) {
    return core._jwt(ZodJWT, params);
}
export const ZodCustomStringFormat = /*@__PURE__*/ core.$constructor("ZodCustomStringFormat", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCustomStringFormat.init(inst, def);
    ZodStringFormat.init(inst, def);
});
export function stringFormat(format, fnOrRegex, _params = {}) {
    return core._stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
export const ZodNumber = /*@__PURE__*/ core.$constructor("ZodNumber", (inst, def) => {
    core.$ZodNumber.init(inst, def);
    ZodType.init(inst, def);
    inst.gt = (value, params) => inst.check(checks.gt(value, params));
    inst.gte = (value, params) => inst.check(checks.gte(value, params));
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.lt = (value, params) => inst.check(checks.lt(value, params));
    inst.lte = (value, params) => inst.check(checks.lte(value, params));
    inst.max = (value, params) => inst.check(checks.lte(value, params));
    inst.int = (params) => inst.check(int(params));
    inst.safe = (params) => inst.check(int(params));
    inst.positive = (params) => inst.check(checks.gt(0, params));
    inst.nonnegative = (params) => inst.check(checks.gte(0, params));
    inst.negative = (params) => inst.check(checks.lt(0, params));
    inst.nonpositive = (params) => inst.check(checks.lte(0, params));
    inst.multipleOf = (value, params) => inst.check(checks.multipleOf(value, params));
    inst.step = (value, params) => inst.check(checks.multipleOf(value, params));
    // inst.finite = (params) => inst.check(core.finite(params));
    inst.finite = () => inst;
    const bag = inst._zod.bag;
    inst.minValue =
        Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
    inst.maxValue =
        Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
    inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
    inst.isFinite = true;
    inst.format = bag.format ?? null;
});
export function number(params) {
    return core._number(ZodNumber, params);
}
export const ZodNumberFormat = /*@__PURE__*/ core.$constructor("ZodNumberFormat", (inst, def) => {
    core.$ZodNumberFormat.init(inst, def);
    ZodNumber.init(inst, def);
});
export function int(params) {
    return core._int(ZodNumberFormat, params);
}
export function float32(params) {
    return core._float32(ZodNumberFormat, params);
}
export function float64(params) {
    return core._float64(ZodNumberFormat, params);
}
export function int32(params) {
    return core._int32(ZodNumberFormat, params);
}
export function uint32(params) {
    return core._uint32(ZodNumberFormat, params);
}
export const ZodBoolean = /*@__PURE__*/ core.$constructor("ZodBoolean", (inst, def) => {
    core.$ZodBoolean.init(inst, def);
    ZodType.init(inst, def);
});
export function boolean(params) {
    return core._boolean(ZodBoolean, params);
}
export const ZodBigInt = /*@__PURE__*/ core.$constructor("ZodBigInt", (inst, def) => {
    core.$ZodBigInt.init(inst, def);
    ZodType.init(inst, def);
    inst.gte = (value, params) => inst.check(checks.gte(value, params));
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.gt = (value, params) => inst.check(checks.gt(value, params));
    inst.gte = (value, params) => inst.check(checks.gte(value, params));
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.lt = (value, params) => inst.check(checks.lt(value, params));
    inst.lte = (value, params) => inst.check(checks.lte(value, params));
    inst.max = (value, params) => inst.check(checks.lte(value, params));
    inst.positive = (params) => inst.check(checks.gt(BigInt(0), params));
    inst.negative = (params) => inst.check(checks.lt(BigInt(0), params));
    inst.nonpositive = (params) => inst.check(checks.lte(BigInt(0), params));
    inst.nonnegative = (params) => inst.check(checks.gte(BigInt(0), params));
    inst.multipleOf = (value, params) => inst.check(checks.multipleOf(value, params));
    const bag = inst._zod.bag;
    inst.minValue = bag.minimum ?? null;
    inst.maxValue = bag.maximum ?? null;
    inst.format = bag.format ?? null;
});
export function bigint(params) {
    return core._bigint(ZodBigInt, params);
}
export const ZodBigIntFormat = /*@__PURE__*/ core.$constructor("ZodBigIntFormat", (inst, def) => {
    core.$ZodBigIntFormat.init(inst, def);
    ZodBigInt.init(inst, def);
});
// int64
export function int64(params) {
    return core._int64(ZodBigIntFormat, params);
}
// uint64
export function uint64(params) {
    return core._uint64(ZodBigIntFormat, params);
}
export const ZodSymbol = /*@__PURE__*/ core.$constructor("ZodSymbol", (inst, def) => {
    core.$ZodSymbol.init(inst, def);
    ZodType.init(inst, def);
});
export function symbol(params) {
    return core._symbol(ZodSymbol, params);
}
export const ZodUndefined = /*@__PURE__*/ core.$constructor("ZodUndefined", (inst, def) => {
    core.$ZodUndefined.init(inst, def);
    ZodType.init(inst, def);
});
function _undefined(params) {
    return core._undefined(ZodUndefined, params);
}
export { _undefined as undefined };
export const ZodNull = /*@__PURE__*/ core.$constructor("ZodNull", (inst, def) => {
    core.$ZodNull.init(inst, def);
    ZodType.init(inst, def);
});
function _null(params) {
    return core._null(ZodNull, params);
}
export { _null as null };
export const ZodAny = /*@__PURE__*/ core.$constructor("ZodAny", (inst, def) => {
    core.$ZodAny.init(inst, def);
    ZodType.init(inst, def);
});
export function any() {
    return core._any(ZodAny);
}
export const ZodUnknown = /*@__PURE__*/ core.$constructor("ZodUnknown", (inst, def) => {
    core.$ZodUnknown.init(inst, def);
    ZodType.init(inst, def);
});
export function unknown() {
    return core._unknown(ZodUnknown);
}
export const ZodNever = /*@__PURE__*/ core.$constructor("ZodNever", (inst, def) => {
    core.$ZodNever.init(inst, def);
    ZodType.init(inst, def);
});
export function never(params) {
    return core._never(ZodNever, params);
}
export const ZodVoid = /*@__PURE__*/ core.$constructor("ZodVoid", (inst, def) => {
    core.$ZodVoid.init(inst, def);
    ZodType.init(inst, def);
});
function _void(params) {
    return core._void(ZodVoid, params);
}
export { _void as void };
export const ZodDate = /*@__PURE__*/ core.$constructor("ZodDate", (inst, def) => {
    core.$ZodDate.init(inst, def);
    ZodType.init(inst, def);
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.max = (value, params) => inst.check(checks.lte(value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
export function date(params) {
    return core._date(ZodDate, params);
}
export const ZodArray = /*@__PURE__*/ core.$constructor("ZodArray", (inst, def) => {
    core.$ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params) => inst.check(checks.minLength(minLength, params));
    inst.nonempty = (params) => inst.check(checks.minLength(1, params));
    inst.max = (maxLength, params) => inst.check(checks.maxLength(maxLength, params));
    inst.length = (len, params) => inst.check(checks.length(len, params));
    inst.unwrap = () => inst.element;
});
export function array(element, params) {
    return core._array(ZodArray, element, params);
}
// .keyof
export function keyof(schema) {
    const shape = schema._zod.def.shape;
    return literal(Object.keys(shape));
}
export const ZodObject = /*@__PURE__*/ core.$constructor("ZodObject", (inst, def) => {
    core.$ZodObject.init(inst, def);
    ZodType.init(inst, def);
    util.defineLazy(inst, "shape", () => def.shape);
    inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall: catchall });
    inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    // inst.nonstrict = () => inst.clone({ ...inst._zod.def, catchall: api.unknown() });
    inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
    inst.strip = () => inst.clone({ ...inst._zod.def, catchall: undefined });
    inst.extend = (incoming) => {
        return util.extend(inst, incoming);
    };
    inst.merge = (other) => util.merge(inst, other);
    inst.pick = (mask) => util.pick(inst, mask);
    inst.omit = (mask) => util.omit(inst, mask);
    inst.partial = (...args) => util.partial(ZodOptional, inst, args[0]);
    inst.required = (...args) => util.required(ZodNonOptional, inst, args[0]);
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
    return new ZodObject(def);
}
// strictObject
export function strictObject(shape, params) {
    return new ZodObject({
        type: "object",
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
    return new ZodObject({
        type: "object",
        get shape() {
            util.assignProp(this, "shape", { ...shape });
            return this.shape;
        },
        catchall: unknown(),
        ...util.normalizeParams(params),
    });
}
export const ZodUnion = /*@__PURE__*/ core.$constructor("ZodUnion", (inst, def) => {
    core.$ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst.options = def.options;
});
export function union(options, params) {
    return new ZodUnion({
        type: "union",
        options: options,
        ...util.normalizeParams(params),
    });
}
export const ZodDiscriminatedUnion = /*@__PURE__*/ core.$constructor("ZodDiscriminatedUnion", (inst, def) => {
    ZodUnion.init(inst, def);
    core.$ZodDiscriminatedUnion.init(inst, def);
});
export function discriminatedUnion(discriminator, options, params) {
    // const [options, params] = args;
    return new ZodDiscriminatedUnion({
        type: "union",
        options,
        discriminator,
        ...util.normalizeParams(params),
    });
}
export const ZodIntersection = /*@__PURE__*/ core.$constructor("ZodIntersection", (inst, def) => {
    core.$ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
});
export function intersection(left, right) {
    return new ZodIntersection({
        type: "intersection",
        left: left,
        right: right,
    });
}
export const ZodTuple = /*@__PURE__*/ core.$constructor("ZodTuple", (inst, def) => {
    core.$ZodTuple.init(inst, def);
    ZodType.init(inst, def);
    inst.rest = (rest) => inst.clone({
        ...inst._zod.def,
        rest: rest,
    });
});
export function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof core.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new ZodTuple({
        type: "tuple",
        items: items,
        rest,
        ...util.normalizeParams(params),
    });
}
export const ZodRecord = /*@__PURE__*/ core.$constructor("ZodRecord", (inst, def) => {
    core.$ZodRecord.init(inst, def);
    ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
export function record(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
// type alksjf = core.output<core.$ZodRecordKey>;
export function partialRecord(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType: union([keyType, never()]),
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
export const ZodMap = /*@__PURE__*/ core.$constructor("ZodMap", (inst, def) => {
    core.$ZodMap.init(inst, def);
    ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
export function map(keyType, valueType, params) {
    return new ZodMap({
        type: "map",
        keyType: keyType,
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
export const ZodSet = /*@__PURE__*/ core.$constructor("ZodSet", (inst, def) => {
    core.$ZodSet.init(inst, def);
    ZodType.init(inst, def);
    inst.min = (...args) => inst.check(core._minSize(...args));
    inst.nonempty = (params) => inst.check(core._minSize(1, params));
    inst.max = (...args) => inst.check(core._maxSize(...args));
    inst.size = (...args) => inst.check(core._size(...args));
});
export function set(valueType, params) {
    return new ZodSet({
        type: "set",
        valueType: valueType,
        ...util.normalizeParams(params),
    });
}
export const ZodEnum = /*@__PURE__*/ core.$constructor("ZodEnum", (inst, def) => {
    core.$ZodEnum.init(inst, def);
    ZodType.init(inst, def);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params) => {
        const newEntries = {};
        for (const value of values) {
            if (keys.has(value)) {
                newEntries[value] = def.entries[value];
            }
            else
                throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...util.normalizeParams(params),
            entries: newEntries,
        });
    };
    inst.exclude = (values, params) => {
        const newEntries = { ...def.entries };
        for (const value of values) {
            if (keys.has(value)) {
                delete newEntries[value];
            }
            else
                throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...util.normalizeParams(params),
            entries: newEntries,
        });
    };
});
function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new ZodEnum({
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
    return new ZodEnum({
        type: "enum",
        entries,
        ...util.normalizeParams(params),
    });
}
export const ZodLiteral = /*@__PURE__*/ core.$constructor("ZodLiteral", (inst, def) => {
    core.$ZodLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
        get() {
            if (def.values.length > 1) {
                throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            }
            return def.values[0];
        },
    });
});
export function literal(value, params) {
    return new ZodLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...util.normalizeParams(params),
    });
}
export const ZodFile = /*@__PURE__*/ core.$constructor("ZodFile", (inst, def) => {
    core.$ZodFile.init(inst, def);
    ZodType.init(inst, def);
    inst.min = (size, params) => inst.check(core._minSize(size, params));
    inst.max = (size, params) => inst.check(core._maxSize(size, params));
    inst.mime = (types, params) => inst.check(core._mime(Array.isArray(types) ? types : [types], params));
});
export function file(params) {
    return core._file(ZodFile, params);
}
export const ZodTransform = /*@__PURE__*/ core.$constructor("ZodTransform", (inst, def) => {
    core.$ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(util.issue(issue, payload.value, def));
            }
            else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal)
                    _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                _issue.input ?? (_issue.input = payload.value);
                _issue.inst ?? (_issue.inst = inst);
                _issue.continue ?? (_issue.continue = true);
                payload.issues.push(util.issue(_issue));
            }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
            return output.then((output) => {
                payload.value = output;
                return payload;
            });
        }
        payload.value = output;
        return payload;
    };
});
export function transform(fn) {
    return new ZodTransform({
        type: "transform",
        transform: fn,
    });
}
export const ZodOptional = /*@__PURE__*/ core.$constructor("ZodOptional", (inst, def) => {
    core.$ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
export function optional(innerType) {
    return new ZodOptional({
        type: "optional",
        innerType: innerType,
    });
}
export const ZodNullable = /*@__PURE__*/ core.$constructor("ZodNullable", (inst, def) => {
    core.$ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
export function nullable(innerType) {
    return new ZodNullable({
        type: "nullable",
        innerType: innerType,
    });
}
// nullish
export function nullish(innerType) {
    return optional(nullable(innerType));
}
export const ZodDefault = /*@__PURE__*/ core.$constructor("ZodDefault", (inst, def) => {
    core.$ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
export function _default(innerType, defaultValue) {
    return new ZodDefault({
        type: "default",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        },
    });
}
export const ZodPrefault = /*@__PURE__*/ core.$constructor("ZodPrefault", (inst, def) => {
    core.$ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
export function prefault(innerType, defaultValue) {
    return new ZodPrefault({
        type: "prefault",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        },
    });
}
export const ZodNonOptional = /*@__PURE__*/ core.$constructor("ZodNonOptional", (inst, def) => {
    core.$ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
export function nonoptional(innerType, params) {
    return new ZodNonOptional({
        type: "nonoptional",
        innerType: innerType,
        ...util.normalizeParams(params),
    });
}
export const ZodSuccess = /*@__PURE__*/ core.$constructor("ZodSuccess", (inst, def) => {
    core.$ZodSuccess.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
export function success(innerType) {
    return new ZodSuccess({
        type: "success",
        innerType: innerType,
    });
}
export const ZodCatch = /*@__PURE__*/ core.$constructor("ZodCatch", (inst, def) => {
    core.$ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
    return new ZodCatch({
        type: "catch",
        innerType: innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue),
    });
}
export { _catch as catch };
export const ZodNaN = /*@__PURE__*/ core.$constructor("ZodNaN", (inst, def) => {
    core.$ZodNaN.init(inst, def);
    ZodType.init(inst, def);
});
export function nan(params) {
    return core._nan(ZodNaN, params);
}
export const ZodPipe = /*@__PURE__*/ core.$constructor("ZodPipe", (inst, def) => {
    core.$ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
});
export function pipe(in_, out) {
    return new ZodPipe({
        type: "pipe",
        in: in_,
        out: out,
        // ...util.normalizeParams(params),
    });
}
export const ZodReadonly = /*@__PURE__*/ core.$constructor("ZodReadonly", (inst, def) => {
    core.$ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
});
export function readonly(innerType) {
    return new ZodReadonly({
        type: "readonly",
        innerType: innerType,
    });
}
export const ZodTemplateLiteral = /*@__PURE__*/ core.$constructor("ZodTemplateLiteral", (inst, def) => {
    core.$ZodTemplateLiteral.init(inst, def);
    ZodType.init(inst, def);
});
export function templateLiteral(parts, params) {
    return new ZodTemplateLiteral({
        type: "template_literal",
        parts,
        ...util.normalizeParams(params),
    });
}
export const ZodLazy = /*@__PURE__*/ core.$constructor("ZodLazy", (inst, def) => {
    core.$ZodLazy.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.getter();
});
export function lazy(getter) {
    return new ZodLazy({
        type: "lazy",
        getter: getter,
    });
}
export const ZodPromise = /*@__PURE__*/ core.$constructor("ZodPromise", (inst, def) => {
    core.$ZodPromise.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
export function promise(innerType) {
    return new ZodPromise({
        type: "promise",
        innerType: innerType,
    });
}
export const ZodCustom = /*@__PURE__*/ core.$constructor("ZodCustom", (inst, def) => {
    core.$ZodCustom.init(inst, def);
    ZodType.init(inst, def);
});
// custom checks
export function check(fn) {
    const ch = new core.$ZodCheck({
        check: "custom",
        // ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
export function custom(fn, _params) {
    return core._custom(ZodCustom, fn ?? (() => true), _params);
}
export function refine(fn, _params = {}) {
    return core._refine(ZodCustom, fn, _params);
}
// superRefine
export function superRefine(fn) {
    const ch = check((payload) => {
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(util.issue(issue, payload.value, ch._zod.def));
            }
            else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal)
                    _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                _issue.input ?? (_issue.input = payload.value);
                _issue.inst ?? (_issue.inst = ch);
                _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
                payload.issues.push(util.issue(_issue));
            }
        };
        return fn(payload.value, payload);
    });
    return ch;
}
function _instanceof(cls, params = {
    error: `Input not instance of ${cls.name}`,
}) {
    const inst = new ZodCustom({
        type: "custom",
        check: "custom",
        fn: (data) => data instanceof cls,
        abort: true,
        ...util.normalizeParams(params),
    });
    inst._zod.bag.Class = cls;
    return inst;
}
export { _instanceof as instanceof };
// stringbool
export const stringbool = (...args) => core._stringbool({
    Pipe: ZodPipe,
    Boolean: ZodBoolean,
    String: ZodString,
    Transform: ZodTransform,
}, ...args);
export function json(params) {
    const jsonSchema = lazy(() => {
        return union([string(params), number(), boolean(), _null(), array(jsonSchema), record(string(), jsonSchema)]);
    });
    return jsonSchema;
}
// preprocess
// /** @deprecated Use `z.pipe()` and `z.transform()` instead. */
export function preprocess(fn, schema) {
    return pipe(transform(fn), schema);
}
