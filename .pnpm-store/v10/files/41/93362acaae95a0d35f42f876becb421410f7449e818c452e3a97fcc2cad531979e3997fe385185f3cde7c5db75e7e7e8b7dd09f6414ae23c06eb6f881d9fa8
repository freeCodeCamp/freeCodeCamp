import { type TSchema } from '../../types/schema.mjs';
import { type TInfer } from '../../types/infer.mjs';
import { type TNever } from '../../types/never.mjs';
import { type TRest } from '../../types/rest.mjs';
import { type TRef } from '../../types/ref.mjs';
import { type TTuple } from '../../types/tuple.mjs';
type TSpreadElement<Type extends TSchema, Result extends TSchema[] = (Type extends TRest<infer Rest extends TSchema> ? (Rest extends TTuple<infer Elements extends TSchema[]> ? TRestSpread<Elements> : Rest extends TInfer<string, TSchema> ? [Type] : Rest extends TRef<string> ? [Type] : [
    TNever
]) : [Type])> = Result;
export type TRestSpread<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TRestSpread<Right, [...Result, ...TSpreadElement<Left>]> : Result);
export declare function RestSpread<Types extends TSchema[]>(types: [...Types]): TRestSpread<Types>;
export {};
