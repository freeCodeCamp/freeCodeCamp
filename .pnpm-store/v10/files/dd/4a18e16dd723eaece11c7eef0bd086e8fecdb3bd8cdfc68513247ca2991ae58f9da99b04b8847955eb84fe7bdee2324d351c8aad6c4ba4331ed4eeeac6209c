import { type TSchema } from '../../types/schema.mjs';
import { type TEvaluateIntersect } from '../evaluate/evaluate.mjs';
import { type TFromType } from './from_type.mjs';
export type TFromIntersect<Types extends TSchema[], Evaluated extends TSchema = TEvaluateIntersect<Types>, Result extends string[] = TFromType<Evaluated>> = Result;
export declare function FromIntersect<Types extends TSchema[]>(types: [...Types]): TFromIntersect<Types>;
