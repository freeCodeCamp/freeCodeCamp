// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { IsUnknown } from '../../types/unknown.mjs';
import { Extends, ExtendsResult } from "../../extends/index.mjs";
// ------------------------------------------------------------------
// TCompare
// ------------------------------------------------------------------
export const ResultEqual = 'equal';
export const ResultDisjoint = 'disjoint';
export const ResultLeftInside = 'left-inside';
export const ResultRightInside = 'right-inside';
/** Compares left and right types and determines their set relationship. */
export function Compare(left, right) {
    const extendsCheck = [
        IsUnknown(left) ? ExtendsResult.ExtendsFalse() : Extends({}, left, right),
        IsUnknown(left) ? ExtendsResult.ExtendsTrue({}) : Extends({}, right, left),
    ];
    return (ExtendsResult.IsExtendsTrueLike(extendsCheck[0]) && ExtendsResult.IsExtendsTrueLike(extendsCheck[1]) ? ResultEqual :
        ExtendsResult.IsExtendsTrueLike(extendsCheck[0]) && ExtendsResult.IsExtendsFalse(extendsCheck[1]) ? ResultLeftInside :
            ExtendsResult.IsExtendsFalse(extendsCheck[0]) && ExtendsResult.IsExtendsTrueLike(extendsCheck[1]) ? ResultRightInside :
                ResultDisjoint);
}
