"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectParser = void 0;
const zod_1 = require("zod");
const any_js_1 = require("./parsers/any.js");
const array_js_1 = require("./parsers/array.js");
const bigint_js_1 = require("./parsers/bigint.js");
const boolean_js_1 = require("./parsers/boolean.js");
const branded_js_1 = require("./parsers/branded.js");
const catch_js_1 = require("./parsers/catch.js");
const date_js_1 = require("./parsers/date.js");
const default_js_1 = require("./parsers/default.js");
const effects_js_1 = require("./parsers/effects.js");
const enum_js_1 = require("./parsers/enum.js");
const intersection_js_1 = require("./parsers/intersection.js");
const literal_js_1 = require("./parsers/literal.js");
const map_js_1 = require("./parsers/map.js");
const nativeEnum_js_1 = require("./parsers/nativeEnum.js");
const never_js_1 = require("./parsers/never.js");
const null_js_1 = require("./parsers/null.js");
const nullable_js_1 = require("./parsers/nullable.js");
const number_js_1 = require("./parsers/number.js");
const object_js_1 = require("./parsers/object.js");
const optional_js_1 = require("./parsers/optional.js");
const pipeline_js_1 = require("./parsers/pipeline.js");
const promise_js_1 = require("./parsers/promise.js");
const record_js_1 = require("./parsers/record.js");
const set_js_1 = require("./parsers/set.js");
const string_js_1 = require("./parsers/string.js");
const tuple_js_1 = require("./parsers/tuple.js");
const undefined_js_1 = require("./parsers/undefined.js");
const union_js_1 = require("./parsers/union.js");
const unknown_js_1 = require("./parsers/unknown.js");
const readonly_js_1 = require("./parsers/readonly.js");
const selectParser = (def, typeName, refs) => {
    switch (typeName) {
        case zod_1.ZodFirstPartyTypeKind.ZodString:
            return (0, string_js_1.parseStringDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodNumber:
            return (0, number_js_1.parseNumberDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodObject:
            return (0, object_js_1.parseObjectDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodBigInt:
            return (0, bigint_js_1.parseBigintDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodBoolean:
            return (0, boolean_js_1.parseBooleanDef)();
        case zod_1.ZodFirstPartyTypeKind.ZodDate:
            return (0, date_js_1.parseDateDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodUndefined:
            return (0, undefined_js_1.parseUndefinedDef)(refs);
        case zod_1.ZodFirstPartyTypeKind.ZodNull:
            return (0, null_js_1.parseNullDef)(refs);
        case zod_1.ZodFirstPartyTypeKind.ZodArray:
            return (0, array_js_1.parseArrayDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodUnion:
        case zod_1.ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
            return (0, union_js_1.parseUnionDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodIntersection:
            return (0, intersection_js_1.parseIntersectionDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodTuple:
            return (0, tuple_js_1.parseTupleDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodRecord:
            return (0, record_js_1.parseRecordDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodLiteral:
            return (0, literal_js_1.parseLiteralDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodEnum:
            return (0, enum_js_1.parseEnumDef)(def);
        case zod_1.ZodFirstPartyTypeKind.ZodNativeEnum:
            return (0, nativeEnum_js_1.parseNativeEnumDef)(def);
        case zod_1.ZodFirstPartyTypeKind.ZodNullable:
            return (0, nullable_js_1.parseNullableDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodOptional:
            return (0, optional_js_1.parseOptionalDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodMap:
            return (0, map_js_1.parseMapDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodSet:
            return (0, set_js_1.parseSetDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodLazy:
            return () => def.getter()._def;
        case zod_1.ZodFirstPartyTypeKind.ZodPromise:
            return (0, promise_js_1.parsePromiseDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodNaN:
        case zod_1.ZodFirstPartyTypeKind.ZodNever:
            return (0, never_js_1.parseNeverDef)(refs);
        case zod_1.ZodFirstPartyTypeKind.ZodEffects:
            return (0, effects_js_1.parseEffectsDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodAny:
            return (0, any_js_1.parseAnyDef)(refs);
        case zod_1.ZodFirstPartyTypeKind.ZodUnknown:
            return (0, unknown_js_1.parseUnknownDef)(refs);
        case zod_1.ZodFirstPartyTypeKind.ZodDefault:
            return (0, default_js_1.parseDefaultDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodBranded:
            return (0, branded_js_1.parseBrandedDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodReadonly:
            return (0, readonly_js_1.parseReadonlyDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodCatch:
            return (0, catch_js_1.parseCatchDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodPipeline:
            return (0, pipeline_js_1.parsePipelineDef)(def, refs);
        case zod_1.ZodFirstPartyTypeKind.ZodFunction:
        case zod_1.ZodFirstPartyTypeKind.ZodVoid:
        case zod_1.ZodFirstPartyTypeKind.ZodSymbol:
            return undefined;
        default:
            /* c8 ignore next */
            return ((_) => undefined)(typeName);
    }
};
exports.selectParser = selectParser;
