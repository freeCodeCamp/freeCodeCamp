import { type TSchema } from '../../types/schema.mjs';
import { type TAny } from '../../types/any.mjs';
import { type TNever } from '../../types/never.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TCompare, ResultRightInside, ResultLeftInside, ResultEqual } from './compare.mjs';
import { type TFlatten } from './flatten.mjs';
import { type TEvaluateType } from './evaluate.mjs';
type TBroadFilter<Type extends TSchema, Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TCompare<Type, Left> extends typeof ResultRightInside ? TBroadFilter<Type, Right, [...Result]> : TBroadFilter<Type, Right, [...Result, Left]> : Result);
type TIsBroadestType<Type extends TSchema, Types extends TSchema[]> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TCompare<Type, Left> extends typeof ResultLeftInside | typeof ResultEqual ? false : TIsBroadestType<Type, Right> : true);
type TBroadenType<Type extends TSchema, Types extends TSchema[], Evaluated extends TSchema = TEvaluateType<Type>, Result extends TSchema[] = (Evaluated extends TAny ? [Evaluated] : TIsBroadestType<Evaluated, Types> extends true ? [...TBroadFilter<Evaluated, Types>, Evaluated] : Types)> = Result;
type TBroadenTypes<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? (Left extends TObject ? TBroadenTypes<Right, [...Result, Left]> : Left extends TNever ? TBroadenTypes<Right, Result> : TBroadenTypes<Right, TBroadenType<Left, Result>>) : Result);
export type TBroaden<Types extends TSchema[], Broadened extends TSchema[] = TBroadenTypes<Types>, Flattened extends TSchema[] = TFlatten<Broadened>, Result extends TSchema = (Flattened extends [] ? TNever : Flattened extends [infer Type extends TSchema] ? Type : TUnion<Flattened>)> = Result;
/** Broadens a set of types and returns either the most broad type, or union or disjoint types. */
export declare function Broaden<Types extends TSchema[]>(types: [...Types]): TBroaden<Types>;
export {};
