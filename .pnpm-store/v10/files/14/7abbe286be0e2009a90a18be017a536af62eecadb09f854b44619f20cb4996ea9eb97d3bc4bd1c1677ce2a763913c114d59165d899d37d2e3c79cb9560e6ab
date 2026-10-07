import { type TSchema } from '../../types/index.mjs';
import { type TUnknown } from '../../types/unknown.mjs';
import { type TExtends, ExtendsResult } from "../../extends/index.mjs";
export declare const ResultEqual = "equal";
export declare const ResultDisjoint = "disjoint";
export declare const ResultLeftInside = "left-inside";
export declare const ResultRightInside = "right-inside";
export type TCompareResult = typeof ResultEqual | typeof ResultDisjoint | typeof ResultLeftInside | typeof ResultRightInside;
/** Compares left and right types and determines their set relationship */
export type TCompare<Left extends TSchema, Right extends TSchema, Extends extends [ExtendsResult.TResult, ExtendsResult.TResult] = [
    Left extends TUnknown ? ExtendsResult.TExtendsFalse : TExtends<{}, Left, Right>,
    Left extends TUnknown ? ExtendsResult.TExtendsTrue : TExtends<{}, Right, Left>
]> = (Extends extends [ExtendsResult.TExtendsTrueLike, ExtendsResult.TExtendsTrueLike] ? typeof ResultEqual : Extends extends [ExtendsResult.TExtendsTrueLike, ExtendsResult.TExtendsFalse] ? typeof ResultLeftInside : Extends extends [ExtendsResult.TExtendsFalse, ExtendsResult.TExtendsTrueLike] ? typeof ResultRightInside : typeof ResultDisjoint);
/** Compares left and right types and determines their set relationship. */
export declare function Compare<Left extends TSchema, Right extends TSchema>(left: Left, right: Right): TCompare<Left, Right>;
