import { Memory } from '../../../system/memory/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TFromType } from './from_type.mjs';
import { type TEvaluateIntersect } from '../evaluate/evaluate.mjs';
type TCollapseIntersectProperties<Left extends TProperties, Right extends TProperties, LeftKeys extends keyof Left = Exclude<keyof Left, keyof Right>, RightKeys extends keyof Right = Exclude<keyof Right, keyof Left>, SharedKeys extends keyof Left & keyof Right = Extract<keyof Left, keyof Right>, LeftProperties extends TProperties = {
    [Key in LeftKeys]: Left[Key];
}, RightProperties extends TProperties = {
    [Key in RightKeys]: Right[Key];
}, SharedProperties extends TProperties = {
    [Key in SharedKeys]: TEvaluateIntersect<[Left[Key], Right[Key]]>;
}, Unique extends TProperties = Memory.TAssign<LeftProperties, RightProperties>, Shared extends TProperties = Memory.TAssign<Unique, SharedProperties>> = Shared;
export type TFromIntersect<Types extends TSchema[], Result extends TProperties = {}> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromIntersect<Right, TCollapseIntersectProperties<Result, TFromType<Left>>> : {
    [Key in keyof Result]: Result[Key];
});
export declare function FromIntersect<Types extends TSchema[]>(types: [...Types]): TFromIntersect<Types>;
export {};
