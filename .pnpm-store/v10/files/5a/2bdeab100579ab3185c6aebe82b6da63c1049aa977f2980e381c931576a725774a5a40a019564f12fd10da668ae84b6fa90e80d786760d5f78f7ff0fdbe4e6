import { type TSchema } from '../../types/index.mjs';
import { type TLiteral } from '../../types/literal.mjs';
import { type TEvaluateUnionFast } from '../evaluate/evaluate.mjs';
export type TFromTuple<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [...infer Left extends TSchema[], infer _ extends TSchema] ? TFromTuple<Left, [TLiteral<Left['length']>, ...Result]> : TEvaluateUnionFast<Result>);
export declare function FromTuple<Types extends TSchema[]>(types: [...Types]): TFromTuple<Types>;
