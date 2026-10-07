import { type TUnreachable } from '../../../system/unreachable/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TArray } from '../../types/array.mjs';
import { type TAsyncIterator } from '../../types/async_iterator.mjs';
import { type TConstructor } from '../../types/constructor.mjs';
import { type TFunction } from '../../types/function.mjs';
import { type TIntersect } from '../../types/intersect.mjs';
import { type TIterator } from '../../types/iterator.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TPromise } from '../../types/promise.mjs';
import { type TProperties, type TPropertyValues } from '../../types/properties.mjs';
import { type TRecord } from '../../types/record.mjs';
import { type TTuple } from '../../types/tuple.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TRef } from '../../types/ref.mjs';
import { type TInterfaceDeferred } from '../../action/interface.mjs';
type TFromRef<Context extends TProperties, Ref extends string, Dependencies extends string[]> = Ref extends Dependencies[number] ? Dependencies : Ref extends keyof Context ? TFromType<Context, Context[Ref], [...Dependencies, Ref]> : TUnreachable;
type TFromProperties<Context extends TProperties, Properties extends TProperties, Dependencies extends string[], Types extends TSchema[] = TPropertyValues<Properties>> = TFromTypes<Context, Types, Dependencies>;
type TFromTypes<Context extends TProperties, Types extends TSchema[], Dependencies extends string[]> = Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromTypes<Context, Right, TFromType<Context, Left, Dependencies>> : Dependencies;
type TFromType<Context extends TProperties, Type extends TSchema, Result extends string[]> = (Type extends TRef<infer Ref extends string> ? TFromRef<Context, Ref, Result> : Type extends TArray<infer Type extends TSchema> ? TFromType<Context, Type, Result> : Type extends TAsyncIterator<infer Type extends TSchema> ? TFromType<Context, Type, Result> : Type extends TConstructor<infer Parameters extends TSchema[], infer InstanceType extends TSchema> ? TFromTypes<Context, [...Parameters, InstanceType], Result> : Type extends TFunction<infer Parameters extends TSchema[], infer ReturnType extends TSchema> ? TFromTypes<Context, [...Parameters, ReturnType], Result> : Type extends TInterfaceDeferred<TSchema[], infer Properties extends TProperties> ? TFromProperties<Context, Properties, Result> : Type extends TIntersect<infer Types extends TSchema[]> ? TFromTypes<Context, Types, Result> : Type extends TIterator<infer Type extends TSchema> ? TFromType<Context, Type, Result> : Type extends TObject<infer Properties extends TProperties> ? TFromProperties<Context, Properties, Result> : Type extends TPromise<infer Type extends TSchema> ? TFromType<Context, Type, Result> : Type extends TUnion<infer Types extends TSchema[]> ? TFromTypes<Context, Types, Result> : Type extends TTuple<infer Types extends TSchema[]> ? TFromTypes<Context, Types, Result> : Type extends TRecord<string, infer Type extends TSchema> ? TFromType<Context, Type, Result> : Result);
/** Returns dependent cyclic keys for the given type. This function is used to dead-type-eliminate (DTE) for initializing TCyclic types. */
export type TCyclicDependencies<Context extends TProperties, Key extends string, Type extends TSchema, Result extends string[] = TFromType<Context, Type, [Key]>> = Result;
/** Returns dependent cyclic keys for the given type. This function is used to dead-type-eliminate (DTE) for initializing TCyclic types. */
export declare function CyclicDependencies<Context extends TProperties, Key extends string, Type extends TSchema>(context: Context, key: Key, type: Type): TCyclicDependencies<Context, Key, Type>;
export {};
