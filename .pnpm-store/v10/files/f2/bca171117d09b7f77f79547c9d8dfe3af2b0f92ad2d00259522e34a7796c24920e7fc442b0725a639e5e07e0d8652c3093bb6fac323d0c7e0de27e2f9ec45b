import { type TUnreachable } from '../../system/unreachable/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { type TSchema } from '../types/schema.mjs';
import { type TArray } from '../types/array.mjs';
import { type TUnknown } from '../types/unknown.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TTuple } from '../types/tuple.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import { type TUnion } from '../types/union.mjs';
import { type TInfer } from '../types/infer.mjs';
import { type TRest } from '../types/rest.mjs';
import * as Result from './result.mjs';
export interface TInferable<Name extends string = string, Type extends TSchema = TSchema> {
    '~kind': 'Inferrable';
    name: Name;
    type: Type;
}
export declare function Inferrable<Name extends string, Type extends TSchema = TSchema>(name: Name, type: Type): never;
export declare function IsInferable(value: unknown): value is TInferable;
export type TTryRestInferable<Type extends TSchema, Result extends TInferable | undefined = (Type extends TRest<infer RestType extends TSchema> ? RestType extends TInfer<infer Name extends string, infer Type extends TSchema> ? Type extends TArray<infer Type extends TSchema> ? TInferable<Name, Type> : Type extends TUnknown ? TInferable<Name, Type> : undefined : TUnreachable : undefined)> = Result;
export declare function TryRestInferable<Type extends TSchema>(type: Type): TTryRestInferable<Type>;
export type TTryInferable<Type extends TSchema, Result extends TInferable | undefined = (Type extends TInfer<infer Name extends string, infer Type extends TSchema> ? TInferable<Name, Type> : undefined)> = Result;
export declare function TryInferable<Type extends TSchema>(type: Type): TTryInferable<Type>;
type TryInferResults<Rest extends TSchema[], Right extends TSchema, Result extends TSchema[] = []> = (Rest extends [infer Head extends TSchema, ...infer Tail extends TSchema[]] ? TExtendsLeft<{}, Head, Right> extends Result.TExtendsTrueLike ? TryInferResults<Tail, Right, [...Result, Head]> : undefined : Result);
declare function TryInferResults<Rest extends TSchema[], Right extends TSchema>(rest: [...Rest], right: Right, result?: TSchema[]): TryInferResults<Rest, Right>;
export type TInferTupleResult<Inferred extends TProperties, Name extends string, Left extends TSchema[], Right extends TSchema, Results extends TSchema[] | undefined = TryInferResults<Left, Right>> = (Results extends [...infer Results extends TSchema[]] ? Result.TExtendsTrue<Memory.TAssign<Inferred, {
    [_ in Name]: TTuple<Results>;
}>> : Result.TExtendsFalse);
export declare function InferTupleResult<Inferred extends TProperties, Name extends string, Left extends TSchema[], Right extends TSchema>(inferred: Inferred, name: Name, left: Left, right: Right): TInferTupleResult<Inferred, Name, Left, Right>;
export type TInferUnionResult<Inferred extends TProperties, Name extends string, Left extends TSchema[], Right extends TSchema, Results extends TSchema[] | undefined = TryInferResults<Left, Right>> = (Results extends [...infer Results extends TSchema[]] ? Result.TExtendsTrue<Memory.TAssign<Inferred, {
    [_ in Name]: TUnion<Results>;
}>> : Result.TExtendsFalse);
export declare function InferUnionResult<Inferred extends TProperties, Name extends string, Left extends TSchema[], Right extends TSchema>(inferred: Inferred, name: Name, left: Left, right: Right): TInferUnionResult<Inferred, Name, Left, Right>;
export {};
