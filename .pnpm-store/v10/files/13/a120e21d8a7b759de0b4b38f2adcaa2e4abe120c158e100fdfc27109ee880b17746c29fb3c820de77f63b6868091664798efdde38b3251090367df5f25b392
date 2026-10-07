import { type TSchema } from '../../types/schema.mjs';
import { type TUnion } from '../../types/union.mjs';
type TFlattenType<Type extends TSchema, Result extends TSchema[] = Type extends TUnion<infer Types extends TSchema[]> ? TFlatten<Types> : [Type]> = Result;
export type TFlatten<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFlatten<Right, [...Result, ...TFlattenType<Left>]> : Result);
export declare function Flatten<Types extends TSchema[]>(types: [...Types]): TFlatten<Types>;
export {};
