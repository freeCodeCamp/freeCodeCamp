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
type TFromRef<Stack extends string[], Context extends TProperties, Ref extends string> = Ref extends Stack[number] ? true : TFromType<[...Stack, Ref], Context, Context[Ref]>;
type TFromProperties<Stack extends string[], Context extends TProperties, Properties extends TProperties, Types extends TSchema[] = TPropertyValues<Properties>> = TFromTypes<Stack, Context, Types>;
type TFromTypes<Stack extends string[], Context extends TProperties, Types extends TSchema[]> = Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromType<Stack, Context, Left> extends true ? true : TFromTypes<Stack, Context, Right> : false;
type TFromType<Stack extends string[], Context extends TProperties, Type extends TSchema> = (Type extends TRef<infer Ref extends string> ? TFromRef<Stack, Context, Ref> : Type extends TArray<infer Type extends TSchema> ? TFromType<Stack, Context, Type> : Type extends TAsyncIterator<infer Type extends TSchema> ? TFromType<Stack, Context, Type> : Type extends TConstructor<infer Parameters extends TSchema[], infer InstanceType extends TSchema> ? TFromTypes<Stack, Context, [...Parameters, InstanceType]> : Type extends TFunction<infer Parameters extends TSchema[], infer ReturnType extends TSchema> ? TFromTypes<Stack, Context, [...Parameters, ReturnType]> : Type extends TInterfaceDeferred<TSchema[], infer Properties extends TProperties> ? TFromProperties<Stack, Context, Properties> : Type extends TIntersect<infer Types extends TSchema[]> ? TFromTypes<Stack, Context, Types> : Type extends TIterator<infer Type extends TSchema> ? TFromType<Stack, Context, Type> : Type extends TObject<infer Properties extends TProperties> ? TFromProperties<Stack, Context, Properties> : Type extends TPromise<infer Type extends TSchema> ? TFromType<Stack, Context, Type> : Type extends TUnion<infer Types extends TSchema[]> ? TFromTypes<Stack, Context, Types> : Type extends TTuple<infer Types extends TSchema[]> ? TFromTypes<Stack, Context, Types> : Type extends TRecord<string, infer Type extends TSchema> ? TFromType<Stack, Context, Type> : false);
/** Performs a cyclic check on the given type. Initial key stack can be empty, but faster if specified */
export type TCyclicCheck<Stack extends string[], Context extends TProperties, Type extends TSchema, Result extends boolean = TFromType<Stack, Context, Type>> = Result;
/** Performs a cyclic check on the given type. Initial key stack can be empty, but faster if specified */
export declare function CyclicCheck<Stack extends string[], Context extends TProperties, Type extends TSchema>(stack: [...Stack], context: Context, type: Type): TCyclicCheck<Stack, Context, Type>;
export {};
