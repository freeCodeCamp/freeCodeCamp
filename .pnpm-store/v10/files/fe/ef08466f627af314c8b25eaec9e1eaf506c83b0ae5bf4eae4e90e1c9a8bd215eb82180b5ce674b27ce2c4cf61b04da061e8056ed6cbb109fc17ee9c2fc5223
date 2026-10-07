// deno-fmt-ignore-file
import * as T from '../../type/index.mjs';
import * as S from '../../schema/types/index.mjs';
import { FromDefault } from './from_default.mjs';
import { FromArray } from './from_array.mjs';
import { FromAsyncIterator } from './from_async_iterator.mjs';
import { FromBase } from './from_base.mjs';
import { FromBigInt } from './from_bigint.mjs';
import { FromBoolean } from './from_boolean.mjs';
import { FromConstructor } from './from_constructor.mjs';
import { FromCyclic } from './from_cyclic.mjs';
import { FromEnum } from './from_enum.mjs';
import { FromFunction } from './from_function.mjs';
import { FromInteger } from './from_integer.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromIterator } from './from_iterator.mjs';
import { FromLiteral } from './from_literal.mjs';
import { FromNever } from './from_never.mjs';
import { FromNull } from './from_null.mjs';
import { FromNumber } from './from_number.mjs';
import { FromObject } from './from_object.mjs';
import { FromPromise } from './from_promise.mjs';
import { FromRecord } from './from_record.mjs';
import { FromRef } from './from_ref.mjs';
import { FromString } from './from_string.mjs';
import { FromSymbol } from './from_symbol.mjs';
import { FromTemplateLiteral } from './from_template_literal.mjs';
import { FromTuple } from './from_tuple.mjs';
import { FromUndefined } from './from_undefined.mjs';
import { FromUnion } from './from_union.mjs';
import { FromVoid } from './from_void.mjs';
export function FromType(context, type) {
    return (
    // -----------------------------------------------------
    // Default
    // -----------------------------------------------------
    S.IsDefault(type) ? FromDefault(context, type) :
        // -----------------------------------------------------
        // Types
        // -----------------------------------------------------
        T.IsArray(type) ? FromArray(context, type) :
            T.IsAsyncIterator(type) ? FromAsyncIterator(context, type) :
                T.IsBase(type) ? FromBase(context, type) :
                    T.IsBigInt(type) ? FromBigInt(context, type) :
                        T.IsBoolean(type) ? FromBoolean(context, type) :
                            T.IsConstructor(type) ? FromConstructor(context, type) :
                                T.IsCyclic(type) ? FromCyclic(context, type) :
                                    T.IsEnum(type) ? FromEnum(context, type) :
                                        T.IsFunction(type) ? FromFunction(context, type) :
                                            T.IsInteger(type) ? FromInteger(context, type) :
                                                T.IsIntersect(type) ? FromIntersect(context, type) :
                                                    T.IsIterator(type) ? FromIterator(context, type) :
                                                        T.IsLiteral(type) ? FromLiteral(context, type) :
                                                            T.IsNever(type) ? FromNever(context, type) :
                                                                T.IsNull(type) ? FromNull(context, type) :
                                                                    T.IsNumber(type) ? FromNumber(context, type) :
                                                                        T.IsObject(type) ? FromObject(context, type) :
                                                                            T.IsPromise(type) ? FromPromise(context, type) :
                                                                                T.IsRecord(type) ? FromRecord(context, type) :
                                                                                    T.IsRef(type) ? FromRef(context, type) :
                                                                                        T.IsString(type) ? FromString(context, type) :
                                                                                            T.IsSymbol(type) ? FromSymbol(context, type) :
                                                                                                T.IsTemplateLiteral(type) ? FromTemplateLiteral(context, type) :
                                                                                                    T.IsTuple(type) ? FromTuple(context, type) :
                                                                                                        T.IsUndefined(type) ? FromUndefined(context, type) :
                                                                                                            T.IsUnion(type) ? FromUnion(context, type) :
                                                                                                                T.IsVoid(type) ? FromVoid(context, type) :
                                                                                                                    undefined);
}
