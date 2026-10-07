import { type TSchema } from '../../types/schema.mjs';
import { type TFromType } from './from_type.mjs';
export type TFromUnion<Types extends TSchema[], Result extends string[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromUnion<Right, [...Result, ...TFromType<Left>]> : Result);
export declare function FromUnion<Types extends TSchema[]>(types: [...Types]): TFromUnion<Types>;
