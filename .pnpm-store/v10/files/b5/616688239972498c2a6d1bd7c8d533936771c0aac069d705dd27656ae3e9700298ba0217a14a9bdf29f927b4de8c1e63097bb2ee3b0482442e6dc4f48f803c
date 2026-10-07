import { ZodFirstPartyTypeKind } from "zod";
import { parseAnyDef } from "./parsers/any.js";
import { parseArrayDef } from "./parsers/array.js";
import { parseBigintDef } from "./parsers/bigint.js";
import { parseBooleanDef } from "./parsers/boolean.js";
import { parseBrandedDef } from "./parsers/branded.js";
import { parseCatchDef } from "./parsers/catch.js";
import { parseDateDef } from "./parsers/date.js";
import { parseDefaultDef } from "./parsers/default.js";
import { parseEffectsDef } from "./parsers/effects.js";
import { parseEnumDef } from "./parsers/enum.js";
import { parseIntersectionDef } from "./parsers/intersection.js";
import { parseLiteralDef } from "./parsers/literal.js";
import { parseMapDef } from "./parsers/map.js";
import { parseNativeEnumDef } from "./parsers/nativeEnum.js";
import { parseNeverDef } from "./parsers/never.js";
import { parseNullDef } from "./parsers/null.js";
import { parseNullableDef } from "./parsers/nullable.js";
import { parseNumberDef } from "./parsers/number.js";
import { parseObjectDef } from "./parsers/object.js";
import { parseOptionalDef } from "./parsers/optional.js";
import { parsePipelineDef } from "./parsers/pipeline.js";
import { parsePromiseDef } from "./parsers/promise.js";
import { parseRecordDef } from "./parsers/record.js";
import { parseSetDef } from "./parsers/set.js";
import { parseStringDef } from "./parsers/string.js";
import { parseTupleDef } from "./parsers/tuple.js";
import { parseUndefinedDef } from "./parsers/undefined.js";
import { parseUnionDef } from "./parsers/union.js";
import { parseUnknownDef } from "./parsers/unknown.js";
import { parseReadonlyDef } from "./parsers/readonly.js";
export const selectParser = (def, typeName, refs) => {
    switch (typeName) {
        case ZodFirstPartyTypeKind.ZodString:
            return parseStringDef(def, refs);
        case ZodFirstPartyTypeKind.ZodNumber:
            return parseNumberDef(def, refs);
        case ZodFirstPartyTypeKind.ZodObject:
            return parseObjectDef(def, refs);
        case ZodFirstPartyTypeKind.ZodBigInt:
            return parseBigintDef(def, refs);
        case ZodFirstPartyTypeKind.ZodBoolean:
            return parseBooleanDef();
        case ZodFirstPartyTypeKind.ZodDate:
            return parseDateDef(def, refs);
        case ZodFirstPartyTypeKind.ZodUndefined:
            return parseUndefinedDef(refs);
        case ZodFirstPartyTypeKind.ZodNull:
            return parseNullDef(refs);
        case ZodFirstPartyTypeKind.ZodArray:
            return parseArrayDef(def, refs);
        case ZodFirstPartyTypeKind.ZodUnion:
        case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
            return parseUnionDef(def, refs);
        case ZodFirstPartyTypeKind.ZodIntersection:
            return parseIntersectionDef(def, refs);
        case ZodFirstPartyTypeKind.ZodTuple:
            return parseTupleDef(def, refs);
        case ZodFirstPartyTypeKind.ZodRecord:
            return parseRecordDef(def, refs);
        case ZodFirstPartyTypeKind.ZodLiteral:
            return parseLiteralDef(def, refs);
        case ZodFirstPartyTypeKind.ZodEnum:
            return parseEnumDef(def);
        case ZodFirstPartyTypeKind.ZodNativeEnum:
            return parseNativeEnumDef(def);
        case ZodFirstPartyTypeKind.ZodNullable:
            return parseNullableDef(def, refs);
        case ZodFirstPartyTypeKind.ZodOptional:
            return parseOptionalDef(def, refs);
        case ZodFirstPartyTypeKind.ZodMap:
            return parseMapDef(def, refs);
        case ZodFirstPartyTypeKind.ZodSet:
            return parseSetDef(def, refs);
        case ZodFirstPartyTypeKind.ZodLazy:
            return () => def.getter()._def;
        case ZodFirstPartyTypeKind.ZodPromise:
            return parsePromiseDef(def, refs);
        case ZodFirstPartyTypeKind.ZodNaN:
        case ZodFirstPartyTypeKind.ZodNever:
            return parseNeverDef(refs);
        case ZodFirstPartyTypeKind.ZodEffects:
            return parseEffectsDef(def, refs);
        case ZodFirstPartyTypeKind.ZodAny:
            return parseAnyDef(refs);
        case ZodFirstPartyTypeKind.ZodUnknown:
            return parseUnknownDef(refs);
        case ZodFirstPartyTypeKind.ZodDefault:
            return parseDefaultDef(def, refs);
        case ZodFirstPartyTypeKind.ZodBranded:
            return parseBrandedDef(def, refs);
        case ZodFirstPartyTypeKind.ZodReadonly:
            return parseReadonlyDef(def, refs);
        case ZodFirstPartyTypeKind.ZodCatch:
            return parseCatchDef(def, refs);
        case ZodFirstPartyTypeKind.ZodPipeline:
            return parsePipelineDef(def, refs);
        case ZodFirstPartyTypeKind.ZodFunction:
        case ZodFirstPartyTypeKind.ZodVoid:
        case ZodFirstPartyTypeKind.ZodSymbol:
            return undefined;
        default:
            /* c8 ignore next */
            return ((_) => undefined)(typeName);
    }
};
