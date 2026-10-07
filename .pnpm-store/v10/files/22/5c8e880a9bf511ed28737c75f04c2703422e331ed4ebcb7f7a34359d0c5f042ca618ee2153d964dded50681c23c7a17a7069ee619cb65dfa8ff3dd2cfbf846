import { type TUnreachable } from '../../../system/unreachable/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TEvaluateUnion } from '../evaluate/evaluate.mjs';
import { type TFromType } from './from_type.mjs';
type TCollapseUnionProperties<Left extends TProperties, Right extends TProperties, SharedKeys extends PropertyKey = keyof Left & keyof Right, Result extends TProperties = {
    [Key in SharedKeys]: TEvaluateUnion<[Left[Key], Right[Key]]>;
}> = Result;
type TReduceVariants<Types extends TSchema[], Result extends TProperties> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TReduceVariants<Right, TCollapseUnionProperties<Result, TFromType<Left>>> : Result);
export type TFromUnion<Types extends TSchema[]> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TReduceVariants<Right, TFromType<Left>> : TUnreachable);
export declare function FromUnion<Types extends TSchema[]>(types: [...Types]): TFromUnion<Types>;
export {};
