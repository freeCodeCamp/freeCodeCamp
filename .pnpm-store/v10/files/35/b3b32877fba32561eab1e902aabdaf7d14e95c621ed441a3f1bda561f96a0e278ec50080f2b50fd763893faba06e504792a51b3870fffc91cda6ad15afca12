import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TTupleOptions } from './schema.mjs';
import { type TArray } from './array.mjs';
import { type TOptional } from './_optional.mjs';
import { type TProperties } from './properties.mjs';
import { type TImmutable } from './_immutable.mjs';
import { type TReadonly } from './_readonly.mjs';
import { type TRest } from './rest.mjs';
type StaticLast<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Type extends TSchema, Result extends unknown[]> = (Type extends TRest<infer RestType extends TSchema> ? RestType extends TArray<infer ArrayType extends TSchema> ? [...Result, ...TStaticElement<Stack, Direction, Context, This, ArrayType>[0][]] : [...Result, never] : [...Result, ...TStaticElement<Stack, Direction, Context, This, Type>]);
type TStaticElement<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Type extends TSchema, IsReadonly extends boolean = Type extends TReadonly ? true : false, IsOptional extends boolean = Type extends TOptional ? true : false, Inferred extends unknown = StaticType<Stack, Direction, Context, This, Type>, Result extends [unknown?] = ([
    IsReadonly,
    IsOptional
] extends [true, true] ? [Readonly<Inferred>?] : [
    IsReadonly,
    IsOptional
] extends [false, true] ? [Inferred?] : [
    IsReadonly,
    IsOptional
] extends [true, false] ? [Readonly<Inferred>] : [
    Inferred
])> = Result;
export type TStaticElements<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Types extends TSchema[], Result extends unknown[] = []> = (Types extends [infer Last extends TSchema] ? StaticLast<Stack, Direction, Context, This, Last, Result> : Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TStaticElements<Stack, Direction, Context, This, Right, [...Result, ...TStaticElement<Stack, Direction, Context, This, Left>]> : Result);
export type StaticTuple<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Tuple extends TSchema, Items extends TSchema[], Elements extends unknown[] = TStaticElements<Stack, Direction, Context, This, Items>, Result extends readonly unknown[] = (Tuple extends TImmutable ? readonly [...Elements] : Elements)> = Result;
/** Represents a Tuple type. */
export interface TTuple<Types extends TSchema[] = TSchema[]> extends TSchema {
    '~kind': 'Tuple';
    type: 'array';
    additionalItems: false;
    items: Types;
    minItems: Types['length'];
}
/** Creates a Tuple type. */
export declare function Tuple<Types extends TSchema[]>(types: [...Types], options?: TTupleOptions): TTuple<Types>;
/** Returns true if the given value is TTuple. */
export declare function IsTuple(value: unknown): value is TTuple;
/** Extracts options from a TTuple. */
export declare function TupleOptions(type: TTuple): TTupleOptions;
export {};
