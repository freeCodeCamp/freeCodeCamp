import type { TProperties, TSchema, Static } from '../../type/index.mjs';
/**
 * Repairs a value to match the provided type. This function is intended for data migration
 * scenarios where existing values need to be migrating to an updated type. This function will
 * repair partially mismatched values by populating missing sub-properties and elements with
 * default structures derived from the type. If the value already conforms to the type, no
 * action is performed.
 */
export declare function Repair<const Type extends TSchema>(type: Type, value: unknown): Static<Type>;
/**
 * Repairs a value to match the provided type. This function is intended for data migration
 * scenarios where existing values need to be migrating to an updated type. This function will
 * repair partially mismatched values by populating missing sub-properties and elements with
 * default structures derived from the type. If the value already conforms to the type, no
 * action is performed.
 */
export declare function Repair<Context extends TProperties, const Type extends TSchema>(context: Context, type: Type, value: unknown): Static<Type, Context>;
