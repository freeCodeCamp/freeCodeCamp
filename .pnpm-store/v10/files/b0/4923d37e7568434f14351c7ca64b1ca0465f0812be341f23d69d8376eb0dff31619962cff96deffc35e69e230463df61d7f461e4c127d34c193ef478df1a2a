import { type TSchema } from '../../types/schema.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TTuple } from '../../types/tuple.mjs';
import { type TComposite } from './composite.mjs';
import { type TNarrow } from './narrow.mjs';
import { type TEvaluateType } from './evaluate.mjs';
import { type TEvaluateIntersect } from './evaluate.mjs';
type TIsObjectLike<Type extends TSchema> = Type extends TObject | TTuple ? true : false;
type TIsUnionOperand<Left extends TSchema, Right extends TSchema, IsUnionLeft extends boolean = Left extends TUnion ? true : false, IsUnionRight extends boolean = Right extends TUnion ? true : false, Result extends boolean = IsUnionLeft extends true ? true : IsUnionRight extends true ? true : false> = Result;
type TDistributeOperation<Left extends TSchema, Right extends TSchema, EvaluatedLeft extends TSchema = TEvaluateType<Left>, EvaluatedRight extends TSchema = TEvaluateType<Right>, IsUnionOperand extends boolean = TIsUnionOperand<EvaluatedLeft, EvaluatedRight>, IsObjectLeft extends boolean = TIsObjectLike<EvaluatedLeft>, IsObjectRight extends boolean = TIsObjectLike<EvaluatedRight>, Result extends TSchema = ([
    IsUnionOperand
] extends [true] ? TEvaluateIntersect<[EvaluatedLeft, EvaluatedRight]> : [
    IsObjectLeft,
    IsObjectRight
] extends [true, true] ? TComposite<EvaluatedLeft, EvaluatedRight> : [
    IsObjectLeft,
    IsObjectRight
] extends [true, false] ? EvaluatedLeft : [
    IsObjectLeft,
    IsObjectRight
] extends [false, true] ? EvaluatedRight : TNarrow<EvaluatedLeft, EvaluatedRight>)> = Result;
type TDistributeType<Type extends TSchema, Distribution extends TSchema[], Result extends TSchema[] = []> = (Distribution extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TDistributeType<Type, Right, [...Result, TDistributeOperation<Type, Left>]> : Result extends [] ? [Type] : Result);
type TDistributeUnion<Types extends TSchema[], Distribution extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TDistributeUnion<Right, Distribution, [...Result, ...TDistribute<[Left], Distribution>]> : Result);
export type TDistribute<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? Left extends TUnion<infer UnionTypes extends TSchema[]> ? TDistribute<Right, TDistributeUnion<UnionTypes, Result>> : TDistribute<Right, TDistributeType<Left, Result>> : Result);
export declare function Distribute<Types extends TSchema[]>(types: [...Types], result?: TSchema[]): TDistribute<Types>;
export {};
