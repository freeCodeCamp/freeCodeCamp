// deno-fmt-ignore-file
import { Guard, GlobalsGuard } from '../../guard/index.mjs';
import * as T from '../../type/index.mjs';
import { Check } from '../check/index.mjs';
import { Create } from '../create/index.mjs';
import { FromArray } from './from_array.mjs';
import { FromBase } from './from_base.mjs';
import { FromEnum } from './from_enum.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromObject } from './from_object.mjs';
import { FromRecord } from './from_record.mjs';
import { FromRef } from './from_ref.mjs';
import { FromTemplateLiteral } from './from_template_literal.mjs';
import { FromTuple } from './from_tuple.mjs';
import { FromUnion } from './from_union.mjs';
import { FromUnknown } from './from_unknown.mjs';
import { RepairError } from './error.mjs';
// ------------------------------------------------------------------
// AssertRepairableValue
// ------------------------------------------------------------------
function AssertRepairableValue(context, type, value) {
    const unsupported = GlobalsGuard.IsDate(value)
        || GlobalsGuard.IsMap(value)
        || GlobalsGuard.IsSet(value)
        || GlobalsGuard.IsTypeArray(value)
        || Guard.IsConstructor(value)
        || Guard.IsFunction(value);
    if (unsupported) {
        throw new RepairError(context, type, value, 'Value is not repairable');
    }
}
// ------------------------------------------------------------------
// AssertRepairableType
// ------------------------------------------------------------------
function AssertRepairableType(context, type, value) {
    const unsupported = T.IsAsyncIterator(type)
        || T.IsIterator(type)
        || T.IsConstructor(type)
        || T.IsFunction(type)
        || T.IsNever(type)
        || T.IsPromise(type);
    if (unsupported) {
        throw new RepairError(context, type, value, 'Type is not repairable');
    }
}
// ------------------------------------------------------------------
// FinalizeRepair
//
// When a type includes the ~refine modifier, a post-repair validation
// check must be performed to ensure the repaired value satisfies the
// refine constraint. This logic is implemented as part of FromType to
// ensure the post-refine validation check is handled outside of
// sub-schema constraint checking (i.e., at the top level).
//
// ------------------------------------------------------------------
function FinalizeRepair(context, type, repaired) {
    return T.IsRefine(type)
        ? Check(context, type, repaired)
            ? repaired
            : Create(context, type)
        : repaired;
}
// ------------------------------------------------------------------
// FromType
// ------------------------------------------------------------------
export function FromType(context, type, value) {
    // Base Repair
    if (T.IsBase(type)) {
        const repaired = FromBase(context, type, value);
        return FinalizeRepair(context, type, repaired);
    }
    // Schema Repair
    AssertRepairableValue(context, type, value);
    AssertRepairableType(context, type, value);
    const repaired = (T.IsArray(type) ? FromArray(context, type, value) :
        T.IsEnum(type) ? FromEnum(context, type, value) :
            T.IsIntersect(type) ? FromIntersect(context, type, value) :
                T.IsObject(type) ? FromObject(context, type, value) :
                    T.IsRecord(type) ? FromRecord(context, type, value) :
                        T.IsRef(type) ? FromRef(context, type, value) :
                            T.IsTemplateLiteral(type) ? FromTemplateLiteral(context, type, value) :
                                T.IsTuple(type) ? FromTuple(context, type, value) :
                                    T.IsUnion(type) ? FromUnion(context, type, value) :
                                        FromUnknown(context, type, value));
    return FinalizeRepair(context, type, repaired);
}
