// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { IsMatch } from './match.mjs';
import { IsEqual } from './guard.mjs';
function TakeVariant(variant, input) {
    return (IsEqual(input.indexOf(variant), 0)
        ? [variant, input.slice(variant.length)]
        : []);
}
/** Takes one of the given variants or fail */
export function Take(variants, input) {
    // ----------------------------------------------------------------
    // Symmetric
    // ----------------------------------------------------------------
    // return Guard.TakeLeft(variants, (valueLeft, valueRight) => 
    //   Match(TakeVariant(valueLeft, input), (take, rest) => 
    //     [take, rest],
    //     () => Take(valueRight, input)),
    //   () => []) as never
    // ----------------------------------------------------------------
    // Inline
    // ----------------------------------------------------------------
    for (let i = 0; i < variants.length; i++) {
        const result = TakeVariant(variants[i], input);
        if (IsMatch(result))
            return result;
    }
    return [];
}
// deno-coverage-ignore-stop
