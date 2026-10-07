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
exports.ZodTransform = exports.ZodFile = exports.ZodLiteral = exports.ZodEnum = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodDate = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodBigIntFormat = exports.ZodBigInt = exports.ZodBoolean = exports.ZodNumberFormat = exports.ZodNumber = exports.ZodCustomStringFormat = exports.ZodJWT = exports.ZodE164 = exports.ZodBase64URL = exports.ZodBase64 = exports.ZodCIDRv6 = exports.ZodCIDRv4 = exports.ZodIPv6 = exports.ZodIPv4 = exports.ZodKSUID = exports.ZodXID = exports.ZodULID = exports.ZodCUID2 = exports.ZodCUID = exports.ZodNanoID = exports.ZodEmoji = exports.ZodURL = exports.ZodUUID = exports.ZodGUID = exports.ZodEmail = exports.ZodStringFormat = exports.ZodString = exports._ZodString = exports.ZodType = void 0;
exports.stringbool = exports.ZodCustom = exports.ZodPromise = exports.ZodLazy = exports.ZodTemplateLiteral = exports.ZodReadonly = exports.ZodPipe = exports.ZodNaN = exports.ZodCatch = exports.ZodSuccess = exports.ZodNonOptional = exports.ZodPrefault = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = void 0;
exports.string = string;
exports.email = email;
exports.guid = guid;
exports.uuid = uuid;
exports.uuidv4 = uuidv4;
exports.uuidv6 = uuidv6;
exports.uuidv7 = uuidv7;
exports.url = url;
exports.emoji = emoji;
exports.nanoid = nanoid;
exports.cuid = cuid;
exports.cuid2 = cuid2;
exports.ulid = ulid;
exports.xid = xid;
exports.ksuid = ksuid;
exports.ipv4 = ipv4;
exports.ipv6 = ipv6;
exports.cidrv4 = cidrv4;
exports.cidrv6 = cidrv6;
exports.base64 = base64;
exports.base64url = base64url;
exports.e164 = e164;
exports.jwt = jwt;
exports.stringFormat = stringFormat;
exports.number = number;
exports.int = int;
exports.float32 = float32;
exports.float64 = float64;
exports.int32 = int32;
exports.uint32 = uint32;
exports.boolean = boolean;
exports.bigint = bigint;
exports.int64 = int64;
exports.uint64 = uint64;
exports.symbol = symbol;
exports.undefined = _undefined;
exports.null = _null;
exports.any = any;
exports.unknown = unknown;
exports.never = never;
exports.void = _void;
exports.date = date;
exports.array = array;
exports.keyof = keyof;
exports.object = object;
exports.strictObject = strictObject;
exports.looseObject = looseObject;
exports.union = union;
exports.discriminatedUnion = discriminatedUnion;
exports.intersection = intersection;
exports.tuple = tuple;
exports.record = record;
exports.partialRecord = partialRecord;
exports.map = map;
exports.set = set;
exports.enum = _enum;
exports.nativeEnum = nativeEnum;
exports.literal = literal;
exports.file = file;
exports.transform = transform;
exports.optional = optional;
exports.nullable = nullable;
exports.nullish = nullish;
exports._default = _default;
exports.prefault = prefault;
exports.nonoptional = nonoptional;
exports.success = success;
exports.catch = _catch;
exports.nan = nan;
exports.pipe = pipe;
exports.readonly = readonly;
exports.templateLiteral = templateLiteral;
exports.lazy = lazy;
exports.promise = promise;
exports.check = check;
exports.custom = custom;
exports.refine = refine;
exports.superRefine = superRefine;
exports.instanceof = _instanceof;
exports.json = json;
exports.preprocess = preprocess;
const core = __importStar(require("../core/index.cjs"));
const index_js_1 = require("../core/index.cjs");
const checks = __importStar(require("./checks.cjs"));
const iso = __importStar(require("./iso.cjs"));
const parse = __importStar(require("./parse.cjs"));
exports.ZodType = core.$constructor("ZodType", (inst, def) => {
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
exports._ZodString = core.$constructor("_ZodString", (inst, def) => {
    core.$ZodString.init(inst, def);
    exports.ZodType.init(inst, def);
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
exports.ZodString = core.$constructor("ZodString", (inst, def) => {
    core.$ZodString.init(inst, def);
    exports._ZodString.init(inst, def);
    inst.email = (params) => inst.check(core._email(exports.ZodEmail, params));
    inst.url = (params) => inst.check(core._url(exports.ZodURL, params));
    inst.jwt = (params) => inst.check(core._jwt(exports.ZodJWT, params));
    inst.emoji = (params) => inst.check(core._emoji(exports.ZodEmoji, params));
    inst.guid = (params) => inst.check(core._guid(exports.ZodGUID, params));
    inst.uuid = (params) => inst.check(core._uuid(exports.ZodUUID, params));
    inst.uuidv4 = (params) => inst.check(core._uuidv4(exports.ZodUUID, params));
    inst.uuidv6 = (params) => inst.check(core._uuidv6(exports.ZodUUID, params));
    inst.uuidv7 = (params) => inst.check(core._uuidv7(exports.ZodUUID, params));
    inst.nanoid = (params) => inst.check(core._nanoid(exports.ZodNanoID, params));
    inst.guid = (params) => inst.check(core._guid(exports.ZodGUID, params));
    inst.cuid = (params) => inst.check(core._cuid(exports.ZodCUID, params));
    inst.cuid2 = (params) => inst.check(core._cuid2(exports.ZodCUID2, params));
    inst.ulid = (params) => inst.check(core._ulid(exports.ZodULID, params));
    inst.base64 = (params) => inst.check(core._base64(exports.ZodBase64, params));
    inst.base64url = (params) => inst.check(core._base64url(exports.ZodBase64URL, params));
    inst.xid = (params) => inst.check(core._xid(exports.ZodXID, params));
    inst.ksuid = (params) => inst.check(core._ksuid(exports.ZodKSUID, params));
    inst.ipv4 = (params) => inst.check(core._ipv4(exports.ZodIPv4, params));
    inst.ipv6 = (params) => inst.check(core._ipv6(exports.ZodIPv6, params));
    inst.cidrv4 = (params) => inst.check(core._cidrv4(exports.ZodCIDRv4, params));
    inst.cidrv6 = (params) => inst.check(core._cidrv6(exports.ZodCIDRv6, params));
    inst.e164 = (params) => inst.check(core._e164(exports.ZodE164, params));
    // iso
    inst.datetime = (params) => inst.check(iso.datetime(params));
    inst.date = (params) => inst.check(iso.date(params));
    inst.time = (params) => inst.check(iso.time(params));
    inst.duration = (params) => inst.check(iso.duration(params));
});
function string(params) {
    return core._string(exports.ZodString, params);
}
exports.ZodStringFormat = core.$constructor("ZodStringFormat", (inst, def) => {
    core.$ZodStringFormat.init(inst, def);
    exports._ZodString.init(inst, def);
});
exports.ZodEmail = core.$constructor("ZodEmail", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodEmail.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function email(params) {
    return core._email(exports.ZodEmail, params);
}
exports.ZodGUID = core.$constructor("ZodGUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodGUID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function guid(params) {
    return core._guid(exports.ZodGUID, params);
}
exports.ZodUUID = core.$constructor("ZodUUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodUUID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function uuid(params) {
    return core._uuid(exports.ZodUUID, params);
}
function uuidv4(params) {
    return core._uuidv4(exports.ZodUUID, params);
}
// ZodUUIDv6
function uuidv6(params) {
    return core._uuidv6(exports.ZodUUID, params);
}
// ZodUUIDv7
function uuidv7(params) {
    return core._uuidv7(exports.ZodUUID, params);
}
exports.ZodURL = core.$constructor("ZodURL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodURL.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function url(params) {
    return core._url(exports.ZodURL, params);
}
exports.ZodEmoji = core.$constructor("ZodEmoji", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodEmoji.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function emoji(params) {
    return core._emoji(exports.ZodEmoji, params);
}
exports.ZodNanoID = core.$constructor("ZodNanoID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodNanoID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function nanoid(params) {
    return core._nanoid(exports.ZodNanoID, params);
}
exports.ZodCUID = core.$constructor("ZodCUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCUID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function cuid(params) {
    return core._cuid(exports.ZodCUID, params);
}
exports.ZodCUID2 = core.$constructor("ZodCUID2", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCUID2.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function cuid2(params) {
    return core._cuid2(exports.ZodCUID2, params);
}
exports.ZodULID = core.$constructor("ZodULID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodULID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function ulid(params) {
    return core._ulid(exports.ZodULID, params);
}
exports.ZodXID = core.$constructor("ZodXID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodXID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function xid(params) {
    return core._xid(exports.ZodXID, params);
}
exports.ZodKSUID = core.$constructor("ZodKSUID", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodKSUID.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function ksuid(params) {
    return core._ksuid(exports.ZodKSUID, params);
}
exports.ZodIPv4 = core.$constructor("ZodIPv4", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodIPv4.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function ipv4(params) {
    return core._ipv4(exports.ZodIPv4, params);
}
exports.ZodIPv6 = core.$constructor("ZodIPv6", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodIPv6.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function ipv6(params) {
    return core._ipv6(exports.ZodIPv6, params);
}
exports.ZodCIDRv4 = core.$constructor("ZodCIDRv4", (inst, def) => {
    core.$ZodCIDRv4.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function cidrv4(params) {
    return core._cidrv4(exports.ZodCIDRv4, params);
}
exports.ZodCIDRv6 = core.$constructor("ZodCIDRv6", (inst, def) => {
    core.$ZodCIDRv6.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function cidrv6(params) {
    return core._cidrv6(exports.ZodCIDRv6, params);
}
exports.ZodBase64 = core.$constructor("ZodBase64", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodBase64.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function base64(params) {
    return core._base64(exports.ZodBase64, params);
}
exports.ZodBase64URL = core.$constructor("ZodBase64URL", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodBase64URL.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function base64url(params) {
    return core._base64url(exports.ZodBase64URL, params);
}
exports.ZodE164 = core.$constructor("ZodE164", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodE164.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function e164(params) {
    return core._e164(exports.ZodE164, params);
}
exports.ZodJWT = core.$constructor("ZodJWT", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodJWT.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function jwt(params) {
    return core._jwt(exports.ZodJWT, params);
}
exports.ZodCustomStringFormat = core.$constructor("ZodCustomStringFormat", (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCustomStringFormat.init(inst, def);
    exports.ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
    return core._stringFormat(exports.ZodCustomStringFormat, format, fnOrRegex, _params);
}
exports.ZodNumber = core.$constructor("ZodNumber", (inst, def) => {
    core.$ZodNumber.init(inst, def);
    exports.ZodType.init(inst, def);
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
function number(params) {
    return core._number(exports.ZodNumber, params);
}
exports.ZodNumberFormat = core.$constructor("ZodNumberFormat", (inst, def) => {
    core.$ZodNumberFormat.init(inst, def);
    exports.ZodNumber.init(inst, def);
});
function int(params) {
    return core._int(exports.ZodNumberFormat, params);
}
function float32(params) {
    return core._float32(exports.ZodNumberFormat, params);
}
function float64(params) {
    return core._float64(exports.ZodNumberFormat, params);
}
function int32(params) {
    return core._int32(exports.ZodNumberFormat, params);
}
function uint32(params) {
    return core._uint32(exports.ZodNumberFormat, params);
}
exports.ZodBoolean = core.$constructor("ZodBoolean", (inst, def) => {
    core.$ZodBoolean.init(inst, def);
    exports.ZodType.init(inst, def);
});
function boolean(params) {
    return core._boolean(exports.ZodBoolean, params);
}
exports.ZodBigInt = core.$constructor("ZodBigInt", (inst, def) => {
    core.$ZodBigInt.init(inst, def);
    exports.ZodType.init(inst, def);
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
function bigint(params) {
    return core._bigint(exports.ZodBigInt, params);
}
exports.ZodBigIntFormat = core.$constructor("ZodBigIntFormat", (inst, def) => {
    core.$ZodBigIntFormat.init(inst, def);
    exports.ZodBigInt.init(inst, def);
});
// int64
function int64(params) {
    return core._int64(exports.ZodBigIntFormat, params);
}
// uint64
function uint64(params) {
    return core._uint64(exports.ZodBigIntFormat, params);
}
exports.ZodSymbol = core.$constructor("ZodSymbol", (inst, def) => {
    core.$ZodSymbol.init(inst, def);
    exports.ZodType.init(inst, def);
});
function symbol(params) {
    return core._symbol(exports.ZodSymbol, params);
}
exports.ZodUndefined = core.$constructor("ZodUndefined", (inst, def) => {
    core.$ZodUndefined.init(inst, def);
    exports.ZodType.init(inst, def);
});
function _undefined(params) {
    return core._undefined(exports.ZodUndefined, params);
}
exports.ZodNull = core.$constructor("ZodNull", (inst, def) => {
    core.$ZodNull.init(inst, def);
    exports.ZodType.init(inst, def);
});
function _null(params) {
    return core._null(exports.ZodNull, params);
}
exports.ZodAny = core.$constructor("ZodAny", (inst, def) => {
    core.$ZodAny.init(inst, def);
    exports.ZodType.init(inst, def);
});
function any() {
    return core._any(exports.ZodAny);
}
exports.ZodUnknown = core.$constructor("ZodUnknown", (inst, def) => {
    core.$ZodUnknown.init(inst, def);
    exports.ZodType.init(inst, def);
});
function unknown() {
    return core._unknown(exports.ZodUnknown);
}
exports.ZodNever = core.$constructor("ZodNever", (inst, def) => {
    core.$ZodNever.init(inst, def);
    exports.ZodType.init(inst, def);
});
function never(params) {
    return core._never(exports.ZodNever, params);
}
exports.ZodVoid = core.$constructor("ZodVoid", (inst, def) => {
    core.$ZodVoid.init(inst, def);
    exports.ZodType.init(inst, def);
});
function _void(params) {
    return core._void(exports.ZodVoid, params);
}
exports.ZodDate = core.$constructor("ZodDate", (inst, def) => {
    core.$ZodDate.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.min = (value, params) => inst.check(checks.gte(value, params));
    inst.max = (value, params) => inst.check(checks.lte(value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date(params) {
    return core._date(exports.ZodDate, params);
}
exports.ZodArray = core.$constructor("ZodArray", (inst, def) => {
    core.$ZodArray.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params) => inst.check(checks.minLength(minLength, params));
    inst.nonempty = (params) => inst.check(checks.minLength(1, params));
    inst.max = (maxLength, params) => inst.check(checks.maxLength(maxLength, params));
    inst.length = (len, params) => inst.check(checks.length(len, params));
    inst.unwrap = () => inst.element;
});
function array(element, params) {
    return core._array(exports.ZodArray, element, params);
}
// .keyof
function keyof(schema) {
    const shape = schema._zod.def.shape;
    return literal(Object.keys(shape));
}
exports.ZodObject = core.$constructor("ZodObject", (inst, def) => {
    core.$ZodObject.init(inst, def);
    exports.ZodType.init(inst, def);
    index_js_1.util.defineLazy(inst, "shape", () => def.shape);
    inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall: catchall });
    inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    // inst.nonstrict = () => inst.clone({ ...inst._zod.def, catchall: api.unknown() });
    inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
    inst.strip = () => inst.clone({ ...inst._zod.def, catchall: undefined });
    inst.extend = (incoming) => {
        return index_js_1.util.extend(inst, incoming);
    };
    inst.merge = (other) => index_js_1.util.merge(inst, other);
    inst.pick = (mask) => index_js_1.util.pick(inst, mask);
    inst.omit = (mask) => index_js_1.util.omit(inst, mask);
    inst.partial = (...args) => index_js_1.util.partial(exports.ZodOptional, inst, args[0]);
    inst.required = (...args) => index_js_1.util.required(exports.ZodNonOptional, inst, args[0]);
});
function object(shape, params) {
    const def = {
        type: "object",
        get shape() {
            index_js_1.util.assignProp(this, "shape", { ...shape });
            return this.shape;
        },
        ...index_js_1.util.normalizeParams(params),
    };
    return new exports.ZodObject(def);
}
// strictObject
function strictObject(shape, params) {
    return new exports.ZodObject({
        type: "object",
        get shape() {
            index_js_1.util.assignProp(this, "shape", { ...shape });
            return this.shape;
        },
        catchall: never(),
        ...index_js_1.util.normalizeParams(params),
    });
}
// looseObject
function looseObject(shape, params) {
    return new exports.ZodObject({
        type: "object",
        get shape() {
            index_js_1.util.assignProp(this, "shape", { ...shape });
            return this.shape;
        },
        catchall: unknown(),
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodUnion = core.$constructor("ZodUnion", (inst, def) => {
    core.$ZodUnion.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.options = def.options;
});
function union(options, params) {
    return new exports.ZodUnion({
        type: "union",
        options: options,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodDiscriminatedUnion = core.$constructor("ZodDiscriminatedUnion", (inst, def) => {
    exports.ZodUnion.init(inst, def);
    core.$ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
    // const [options, params] = args;
    return new exports.ZodDiscriminatedUnion({
        type: "union",
        options,
        discriminator,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodIntersection = core.$constructor("ZodIntersection", (inst, def) => {
    core.$ZodIntersection.init(inst, def);
    exports.ZodType.init(inst, def);
});
function intersection(left, right) {
    return new exports.ZodIntersection({
        type: "intersection",
        left: left,
        right: right,
    });
}
exports.ZodTuple = core.$constructor("ZodTuple", (inst, def) => {
    core.$ZodTuple.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.rest = (rest) => inst.clone({
        ...inst._zod.def,
        rest: rest,
    });
});
function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof core.$ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new exports.ZodTuple({
        type: "tuple",
        items: items,
        rest,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodRecord = core.$constructor("ZodRecord", (inst, def) => {
    core.$ZodRecord.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
    return new exports.ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ...index_js_1.util.normalizeParams(params),
    });
}
// type alksjf = core.output<core.$ZodRecordKey>;
function partialRecord(keyType, valueType, params) {
    return new exports.ZodRecord({
        type: "record",
        keyType: union([keyType, never()]),
        valueType: valueType,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodMap = core.$constructor("ZodMap", (inst, def) => {
    core.$ZodMap.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function map(keyType, valueType, params) {
    return new exports.ZodMap({
        type: "map",
        keyType: keyType,
        valueType: valueType,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodSet = core.$constructor("ZodSet", (inst, def) => {
    core.$ZodSet.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.min = (...args) => inst.check(core._minSize(...args));
    inst.nonempty = (params) => inst.check(core._minSize(1, params));
    inst.max = (...args) => inst.check(core._maxSize(...args));
    inst.size = (...args) => inst.check(core._size(...args));
});
function set(valueType, params) {
    return new exports.ZodSet({
        type: "set",
        valueType: valueType,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodEnum = core.$constructor("ZodEnum", (inst, def) => {
    core.$ZodEnum.init(inst, def);
    exports.ZodType.init(inst, def);
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
        return new exports.ZodEnum({
            ...def,
            checks: [],
            ...index_js_1.util.normalizeParams(params),
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
        return new exports.ZodEnum({
            ...def,
            checks: [],
            ...index_js_1.util.normalizeParams(params),
            entries: newEntries,
        });
    };
});
function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new exports.ZodEnum({
        type: "enum",
        entries,
        ...index_js_1.util.normalizeParams(params),
    });
}
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
function nativeEnum(entries, params) {
    return new exports.ZodEnum({
        type: "enum",
        entries,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodLiteral = core.$constructor("ZodLiteral", (inst, def) => {
    core.$ZodLiteral.init(inst, def);
    exports.ZodType.init(inst, def);
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
function literal(value, params) {
    return new exports.ZodLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodFile = core.$constructor("ZodFile", (inst, def) => {
    core.$ZodFile.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.min = (size, params) => inst.check(core._minSize(size, params));
    inst.max = (size, params) => inst.check(core._maxSize(size, params));
    inst.mime = (types, params) => inst.check(core._mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
    return core._file(exports.ZodFile, params);
}
exports.ZodTransform = core.$constructor("ZodTransform", (inst, def) => {
    core.$ZodTransform.init(inst, def);
    exports.ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(index_js_1.util.issue(issue, payload.value, def));
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
                payload.issues.push(index_js_1.util.issue(_issue));
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
function transform(fn) {
    return new exports.ZodTransform({
        type: "transform",
        transform: fn,
    });
}
exports.ZodOptional = core.$constructor("ZodOptional", (inst, def) => {
    core.$ZodOptional.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
    return new exports.ZodOptional({
        type: "optional",
        innerType: innerType,
    });
}
exports.ZodNullable = core.$constructor("ZodNullable", (inst, def) => {
    core.$ZodNullable.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
    return new exports.ZodNullable({
        type: "nullable",
        innerType: innerType,
    });
}
// nullish
function nullish(innerType) {
    return optional(nullable(innerType));
}
exports.ZodDefault = core.$constructor("ZodDefault", (inst, def) => {
    core.$ZodDefault.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
    return new exports.ZodDefault({
        type: "default",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        },
    });
}
exports.ZodPrefault = core.$constructor("ZodPrefault", (inst, def) => {
    core.$ZodPrefault.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
    return new exports.ZodPrefault({
        type: "prefault",
        innerType: innerType,
        get defaultValue() {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        },
    });
}
exports.ZodNonOptional = core.$constructor("ZodNonOptional", (inst, def) => {
    core.$ZodNonOptional.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
    return new exports.ZodNonOptional({
        type: "nonoptional",
        innerType: innerType,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodSuccess = core.$constructor("ZodSuccess", (inst, def) => {
    core.$ZodSuccess.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
    return new exports.ZodSuccess({
        type: "success",
        innerType: innerType,
    });
}
exports.ZodCatch = core.$constructor("ZodCatch", (inst, def) => {
    core.$ZodCatch.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
    return new exports.ZodCatch({
        type: "catch",
        innerType: innerType,
        catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue),
    });
}
exports.ZodNaN = core.$constructor("ZodNaN", (inst, def) => {
    core.$ZodNaN.init(inst, def);
    exports.ZodType.init(inst, def);
});
function nan(params) {
    return core._nan(exports.ZodNaN, params);
}
exports.ZodPipe = core.$constructor("ZodPipe", (inst, def) => {
    core.$ZodPipe.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
});
function pipe(in_, out) {
    return new exports.ZodPipe({
        type: "pipe",
        in: in_,
        out: out,
        // ...util.normalizeParams(params),
    });
}
exports.ZodReadonly = core.$constructor("ZodReadonly", (inst, def) => {
    core.$ZodReadonly.init(inst, def);
    exports.ZodType.init(inst, def);
});
function readonly(innerType) {
    return new exports.ZodReadonly({
        type: "readonly",
        innerType: innerType,
    });
}
exports.ZodTemplateLiteral = core.$constructor("ZodTemplateLiteral", (inst, def) => {
    core.$ZodTemplateLiteral.init(inst, def);
    exports.ZodType.init(inst, def);
});
function templateLiteral(parts, params) {
    return new exports.ZodTemplateLiteral({
        type: "template_literal",
        parts,
        ...index_js_1.util.normalizeParams(params),
    });
}
exports.ZodLazy = core.$constructor("ZodLazy", (inst, def) => {
    core.$ZodLazy.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
    return new exports.ZodLazy({
        type: "lazy",
        getter: getter,
    });
}
exports.ZodPromise = core.$constructor("ZodPromise", (inst, def) => {
    core.$ZodPromise.init(inst, def);
    exports.ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
    return new exports.ZodPromise({
        type: "promise",
        innerType: innerType,
    });
}
exports.ZodCustom = core.$constructor("ZodCustom", (inst, def) => {
    core.$ZodCustom.init(inst, def);
    exports.ZodType.init(inst, def);
});
// custom checks
function check(fn) {
    const ch = new core.$ZodCheck({
        check: "custom",
        // ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
}
function custom(fn, _params) {
    return core._custom(exports.ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
    return core._refine(exports.ZodCustom, fn, _params);
}
// superRefine
function superRefine(fn) {
    const ch = check((payload) => {
        payload.addIssue = (issue) => {
            if (typeof issue === "string") {
                payload.issues.push(index_js_1.util.issue(issue, payload.value, ch._zod.def));
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
                payload.issues.push(index_js_1.util.issue(_issue));
            }
        };
        return fn(payload.value, payload);
    });
    return ch;
}
function _instanceof(cls, params = {
    error: `Input not instance of ${cls.name}`,
}) {
    const inst = new exports.ZodCustom({
        type: "custom",
        check: "custom",
        fn: (data) => data instanceof cls,
        abort: true,
        ...index_js_1.util.normalizeParams(params),
    });
    inst._zod.bag.Class = cls;
    return inst;
}
// stringbool
const stringbool = (...args) => core._stringbool({
    Pipe: exports.ZodPipe,
    Boolean: exports.ZodBoolean,
    String: exports.ZodString,
    Transform: exports.ZodTransform,
}, ...args);
exports.stringbool = stringbool;
function json(params) {
    const jsonSchema = lazy(() => {
        return union([string(params), number(), boolean(), _null(), array(jsonSchema), record(string(), jsonSchema)]);
    });
    return jsonSchema;
}
// preprocess
// /** @deprecated Use `z.pipe()` and `z.transform()` instead. */
function preprocess(fn, schema) {
    return pipe(transform(fn), schema);
}
