import { type TSchema } from '../../types/schema.mjs';
import { type TFromType } from './from_type.mjs';
import { type TEvaluateIntersect } from '../evaluate/evaluate.mjs';
export type TFromIntersect<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromIntersect<Right, [...Result, TFromType<Left>]> : TEvaluateIntersect<Result>);
export declare function FromIntersect<Types extends TSchema[]>(types: [...Types]): TFromIntersect<Types>;
