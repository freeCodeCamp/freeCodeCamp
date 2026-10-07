// deno-fmt-ignore-file
import * as Type from '../../type/index.mjs';
import { FromArray } from './from_array.mjs';
import { FromBase } from './from_base.mjs';
import { FromBigInt } from './from_bigint.mjs';
import { FromBoolean } from './from_boolean.mjs';
import { FromCyclic } from './from_cyclic.mjs';
import { FromEnum } from './from_enum.mjs';
import { FromInteger } from './from_integer.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromLiteral } from './from_literal.mjs';
import { FromNull } from './from_null.mjs';
import { FromNumber } from './from_number.mjs';
import { FromObject } from './from_object.mjs';
import { FromRecord } from './from_record.mjs';
import { FromRef } from './from_ref.mjs';
import { FromString } from './from_string.mjs';
import { FromTemplateLiteral } from './from_template_literal.mjs';
import { FromTuple } from './from_tuple.mjs';
import { FromUndefined } from './from_undefined.mjs';
import { FromUnion } from './from_union.mjs';
import { FromVoid } from './from_void.mjs';
export function FromType(context, type, value) {
    return (Type.IsArray(type) ? FromArray(context, type, value) :
        Type.IsBase(type) ? FromBase(context, type, value) :
            Type.IsBigInt(type) ? FromBigInt(context, type, value) :
                Type.IsBoolean(type) ? FromBoolean(context, type, value) :
                    Type.IsCyclic(type) ? FromCyclic(context, type, value) :
                        Type.IsEnum(type) ? FromEnum(context, type, value) :
                            Type.IsInteger(type) ? FromInteger(context, type, value) :
                                Type.IsIntersect(type) ? FromIntersect(context, type, value) :
                                    Type.IsLiteral(type) ? FromLiteral(context, type, value) :
                                        Type.IsNull(type) ? FromNull(context, type, value) :
                                            Type.IsNumber(type) ? FromNumber(context, type, value) :
                                                Type.IsObject(type) ? FromObject(context, type, value) :
                                                    Type.IsRecord(type) ? FromRecord(context, type, value) :
                                                        Type.IsRef(type) ? FromRef(context, type, value) :
                                                            Type.IsString(type) ? FromString(context, type, value) :
                                                                Type.IsTemplateLiteral(type) ? FromTemplateLiteral(context, type, value) :
                                                                    Type.IsTuple(type) ? FromTuple(context, type, value) :
                                                                        Type.IsUndefined(type) ? FromUndefined(context, type, value) :
                                                                            Type.IsUnion(type) ? FromUnion(context, type, value) :
                                                                                Type.IsVoid(type) ? FromVoid(context, type, value) :
                                                                                    value);
}
