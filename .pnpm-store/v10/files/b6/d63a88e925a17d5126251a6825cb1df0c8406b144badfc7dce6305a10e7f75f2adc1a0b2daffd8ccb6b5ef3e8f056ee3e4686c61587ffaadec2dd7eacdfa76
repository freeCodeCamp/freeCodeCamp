import { type TSchema } from '../../types/schema.mjs';
import { type TEvaluateIntersect } from '../evaluate/evaluate.mjs';
import { type TFromKey } from './from_key.mjs';
export type TFromIntersectKey<Types extends TSchema[], Value extends TSchema, EvaluatedKey extends TSchema = TEvaluateIntersect<Types>, Result extends TSchema = TFromKey<EvaluatedKey, Value>> = Result;
export declare function FromIntersectKey<Types extends TSchema[], Value extends TSchema>(types: [...Types], value: Value): TFromIntersectKey<Types, Value>;
