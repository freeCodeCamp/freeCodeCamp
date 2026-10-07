import { type TSchema } from '../../types/schema.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TFromType } from './from_type.mjs';
export type TFromUnion<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromUnion<Right, [...Result, TFromType<Left>]> : TUnion<Result>);
export declare function FromUnion<Types extends TSchema[]>(types: [...Types]): TFromUnion<Types>;
