import { type TSchema } from '../types/schema.mjs';
import { type TUnknown } from '../types/unknown.mjs';
/** Represents an Infer instruction. */
export interface TInfer<Name extends string = string, Extends extends TSchema = TSchema> extends TSchema {
    '~kind': 'Infer';
    type: 'infer';
    name: Name;
    extends: Extends;
}
/** Creates an Infer instruction. */
export declare function Infer<Name extends string, Extends extends TSchema>(name: Name, extends_: Extends): TInfer<Name, Extends>;
/** Creates an Infer instruction. */
export declare function Infer<Name extends string>(name: Name): TInfer<Name, TUnknown>;
/** Returns true if the given value is TInfer. */
export declare function IsInfer(value: unknown): value is TInfer;
