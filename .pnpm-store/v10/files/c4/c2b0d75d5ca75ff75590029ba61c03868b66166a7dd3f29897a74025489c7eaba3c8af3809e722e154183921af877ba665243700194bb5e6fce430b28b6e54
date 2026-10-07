type TTakeVariant<Variant extends string, Input extends string> = (Input extends `${Variant}${infer Rest extends string}` ? [Variant, Rest] : []);
/** Takes one of the given variants or fail */
export type TTake<Variants extends string[], Input extends string> = (Variants extends [infer ValueLeft extends string, ...infer ValueRight extends string[]] ? TTakeVariant<ValueLeft, Input> extends [infer Take extends string, infer Rest extends string] ? [Take, Rest] : TTake<ValueRight, Input> : []);
/** Takes one of the given variants or fail */
export declare function Take<Variants extends string[], Input extends string>(variants: [...Variants], input: Input): TTake<Variants, Input>;
export {};
