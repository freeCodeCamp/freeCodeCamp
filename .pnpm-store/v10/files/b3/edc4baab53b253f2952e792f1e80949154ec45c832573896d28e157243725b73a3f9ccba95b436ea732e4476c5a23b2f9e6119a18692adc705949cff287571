import { type TSchema } from './schema.mjs';
import { type TUnknown } from './unknown.mjs';
/** Represents a Generic parameter. */
export interface TParameter<Name extends string = string, Extends extends TSchema = TSchema, Equals extends TSchema = TSchema> extends TSchema {
    '~kind': 'Parameter';
    name: Name;
    extends: Extends;
    equals: Equals;
}
/** Creates a Parameter type. */
export declare function Parameter<Name extends string, Extends extends TSchema, Equals extends TSchema>(name: Name, extends_: Extends, equals: Equals): TParameter<Name, Extends, Equals>;
/** Creates a Parameter type. */
export declare function Parameter<Name extends string, Extends extends TSchema, Equals extends TSchema>(name: Name, extends_: Extends): TParameter<Name, Extends, Extends>;
/** Creates a Parameter type. */
export declare function Parameter<Name extends string>(name: Name): TParameter<Name, TUnknown, TUnknown>;
/** Returns true if the given value is TParameter. */
export declare function IsParameter(value: unknown): value is TParameter;
