// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Never } from '../../types/never.mjs';
import { Compare, ResultLeftInside, ResultRightInside, ResultEqual } from './compare.mjs';
export function Narrow(left, right) {
    const result = Compare(left, right);
    return (Guard.IsEqual(result, ResultLeftInside) ? left :
        Guard.IsEqual(result, ResultRightInside) ? right :
            Guard.IsEqual(result, ResultEqual) ? right :
                Never());
}
