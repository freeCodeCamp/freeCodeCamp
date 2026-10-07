import { type TSchema } from '../types/schema.mjs';
/** Represents a Identifier. */
export interface TIdentifier<Name extends string = string> extends TSchema {
    '~kind': 'Identifier';
    type: 'identifier';
    name: Name;
}
/** Creates an Identifier. */
export declare function Identifier<Name extends string>(name: Name): TIdentifier<Name>;
/** Returns true if the given value is a TIdentifier. */
export declare function IsIdentifier(value: unknown): value is TIdentifier;
