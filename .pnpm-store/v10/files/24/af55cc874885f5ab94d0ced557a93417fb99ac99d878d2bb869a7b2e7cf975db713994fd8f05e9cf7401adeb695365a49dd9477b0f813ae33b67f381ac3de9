import { type TSchema } from '../../types/schema.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TMappingType, type TMappingFunc } from './mapping.mjs';
import { type TFromType } from './from_type.mjs';
export type TFromUnion<Mapping extends TMappingType, Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromUnion<Mapping, Right, [...Result, TFromType<Mapping, Left>]> : TUnion<Result>);
export declare function FromUnion(mapping: TMappingFunc, types: TSchema[]): TSchema;
