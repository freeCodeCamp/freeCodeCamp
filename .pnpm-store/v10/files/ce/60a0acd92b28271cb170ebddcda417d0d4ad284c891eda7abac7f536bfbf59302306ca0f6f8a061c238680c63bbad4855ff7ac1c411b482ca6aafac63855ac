// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
// ------------------------------------------------------------------
// Range
// ------------------------------------------------------------------
function Range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => String.fromCharCode(start + i));
}
export const Alpha = [
    ...Range(97, 122), // Lowercase
    ...Range(65, 90) // Uppercase
];
export const Zero = '0';
export const NonZero = Range(49, 57); // 1 - 9
export const Digit = [Zero, ...NonZero];
// ------------------------------------------------------------------
// Characters
// ------------------------------------------------------------------
export const WhiteSpace = ' ';
export const NewLine = '\n';
export const TabSpace = '\t';
export const UnderScore = '_';
export const Dot = '.';
export const DollarSign = '$';
export const Hyphen = '-';
// deno-coverage-ignore-stop
