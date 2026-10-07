type XCanonicalTuple<Value extends readonly unknown[]> = (Value extends [infer Left, ...infer Right extends unknown[]] ? [XCanonical<Left>, ...XCanonicalTuple<Right>] : []);
type XCanonicalArray<Value extends unknown, Result extends unknown[] = XCanonical<Value>[]> = Result;
type XCanonicalObject<Value extends object, Result extends Record<PropertyKey, unknown> = {
    -readonly [Key in keyof Value]: XCanonical<Value[Key]>;
}> = Result;
export type XCanonical<Schema extends unknown> = (Schema extends readonly [...infer Schemas extends unknown[]] ? XCanonicalTuple<Schemas> : Schema extends readonly (infer Schema)[] ? XCanonicalArray<Schema> : Schema extends object ? XCanonicalObject<Schema> : Schema);
export {};
