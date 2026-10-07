import { type TEnumValue } from '../../types/enum.mjs';
import { type TUnionToTuple } from '../helpers/union.mjs';
export type TTypeScriptEnumLike = Record<PropertyKey, TEnumValue>;
export declare function IsTypeScriptEnumLike(value: unknown): value is TTypeScriptEnumLike;
type TReduceEnumValues<Keys extends string[], Type extends TTypeScriptEnumLike, Result extends TEnumValue[] = []> = (Keys extends [infer Left extends string, ...infer Right extends string[]] ? TReduceEnumValues<Right, Type, [...Result, Type[Left]]> : Result);
export type TTypeScriptEnumToEnumValues<Type extends TTypeScriptEnumLike, EnumKeys extends string[] = TUnionToTuple<Extract<keyof Type, string>>, Elements extends TEnumValue[] = TReduceEnumValues<EnumKeys, Type>> = Elements;
export declare function TypeScriptEnumToEnumValues<Type extends TTypeScriptEnumLike>(type: Type): TTypeScriptEnumToEnumValues<Type>;
export {};
