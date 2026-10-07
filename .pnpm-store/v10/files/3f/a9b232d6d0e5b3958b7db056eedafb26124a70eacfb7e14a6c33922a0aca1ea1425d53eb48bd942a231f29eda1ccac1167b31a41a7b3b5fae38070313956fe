import type { XSchema } from '../types/schema.mjs';
import type { XStaticSchema } from './schema.mjs';
export type XStaticPatternProperties<Stack extends string[], Root extends XSchema, Properties extends Record<PropertyKey, XSchema> = Record<PropertyKey, XSchema>, InferredProperties extends Record<PropertyKey, unknown> = {
    [Key in keyof Properties]: XStaticSchema<Stack, Root, Properties[Key]>;
}, EvaluatedProperties extends unknown = {
    [key: string]: InferredProperties[keyof InferredProperties];
}> = EvaluatedProperties;
