import type { StaticCodec, TCodec } from './_codec.mjs';
import type { StaticAny, TAny } from './any.mjs';
import type { StaticArray, TArray } from './array.mjs';
import type { StaticAsyncIterator, TAsyncIterator } from './async_iterator.mjs';
import type { StaticBase, Base } from './base.mjs';
import type { StaticBigInt, TBigInt } from './bigint.mjs';
import type { StaticBoolean, TBoolean } from './boolean.mjs';
import type { StaticConstructor, TConstructor } from './constructor.mjs';
import type { StaticCyclic, TCyclic } from './cyclic.mjs';
import type { StaticEnum, TEnum, TEnumValue } from './enum.mjs';
import type { StaticFunction, TFunction } from './function.mjs';
import type { StaticInteger, TInteger } from './integer.mjs';
import type { StaticIntersect, TIntersect } from './intersect.mjs';
import type { StaticIterator, TIterator } from './iterator.mjs';
import type { StaticLiteral, TLiteral, TLiteralValue } from './literal.mjs';
import type { StaticNever, TNever } from './never.mjs';
import type { StaticNull, TNull } from './null.mjs';
import type { StaticNumber, TNumber } from './number.mjs';
import type { StaticObject, TObject } from './object.mjs';
import type { StaticPromise, TPromise } from './promise.mjs';
import type { TProperties } from './properties.mjs';
import type { StaticRecord, TRecord } from './record.mjs';
import type { StaticRef, TRef } from './ref.mjs';
import type { TSchema } from './schema.mjs';
import type { StaticString, TString } from './string.mjs';
import type { StaticSymbol, TSymbol } from './symbol.mjs';
import type { StaticTemplateLiteral, TTemplateLiteral } from './template_literal.mjs';
import type { StaticThis, TThis } from './this.mjs';
import type { StaticTuple, TTuple } from './tuple.mjs';
import type { StaticUndefined, TUndefined } from './undefined.mjs';
import type { StaticUnion, TUnion } from './union.mjs';
import type { StaticUnknown, TUnknown } from './unknown.mjs';
import type { StaticUnsafe, TUnsafe } from './unsafe.mjs';
import type { StaticVoid, TVoid } from './void.mjs';
import type { XStatic } from '../../schema/static/static.mjs';
export type StaticEvaluate<T> = {
    [K in keyof T]: T[K];
} & {};
export type StaticDirection = 'Encode' | 'Decode';
export type StaticType<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Type extends TSchema> = (Type extends TCodec<infer Type extends TSchema, infer Decoded extends unknown> ? StaticCodec<Stack, Direction, Context, This, Type, Decoded> : Type extends TAny ? StaticAny : Type extends TArray<infer Items extends TSchema> ? StaticArray<Stack, Direction, Context, This, Type, Items> : Type extends TAsyncIterator<infer Type extends TSchema> ? StaticAsyncIterator<Stack, Direction, Context, This, Type> : Type extends Base<infer Value extends unknown> ? StaticBase<Value> : Type extends TBigInt ? StaticBigInt : Type extends TBoolean ? StaticBoolean : Type extends TConstructor<infer Parameters extends TSchema[], infer ReturnType extends TSchema> ? StaticConstructor<Stack, Direction, Context, This, Parameters, ReturnType> : Type extends TEnum<infer Values extends TEnumValue[]> ? StaticEnum<Values> : Type extends TFunction<infer Parameters extends TSchema[], infer ReturnType extends TSchema> ? StaticFunction<Stack, Direction, Context, This, Parameters, ReturnType> : Type extends TInteger ? StaticInteger : Type extends TIntersect<infer Types extends TSchema[]> ? StaticIntersect<Stack, Direction, Context, This, Types> : Type extends TIterator<infer Types extends TSchema> ? StaticIterator<Stack, Direction, Context, This, Types> : Type extends TLiteral<infer Value extends TLiteralValue> ? StaticLiteral<Value> : Type extends TNever ? StaticNever : Type extends TNull ? StaticNull : Type extends TNumber ? StaticNumber : Type extends TObject<infer Properties extends TProperties> ? StaticObject<Stack, Direction, Context, This, Properties> : Type extends TPromise<infer Type extends TSchema> ? StaticPromise<Stack, Direction, Context, This, Type> : Type extends TRecord<infer Key extends string, infer Value extends TSchema> ? StaticRecord<Stack, Direction, Context, This, Key, Value> : Type extends TCyclic<infer Defs extends TProperties, infer Ref extends string> ? StaticCyclic<Stack, Direction, Context, This, Defs, Ref> : Type extends TRef<infer Ref extends string> ? StaticRef<Stack, Direction, Context, This, Ref> : Type extends TString ? StaticString : Type extends TSymbol ? StaticSymbol : Type extends TTemplateLiteral<infer Pattern extends string> ? StaticTemplateLiteral<Pattern> : Type extends TThis ? StaticThis<Stack, Direction, Context, This> : Type extends TTuple<infer Items extends TSchema[]> ? StaticTuple<Stack, Direction, Context, This, Type, Items> : Type extends TUndefined ? StaticUndefined : Type extends TUnion<infer Types extends TSchema[]> ? StaticUnion<Stack, Direction, Context, This, Types> : Type extends TUnknown ? StaticUnknown : Type extends TUnsafe<infer Type extends unknown> ? StaticUnsafe<Type> : Type extends TVoid ? StaticVoid : XStatic<Type>);
/** Infers a static type from a TypeBox type using Parse logic. */
export type StaticParse<Type extends TSchema, Context extends TProperties = {}, Result extends unknown = StaticType<[], 'Encode', Context, {}, Type>> = Result;
/** Infers a static type from a TypeBox type using Decode logic. */
export type StaticDecode<Type extends TSchema, Context extends TProperties = {}, Result extends unknown = StaticType<[], 'Decode', Context, {}, Type>> = Result;
/** Infers a static type from a TypeBox type using Encode logic. */
export type StaticEncode<Type extends TSchema, Context extends TProperties = {}, Result extends unknown = StaticType<[], 'Encode', Context, {}, Type>> = Result;
/** Infers a static type from a TypeBox type. */
export type Static<Type extends TSchema, Context extends TProperties = {}, Result extends unknown = StaticType<[], 'Encode', Context, {}, Type>> = Result;
