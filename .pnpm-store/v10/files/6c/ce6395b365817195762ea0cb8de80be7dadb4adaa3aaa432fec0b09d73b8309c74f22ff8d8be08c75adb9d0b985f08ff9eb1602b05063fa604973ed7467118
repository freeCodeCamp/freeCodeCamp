import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TMappingType } from './mapping.mjs';
import { type TFromType } from './from_type.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
import { type TCapitalizeDeferred } from '../../action/capitalize.mjs';
import { type TLowercaseDeferred } from '../../action/lowercase.mjs';
import { type TUncapitalizeDeferred } from '../../action/uncapitalize.mjs';
import { type TUppercaseDeferred } from '../../action/uppercase.mjs';
interface TCapitalizeMapping extends TMappingType {
    output: Capitalize<this['input']>;
}
interface TLowercaseMapping extends TMappingType {
    output: Lowercase<this['input']>;
}
interface TUncapitalizeMapping extends TMappingType {
    output: Uncapitalize<this['input']>;
}
interface TUppercaseMapping extends TMappingType {
    output: Uppercase<this['input']>;
}
export type TCapitalizeAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TFromType<TCapitalizeMapping, Type> : TCapitalizeDeferred<Type>> = Result;
export declare function CapitalizeAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TCapitalizeAction<Type>;
export type TLowercaseAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TFromType<TLowercaseMapping, Type> : TLowercaseDeferred<Type>> = Result;
export declare function LowercaseAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TLowercaseAction<Type>;
export type TUncapitalizeAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TFromType<TUncapitalizeMapping, Type> : TUncapitalizeDeferred<Type>> = Result;
export declare function UncapitalizeAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TUncapitalizeAction<Type>;
export type TUppercaseAction<Type extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TFromType<TUppercaseMapping, Type> : TUppercaseDeferred<Type>> = Result;
export declare function UppercaseAction<Type extends TSchema>(type: Type, options: TSchemaOptions): TUppercaseAction<Type>;
export type TCapitalizeInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TCapitalizeAction<InstantiatedType>;
export declare function CapitalizeInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TCapitalizeInstantiate<Context, State, Type>;
export type TLowercaseInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TLowercaseAction<InstantiatedType>;
export declare function LowercaseInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TLowercaseInstantiate<Context, State, Type>;
export type TUncapitalizeInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TUncapitalizeAction<InstantiatedType>;
export declare function UncapitalizeInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TUncapitalizeInstantiate<Context, State, Type>;
export type TUppercaseInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TUppercaseAction<InstantiatedType>;
export declare function UppercaseInstantiate<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, type: Type, options: TSchemaOptions): TUppercaseInstantiate<Context, State, Type>;
export {};
